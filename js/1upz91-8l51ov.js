(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33332,
  (e) => {
    "use strict";
    let t = function (e, ...t) {
      let n = new URL("https://base-ui.com/production-error");
      return (
        n.searchParams.set("code", e.toString()),
        t.forEach((e) => n.searchParams.append("args[]", e)),
        `Base UI error #${e}; visit ${n} for the full message.`
      );
    };
    e.s(["default", 0, t]);
  },
  88940,
  (e) => {
    "use strict";
    var t = e.i(71645);
    let n = {};
    e.s([
      "useRefWithInit",
      0,
      function (e, r) {
        let o = t.useRef(n);
        return (o.current === n && (o.current = e(r)), o);
      },
    ]);
  },
  28918,
  58321,
  78554,
  (e) => {
    "use strict";
    var t = e.i(88940);
    function n() {
      return { callback: null, cleanup: null, refs: [] };
    }
    function r(e, t) {
      if (((e.refs = t), t.every((e) => null == e))) {
        e.callback = null;
        return;
      }
      e.callback = (n) => {
        if ((e.cleanup && (e.cleanup(), (e.cleanup = null)), null != n)) {
          let r = Array(t.length).fill(null);
          for (let e = 0; e < t.length; e += 1) {
            let o = t[e];
            if (null != o)
              switch (typeof o) {
                case "function": {
                  let t = o(n);
                  "function" == typeof t && (r[e] = t);
                  break;
                }
                case "object":
                  o.current = n;
              }
          }
          e.cleanup = () => {
            for (let e = 0; e < t.length; e += 1) {
              let n = t[e];
              if (null != n)
                switch (typeof n) {
                  case "function": {
                    let t = r[e];
                    "function" == typeof t ? t() : n(null);
                    break;
                  }
                  case "object":
                    n.current = null;
                }
            }
          };
        }
      };
    }
    e.s(
      [
        "useMergedRefs",
        0,
        function (e, o, i, l) {
          var s, a, u, c, d;
          let f = (0, t.useRefWithInit)(n).current;
          return (
            (s = f),
            (a = e),
            (u = o),
            (c = i),
            (d = l),
            (s.refs[0] !== a ||
              s.refs[1] !== u ||
              s.refs[2] !== c ||
              s.refs[3] !== d) &&
              r(f, [e, o, i, l]),
            f.callback
          );
        },
        "useMergedRefsN",
        0,
        function (e) {
          var o, i;
          let l = (0, t.useRefWithInit)(n).current;
          return (
            (o = l),
            (i = e),
            (o.refs.length !== i.length || o.refs.some((e, t) => e !== i[t])) &&
              r(l, e),
            l.callback
          );
        },
      ],
      28918,
    );
    var o = e.i(71645);
    let i = parseInt(o.version, 10);
    function l(e) {
      return i >= e;
    }
    (e.s(["isReactVersionAtLeast", 0, l], 58321),
      e.s(
        [
          "getReactElementRef",
          0,
          function (e) {
            if (!o.isValidElement(e)) return null;
            let t = e.props;
            return (l(19) ? t?.ref : e.ref) ?? null;
          },
        ],
        78554,
      ));
  },
  35241,
  (e) => {
    "use strict";
    e.s([
      "mergeObjects",
      0,
      function (e, t) {
        return e && !t ? e : !e && t ? t : e || t ? { ...e, ...t } : void 0;
      },
    ]);
  },
  99627,
  56789,
  16919,
  9835,
  77570,
  (e) => {
    "use strict";
    (e.i(47167), e.s(["warn", 0, function () {}], 99627));
    let t = Object.freeze([]),
      n = Object.freeze({});
    (e.s(
      ["EMPTY_ARRAY", 0, t, "EMPTY_OBJECT", 0, n, "NOOP", 0, function () {}],
      56789,
    ),
      e.s(
        [
          "getStateAttributesProps",
          0,
          function (e, t) {
            let n = {};
            for (let r in e) {
              let o = e[r];
              if (t?.hasOwnProperty(r)) {
                let e = t[r](o);
                null != e && Object.assign(n, e);
                continue;
              }
              !0 === o
                ? (n[`data-${r.toLowerCase()}`] = "")
                : o && (n[`data-${r.toLowerCase()}`] = o.toString());
            }
            return n;
          },
        ],
        16919,
      ),
      e.s(
        [
          "resolveClassName",
          0,
          function (e, t) {
            return "function" == typeof e ? e(t) : e;
          },
        ],
        9835,
      ),
      e.s(
        [
          "resolveStyle",
          0,
          function (e, t) {
            return "function" == typeof e ? e(t) : e;
          },
        ],
        77570,
      ));
  },
  76782,
  (e) => {
    "use strict";
    var t = e.i(35241);
    let n = {};
    function r(e) {
      return l(e)
        ? { ...s(e, n) }
        : (function (e) {
            let t = { ...e };
            for (let e in t) {
              let n = t[e];
              i(e, n) && (t[e] = a(n));
            }
            return t;
          })(e);
    }
    function o(e, n) {
      return l(n)
        ? s(n, e)
        : (function (e, n) {
            if (!n) return e;
            for (let r in n) {
              let o = n[r];
              switch (r) {
                case "style":
                  e[r] = (0, t.mergeObjects)(e.style, o);
                  break;
                case "className":
                  e[r] = c(e.className, o);
                  break;
                default:
                  i(r, o)
                    ? (e[r] = (function (e, t) {
                        return t
                          ? e
                            ? (...n) => {
                                let r = n[0];
                                if (d(r)) {
                                  u(r);
                                  let o = t(...n);
                                  return (
                                    r.baseUIHandlerPrevented || e?.(...n),
                                    o
                                  );
                                }
                                let o = t(...n);
                                return (e?.(...n), o);
                              }
                            : a(t)
                          : e;
                      })(e[r], o))
                    : (e[r] = o);
              }
            }
            return e;
          })(e, n);
    }
    function i(e, t) {
      let n = e.charCodeAt(0),
        r = e.charCodeAt(1),
        o = e.charCodeAt(2);
      return (
        111 === n &&
        110 === r &&
        o >= 65 &&
        o <= 90 &&
        ("function" == typeof t || void 0 === t)
      );
    }
    function l(e) {
      return "function" == typeof e;
    }
    function s(e, t) {
      return l(e) ? e(t) : (e ?? n);
    }
    function a(e) {
      return e
        ? (...t) => {
            let n = t[0];
            return (d(n) && u(n), e(...t));
          }
        : e;
    }
    function u(e) {
      return (
        (e.preventBaseUIHandler = () => {
          e.baseUIHandlerPrevented = !0;
        }),
        e
      );
    }
    function c(e, t) {
      return t ? (e ? t + " " + e : t) : e;
    }
    function d(e) {
      return null != e && "object" == typeof e && "nativeEvent" in e;
    }
    e.s([
      "makeEventPreventable",
      0,
      u,
      "mergeClassNames",
      0,
      c,
      "mergeProps",
      0,
      function (e, t, n, i, l) {
        if (!n && !i && !l && !e) return r(t);
        let s = r(e);
        return (
          t && (s = o(s, t)),
          n && (s = o(s, n)),
          i && (s = o(s, i)),
          l && (s = o(s, l)),
          s
        );
      },
      "mergePropsN",
      0,
      function (e) {
        if (0 === e.length) return n;
        if (1 === e.length) return r(e[0]);
        let t = r(e[0]);
        for (let n = 1; n < e.length; n += 1) t = o(t, e[n]);
        return t;
      },
    ]);
  },
  52245,
  (e) => {
    "use strict";
    var t = e.i(33332),
      n = e.i(71645),
      r = e.i(28918),
      o = e.i(78554),
      i = e.i(35241);
    e.i(99627);
    var l = e.i(56789),
      s = e.i(16919),
      a = e.i(9835),
      u = e.i(77570),
      c = e.i(76782);
    let d = Symbol.for("react.lazy");
    e.s([
      "useRenderElement",
      0,
      function (e, f, p = {}) {
        let m = f.render,
          g = (function (e, t = {}) {
            var n;
            let { className: d, style: f, render: p } = e,
              {
                state: m = l.EMPTY_OBJECT,
                ref: g,
                props: h,
                stateAttributesMapping: b,
                enabled: v = !0,
              } = t,
              y = v ? (0, a.resolveClassName)(d, m) : void 0,
              E = v ? (0, u.resolveStyle)(f, m) : void 0,
              w = v ? (0, s.getStateAttributesProps)(m, b) : l.EMPTY_OBJECT,
              x =
                v && h
                  ? Array.isArray((n = h))
                    ? (0, c.mergePropsN)(n)
                    : (0, c.mergeProps)(void 0, n)
                  : void 0,
              S = v ? ((0, i.mergeObjects)(w, x) ?? {}) : l.EMPTY_OBJECT;
            return ("u" > typeof document &&
              (v
                ? Array.isArray(g)
                  ? (S.ref = (0, r.useMergedRefsN)([
                      S.ref,
                      (0, o.getReactElementRef)(p),
                      ...g,
                    ]))
                  : (S.ref = (0, r.useMergedRefs)(
                      S.ref,
                      (0, o.getReactElementRef)(p),
                      g,
                    ))
                : (0, r.useMergedRefs)(null, null)),
            v)
              ? (void 0 !== y &&
                  (S.className = (0, c.mergeClassNames)(S.className, y)),
                void 0 !== E && (S.style = (0, i.mergeObjects)(S.style, E)),
                S)
              : l.EMPTY_OBJECT;
          })(f, p);
        return !1 === p.enabled
          ? null
          : (function (e, r, o, i) {
              if (r) {
                if ("function" == typeof r) return r(o, i);
                let e = (0, c.mergeProps)(o, r.props);
                e.ref = o.ref;
                let t = r;
                return (
                  t?.$$typeof === d && (t = n.Children.toArray(r)[0]),
                  n.cloneElement(t, e)
                );
              }
              if (e && "string" == typeof e) {
                var l, s;
                return (
                  (l = e),
                  (s = o),
                  "button" === l
                    ? (0, n.createElement)("button", {
                        type: "button",
                        ...s,
                        key: s.key,
                      })
                    : "img" === l
                      ? (0, n.createElement)("img", {
                          alt: "",
                          ...s,
                          key: s.key,
                        })
                      : n.createElement(l, s)
                );
              }
              throw Error((0, t.default)(8));
            })(e, m, g, p.state ?? l.EMPTY_OBJECT);
      },
    ]);
  },
  9407,
  (e) => {
    "use strict";
    var t;
    let n =
        (((t = {}).startingStyle = "data-starting-style"),
        (t.endingStyle = "data-ending-style"),
        t),
      r = { [n.startingStyle]: "" },
      o = { [n.endingStyle]: "" };
    e.s([
      "TransitionStatusDataAttributes",
      0,
      n,
      "transitionStatusMapping",
      0,
      {
        transitionStatus: (e) =>
          "starting" === e ? r : "ending" === e ? o : null,
      },
    ]);
  },
  5005,
  (e) => {
    "use strict";
    var t,
      n,
      r = e.i(9407);
    let o =
        (((t = {}).open = "data-open"),
        (t.closed = "data-closed"),
        (t[(t.startingStyle = r.TransitionStatusDataAttributes.startingStyle)] =
          "startingStyle"),
        (t[(t.endingStyle = r.TransitionStatusDataAttributes.endingStyle)] =
          "endingStyle"),
        (t.anchorHidden = "data-anchor-hidden"),
        (t.side = "data-side"),
        (t.align = "data-align"),
        t),
      i =
        (((n = {}).popupOpen = "data-popup-open"),
        (n.pressed = "data-pressed"),
        n),
      l = { [i.popupOpen]: "" },
      s = { [i.popupOpen]: "", [i.pressed]: "" },
      a = { [o.open]: "" },
      u = { [o.closed]: "" },
      c = { [o.anchorHidden]: "" };
    e.s([
      "CommonPopupDataAttributes",
      0,
      o,
      "popupStateMapping",
      0,
      { open: (e) => (e ? a : u), anchorHidden: (e) => (e ? c : null) },
      "pressableTriggerOpenStateMapping",
      0,
      { open: (e) => (e ? s : null) },
      "triggerOpenStateMapping",
      0,
      { open: (e) => (e ? l : null) },
    ]);
  },
  56434,
  (e) => {
    "use strict";
    e.s(
      [
        "cancelOpen",
        0,
        "cancel-open",
        "chipRemovePress",
        0,
        "chip-remove-press",
        "clearPress",
        0,
        "clear-press",
        "closePress",
        0,
        "close-press",
        "closeWatcher",
        0,
        "close-watcher",
        "decrementPress",
        0,
        "decrement-press",
        "disabled",
        0,
        "disabled",
        "drag",
        0,
        "drag",
        "escapeKey",
        0,
        "escape-key",
        "focusOut",
        0,
        "focus-out",
        "imperativeAction",
        0,
        "imperative-action",
        "incrementPress",
        0,
        "increment-press",
        "initial",
        0,
        "initial",
        "inputBlur",
        0,
        "input-blur",
        "inputChange",
        0,
        "input-change",
        "inputClear",
        0,
        "input-clear",
        "inputPaste",
        0,
        "input-paste",
        "inputPress",
        0,
        "input-press",
        "itemPress",
        0,
        "item-press",
        "keyboard",
        0,
        "keyboard",
        "linkPress",
        0,
        "link-press",
        "listNavigation",
        0,
        "list-navigation",
        "missing",
        0,
        "missing",
        "none",
        0,
        "none",
        "outsidePress",
        0,
        "outside-press",
        "pointer",
        0,
        "pointer",
        "scrub",
        0,
        "scrub",
        "siblingOpen",
        0,
        "sibling-open",
        "swipe",
        0,
        "swipe",
        "trackPress",
        0,
        "track-press",
        "triggerFocus",
        0,
        "trigger-focus",
        "triggerHover",
        0,
        "trigger-hover",
        "triggerPress",
        0,
        "trigger-press",
        "wheel",
        0,
        "wheel",
        "windowResize",
        0,
        "window-resize",
      ],
      16856,
    );
    var t = e.i(16856);
    e.s(["REASONS", 0, t], 56434);
  },
  29315,
  (e) => {
    "use strict";
    let t;
    function n() {
      return "u" > typeof window;
    }
    function r(e) {
      return l(e) ? (e.nodeName || "").toLowerCase() : "#document";
    }
    function o(e) {
      var t;
      return (
        (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) ||
        window
      );
    }
    function i(e) {
      var t;
      return null ==
        (t = (l(e) ? e.ownerDocument : e.document) || window.document)
        ? void 0
        : t.documentElement;
    }
    function l(e) {
      return !!n() && (e instanceof Node || e instanceof o(e).Node);
    }
    function s(e) {
      return !!n() && (e instanceof Element || e instanceof o(e).Element);
    }
    function a(e) {
      return (
        !!n() && (e instanceof HTMLElement || e instanceof o(e).HTMLElement)
      );
    }
    function u(e) {
      return (
        !(!n() || "u" < typeof ShadowRoot) &&
        (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot)
      );
    }
    function c(e) {
      let { overflow: t, overflowX: n, overflowY: r, display: o } = v(e);
      return (
        /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
        "inline" !== o &&
        "contents" !== o
      );
    }
    function d(e) {
      try {
        if (e.matches(":popover-open")) return !0;
      } catch (e) {}
      try {
        return e.matches(":modal");
      } catch (e) {
        return !1;
      }
    }
    let f = /transform|translate|scale|rotate|perspective|filter/,
      p = /paint|layout|strict|content/,
      m = (e) => !!e && "none" !== e;
    function g(e) {
      let t = s(e) ? v(e) : e;
      return (
        m(t.transform) ||
        m(t.translate) ||
        m(t.scale) ||
        m(t.rotate) ||
        m(t.perspective) ||
        (!h() && (m(t.backdropFilter) || m(t.filter))) ||
        f.test(t.willChange || "") ||
        p.test(t.contain || "")
      );
    }
    function h() {
      return (
        null == t &&
          (t =
            "u" > typeof CSS &&
            CSS.supports &&
            CSS.supports("-webkit-backdrop-filter", "none")),
        t
      );
    }
    function b(e) {
      return /^(html|body|#document)$/.test(r(e));
    }
    function v(e) {
      return o(e).getComputedStyle(e);
    }
    function y(e) {
      if ("html" === r(e)) return e;
      let t = e.assignedSlot || e.parentNode || (u(e) && e.host) || i(e);
      return u(t) ? t.host : t;
    }
    function E(e) {
      return e.parent && Object.getPrototypeOf(e.parent)
        ? e.frameElement
        : null;
    }
    e.s([
      "getComputedStyle",
      0,
      v,
      "getContainingBlock",
      0,
      function (e) {
        let t = y(e);
        for (; a(t) && !b(t); ) {
          if (g(t)) return t;
          if (d(t)) break;
          t = y(t);
        }
        return null;
      },
      "getDocumentElement",
      0,
      i,
      "getFrameElement",
      0,
      E,
      "getNodeName",
      0,
      r,
      "getNodeScroll",
      0,
      function (e) {
        return s(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      },
      "getOverflowAncestors",
      0,
      function e(t, n, r) {
        var i;
        (void 0 === n && (n = []), void 0 === r && (r = !0));
        let l = (function e(t) {
            let n = y(t);
            return b(n) ? (t.ownerDocument || t).body : a(n) && c(n) ? n : e(n);
          })(t),
          s = l === (null == (i = t.ownerDocument) ? void 0 : i.body),
          u = o(l);
        if (!s) return n.concat(l, e(l, [], r));
        {
          let t = E(u);
          return n.concat(
            u,
            u.visualViewport || [],
            c(l) ? l : [],
            t && r ? e(t) : [],
          );
        }
      },
      "getParentNode",
      0,
      y,
      "getWindow",
      0,
      o,
      "isContainingBlock",
      0,
      g,
      "isElement",
      0,
      s,
      "isHTMLElement",
      0,
      a,
      "isLastTraversableNode",
      0,
      b,
      "isNode",
      0,
      l,
      "isOverflowElement",
      0,
      c,
      "isShadowRoot",
      0,
      u,
      "isTableElement",
      0,
      function (e) {
        return /^(table|td|th)$/.test(r(e));
      },
      "isTopLayer",
      0,
      d,
      "isWebKit",
      0,
      h,
    ]);
  },
  14553,
  (e) => {
    "use strict";
    let t = { ...e.i(71645) };
    e.s(["SafeReact", 0, t]);
  },
  67865,
  46376,
  (e) => {
    "use strict";
    e.i(47167);
    var t = e.i(14553),
      n = e.i(88940);
    let r = t.SafeReact.useInsertionEffect,
      o = r && r !== t.SafeReact.useLayoutEffect ? r : (e) => e();
    function i() {
      let e = {
        next: void 0,
        callback: l,
        trampoline: (...t) => e.callback?.(...t),
        effect: () => {
          e.callback = e.next;
        },
      };
      return e;
    }
    function l() {}
    e.s(
      [
        "useStableCallback",
        0,
        function (e) {
          let t = (0, n.useRefWithInit)(i).current;
          return ((t.next = e), o(t.effect), t.trampoline);
        },
      ],
      67865,
    );
    var s = e.i(71645);
    let a = "u" > typeof document ? s.useLayoutEffect : () => {};
    e.s(["useIsoLayoutEffect", 0, a], 46376);
  },
  40886,
  38452,
  (e) => {
    "use strict";
    e.i(47167);
    var t = e.i(71645),
      n = e.i(29315),
      r = e.i(67865),
      o = e.i(46376),
      i = e.i(76782),
      l = e.i(33332);
    let s = t.createContext(void 0);
    function a(e = !1) {
      let n = t.useContext(s);
      if (void 0 === n && !e) throw Error((0, l.default)(16));
      return n;
    }
    function u(e) {
      return (0, n.isHTMLElement)(e) && "BUTTON" === e.tagName;
    }
    (e.s(["useCompositeRootContext", 0, a], 38452),
      e.s(
        [
          "useButton",
          0,
          function (e = {}) {
            let {
                disabled: n = !1,
                focusableWhenDisabled: l,
                tabIndex: s = 0,
                native: c = !0,
                composite: d,
              } = e,
              f = t.useRef(null),
              p = a(!0),
              m = d ?? void 0 !== p,
              { props: g } = (function (e) {
                let {
                    focusableWhenDisabled: n,
                    disabled: r,
                    composite: o = !1,
                    tabIndex: i = 0,
                    isNativeButton: l,
                  } = e,
                  s = o && !1 !== n,
                  a = o && !1 === n;
                return {
                  props: t.useMemo(() => {
                    let e = {
                      onKeyDown(e) {
                        r && n && "Tab" !== e.key && e.preventDefault();
                      },
                    };
                    return (
                      o ||
                        ((e.tabIndex = i),
                        !l && r && (e.tabIndex = n ? i : -1)),
                      ((l && (n || s)) || (!l && r)) &&
                        (e["aria-disabled"] = r),
                      l && (!n || a) && (e.disabled = r),
                      e
                    );
                  }, [o, r, n, s, a, l, i]),
                };
              })({
                focusableWhenDisabled: l,
                disabled: n,
                composite: m,
                tabIndex: s,
                isNativeButton: c,
              }),
              h = t.useCallback(() => {
                let e = f.current;
                u(e) &&
                  m &&
                  n &&
                  void 0 === g.disabled &&
                  e.disabled &&
                  (e.disabled = !1);
              }, [n, g.disabled, m]);
            return (
              (0, o.useIsoLayoutEffect)(h, [h]),
              {
                getButtonProps: t.useCallback(
                  (e = {}) => {
                    let {
                      onClick: t,
                      onMouseDown: r,
                      onKeyUp: o,
                      onKeyDown: l,
                      onPointerDown: s,
                      ...a
                    } = e;
                    return (0, i.mergeProps)(
                      {
                        onClick(e) {
                          n ? e.preventDefault() : t?.(e);
                        },
                        onMouseDown(e) {
                          n || r?.(e);
                        },
                        onKeyDown(e) {
                          var r;
                          if (
                            n ||
                            ((0, i.makeEventPreventable)(e),
                            l?.(e),
                            e.baseUIHandlerPrevented)
                          )
                            return;
                          let o = e.target === e.currentTarget,
                            s = e.currentTarget,
                            a = u(s),
                            d =
                              !c &&
                              ((r = s), !!(r?.tagName === "A" && r?.href)),
                            f = o && (c ? a : !d),
                            p = "Enter" === e.key,
                            g = " " === e.key,
                            h = s.getAttribute("role"),
                            b =
                              h?.startsWith("menuitem") ||
                              "option" === h ||
                              "gridcell" === h;
                          if (o && m && g) {
                            if (e.defaultPrevented && b) return;
                            (e.preventDefault(),
                              d || (c && a)
                                ? (s.click(), e.preventBaseUIHandler())
                                : f && (t?.(e), e.preventBaseUIHandler()));
                            return;
                          }
                          f &&
                            (!c && (g || p) && e.preventDefault(),
                            !c && p && t?.(e));
                        },
                        onKeyUp(e) {
                          n ||
                            (((0, i.makeEventPreventable)(e),
                            o?.(e),
                            e.target === e.currentTarget &&
                              c &&
                              m &&
                              u(e.currentTarget) &&
                              " " === e.key)
                              ? e.preventDefault()
                              : !e.baseUIHandlerPrevented &&
                                (e.target !== e.currentTarget ||
                                  c ||
                                  m ||
                                  " " !== e.key ||
                                  t?.(e)));
                        },
                        onPointerDown(e) {
                          n ? e.preventDefault() : s?.(e);
                        },
                      },
                      c ? { type: "button" } : { role: "button" },
                      g,
                      a,
                    );
                  },
                  [n, g, m, c],
                ),
                buttonRef: (0, r.useStableCallback)((e) => {
                  ((f.current = e), h());
                }),
              }
            );
          },
        ],
        40886,
      ));
  },
  28744,
  (e) => {
    "use strict";
    (e.s([], 64949), e.i(64949), e.i(47167));
    let {
        userAgent: t,
        platform: n,
        maxTouchPoints: r,
      } = "u" < typeof navigator
        ? { userAgent: "", platform: "", maxTouchPoints: 0 }
        : {
            userAgent: navigator.userAgent,
            platform: navigator.platform ?? "",
            maxTouchPoints: navigator.maxTouchPoints ?? 0,
          },
      o = t.toLowerCase(),
      i = n.toLowerCase(),
      l = /^i(os$|p)/.test(i) || ("macintel" === i && r > 1),
      s = "android",
      a = i === s || o.includes(s),
      u = !l && i.startsWith("mac"),
      c = i.startsWith("win"),
      d = !a && /^(linux|chrome os)/.test(i),
      f = u || l;
    e.s(
      [
        "android",
        0,
        a,
        "apple",
        0,
        f,
        "ios",
        0,
        l,
        "linux",
        0,
        d,
        "mac",
        0,
        u,
        "windows",
        0,
        c,
      ],
      3720,
    );
    var p = e.i(3720);
    let m =
        "u" > typeof CSS && !!CSS.supports?.("-webkit-backdrop-filter:none"),
      g = !m && o.includes("firefox"),
      h = !m && o.includes("chrom");
    e.s(["blink", 0, h, "gecko", 0, g, "webkit", 0, m], 79850);
    var b = e.i(79850);
    e.s(["voiceOver", 0, f], 99170);
    var v = e.i(99170);
    let y = /jsdom|happydom/.test(o);
    e.s(["jsdom", 0, y], 36174);
    var E = e.i(36174);
    e.s(["engine", 0, b, "env", 0, E, "os", 0, p, "screenReader", 0, v], 79214);
    var w = e.i(79214);
    e.s(["platform", 0, w], 28744);
  },
  83977,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(14553);
    let r = 0,
      o = n.SafeReact.useId;
    e.s([
      "useId",
      0,
      function (e, n) {
        if (void 0 !== o) {
          let t = o();
          return e ?? (n ? `${n}-${t}` : t);
        }
        return (function (e, n = "mui") {
          let [o, i] = t.useState(e),
            l = e || o;
          return (
            t.useEffect(() => {
              null == o && ((r += 1), i(`${n}-${r}`));
            }, [o, n]),
            l
          );
        })(e, n);
      },
    ]);
  },
  88015,
  (e) => {
    "use strict";
    var t = e.i(83977);
    e.s([
      "useBaseUiId",
      0,
      function (e) {
        return (0, t.useId)(e, "base-ui");
      },
    ]);
  },
  75606,
  (e) => {
    "use strict";
    var t = e.i(56789);
    e.s([
      "createChangeEventDetails",
      0,
      function (e, n, r, o) {
        let i = !1,
          l = !1,
          s = o ?? t.EMPTY_OBJECT;
        return {
          reason: e,
          event: n ?? new Event("base-ui"),
          cancel() {
            i = !0;
          },
          allowPropagation() {
            l = !0;
          },
          get isCanceled() {
            return i;
          },
          get isPropagationAllowed() {
            return l;
          },
          trigger: r,
          ...s,
        };
      },
    ]);
  },
  26300,
  (e) => {
    "use strict";
    var t = e.i(71645);
    let n = [];
    e.s([
      "useOnMount",
      0,
      function (e) {
        t.useEffect(e, n);
      },
    ]);
  },
  8445,
  (e) => {
    "use strict";
    var t = e.i(88940),
      n = e.i(26300);
    let r = new (class {
      callbacks = [];
      callbacksCount = 0;
      nextId = 1;
      startId = 1;
      isScheduled = !1;
      tick = (e) => {
        this.isScheduled = !1;
        let t = this.callbacks,
          n = this.callbacksCount;
        if (
          ((this.callbacks = []),
          (this.callbacksCount = 0),
          (this.startId = this.nextId),
          n > 0)
        )
          for (let n = 0; n < t.length; n += 1) t[n]?.(e);
      };
      request(e) {
        let t = this.nextId;
        return (
          (this.nextId += 1),
          this.callbacks.push(e),
          (this.callbacksCount += 1),
          this.isScheduled ||
            (requestAnimationFrame(this.tick), (this.isScheduled = !0)),
          t
        );
      }
      cancel(e) {
        let t = e - this.startId;
        t < 0 ||
          t >= this.callbacks.length ||
          ((this.callbacks[t] = null), (this.callbacksCount -= 1));
      }
    })();
    class o {
      static create() {
        return new o();
      }
      static request(e) {
        return r.request(e);
      }
      static cancel(e) {
        return r.cancel(e);
      }
      currentId = null;
      request(e) {
        (this.cancel(),
          (this.currentId = r.request(() => {
            ((this.currentId = null), e());
          })));
      }
      cancel = () => {
        null !== this.currentId &&
          (r.cancel(this.currentId), (this.currentId = null));
      };
      disposeEffect = () => this.cancel;
    }
    e.s([
      "AnimationFrame",
      0,
      o,
      "useAnimationFrame",
      0,
      function () {
        let e = (0, t.useRefWithInit)(o.create).current;
        return ((0, n.useOnMount)(e.disposeEffect), e);
      },
    ]);
  },
  23910,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(46376),
      r = e.i(8445);
    e.s([
      "useTransitionStatus",
      0,
      function (e, o = !1, i = !1) {
        let [l, s] = t.useState(e && o ? "idle" : void 0),
          [a, u] = t.useState(e);
        return (
          e && !a && (u(!0), s("starting")),
          e || !a || "ending" === l || i || s("ending"),
          e || a || "ending" !== l || s(void 0),
          (0, n.useIsoLayoutEffect)(() => {
            if (!e && a && "ending" !== l && i) {
              let e = r.AnimationFrame.request(() => {
                s("ending");
              });
              return () => {
                r.AnimationFrame.cancel(e);
              };
            }
          }, [e, a, l, i]),
          (0, n.useIsoLayoutEffect)(() => {
            if (!e || o) return;
            let t = r.AnimationFrame.request(() => {
              s(void 0);
            });
            return () => {
              r.AnimationFrame.cancel(t);
            };
          }, [o, e]),
          (0, n.useIsoLayoutEffect)(() => {
            if (!e || !o) return;
            e && a && "idle" !== l && s("starting");
            let t = r.AnimationFrame.request(() => {
              s("idle");
            });
            return () => {
              r.AnimationFrame.cancel(t);
            };
          }, [o, e, a, l]),
          { mounted: a, setMounted: u, transitionStatus: l }
        );
      },
    ]);
  },
  94603,
  (e) => {
    "use strict";
    e.s([
      "resolveRef",
      0,
      function (e) {
        return null == e ? e : "current" in e ? e.current : e;
      },
    ]);
  },
  37584,
  22640,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(67865),
      r = e.i(74080),
      o = e.i(8445),
      i = e.i(94603),
      l = e.i(9407);
    function s(e, t = !1, a = !0) {
      let u = (0, o.useAnimationFrame)();
      return (0, n.useStableCallback)((n, o = null) => {
        u.cancel();
        let s = (0, i.resolveRef)(e);
        if (null == s) return;
        let c = () => {
          r.flushSync(n);
        };
        if (
          "function" != typeof s.getAnimations ||
          globalThis.BASE_UI_ANIMATIONS_DISABLED
        )
          return void n();
        function d() {
          Promise.all(s.getAnimations().map((e) => e.finished))
            .then(() => {
              o?.aborted || c();
            })
            .catch(() => {
              if (a) {
                o?.aborted || c();
                return;
              }
              let e = s.getAnimations();
              !o?.aborted &&
                e.length > 0 &&
                e.some((e) => e.pending || "finished" !== e.playState) &&
                d();
            });
        }
        if (t) {
          let e = l.TransitionStatusDataAttributes.startingStyle;
          if (!s.hasAttribute(e)) return void u.request(d);
          let t = new MutationObserver(() => {
            s.hasAttribute(e) || (t.disconnect(), d());
          });
          return (
            t.observe(s, { attributes: !0, attributeFilter: [e] }),
            void o?.addEventListener("abort", () => t.disconnect(), {
              once: !0,
            })
          );
        }
        u.request(d);
      });
    }
    (e.s(["useAnimationsFinished", 0, s], 22640),
      e.s(
        [
          "useOpenChangeComplete",
          0,
          function (e) {
            let { enabled: r = !0, open: o, ref: i, onComplete: l } = e,
              a = (0, n.useStableCallback)(l),
              u = s(i, o, !1);
            t.useEffect(() => {
              if (!r) return;
              let e = new AbortController();
              return (
                u(a, e.signal),
                () => {
                  e.abort();
                }
              );
            }, [r, o, a, u]);
          },
        ],
        37584,
      ));
  },
  74735,
  (e) => {
    "use strict";
    e.s([
      "addEventListener",
      0,
      function (e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          () => {
            e.removeEventListener(t, n, r);
          }
        );
      },
    ]);
  },
  65420,
  (e) => {
    "use strict";
    e.s([
      "mergeCleanups",
      0,
      function (...e) {
        return () => {
          for (let t = 0; t < e.length; t += 1) {
            let n = e[t];
            n && n();
          }
        };
      },
    ]);
  },
  46265,
  (e) => {
    "use strict";
    var t = e.i(46376),
      n = e.i(88940);
    function r(e) {
      let t = {
        current: e,
        next: e,
        effect: () => {
          t.current = t.next;
        },
      };
      return t;
    }
    e.s([
      "useValueAsRef",
      0,
      function (e) {
        let o = (0, n.useRefWithInit)(r, e).current;
        return ((o.next = e), (0, t.useIsoLayoutEffect)(o.effect), o);
      },
    ]);
  },
  39957,
  (e) => {
    "use strict";
    var t = e.i(88940),
      n = e.i(26300);
    class r {
      static create() {
        return new r();
      }
      currentId = 0;
      start(e, t) {
        (this.clear(),
          (this.currentId = setTimeout(() => {
            ((this.currentId = 0), t());
          }, e)));
      }
      isStarted() {
        return 0 !== this.currentId;
      }
      clear = () => {
        0 !== this.currentId &&
          (clearTimeout(this.currentId), (this.currentId = 0));
      };
      disposeEffect = () => this.clear;
    }
    e.s([
      "Timeout",
      0,
      r,
      "useTimeout",
      0,
      function () {
        let e = (0, t.useRefWithInit)(r.create).current;
        return ((0, n.useOnMount)(e.disposeEffect), e);
      },
    ]);
  },
  8868,
  (e) => {
    "use strict";
    e.s([
      "ownerDocument",
      0,
      function (e) {
        return e?.ownerDocument || document;
      },
    ]);
  },
  33848,
  (e) => {
    "use strict";
    var t = e.i(29315);
    e.s(["ownerWindow", () => t.getWindow]);
  },
  52535,
  (e) => {
    "use strict";
    e.i(47167);
    var t = e.i(71645),
      n = e.i(46376),
      r = e.i(28744);
    let o = {
        clipPath: "inset(50%)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        border: 0,
        padding: 0,
        width: 1,
        height: 1,
        margin: -1,
      },
      i = { ...o, position: "fixed", top: 0, left: 0 };
    ({ ...o, position: "absolute" });
    var l = e.i(43476);
    let s = t.forwardRef(function (e, o) {
      let [s, a] = t.useState();
      return (
        (0, n.useIsoLayoutEffect)(() => {
          r.platform.screenReader.voiceOver &&
            r.platform.engine.webkit &&
            a("button");
        }, []),
        (0, l.jsx)("span", {
          ...e,
          ref: o,
          style: i,
          "aria-hidden": !s || void 0,
          tabIndex: 0,
          role: s,
          "data-base-ui-focus-guard": "",
        })
      );
    });
    e.s(["FocusGuard", 0, s], 52535);
  },
  47554,
  49055,
  96296,
  57940,
  (e) => {
    "use strict";
    var t = e.i(29315);
    function n(e, n) {
      if (!e || !n) return !1;
      let r = n.getRootNode?.();
      if (e.contains(n)) return !0;
      if (r && (0, t.isShadowRoot)(r)) {
        let t = n;
        for (; t; ) {
          if (e === t) return !0;
          t = t.parentNode || t.host;
        }
      }
      return !1;
    }
    e.s(
      [
        "activeElement",
        0,
        function (e) {
          let t = e.activeElement;
          for (; t?.shadowRoot?.activeElement != null; )
            t = t.shadowRoot.activeElement;
          return t;
        },
        "contains",
        0,
        n,
        "getTarget",
        0,
        function (e) {
          return "composedPath" in e ? e.composedPath()[0] : e.target;
        },
      ],
      47554,
    );
    var r = e.i(28744);
    let o = "data-base-ui-focusable",
      i =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
    function l(e) {
      return (0, t.isHTMLElement)(e) && e.matches(i);
    }
    (e.s(
      [
        "ARROW_DOWN",
        0,
        "ArrowDown",
        "ARROW_LEFT",
        0,
        "ArrowLeft",
        "ARROW_RIGHT",
        0,
        "ArrowRight",
        "ARROW_UP",
        0,
        "ArrowUp",
        "FOCUSABLE_ATTRIBUTE",
        0,
        o,
        "TYPEABLE_SELECTOR",
        0,
        i,
      ],
      49055,
    ),
      e.s(
        [
          "getFloatingFocusElement",
          0,
          function (e) {
            return e
              ? e.hasAttribute(o)
                ? e
                : e.querySelector(`[${o}]`) || e
              : null;
          },
          "isEventTargetWithin",
          0,
          function (e, t) {
            return (
              null != t &&
              ("composedPath" in e
                ? e.composedPath().includes(t)
                : null != e.target && t.contains(e.target))
            );
          },
          "isInteractiveElement",
          0,
          function (e) {
            return (
              e?.closest(
                `button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${i}`,
              ) != null
            );
          },
          "isRootElement",
          0,
          function (e) {
            return e.matches("html,body");
          },
          "isTargetInsideEnabledTrigger",
          0,
          function (e, r) {
            if (!(0, t.isElement)(e)) return !1;
            if (r.hasElement(e))
              return !e.hasAttribute("data-trigger-disabled");
            for (let [, t] of r.entries())
              if (n(t, e)) return !t.hasAttribute("data-trigger-disabled");
            return !1;
          },
          "isTypeableCombobox",
          0,
          function (e) {
            return !!e && "combobox" === e.getAttribute("role") && l(e);
          },
          "isTypeableElement",
          0,
          l,
          "matchesFocusVisible",
          0,
          function (e) {
            if (!e || r.platform.env.jsdom) return !0;
            try {
              return e.matches(":focus-visible");
            } catch (e) {
              return !0;
            }
          },
        ],
        96296,
      ),
      e.s(
        [
          "isClickLikeEvent",
          0,
          function (e) {
            let t = e.type;
            return (
              "click" === t ||
              "mousedown" === t ||
              "keydown" === t ||
              "keyup" === t
            );
          },
          "isMouseLikePointerType",
          0,
          function (e, t) {
            let n = ["mouse", "pen"];
            return (t || n.push("", void 0), n.includes(e));
          },
          "isReactEvent",
          0,
          function (e) {
            return "nativeEvent" in e;
          },
          "isVirtualClick",
          0,
          function (e) {
            return (
              ("" === e.pointerType && !!e.isTrusted) ||
              (r.platform.os.android && e.pointerType
                ? "click" === e.type && 1 === e.buttons
                : 0 === e.detail && !e.pointerType)
            );
          },
          "isVirtualPointerEvent",
          0,
          function (e) {
            return (
              !r.platform.env.jsdom &&
              ((!r.platform.os.android && 0 === e.width && 0 === e.height) ||
                (r.platform.os.android &&
                  1 === e.width &&
                  1 === e.height &&
                  0 === e.pressure &&
                  0 === e.detail &&
                  "mouse" === e.pointerType) ||
                (e.width < 1 &&
                  e.height < 1 &&
                  0 === e.pressure &&
                  0 === e.detail &&
                  "touch" === e.pointerType))
            );
          },
          "stopEvent",
          0,
          function (e) {
            (e.preventDefault(), e.stopPropagation());
          },
        ],
        57940,
      ));
  },
  83976,
  21082,
  (e) => {
    "use strict";
    var t = e.i(29315),
      n = e.i(8868),
      r = e.i(47554);
    function o(
      e,
      {
        startingIndex: t = -1,
        decrement: n = !1,
        disabledIndices: r,
        amount: l = 1,
      } = {},
    ) {
      let s = t;
      do s += n ? -l : l;
      while (s >= 0 && s <= e.length - 1 && i(e, s, r));
      return s;
    }
    function i(e, t, n) {
      if ("function" == typeof n ? n(t) : (n?.includes(t) ?? !1)) return !0;
      let r = e[t];
      return (
        !!r &&
        (!l(r) ||
          (!n &&
            (r.hasAttribute("disabled") ||
              "true" === r.getAttribute("aria-disabled"))))
      );
    }
    function l(e, n = e ? (0, t.getComputedStyle)(e) : null) {
      var r;
      return (
        !!e &&
        !!e.isConnected &&
        !!n &&
        "hidden" !== (r = n).visibility &&
        "collapse" !== r.visibility &&
        ("function" == typeof e.checkVisibility
          ? e.checkVisibility()
          : "none" !== n.display && "contents" !== n.display)
      );
    }
    function s(e) {
      for (let n of Array.from(e.children))
        if ("summary" === (0, t.getNodeName)(n)) return n;
      return null;
    }
    function a(e) {
      let n = e ? (0, t.getNodeName)(e) : "";
      return (
        null != e &&
        e.matches(
          'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]',
        ) &&
        ("summary" !== n ||
          (null != e.parentElement &&
            "details" === (0, t.getNodeName)(e.parentElement) &&
            s(e.parentElement) === e)) &&
        ("details" !== n || null == s(e)) &&
        ("input" !== n || "hidden" !== e.type)
      );
    }
    function u(e) {
      if (!a(e) || !e.isConnected || e.matches(":disabled")) return !1;
      for (
        let n = e;
        n;
        n = (function (e) {
          let n = e.assignedSlot;
          if (n) return n;
          if (e.parentElement) return e.parentElement;
          let r = e.getRootNode();
          return (0, t.isShadowRoot)(r) ? r.host : null;
        })(n)
      ) {
        let o = n !== e,
          i = "slot" === (0, t.getNodeName)(n);
        if (
          n.hasAttribute("inert") ||
          (o &&
            "details" === (0, t.getNodeName)(n) &&
            !n.open &&
            !(function (e, t) {
              let n = s(t);
              return !!n && (e === n || (0, r.contains)(n, e));
            })(e, n)) ||
          n.hasAttribute("hidden") ||
          (!i &&
            !(function (e, n) {
              let r = (0, t.getComputedStyle)(e);
              return n ? "none" !== r.display : l(e, r);
            })(n, o))
        )
          return !1;
      }
      return !0;
    }
    function c(e) {
      let n = e.tabIndex;
      if (n < 0) {
        let n = (0, t.getNodeName)(e);
        if (
          "details" === n ||
          "audio" === n ||
          "video" === n ||
          ((0, t.isHTMLElement)(e) && e.isContentEditable)
        )
          return 0;
      }
      return n;
    }
    function d(e) {
      return "input" !== (0, t.getNodeName)(e)
        ? null
        : "radio" === e.type && "" !== e.name
          ? e
          : null;
    }
    function f(e) {
      if ((0, t.isHTMLElement)(e) && "slot" === (0, t.getNodeName)(e)) {
        let t = e.assignedElements({ flatten: !0 });
        if (t.length > 0) return t;
      }
      return (0, t.isHTMLElement)(e) && e.shadowRoot
        ? Array.from(e.shadowRoot.children)
        : Array.from(e.children);
    }
    function p(e) {
      let t = [];
      return (
        !(function e(t, n) {
          f(t).forEach((t) => {
            (a(t) && n.push(t), e(t, n));
          });
        })(e, t),
        t.filter(u)
      );
    }
    function m(e) {
      let t = p(e);
      return t.filter(
        (e) =>
          c(e) >= 0 &&
          (function (e, t) {
            let n = d(e);
            if (!n) return !0;
            let r = t.find((e) => {
              let t = d(e);
              return t?.name === n.name && t.form === n.form && t.checked;
            });
            return r
              ? r === n
              : t.find((e) => {
                  let t = d(e);
                  return t?.name === n.name && t.form === n.form;
                }) === n;
          })(e, t),
      );
    }
    function g(e, t) {
      let o = m(e),
        i = o.length;
      if (0 === i) return;
      let l = (0, r.activeElement)((0, n.ownerDocument)(e)),
        s = o.indexOf(l);
      return o[-1 === s ? (1 === t ? 0 : i - 1) : s + t];
    }
    function h(e, t) {
      if (!e) return null;
      let r = m((0, n.ownerDocument)(e).body),
        o = r.length;
      if (0 === o) return null;
      let i = r.indexOf(e);
      return -1 === i ? null : r[(i + t + o) % o];
    }
    (e.i(47167),
      e.s(
        [
          "findNonDisabledListIndex",
          0,
          o,
          "getMaxListIndex",
          0,
          function (e, t) {
            return o(e.current, {
              decrement: !0,
              startingIndex: e.current.length,
              disabledIndices: t,
            });
          },
          "getMinListIndex",
          0,
          function (e, t) {
            return o(e.current, { disabledIndices: t });
          },
          "isElementVisible",
          0,
          l,
          "isIndexOutOfListBounds",
          0,
          function (e, t) {
            return t < 0 || t >= e.length;
          },
          "isListIndexDisabled",
          0,
          i,
        ],
        21082,
      ),
      e.s(
        [
          "disableFocusInside",
          0,
          function (e) {
            m(e).forEach((e) => {
              ((e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                e.setAttribute("tabindex", "-1"));
            });
          },
          "enableFocusInside",
          0,
          function (e) {
            let n = [];
            (!(function e(n, r, o) {
              f(n).forEach((n) => {
                ((0, t.isHTMLElement)(n) && n.matches(r) && o.push(n),
                  e(n, r, o));
              });
            })(e, "[data-tabindex]", n),
              n.forEach((e) => {
                let t = e.dataset.tabindex;
                (delete e.dataset.tabindex,
                  t
                    ? e.setAttribute("tabindex", t)
                    : e.removeAttribute("tabindex"));
              }));
          },
          "focusable",
          0,
          p,
          "getNextTabbable",
          0,
          function (e) {
            return g((0, n.ownerDocument)(e).body, 1) || e;
          },
          "getPreviousTabbable",
          0,
          function (e) {
            return g((0, n.ownerDocument)(e).body, -1) || e;
          },
          "getTabbableAfterElement",
          0,
          function (e) {
            return h(e, 1);
          },
          "getTabbableBeforeElement",
          0,
          function (e) {
            return h(e, -1);
          },
          "isOutsideEvent",
          0,
          function (e, t) {
            let n = t || e.currentTarget,
              o = e.relatedTarget;
            return !o || !(0, r.contains)(n, o);
          },
          "isTabbable",
          0,
          function (e) {
            return u(e) && c(e) >= 0;
          },
          "tabbable",
          0,
          m,
        ],
        83976,
      ));
  },
  58408,
  (e) => {
    "use strict";
    e.s([
      "getNodeAncestors",
      0,
      function (e, t) {
        let n = [],
          r = e.find((e) => e.id === t)?.parentId;
        for (; r; ) {
          let t = e.find((e) => e.id === r);
          ((r = t?.parentId), t && (n = n.concat(t)));
        }
        return n;
      },
      "getNodeChildren",
      0,
      function e(t, n, r = !0) {
        return t
          .filter((e) => e.parentId === n)
          .flatMap((n) => [
            ...(!r || n.context?.open ? [n] : []),
            ...e(t, n.id, r),
          ]);
      },
    ]);
  },
  51321,
  (e) => {
    "use strict";
    e.s([
      "createAttribute",
      0,
      function (e) {
        return `data-base-ui-${e}`;
      },
    ]);
  },
  3596,
  44659,
  (e) => {
    "use strict";
    var t = e.i(56789);
    let n = 0;
    e.s(
      [
        "enqueueFocus",
        0,
        function (e, r = {}) {
          let { preventScroll: o = !1, sync: i = !1, shouldFocus: l } = r;
          function s() {
            (!l || l()) && e?.focus({ preventScroll: o });
          }
          if ((cancelAnimationFrame(n), i)) return (s(), t.NOOP);
          let a = requestAnimationFrame(s);
          return (
            (n = a),
            () => {
              n === a && (cancelAnimationFrame(a), (n = 0));
            }
          );
        },
      ],
      3596,
    );
    var r = e.i(29315),
      o = e.i(8868);
    let i = { inert: new WeakMap(), "aria-hidden": new WeakMap() },
      l = "data-base-ui-inert",
      s = { inert: new WeakSet(), "aria-hidden": new WeakSet() },
      a = new WeakMap(),
      u = 0,
      c = (e, t) =>
        t
          .map((t) => {
            if (e.contains(t)) return t;
            let n = (function e(t) {
              return t
                ? (0, r.isShadowRoot)(t)
                  ? t.host
                  : e(t.parentNode)
                : null;
            })(t);
            return e.contains(n) ? n : null;
          })
          .filter((e) => null != e),
      d = (e) => {
        let t = new Set();
        return (
          e.forEach((e) => {
            let n = e;
            for (; n && !t.has(n); ) (t.add(n), (n = n.parentNode));
          }),
          t
        );
      },
      f = (e, t, n) => {
        let o = [],
          i = (e) => {
            !e ||
              n.has(e) ||
              Array.from(e.children).forEach((e) => {
                "script" !== (0, r.getNodeName)(e) &&
                  (t.has(e) ? i(e) : o.push(e));
              });
          };
        return (i(e), o);
      };
    e.s(
      [
        "markOthers",
        0,
        function (e, t = {}) {
          let { ariaHidden: n = !1, inert: r = !1, mark: p = !0 } = t,
            m = (0, o.ownerDocument)(e[0]).body;
          return (function (e, t, n, r, { mark: o = !0 }) {
            let p = null;
            r ? (p = "inert") : n && (p = "aria-hidden");
            let m = null,
              g = null,
              h = c(t, e),
              b = o ? f(t, d(h), new Set(h)) : [],
              v = [],
              y = [];
            if (p) {
              let e = i[p],
                n = s[p];
              ((g = n), (m = e));
              let r = c(t, Array.from(t.querySelectorAll("[aria-live]"))),
                o = h.concat(r);
              f(t, d(o), new Set(o)).forEach((t) => {
                let r = t.getAttribute(p),
                  o = null !== r && "false" !== r,
                  i = (e.get(t) || 0) + 1;
                (e.set(t, i),
                  v.push(t),
                  1 === i && o && n.add(t),
                  o || t.setAttribute(p, "inert" === p ? "" : "true"));
              });
            }
            return (
              o &&
                b.forEach((e) => {
                  let t = (a.get(e) || 0) + 1;
                  (a.set(e, t), y.push(e), 1 === t && e.setAttribute(l, ""));
                }),
              (u += 1),
              () => {
                (m &&
                  v.forEach((e) => {
                    let t = (m.get(e) || 0) - 1;
                    (m.set(e, t),
                      t ||
                        (!g?.has(e) && p && e.removeAttribute(p),
                        g?.delete(e)));
                  }),
                  o &&
                    y.forEach((e) => {
                      let t = (a.get(e) || 0) - 1;
                      (a.set(e, t), t || e.removeAttribute(l));
                    }),
                  (u -= 1) ||
                    ((i.inert = new WeakMap()),
                    (i["aria-hidden"] = new WeakMap()),
                    (s.inert = new WeakSet()),
                    (s["aria-hidden"] = new WeakSet()),
                    (a = new WeakMap())));
              }
            );
          })(e, m, n, r, { mark: p });
        },
      ],
      44659,
    );
  },
  38396,
  (e) => {
    "use strict";
    e.s([
      "CLICK_TRIGGER_IDENTIFIER",
      0,
      "data-base-ui-click-trigger",
      "DISABLED_TRANSITIONS_STYLE",
      0,
      { style: { transition: "none" } },
      "DROPDOWN_COLLISION_AVOIDANCE",
      0,
      { fallbackAxisSide: "none" },
      "PATIENT_CLICK_THRESHOLD",
      0,
      500,
      "POPUP_COLLISION_AVOIDANCE",
      0,
      { fallbackAxisSide: "end" },
      "TYPEAHEAD_RESET_MS",
      0,
      500,
      "ownerVisuallyHidden",
      0,
      { clipPath: "inset(50%)", position: "fixed", top: 0, left: 0 },
    ]);
  },
  26674,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(74080),
      r = e.i(29315),
      o = e.i(74735),
      i = e.i(65420),
      l = e.i(83977),
      s = e.i(46376),
      a = e.i(67865),
      u = e.i(56789),
      c = e.i(52535),
      d = e.i(83976),
      f = e.i(75606),
      p = e.i(56434),
      m = e.i(51321),
      g = e.i(52245),
      h = e.i(38396),
      b = e.i(43476);
    let v = t.createContext(null),
      y = () => t.useContext(v),
      E = (0, m.createAttribute)("portal"),
      w = t.forwardRef(function (e, m) {
        let {
            render: w,
            className: x,
            style: S,
            children: k,
            container: T,
            renderGuards: C,
            ...R
          } = e,
          { portalNode: O, portalSubtree: P } = (function (e = {}) {
            let {
                ref: o,
                container: i,
                componentProps: c = u.EMPTY_OBJECT,
                elementProps: d,
              } = e,
              f = (0, l.useId)(),
              p = y(),
              m = p?.portalNode,
              [h, b] = t.useState(null),
              [v, w] = t.useState(null),
              x = (0, a.useStableCallback)((e) => {
                null !== e && w(e);
              }),
              S = t.useRef(null);
            (0, s.useIsoLayoutEffect)(() => {
              if (null === i) {
                S.current && ((S.current = null), w(null), b(null));
                return;
              }
              if (null == f) return;
              let e =
                (i && ((0, r.isNode)(i) ? i : i.current)) ?? m ?? document.body;
              if (null == e) {
                S.current && ((S.current = null), w(null), b(null));
                return;
              }
              S.current !== e && ((S.current = e), w(null), b(e));
            }, [i, m, f]);
            let k = (0, g.useRenderElement)("div", c, {
              ref: [o, x],
              props: [{ id: f, [E]: "" }, d],
            });
            return {
              portalNode: v,
              portalSubtree: h && k ? n.createPortal(k, h) : null,
            };
          })({ container: T, ref: m, componentProps: e, elementProps: R }),
          A = t.useRef(null),
          I = t.useRef(null),
          L = t.useRef(null),
          M = t.useRef(null),
          [N, D] = t.useState(null),
          F = t.useRef(!1),
          z = N?.modal,
          W = N?.open,
          H = "boolean" == typeof C ? C : !!N && !N.modal && N.open && !!O;
        (t.useEffect(() => {
          if (O && !z)
            return (0, i.mergeCleanups)(
              (0, o.addEventListener)(O, "focusin", e, !0),
              (0, o.addEventListener)(O, "focusout", e, !0),
            );
          function e(e) {
            O &&
              e.relatedTarget &&
              (0, d.isOutsideEvent)(e) &&
              ("focusin" === e.type
                ? F.current && ((0, d.enableFocusInside)(O), (F.current = !1))
                : ((0, d.disableFocusInside)(O), (F.current = !0)));
          }
        }, [O, z]),
          (0, s.useIsoLayoutEffect)(() => {
            O &&
              !0 === W &&
              F.current &&
              ((0, d.enableFocusInside)(O), (F.current = !1));
          }, [W, O]));
        let j = t.useMemo(
          () => ({
            beforeOutsideRef: A,
            afterOutsideRef: I,
            beforeInsideRef: L,
            afterInsideRef: M,
            portalNode: O,
            setFocusManagerState: D,
          }),
          [O],
        );
        return (0, b.jsxs)(t.Fragment, {
          children: [
            P,
            (0, b.jsxs)(v.Provider, {
              value: j,
              children: [
                H &&
                  O &&
                  (0, b.jsx)(c.FocusGuard, {
                    "data-type": "outside",
                    ref: A,
                    onFocus: (e) => {
                      if ((0, d.isOutsideEvent)(e, O)) L.current?.focus();
                      else {
                        let e = N ? N.domReference : null,
                          t = (0, d.getPreviousTabbable)(e);
                        t?.focus();
                      }
                    },
                  }),
                H &&
                  O &&
                  (0, b.jsx)("span", {
                    "aria-owns": O.id,
                    style: h.ownerVisuallyHidden,
                  }),
                O && n.createPortal(k, O),
                H &&
                  O &&
                  (0, b.jsx)(c.FocusGuard, {
                    "data-type": "outside",
                    ref: I,
                    onFocus: (e) => {
                      if ((0, d.isOutsideEvent)(e, O)) M.current?.focus();
                      else {
                        let t = N ? N.domReference : null,
                          n = (0, d.getNextTabbable)(t);
                        (n?.focus(),
                          N?.closeOnFocusOut &&
                            N?.onOpenChange(
                              !1,
                              (0, f.createChangeEventDetails)(
                                p.REASONS.focusOut,
                                e.nativeEvent,
                              ),
                            ));
                      }
                    },
                  }),
              ],
            }),
          ],
        });
      });
    e.s(["FloatingPortal", 0, w, "usePortalContext", 0, y]);
  },
  46420,
  61286,
  79248,
  (e) => {
    "use strict";
    e.i(47167);
    var t = e.i(71645),
      n = e.i(83977),
      r = e.i(46376),
      o = e.i(88940);
    function i() {
      let e = new Map();
      return {
        emit(t, n) {
          e.get(t)?.forEach((e) => e(n));
        },
        on(t, n) {
          (e.has(t) || e.set(t, new Set()), e.get(t).add(n));
        },
        off(t, n) {
          e.get(t)?.delete(n);
        },
      };
    }
    e.s(["createEventEmitter", 0, i], 61286);
    class l {
      nodesRef = { current: [] };
      events = i();
      addNode(e) {
        this.nodesRef.current.push(e);
      }
      removeNode(e) {
        let t = this.nodesRef.current.findIndex((t) => t === e);
        -1 !== t && this.nodesRef.current.splice(t, 1);
      }
    }
    e.s(["FloatingTreeStore", 0, l], 79248);
    var s = e.i(43476);
    let a = t.createContext(null),
      u = t.createContext(null),
      c = () => t.useContext(a)?.id || null,
      d = (e) => {
        let n = t.useContext(u);
        return e ?? n;
      };
    e.s(
      [
        "FloatingNode",
        0,
        function (e) {
          let { children: n, id: r } = e,
            o = c();
          return (0, s.jsx)(a.Provider, {
            value: t.useMemo(() => ({ id: r, parentId: o }), [r, o]),
            children: n,
          });
        },
        "FloatingTree",
        0,
        function (e) {
          let { children: t, externalTree: n } = e,
            r = (0, o.useRefWithInit)(() => n ?? new l()).current;
          return (0, s.jsx)(u.Provider, { value: r, children: t });
        },
        "useFloatingNodeId",
        0,
        function (e) {
          let t = (0, n.useId)(),
            o = d(e),
            i = c();
          return (
            (0, r.useIsoLayoutEffect)(() => {
              if (!t) return;
              let e = { id: t, parentId: i };
              return (
                o?.addNode(e),
                () => {
                  o?.removeNode(e);
                }
              );
            }, [o, t, i]),
            t
          );
        },
        "useFloatingParentNodeId",
        0,
        c,
        "useFloatingTree",
        0,
        d,
      ],
      46420,
    );
  },
  73752,
  44681,
  94814,
  (e) => {
    "use strict";
    var t = e.i(26300),
      n = e.i(88940),
      r = e.i(39957),
      o = e.i(96296);
    class i {
      constructor() {
        ((this.pointerType = void 0),
          (this.interactedInside = !1),
          (this.handler = void 0),
          (this.blockMouseMove = !0),
          (this.performedPointerEventsMutation = !1),
          (this.pointerEventsScopeElement = null),
          (this.pointerEventsReferenceElement = null),
          (this.pointerEventsFloatingElement = null),
          (this.restTimeoutPending = !1),
          (this.openChangeTimeout = new r.Timeout()),
          (this.restTimeout = new r.Timeout()),
          (this.handleCloseOptions = void 0));
      }
      static create() {
        return new i();
      }
      dispose = () => {
        (this.openChangeTimeout.clear(), this.restTimeout.clear());
      };
      disposeEffect = () => this.dispose;
    }
    let l = new WeakMap();
    function s(e) {
      if (!e.performedPointerEventsMutation) return;
      let t = e.pointerEventsScopeElement;
      (t &&
        l.get(t) === e &&
        (e.pointerEventsScopeElement?.style.removeProperty("pointer-events"),
        e.pointerEventsReferenceElement?.style.removeProperty("pointer-events"),
        e.pointerEventsFloatingElement?.style.removeProperty("pointer-events"),
        l.delete(t)),
        (e.performedPointerEventsMutation = !1),
        (e.pointerEventsScopeElement = null),
        (e.pointerEventsReferenceElement = null),
        (e.pointerEventsFloatingElement = null));
    }
    e.s(
      [
        "applySafePolygonPointerEventsMutation",
        0,
        function (e, t) {
          let { scopeElement: n, referenceElement: r, floatingElement: o } = t,
            i = l.get(n);
          (i && i !== e && s(i),
            s(e),
            (e.performedPointerEventsMutation = !0),
            (e.pointerEventsScopeElement = n),
            (e.pointerEventsReferenceElement = r),
            (e.pointerEventsFloatingElement = o),
            l.set(n, e),
            (n.style.pointerEvents = "none"),
            (r.style.pointerEvents = "auto"),
            (o.style.pointerEvents = "auto"));
        },
        "clearSafePolygonPointerEventsMutation",
        0,
        s,
        "useHoverInteractionSharedState",
        0,
        function (e) {
          let r = e.context.dataRef.current,
            o = (0, n.useRefWithInit)(
              () => r.hoverInteractionState ?? i.create(),
            ).current;
          return (
            r.hoverInteractionState || (r.hoverInteractionState = o),
            (0, t.useOnMount)(r.hoverInteractionState.disposeEffect),
            r.hoverInteractionState
          );
        },
      ],
      73752,
    );
    var a = e.i(57940);
    (e.s(
      [
        "getDelay",
        0,
        function (e, t, n) {
          let r =
            null == n || (0, a.isMouseLikePointerType)(n)
              ? "function" == typeof e
                ? e()
                : e
              : 0;
          return "number" == typeof r ? r : r?.[t];
        },
        "getRestMs",
        0,
        function (e) {
          return "function" == typeof e ? e() : e;
        },
        "isClickLikeOpenEvent",
        0,
        function (e, t) {
          return t || "click" === e || "mousedown" === e;
        },
        "isHoverOpenEvent",
        0,
        function (e) {
          return e?.includes("mouse") && "mousedown" !== e;
        },
      ],
      44681,
    ),
      e.s(
        ["isInsideEnabledTrigger", () => o.isTargetInsideEnabledTrigger],
        94814,
      ));
  },
  31157,
  96533,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(74735),
      r = e.i(65420),
      o = e.i(46376),
      i = e.i(8868),
      l = e.i(67865),
      s = e.i(39957),
      a = e.i(29315),
      u = e.i(75606),
      c = e.i(56434),
      d = e.i(46420),
      f = e.i(47554),
      p = e.i(58408),
      m = e.i(73752),
      g = e.i(96296),
      h = e.i(44681),
      b = e.i(94814);
    (e.s(
      [
        "useHoverFloatingInteraction",
        0,
        function (e, v = {}) {
          let { enabled: y = !0, closeDelay: E = 0, nodeId: w } = v,
            x = "rootStore" in e ? e.rootStore : e,
            S = x.useState("open"),
            k = x.useState("floatingElement"),
            T = x.useState("domReferenceElement"),
            { dataRef: C } = x.context,
            R = (0, d.useFloatingTree)(),
            O = (0, d.useFloatingParentNodeId)(),
            P = (0, m.useHoverInteractionSharedState)(x),
            A = (0, s.useTimeout)(),
            I = (0, l.useStableCallback)(() =>
              (0, h.isClickLikeOpenEvent)(
                C.current.openEvent?.type,
                P.interactedInside,
              ),
            ),
            L = (0, l.useStableCallback)(() =>
              (0, h.isHoverOpenEvent)(C.current.openEvent?.type),
            ),
            M = (0, l.useStableCallback)(() => {
              (0, m.clearSafePolygonPointerEventsMutation)(P);
            });
          ((0, o.useIsoLayoutEffect)(() => {
            S ||
              ((P.pointerType = void 0),
              (P.restTimeoutPending = !1),
              (P.interactedInside = !1),
              M());
          }, [S, P, M]),
            t.useEffect(() => M, [M]),
            (0, o.useIsoLayoutEffect)(() => {
              if (
                y &&
                S &&
                P.handleCloseOptions?.blockPointerEvents &&
                L() &&
                (0, a.isElement)(T) &&
                k
              ) {
                let e = (0, i.ownerDocument)(k),
                  t = R?.nodesRef.current.find((e) => e.id === O)?.context
                    ?.elements.floating;
                t && (t.style.pointerEvents = "");
                let n =
                    P.pointerEventsScopeElement !== k
                      ? P.pointerEventsScopeElement
                      : null,
                  r = t !== k ? t : null,
                  o =
                    P.handleCloseOptions?.getScope?.() ??
                    n ??
                    r ??
                    T.closest("[data-rootownerid]") ??
                    e.body;
                return (
                  (0, m.applySafePolygonPointerEventsMutation)(P, {
                    scopeElement: o,
                    referenceElement: T,
                    floatingElement: k,
                  }),
                  () => {
                    M();
                  }
                );
              }
            }, [y, S, T, k, P, L, R, O, M]),
            t.useEffect(() => {
              if (y)
                return (0, r.mergeCleanups)(
                  k &&
                    (0, n.addEventListener)(k, "mouseenter", function () {
                      (P.openChangeTimeout.clear(),
                        A.clear(),
                        R?.events.off("floating.closed", t),
                        M());
                    }),
                  k &&
                    (0, n.addEventListener)(k, "mouseleave", function (n) {
                      if (e() && R)
                        return void R.events.on("floating.closed", t);
                      if (
                        (0, b.isInsideEnabledTrigger)(
                          n.relatedTarget,
                          x.context.triggerElements,
                        )
                      )
                        return;
                      let r = C.current.floatingContext?.nodeId ?? w,
                        o = n.relatedTarget;
                      if (
                        !(
                          R &&
                          r &&
                          (0, a.isElement)(o) &&
                          (0, p.getNodeChildren)(
                            R.nodesRef.current,
                            r,
                            !1,
                          ).some((e) =>
                            (0, f.contains)(e.context?.elements.floating, o),
                          )
                        )
                      ) {
                        let e, t;
                        if (P.handler) return void P.handler(n);
                        (M(),
                          L() &&
                            !I() &&
                            ((e = (0, h.getDelay)(E, "close", P.pointerType)),
                            (t = () => {
                              (x.setOpen(
                                !1,
                                (0, u.createChangeEventDetails)(
                                  c.REASONS.triggerHover,
                                  n,
                                ),
                              ),
                                R?.events.emit("floating.closed", n));
                            }),
                            e
                              ? P.openChangeTimeout.start(e, t)
                              : (P.openChangeTimeout.clear(), t())));
                      }
                    }),
                  k &&
                    (0, n.addEventListener)(
                      k,
                      "pointerdown",
                      function (e) {
                        let t = (0, f.getTarget)(e);
                        if (!(0, g.isInteractiveElement)(t)) {
                          P.interactedInside = !1;
                          return;
                        }
                        P.interactedInside =
                          t?.closest("[aria-haspopup]") != null;
                      },
                      !0,
                    ),
                  () => {
                    R?.events.off("floating.closed", t);
                  },
                );
              function e() {
                return !!(
                  R &&
                  O &&
                  (0, p.getNodeChildren)(R.nodesRef.current, O).length > 0
                );
              }
              function t(n) {
                !R ||
                  !O ||
                  e() ||
                  A.start(0, () => {
                    (R.events.off("floating.closed", t),
                      x.setOpen(
                        !1,
                        (0, u.createChangeEventDetails)(
                          c.REASONS.triggerHover,
                          n,
                        ),
                      ),
                      R.events.emit("floating.closed", n));
                  });
              }
            }, [y, k, x, C, E, w, L, I, M, P, R, O, A]));
        },
      ],
      31157,
    ),
      e.i(47167));
    var v = e.i(33332);
    let y = t.createContext(void 0);
    e.s(
      [
        "useToolbarRootContext",
        0,
        function (e) {
          let n = t.useContext(y);
          if (void 0 === n && !e) throw Error((0, v.default)(69));
          return n;
        },
      ],
      96533,
    );
  },
  61487,
  73327,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(29315),
      r = e.i(74735),
      o = e.i(65420),
      i = e.i(28918),
      l = e.i(46265),
      s = e.i(67865),
      a = e.i(46376),
      u = e.i(39957),
      c = e.i(28744),
      d = e.i(8445),
      f = e.i(8868),
      p = e.i(33848),
      m = e.i(52535),
      g = e.i(47554),
      h = e.i(96296),
      b = e.i(57940),
      v = e.i(83976),
      y = e.i(58408),
      E = e.i(21082),
      w = e.i(75606),
      x = e.i(56434),
      S = e.i(51321),
      k = e.i(3596),
      T = e.i(44659),
      C = e.i(26674),
      R = e.i(46420),
      O = e.i(38396),
      P = e.i(94603),
      A = e.i(43476);
    let I = [];
    function L() {
      I = I.filter((e) => e.deref()?.isConnected);
    }
    function M(e) {
      (L(),
        e &&
          "body" !== (0, n.getNodeName)(e) &&
          (I.push(new WeakRef(e)), I.length > 20 && (I = I.slice(-20))));
    }
    function N() {
      return (L(), I[I.length - 1]?.deref());
    }
    function D(e) {
      if (
        (e.hasAttribute("tabindex") && !e.hasAttribute("data-tabindex")) ||
        !e.getAttribute("role")?.includes("dialog")
      )
        return;
      let t = (0, v.focusable)(e).filter((e) => {
          let t = e.getAttribute("data-tabindex") || "";
          return (
            (0, v.isTabbable)(e) ||
            (e.hasAttribute("data-tabindex") && !t.startsWith("-"))
          );
        }),
        n = e.getAttribute("tabindex");
      0 === t.length
        ? "0" !== n &&
          (e.setAttribute("tabindex", "0"),
          e.setAttribute("data-tabindex", "0"))
        : ("-1" !== n ||
            (e.hasAttribute("data-tabindex") &&
              "-1" !== e.getAttribute("data-tabindex"))) &&
          (e.setAttribute("tabindex", "-1"),
          e.setAttribute("data-tabindex", "-1"));
    }
    e.s(
      [
        "FloatingFocusManager",
        0,
        function (e) {
          let {
              context: I,
              children: F,
              disabled: z = !1,
              initialFocus: W = !0,
              returnFocus: H = !0,
              restoreFocus: j = !1,
              modal: B = !0,
              closeOnFocusOut: _ = !0,
              openInteractionType: V = "",
              nextFocusableElement: $,
              previousFocusableElement: Y,
              beforeContentFocusGuardRef: U,
              externalTree: q,
              getInsideElements: G,
            } = e,
            K = "rootStore" in I ? I.rootStore : I,
            X = K.useState("open"),
            J = K.useState("domReferenceElement"),
            Q = K.useState("floatingElement"),
            { events: Z, dataRef: ee } = K.context,
            et = (0, s.useStableCallback)(
              () => ee.current.floatingContext?.nodeId,
            ),
            en = (0, h.isTypeableCombobox)(J) && !1 === W,
            er = (0, l.useValueAsRef)(W),
            eo = (0, l.useValueAsRef)(H),
            ei = (0, l.useValueAsRef)(V),
            el = (0, l.useValueAsRef)(X),
            es = (0, R.useFloatingTree)(q),
            ea = (0, C.usePortalContext)(),
            eu = t.useRef(!1),
            ec = t.useRef(!1),
            ed = t.useRef(!1),
            ef = t.useRef(null),
            ep = t.useRef(""),
            em = t.useRef(""),
            eg = t.useRef(null),
            eh = t.useRef(null),
            eb = (0, i.useMergedRefs)(eg, U, ea?.beforeInsideRef),
            ev = (0, i.useMergedRefs)(eh, ea?.afterInsideRef),
            ey = (0, u.useTimeout)(),
            eE = (0, u.useTimeout)(),
            ew = (0, d.useAnimationFrame)(),
            ex = null != ea,
            eS = (0, h.getFloatingFocusElement)(Q),
            ek = (0, s.useStableCallback)((e = eS) =>
              e ? (0, v.tabbable)(e) : [],
            ),
            eT = (0, s.useStableCallback)(
              () => G?.().filter((e) => null != e) ?? [],
            );
          (t.useEffect(() => {
            if (z || !B) return;
            let e = (0, f.ownerDocument)(eS);
            return (0, r.addEventListener)(e, "keydown", function (e) {
              "Tab" === e.key &&
                (0, g.contains)(
                  eS,
                  (0, g.activeElement)((0, f.ownerDocument)(eS)),
                ) &&
                0 === ek().length &&
                !en &&
                (0, b.stopEvent)(e);
            });
          }, [z, eS, B, en, ek]),
            t.useEffect(() => {
              if (z || !X) return;
              let e = (0, f.ownerDocument)(eS);
              function t() {
                ed.current = !1;
              }
              return (0, o.mergeCleanups)(
                (0, r.addEventListener)(
                  e,
                  "pointerdown",
                  function (e) {
                    let t = (0, g.getTarget)(e),
                      n = eT();
                    ((ed.current = !(
                      (0, g.contains)(Q, t) ||
                      (0, g.contains)(J, t) ||
                      (0, g.contains)(ea?.portalNode, t) ||
                      n.some((e) => e === t || (0, g.contains)(e, t))
                    )),
                      (em.current = e.pointerType || "keyboard"),
                      t?.closest(`[${O.CLICK_TRIGGER_IDENTIFIER}]`) &&
                        ((ec.current = !0),
                        eE.start(0, () => {
                          ec.current = !1;
                        })));
                  },
                  !0,
                ),
                (0, r.addEventListener)(e, "pointerup", t, !0),
                (0, r.addEventListener)(e, "pointercancel", t, !0),
                (0, r.addEventListener)(
                  e,
                  "keydown",
                  function () {
                    em.current = "keyboard";
                  },
                  !0,
                ),
                t,
              );
            }, [z, Q, J, eS, X, ea, eE, eT]),
            t.useEffect(() => {
              if (z || !_) return;
              let e = (0, f.ownerDocument)(eS);
              function t(t) {
                let r = t.relatedTarget,
                  o = t.currentTarget,
                  i = (0, g.getTarget)(t);
                (B && null == r && null != i && (0, g.contains)(Q, i) && M(i),
                  queueMicrotask(() => {
                    let l = et(),
                      s = K.context.triggerElements,
                      a = eT(),
                      u =
                        r?.hasAttribute(
                          (0, S.createAttribute)("focus-guard"),
                        ) &&
                        [
                          eg.current,
                          eh.current,
                          ea?.beforeInsideRef.current,
                          ea?.afterInsideRef.current,
                          ea?.beforeOutsideRef.current,
                          ea?.afterOutsideRef.current,
                          (0, P.resolveRef)(Y),
                          (0, P.resolveRef)($),
                        ].includes(r),
                      c = !(
                        (0, g.contains)(J, r) ||
                        (0, g.contains)(Q, r) ||
                        (0, g.contains)(r, Q) ||
                        (0, g.contains)(ea?.portalNode, r) ||
                        a.some((e) => e === r || (0, g.contains)(e, r)) ||
                        (null != r && s.hasElement(r)) ||
                        s.hasMatchingElement((e) => (0, g.contains)(e, r)) ||
                        u ||
                        (es &&
                          ((0, y.getNodeChildren)(es.nodesRef.current, l).find(
                            (e) =>
                              (0, g.contains)(
                                e.context?.elements.floating,
                                r,
                              ) ||
                              (0, g.contains)(
                                e.context?.elements.domReference,
                                r,
                              ),
                          ) ||
                            (0, y.getNodeAncestors)(
                              es.nodesRef.current,
                              l,
                            ).find(
                              (e) =>
                                [
                                  e.context?.elements.floating,
                                  (0, h.getFloatingFocusElement)(
                                    e.context?.elements.floating,
                                  ),
                                ].includes(r) ||
                                e.context?.elements.domReference === r,
                            )))
                      );
                    if (
                      (o === J && eS && D(eS),
                      j &&
                        o !== J &&
                        !(0, E.isElementVisible)(i) &&
                        (0, g.activeElement)(e) === e.body)
                    ) {
                      if (
                        (0, n.isHTMLElement)(eS) &&
                        (eS.focus(), "popup" === j)
                      )
                        return void ew.request(() => {
                          eS.focus();
                        });
                      let e = ek(),
                        t = ef.current,
                        r =
                          (t && e.includes(t) ? t : null) ||
                          e[e.length - 1] ||
                          eS;
                      (0, n.isHTMLElement)(r) && r.focus();
                    }
                    if (ee.current.insideReactTree) {
                      ee.current.insideReactTree = !1;
                      return;
                    }
                    (en || !B) &&
                      r &&
                      c &&
                      !ec.current &&
                      (en || r !== N()) &&
                      ((eu.current = !0),
                      K.setOpen(
                        !1,
                        (0, w.createChangeEventDetails)(x.REASONS.focusOut, t),
                      ));
                  }));
              }
              let i = (0, n.isHTMLElement)(J) ? J : null;
              if (Q || i)
                return (0, o.mergeCleanups)(
                  i && (0, r.addEventListener)(i, "focusout", t),
                  i &&
                    (0, r.addEventListener)(i, "pointerdown", function () {
                      ((ec.current = !0),
                        eE.start(0, () => {
                          ec.current = !1;
                        }));
                    }),
                  Q &&
                    (0, r.addEventListener)(Q, "focusin", function (e) {
                      let t = (0, g.getTarget)(e);
                      (0, v.isTabbable)(t) && (ef.current = t);
                    }),
                  Q && (0, r.addEventListener)(Q, "focusout", t),
                  Q &&
                    ea &&
                    (0, r.addEventListener)(
                      Q,
                      "focusout",
                      function () {
                        ed.current ||
                          ((ee.current.insideReactTree = !0),
                          ey.start(0, () => {
                            ee.current.insideReactTree = !1;
                          }));
                      },
                      !0,
                    ),
                );
            }, [
              z,
              J,
              Q,
              eS,
              B,
              es,
              ea,
              K,
              _,
              j,
              ek,
              en,
              et,
              ee,
              ey,
              eE,
              ew,
              $,
              Y,
              eT,
            ]),
            t.useEffect(() => {
              if (z || !Q || !X) return;
              let e = Array.from(
                  ea?.portalNode?.querySelectorAll(
                    `[${(0, S.createAttribute)("portal")}]`,
                  ) || [],
                ),
                t = es
                  ? (0, y.getNodeAncestors)(es.nodesRef.current, et())
                  : [],
                n = t.find((e) =>
                  (0, h.isTypeableCombobox)(
                    e.context?.elements.domReference || null,
                  ),
                )?.context?.elements.domReference,
                r = [
                  Q,
                  ...e,
                  eg.current,
                  eh.current,
                  ea?.beforeOutsideRef.current,
                  ea?.afterOutsideRef.current,
                  ...eT(),
                  n,
                  (0, P.resolveRef)(Y),
                  (0, P.resolveRef)($),
                  en ? J : null,
                ].filter((e) => null != e),
                o = (0, T.markOthers)(r, { ariaHidden: B || en, mark: !1 }),
                i = [Q, ...e].filter((e) => null != e),
                l = (0, T.markOthers)(i);
              return () => {
                (l(), o());
              };
            }, [X, z, J, Q, B, ea, en, es, et, $, Y, eT]),
            (0, a.useIsoLayoutEffect)(() => {
              if (!X || z || !(0, n.isHTMLElement)(eS)) return;
              let e = (0, f.ownerDocument)(eS),
                t = (0, g.activeElement)(e);
              queueMicrotask(() => {
                let n,
                  r = er.current,
                  o = "function" == typeof r ? r(ei.current || "") : r;
                if (void 0 === o || !1 === o || (0, g.contains)(eS, t)) return;
                let i = null,
                  l = () => (null == i && (i = ek(eS)), i[0] || eS);
                n =
                  (n = !0 === o || null === o ? l() : (0, P.resolveRef)(o)) ||
                  l();
                let s = (0, g.contains)(eS, (0, g.activeElement)(e));
                (0, k.enqueueFocus)(n, {
                  preventScroll: n === eS,
                  shouldFocus() {
                    if (!el.current) return !1;
                    if (s) return !0;
                    let t = (0, g.activeElement)(e);
                    return !(t !== n && (0, g.contains)(eS, t));
                  },
                });
              });
            }, [z, X, eS, ek, er, ei, el]),
            (0, a.useIsoLayoutEffect)(() => {
              if (z || !eS) return;
              let e = (0, f.ownerDocument)(eS),
                t = (0, g.activeElement)(e),
                r = null == ei.current;
              function o(e) {
                var t, n;
                let r;
                if (
                  (e.open ||
                    ((t = e.nativeEvent),
                    (n = em.current),
                    (r = (0, p.ownerWindow)((0, g.getTarget)(t))),
                    (ep.current =
                      t instanceof r.KeyboardEvent
                        ? "keyboard"
                        : t instanceof r.FocusEvent
                          ? n || "keyboard"
                          : "pointerType" in t
                            ? t.pointerType || "keyboard"
                            : "touches" in t
                              ? "touch"
                              : t instanceof r.MouseEvent
                                ? n || (0 === t.detail ? "keyboard" : "mouse")
                                : "")),
                  e.reason === x.REASONS.triggerHover &&
                    "mouseleave" === e.nativeEvent.type &&
                    (eu.current = !0),
                  e.reason === x.REASONS.outsidePress)
                )
                  if (e.nested) eu.current = !1;
                  else if (
                    (0, b.isVirtualClick)(e.nativeEvent) ||
                    (0, b.isVirtualPointerEvent)(e.nativeEvent)
                  )
                    eu.current = !1;
                  else {
                    let e = !1;
                    ((0, f.ownerDocument)(eS)
                      .createElement("div")
                      .focus({
                        get preventScroll() {
                          return ((e = !0), !1);
                        },
                      }),
                      e ? (eu.current = !1) : (eu.current = !0));
                  }
              }
              return (
                M(t),
                Z.on("openchange", o),
                () => {
                  Z.off("openchange", o);
                  let i = (0, g.activeElement)(e),
                    l = eT(),
                    s =
                      (0, g.contains)(Q, i) ||
                      l.some((e) => e === i || (0, g.contains)(e, i)) ||
                      (es &&
                        (0, y.getNodeChildren)(
                          es.nodesRef.current,
                          et(),
                          !1,
                        ).some((e) =>
                          (0, g.contains)(e.context?.elements.floating, i),
                        )),
                    a = eo.current,
                    u = (function () {
                      let e = eo.current,
                        o = "function" == typeof e ? e(ep.current) : e;
                      if (void 0 === o || !1 === o) return null;
                      null === o && (o = !0);
                      let i = J?.isConnected ? J : null,
                        l =
                          t?.isConnected && "body" !== (0, n.getNodeName)(t)
                            ? t
                            : null,
                        s = r ? l || i : i || l;
                      return (s || (s = N() || null), "boolean" == typeof o)
                        ? s
                        : (0, P.resolveRef)(o) || s || null;
                    })();
                  queueMicrotask(() => {
                    let t = u
                      ? (0, v.isTabbable)(u)
                        ? u
                        : (0, v.tabbable)(u)[0] || u
                      : null;
                    (a &&
                      !eu.current &&
                      (0, n.isHTMLElement)(t) &&
                      ("boolean" != typeof a || t === i || i === e.body || s) &&
                      t.focus({ preventScroll: !0 }),
                      (eu.current = !1));
                  });
                }
              );
            }, [z, Q, eS, eo, ei, Z, es, J, et, eT]),
            (0, a.useIsoLayoutEffect)(() => {
              if (!c.platform.engine.webkit || X || !Q) return;
              let e = (0, g.activeElement)((0, f.ownerDocument)(Q));
              (0, n.isHTMLElement)(e) &&
                (0, h.isTypeableElement)(e) &&
                (0, g.contains)(Q, e) &&
                e.blur();
            }, [X, Q]),
            (0, a.useIsoLayoutEffect)(() => {
              if (!z && ea)
                return (
                  ea.setFocusManagerState({
                    modal: B,
                    closeOnFocusOut: _,
                    open: X,
                    onOpenChange: K.setOpen,
                    domReference: J,
                  }),
                  () => {
                    ea.setFocusManagerState(null);
                  }
                );
            }, [z, ea, B, X, K, _, J]),
            (0, a.useIsoLayoutEffect)(() => {
              if (!z && eS)
                return (
                  D(eS),
                  () => {
                    queueMicrotask(L);
                  }
                );
            }, [z, eS]));
          let eC = !z && (!B || !en) && (ex || B);
          return (0, A.jsxs)(t.Fragment, {
            children: [
              eC &&
                (0, A.jsx)(m.FocusGuard, {
                  "data-type": "inside",
                  ref: eb,
                  onFocus: (e) => {
                    if (B) {
                      let e = ek();
                      (0, k.enqueueFocus)(e[e.length - 1]);
                    } else if (ea?.portalNode)
                      if (
                        ((eu.current = !1),
                        (0, v.isOutsideEvent)(e, ea.portalNode))
                      ) {
                        let e = (0, v.getNextTabbable)(J);
                        e?.focus();
                      } else
                        (0, P.resolveRef)(Y ?? ea.beforeOutsideRef)?.focus();
                  },
                }),
              F,
              eC &&
                (0, A.jsx)(m.FocusGuard, {
                  "data-type": "inside",
                  ref: ev,
                  onFocus: (e) => {
                    if (B) (0, k.enqueueFocus)(ek()[0]);
                    else if (ea?.portalNode)
                      if (
                        (_ && (eu.current = !0),
                        (0, v.isOutsideEvent)(e, ea.portalNode))
                      ) {
                        let e = (0, v.getPreviousTabbable)(J);
                        e?.focus();
                      } else
                        (0, P.resolveRef)($ ?? ea.afterOutsideRef)?.focus();
                  },
                }),
            ],
          });
        },
      ],
      61487,
    );
    let F = new Set([
      ...new Set([
        ...new Set(["ArrowLeft", "ArrowRight"]),
        ...new Set(["ArrowUp", "ArrowDown"]),
      ]),
      "Home",
      "End",
    ]);
    e.s(["COMPOSITE_KEYS", 0, F], 73327);
  },
  15982,
  (e) => {
    "use strict";
    var t = e.i(56789),
      n = e.i(38396);
    e.s([
      "getDisabledMountTransitionStyles",
      0,
      function (e) {
        return "starting" === e ? n.DISABLED_TRANSITIONS_STYLE : t.EMPTY_OBJECT;
      },
    ]);
  },
  44394,
  (e) => {
    "use strict";
    var t = e.i(58321);
    e.s([
      "inertValue",
      0,
      function (e) {
        return (0, t.isReactVersionAtLeast)(19) ? e : e ? "true" : void 0;
      },
    ]);
  },
  90627,
  (e) => {
    "use strict";
    e.s([
      "PopupTriggerMap",
      0,
      class {
        constructor() {
          ((this.elementsSet = new Set()), (this.idMap = new Map()));
        }
        add(e, t) {
          let n = this.idMap.get(e);
          n !== t &&
            (void 0 !== n && this.elementsSet.delete(n),
            this.elementsSet.add(t),
            this.idMap.set(e, t));
        }
        delete(e) {
          let t = this.idMap.get(e);
          t && (this.elementsSet.delete(t), this.idMap.delete(e));
        }
        hasElement(e) {
          return this.elementsSet.has(e);
        }
        hasMatchingElement(e) {
          for (let t of this.elementsSet) if (e(t)) return !0;
          return !1;
        }
        getById(e) {
          return this.idMap.get(e);
        }
        entries() {
          return this.idMap.entries();
        }
        elements() {
          return this.elementsSet.values();
        }
        get size() {
          return this.idMap.size;
        }
      },
    ]);
  },
  16269,
  (e) => {
    "use strict";
    var t = e.i(33332);
    e.s([
      "createSelector",
      0,
      (e, n, r, o, i, l, ...s) => {
        let a;
        if (s.length > 0) throw Error((0, t.default)(1));
        if (e && n && r && o && i && l)
          a = (t, s, a, u) =>
            l(
              e(t, s, a, u),
              n(t, s, a, u),
              r(t, s, a, u),
              o(t, s, a, u),
              i(t, s, a, u),
              s,
              a,
              u,
            );
        else if (e && n && r && o && i)
          a = (t, l, s, a) =>
            i(
              e(t, l, s, a),
              n(t, l, s, a),
              r(t, l, s, a),
              o(t, l, s, a),
              l,
              s,
              a,
            );
        else if (e && n && r && o)
          a = (t, i, l, s) =>
            o(e(t, i, l, s), n(t, i, l, s), r(t, i, l, s), i, l, s);
        else if (e && n && r)
          a = (t, o, i, l) => r(e(t, o, i, l), n(t, o, i, l), o, i, l);
        else if (e && n) a = (t, r, o, i) => n(e(t, r, o, i), r, o, i);
        else if (e) a = e;
        else throw Error("Missing arguments");
        return a;
      },
    ]);
  },
  55838,
  (e, t, n) => {
    "use strict";
    var r = e.r(71645),
      o =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      i = r.useState,
      l = r.useEffect,
      s = r.useLayoutEffect,
      a = r.useDebugValue;
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !o(e, n);
      } catch (e) {
        return !0;
      }
    }
    var c =
      "u" < typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var n = t(),
              r = i({ inst: { value: n, getSnapshot: t } }),
              o = r[0].inst,
              c = r[1];
            return (
              s(
                function () {
                  ((o.value = n), (o.getSnapshot = t), u(o) && c({ inst: o }));
                },
                [e, n, t],
              ),
              l(
                function () {
                  return (
                    u(o) && c({ inst: o }),
                    e(function () {
                      u(o) && c({ inst: o });
                    })
                  );
                },
                [e],
              ),
              a(n),
              n
            );
          };
    n.useSyncExternalStore =
      void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
  },
  2239,
  (e, t, n) => {
    "use strict";
    t.exports = e.r(55838);
  },
  52822,
  (e, t, n) => {
    "use strict";
    var r = e.r(71645),
      o = e.r(2239),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      l = o.useSyncExternalStore,
      s = r.useRef,
      a = r.useEffect,
      u = r.useMemo,
      c = r.useDebugValue;
    n.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
      var d = s(null);
      if (null === d.current) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      var p = l(
        e,
        (d = u(
          function () {
            function e(e) {
              if (!a) {
                if (
                  ((a = !0), (l = e), (e = r(e)), void 0 !== o && f.hasValue)
                ) {
                  var t = f.value;
                  if (o(t, e)) return (s = t);
                }
                return (s = e);
              }
              if (((t = s), i(l, e))) return t;
              var n = r(e);
              return void 0 !== o && o(t, n)
                ? ((l = e), t)
                : ((l = e), (s = n));
            }
            var l,
              s,
              a = !1,
              u = void 0 === n ? null : n;
            return [
              function () {
                return e(t());
              },
              null === u
                ? void 0
                : function () {
                    return e(u());
                  },
            ];
          },
          [t, n, r, o],
        ))[0],
        d[1],
      );
      return (
        a(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        c(p),
        p
      );
    };
  },
  30224,
  (e, t, n) => {
    "use strict";
    t.exports = e.r(52822);
  },
  1252,
  96499,
  (e) => {
    "use strict";
    let t;
    e.i(47167);
    var n = e.i(71645),
      r = e.i(2239),
      o = e.i(30224),
      i = e.i(58321),
      l = e.i(88940);
    let s = [];
    function a() {
      return t;
    }
    function u(e) {
      s.push(e);
    }
    function c(e) {
      let n = (n, r) => {
        let o,
          i = (0, l.useRefWithInit)(d).current;
        try {
          for (let e of ((t = i), s)) e.before(i);
          for (let t of ((o = e(n, r)), s)) t.after(i);
          i.didInitialize = !0;
        } finally {
          t = void 0;
        }
        return o;
      };
      return ((n.displayName = e.displayName || e.name), n);
    }
    function d() {
      return { didInitialize: !1 };
    }
    e.s(
      [
        "fastComponent",
        0,
        c,
        "fastComponentRef",
        0,
        function (e) {
          return n.forwardRef(c(e));
        },
        "getInstance",
        0,
        a,
        "register",
        0,
        u,
      ],
      96499,
    );
    let f = (0, i.isReactVersionAtLeast)(19)
      ? function (e, t, o, i, l) {
          let s,
            u = a();
          if (!u) {
            let s;
            return (
              (s = n.useCallback(
                () => t(e.getSnapshot(), o, i, l),
                [e, t, o, i, l],
              )),
              (0, r.useSyncExternalStore)(e.subscribe, s, s)
            );
          }
          let c = u.syncIndex;
          return (
            (u.syncIndex += 1),
            u.didInitialize
              ? ((s = u.syncHooks[c]).store === e &&
                  s.selector === t &&
                  Object.is(s.a1, o) &&
                  Object.is(s.a2, i) &&
                  Object.is(s.a3, l)) ||
                (s.store !== e && (u.didChangeStore = !0),
                (s.store = e),
                (s.selector = t),
                (s.a1 = o),
                (s.a2 = i),
                (s.a3 = l),
                (s.value = t(e.getSnapshot(), o, i, l)))
              : ((s = {
                  store: e,
                  selector: t,
                  a1: o,
                  a2: i,
                  a3: l,
                  value: t(e.getSnapshot(), o, i, l),
                }),
                u.syncHooks.push(s)),
            s.value
          );
        }
      : function (e, t, n, r, i) {
          return (0, o.useSyncExternalStoreWithSelector)(
            e.subscribe,
            e.getSnapshot,
            e.getSnapshot,
            (e) => t(e, n, r, i),
          );
        };
    u({
      before(e) {
        ((e.syncIndex = 0),
          e.didInitialize ||
            ((e.syncTick = 1),
            (e.syncHooks = []),
            (e.didChangeStore = !0),
            (e.getSnapshot = () => {
              let t = !1;
              for (let n = 0; n < e.syncHooks.length; n += 1) {
                let r = e.syncHooks[n],
                  o = r.selector(r.store.state, r.a1, r.a2, r.a3);
                Object.is(r.value, o) || ((t = !0), (r.value = o));
              }
              return (t && (e.syncTick += 1), e.syncTick);
            })));
      },
      after(e) {
        e.syncHooks.length > 0 &&
          (e.didChangeStore &&
            ((e.didChangeStore = !1),
            (e.subscribe = (t) => {
              let n = new Set();
              for (let t of e.syncHooks) n.add(t.store);
              let r = [];
              for (let e of n) r.push(e.subscribe(t));
              return () => {
                for (let e of r) e();
              };
            })),
          (0, r.useSyncExternalStore)(
            e.subscribe,
            e.getSnapshot,
            e.getSnapshot,
          ));
      },
    });
    class p {
      constructor(e) {
        ((this.state = e), (this.listeners = new Set()), (this.updateTick = 0));
      }
      subscribe = (e) => (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
      getSnapshot = () => this.state;
      setState(e) {
        if (this.state === e) return;
        ((this.state = e), (this.updateTick += 1));
        let t = this.updateTick;
        for (let n of this.listeners) {
          if (t !== this.updateTick) return;
          n(e);
        }
      }
      update(e) {
        for (let t in e)
          if (!Object.is(this.state[t], e[t]))
            return void this.setState({ ...this.state, ...e });
      }
      set(e, t) {
        Object.is(this.state[e], t) || this.setState({ ...this.state, [e]: t });
      }
      notifyAll() {
        let e = { ...this.state };
        this.setState(e);
      }
      use(e, t, n, r) {
        return f(this, e, t, n, r);
      }
    }
    var m = e.i(67865),
      g = e.i(46376),
      h = e.i(56789);
    e.s(
      [
        "ReactStore",
        0,
        class extends p {
          constructor(e, t = {}, n) {
            (super(e), (this.context = t), (this.selectors = n));
          }
          useSyncedValue(e, t) {
            n.useDebugValue(e);
            let r = this;
            (0, g.useIsoLayoutEffect)(() => {
              r.state[e] !== t && r.set(e, t);
            }, [r, e, t]);
          }
          useSyncedValueWithCleanup(e, t) {
            let n = this;
            (0, g.useIsoLayoutEffect)(
              () => (
                n.state[e] !== t && n.set(e, t),
                () => {
                  n.set(e, void 0);
                }
              ),
              [n, e, t],
            );
          }
          useSyncedValues(e) {
            let t = this,
              n = Object.values(e);
            (0, g.useIsoLayoutEffect)(() => {
              t.update(e);
            }, [t, ...n]);
          }
          useControlledProp(e, t) {
            n.useDebugValue(e);
            let r = this,
              o = void 0 !== t;
            (0, g.useIsoLayoutEffect)(() => {
              o &&
                !Object.is(r.state[e], t) &&
                r.setState({ ...r.state, [e]: t });
            }, [r, e, t, o]);
          }
          select(e, t, n, r) {
            return (0, this.selectors[e])(this.state, t, n, r);
          }
          useState(e, t, r, o) {
            return (n.useDebugValue(e), f(this, this.selectors[e], t, r, o));
          }
          useContextCallback(e, t) {
            n.useDebugValue(e);
            let r = (0, m.useStableCallback)(t ?? h.NOOP);
            this.context[e] = r;
          }
          useStateSetter(e) {
            let t = n.useRef(void 0);
            return (
              void 0 === t.current &&
                (t.current = (t) => {
                  this.set(e, t);
                }),
              t.current
            );
          }
          observe(e, t) {
            let n,
              r = (n = "function" == typeof e ? e : this.selectors[e])(
                this.state,
              );
            return (
              t(r, r, this),
              this.subscribe((e) => {
                let o = n(e);
                if (!Object.is(r, o)) {
                  let e = r;
                  ((r = o), t(o, e, this));
                }
              })
            );
          }
        },
      ],
      1252,
    );
  },
  56341,
  (e) => {
    "use strict";
    var t = e.i(16269),
      n = e.i(1252),
      r = e.i(61286),
      o = e.i(57940);
    let i = {
      open: (0, t.createSelector)((e) => e.open),
      transitionStatus: (0, t.createSelector)((e) => e.transitionStatus),
      domReferenceElement: (0, t.createSelector)((e) => e.domReferenceElement),
      referenceElement: (0, t.createSelector)(
        (e) => e.positionReference ?? e.referenceElement,
      ),
      floatingElement: (0, t.createSelector)((e) => e.floatingElement),
      floatingId: (0, t.createSelector)((e) => e.floatingId),
    };
    class l extends n.ReactStore {
      constructor(e) {
        const {
          syncOnly: t,
          nested: n,
          onOpenChange: o,
          triggerElements: l,
          ...s
        } = e;
        (super(
          {
            ...s,
            positionReference: s.referenceElement,
            domReferenceElement: s.referenceElement,
          },
          {
            onOpenChange: o,
            dataRef: { current: {} },
            events: (0, r.createEventEmitter)(),
            nested: n,
            triggerElements: l,
          },
          i,
        ),
          (this.syncOnly = t));
      }
      syncOpenEvent = (e, t) => {
        (!e || !this.state.open || (null != t && (0, o.isClickLikeEvent)(t))) &&
          (this.context.dataRef.current.openEvent = e ? t : void 0);
      };
      dispatchOpenChange = (e, t) => {
        this.syncOpenEvent(e, t.event);
        let n = {
          open: e,
          reason: t.reason,
          nativeEvent: t.event,
          nested: this.context.nested,
          triggerElement: t.trigger,
        };
        this.context.events.emit("openchange", n);
      };
      setOpen = (e, t) => {
        (this.syncOnly || this.dispatchOpenChange(e, t),
          this.context.onOpenChange?.(e, t));
      };
    }
    e.s(["FloatingRootStore", 0, l]);
  },
  72855,
  (e) => {
    "use strict";
    var t = e.i(71645);
    let n = t.createContext(void 0);
    e.s([
      "useDirection",
      0,
      function () {
        let e = t.useContext(n);
        return e?.direction ?? "ltr";
      },
    ]);
  },
  29365,
  43084,
  60495,
  (e) => {
    "use strict";
    let t;
    var n,
      r,
      o,
      i = e.i(71645);
    let l = ["top", "right", "bottom", "left"],
      s = l.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
      a = Math.min,
      u = Math.max,
      c = Math.round,
      d = Math.floor,
      f = (e) => ({ x: e, y: e }),
      p = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function m(e, t, n) {
      return u(e, a(t, n));
    }
    function g(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function h(e) {
      return e.split("-")[0];
    }
    function b(e) {
      return e.split("-")[1];
    }
    function v(e) {
      return "x" === e ? "y" : "x";
    }
    function y(e) {
      return "y" === e ? "height" : "width";
    }
    function E(e) {
      let t = e[0];
      return "t" === t || "b" === t ? "y" : "x";
    }
    function w(e) {
      return v(E(e));
    }
    function x(e, t, n) {
      void 0 === n && (n = !1);
      let r = b(e),
        o = w(e),
        i = y(o),
        l =
          "x" === o
            ? r === (n ? "end" : "start")
              ? "right"
              : "left"
            : "start" === r
              ? "bottom"
              : "top";
      return (t.reference[i] > t.floating[i] && (l = A(l)), [l, A(l)]);
    }
    function S(e) {
      let t = A(e);
      return [k(e), t, k(t)];
    }
    function k(e) {
      return e.includes("start")
        ? e.replace("start", "end")
        : e.replace("end", "start");
    }
    let T = ["left", "right"],
      C = ["right", "left"],
      R = ["top", "bottom"],
      O = ["bottom", "top"];
    function P(e, t, n, r) {
      let o = b(e),
        i = (function (e, t, n) {
          switch (e) {
            case "top":
            case "bottom":
              if (n) return t ? C : T;
              return t ? T : C;
            case "left":
            case "right":
              return t ? R : O;
            default:
              return [];
          }
        })(h(e), "start" === n, r);
      return (
        o && ((i = i.map((e) => e + "-" + o)), t && (i = i.concat(i.map(k)))),
        i
      );
    }
    function A(e) {
      let t = h(e);
      return p[t] + e.slice(t.length);
    }
    function I(e) {
      var t, n, r, o;
      return "number" != typeof e
        ? {
            top: null != (t = e.top) ? t : 0,
            right: null != (n = e.right) ? n : 0,
            bottom: null != (r = e.bottom) ? r : 0,
            left: null != (o = e.left) ? o : 0,
          }
        : { top: e, right: e, bottom: e, left: e };
    }
    function L(e) {
      let { x: t, y: n, width: r, height: o } = e;
      return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n,
      };
    }
    e.s(
      [
        "clamp",
        0,
        m,
        "createCoords",
        0,
        f,
        "evaluate",
        0,
        g,
        "floor",
        0,
        d,
        "getAlignment",
        0,
        b,
        "getAlignmentAxis",
        0,
        w,
        "getAlignmentSides",
        0,
        x,
        "getAxisLength",
        0,
        y,
        "getExpandedPlacements",
        0,
        S,
        "getOppositeAlignmentPlacement",
        0,
        k,
        "getOppositeAxis",
        0,
        v,
        "getOppositeAxisPlacements",
        0,
        P,
        "getOppositePlacement",
        0,
        A,
        "getPaddingObject",
        0,
        I,
        "getSide",
        0,
        h,
        "getSideAxis",
        0,
        E,
        "max",
        0,
        u,
        "min",
        0,
        a,
        "placements",
        0,
        s,
        "rectToClientRect",
        0,
        L,
        "round",
        0,
        c,
        "sides",
        0,
        l,
      ],
      43084,
    );
    var M = e.i(8868),
      N = e.i(33848),
      D = e.i(46376),
      F = e.i(46265),
      z = e.i(67865);
    function W(e, t, n) {
      let r,
        { reference: o, floating: i } = e,
        l = E(t),
        s = w(t),
        a = y(s),
        u = h(t),
        c = o.x + o.width / 2 - i.width / 2,
        d = o.y + o.height / 2 - i.height / 2,
        f = o[a] / 2 - i[a] / 2;
      switch (u) {
        case "top":
          r = { x: c, y: o.y - i.height };
          break;
        case "bottom":
          r = { x: c, y: o.y + o.height };
          break;
        case "right":
          r = { x: o.x + o.width, y: d };
          break;
        case "left":
          r = { x: o.x - i.width, y: d };
          break;
        default:
          r = { x: o.x, y: o.y };
      }
      let p = b(t);
      return (
        p && (r[s] += f * ("end" === p ? 1 : -1) * (n && "y" === l ? -1 : 1)),
        r
      );
    }
    async function H(e, t) {
      var n;
      void 0 === t && (t = {});
      let { x: r, y: o, platform: i, rects: l, elements: s, strategy: a } = e,
        {
          boundary: u = "clippingAncestors",
          rootBoundary: c = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: p = 0,
        } = g(t, e),
        m = I(p),
        h = s[f ? ("floating" === d ? "reference" : "floating") : d],
        b = L(
          await i.getClippingRect({
            element:
              null ==
                (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n
                ? h
                : h.contextElement ||
                  (await (null == i.getDocumentElement
                    ? void 0
                    : i.getDocumentElement(s.floating))),
            boundary: u,
            rootBoundary: c,
            strategy: a,
          }),
        ),
        v =
          "floating" === d
            ? { x: r, y: o, width: l.floating.width, height: l.floating.height }
            : l.reference,
        y = await (null == i.getOffsetParent
          ? void 0
          : i.getOffsetParent(s.floating)),
        E = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
          (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
          x: 1,
          y: 1,
        },
        w = L(
          i.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: s,
                rect: v,
                offsetParent: y,
                strategy: a,
              })
            : v,
        );
      return {
        top: (b.top - w.top + m.top) / E.y,
        bottom: (w.bottom - b.bottom + m.bottom) / E.y,
        left: (b.left - w.left + m.left) / E.x,
        right: (w.right - b.right + m.right) / E.x,
      };
    }
    let j = async (e, t, n) => {
      let {
          placement: r = "bottom",
          strategy: o = "absolute",
          middleware: i = [],
          platform: l,
        } = n,
        s = l.detectOverflow ? l : { ...l, detectOverflow: H },
        a = await (null == l.isRTL ? void 0 : l.isRTL(t)),
        u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: c, y: d } = W(u, r, a),
        f = r,
        p = 0,
        m = {};
      for (let n = 0; n < i.length; n++) {
        let g = i[n];
        if (!g) continue;
        let { name: h, fn: b } = g,
          {
            x: v,
            y: y,
            data: E,
            reset: w,
          } = await b({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: o,
            middlewareData: m,
            rects: u,
            platform: s,
            elements: { reference: e, floating: t },
          });
        ((c = null != v ? v : c),
          (d = null != y ? y : d),
          (m[h] = { ...m[h], ...E }),
          w &&
            p < 50 &&
            (p++,
            "object" == typeof w &&
              (w.placement && (f = w.placement),
              w.rects &&
                (u =
                  !0 === w.rects
                    ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o,
                      })
                    : w.rects),
              ({ x: c, y: d } = W(u, f, a))),
            (n = -1)));
      }
      return { x: c, y: d, placement: f, strategy: o, middlewareData: m };
    };
    function B(e, t) {
      return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width,
      };
    }
    function _(e) {
      return l.some((t) => e[t] >= 0);
    }
    let V = new Set(["left", "top"]);
    async function $(e, t) {
      let { placement: n, platform: r, elements: o } = e,
        i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
        l = h(n),
        s = b(n),
        a = "y" === E(n),
        u = V.has(l) ? -1 : 1,
        c = i && a ? -1 : 1,
        d = g(t, e),
        {
          mainAxis: f,
          crossAxis: p,
          alignmentAxis: m,
        } = "number" == typeof d
          ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
          : {
              mainAxis: d.mainAxis || 0,
              crossAxis: d.crossAxis || 0,
              alignmentAxis: d.alignmentAxis,
            };
      return (
        s && "number" == typeof m && (p = "end" === s ? -1 * m : m),
        a ? { x: p * c, y: f * u } : { x: f * u, y: p * c }
      );
    }
    var Y = e.i(29315);
    function U(e) {
      let t = (0, Y.getComputedStyle)(e),
        n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0,
        o = (0, Y.isHTMLElement)(e),
        i = o ? e.offsetWidth : n,
        l = o ? e.offsetHeight : r,
        s = c(n) !== i || c(r) !== l;
      return (s && ((n = i), (r = l)), { width: n, height: r, $: s });
    }
    function q(e) {
      return (0, Y.isElement)(e) ? e : e.contextElement;
    }
    function G(e) {
      let t = q(e);
      if (!(0, Y.isHTMLElement)(t)) return f(1);
      let n = t.getBoundingClientRect(),
        { width: r, height: o, $: i } = U(t),
        l = (i ? c(n.width) : n.width) / r,
        s = (i ? c(n.height) : n.height) / o;
      return (
        (l && Number.isFinite(l)) || (l = 1),
        (s && Number.isFinite(s)) || (s = 1),
        { x: l, y: s }
      );
    }
    let K = f(0);
    function X(e) {
      let t = (0, Y.getWindow)(e);
      return (0, Y.isWebKit)() && t.visualViewport
        ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
        : K;
    }
    function J(e, t, n, r) {
      var o;
      (void 0 === t && (t = !1), void 0 === n && (n = !1));
      let i = e.getBoundingClientRect(),
        l = q(e),
        s = f(1);
      t && (r ? (0, Y.isElement)(r) && (s = G(r)) : (s = G(e)));
      let a = (void 0 === (o = n) && (o = !1),
        r && o && r === (0, Y.getWindow)(l))
          ? X(l)
          : f(0),
        u = (i.left + a.x) / s.x,
        c = (i.top + a.y) / s.y,
        d = i.width / s.x,
        p = i.height / s.y;
      if (l && r) {
        let e = (0, Y.getWindow)(l),
          t = (0, Y.isElement)(r) ? (0, Y.getWindow)(r) : r,
          n = e,
          o = (0, Y.getFrameElement)(n);
        for (; o && t !== n; ) {
          let e = G(o),
            t = o.getBoundingClientRect(),
            r = (0, Y.getComputedStyle)(o),
            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
            l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
          ((u *= e.x),
            (c *= e.y),
            (d *= e.x),
            (p *= e.y),
            (u += i),
            (c += l),
            (n = (0, Y.getWindow)(o)),
            (o = (0, Y.getFrameElement)(n)));
        }
      }
      return L({ width: d, height: p, x: u, y: c });
    }
    function Q(e, t) {
      let n = (0, Y.getNodeScroll)(e).scrollLeft;
      return t ? t.left + n : J((0, Y.getDocumentElement)(e)).left + n;
    }
    function Z(e, t) {
      let n = e.getBoundingClientRect();
      return { x: n.left + t.scrollLeft - Q(e, n), y: n.top + t.scrollTop };
    }
    function ee(e, t, n) {
      var r;
      let o;
      if ("viewport" === t || "layoutViewport" === t)
        o = (function (e, t, n) {
          void 0 === n && (n = "viewport");
          let r = "layoutViewport" === n,
            o = (0, Y.getWindow)(e),
            i = (0, Y.getDocumentElement)(e),
            l = o.visualViewport,
            s = i.clientWidth,
            a = i.clientHeight,
            u = 0,
            c = 0;
          if (l) {
            let e = !(0, Y.isWebKit)() || "fixed" === t;
            r
              ? e || ((u = -l.offsetLeft), (c = -l.offsetTop))
              : ((s = l.width),
                (a = l.height),
                e && ((u = l.offsetLeft), (c = l.offsetTop)));
          }
          if (0 >= Q(i)) {
            let e = i.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              r =
                ("CSS1Compat" === e.compatMode &&
                  parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                0,
              o = Math.abs(i.clientWidth - t.clientWidth - r),
              l =
                "stable both-edges" === getComputedStyle(i).scrollbarGutter
                  ? o / 2
                  : o;
            l <= 25 && (s -= l);
          }
          return { width: s, height: a, x: u, y: c };
        })(e, n, t);
      else if ("document" === t) {
        let t, n, i, l, s, a;
        ((r = (0, Y.getDocumentElement)(e)),
          (t = (0, Y.getNodeScroll)(r)),
          (n = r.ownerDocument.body),
          (i = u(r.scrollWidth, r.clientWidth, n.scrollWidth, n.clientWidth)),
          (l = u(
            r.scrollHeight,
            r.clientHeight,
            n.scrollHeight,
            n.clientHeight,
          )),
          (s = -t.scrollLeft + Q(r)),
          (a = -t.scrollTop),
          "rtl" === (0, Y.getComputedStyle)(n).direction &&
            (s += u(r.clientWidth, n.clientWidth) - i),
          (o = { width: i, height: l, x: s, y: a }));
      } else if ((0, Y.isElement)(t)) {
        let e, r, i, l, s, a;
        ((r = (e = J(t, !0, "fixed" === n)).top + t.clientTop),
          (i = e.left + t.clientLeft),
          (l = G(t)),
          (s = t.clientWidth * l.x),
          (a = t.clientHeight * l.y),
          (o = { width: s, height: a, x: i * l.x, y: r * l.y }));
      } else {
        let n = X(e);
        o = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
      }
      return L(o);
    }
    function et(e) {
      return "static" === (0, Y.getComputedStyle)(e).position;
    }
    function en(e, t) {
      if (
        !(0, Y.isHTMLElement)(e) ||
        "fixed" === (0, Y.getComputedStyle)(e).position
      )
        return null;
      if (t) return t(e);
      let n = e.offsetParent;
      return (
        (0, Y.getDocumentElement)(e) === n && (n = n.ownerDocument.body),
        n
      );
    }
    function er(e, t) {
      let n = (0, Y.getWindow)(e);
      if ((0, Y.isTopLayer)(e)) return n;
      if (!(0, Y.isHTMLElement)(e)) {
        let t = (0, Y.getParentNode)(e);
        for (; t && !(0, Y.isLastTraversableNode)(t); ) {
          if ((0, Y.isElement)(t) && !et(t)) return t;
          t = (0, Y.getParentNode)(t);
        }
        return n;
      }
      let r = en(e, t);
      for (; r && (0, Y.isTableElement)(r) && et(r); ) r = en(r, t);
      return r &&
        (0, Y.isLastTraversableNode)(r) &&
        et(r) &&
        !(0, Y.isContainingBlock)(r)
        ? n
        : r || (0, Y.getContainingBlock)(e) || n;
    }
    let eo = async function (e) {
        let t = this.getOffsetParent || er,
          n = this.getDimensions,
          r = await n(e.floating);
        return {
          reference: (function (e, t, n) {
            let r = (0, Y.isHTMLElement)(t),
              o = (0, Y.getDocumentElement)(t),
              i = "fixed" === n,
              l = J(e, !0, i, t),
              s = { scrollLeft: 0, scrollTop: 0 },
              a = f(0);
            if (
              (r || !i) &&
              (("body" !== (0, Y.getNodeName)(t) ||
                (0, Y.isOverflowElement)(o)) &&
                (s = (0, Y.getNodeScroll)(t)),
              r)
            ) {
              let e = J(t, !0, i, t);
              ((a.x = e.x + t.clientLeft), (a.y = e.y + t.clientTop));
            }
            !r && o && (a.x = Q(o));
            let u = !o || r || i ? f(0) : Z(o, s);
            return {
              x: l.left + s.scrollLeft - a.x - u.x,
              y: l.top + s.scrollTop - a.y - u.y,
              width: l.width,
              height: l.height,
            };
          })(e.reference, await t(e.floating), e.strategy),
          floating: { x: 0, y: 0, width: r.width, height: r.height },
        };
      },
      ei = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
            i = "fixed" === o,
            l = (0, Y.getDocumentElement)(r),
            s = !!t && (0, Y.isTopLayer)(t.floating);
          if (r === l || (s && i)) return n;
          let a = { scrollLeft: 0, scrollTop: 0 },
            u = f(1),
            c = f(0),
            d = (0, Y.isHTMLElement)(r);
          if (
            (d || !i) &&
            (("body" !== (0, Y.getNodeName)(r) ||
              (0, Y.isOverflowElement)(l)) &&
              (a = (0, Y.getNodeScroll)(r)),
            d)
          ) {
            let e = J(r);
            ((u = G(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop));
          }
          let p = !l || d || i ? f(0) : Z(l, a);
          return {
            width: n.width * u.x,
            height: n.height * u.y,
            x: n.x * u.x - a.scrollLeft * u.x + c.x + p.x,
            y: n.y * u.y - a.scrollTop * u.y + c.y + p.y,
          };
        },
        getDocumentElement: Y.getDocumentElement,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
            i = [
              ...("clippingAncestors" === n
                ? (0, Y.isTopLayer)(t)
                  ? []
                  : (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = (0, Y.getOverflowAncestors)(e, [], !1).filter(
                          (e) =>
                            (0, Y.isElement)(e) &&
                            "body" !== (0, Y.getNodeName)(e),
                        ),
                        o = null,
                        i = "fixed" === (0, Y.getComputedStyle)(e).position,
                        l = i ? (0, Y.getParentNode)(e) : e;
                      for (
                        ;
                        (0, Y.isElement)(l) && !(0, Y.isLastTraversableNode)(l);
                      ) {
                        let e = (0, Y.getComputedStyle)(l),
                          t = (0, Y.isContainingBlock)(l),
                          n = o ? o.position : i ? "fixed" : "";
                        (t ||
                        ("fixed" !== n &&
                          ("absolute" !== n || "static" !== e.position))
                          ? (o = e)
                          : (r = r.filter((e) => e !== l)),
                          (l = (0, Y.getParentNode)(l)));
                      }
                      return (t.set(e, r), r);
                    })(t, this._c)
                : [].concat(n)),
              r,
            ],
            l = ee(t, i[0], o),
            s = l.top,
            c = l.right,
            d = l.bottom,
            f = l.left;
          for (let e = 1; e < i.length; e++) {
            let n = ee(t, i[e], o);
            ((s = u(n.top, s)),
              (c = a(n.right, c)),
              (d = a(n.bottom, d)),
              (f = u(n.left, f)));
          }
          return { width: c - f, height: d - s, x: f, y: s };
        },
        getOffsetParent: er,
        getElementRects: eo,
        getClientRects: function (e) {
          return e.getClientRects ? Array.from(e.getClientRects()) : [];
        },
        getDimensions: function (e) {
          let { width: t, height: n } = U(e);
          return { width: t, height: n };
        },
        getScale: G,
        isElement: Y.isElement,
        isRTL: function (e) {
          return "rtl" === (0, Y.getComputedStyle)(e).direction;
        },
      };
    function el(e, t) {
      return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height
      );
    }
    function es(e, t, n, r) {
      let o;
      void 0 === r && (r = {});
      let {
          ancestorScroll: i = !0,
          ancestorResize: l = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: c = "function" == typeof IntersectionObserver,
          animationFrame: f = !1,
        } = r,
        p = q(e),
        m =
          i || l
            ? [
                ...(p ? (0, Y.getOverflowAncestors)(p) : []),
                ...(t ? (0, Y.getOverflowAncestors)(t) : []),
              ]
            : [];
      m.forEach((e) => {
        (i && e.addEventListener("scroll", n),
          l && e.addEventListener("resize", n));
      });
      let g =
          p && c
            ? (function (e, t, n) {
                let r,
                  o = null,
                  i = (0, Y.getDocumentElement)(e);
                function l() {
                  var e;
                  (clearTimeout(r),
                    null == (e = o) || e.disconnect(),
                    (o = null));
                }
                function s(n, c) {
                  (void 0 === n && (n = !1), void 0 === c && (c = 1), l());
                  let f = e.getBoundingClientRect(),
                    { left: p, top: m, width: g, height: h } = f;
                  if ((n || t(), !g || !h)) return;
                  let b = {
                      rootMargin:
                        -d(m) +
                        "px " +
                        -d(i.clientWidth - (p + g)) +
                        "px " +
                        -d(i.clientHeight - (m + h)) +
                        "px " +
                        -d(p) +
                        "px",
                      threshold: u(0, a(1, c)) || 1,
                    },
                    v = !0;
                  function y(t) {
                    let n = t[0].intersectionRatio;
                    if (!el(f, e.getBoundingClientRect())) return s();
                    if (n !== c) {
                      if (!v) return s();
                      n
                        ? s(!1, n)
                        : (r = setTimeout(() => {
                            s(!1, 1e-7);
                          }, 1e3));
                    }
                    v = !1;
                  }
                  try {
                    o = new IntersectionObserver(y, {
                      ...b,
                      root: i.ownerDocument,
                    });
                  } catch (e) {
                    o = new IntersectionObserver(y, b);
                  }
                  o.observe(e);
                }
                let c = (0, Y.getWindow)(e),
                  f = () => s(n);
                return (
                  c.addEventListener("resize", f),
                  s(!0),
                  () => {
                    (c.removeEventListener("resize", f), l());
                  }
                );
              })(p, n, l)
            : null,
        h = -1,
        b = null;
      s &&
        ((b = new ResizeObserver((e) => {
          let [r] = e;
          (r &&
            r.target === p &&
            b &&
            t &&
            (b.unobserve(t),
            cancelAnimationFrame(h),
            (h = requestAnimationFrame(() => {
              var e;
              null == (e = b) || e.observe(t);
            }))),
            n());
        })),
        p && !f && b.observe(p),
        t && b.observe(t));
      let v = f ? J(e) : null;
      return (
        f &&
          (function t() {
            let r = J(e);
            (v && !el(v, r) && n(), (v = r), (o = requestAnimationFrame(t)));
          })(),
        n(),
        () => {
          var e;
          (m.forEach((e) => {
            (i && e.removeEventListener("scroll", n),
              l && e.removeEventListener("resize", n));
          }),
            null == g || g(),
            null == (e = b) || e.disconnect(),
            (b = null),
            f && cancelAnimationFrame(o));
        }
      );
    }
    var ea = e.i(74080),
      eu = "u" > typeof document ? i.useLayoutEffect : function () {};
    function ec(e, t) {
      let n, r, o;
      if (e === t) return !0;
      if (typeof e != typeof t) return !1;
      if ("function" == typeof e && e.toString() === t.toString()) return !0;
      if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
          if ((n = e.length) !== t.length) return !1;
          for (r = n; 0 != r--; ) if (!ec(e[r], t[r])) return !1;
          return !0;
        }
        if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
          return !1;
        for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; 0 != r--; ) {
          let n = o[r];
          if (("_owner" !== n || !e.$$typeof) && !ec(e[n], t[n])) return !1;
        }
        return !0;
      }
      return e != e && t != t;
    }
    function ed(e) {
      return "u" < typeof window
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
    }
    function ef(e, t) {
      let n = ed(e);
      return Math.round(t * n) / n;
    }
    function ep(e) {
      let t = i.useRef(e);
      return (
        eu(() => {
          t.current = e;
        }),
        t
      );
    }
    var em = e.i(46420);
    e.i(47167);
    var eg = e.i(83977),
      eh = e.i(88940),
      eb = e.i(90627),
      ev = e.i(56341),
      ey = e.i(72855);
    let eE = (void 0 === (o = n) && (o = {}),
      {
        name: (t = {
          name: "hide",
          options: o,
          async fn(e) {
            let { rects: t, platform: n } = e,
              { strategy: r = "referenceHidden", ...i } = g(o, e);
            switch (r) {
              case "referenceHidden": {
                let r = B(
                  await n.detectOverflow(e, {
                    ...i,
                    elementContext: "reference",
                  }),
                  t.reference,
                );
                return {
                  data: { referenceHiddenOffsets: r, referenceHidden: _(r) },
                };
              }
              case "escaped": {
                let r = B(
                  await n.detectOverflow(e, { ...i, altBoundary: !0 }),
                  t.floating,
                );
                return { data: { escapedOffsets: r, escaped: _(r) } };
              }
              default:
                return {};
            }
          },
        }).name,
        fn: t.fn,
        options: [n, r],
      }).fn,
      ew = {
        name: "hide",
        async fn(e) {
          let { width: t, height: n, x: r, y: o } = e.rects.reference,
            i = await eE(e);
          return {
            data: {
              referenceHidden:
                i.data?.referenceHidden ||
                (0 === t && 0 === n && 0 === r && 0 === o),
            },
          };
        },
      },
      ex = { sideX: "left", sideY: "top" };
    function eS(e, t, n) {
      let r = "inline-start" === e || "inline-end" === e;
      return {
        top: "top",
        right: r ? (n ? "inline-start" : "inline-end") : "right",
        bottom: "bottom",
        left: r ? (n ? "inline-end" : "inline-start") : "left",
      }[t];
    }
    function ek(e, t, n) {
      let { rects: r, placement: o } = e;
      return {
        side: eS(t, h(o), n),
        align: b(o) || "center",
        anchor: { width: r.reference.width, height: r.reference.height },
        positioner: { width: r.floating.width, height: r.floating.height },
      };
    }
    function eT(e) {
      return null != e && "current" in e;
    }
    (e.s(
      [
        "DEFAULT_SIDES",
        0,
        ex,
        "adaptiveOrigin",
        0,
        {
          name: "adaptiveOrigin",
          async fn(e) {
            let {
                x: t,
                y: n,
                rects: { floating: r },
                elements: { floating: o },
                platform: i,
                strategy: l,
                placement: s,
              } = e,
              a = (0, N.ownerWindow)(o),
              u = a.getComputedStyle(o);
            if ("0s" === u.transitionDuration || "" === u.transitionDuration)
              return { x: t, y: n, data: ex };
            let c = await i.getOffsetParent?.(o),
              d = { width: 0, height: 0 };
            if ("fixed" === l && a?.visualViewport)
              d = {
                width: a.visualViewport.width,
                height: a.visualViewport.height,
              };
            else if (c === a) {
              let e = (0, M.ownerDocument)(o);
              d = {
                width: e.documentElement.clientWidth,
                height: e.documentElement.clientHeight,
              };
            } else (await i.isElement?.(c)) && (d = await i.getDimensions(c));
            let f = h(s),
              p = t,
              m = n;
            return (
              "left" === f && (p = d.width - (t + r.width)),
              "top" === f && (m = d.height - (n + r.height)),
              {
                x: p,
                y: m,
                data: {
                  sideX: "left" === f ? "right" : ex.sideX,
                  sideY: "top" === f ? "bottom" : ex.sideY,
                },
              }
            );
          },
        },
      ],
      60495,
    ),
      e.s(
        [
          "useAnchorPositioning",
          0,
          function (e) {
            var t, n, r, o, l, s, c, d, f, p, k, T, C, R;
            let O,
              L,
              W,
              H,
              {
                anchor: B,
                positionMethod: _ = "absolute",
                side: U = "bottom",
                sideOffset: q = 0,
                align: G = "center",
                alignOffset: K = 0,
                collisionBoundary: X,
                collisionPadding: J = 5,
                sticky: Q = !1,
                arrowPadding: Z = 5,
                disableAnchorTracking: ee = !1,
                inline: et,
                keepMounted: en = !1,
                floatingRootContext: er,
                mounted: eo,
                collisionAvoidance: el,
                shiftCrossAxis: eE = !1,
                nodeId: eC,
                adaptiveOrigin: eR,
                lazyFlip: eO = !1,
                externalTree: eP,
              } = e,
              [eA, eI] = i.useState(null);
            eo || null === eA || eI(null);
            let eL = el.side || "flip",
              eM = el.align || "flip",
              eN = el.fallbackAxisSide || "end",
              eD = "function" == typeof B ? B : void 0,
              eF = (0, z.useStableCallback)(eD),
              ez = eD ? eF : B,
              eW = (0, F.useValueAsRef)(B),
              eH = (0, F.useValueAsRef)(eo),
              ej = "rtl" === (0, ey.useDirection)(),
              eB =
                eA ||
                {
                  top: "top",
                  right: "right",
                  bottom: "bottom",
                  left: "left",
                  "inline-end": ej ? "left" : "right",
                  "inline-start": ej ? "right" : "left",
                }[U],
              e_ = "center" === G ? eB : `${eB}-${G}`,
              eV = J,
              e$ = +("bottom" === U),
              eY = +("top" === U),
              eU = +("right" === U),
              eq = +("left" === U);
            "number" == typeof eV
              ? (eV = {
                  top: eV + e$,
                  right: eV + eq,
                  bottom: eV + eY,
                  left: eV + eU,
                })
              : eV &&
                (eV = {
                  top: (eV.top || 0) + e$,
                  right: (eV.right || 0) + eq,
                  bottom: (eV.bottom || 0) + eY,
                  left: (eV.left || 0) + eU,
                });
            let eG = {
                boundary: "clipping-ancestors" === X ? "clippingAncestors" : X,
                padding: eV,
              },
              eK = i.useRef(null),
              eX = (0, F.useValueAsRef)(q),
              eJ = (0, F.useValueAsRef)(K),
              eQ = [];
            (et && eQ.push(et),
              eQ.push(
                ((t = (e) => {
                  let t = ek(e, U, ej),
                    n =
                      "function" == typeof eX.current
                        ? eX.current(t)
                        : eX.current,
                    r =
                      "function" == typeof eJ.current
                        ? eJ.current(t)
                        : eJ.current;
                  return { mainAxis: n, crossAxis: r, alignmentAxis: r };
                }),
                (n = [
                  "function" != typeof q ? q : 0,
                  "function" != typeof K ? K : 0,
                  ej,
                  U,
                ]),
                void 0 === (r = t) && (r = 0),
                {
                  name: (O = {
                    name: "offset",
                    options: r,
                    async fn(e) {
                      var t, n;
                      let { x: o, y: i, placement: l, middlewareData: s } = e,
                        a = await $(e, r);
                      return l ===
                        (null == (t = s.offset) ? void 0 : t.placement) &&
                        null != (n = s.arrow) &&
                        n.alignmentOffset
                        ? {}
                        : {
                            x: o + a.x,
                            y: i + a.y,
                            data: { ...a, placement: l },
                          };
                    },
                  }).name,
                  fn: O.fn,
                  options: [t, n],
                }),
              ));
            let eZ = "none" === eM && "shift" !== eL,
              e0 = !eZ && (Q || eE || "shift" === eL),
              e1 =
                "none" === eL
                  ? null
                  : {
                      name: (L = {
                        name: "flip",
                        options:
                          (s = o =
                            {
                              ...eG,
                              padding: {
                                top: eV.top + 1,
                                right: eV.right + 1,
                                bottom: eV.bottom + 1,
                                left: eV.left + 1,
                              },
                              mainAxis: !eE && "flip" === eL,
                              crossAxis: "flip" === eM && "alignment",
                              fallbackAxisSideDirection: eN,
                            }),
                        async fn(e) {
                          var t, n, r, o, i;
                          let {
                              placement: l,
                              middlewareData: a,
                              rects: u,
                              initialPlacement: c,
                              platform: d,
                              elements: f,
                            } = e,
                            {
                              mainAxis: p = !0,
                              crossAxis: m = !0,
                              fallbackPlacements: b,
                              fallbackStrategy: v = "bestFit",
                              fallbackAxisSideDirection: y = "none",
                              flipAlignment: w = !0,
                              ...k
                            } = g(s, e);
                          if (null != (t = a.arrow) && t.alignmentOffset)
                            return {};
                          let T = h(l),
                            C = E(c),
                            R = h(c) === c,
                            O = await (null == d.isRTL
                              ? void 0
                              : d.isRTL(f.floating)),
                            I = b || (R || !w ? [A(c)] : S(c)),
                            L = "none" !== y;
                          !b && L && I.push(...P(c, w, y, O));
                          let M = [c, ...I],
                            N = await d.detectOverflow(e, k),
                            D = [],
                            F =
                              (null == (n = a.flip) ? void 0 : n.overflows) ||
                              [];
                          if ((p && D.push(N[T]), m)) {
                            let e = x(l, u, O);
                            D.push(N[e[0]], N[e[1]]);
                          }
                          if (
                            ((F = [...F, { placement: l, overflows: D }]),
                            !D.every((e) => e <= 0))
                          ) {
                            let e =
                                ((null == (r = a.flip) ? void 0 : r.index) ||
                                  0) + 1,
                              t = M[e];
                            if (
                              t &&
                              ("alignment" !== m ||
                                C === E(t) ||
                                F.every(
                                  (e) =>
                                    E(e.placement) !== C || e.overflows[0] > 0,
                                ))
                            )
                              return {
                                data: { index: e, overflows: F },
                                reset: { placement: t },
                              };
                            let n =
                              null ==
                              (o = F.filter((e) => e.overflows[0] <= 0).sort(
                                (e, t) => e.overflows[1] - t.overflows[1],
                              )[0])
                                ? void 0
                                : o.placement;
                            if (!n)
                              switch (v) {
                                case "bestFit": {
                                  let e =
                                    null ==
                                    (i = F.filter((e) => {
                                      if (L) {
                                        let t = E(e.placement);
                                        return t === C || "y" === t;
                                      }
                                      return !0;
                                    })
                                      .map((e) => [
                                        e.placement,
                                        e.overflows
                                          .filter((e) => e > 0)
                                          .reduce((e, t) => e + t, 0),
                                      ])
                                      .sort((e, t) => e[1] - t[1])[0])
                                      ? void 0
                                      : i[0];
                                  e && (n = e);
                                  break;
                                }
                                case "initialPlacement":
                                  n = c;
                              }
                            if (l !== n) return { reset: { placement: n } };
                          }
                          return {};
                        },
                      }).name,
                      fn: L.fn,
                      options: [o, l],
                    },
              e5 = eZ
                ? null
                : ((c = (e) => {
                    var t, n, r;
                    let o = (0, M.ownerDocument)(
                      e.elements.floating,
                    ).documentElement;
                    return {
                      ...eG,
                      rootBoundary: eE
                        ? {
                            x: 0,
                            y: 0,
                            width: o.clientWidth,
                            height: o.clientHeight,
                          }
                        : void 0,
                      mainAxis: "none" !== eM,
                      crossAxis: e0,
                      limiter:
                        Q || eE
                          ? void 0
                          : {
                              fn: (void 0 ===
                                (r = t =
                                  (e) => {
                                    if (!eK.current) return {};
                                    let { width: t, height: n } =
                                        eK.current.getBoundingClientRect(),
                                      r = E(h(e.placement)),
                                      o =
                                        "y" === r
                                          ? eV.left + eV.right
                                          : eV.top + eV.bottom;
                                    return {
                                      offset: ("y" === r ? t : n) / 2 + o / 2,
                                    };
                                  }) && (r = {}),
                              {
                                options: r,
                                fn(e) {
                                  var t, n, o, i;
                                  let {
                                      x: l,
                                      y: s,
                                      placement: a,
                                      rects: u,
                                      middlewareData: c,
                                    } = e,
                                    {
                                      offset: d = 0,
                                      mainAxis: f = !0,
                                      crossAxis: p = !0,
                                    } = g(r, e),
                                    m = { x: l, y: s },
                                    b = E(a),
                                    y = v(b),
                                    w = m[y],
                                    x = m[b],
                                    S = g(d, e),
                                    k =
                                      "number" == typeof S
                                        ? { mainAxis: S, crossAxis: 0 }
                                        : {
                                            mainAxis:
                                              null != (t = S.mainAxis) ? t : 0,
                                            crossAxis:
                                              null != (n = S.crossAxis) ? n : 0,
                                          };
                                  if (f) {
                                    let e = "y" === y ? "height" : "width",
                                      t =
                                        u.reference[y] -
                                        u.floating[e] +
                                        k.mainAxis,
                                      n =
                                        u.reference[y] +
                                        u.reference[e] -
                                        k.mainAxis;
                                    w < t ? (w = t) : w > n && (w = n);
                                  }
                                  if (p) {
                                    let e = "y" === y ? "width" : "height",
                                      t = V.has(h(a)),
                                      n =
                                        u.reference[b] -
                                        u.floating[e] +
                                        ((t &&
                                          (null == (o = c.offset)
                                            ? void 0
                                            : o[b])) ||
                                          0) +
                                        (t ? 0 : k.crossAxis),
                                      r =
                                        u.reference[b] +
                                        u.reference[e] +
                                        (t
                                          ? 0
                                          : (null == (i = c.offset)
                                              ? void 0
                                              : i[b]) || 0) -
                                        (t ? k.crossAxis : 0);
                                    x < n ? (x = n) : x > r && (x = r);
                                  }
                                  return { [y]: w, [b]: x };
                                },
                              }).fn,
                              options: [t, n],
                            },
                    };
                  }),
                  (d = [eG, Q, eE, eV, eM]),
                  void 0 === (f = c) && (f = {}),
                  {
                    name: (W = {
                      name: "shift",
                      options: f,
                      async fn(e) {
                        let { x: t, y: n, placement: r, platform: o } = e,
                          {
                            mainAxis: i = !0,
                            crossAxis: l = !1,
                            limiter: s = {
                              fn: (e) => {
                                let { x: t, y: n } = e;
                                return { x: t, y: n };
                              },
                            },
                            ...a
                          } = g(f, e),
                          u = { x: t, y: n },
                          c = await o.detectOverflow(e, a),
                          d = E(r),
                          p = v(d),
                          h = u[p],
                          b = u[d],
                          y = (e, t) =>
                            m(
                              t + c["y" === e ? "top" : "left"],
                              t,
                              t - c["y" === e ? "bottom" : "right"],
                            );
                        (i && (h = y(p, h)), l && (b = y(d, b)));
                        let w = s.fn({ ...e, [p]: h, [d]: b });
                        return {
                          ...w,
                          data: {
                            x: w.x - t,
                            y: w.y - n,
                            enabled: { [p]: i, [d]: l },
                          },
                        };
                      },
                    }).name,
                    fn: W.fn,
                    options: [c, d],
                  });
            ("shift" === eL || "shift" === eM || "center" === G
              ? eQ.push(e5, e1)
              : eQ.push(e1, e5),
              eQ.push(
                {
                  name: (H = {
                    name: "size",
                    options:
                      (T = p =
                        {
                          ...eG,
                          apply({
                            elements: { floating: e },
                            availableWidth: t,
                            availableHeight: n,
                            rects: r,
                          }) {
                            if (!eH.current) return;
                            let o = e.style;
                            (o.setProperty("--available-width", `${t}px`),
                              o.setProperty("--available-height", `${n}px`));
                            let i = (0, N.ownerWindow)(e).devicePixelRatio || 1,
                              { x: l, y: s, width: a, height: u } = r.reference,
                              c =
                                (Math.round((l + a) * i) - Math.round(l * i)) /
                                i,
                              d =
                                (Math.round((s + u) * i) - Math.round(s * i)) /
                                i;
                            (o.setProperty("--anchor-width", `${c}px`),
                              o.setProperty("--anchor-height", `${d}px`));
                          },
                        }),
                    async fn(e) {
                      let t,
                        n,
                        {
                          placement: r,
                          rects: o,
                          platform: i,
                          elements: l,
                        } = e,
                        { apply: s = () => {}, ...c } = g(T, e),
                        d = await i.detectOverflow(e, c),
                        f = h(r),
                        p = b(r),
                        m = "y" === E(r),
                        { width: v, height: y } = o.floating;
                      "top" === f || "bottom" === f
                        ? ((t = f),
                          (n =
                            p ===
                            ((await (null == i.isRTL
                              ? void 0
                              : i.isRTL(l.floating)))
                              ? "start"
                              : "end")
                              ? "left"
                              : "right"))
                        : ((n = f), (t = "end" === p ? "top" : "bottom"));
                      let w = y - d.top - d.bottom,
                        x = v - d.left - d.right,
                        S = a(y - d[t], w),
                        k = a(v - d[n], x),
                        C = e.middlewareData.shift,
                        R = !C,
                        O = S,
                        P = k;
                      (null != C && C.enabled.x && (P = x),
                        null != C && C.enabled.y && (O = w),
                        R &&
                          !p &&
                          (m
                            ? (P = v - 2 * u(d.left, d.right))
                            : (O = y - 2 * u(d.top, d.bottom))),
                        await s({
                          ...e,
                          availableWidth: P,
                          availableHeight: O,
                        }));
                      let A = await i.getDimensions(l.floating);
                      return v !== A.width || y !== A.height
                        ? { reset: { rects: !0 } }
                        : {};
                    },
                  }).name,
                  fn: H.fn,
                  options: [p, k],
                },
                ((C = (e) => ({
                  element:
                    eK.current ||
                    (0, M.ownerDocument)(e.elements.floating).createElement(
                      "div",
                    ),
                  padding: Z,
                  offsetParent: "floating",
                })),
                (R = [Z]),
                {
                  name: "arrow",
                  options: C,
                  async fn(e) {
                    let {
                        x: t,
                        y: n,
                        placement: r,
                        rects: o,
                        platform: i,
                        elements: l,
                        middlewareData: s,
                      } = e,
                      {
                        element: a,
                        padding: u = 0,
                        offsetParent: c = "real",
                      } = g(C, e) || {};
                    if (null == a) return {};
                    let d = I(u),
                      f = { x: t, y: n },
                      p = w(r),
                      h = y(p),
                      v = await i.getDimensions(a),
                      E = "y" === p,
                      x = E ? "clientHeight" : "clientWidth",
                      S =
                        o.reference[h] + o.reference[p] - f[p] - o.floating[h],
                      k = f[p] - o.reference[p],
                      T =
                        "real" === c
                          ? await i.getOffsetParent?.(a)
                          : l.floating,
                      R = l.floating[x] || o.floating[h];
                    (R && (await i.isElement?.(T))) ||
                      (R = l.floating[x] || o.floating[h]);
                    let O = R / 2 - v[h] / 2 - 1,
                      P = Math.min(d[E ? "top" : "left"], O),
                      A = Math.min(d[E ? "bottom" : "right"], O),
                      L = R - v[h] - A,
                      M = R / 2 - v[h] / 2 + (S / 2 - k / 2),
                      N = m(P, M, L),
                      D =
                        !s.arrow &&
                        null != b(r) &&
                        M !== N &&
                        o.reference[h] / 2 - (M < P ? P : A) - v[h] / 2 < 0,
                      F = D ? (M < P ? M - P : M - L) : 0;
                    return {
                      [p]: f[p] + F,
                      data: {
                        [p]: N,
                        centerOffset: M - N - F,
                        ...(D && { alignmentOffset: F }),
                      },
                      reset: D,
                    };
                  },
                  options: [C, R],
                }),
                {
                  name: "transformOrigin",
                  fn(e) {
                    let {
                        elements: t,
                        middlewareData: n,
                        placement: r,
                        rects: o,
                        y: i,
                      } = e,
                      l = h(r),
                      s = E(l),
                      a = eK.current,
                      u = n.arrow?.x || 0,
                      c = n.arrow?.y || 0,
                      d = a?.clientWidth || 0,
                      f = a?.clientHeight || 0,
                      p = u + d / 2,
                      m = c + f / 2,
                      g = Math.abs(n.shift?.y || 0),
                      b = o.reference.height / 2,
                      v = "function" == typeof q ? q(ek(e, U, ej)) : q,
                      y = g > v,
                      w = {
                        top: `${p}px calc(100% + ${v}px)`,
                        bottom: `${p}px ${-v}px`,
                        left: `calc(100% + ${v}px) ${m}px`,
                        right: `${-v}px ${m}px`,
                      }[l],
                      x = `${p}px ${o.reference.y + b - i}px`;
                    return (
                      t.floating.style.setProperty(
                        "--transform-origin",
                        e0 && "y" === s && y ? x : w,
                      ),
                      {}
                    );
                  },
                },
                ew,
                eR,
              ),
              (0, D.useIsoLayoutEffect)(() => {
                !eo &&
                  er &&
                  er.update({
                    referenceElement: null,
                    floatingElement: null,
                    domReferenceElement: null,
                    positionReference: null,
                  });
              }, [eo, er]));
            let e4 = i.useMemo(
                () => ({
                  elementResize: !ee && "u" > typeof ResizeObserver,
                  layoutShift: !ee && "u" > typeof IntersectionObserver,
                }),
                [ee],
              ),
              {
                refs: e6,
                elements: e7,
                x: e2,
                y: e3,
                middlewareData: e8,
                update: e9,
                placement: te,
                context: tt,
                isPositioned: tn,
                floatingStyles: tr,
              } = (function (e = {}) {
                let { nodeId: t, externalTree: n } = e,
                  r = (function (e) {
                    let { open: t = !1, onOpenChange: n, elements: r = {} } = e,
                      o = (0, eg.useId)(),
                      i = null != (0, em.useFloatingParentNodeId)(),
                      l = (0, eh.useRefWithInit)(
                        () =>
                          new ev.FloatingRootStore({
                            open: t,
                            transitionStatus: void 0,
                            onOpenChange: n,
                            referenceElement: r.reference ?? null,
                            floatingElement: r.floating ?? null,
                            triggerElements: new eb.PopupTriggerMap(),
                            floatingId: o,
                            syncOnly: !1,
                            nested: i,
                          }),
                      ).current;
                    return (
                      (0, D.useIsoLayoutEffect)(() => {
                        let e = { open: t, floatingId: o };
                        (void 0 !== r.reference &&
                          ((e.referenceElement = r.reference),
                          (e.domReferenceElement = (0, Y.isElement)(r.reference)
                            ? r.reference
                            : null)),
                          void 0 !== r.floating &&
                            (e.floatingElement = r.floating),
                          l.update(e));
                      }, [t, o, r.reference, r.floating, l]),
                      (l.context.onOpenChange = n),
                      (l.context.nested = i),
                      l
                    );
                  })(e),
                  o = e.rootContext || r,
                  l = o.useState("referenceElement"),
                  s = o.useState("floatingElement"),
                  a = o.useState("domReferenceElement"),
                  u = o.useState("open"),
                  c = o.useState("floatingId"),
                  [d, f] = i.useState(null),
                  [p, m] = i.useState(void 0),
                  [g, h] = i.useState(void 0),
                  b = i.useRef(null),
                  v = (0, em.useFloatingTree)(n),
                  y = i.useMemo(
                    () => ({ reference: l, floating: s, domReference: a }),
                    [l, s, a],
                  ),
                  E = (function (e) {
                    void 0 === e && (e = {});
                    let {
                        placement: t = "bottom",
                        strategy: n = "absolute",
                        middleware: r = [],
                        platform: o,
                        elements: { reference: l, floating: s } = {},
                        transform: a = !0,
                        whileElementsMounted: u,
                        open: c,
                      } = e,
                      [d, f] = i.useState({
                        x: 0,
                        y: 0,
                        strategy: n,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1,
                      }),
                      [p, m] = i.useState(r);
                    ec(p, r) || m(r);
                    let [g, h] = i.useState(null),
                      [b, v] = i.useState(null),
                      y = i.useCallback((e) => {
                        e !== S.current && ((S.current = e), h(e));
                      }, []),
                      E = i.useCallback((e) => {
                        e !== k.current && ((k.current = e), v(e));
                      }, []),
                      w = l || g,
                      x = s || b,
                      S = i.useRef(null),
                      k = i.useRef(null),
                      T = i.useRef(d),
                      C = null != u,
                      R = ep(u),
                      O = ep(o),
                      P = ep(c),
                      A = i.useCallback(() => {
                        var e, r;
                        let o, i, l;
                        if (!S.current || !k.current) return;
                        let s = { placement: t, strategy: n, middleware: p };
                        (O.current && (s.platform = O.current),
                          ((e = S.current),
                          (r = k.current),
                          (o = new Map()),
                          (i = null != s ? s : {}),
                          (l = { ...ei, ...i.platform, _c: o }),
                          j(e, r, { ...i, platform: l })).then((e) => {
                            let t = { ...e, isPositioned: !1 !== P.current };
                            I.current &&
                              !ec(T.current, t) &&
                              ((T.current = t),
                              ea.flushSync(() => {
                                f(t);
                              }));
                          }));
                      }, [p, t, n, O, P]);
                    eu(() => {
                      !1 === c &&
                        T.current.isPositioned &&
                        ((T.current.isPositioned = !1),
                        f((e) => ({ ...e, isPositioned: !1 })));
                    }, [c]);
                    let I = i.useRef(!1);
                    (eu(
                      () => (
                        (I.current = !0),
                        () => {
                          I.current = !1;
                        }
                      ),
                      [],
                    ),
                      eu(() => {
                        if (
                          (w && (S.current = w), x && (k.current = x), w && x)
                        ) {
                          if (R.current) return R.current(w, x, A);
                          A();
                        }
                      }, [w, x, A, R, C]));
                    let L = i.useMemo(
                        () => ({
                          reference: S,
                          floating: k,
                          setReference: y,
                          setFloating: E,
                        }),
                        [y, E],
                      ),
                      M = i.useMemo(
                        () => ({ reference: w, floating: x }),
                        [w, x],
                      ),
                      N = i.useMemo(() => {
                        let e = { position: n, left: 0, top: 0 };
                        if (!M.floating) return e;
                        let t = ef(M.floating, d.x),
                          r = ef(M.floating, d.y);
                        return a
                          ? {
                              ...e,
                              transform: "translate(" + t + "px, " + r + "px)",
                              ...(ed(M.floating) >= 1.5 && {
                                willChange: "transform",
                              }),
                            }
                          : { position: n, left: t, top: r };
                      }, [n, a, M.floating, d.x, d.y]);
                    return i.useMemo(
                      () => ({
                        ...d,
                        update: A,
                        refs: L,
                        elements: M,
                        floatingStyles: N,
                      }),
                      [d, A, L, M, N],
                    );
                  })({ ...e, elements: { ...y, ...(d && { reference: d }) } }),
                  w = (0, Y.isElement)(p) ? p : null,
                  x = void 0 === g ? o.state.floatingElement : g;
                (o.useSyncedValue("referenceElement", p ?? null),
                  o.useSyncedValue("domReferenceElement", void 0 === p ? a : w),
                  o.useSyncedValue("floatingElement", x));
                let S = i.useCallback(
                    (e) => {
                      let t = (0, Y.isElement)(e)
                        ? {
                            getBoundingClientRect: () =>
                              e.getBoundingClientRect(),
                            getClientRects: () => e.getClientRects(),
                            contextElement: e,
                          }
                        : e;
                      (f(t), E.refs.setReference(t));
                    },
                    [E.refs],
                  ),
                  k = i.useCallback(
                    (e) => {
                      (((0, Y.isElement)(e) || null === e) &&
                        ((b.current = e), m(e)),
                        ((0, Y.isElement)(E.refs.reference.current) ||
                          null === E.refs.reference.current ||
                          (null !== e && !(0, Y.isElement)(e))) &&
                          E.refs.setReference(e));
                    },
                    [E.refs, m],
                  ),
                  T = i.useCallback(
                    (e) => {
                      (h(e), E.refs.setFloating(e));
                    },
                    [E.refs],
                  ),
                  C = i.useMemo(
                    () => ({
                      ...E.refs,
                      setReference: k,
                      setFloating: T,
                      setPositionReference: S,
                      domReference: b,
                    }),
                    [E.refs, k, T, S],
                  ),
                  R = i.useMemo(
                    () => ({ ...E.elements, domReference: a }),
                    [E.elements, a],
                  ),
                  O = i.useMemo(
                    () => ({
                      ...E,
                      dataRef: o.context.dataRef,
                      open: u,
                      onOpenChange: o.setOpen,
                      events: o.context.events,
                      floatingId: c,
                      refs: C,
                      elements: R,
                      nodeId: t,
                      rootStore: o,
                    }),
                    [E, C, R, t, o, u, c],
                  );
                return (
                  (0, D.useIsoLayoutEffect)(() => {
                    a && (b.current = a);
                  }, [a]),
                  (0, D.useIsoLayoutEffect)(() => {
                    o.context.dataRef.current.floatingContext = O;
                    let e = v?.nodesRef.current.find((e) => e.id === t);
                    e && (e.context = O);
                  }),
                  i.useMemo(
                    () => ({
                      ...E,
                      context: O,
                      refs: C,
                      elements: R,
                      rootStore: o,
                    }),
                    [E, C, R, O, o],
                  )
                );
              })({
                rootContext: er,
                open: en ? eo : void 0,
                placement: e_,
                middleware: eQ,
                strategy: _,
                whileElementsMounted: en ? void 0 : (...e) => es(...e, e4),
                nodeId: eC,
                externalTree: eP,
              }),
              { sideX: to, sideY: ti } = e8.adaptiveOrigin || ex,
              tl = tn ? _ : "fixed",
              ts = i.useMemo(() => {
                let e = eR
                  ? { position: tl, [to]: e2, [ti]: e3 }
                  : { position: tl, ...tr };
                return (tn || (e.opacity = 0), e);
              }, [eR, tl, to, e2, ti, e3, tr, tn]),
              ta = i.useRef(null);
            ((0, D.useIsoLayoutEffect)(() => {
              if (!eo) return;
              let e = eW.current,
                t = "function" == typeof e ? e() : e,
                n = (eT(t) ? t.current : t) || null;
              n !== ta.current &&
                (e6.setPositionReference(n), (ta.current = n));
            }, [eo, e6, ez, eW]),
              i.useEffect(() => {
                if (!eo) return;
                let e = eW.current;
                "function" != typeof e &&
                  eT(e) &&
                  e.current !== ta.current &&
                  (e6.setPositionReference(e.current),
                  (ta.current = e.current));
              }, [eo, e6, ez, eW]),
              i.useEffect(() => {
                if (en && eo && e7.reference && e7.floating)
                  return es(e7.reference, e7.floating, e9, e4);
              }, [en, eo, e7, e9, e4]));
            let tu = h(te),
              tc = eS(U, tu, ej),
              td = b(te) || "center",
              tf = !!e8.hide?.referenceHidden;
            (0, D.useIsoLayoutEffect)(() => {
              eO && eo && tn && eI(tu);
            }, [eO, eo, tn, tu]);
            let tp = i.useMemo(
                () => ({
                  position: "absolute",
                  top: e8.arrow?.y,
                  left: e8.arrow?.x,
                }),
                [e8.arrow],
              ),
              tm = e8.arrow?.centerOffset !== 0;
            return i.useMemo(
              () => ({
                positionerStyles: ts,
                arrowStyles: tp,
                arrowRef: eK,
                arrowUncentered: tm,
                side: tc,
                align: td,
                physicalSide: tu,
                anchorHidden: tf,
                refs: e6,
                context: tt,
                isPositioned: tn,
                update: e9,
              }),
              [ts, tp, eK, tm, tc, td, tu, tf, e6, tt, tn, e9],
            );
          },
        ],
        29365,
      ));
  },
  426,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(43476);
    let r = t.forwardRef(function (e, t) {
      let r,
        { cutout: o, ...i } = e;
      if (o) {
        let e = o.getBoundingClientRect();
        r = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`;
      }
      return (0, n.jsx)("div", {
        ref: t,
        role: "presentation",
        "data-base-ui-inert": "",
        ...i,
        style: {
          position: "fixed",
          inset: 0,
          userSelect: "none",
          WebkitUserSelect: "none",
          clipPath: r,
        },
      });
    });
    e.s(["InternalBackdrop", 0, r]);
  },
  45484,
  (e) => {
    "use strict";
    var t = e.i(29315),
      n = e.i(74735),
      r = e.i(28744),
      o = e.i(8868),
      i = e.i(33848),
      l = e.i(46376),
      s = e.i(39957),
      a = e.i(8445),
      u = e.i(56789);
    let c = {},
      d = {},
      f = "";
    class p {
      lockCount = 0;
      restore = null;
      timeoutLock = s.Timeout.create();
      timeoutUnlock = s.Timeout.create();
      acquire(e) {
        return (
          (this.lockCount += 1),
          1 === this.lockCount &&
            null === this.restore &&
            this.timeoutLock.start(0, () => this.lock(e)),
          this.release
        );
      }
      release = () => {
        ((this.lockCount -= 1),
          0 === this.lockCount &&
            this.restore &&
            this.timeoutUnlock.start(0, this.unlock));
      };
      unlock = () => {
        0 === this.lockCount &&
          this.restore &&
          (this.restore?.(), (this.restore = null));
      };
      lock(e) {
        let l, s, p, m, g;
        if (0 === this.lockCount || null !== this.restore) return;
        let h = (0, o.ownerDocument)(e).documentElement,
          b = (0, i.ownerWindow)(h).getComputedStyle(h).overflowY;
        if ("hidden" === b || "clip" === b) {
          this.restore = u.NOOP;
          return;
        }
        let v =
          r.platform.os.ios ||
          !(function (e) {
            if ("u" < typeof document) return !1;
            let t = (0, o.ownerDocument)(e);
            return (
              (0, i.ownerWindow)(t).innerWidth - t.documentElement.clientWidth >
              0
            );
          })(e);
        this.restore = v
          ? ((s = (l = (0, o.ownerDocument)(e)).documentElement),
            (p = l.body),
            (g = {
              overflowY: (m = (0, t.isOverflowElement)(s) ? s : p).style
                .overflowY,
              overflowX: m.style.overflowX,
            }),
            Object.assign(m.style, {
              overflowY: "hidden",
              overflowX: "hidden",
            }),
            () => {
              Object.assign(m.style, g);
            })
          : (function (e) {
              let l = (0, o.ownerDocument)(e),
                s = l.documentElement,
                u = l.body,
                p = (0, i.ownerWindow)(s),
                m = 0,
                g = 0,
                h = !1,
                b = a.AnimationFrame.create();
              if (
                r.platform.engine.webkit &&
                (p.visualViewport?.scale ?? 1) !== 1
              )
                return () => {};
              function v() {
                let n = p.getComputedStyle(s),
                  r = p.getComputedStyle(u),
                  i = (n.scrollbarGutter || "").includes("both-edges")
                    ? "stable both-edges"
                    : "stable";
                ((m = s.scrollTop),
                  (g = s.scrollLeft),
                  (c = {
                    scrollbarGutter: s.style.scrollbarGutter,
                    overflowY: s.style.overflowY,
                    overflowX: s.style.overflowX,
                  }),
                  (f = s.style.scrollBehavior),
                  (d = {
                    position: u.style.position,
                    height: u.style.height,
                    width: u.style.width,
                    boxSizing: u.style.boxSizing,
                    overflowY: u.style.overflowY,
                    overflowX: u.style.overflowX,
                    scrollBehavior: u.style.scrollBehavior,
                  }));
                let l = s.scrollHeight > s.clientHeight,
                  a = s.scrollWidth > s.clientWidth,
                  b = "scroll" === n.overflowY || "scroll" === r.overflowY,
                  v = "scroll" === n.overflowX || "scroll" === r.overflowX,
                  y = Math.max(0, p.innerWidth - u.clientWidth),
                  E = Math.max(0, p.innerHeight - u.clientHeight),
                  w = parseFloat(r.marginTop) + parseFloat(r.marginBottom),
                  x = parseFloat(r.marginLeft) + parseFloat(r.marginRight),
                  S = (0, t.isOverflowElement)(s) ? s : u;
                if (
                  (h = (function (e) {
                    if (
                      !(
                        "u" > typeof CSS &&
                        CSS.supports &&
                        CSS.supports("scrollbar-gutter", "stable")
                      ) ||
                      "u" < typeof document
                    )
                      return !1;
                    let n = (0, o.ownerDocument)(e),
                      r = n.documentElement,
                      i = n.body,
                      l = (0, t.isOverflowElement)(r) ? r : i,
                      s = l.style.overflowY,
                      a = r.style.scrollbarGutter;
                    ((r.style.scrollbarGutter = "stable"),
                      (l.style.overflowY = "scroll"));
                    let u = l.offsetWidth;
                    l.style.overflowY = "hidden";
                    let c = l.offsetWidth;
                    return (
                      (l.style.overflowY = s),
                      (r.style.scrollbarGutter = a),
                      u === c
                    );
                  })(e))
                ) {
                  ((s.style.scrollbarGutter = i),
                    (S.style.overflowY = "hidden"),
                    (S.style.overflowX = "hidden"));
                  return;
                }
                (Object.assign(s.style, {
                  scrollbarGutter: i,
                  overflowY: "hidden",
                  overflowX: "hidden",
                }),
                  (l || b) && (s.style.overflowY = "scroll"),
                  (a || v) && (s.style.overflowX = "scroll"),
                  Object.assign(u.style, {
                    position: "relative",
                    height: w || E ? `calc(100dvh - ${w + E}px)` : "100dvh",
                    width: x || y ? `calc(100vw - ${x + y}px)` : "100vw",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    scrollBehavior: "unset",
                  }),
                  (u.scrollTop = m),
                  (u.scrollLeft = g),
                  s.setAttribute("data-base-ui-scroll-locked", ""),
                  (s.style.scrollBehavior = "unset"));
              }
              function y() {
                (Object.assign(s.style, c),
                  Object.assign(u.style, d),
                  h ||
                    ((s.scrollTop = m),
                    (s.scrollLeft = g),
                    s.removeAttribute("data-base-ui-scroll-locked"),
                    (s.style.scrollBehavior = f)));
              }
              v();
              let E = (0, n.addEventListener)(p, "resize", function () {
                (y(), b.request(v));
              });
              return () => {
                (b.cancel(),
                  y(),
                  "function" == typeof p.removeEventListener && E());
              };
            })(e);
      }
    }
    let m = new p();
    e.s([
      "useScrollLock",
      0,
      function (e = !0, t = null) {
        (0, l.useIsoLayoutEffect)(() => {
          if (e) return m.acquire(t);
        }, [e, t]);
      },
    ]);
  },
  89579,
  33383,
  (e) => {
    "use strict";
    var t = e.i(5005),
      n = e.i(52245),
      r = e.i(15982);
    e.s(
      [
        "usePositioner",
        0,
        function (
          e,
          o,
          {
            styles: i,
            transitionStatus: l,
            props: s,
            refs: a,
            hidden: u,
            inert: c = !1,
          },
        ) {
          let d = { ...i };
          return (
            c && (d.pointerEvents = "none"),
            (0, n.useRenderElement)("div", e, {
              state: o,
              ref: a,
              props: [
                { role: "presentation", hidden: u, style: d },
                (0, r.getDisabledMountTransitionStyles)(l),
                s,
              ],
              stateAttributesMapping: t.popupStateMapping,
            })
          );
        },
      ],
      89579,
    );
    var o = e.i(71645),
      i = e.i(8868),
      l = e.i(45484),
      s = e.i(46376);
    e.s(
      [
        "useAnchoredPopupScrollLock",
        0,
        function (e, t, n, r) {
          let [a, u] = o.useState(!1);
          ((0, s.useIsoLayoutEffect)(() => {
            if (!e || !t || null == n) return void u(!1);
            let r = (0, i.ownerDocument)(n).documentElement.clientWidth,
              o = n.offsetWidth;
            u(r > 0 && o > 0 && o >= r - 20);
          }, [e, t, n]),
            (0, l.useScrollLock)(e && (!t || a), r));
        },
      ],
      33383,
    );
  },
  17989,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(74735),
      r = e.i(65420),
      o = e.i(8868),
      i = e.i(67865),
      l = e.i(39957),
      s = e.i(29315),
      a = e.i(28744),
      u = e.i(46420),
      c = e.i(75606),
      d = e.i(56434),
      f = e.i(51321),
      p = e.i(47554),
      m = e.i(96296),
      g = e.i(57940),
      h = e.i(58408);
    function b() {
      return !1;
    }
    e.s([
      "useDismiss",
      0,
      function (e, v = {}) {
        let {
            enabled: y = !0,
            escapeKey: E = !0,
            outsidePress: w = !0,
            outsidePressEvent: x = "sloppy",
            referencePress: S = b,
            bubbles: k,
            externalTree: T,
          } = v,
          C = "rootStore" in e ? e.rootStore : e,
          R = C.useState("open"),
          O = C.useState("floatingElement"),
          { dataRef: P } = C.context,
          A = (0, u.useFloatingTree)(T),
          I = (0, i.useStableCallback)("function" == typeof w ? w : () => !1),
          L = "function" == typeof w ? I : w,
          M = !1 !== L,
          N = (0, i.useStableCallback)(() => x),
          { escapeKey: D, outsidePress: F } = {
            escapeKey: "boolean" == typeof k ? k : (k?.escapeKey ?? !1),
            outsidePress: "boolean" == typeof k ? k : (k?.outsidePress ?? !0),
          },
          z = t.useRef(!1),
          W = t.useRef(!1),
          H = t.useRef(!1),
          j = t.useRef(!1),
          B = t.useRef(""),
          _ = t.useRef(null),
          V = (0, l.useTimeout)(),
          $ = (0, l.useTimeout)(),
          Y = (0, i.useStableCallback)(() => {
            ($.clear(), (P.current.insideReactTree = !1));
          }),
          U = (0, i.useStableCallback)((e) => {
            let t = P.current.floatingContext?.nodeId;
            return (
              A ? (0, h.getNodeChildren)(A.nodesRef.current, t) : []
            ).some((t) => t.context?.open && !t.context.dataRef.current[e]);
          }),
          q = (0, i.useStableCallback)(
            (e) =>
              (0, m.isEventTargetWithin)(e, C.select("floatingElement")) ||
              (0, m.isEventTargetWithin)(e, C.select("domReferenceElement")),
          ),
          G = (0, i.useStableCallback)((e) => {
            S() &&
              C.setOpen(
                !1,
                (0, c.createChangeEventDetails)(
                  d.REASONS.triggerPress,
                  e.nativeEvent,
                ),
              );
          }),
          K = (0, i.useStableCallback)((e) => {
            if (
              !R ||
              !y ||
              !E ||
              "Escape" !== e.key ||
              j.current ||
              (!D && U("__escapeKeyBubbles"))
            )
              return;
            let t = (0, g.isReactEvent)(e) ? e.nativeEvent : e,
              n = (0, c.createChangeEventDetails)(d.REASONS.escapeKey, t);
            (C.setOpen(!1, n),
              n.isCanceled || e.preventDefault(),
              D || n.isPropagationAllowed || e.stopPropagation());
          }),
          X = (0, i.useStableCallback)(() => {
            ((P.current.insideReactTree = !0), $.start(0, Y));
          }),
          J = (0, i.useStableCallback)((e) => {
            if (!R || !y || 0 !== e.button) return;
            let t = (0, p.getTarget)(e.nativeEvent);
            (0, p.contains)(C.select("floatingElement"), t) &&
              (z.current || ((z.current = !0), (W.current = !1)));
          }),
          Q = (0, i.useStableCallback)((e) => {
            !R ||
              !y ||
              ((e.defaultPrevented || e.nativeEvent.defaultPrevented) &&
                z.current &&
                (W.current = !0));
          });
        (t.useEffect(() => {
          if (!R || !y) return;
          ((P.current.__escapeKeyBubbles = D),
            (P.current.__outsidePressBubbles = F));
          let e = new l.Timeout(),
            t = new l.Timeout();
          function i() {
            ((H.current = !0),
              t.start(0, () => {
                H.current = !1;
              }));
          }
          function u() {
            ((z.current = !1), (W.current = !1));
          }
          function g() {
            let e = B.current,
              t = N(),
              n = "function" == typeof t ? t() : t;
            return "string" == typeof n ? n : n["pen" !== e && e ? e : "mouse"];
          }
          function b(e) {
            let t = P.current.floatingContext?.nodeId,
              n =
                A &&
                (0, h.getNodeChildren)(A.nodesRef.current, t).some((t) =>
                  (0, m.isEventTargetWithin)(e, t.context?.elements.floating),
                );
            return q(e) || n;
          }
          function v(e) {
            let n;
            if (
              ("intentional" === (n = g()) && "click" !== e.type) ||
              ("sloppy" === n && "click" === e.type)
            ) {
              ("click" === e.type || q(e) || (t.clear(), (H.current = !1)),
                Y());
              return;
            }
            if (P.current.insideReactTree) return void Y();
            let r = (0, p.getTarget)(e),
              i = `[${(0, f.createAttribute)("inert")}]`,
              l = (0, s.isElement)(r) ? r.getRootNode() : null,
              a = Array.from(
                ((0, s.isShadowRoot)(l)
                  ? l
                  : (0, o.ownerDocument)(C.select("floatingElement"))
                ).querySelectorAll(i),
              ),
              u = C.context.triggerElements;
            if (
              r &&
              (u.hasElement(r) ||
                u.hasMatchingElement((e) => (0, p.contains)(e, r)))
            )
              return;
            let h = (0, s.isElement)(r) ? r : null;
            for (; h && !(0, s.isLastTraversableNode)(h); ) {
              let e = (0, s.getParentNode)(h);
              if ((0, s.isLastTraversableNode)(e) || !(0, s.isElement)(e))
                break;
              h = e;
            }
            if (
              !(
                a.length &&
                (0, s.isElement)(r) &&
                !(0, m.isRootElement)(r) &&
                !(0, p.contains)(r, C.select("floatingElement")) &&
                a.every((e) => !(0, p.contains)(h, e))
              )
            ) {
              if ((0, s.isHTMLElement)(r) && !("touches" in e)) {
                let t = (0, s.isLastTraversableNode)(r),
                  n = (0, s.getComputedStyle)(r),
                  o = /auto|scroll/,
                  i = t || o.test(n.overflowX),
                  l = t || o.test(n.overflowY),
                  a = i && r.clientWidth > 0 && r.scrollWidth > r.clientWidth,
                  u =
                    l && r.clientHeight > 0 && r.scrollHeight > r.clientHeight,
                  c = "rtl" === n.direction,
                  d =
                    u &&
                    (c
                      ? e.offsetX <= r.offsetWidth - r.clientWidth
                      : e.offsetX > r.clientWidth),
                  f = a && e.offsetY > r.clientHeight;
                if (d || f) return;
              }
              if (!b(e)) {
                if ("intentional" === g() && H.current) {
                  (t.clear(), (H.current = !1));
                  return;
                }
                ("function" == typeof L && !L(e)) ||
                  U("__outsidePressBubbles") ||
                  (C.setOpen(
                    !1,
                    (0, c.createChangeEventDetails)(d.REASONS.outsidePress, e),
                  ),
                  Y());
              }
            }
          }
          function w(e) {
            if ("sloppy" !== g() || !C.select("open") || !y || q(e)) return;
            let t = e.touches[0];
            t &&
              ((_.current = {
                startTime: Date.now(),
                startX: t.clientX,
                startY: t.clientY,
                dismissOnTouchEnd: !1,
                dismissOnMouseDown: !0,
              }),
              V.start(1e3, () => {
                _.current &&
                  ((_.current.dismissOnTouchEnd = !1),
                  (_.current.dismissOnMouseDown = !1));
              }));
          }
          function x(e, t) {
            let r = (0, p.getTarget)(e);
            if (!r) return;
            let o = (0, n.addEventListener)(r, e.type, () => {
              (t(e), o());
            });
          }
          function S(e) {
            (V.clear(),
              "pointerdown" === e.type && (B.current = e.pointerType),
              ("mousedown" !== e.type ||
                !_.current ||
                _.current.dismissOnMouseDown) &&
                x(e, (e) => {
                  if ("pointerdown" === e.type)
                    "sloppy" !== g() ||
                      "touch" === e.pointerType ||
                      !C.select("open") ||
                      !y ||
                      q(e) ||
                      v(e);
                  else v(e);
                }));
          }
          function k(e) {
            if (!z.current) return;
            let n = W.current;
            if ((u(), "intentional" === g())) {
              if ("pointercancel" === e.type) {
                n && i();
                return;
              }
              b(e) ||
                (n
                  ? i()
                  : ("function" != typeof L || L(e)) &&
                    (t.clear(), (H.current = !0), Y()));
            }
          }
          function T(e) {
            if ("sloppy" !== g() || !_.current || q(e)) return;
            let t = e.touches[0];
            if (!t) return;
            let n = Math.abs(t.clientX - _.current.startX),
              r = Math.abs(t.clientY - _.current.startY),
              o = Math.sqrt(n * n + r * r);
            (o > 5 && (_.current.dismissOnTouchEnd = !0),
              o > 10 && (v(e), V.clear(), (_.current = null)));
          }
          function I(e) {
            "sloppy" !== g() ||
              !_.current ||
              q(e) ||
              (_.current.dismissOnTouchEnd && v(e),
              V.clear(),
              (_.current = null));
          }
          let $ = (0, o.ownerDocument)(O),
            G = (0, r.mergeCleanups)(
              E &&
                (0, r.mergeCleanups)(
                  (0, n.addEventListener)($, "keydown", K),
                  (0, n.addEventListener)($, "compositionstart", function () {
                    (e.clear(), (j.current = !0));
                  }),
                  (0, n.addEventListener)($, "compositionend", function () {
                    e.start(5 * !!a.platform.engine.webkit, () => {
                      j.current = !1;
                    });
                  }),
                ),
              M &&
                (0, r.mergeCleanups)(
                  (0, n.addEventListener)($, "click", S, !0),
                  (0, n.addEventListener)($, "pointerdown", S, !0),
                  (0, n.addEventListener)($, "pointerup", k, !0),
                  (0, n.addEventListener)($, "pointercancel", k, !0),
                  (0, n.addEventListener)($, "mousedown", S, !0),
                  (0, n.addEventListener)($, "mouseup", k, !0),
                  (0, n.addEventListener)(
                    $,
                    "touchstart",
                    function (e) {
                      ((B.current = "touch"), x(e, w));
                    },
                    !0,
                  ),
                  (0, n.addEventListener)(
                    $,
                    "touchmove",
                    function (e) {
                      x(e, T);
                    },
                    !0,
                  ),
                  (0, n.addEventListener)(
                    $,
                    "touchend",
                    function (e) {
                      x(e, I);
                    },
                    !0,
                  ),
                ),
            );
          return () => {
            (G(), e.clear(), t.clear(), u(), (H.current = !1));
          };
        }, [P, O, E, M, L, R, y, D, F, K, Y, N, U, q, A, C, V]),
          t.useEffect(Y, [L, Y]));
        let Z = t.useMemo(
            () => ({ onKeyDown: K, onPointerDown: G, onClick: G }),
            [K, G],
          ),
          ee = t.useMemo(
            () => ({
              onKeyDown: K,
              onPointerDown: Q,
              onMouseDown: Q,
              onClickCapture: X,
              onMouseDownCapture(e) {
                (X(), J(e));
              },
              onPointerDownCapture(e) {
                (X(), J(e));
              },
              onMouseUpCapture: X,
              onTouchEndCapture: X,
              onTouchMoveCapture: X,
            }),
            [K, X, J, Q],
          );
        return t.useMemo(
          () => (y ? { reference: Z, floating: ee, trigger: Z } : {}),
          [y, Z, ee],
        );
      },
    ]);
  },
  50527,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(46376),
      r = e.i(29315),
      o = e.i(56341);
    e.s([
      "useSyncedFloatingRootContext",
      0,
      function (e) {
        let {
            popupStore: i,
            treatPopupAsFloatingElement: l = !1,
            floatingRootContext: s,
            floatingId: a,
            nested: u,
            onOpenChange: c,
          } = e,
          d = i.useState("open"),
          f = i.useState("activeTriggerElement"),
          p = i.useState(l ? "popupElement" : "positionerElement"),
          m = i.context.triggerElements,
          g = t.useRef(null);
        void 0 === s &&
          null === g.current &&
          (g.current = new o.FloatingRootStore({
            open: d,
            transitionStatus: void 0,
            referenceElement: f,
            floatingElement: p,
            triggerElements: m,
            onOpenChange: c,
            floatingId: a,
            syncOnly: !0,
            nested: u,
          }));
        let h = s ?? g.current;
        return (
          i.useSyncedValue("floatingId", a),
          (0, n.useIsoLayoutEffect)(() => {
            let e = {
              open: d,
              floatingId: a,
              referenceElement: f,
              floatingElement: p,
            };
            ((0, r.isElement)(f) && (e.domReferenceElement = f),
              h.state.positionReference === h.state.referenceElement &&
                (e.positionReference = f),
              h.update(e));
          }, [d, a, f, p, h]),
          (h.context.onOpenChange = c),
          (h.context.nested = u),
          h
        );
      },
    ]);
  },
  32199,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(67865),
      r = e.i(28744),
      o = e.i(46376);
    function i(e, o) {
      var i;
      let l,
        s,
        { onClick: a, onPointerDown: u } =
          ((i = (0, n.useStableCallback)((t, n) => {
            ("function" == typeof e ? e() : e) ||
              o(n || (r.platform.os.ios ? "touch" : ""));
          })),
          (l = t.useRef("")),
          (s = t.useCallback(
            (e) => {
              e.defaultPrevented ||
                ((l.current = e.pointerType), i(e, e.pointerType));
            },
            [i],
          )),
          {
            onClick: t.useCallback(
              (e) => {
                0 === e.detail
                  ? i(e, "keyboard")
                  : ("pointerType" in e ? i(e, e.pointerType) : i(e, l.current),
                    (l.current = ""));
              },
              [i],
            ),
            onPointerDown: s,
          });
      return t.useMemo(() => ({ onClick: a, onPointerDown: u }), [a, u]);
    }
    e.s(
      [
        "useOpenInteractionType",
        0,
        function (e) {
          var r;
          let l,
            s,
            [a, u] = t.useState(null),
            c = i(e, u);
          return (
            (r = (t) => {
              t && !e && u(null);
            }),
            (l = t.useRef(e)),
            (s = (0, n.useStableCallback)(r)),
            (0, o.useIsoLayoutEffect)(() => {
              l.current !== e && s(l.current);
            }, [e, s]),
            (0, o.useIsoLayoutEffect)(() => {
              l.current = e;
            }, [e]),
            t.useMemo(() => ({ openMethod: a, triggerProps: c }), [a, c])
          );
        },
        "useOpenMethodTriggerProps",
        0,
        i,
      ],
      32199,
    );
  },
  16786,
  (e) => {
    "use strict";
    var t = e.i(16269),
      n = e.i(56789),
      r = e.i(56341),
      o = e.i(90627);
    let i = (0, t.createSelector)((e) => e.triggerIdProp ?? e.activeTriggerId),
      l = (0, t.createSelector)((e) => e.openProp ?? e.open),
      s = (0, t.createSelector)(
        (e) => (e.popupElement?.id ?? e.floatingId) || void 0,
      );
    function a(e, t) {
      return void 0 !== t && l(e) && i(e) === t;
    }
    let u = {
      open: l,
      mounted: (0, t.createSelector)((e) => e.mounted),
      transitionStatus: (0, t.createSelector)((e) => e.transitionStatus),
      floatingRootContext: (0, t.createSelector)((e) => e.floatingRootContext),
      triggerCount: (0, t.createSelector)((e) => e.triggerCount),
      preventUnmountingOnClose: (0, t.createSelector)(
        (e) => e.preventUnmountingOnClose,
      ),
      payload: (0, t.createSelector)((e) => e.payload),
      activeTriggerId: i,
      activeTriggerElement: (0, t.createSelector)((e) =>
        e.mounted ? e.activeTriggerElement : null,
      ),
      popupId: s,
      isTriggerActive: (0, t.createSelector)(
        (e, t) => void 0 !== t && i(e) === t,
      ),
      isOpenedByTrigger: (0, t.createSelector)((e, t) => a(e, t)),
      isMountedByTrigger: (0, t.createSelector)(
        (e, t) => void 0 !== t && i(e) === t && e.mounted,
      ),
      triggerProps: (0, t.createSelector)((e, t) =>
        t ? e.activeTriggerProps : e.inactiveTriggerProps,
      ),
      triggerPopupId: (0, t.createSelector)((e, t) =>
        a(e, t) ||
        (void 0 !== t && l(e) && null == i(e) && 1 === e.triggerCount)
          ? s(e)
          : void 0,
      ),
      popupProps: (0, t.createSelector)((e) => e.popupProps),
      popupElement: (0, t.createSelector)((e) => e.popupElement),
      positionerElement: (0, t.createSelector)((e) => e.positionerElement),
    };
    e.s(
      [
        "createInitialPopupStoreState",
        0,
        function () {
          return {
            open: !1,
            openProp: void 0,
            mounted: !1,
            transitionStatus: void 0,
            floatingRootContext: new r.FloatingRootStore({
              open: !1,
              transitionStatus: void 0,
              floatingElement: null,
              referenceElement: null,
              triggerElements: new o.PopupTriggerMap(),
              floatingId: void 0,
              syncOnly: !1,
              nested: !1,
              onOpenChange: void 0,
            }),
            floatingId: void 0,
            triggerCount: 0,
            preventUnmountingOnClose: !1,
            payload: void 0,
            activeTriggerId: null,
            activeTriggerElement: null,
            triggerIdProp: void 0,
            popupElement: null,
            positionerElement: null,
            activeTriggerProps: n.EMPTY_OBJECT,
            inactiveTriggerProps: n.EMPTY_OBJECT,
            popupProps: n.EMPTY_OBJECT,
          };
        },
        "createPopupFloatingRootContext",
        0,
        function (e, t, n = !1) {
          return new r.FloatingRootStore({
            open: !1,
            transitionStatus: void 0,
            floatingElement: null,
            referenceElement: null,
            triggerElements: e,
            floatingId: t,
            syncOnly: !0,
            nested: n,
            onOpenChange: void 0,
          });
        },
        "popupStoreSelectors",
        0,
        u,
      ],
      16786,
    );
  },
  13203,
  (e) => {
    "use strict";
    var t = e.i(71645);
    e.s([
      "useOnFirstRender",
      0,
      function (e) {
        let n = t.useRef(!0);
        n.current && ((n.current = !1), e());
      },
    ]);
  },
  64111,
  (e) => {
    "use strict";
    var t = e.i(71645);
    e.i(74080);
    var n = e.i(56789),
      r = e.i(83977),
      o = e.i(67865),
      i = e.i(46376),
      l = e.i(13203),
      s = e.i(49055),
      a = e.i(46420),
      u = e.i(50527),
      c = e.i(23910),
      d = e.i(37584),
      f = e.i(75606),
      p = e.i(56434);
    let m = { tabIndex: -1, [s.FOCUSABLE_ATTRIBUTE]: "" };
    function g(e, n) {
      let r = t.useRef(null),
        o = t.useRef(null);
      return t.useCallback(
        (t) => {
          if (void 0 === e) return;
          let i = !1;
          if (null !== r.current) {
            let e = r.current,
              t = o.current,
              l = n.context.triggerElements.getById(e);
            (t && l === t && (n.context.triggerElements.delete(e), (i = !0)),
              (r.current = null),
              (o.current = null));
          }
          if (
            (null !== t &&
              ((r.current = e),
              (o.current = t),
              n.context.triggerElements.add(e, t),
              (i = !0)),
            i)
          ) {
            let e = n.context.triggerElements.size;
            n.select("open") &&
              n.state.triggerCount !== e &&
              n.set("triggerCount", e);
          }
        },
        [n, e],
      );
    }
    e.s([
      "FOCUSABLE_POPUP_PROPS",
      0,
      m,
      "attachPreventUnmountOnClose",
      0,
      function (e) {
        let t = !1;
        return (
          (e.preventUnmountOnClose = () => {
            t = !0;
          }),
          () => t
        );
      },
      "createDefaultInitialFocus",
      0,
      function (e) {
        return (t) => "touch" !== t || e.current;
      },
      "setPopupOpenState",
      0,
      function (e, t, n, r = !1) {
        t
          ? (e.preventUnmountingOnClose = !1)
          : r && (e.preventUnmountingOnClose = !0);
        let o = n?.id ?? null;
        (o || t) &&
          ((e.activeTriggerId = o), (e.activeTriggerElement = n ?? null));
      },
      "useImplicitActiveTrigger",
      0,
      function (e, t = {}) {
        let { closeOnActiveTriggerUnmount: n = !1 } = t,
          r = e.useState("open"),
          o = e.useState("triggerCount");
        (0, i.useIsoLayoutEffect)(() => {
          if (!r) {
            0 !== e.state.triggerCount && e.set("triggerCount", 0);
            return;
          }
          let t = e.context.triggerElements.size,
            o = {};
          e.state.triggerCount !== t && (o.triggerCount = t);
          let i = e.select("activeTriggerId"),
            l = null;
          if (i) {
            let t = e.context.triggerElements.getById(i);
            t
              ? t !== e.state.activeTriggerElement &&
                (o.activeTriggerElement = t)
              : (l = i);
          }
          if (!l && !i && 1 === t) {
            let t = e.context.triggerElements.entries().next();
            if (!t.done) {
              let [e, n] = t.value;
              ((o.activeTriggerId = e), (o.activeTriggerElement = n));
            }
          }
          ((void 0 !== o.triggerCount ||
            void 0 !== o.activeTriggerId ||
            void 0 !== o.activeTriggerElement) &&
            e.update(o),
            l &&
              n &&
              queueMicrotask(() => {
                if (
                  e.select("open") &&
                  e.select("activeTriggerId") === l &&
                  !e.context.triggerElements.getById(l)
                ) {
                  let t = (0, f.createChangeEventDetails)(p.REASONS.none);
                  (e.setOpen(!1, t),
                    t.isCanceled ||
                      e.update({
                        activeTriggerId: null,
                        activeTriggerElement: null,
                      }));
                }
              }));
        }, [r, e, o, n]);
      },
      "useInitialOpenSync",
      0,
      function (e, t, n, r) {
        (0, l.useOnFirstRender)(() => {
          void 0 === t &&
            !1 === e.state.open &&
            n &&
            (e.state = {
              ...e.state,
              open: !0,
              activeTriggerId: r,
              preventUnmountingOnClose: !1,
            });
        });
      },
      "useOpenStateTransitions",
      0,
      function (e, t, n) {
        let {
            mounted: r,
            setMounted: i,
            transitionStatus: l,
          } = (0, c.useTransitionStatus)(e),
          s = t.useState("preventUnmountingOnClose"),
          a = !e && s;
        t.useSyncedValues({
          mounted: r,
          transitionStatus: l,
          preventUnmountingOnClose: a,
        });
        let u = (0, o.useStableCallback)(() => {
          (i(!1),
            t.update({
              activeTriggerId: null,
              activeTriggerElement: null,
              mounted: !1,
              preventUnmountingOnClose: !1,
            }),
            n?.(),
            t.context.onOpenChangeComplete?.(!1));
        });
        return (
          (0, d.useOpenChangeComplete)({
            enabled: r && !e && !a,
            open: e,
            ref: t.context.popupRef,
            onComplete() {
              e || u();
            },
          }),
          { forceUnmount: u, transitionStatus: l }
        );
      },
      "usePopupInteractionProps",
      0,
      function (e, t) {
        (e.useSyncedValues(t),
          (0, i.useIsoLayoutEffect)(
            () => () => {
              e.update({
                activeTriggerProps: n.EMPTY_OBJECT,
                inactiveTriggerProps: n.EMPTY_OBJECT,
                popupProps: n.EMPTY_OBJECT,
              });
            },
            [e],
          ));
      },
      "usePopupRootSync",
      0,
      function (e, t) {
        ((0, i.useIsoLayoutEffect)(() => {
          t || null === e.state.openMethod || e.set("openMethod", null);
        }, [t, e]),
          (0, i.useIsoLayoutEffect)(
            () => () => {
              null !== e.state.openMethod && e.set("openMethod", null);
            },
            [e],
          ));
      },
      "usePopupStore",
      0,
      function (e, n, o = !1) {
        let i = (0, r.useId)(),
          l = null != (0, a.useFloatingParentNodeId)(),
          s = t.useRef(null);
        void 0 === e && null === s.current && (s.current = n(i, l));
        let c = e ?? s.current;
        return (
          (0, u.useSyncedFloatingRootContext)({
            popupStore: c,
            treatPopupAsFloatingElement: o,
            floatingRootContext: c.state.floatingRootContext,
            floatingId: i,
            nested: l,
            onOpenChange: c.setOpen,
          }),
          { store: c, internalStore: s.current }
        );
      },
      "useTriggerDataForwarding",
      0,
      function (e, t, n, r) {
        let l = n.useState("isMountedByTrigger", e),
          s = g(e, n),
          a = (0, o.useStableCallback)((t) => {
            if ((s(t), !t)) return;
            let o = n.select("open"),
              i = n.select("activeTriggerId");
            i === e
              ? n.update({ activeTriggerElement: t, ...(o ? r : null) })
              : null == i &&
                o &&
                n.update({ activeTriggerId: e, activeTriggerElement: t, ...r });
          });
        return (
          (0, i.useIsoLayoutEffect)(() => {
            l && n.update({ activeTriggerElement: t.current, ...r });
          }, [l, n, t, ...Object.values(r)]),
          { registerTrigger: a, isMountedByThisTrigger: l }
        );
      },
      "useTriggerRegistration",
      0,
      g,
    ]);
  },
  50316,
  (e) => {
    "use strict";
    var t = e.i(29315),
      n = e.i(39957),
      r = e.i(47554),
      o = e.i(58408);
    let i = 0.1 * 0.1;
    function l(e, t, n, r, o, i) {
      return r >= t != i >= t && e <= ((o - n) * (t - r)) / (i - r) + n;
    }
    function s(e, t, n, r, o, i, s, a, u, c) {
      let d = !1;
      return (
        l(e, t, n, r, o, i) && (d = !d),
        l(e, t, o, i, s, a) && (d = !d),
        l(e, t, s, a, u, c) && (d = !d),
        l(e, t, u, c, n, r) && (d = !d),
        d
      );
    }
    function a(e, t, n, r, o, i) {
      let l = Math.min(n, o),
        s = Math.max(n, o),
        a = Math.min(r, i),
        u = Math.max(r, i);
      return e >= l && e <= s && t >= a && t <= u;
    }
    e.s([
      "safePolygon",
      0,
      function (e = {}) {
        let { blockPointerEvents: l = !1 } = e,
          u = new n.Timeout(),
          c = ({
            x: e,
            y: n,
            placement: l,
            elements: c,
            onClose: d,
            nodeId: f,
            tree: p,
          }) => {
            let m = l?.split("-")[0],
              g = !1,
              h = null,
              b = null,
              v = "u" > typeof performance ? performance.now() : 0;
            return function (l) {
              u.clear();
              let y = c.domReference,
                E = c.floating;
              if (!y || !E || null == m || null == e || null == n) return;
              let { clientX: w, clientY: x } = l,
                S = (0, r.getTarget)(l),
                k = "mouseleave" === l.type,
                T = (0, r.contains)(E, S),
                C = (0, r.contains)(y, S);
              if (T && ((g = !0), !k)) return;
              if (C && ((g = !1), !k)) {
                g = !0;
                return;
              }
              if (
                k &&
                (0, t.isElement)(l.relatedTarget) &&
                (0, r.contains)(E, l.relatedTarget)
              )
                return;
              function R() {
                return !!(
                  p && (0, o.getNodeChildren)(p.nodesRef.current, f).length > 0
                );
              }
              function O() {
                R() || (u.clear(), d());
              }
              if (R()) return;
              let P = y.getBoundingClientRect(),
                A = E.getBoundingClientRect(),
                I = e > A.right - A.width / 2,
                L = n > A.bottom - A.height / 2,
                M = A.width > P.width,
                N = A.height > P.height,
                D = (M ? P : A).left,
                F = (M ? P : A).right,
                z = (N ? P : A).top,
                W = (N ? P : A).bottom;
              if (
                ("top" === m && n >= P.bottom - 1) ||
                ("bottom" === m && n <= P.top + 1) ||
                ("left" === m && e >= P.right - 1) ||
                ("right" === m && e <= P.left + 1)
              )
                return void O();
              let H = !1;
              switch (m) {
                case "top":
                  H = a(w, x, D, P.top + 1, F, A.bottom - 1);
                  break;
                case "bottom":
                  H = a(w, x, D, A.top + 1, F, P.bottom - 1);
                  break;
                case "left":
                  H = a(w, x, A.right - 1, W, P.left + 1, z);
                  break;
                case "right":
                  H = a(w, x, P.right - 1, W, A.left + 1, z);
              }
              if (H) return;
              if (
                (g &&
                  (!(w >= P.x) ||
                    !(w <= P.x + P.width) ||
                    !(x >= P.y) ||
                    !(x <= P.y + P.height))) ||
                (!k &&
                  (function (e, t) {
                    let n = performance.now(),
                      r = n - v;
                    if (null === h || null === b || 0 === r)
                      return ((h = e), (b = t), (v = n), !1);
                    let o = e - h,
                      l = t - b;
                    return (
                      (h = e),
                      (b = t),
                      (v = n),
                      o * o + l * l < r * r * i
                    );
                  })(w, x))
              )
                return void O();
              let j = !1;
              switch (m) {
                case "top": {
                  let t = M ? 0.25 : 2,
                    r = n + 0.5 + 1,
                    o = I || M ? A.bottom - 0.5 : A.top,
                    i = I ? (M ? A.bottom - 0.5 : A.top) : A.bottom - 0.5;
                  j = s(
                    w,
                    x,
                    M || I ? e + t : e - t,
                    r,
                    M ? e - t : I ? e + t : e - t,
                    r,
                    A.left,
                    o,
                    A.right,
                    i,
                  );
                  break;
                }
                case "bottom": {
                  let t = M ? 0.25 : 2,
                    r = n - 0.5,
                    o = I || M ? A.top + 0.5 : A.bottom,
                    i = I ? (M ? A.top + 0.5 : A.bottom) : A.top + 0.5;
                  j = s(
                    w,
                    x,
                    M || I ? e + t : e - t,
                    r,
                    M ? e - t : I ? e + t : e - t,
                    r,
                    A.left,
                    o,
                    A.right,
                    i,
                  );
                  break;
                }
                case "left": {
                  let t = N ? 0.25 : 2,
                    r = e + 0.5 + 1,
                    o = L || N ? A.right - 0.5 : A.left,
                    i = L ? (N ? A.right - 0.5 : A.left) : A.right - 0.5;
                  j = s(
                    w,
                    x,
                    o,
                    A.top,
                    i,
                    A.bottom,
                    r,
                    N || L ? n + t : n - t,
                    r,
                    N ? n - t : L ? n + t : n - t,
                  );
                  break;
                }
                case "right": {
                  let t = N ? 0.25 : 2,
                    r = e - 0.5,
                    o = L || N ? A.left + 0.5 : A.right,
                    i = L ? (N ? A.left + 0.5 : A.right) : A.left + 0.5;
                  j = s(
                    w,
                    x,
                    r,
                    N || L ? n + t : n - t,
                    r,
                    N ? n - t : L ? n + t : n - t,
                    o,
                    A.top,
                    i,
                    A.bottom,
                  );
                }
              }
              j ? g || u.start(40, O) : O();
            };
          };
        return ((c.__options = { ...e, blockPointerEvents: l }), c);
      },
    ]);
  },
  85689,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(8445),
      r = e.i(39957),
      o = e.i(56789),
      i = e.i(47554),
      l = e.i(96296),
      s = e.i(57940),
      a = e.i(75606),
      u = e.i(56434);
    e.s([
      "useClick",
      0,
      function (e, c = {}) {
        let {
            enabled: d = !0,
            event: f = "click",
            toggle: p = !0,
            ignoreMouse: m = !1,
            stickIfOpen: g = !0,
            touchOpenDelay: h = 0,
            reason: b = u.REASONS.triggerPress,
          } = c,
          v = "rootStore" in e ? e.rootStore : e,
          y = v.context.dataRef,
          E = t.useRef(void 0),
          w = (0, n.useAnimationFrame)(),
          x = (0, r.useTimeout)(),
          S = t.useMemo(() => {
            function e(e, t, n, r) {
              let o = (0, a.createChangeEventDetails)(b, t, n);
              e && "touch" === r && h > 0
                ? x.start(h, () => {
                    v.setOpen(!0, o);
                  })
                : v.setOpen(e, o);
            }
            function t(e, t, n) {
              let r = y.current.openEvent,
                o = v.select("domReferenceElement") !== t;
              return (!!e && !!o) || !e || !p || (!!r && !!g && !n(r.type));
            }
            return {
              onPointerDown(e) {
                E.current = e.pointerType;
              },
              onMouseDown(n) {
                let r = E.current,
                  o = n.nativeEvent,
                  a = v.select("open");
                if (
                  0 !== n.button ||
                  "click" === f ||
                  ((0, s.isMouseLikePointerType)(r, !0) && m)
                )
                  return;
                let u = t(
                    a,
                    n.currentTarget,
                    (e) => "click" === e || "mousedown" === e,
                  ),
                  c = (0, i.getTarget)(o);
                if ((0, l.isTypeableElement)(c)) return void e(u, o, c, r);
                let d = n.currentTarget;
                w.request(() => {
                  e(u, o, d, r);
                });
              },
              onClick(n) {
                if ("mousedown-only" === f) return;
                let r = E.current;
                if ("mousedown" === f && r) {
                  E.current = void 0;
                  return;
                }
                ((0, s.isMouseLikePointerType)(r, !0) && m) ||
                  e(
                    t(
                      v.select("open"),
                      n.currentTarget,
                      (e) =>
                        "click" === e ||
                        "mousedown" === e ||
                        "keydown" === e ||
                        "keyup" === e,
                    ),
                    n.nativeEvent,
                    n.currentTarget,
                    r,
                  );
              },
              onKeyDown() {
                E.current = void 0;
              },
            };
          }, [y, f, m, b, v, g, p, w, x, h]);
        return t.useMemo(() => (d ? { reference: S } : o.EMPTY_OBJECT), [d, S]);
      },
    ]);
  },
  72135,
  46570,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(74080),
      r = e.i(74735),
      o = e.i(65420),
      i = e.i(8868),
      l = e.i(67865),
      s = e.i(46265),
      a = e.i(29315),
      u = e.i(75606),
      c = e.i(56434),
      d = e.i(46420),
      f = e.i(47554),
      p = e.i(57940),
      m = e.i(73752),
      g = e.i(44681),
      h = e.i(94814);
    let b = { current: null };
    e.s(
      [
        "useHoverReferenceInteraction",
        0,
        function (e, v = {}) {
          let {
              enabled: y = !0,
              delay: E = 0,
              handleClose: w = null,
              mouseOnly: x = !1,
              restMs: S = 0,
              move: k = !0,
              triggerElementRef: T = b,
              externalTree: C,
              isActiveTrigger: R = !0,
              getHandleCloseContext: O,
              isClosing: P,
              shouldOpen: A,
            } = v,
            I = "rootStore" in e ? e.rootStore : e,
            { dataRef: L, events: M } = I.context,
            N = (0, d.useFloatingTree)(C),
            D = (0, m.useHoverInteractionSharedState)(I),
            F = t.useRef(!1),
            z = (0, s.useValueAsRef)(w),
            W = (0, s.useValueAsRef)(E),
            H = (0, s.useValueAsRef)(S),
            j = (0, s.useValueAsRef)(y),
            B = (0, s.useValueAsRef)(A),
            _ = (0, s.useValueAsRef)(P),
            V = (0, l.useStableCallback)(() =>
              (0, g.isClickLikeOpenEvent)(
                L.current.openEvent?.type,
                D.interactedInside,
              ),
            ),
            $ = (0, l.useStableCallback)(() => B.current?.() !== !1),
            Y = (0, l.useStableCallback)((e, t, n) => {
              let r = I.context.triggerElements;
              return r.hasElement(t)
                ? !e || !(0, f.contains)(e, t)
                : !!(0, a.isElement)(n) &&
                    r.hasMatchingElement((e) => (0, f.contains)(e, n)) &&
                    (!e || !(0, f.contains)(e, n));
            }),
            U = (0, l.useStableCallback)(() => {
              D.handler &&
                ((0, i.ownerDocument)(
                  I.select("domReferenceElement"),
                ).removeEventListener("mousemove", D.handler),
                (D.handler = void 0));
            }),
            q = (0, l.useStableCallback)(() => {
              (0, m.clearSafePolygonPointerEventsMutation)(D);
            });
          return (
            R && (D.handleCloseOptions = z.current?.__options),
            t.useEffect(() => U, [U]),
            t.useEffect(() => {
              if (y)
                return (
                  M.on("openchange", e),
                  () => {
                    M.off("openchange", e);
                  }
                );
              function e(e) {
                e.open
                  ? (F.current = !1)
                  : ((F.current = e.reason === c.REASONS.triggerHover),
                    U(),
                    D.openChangeTimeout.clear(),
                    D.restTimeout.clear(),
                    (D.blockMouseMove = !0),
                    (D.restTimeoutPending = !1));
              }
            }, [y, M, D, U]),
            t.useEffect(() => {
              if (!y) return;
              function e(t, n = !0) {
                let r = (0, g.getDelay)(W.current, "close", D.pointerType);
                r
                  ? D.openChangeTimeout.start(r, () => {
                      (I.setOpen(
                        !1,
                        (0, u.createChangeEventDetails)(
                          c.REASONS.triggerHover,
                          t,
                        ),
                      ),
                        N?.events.emit("floating.closed", t));
                    })
                  : n &&
                    (D.openChangeTimeout.clear(),
                    I.setOpen(
                      !1,
                      (0, u.createChangeEventDetails)(
                        c.REASONS.triggerHover,
                        t,
                      ),
                    ),
                    N?.events.emit("floating.closed", t));
              }
              let t = T.current ?? (R ? I.select("domReferenceElement") : null);
              if ((0, a.isElement)(t))
                return k
                  ? (0, o.mergeCleanups)(
                      (0, r.addEventListener)(t, "mousemove", n, { once: !0 }),
                      (0, r.addEventListener)(t, "mouseenter", n),
                      (0, r.addEventListener)(t, "mouseleave", l),
                    )
                  : (0, o.mergeCleanups)(
                      (0, r.addEventListener)(t, "mouseenter", n),
                      (0, r.addEventListener)(t, "mouseleave", l),
                    );
              function n(e) {
                if (
                  (D.openChangeTimeout.clear(),
                  (D.blockMouseMove = !1),
                  x && !(0, p.isMouseLikePointerType)(D.pointerType))
                )
                  return;
                let t = (0, g.getRestMs)(H.current),
                  n = (0, g.getDelay)(W.current, "open", D.pointerType),
                  r = (0, f.getTarget)(e),
                  o = e.currentTarget ?? null,
                  i = I.select("domReferenceElement"),
                  l = o;
                if (
                  (0, a.isElement)(r) &&
                  !I.context.triggerElements.hasElement(r)
                ) {
                  for (let e of I.context.triggerElements.elements())
                    if ((0, f.contains)(e, r)) {
                      l = e;
                      break;
                    }
                }
                (0, a.isElement)(o) &&
                  (0, a.isElement)(i) &&
                  !I.context.triggerElements.hasElement(o) &&
                  (0, f.contains)(o, i) &&
                  (l = i);
                let s = null != l && Y(i, l, r),
                  d = I.select("open"),
                  m =
                    _.current?.() ?? "ending" === I.select("transitionStatus"),
                  h = !d && m && F.current,
                  b =
                    !s &&
                    (0, a.isElement)(l) &&
                    (0, a.isElement)(i) &&
                    (0, f.contains)(i, l) &&
                    h,
                  v = t > 0 && !n,
                  y = !d || s;
                if ((s && (d || h)) || b) {
                  $() &&
                    I.setOpen(
                      !0,
                      (0, u.createChangeEventDetails)(
                        c.REASONS.triggerHover,
                        e,
                        l,
                      ),
                    );
                  return;
                }
                !v &&
                  (n
                    ? D.openChangeTimeout.start(n, () => {
                        y &&
                          $() &&
                          I.setOpen(
                            !0,
                            (0, u.createChangeEventDetails)(
                              c.REASONS.triggerHover,
                              e,
                              l,
                            ),
                          );
                      })
                    : y &&
                      $() &&
                      I.setOpen(
                        !0,
                        (0, u.createChangeEventDetails)(
                          c.REASONS.triggerHover,
                          e,
                          l,
                        ),
                      ));
              }
              function l(t) {
                if (V()) return void q();
                U();
                let n = I.select("domReferenceElement"),
                  r = (0, i.ownerDocument)(n);
                (D.restTimeout.clear(), (D.restTimeoutPending = !1));
                let o = L.current.floatingContext ?? O?.();
                if (
                  !(0, h.isInsideEnabledTrigger)(
                    t.relatedTarget,
                    I.context.triggerElements,
                  )
                ) {
                  if (z.current && o) {
                    I.select("open") || D.openChangeTimeout.clear();
                    let n = T.current;
                    ((D.handler = z.current({
                      ...o,
                      tree: N,
                      x: t.clientX,
                      y: t.clientY,
                      onClose() {
                        (q(),
                          U(),
                          j.current &&
                            !V() &&
                            n === I.select("domReferenceElement") &&
                            e(t, !0));
                      },
                    })),
                      r.addEventListener("mousemove", D.handler),
                      D.handler(t));
                    return;
                  }
                  ("touch" === D.pointerType &&
                    (0, f.contains)(
                      I.select("floatingElement"),
                      t.relatedTarget,
                    )) ||
                    e(t);
                }
              }
            }, [U, q, L, W, I, y, z, D, R, Y, V, x, k, H, T, N, j, O, _, $]),
            t.useMemo(() => {
              if (y)
                return {
                  onPointerDown: e,
                  onPointerEnter: e,
                  onMouseMove(e) {
                    let { nativeEvent: t } = e,
                      r = e.currentTarget,
                      o = I.select("domReferenceElement"),
                      i = I.select("open"),
                      l = Y(o, r, e.target);
                    if (x && !(0, p.isMouseLikePointerType)(D.pointerType))
                      return;
                    if (i && l && D.handleCloseOptions?.blockPointerEvents) {
                      let e = I.select("floatingElement");
                      if (e) {
                        let t =
                          D.handleCloseOptions?.getScope?.() ??
                          r.ownerDocument.body;
                        (0, m.applySafePolygonPointerEventsMutation)(D, {
                          scopeElement: t,
                          referenceElement: r,
                          floatingElement: e,
                        });
                      }
                    }
                    let s = (0, g.getRestMs)(H.current);
                    function a() {
                      if (((D.restTimeoutPending = !1), V())) return;
                      let e = I.select("open");
                      !D.blockMouseMove &&
                        (!e || l) &&
                        $() &&
                        I.setOpen(
                          !0,
                          (0, u.createChangeEventDetails)(
                            c.REASONS.triggerHover,
                            t,
                            r,
                          ),
                        );
                    }
                    (!i || l) &&
                      0 !== s &&
                      ((!l &&
                        D.restTimeoutPending &&
                        e.movementX ** 2 + e.movementY ** 2 < 2) ||
                        (D.restTimeout.clear(),
                        "touch" === D.pointerType
                          ? n.flushSync(() => {
                              a();
                            })
                          : l && i
                            ? a()
                            : ((D.restTimeoutPending = !0),
                              D.restTimeout.start(s, a))));
                  },
                };
              function e(e) {
                D.pointerType = e.pointerType;
              }
            }, [y, D, V, Y, x, I, H, $])
          );
        },
      ],
      72135,
    );
    var v = e.i(83976);
    e.s(
      [
        "useTriggerFocusGuards",
        0,
        function (e, r) {
          let o = t.useRef(null);
          return {
            preFocusGuardRef: o,
            handlePreFocusGuardFocus: function (t) {
              n.flushSync(() => {
                e.setOpen(
                  !1,
                  (0, u.createChangeEventDetails)(
                    c.REASONS.focusOut,
                    t.nativeEvent,
                    t.currentTarget,
                  ),
                );
              });
              let r = (0, v.getTabbableBeforeElement)(o.current);
              r?.focus();
            },
            handleFocusTargetFocus: function (t) {
              let o = e.select("positionerElement");
              if (o && (0, v.isOutsideEvent)(t, o))
                e.context.beforeContentFocusGuardRef.current?.focus();
              else {
                n.flushSync(() => {
                  e.setOpen(
                    !1,
                    (0, u.createChangeEventDetails)(
                      c.REASONS.focusOut,
                      t.nativeEvent,
                      t.currentTarget,
                    ),
                  );
                });
                let i = (0, v.getTabbableAfterElement)(
                  e.context.triggerFocusTargetRef.current || r.current,
                );
                for (; null !== i && (0, f.contains)(o, i); ) {
                  let e = i;
                  if ((i = (0, v.getNextTabbable)(i)) === e) break;
                }
                i?.focus();
              }
            },
          };
        },
      ],
      46570,
    );
  },
  18390,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(74080),
      r = e.i(44394),
      o = e.i(8445),
      i = e.i(46376),
      l = e.i(67865),
      s = e.i(8868),
      a = e.i(22640),
      u = e.i(56789),
      c = e.i(43084),
      d = e.i(29315);
    function f(e) {
      let t = (0, d.getComputedStyle)(e),
        n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0,
        o = (0, d.isHTMLElement)(e),
        i = o ? e.offsetWidth : n,
        l = o ? e.offsetHeight : r;
      return (
        ((0, c.round)(n) !== i || (0, c.round)(r) !== l) && ((n = i), (r = l)),
        { width: n, height: r }
      );
    }
    function p(e, t, n) {
      let r = e.style.getPropertyValue(t);
      return (
        e.style.setProperty(t, n),
        () => {
          e.style.setProperty(t, r);
        }
      );
    }
    function m(e, t) {
      let n = [];
      for (let [r, o] of Object.entries(t)) n.push(p(e, r, o));
      return n.length
        ? () => {
            n.forEach((e) => e());
          }
        : u.NOOP;
    }
    function g(e, t) {
      let n = "auto" === t ? "auto" : `${t.width}px`,
        r = "auto" === t ? "auto" : `${t.height}px`;
      (e.style.setProperty("--popup-width", n),
        e.style.setProperty("--popup-height", r));
    }
    function h(e, t) {
      let n = "max-content" === t ? "max-content" : `${t.width}px`,
        r = "max-content" === t ? "max-content" : `${t.height}px`;
      (e.style.setProperty("--positioner-width", n),
        e.style.setProperty("--positioner-height", r));
    }
    var b = e.i(72855),
      v = e.i(43476);
    e.s(
      [
        "usePopupViewport",
        0,
        function (e) {
          let c,
            { store: d, side: y, cssVars: E, children: w } = e,
            x = (0, b.useDirection)(),
            S = d.useState("activeTriggerElement"),
            k = d.useState("activeTriggerId"),
            T = d.useState("open"),
            C = d.useState("payload"),
            R = d.useState("mounted"),
            O = d.useState("popupElement"),
            P = d.useState("positionerElement"),
            A = (function (e) {
              let [n, r] = t.useState({ current: e, previous: null });
              return (
                e !== n.current && r({ current: e, previous: n.current }),
                n.previous
              );
            })(T ? S : null),
            I = (function (e, n) {
              let [r, o] = t.useState(0),
                l = t.useRef(e),
                s = t.useRef(n),
                a = t.useRef(!1);
              return (
                (0, i.useIsoLayoutEffect)(() => {
                  let t = l.current,
                    r = n !== s.current;
                  (e !== t
                    ? (o((e) => e + 1), (a.current = !r))
                    : a.current && r && (o((e) => e + 1), (a.current = !1)),
                    (l.current = e),
                    (s.current = n));
                }, [e, n]),
                `${e ?? "current"}-${r}`
              );
            })(k, C),
            L = t.useRef(null),
            [M, N] = t.useState(null),
            [D, F] = t.useState(null),
            z = t.useRef(null),
            W = t.useRef(null),
            H = (0, a.useAnimationsFinished)(z, !0, !1),
            j = (0, o.useAnimationFrame)(),
            [B, _] = t.useState(null),
            [V, $] = t.useState(!1);
          (0, i.useIsoLayoutEffect)(
            () => (
              d.set("hasViewport", !0),
              () => {
                d.set("hasViewport", !1);
              }
            ),
            [d],
          );
          let Y = (0, l.useStableCallback)(() => {
              (z.current?.style.setProperty("animation", "none"),
                z.current?.style.setProperty("transition", "none"),
                W.current?.style.setProperty("display", "none"));
            }),
            U = (0, l.useStableCallback)((e) => {
              (z.current?.style.removeProperty("animation"),
                z.current?.style.removeProperty("transition"),
                W.current?.style.removeProperty("display"),
                e && _(e));
            }),
            q = t.useRef(null);
          ((0, i.useIsoLayoutEffect)(() => {
            (T && R) || (q.current = null);
          }, [T, R]),
            (0, i.useIsoLayoutEffect)(() => {
              var e, t;
              let r, o, i, l;
              S &&
                A &&
                S !== A &&
                q.current !== S &&
                L.current &&
                (N(L.current),
                $(!0),
                F(
                  ((e = A),
                  (t = S),
                  (r = e.getBoundingClientRect()),
                  (o = t.getBoundingClientRect()),
                  (i = { x: r.left + r.width / 2, y: r.top + r.height / 2 }),
                  {
                    horizontal:
                      (l = { x: o.left + o.width / 2, y: o.top + o.height / 2 })
                        .x - i.x,
                    vertical: l.y - i.y,
                  }),
                ),
                j.request(() => {
                  (n.flushSync(() => {
                    $(!1);
                  }),
                    H(() => {
                      (N(null), _(null), (L.current = null));
                    }));
                }),
                (q.current = S));
            }, [S, A, M, H, j]),
            (0, i.useIsoLayoutEffect)(() => {
              let e = z.current;
              if (!e) return;
              let t = (0, s.ownerDocument)(e).createElement("div");
              for (let n of Array.from(e.childNodes))
                t.appendChild(n.cloneNode(!0));
              L.current = t;
            }));
          let G = null != M;
          return (
            (c = G
              ? (0, v.jsxs)(t.Fragment, {
                  children: [
                    (0, v.jsx)(
                      "div",
                      {
                        "data-previous": !0,
                        inert: (0, r.inertValue)(!0),
                        ref: W,
                        style: {
                          ...(B
                            ? {
                                [E.popupWidth]: `${B.width}px`,
                                [E.popupHeight]: `${B.height}px`,
                              }
                            : null),
                          position: "absolute",
                        },
                        "data-ending-style": V ? void 0 : "",
                      },
                      "previous",
                    ),
                    (0, v.jsx)(
                      "div",
                      {
                        "data-current": !0,
                        ref: z,
                        "data-starting-style": V ? "" : void 0,
                        children: w,
                      },
                      I,
                    ),
                  ],
                })
              : (0, v.jsx)(
                  "div",
                  { "data-current": !0, ref: z, children: w },
                  I,
                )),
            (0, i.useIsoLayoutEffect)(() => {
              let e = W.current;
              e && M && e.replaceChildren(...Array.from(M.childNodes));
            }, [M]),
            !(function (e) {
              let {
                  popupElement: n,
                  positionerElement: r,
                  content: s,
                  mounted: c,
                  onMeasureLayout: d,
                  onMeasureLayoutComplete: b,
                  side: v,
                  direction: y,
                } = e,
                E = (0, a.useAnimationsFinished)(n, !0, !1),
                w = (0, o.useAnimationFrame)(),
                x = t.useRef(null),
                S = t.useRef(!0),
                k = t.useRef(u.NOOP),
                T = (0, l.useStableCallback)(d),
                C = (0, l.useStableCallback)(b),
                R = t.useMemo(() => {
                  let e = "top" === v,
                    t = "left" === v;
                  return (
                    "rtl" === y
                      ? ((e = e || "inline-end" === v),
                        (t = t || "inline-end" === v))
                      : ((e = e || "inline-start" === v),
                        (t = t || "inline-start" === v)),
                    e
                      ? {
                          position: "absolute",
                          ["top" === v ? "bottom" : "top"]: "0",
                          [t ? "right" : "left"]: "0",
                        }
                      : u.EMPTY_OBJECT
                  );
                }, [v, y]);
              (0, i.useIsoLayoutEffect)(() => {
                if (!c) {
                  ((k.current = u.NOOP), (S.current = !0), (x.current = null));
                  return;
                }
                if (!n || !r) return;
                ((k.current = m(n, R)), g(n, "auto"));
                let e = p(n, "position", "static"),
                  t = p(n, "transform", "none"),
                  o = p(n, "scale", "1"),
                  i = m(r, {
                    "--available-width": "max-content",
                    "--available-height": "max-content",
                  });
                function l() {
                  (e(), t(), i(), o());
                }
                if ((T?.(), S.current || null === x.current)) {
                  h(r, "max-content");
                  let e = f(n);
                  return (
                    (x.current = e),
                    h(r, e),
                    l(),
                    C?.(null, e),
                    (S.current = !1),
                    () => {
                      (k.current(), (k.current = u.NOOP));
                    }
                  );
                }
                h(r, "max-content");
                let s = x.current,
                  a = f(n);
                ((x.current = a), g(n, s), l(), C?.(s, a), h(r, a));
                let d = new AbortController();
                return (
                  w.request(() => {
                    (g(n, a),
                      E(() => {
                        (n.style.setProperty("--popup-width", "auto"),
                          n.style.setProperty("--popup-height", "auto"));
                      }, d.signal));
                  }),
                  () => {
                    (d.abort(), w.cancel(), k.current(), (k.current = u.NOOP));
                  }
                );
              }, [s, n, r, E, w, c, T, C, R]);
            })({
              popupElement: O,
              positionerElement: P,
              mounted: R,
              content: C,
              onMeasureLayout: Y,
              onMeasureLayoutComplete: U,
              side: y,
              direction: x,
            }),
            {
              children: c,
              state: {
                activationDirection: (function (e) {
                  if (e) {
                    var t, n;
                    return `${(t = e.horizontal) > 5 ? "right" : t < -5 ? "left" : ""} ${(n = e.vertical) > 5 ? "down" : n < -5 ? "up" : ""}`;
                  }
                })(D),
                transitioning: G,
              },
            }
          );
        },
      ],
      18390,
    );
  },
  27930,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(40886),
      r = e.i(52245);
    let o = t.forwardRef(function (e, t) {
      let {
          render: o,
          className: i,
          disabled: l = !1,
          focusableWhenDisabled: s = !1,
          nativeButton: a = !0,
          style: u,
          ...c
        } = e,
        { getButtonProps: d, buttonRef: f } = (0, n.useButton)({
          disabled: l,
          focusableWhenDisabled: s,
          native: a,
        });
      return (0, r.useRenderElement)("button", e, {
        state: { disabled: l },
        ref: [t, f],
        props: [c, d],
      });
    });
    e.s(["Button", 0, o]);
  },
  75157,
  7670,
  (e) => {
    "use strict";
    function t() {
      for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) &&
          (t = (function e(t) {
            var n,
              r,
              o = "";
            if ("string" == typeof t || "number" == typeof t) o += t;
            else if ("object" == typeof t)
              if (Array.isArray(t)) {
                var i = t.length;
                for (n = 0; n < i; n++)
                  t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
              } else for (r in t) t[r] && (o && (o += " "), (o += r));
            return o;
          })(e)) &&
          (r && (r += " "), (r += t));
      return r;
    }
    e.s(["clsx", 0, t], 7670);
    let n = (e = new Map(), t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n,
      }),
      r = [],
      o = (e, t, n) => {
        if (0 == e.length - t) return n.classGroupId;
        let r = e[t],
          i = n.nextPart.get(r);
        if (i) {
          let n = o(e, t + 1, i);
          if (n) return n;
        }
        let l = n.validators;
        if (null === l) return;
        let s = 0 === t ? e.join("-") : e.slice(t).join("-"),
          a = l.length;
        for (let e = 0; e < a; e++) {
          let t = l[e];
          if (t.validator(s)) return t.classGroupId;
        }
      },
      i = (e, t) => {
        let r = n();
        for (let n in e) l(e[n], r, n, t);
        return r;
      },
      l = (e, t, n, r) => {
        let o = e.length;
        for (let i = 0; i < o; i++) s(e[i], t, n, r);
      },
      s = (e, t, n, r) => {
        "string" == typeof e
          ? a(e, t, n)
          : "function" == typeof e
            ? u(e, t, n, r)
            : c(e, t, n, r);
      },
      a = (e, t, n) => {
        ("" === e ? t : d(t, e)).classGroupId = n;
      },
      u = (e, t, n, r) => {
        f(e)
          ? l(e(r), t, n, r)
          : (null === t.validators && (t.validators = []),
            t.validators.push({ classGroupId: n, validator: e }));
      },
      c = (e, t, n, r) => {
        let o = Object.entries(e),
          i = o.length;
        for (let e = 0; e < i; e++) {
          let [i, s] = o[e];
          l(s, d(t, i), n, r);
        }
      },
      d = (e, t) => {
        let r = e,
          o = t.split("-"),
          i = o.length;
        for (let e = 0; e < i; e++) {
          let t = o[e],
            i = r.nextPart.get(t);
          (i || ((i = n()), r.nextPart.set(t, i)), (r = i));
        }
        return r;
      },
      f = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
      p = [],
      m = (e, t, n, r, o) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: r,
        isExternal: o,
      }),
      g = /\s+/,
      h = (e) => {
        let t;
        if ("string" == typeof e) return e;
        let n = "";
        for (let r = 0; r < e.length; r++)
          e[r] && (t = h(e[r])) && (n && (n += " "), (n += t));
        return n;
      },
      b = [],
      v = (e) => {
        let t = (t) => t[e] || b;
        return ((t.isThemeGetter = !0), t);
      },
      y = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
      E = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
      w = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
      x = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      S =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      k = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      T = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      C =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      R = (e) => w.test(e),
      O = (e) => !!e && !Number.isNaN(Number(e)),
      P = (e) => !!e && Number.isInteger(Number(e)),
      A = (e) => e.endsWith("%") && O(e.slice(0, -1)),
      I = (e) => x.test(e),
      L = () => !0,
      M = (e) => S.test(e) && !k.test(e),
      N = () => !1,
      D = (e) => T.test(e),
      F = (e) => C.test(e),
      z = (e) => !j(e) && !G(e),
      W = (e) =>
        e.startsWith("@container") &&
        (("/" === e[10] && void 0 !== e[11]) ||
          ("s" === e[11] && void 0 !== e[16] && e.startsWith("-size/", 10)) ||
          ("n" === e[11] && void 0 !== e[18] && e.startsWith("-normal/", 10))),
      H = (e) => en(e, el, N),
      j = (e) => y.test(e),
      B = (e) => en(e, es, M),
      _ = (e) => en(e, ea, O),
      V = (e) => en(e, ec, L),
      $ = (e) => en(e, eu, N),
      Y = (e) => en(e, eo, N),
      U = (e) => en(e, ei, F),
      q = (e) => en(e, ed, D),
      G = (e) => E.test(e),
      K = (e) => er(e, es),
      X = (e) => er(e, eu),
      J = (e) => er(e, eo),
      Q = (e) => er(e, el),
      Z = (e) => er(e, ei),
      ee = (e) => er(e, ed, !0),
      et = (e) => er(e, ec, !0),
      en = (e, t, n) => {
        let r = y.exec(e);
        return !!r && (r[1] ? t(r[1]) : n(r[2]));
      },
      er = (e, t, n = !1) => {
        let r = E.exec(e);
        return !!r && (r[1] ? t(r[1]) : n);
      },
      eo = (e) => "position" === e || "percentage" === e,
      ei = (e) => "image" === e || "url" === e,
      el = (e) => "length" === e || "size" === e || "bg-size" === e,
      es = (e) => "length" === e,
      ea = (e) => "number" === e,
      eu = (e) => "family-name" === e,
      ec = (e) => "number" === e || "weight" === e,
      ed = (e) => "shadow" === e,
      ef = ((e, ...t) => {
        let n,
          l,
          s,
          a,
          u = (e) => {
            let t = l(e);
            if (t) return t;
            let r = ((e, t) => {
              let {
                  parseClassName: n,
                  getClassGroupId: r,
                  getConflictingClassGroupIds: o,
                  sortModifiers: i,
                  postfixLookupClassGroupIds: l,
                } = t,
                s = [],
                a = e.trim().split(g),
                u = "";
              for (let e = a.length - 1; e >= 0; e -= 1) {
                let t,
                  c = a[e],
                  {
                    isExternal: d,
                    modifiers: f,
                    hasImportantModifier: p,
                    baseClassName: m,
                    maybePostfixModifierPosition: g,
                  } = n(c);
                if (d) {
                  u = c + (u.length > 0 ? " " + u : u);
                  continue;
                }
                let h = !!g;
                if (h) {
                  let e = (t = r(m.substring(0, g))) && l[t] ? r(m) : void 0;
                  e && e !== t && ((t = e), (h = !1));
                } else t = r(m);
                if (!t) {
                  if (!h || !(t = r(m))) {
                    u = c + (u.length > 0 ? " " + u : u);
                    continue;
                  }
                  h = !1;
                }
                let b =
                    0 === f.length
                      ? ""
                      : 1 === f.length
                        ? f[0]
                        : i(f).join(":"),
                  v = p ? b + "!" : b,
                  y = v + t;
                if (s.indexOf(y) > -1) continue;
                s.push(y);
                let E = o(t, h);
                for (let e = 0; e < E.length; ++e) {
                  let t = E[e];
                  s.push(v + t);
                }
                u = c + (u.length > 0 ? " " + u : u);
              }
              return u;
            })(e, n);
            return (s(e, r), r);
          };
        return (
          (a = (c) => {
            var d;
            let f;
            return (
              (l = (n = {
                cache: ((e) => {
                  if (e < 1) return { get: () => void 0, set: () => {} };
                  let t = 0,
                    n = Object.create(null),
                    r = Object.create(null),
                    o = (o, i) => {
                      ((n[o] = i),
                        ++t > e &&
                          ((t = 0), (r = n), (n = Object.create(null))));
                    };
                  return {
                    get(e) {
                      let t = n[e];
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = r[e])
                          ? (o(e, t), t)
                          : void 0;
                    },
                    set(e, t) {
                      e in n ? (n[e] = t) : o(e, t);
                    },
                  };
                })((d = t.reduce((e, t) => t(e), e())).cacheSize),
                parseClassName: ((e) => {
                  let { prefix: t, experimentalParseClassName: n } = e,
                    r = (e) => {
                      let t,
                        n = [],
                        r = 0,
                        o = 0,
                        i = 0,
                        l = e.length;
                      for (let s = 0; s < l; s++) {
                        let l = e[s];
                        if (0 === r && 0 === o) {
                          if (":" === l) {
                            (n.push(e.slice(i, s)), (i = s + 1));
                            continue;
                          }
                          if ("/" === l) {
                            t = s;
                            continue;
                          }
                        }
                        "[" === l
                          ? r++
                          : "]" === l
                            ? r--
                            : "(" === l
                              ? o++
                              : ")" === l && o--;
                      }
                      let s = 0 === n.length ? e : e.slice(i),
                        a = s,
                        u = !1;
                      return (
                        s.endsWith("!")
                          ? ((a = s.slice(0, -1)), (u = !0))
                          : s.startsWith("!") && ((a = s.slice(1)), (u = !0)),
                        m(n, u, a, t && t > i ? t - i : void 0)
                      );
                    };
                  if (t) {
                    let e = t + ":",
                      n = r;
                    r = (t) =>
                      t.startsWith(e)
                        ? n(t.slice(e.length))
                        : m(p, !1, t, void 0, !0);
                  }
                  if (n) {
                    let e = r;
                    r = (t) => n({ className: t, parseClassName: e });
                  }
                  return r;
                })(d),
                sortModifiers:
                  ((f = new Map()),
                  d.orderSensitiveModifiers.forEach((e, t) => {
                    f.set(e, 1e6 + t);
                  }),
                  (e) => {
                    let t = [],
                      n = [];
                    for (let r = 0; r < e.length; r++) {
                      let o = e[r],
                        i = "[" === o[0],
                        l = f.has(o);
                      i || l
                        ? (n.length > 0 && (n.sort(), t.push(...n), (n = [])),
                          t.push(o))
                        : n.push(o);
                    }
                    return (n.length > 0 && (n.sort(), t.push(...n)), t);
                  }),
                postfixLookupClassGroupIds: ((e) => {
                  let t = Object.create(null),
                    n = e.postfixLookupClassGroups;
                  if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
                  return t;
                })(d),
                ...((e) => {
                  let t = ((e) => {
                      let { theme: t, classGroups: n } = e;
                      return i(n, t);
                    })(e),
                    {
                      conflictingClassGroups: n,
                      conflictingClassGroupModifiers: l,
                    } = e;
                  return {
                    getClassGroupId: (e) => {
                      if (e.startsWith("[") && e.endsWith("]")) {
                        var n;
                        let t, r, o;
                        return -1 === (n = e).slice(1, -1).indexOf(":")
                          ? void 0
                          : ((r = (t = n.slice(1, -1)).indexOf(":")),
                            (o = t.slice(0, r)) ? "arbitrary.." + o : void 0);
                      }
                      let r = e.split("-"),
                        i = +("" === r[0] && r.length > 1);
                      return o(r, i, t);
                    },
                    getConflictingClassGroupIds: (e, t) => {
                      if (t) {
                        let t = l[e],
                          o = n[e];
                        if (t) {
                          if (o) {
                            let e = Array(o.length + t.length);
                            for (let t = 0; t < o.length; t++) e[t] = o[t];
                            for (let n = 0; n < t.length; n++)
                              e[o.length + n] = t[n];
                            return e;
                          }
                          return t;
                        }
                        return o || r;
                      }
                      return n[e] || r;
                    },
                  };
                })(d),
              }).cache.get),
              (s = n.cache.set),
              (a = u),
              u(c)
            );
          }),
          (...e) =>
            a(
              ((...e) => {
                let t,
                  n,
                  r = 0,
                  o = "";
                for (; r < e.length; )
                  (t = e[r++]) && (n = h(t)) && (o && (o += " "), (o += n));
                return o;
              })(...e),
            )
        );
      })(() => {
        let e = v("color"),
          t = v("font"),
          n = v("text"),
          r = v("font-weight"),
          o = v("tracking"),
          i = v("leading"),
          l = v("breakpoint"),
          s = v("container"),
          a = v("spacing"),
          u = v("radius"),
          c = v("shadow"),
          d = v("inset-shadow"),
          f = v("text-shadow"),
          p = v("drop-shadow"),
          m = v("blur"),
          g = v("perspective"),
          h = v("aspect"),
          b = v("ease"),
          y = v("animate"),
          E = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          w = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          x = () => [...w(), G, j],
          S = () => ["auto", "hidden", "clip", "visible", "scroll"],
          k = () => ["auto", "contain", "none"],
          T = () => [G, j, a],
          C = () => [R, "full", "auto", ...T()],
          M = () => [P, "none", "subgrid", G, j],
          N = () => ["auto", { span: ["full", P, G, j] }, P, G, j],
          D = () => [P, "auto", G, j],
          F = () => ["auto", "min", "max", "fr", G, j],
          en = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          er = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          eo = () => ["auto", ...T()],
          ei = () => [
            R,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...T(),
          ],
          el = () => [
            R,
            "screen",
            "full",
            "dvw",
            "lvw",
            "svw",
            "min",
            "max",
            "fit",
            ...T(),
          ],
          es = () => [
            R,
            "screen",
            "full",
            "lh",
            "dvh",
            "lvh",
            "svh",
            "min",
            "max",
            "fit",
            ...T(),
          ],
          ea = () => [e, G, j],
          eu = () => [...w(), J, Y, { position: [G, j] }],
          ec = () => [
            "no-repeat",
            { repeat: ["", "x", "y", "space", "round"] },
          ],
          ed = () => ["auto", "cover", "contain", Q, H, { size: [G, j] }],
          ef = () => [A, K, B],
          ep = () => ["", "none", "full", u, G, j],
          em = () => ["", O, K, B],
          eg = () => ["solid", "dashed", "dotted", "double"],
          eh = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          eb = () => [O, A, J, Y],
          ev = () => ["", "none", m, G, j],
          ey = () => ["none", O, G, j],
          eE = () => ["none", O, G, j],
          ew = () => [O, G, j],
          ex = () => [R, "full", ...T()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [I],
            breakpoint: [I],
            color: [L],
            container: [I],
            "drop-shadow": [I],
            ease: ["in", "out", "in-out"],
            font: [z],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [I],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [I],
            shadow: [I],
            spacing: ["px", O],
            text: [I],
            "text-shadow": [I],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", R, j, G, h] }],
            container: ["container"],
            "container-type": [{ "@container": ["", "normal", "size", G, j] }],
            "container-named": [W],
            columns: [{ columns: [O, j, G, s] }],
            "break-after": [{ "break-after": E() }],
            "break-before": [{ "break-before": E() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: x() }],
            overflow: [{ overflow: S() }],
            "overflow-x": [{ "overflow-x": S() }],
            "overflow-y": [{ "overflow-y": S() }],
            overscroll: [{ overscroll: k() }],
            "overscroll-x": [{ "overscroll-x": k() }],
            "overscroll-y": [{ "overscroll-y": k() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: C() }],
            "inset-x": [{ "inset-x": C() }],
            "inset-y": [{ "inset-y": C() }],
            start: [{ "inset-s": C(), start: C() }],
            end: [{ "inset-e": C(), end: C() }],
            "inset-bs": [{ "inset-bs": C() }],
            "inset-be": [{ "inset-be": C() }],
            top: [{ top: C() }],
            right: [{ right: C() }],
            bottom: [{ bottom: C() }],
            left: [{ left: C() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [P, "auto", G, j] }],
            basis: [{ basis: [R, "full", "auto", s, ...T()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [O, R, "auto", "initial", "none", j] }],
            grow: [{ grow: ["", O, G, j] }],
            shrink: [{ shrink: ["", O, G, j] }],
            order: [{ order: [P, "first", "last", "none", G, j] }],
            "grid-cols": [{ "grid-cols": M() }],
            "col-start-end": [{ col: N() }],
            "col-start": [{ "col-start": D() }],
            "col-end": [{ "col-end": D() }],
            "grid-rows": [{ "grid-rows": M() }],
            "row-start-end": [{ row: N() }],
            "row-start": [{ "row-start": D() }],
            "row-end": [{ "row-end": D() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": F() }],
            "auto-rows": [{ "auto-rows": F() }],
            gap: [{ gap: T() }],
            "gap-x": [{ "gap-x": T() }],
            "gap-y": [{ "gap-y": T() }],
            "justify-content": [{ justify: [...en(), "normal"] }],
            "justify-items": [{ "justify-items": [...er(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...er()] }],
            "align-content": [{ content: ["normal", ...en()] }],
            "align-items": [{ items: [...er(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...er(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": en() }],
            "place-items": [{ "place-items": [...er(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...er()] }],
            p: [{ p: T() }],
            px: [{ px: T() }],
            py: [{ py: T() }],
            ps: [{ ps: T() }],
            pe: [{ pe: T() }],
            pbs: [{ pbs: T() }],
            pbe: [{ pbe: T() }],
            pt: [{ pt: T() }],
            pr: [{ pr: T() }],
            pb: [{ pb: T() }],
            pl: [{ pl: T() }],
            m: [{ m: eo() }],
            mx: [{ mx: eo() }],
            my: [{ my: eo() }],
            ms: [{ ms: eo() }],
            me: [{ me: eo() }],
            mbs: [{ mbs: eo() }],
            mbe: [{ mbe: eo() }],
            mt: [{ mt: eo() }],
            mr: [{ mr: eo() }],
            mb: [{ mb: eo() }],
            ml: [{ ml: eo() }],
            "space-x": [{ "space-x": T() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": T() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: ei() }],
            "inline-size": [{ inline: ["auto", ...el()] }],
            "min-inline-size": [{ "min-inline": ["auto", ...el()] }],
            "max-inline-size": [{ "max-inline": ["none", ...el()] }],
            "block-size": [{ block: ["auto", ...es()] }],
            "min-block-size": [{ "min-block": ["auto", ...es()] }],
            "max-block-size": [{ "max-block": ["none", ...es()] }],
            w: [{ w: [s, "screen", ...ei()] }],
            "min-w": [{ "min-w": [s, "screen", "none", ...ei()] }],
            "max-w": [
              {
                "max-w": [
                  s,
                  "screen",
                  "none",
                  "prose",
                  { screen: [l] },
                  ...ei(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...ei()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...ei()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...ei()] }],
            "font-size": [{ text: ["base", n, K, B] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [r, et, V] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  A,
                  j,
                ],
              },
            ],
            "font-family": [{ font: [X, $, t] }],
            "font-features": [{ "font-features": [j] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [o, G, j] }],
            "line-clamp": [{ "line-clamp": [O, "none", G, _] }],
            leading: [{ leading: [i, ...T()] }],
            "list-image": [{ "list-image": ["none", G, j] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", G, j] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: ea() }],
            "text-color": [{ text: ea() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...eg(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [O, "from-font", "auto", G, B] },
            ],
            "text-decoration-color": [{ decoration: ea() }],
            "underline-offset": [{ "underline-offset": [O, "auto", G, j] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: T() }],
            "tab-size": [{ tab: [P, G, j] }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  G,
                  j,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", G, j] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: eu() }],
            "bg-repeat": [{ bg: ec() }],
            "bg-size": [{ bg: ed() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      P,
                      G,
                      j,
                    ],
                    radial: ["", G, j],
                    conic: [P, G, j],
                  },
                  Z,
                  U,
                ],
              },
            ],
            "bg-color": [{ bg: ea() }],
            "gradient-from-pos": [{ from: ef() }],
            "gradient-via-pos": [{ via: ef() }],
            "gradient-to-pos": [{ to: ef() }],
            "gradient-from": [{ from: ea() }],
            "gradient-via": [{ via: ea() }],
            "gradient-to": [{ to: ea() }],
            rounded: [{ rounded: ep() }],
            "rounded-s": [{ "rounded-s": ep() }],
            "rounded-e": [{ "rounded-e": ep() }],
            "rounded-t": [{ "rounded-t": ep() }],
            "rounded-r": [{ "rounded-r": ep() }],
            "rounded-b": [{ "rounded-b": ep() }],
            "rounded-l": [{ "rounded-l": ep() }],
            "rounded-ss": [{ "rounded-ss": ep() }],
            "rounded-se": [{ "rounded-se": ep() }],
            "rounded-ee": [{ "rounded-ee": ep() }],
            "rounded-es": [{ "rounded-es": ep() }],
            "rounded-tl": [{ "rounded-tl": ep() }],
            "rounded-tr": [{ "rounded-tr": ep() }],
            "rounded-br": [{ "rounded-br": ep() }],
            "rounded-bl": [{ "rounded-bl": ep() }],
            "border-w": [{ border: em() }],
            "border-w-x": [{ "border-x": em() }],
            "border-w-y": [{ "border-y": em() }],
            "border-w-s": [{ "border-s": em() }],
            "border-w-e": [{ "border-e": em() }],
            "border-w-bs": [{ "border-bs": em() }],
            "border-w-be": [{ "border-be": em() }],
            "border-w-t": [{ "border-t": em() }],
            "border-w-r": [{ "border-r": em() }],
            "border-w-b": [{ "border-b": em() }],
            "border-w-l": [{ "border-l": em() }],
            "divide-x": [{ "divide-x": em() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": em() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...eg(), "hidden", "none"] }],
            "divide-style": [{ divide: [...eg(), "hidden", "none"] }],
            "border-color": [{ border: ea() }],
            "border-color-x": [{ "border-x": ea() }],
            "border-color-y": [{ "border-y": ea() }],
            "border-color-s": [{ "border-s": ea() }],
            "border-color-e": [{ "border-e": ea() }],
            "border-color-bs": [{ "border-bs": ea() }],
            "border-color-be": [{ "border-be": ea() }],
            "border-color-t": [{ "border-t": ea() }],
            "border-color-r": [{ "border-r": ea() }],
            "border-color-b": [{ "border-b": ea() }],
            "border-color-l": [{ "border-l": ea() }],
            "divide-color": [{ divide: ea() }],
            "outline-style": [{ outline: [...eg(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [O, G, j] }],
            "outline-w": [{ outline: ["", O, K, B] }],
            "outline-color": [{ outline: ea() }],
            shadow: [{ shadow: ["", "none", c, ee, q] }],
            "shadow-color": [{ shadow: ea() }],
            "inset-shadow": [{ "inset-shadow": ["none", d, ee, q] }],
            "inset-shadow-color": [{ "inset-shadow": ea() }],
            "ring-w": [{ ring: em() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: ea() }],
            "ring-offset-w": [{ "ring-offset": [O, B] }],
            "ring-offset-color": [{ "ring-offset": ea() }],
            "inset-ring-w": [{ "inset-ring": em() }],
            "inset-ring-color": [{ "inset-ring": ea() }],
            "text-shadow": [{ "text-shadow": ["none", f, ee, q] }],
            "text-shadow-color": [{ "text-shadow": ea() }],
            opacity: [{ opacity: [O, G, j] }],
            "mix-blend": [
              { "mix-blend": [...eh(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": eh() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [O] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": eb() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": eb() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": ea() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": ea() }],
            "mask-image-t-from-pos": [{ "mask-t-from": eb() }],
            "mask-image-t-to-pos": [{ "mask-t-to": eb() }],
            "mask-image-t-from-color": [{ "mask-t-from": ea() }],
            "mask-image-t-to-color": [{ "mask-t-to": ea() }],
            "mask-image-r-from-pos": [{ "mask-r-from": eb() }],
            "mask-image-r-to-pos": [{ "mask-r-to": eb() }],
            "mask-image-r-from-color": [{ "mask-r-from": ea() }],
            "mask-image-r-to-color": [{ "mask-r-to": ea() }],
            "mask-image-b-from-pos": [{ "mask-b-from": eb() }],
            "mask-image-b-to-pos": [{ "mask-b-to": eb() }],
            "mask-image-b-from-color": [{ "mask-b-from": ea() }],
            "mask-image-b-to-color": [{ "mask-b-to": ea() }],
            "mask-image-l-from-pos": [{ "mask-l-from": eb() }],
            "mask-image-l-to-pos": [{ "mask-l-to": eb() }],
            "mask-image-l-from-color": [{ "mask-l-from": ea() }],
            "mask-image-l-to-color": [{ "mask-l-to": ea() }],
            "mask-image-x-from-pos": [{ "mask-x-from": eb() }],
            "mask-image-x-to-pos": [{ "mask-x-to": eb() }],
            "mask-image-x-from-color": [{ "mask-x-from": ea() }],
            "mask-image-x-to-color": [{ "mask-x-to": ea() }],
            "mask-image-y-from-pos": [{ "mask-y-from": eb() }],
            "mask-image-y-to-pos": [{ "mask-y-to": eb() }],
            "mask-image-y-from-color": [{ "mask-y-from": ea() }],
            "mask-image-y-to-color": [{ "mask-y-to": ea() }],
            "mask-image-radial": [{ "mask-radial": [G, j] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": eb() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": eb() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": ea() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": ea() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": w() }],
            "mask-image-conic-pos": [{ "mask-conic": [O] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": eb() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": eb() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": ea() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": ea() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: eu() }],
            "mask-repeat": [{ mask: ec() }],
            "mask-size": [{ mask: ed() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", G, j] }],
            filter: [{ filter: ["", "none", G, j] }],
            blur: [{ blur: ev() }],
            brightness: [{ brightness: [O, G, j] }],
            contrast: [{ contrast: [O, G, j] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", p, ee, q] }],
            "drop-shadow-color": [{ "drop-shadow": ea() }],
            grayscale: [{ grayscale: ["", O, G, j] }],
            "hue-rotate": [{ "hue-rotate": [O, G, j] }],
            invert: [{ invert: ["", O, G, j] }],
            saturate: [{ saturate: [O, G, j] }],
            sepia: [{ sepia: ["", O, G, j] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", G, j] }],
            "backdrop-blur": [{ "backdrop-blur": ev() }],
            "backdrop-brightness": [{ "backdrop-brightness": [O, G, j] }],
            "backdrop-contrast": [{ "backdrop-contrast": [O, G, j] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", O, G, j] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [O, G, j] }],
            "backdrop-invert": [{ "backdrop-invert": ["", O, G, j] }],
            "backdrop-opacity": [{ "backdrop-opacity": [O, G, j] }],
            "backdrop-saturate": [{ "backdrop-saturate": [O, G, j] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", O, G, j] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": T() }],
            "border-spacing-x": [{ "border-spacing-x": T() }],
            "border-spacing-y": [{ "border-spacing-y": T() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  G,
                  j,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [O, "initial", G, j] }],
            ease: [{ ease: ["linear", "initial", b, G, j] }],
            delay: [{ delay: [O, G, j] }],
            animate: [{ animate: ["none", y, G, j] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [g, G, j] }],
            "perspective-origin": [{ "perspective-origin": x() }],
            rotate: [{ rotate: ey() }],
            "rotate-x": [{ "rotate-x": ey() }],
            "rotate-y": [{ "rotate-y": ey() }],
            "rotate-z": [{ "rotate-z": ey() }],
            scale: [{ scale: eE() }],
            "scale-x": [{ "scale-x": eE() }],
            "scale-y": [{ "scale-y": eE() }],
            "scale-z": [{ "scale-z": eE() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: ew() }],
            "skew-x": [{ "skew-x": ew() }],
            "skew-y": [{ "skew-y": ew() }],
            transform: [{ transform: [G, j, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: x() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: ex() }],
            "translate-x": [{ "translate-x": ex() }],
            "translate-y": [{ "translate-y": ex() }],
            "translate-z": [{ "translate-z": ex() }],
            "translate-none": ["translate-none"],
            zoom: [{ zoom: [P, G, j] }],
            accent: [{ accent: ea() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: ea() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  G,
                  j,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scrollbar-thumb-color": [{ "scrollbar-thumb": ea() }],
            "scrollbar-track-color": [{ "scrollbar-track": ea() }],
            "scrollbar-gutter": [
              { "scrollbar-gutter": ["auto", "stable", "both"] },
            ],
            "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
            "scroll-m": [{ "scroll-m": T() }],
            "scroll-mx": [{ "scroll-mx": T() }],
            "scroll-my": [{ "scroll-my": T() }],
            "scroll-ms": [{ "scroll-ms": T() }],
            "scroll-me": [{ "scroll-me": T() }],
            "scroll-mbs": [{ "scroll-mbs": T() }],
            "scroll-mbe": [{ "scroll-mbe": T() }],
            "scroll-mt": [{ "scroll-mt": T() }],
            "scroll-mr": [{ "scroll-mr": T() }],
            "scroll-mb": [{ "scroll-mb": T() }],
            "scroll-ml": [{ "scroll-ml": T() }],
            "scroll-p": [{ "scroll-p": T() }],
            "scroll-px": [{ "scroll-px": T() }],
            "scroll-py": [{ "scroll-py": T() }],
            "scroll-ps": [{ "scroll-ps": T() }],
            "scroll-pe": [{ "scroll-pe": T() }],
            "scroll-pbs": [{ "scroll-pbs": T() }],
            "scroll-pbe": [{ "scroll-pbe": T() }],
            "scroll-pt": [{ "scroll-pt": T() }],
            "scroll-pr": [{ "scroll-pr": T() }],
            "scroll-pb": [{ "scroll-pb": T() }],
            "scroll-pl": [{ "scroll-pl": T() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  G,
                  j,
                ],
              },
            ],
            fill: [{ fill: ["none", ...ea()] }],
            "stroke-w": [{ stroke: [O, K, B, _] }],
            stroke: [{ stroke: ["none", ...ea()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            "container-named": ["container-type"],
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "inset-bs",
              "inset-be",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-bs",
              "border-w-be",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-bs",
              "border-color-be",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mbs",
              "scroll-mbe",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pbs",
              "scroll-pbe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          postfixLookupClassGroups: ["container-type"],
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    e.s(
      [
        "cn",
        0,
        function (...e) {
          return ef(t(e));
        },
      ],
      75157,
    );
  },
  19455,
  25913,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(27930),
      r = e.i(7670);
    let o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
      i = r.clsx,
      l = (e, t) => (n) => {
        var r;
        if ((null == t ? void 0 : t.variants) == null)
          return i(
            e,
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className,
          );
        let { variants: l, defaultVariants: s } = t,
          a = Object.keys(l).map((e) => {
            let t = null == n ? void 0 : n[e],
              r = null == s ? void 0 : s[e];
            if (null === t) return null;
            let i = o(t) || o(r);
            return l[e][i];
          }),
          u =
            n &&
            Object.entries(n).reduce((e, t) => {
              let [n, r] = t;
              return (void 0 === r || (e[n] = r), e);
            }, {});
        return i(
          e,
          a,
          null == t || null == (r = t.compoundVariants)
            ? void 0
            : r.reduce((e, t) => {
                let { class: n, className: r, ...o } = t;
                return Object.entries(o).every((e) => {
                  let [t, n] = e;
                  return Array.isArray(n)
                    ? n.includes({ ...s, ...u }[t])
                    : { ...s, ...u }[t] === n;
                })
                  ? [...e, n, r]
                  : e;
              }, []),
          null == n ? void 0 : n.class,
          null == n ? void 0 : n.className,
        );
      };
    e.s(["cva", 0, l], 25913);
    var s = e.i(75157);
    let a = l(
      "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline:
              "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost:
              "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive:
              "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default:
              "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs":
              "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm":
              "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      },
    );
    e.s(
      [
        "Button",
        0,
        function ({
          className: e,
          variant: r = "default",
          size: o = "default",
          ...i
        }) {
          return (0, t.jsx)(n.Button, {
            "data-slot": "button",
            className: (0, s.cn)(a({ variant: r, size: o, className: e })),
            ...i,
          });
        },
      ],
      19455,
    );
  },
]);
