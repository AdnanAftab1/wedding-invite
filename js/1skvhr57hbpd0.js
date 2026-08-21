(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  51437,
  45356,
  (e) => {
    "use strict";
    e.i(47167);
    var t = e.i(71645);
    e.s(
      [
        "useControlled",
        0,
        function ({ controlled: e, default: n, name: r, state: o = "value" }) {
          let { current: i } = t.useRef(void 0 !== e),
            [s, a] = t.useState(n),
            u = t.useCallback((e) => {
              i || a(e);
            }, []);
          return [i ? e : s, u];
        },
      ],
      51437,
    );
    let n = t.createContext({
      register: () => {},
      unregister: () => {},
      subscribeMapChange: () => () => {},
      elementsRef: { current: [] },
      nextIndexRef: { current: 0 },
    });
    e.s(
      [
        "CompositeListContext",
        0,
        n,
        "useCompositeListContext",
        0,
        function () {
          return t.useContext(n);
        },
      ],
      45356,
    );
  },
  73553,
  (e) => {
    "use strict";
    var t,
      n = e.i(71645),
      r = e.i(46376),
      o = e.i(45356);
    let i =
      (((t = {})[(t.None = 0)] = "None"),
      (t[(t.GuessFromOrder = 1)] = "GuessFromOrder"),
      t);
    e.s([
      "useCompositeListItem",
      0,
      function (e = {}) {
        let {
            label: t,
            metadata: s,
            textRef: a,
            indexGuessBehavior: u,
            index: l,
          } = e,
          {
            register: c,
            unregister: d,
            subscribeMapChange: p,
            elementsRef: f,
            labelsRef: g,
            nextIndexRef: m,
          } = (0, o.useCompositeListContext)(),
          v = n.useRef(-1),
          [h, E] = n.useState(
            l ??
              (u === i.GuessFromOrder
                ? () => {
                    if (-1 === v.current) {
                      let e = m.current;
                      ((m.current += 1), (v.current = e));
                    }
                    return v.current;
                  }
                : -1),
          ),
          R = n.useRef(null),
          S = n.useCallback(
            (e) => {
              if (
                ((R.current = e),
                -1 !== h && null !== e && ((f.current[h] = e), g))
              ) {
                let n = void 0 !== t;
                g.current[h] = n
                  ? t
                  : (a?.current?.textContent ?? e.textContent);
              }
            },
            [h, f, g, t, a],
          );
        return (
          (0, r.useIsoLayoutEffect)(() => {
            if (null != l) return;
            let e = R.current;
            if (e)
              return (
                c(e, s),
                () => {
                  d(e);
                }
              );
          }, [l, c, d, s]),
          (0, r.useIsoLayoutEffect)(() => {
            if (null == l)
              return p((e) => {
                let t = R.current ? e.get(R.current)?.index : null;
                null != t && E(t);
              });
          }, [l, p, E]),
          { ref: S, index: h }
        );
      },
    ]);
  },
  53687,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(88940),
      r = e.i(67865),
      o = e.i(46376),
      i = e.i(45356),
      s = e.i(43476);
    function a() {
      return new Map();
    }
    function u() {
      return new Set();
    }
    function l(e, t) {
      let n = e.compareDocumentPosition(t);
      return n & Node.DOCUMENT_POSITION_FOLLOWING ||
        n & Node.DOCUMENT_POSITION_CONTAINED_BY
        ? -1
        : n & Node.DOCUMENT_POSITION_PRECEDING ||
            n & Node.DOCUMENT_POSITION_CONTAINS
          ? 1
          : 0;
    }
    e.s([
      "CompositeList",
      0,
      function (e) {
        let { children: c, elementsRef: d, labelsRef: p, onMapChange: f } = e,
          g = (0, r.useStableCallback)(f),
          m = t.useRef(0),
          v = (0, n.useRefWithInit)(u).current,
          h = (0, n.useRefWithInit)(a).current,
          [E, R] = t.useState(0),
          S = t.useRef(E),
          b = (0, r.useStableCallback)((e, t) => {
            (h.set(e, t ?? null), (S.current += 1), R(S.current));
          }),
          x = (0, r.useStableCallback)((e) => {
            (h.delete(e), (S.current += 1), R(S.current));
          }),
          y = t.useMemo(() => {
            let e = new Map();
            return (
              Array.from(h.keys())
                .filter((e) => e.isConnected)
                .sort(l)
                .forEach((t, n) => {
                  let r = h.get(t) ?? {};
                  e.set(t, { ...r, index: n });
                }),
              e
            );
          }, [h, E]);
        ((0, o.useIsoLayoutEffect)(() => {
          if ("function" != typeof MutationObserver || 0 === y.size) return;
          let e = new MutationObserver((e) => {
            let t = new Set(),
              n = (e) => (t.has(e) ? t.delete(e) : t.add(e));
            (e.forEach((e) => {
              (e.removedNodes.forEach(n), e.addedNodes.forEach(n));
            }),
              0 === t.size && ((S.current += 1), R(S.current)));
          });
          return (
            y.forEach((t, n) => {
              n.parentElement && e.observe(n.parentElement, { childList: !0 });
            }),
            () => {
              e.disconnect();
            }
          );
        }, [y]),
          (0, o.useIsoLayoutEffect)(() => {
            (S.current === E &&
              (d.current.length !== y.size && (d.current.length = y.size),
              p && p.current.length !== y.size && (p.current.length = y.size),
              (m.current = y.size)),
              g(y));
          }, [g, y, d, p, E]),
          (0, o.useIsoLayoutEffect)(
            () => () => {
              d.current = [];
            },
            [d],
          ),
          (0, o.useIsoLayoutEffect)(
            () => () => {
              p && (p.current = []);
            },
            [p],
          ));
        let C = (0, r.useStableCallback)(
          (e) => (
            v.add(e),
            () => {
              v.delete(e);
            }
          ),
        );
        (0, o.useIsoLayoutEffect)(() => {
          v.forEach((e) => e(y));
        }, [v, y]);
        let I = t.useMemo(
          () => ({
            register: b,
            unregister: x,
            subscribeMapChange: C,
            elementsRef: d,
            labelsRef: p,
            nextIndexRef: m,
          }),
          [b, x, C, d, p, m],
        );
        return (0, s.jsx)(i.CompositeListContext.Provider, {
          value: I,
          children: c,
        });
      },
    ]);
  },
  81739,
  (e) => {
    "use strict";
    var t,
      n,
      r = e.i(43476),
      o = e.i(22016);
    (e.s([], 61027), e.i(61027), e.i(47167));
    var i = e.i(71645),
      s = e.i(33332);
    let a = i.createContext(void 0);
    function u(e) {
      let t = i.useContext(a);
      if (void 0 === t && !e) throw Error((0, s.default)(33));
      return t;
    }
    let l = i.createContext(void 0);
    function c(e) {
      let t = i.useContext(l);
      if (void 0 === t && !e) throw Error((0, s.default)(36));
      return t;
    }
    var d = e.i(52245),
      p = e.i(5005);
    let f = i.forwardRef(function (e, t) {
      let { render: n, className: r, style: o, ...i } = e,
        { store: s } = c(),
        {
          arrowRef: a,
          side: l,
          align: f,
          arrowUncentered: g,
          arrowStyles: m,
        } = u(),
        v = s.useState("open");
      return (0, d.useRenderElement)("div", e, {
        ref: [a, t],
        stateAttributesMapping: p.popupStateMapping,
        state: { open: v, side: l, align: f, uncentered: g },
        props: { style: m, "aria-hidden": !0, ...i },
      });
    });
    var g = e.i(9407);
    let m = i.createContext(void 0);
    function v(e = !0) {
      let t = i.useContext(m);
      if (void 0 === t && !e) throw Error((0, s.default)(25));
      return t;
    }
    var h = e.i(56434);
    let E = { ...p.popupStateMapping, ...g.transitionStatusMapping },
      R = i.forwardRef(function (e, t) {
        let { render: n, className: r, style: o, ...i } = e,
          { store: s } = c(),
          a = s.useState("open"),
          u = s.useState("mounted"),
          l = s.useState("transitionStatus"),
          p = s.useState("lastOpenChangeReason"),
          f = v();
        return (0, d.useRenderElement)("div", e, {
          ref: f?.backdropRef ? [t, f.backdropRef] : t,
          state: { open: a, transitionStatus: l },
          stateAttributesMapping: E,
          props: [
            {
              role: "presentation",
              hidden: !u,
              style: {
                pointerEvents: p === h.REASONS.triggerHover ? "none" : void 0,
                userSelect: "none",
                WebkitUserSelect: "none",
              },
            },
            i,
          ],
        });
      });
    var S = e.i(51437);
    let b = i.createContext(void 0);
    var x = e.i(28918),
      y = e.i(40886),
      C = e.i(76782),
      I = e.i(28744);
    function O(e) {
      let {
          closeOnClick: t,
          highlighted: n,
          id: r,
          nodeId: o,
          store: s,
          typingRef: a,
          itemRef: u,
          itemMetadata: l,
        } = e,
        { events: c } = s.useState("floatingTreeRoot"),
        d = s.useState("open"),
        p = v(!0),
        f = void 0 !== p;
      return i.useMemo(
        () => ({
          id: r,
          role: "menuitem",
          tabIndex: d && n ? 0 : -1,
          onKeyDown(e) {
            " " === e.key && a?.current && e.preventDefault();
          },
          onMouseMove(e) {
            o && c.emit("itemhover", { nodeId: o, target: e.currentTarget });
          },
          onClick(e) {
            t && c.emit("close", { domEvent: e, reason: h.REASONS.itemPress });
          },
          onMouseUp(e) {
            if (p) {
              let t = p.initialCursorPointRef.current;
              if (
                ((p.initialCursorPointRef.current = null),
                (f &&
                  t &&
                  1 >= Math.abs(e.clientX - t.x) &&
                  1 >= Math.abs(e.clientY - t.y)) ||
                  (f && !I.platform.os.mac && 2 === e.button))
              )
                return;
            }
            u.current &&
              s.context.allowMouseUpTriggerRef.current &&
              (!f || 2 === e.button) &&
              (!l || "regular-item" === l.type) &&
              u.current.click();
          },
        }),
        [t, n, r, c, o, d, s, a, u, p, f, l],
      );
    }
    let T = { type: "regular-item" };
    function M(e) {
      let {
          closeOnClick: t,
          disabled: n = !1,
          highlighted: r,
          id: o,
          store: s,
          typingRef: a = s.context.typingRef,
          nativeButton: u,
          itemMetadata: l,
          nodeId: c,
        } = e,
        d = s.useState("disabled"),
        p = i.useRef(null),
        { getButtonProps: f, buttonRef: g } = (0, y.useButton)({
          disabled: n || d,
          focusableWhenDisabled: !0,
          native: u,
          composite: !0,
        }),
        m = O({
          closeOnClick: t,
          highlighted: r,
          id: o,
          nodeId: c,
          store: s,
          typingRef: a,
          itemRef: p,
          itemMetadata: l,
        }),
        v = i.useCallback(
          (e) =>
            (0, C.mergeProps)(
              m,
              {
                onMouseEnter() {
                  "submenu-trigger" === l.type && l.setActive();
                },
              },
              e,
              f,
            ),
          [m, f, l],
        ),
        h = (0, x.useMergedRefs)(p, g);
      return i.useMemo(() => ({ getItemProps: v, itemRef: h }), [v, h]);
    }
    var k = e.i(73553),
      P = e.i(88015);
    let w =
        (((t = {}).checked = "data-checked"),
        (t.unchecked = "data-unchecked"),
        (t.disabled = "data-disabled"),
        (t.highlighted = "data-highlighted"),
        t),
      N = {
        checked: (e) => (e ? { [w.checked]: "" } : { [w.unchecked]: "" }),
        ...g.transitionStatusMapping,
      };
    var A = e.i(75606);
    let L = i.forwardRef(function (e, t) {
      let {
          render: n,
          className: o,
          id: s,
          label: a,
          nativeButton: l = !1,
          disabled: p = !1,
          closeOnClick: f = !1,
          checked: g,
          defaultChecked: m,
          onCheckedChange: v,
          style: E,
          ...R
        } = e,
        x = (0, k.useCompositeListItem)({ label: a }),
        y = u(!0),
        C = (0, P.useBaseUiId)(s),
        { store: I } = c(),
        O = I.useState("isActive", x.index),
        w = I.useState("itemProps"),
        [L, D] = (0, S.useControlled)({
          controlled: g,
          default: m ?? !1,
          name: "MenuCheckboxItem",
          state: "checked",
        }),
        { getItemProps: F, itemRef: j } = M({
          closeOnClick: f,
          disabled: p,
          highlighted: O,
          id: C,
          store: I,
          nativeButton: l,
          nodeId: y?.context.nodeId,
          itemMetadata: T,
        }),
        _ = i.useMemo(
          () => ({ disabled: p, highlighted: O, checked: L }),
          [p, O, L],
        ),
        B = (0, d.useRenderElement)("div", e, {
          state: _,
          stateAttributesMapping: N,
          props: [
            w,
            {
              role: "menuitemcheckbox",
              "aria-checked": L,
              onClick: function (e) {
                let t = (0, A.createChangeEventDetails)(
                  h.REASONS.itemPress,
                  e.nativeEvent,
                  void 0,
                  { preventUnmountOnClose() {} },
                );
                (v?.(!L, t), t.isCanceled || D((e) => !e));
              },
            },
            R,
            F,
          ],
          ref: [j, t, x.ref],
        });
      return (0, r.jsx)(b.Provider, { value: _, children: B });
    });
    var D = e.i(23910),
      F = e.i(37584);
    let j = i.forwardRef(function (e, t) {
        let {
            render: n,
            className: r,
            style: o,
            keepMounted: a = !1,
            ...u
          } = e,
          l = (function () {
            let e = i.useContext(b);
            if (void 0 === e) throw Error((0, s.default)(30));
            return e;
          })(),
          c = i.useRef(null),
          { transitionStatus: p, setMounted: f } = (0, D.useTransitionStatus)(
            l.checked,
          );
        (0, F.useOpenChangeComplete)({
          open: l.checked,
          ref: c,
          onComplete() {
            l.checked || f(!1);
          },
        });
        let g = {
          checked: l.checked,
          disabled: l.disabled,
          highlighted: l.highlighted,
          transitionStatus: p,
        };
        return (0, d.useRenderElement)("span", e, {
          state: g,
          ref: [t, c],
          stateAttributesMapping: N,
          props: { "aria-hidden": !0, ...u },
          enabled: a || l.checked,
        });
      }),
      _ = i.createContext(void 0),
      B = i.forwardRef(function (e, t) {
        let { render: n, className: o, style: s, ...a } = e,
          [u, l] = i.useState(void 0),
          c = (0, d.useRenderElement)("div", e, {
            ref: t,
            props: { role: "group", "aria-labelledby": u, ...a },
          });
        return (0, r.jsx)(_.Provider, { value: l, children: c });
      });
    var U = e.i(46376);
    let H = i.forwardRef(function (e, t) {
        let { render: n, className: r, style: o, id: a, ...u } = e,
          l = (0, P.useBaseUiId)(a),
          c = (function () {
            let e = i.useContext(_);
            if (void 0 === e) throw Error((0, s.default)(31));
            return e;
          })();
        return (
          (0, U.useIsoLayoutEffect)(
            () => (
              c(l),
              () => {
                c(void 0);
              }
            ),
            [c, l],
          ),
          (0, d.useRenderElement)("div", e, {
            ref: t,
            props: { id: l, role: "presentation", ...u },
          })
        );
      }),
      W = i.forwardRef(function (e, t) {
        let {
            render: n,
            className: r,
            id: o,
            label: i,
            nativeButton: s = !1,
            disabled: a = !1,
            closeOnClick: l = !0,
            style: p,
            ...f
          } = e,
          g = (0, k.useCompositeListItem)({ label: i }),
          m = u(!0),
          v = (0, P.useBaseUiId)(o),
          { store: h } = c(),
          E = h.useState("isActive", g.index),
          R = h.useState("itemProps"),
          { getItemProps: S, itemRef: b } = M({
            closeOnClick: l,
            disabled: a,
            highlighted: E,
            id: v,
            store: h,
            nativeButton: s,
            nodeId: m?.context.nodeId,
            itemMetadata: T,
          });
        return (0, d.useRenderElement)("div", e, {
          state: { disabled: a, highlighted: E },
          props: [R, f, S],
          ref: [b, t, g.ref],
        });
      }),
      V = i.forwardRef(function (e, t) {
        let {
            render: n,
            className: r,
            id: o,
            label: s,
            closeOnClick: a = !1,
            style: l,
            ...p
          } = e,
          f = i.useRef(null),
          g = (0, k.useCompositeListItem)({ label: s }),
          m = u(!0),
          v = m?.context.nodeId,
          h = (0, P.useBaseUiId)(o),
          { store: E } = c(),
          R = E.useState("isActive", g.index),
          S = E.useState("itemProps"),
          b = E.context.typingRef,
          { getButtonProps: x, buttonRef: I } = (0, y.useButton)({
            native: !1,
            composite: !0,
          }),
          T = O({
            closeOnClick: a,
            highlighted: R,
            id: h,
            nodeId: v,
            store: E,
            typingRef: b,
            itemRef: f,
          });
        return (0, d.useRenderElement)("a", e, {
          state: { highlighted: R },
          props: [
            S,
            p,
            function (e) {
              return (0, C.mergeProps)(T, e, x);
            },
          ],
          ref: [f, I, t, g.ref],
        });
      });
    var G = e.i(61487),
      Y = e.i(31157),
      K = e.i(96533),
      z = e.i(73327),
      J = e.i(15982);
    let q = { ...p.popupStateMapping, ...g.transitionStatusMapping },
      $ = i.forwardRef(function (e, t) {
        let { render: n, className: o, style: s, finalFocus: a, ...l } = e,
          { store: p } = c(),
          { side: f, align: g } = u(),
          m = null != (0, K.useToolbarRootContext)(!0),
          v = p.useState("open"),
          E = p.useState("transitionStatus"),
          R = p.useState("popupProps"),
          S = p.useState("mounted"),
          b = p.useState("instantType"),
          x = p.useState("activeTriggerElement"),
          y = p.useState("parent"),
          C = p.useState("lastOpenChangeReason"),
          I = p.useState("rootId"),
          O = p.useState("floatingRootContext"),
          T = p.useState("floatingTreeRoot"),
          M = p.useState("closeDelay"),
          k = p.useState("activeTriggerElement"),
          P = p.useState("hoverEnabled"),
          w = p.useState("disabled"),
          N = p.useState("openMethod"),
          L = "context-menu" === y.type;
        ((0, F.useOpenChangeComplete)({
          open: v,
          ref: p.context.popupRef,
          onComplete() {
            v && p.context.onOpenChangeComplete?.(!0);
          },
        }),
          i.useEffect(() => {
            function e(e) {
              p.setOpen(
                !1,
                (0, A.createChangeEventDetails)(e.reason, e.domEvent),
              );
            }
            return (
              T.events.on("close", e),
              () => {
                T.events.off("close", e);
              }
            );
          }, [T.events, p]),
          (0, Y.useHoverFloatingInteraction)(O, {
            enabled: P && !w && !L && "menubar" !== y.type,
            closeDelay: M,
          }));
        let D = i.useCallback(
            (e) => {
              p.set("popupElement", e);
            },
            [p],
          ),
          j = {
            transitionStatus: E,
            side: f,
            align: g,
            open: v,
            nested: "menu" === y.type,
            instant: b,
          },
          _ = (0, d.useRenderElement)("div", e, {
            state: j,
            ref: [t, p.context.popupRef, D],
            stateAttributesMapping: q,
            props: [
              R,
              {
                onKeyDown(e) {
                  m && z.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
                },
              },
              (0, J.getDisabledMountTransitionStyles)(E),
              l,
              { "data-rootownerid": I },
            ],
          }),
          B = void 0 === y.type || L;
        return (
          (x || ("menubar" === y.type && C !== h.REASONS.outsidePress)) &&
            (B = !0),
          (0, r.jsx)(G.FloatingFocusManager, {
            context: O,
            openInteractionType: N,
            modal: L,
            disabled: !S,
            returnFocus: void 0 === a ? B : a,
            initialFocus: "menu" !== y.type,
            restoreFocus: !0,
            externalTree: "menubar" !== y.type ? T : void 0,
            previousFocusableElement: k,
            nextFocusableElement:
              void 0 === y.type ? p.context.triggerFocusTargetRef : void 0,
            beforeContentFocusGuardRef:
              void 0 === y.type ? p.context.beforeContentFocusGuardRef : void 0,
            children: _,
          })
        );
      });
    var X = e.i(26674);
    let Q = i.createContext(void 0),
      Z = i.forwardRef(function (e, t) {
        let { keepMounted: n = !1, ...o } = e,
          { store: i } = c();
        return i.useState("mounted") || n
          ? (0, r.jsx)(Q.Provider, {
              value: n,
              children: (0, r.jsx)(X.FloatingPortal, { ref: t, ...o }),
            })
          : null;
      });
    var ee = e.i(44394),
      et = e.i(39957),
      en = e.i(46420),
      er = e.i(29365),
      eo = e.i(53687),
      ei = e.i(426),
      es = e.i(38396),
      ea = e.i(60495),
      eu = e.i(22640),
      el = e.i(89579),
      ec = e.i(33383);
    let ed = i.forwardRef(function (e, t) {
      let {
          anchor: n,
          positionMethod: o = "absolute",
          className: u,
          render: l,
          side: d,
          align: p,
          sideOffset: f = 0,
          alignOffset: g = 0,
          collisionBoundary: m = "clipping-ancestors",
          collisionPadding: E = 5,
          arrowPadding: R = 5,
          sticky: S = !1,
          disableAnchorTracking: b = !1,
          collisionAvoidance: x = es.DROPDOWN_COLLISION_AVOIDANCE,
          style: y,
          ...C
        } = e,
        { store: I } = c(),
        O = (function () {
          let e = i.useContext(Q);
          if (void 0 === e) throw Error((0, s.default)(32));
          return e;
        })(),
        T = v(!0),
        M = I.useState("parent"),
        k = I.useState("floatingRootContext"),
        P = I.useState("floatingTreeRoot"),
        w = I.useState("mounted"),
        N = I.useState("open"),
        L = I.useState("modal"),
        D = I.useState("openMethod"),
        F = I.useState("activeTriggerElement"),
        j = I.useState("transitionStatus"),
        _ = I.useState("positionerElement"),
        B = I.useState("instantType"),
        H = I.useState("hasViewport"),
        W = I.useState("lastOpenChangeReason"),
        V = I.useState("floatingNodeId"),
        G = I.useState("floatingParentNodeId"),
        Y = k.useState("domReferenceElement"),
        K = i.useRef(null),
        z = (0, eu.useAnimationsFinished)(_, !1, !1),
        J = n,
        q = f,
        $ = g,
        X = p,
        Z = x;
      "context-menu" === M.type &&
        ((J = n ?? M.context?.anchor),
        (X = X ?? "start"),
        d ||
          "center" === X ||
          (($ = e.alignOffset ?? 2), (q = e.sideOffset ?? -5)));
      let ed = d,
        ep = X;
      "menu" === M.type
        ? ((ed = ed ?? "inline-end"),
          (ep = ep ?? "start"),
          (Z = e.collisionAvoidance ?? es.POPUP_COLLISION_AVOIDANCE))
        : "menubar" === M.type &&
          ((ed =
            ed ??
            ("vertical" === M.context.orientation ? "inline-end" : "bottom")),
          (ep = ep ?? "start"));
      let ef = "context-menu" === M.type,
        eg = (0, er.useAnchorPositioning)({
          anchor: J,
          floatingRootContext: k,
          positionMethod: T ? "fixed" : o,
          mounted: w,
          side: ed,
          sideOffset: q,
          align: ep,
          alignOffset: $,
          arrowPadding: ef ? 0 : R,
          collisionBoundary: m,
          collisionPadding: E,
          sticky: S,
          nodeId: V,
          keepMounted: O,
          disableAnchorTracking: b,
          collisionAvoidance: Z,
          shiftCrossAxis: ef && !("side" in Z && "flip" === Z.side),
          externalTree: P,
          adaptiveOrigin: H ? ea.adaptiveOrigin : void 0,
        });
      (i.useEffect(() => {
        function e(e) {
          e.open &&
            (e.parentNodeId === V && I.set("hoverEnabled", !1),
            e.nodeId !== V &&
              e.parentNodeId === I.select("floatingParentNodeId") &&
              I.setOpen(
                !1,
                (0, A.createChangeEventDetails)(h.REASONS.siblingOpen),
              ));
        }
        return (
          P.events.on("menuopenchange", e),
          () => {
            P.events.off("menuopenchange", e);
          }
        );
      }, [I, P.events, V]),
        i.useEffect(() => {
          if (null != I.select("floatingParentNodeId"))
            return (
              P.events.on("menuopenchange", e),
              () => {
                P.events.off("menuopenchange", e);
              }
            );
          function e(e) {
            if (e.open || e.nodeId !== I.select("floatingParentNodeId")) return;
            let t = e.reason ?? h.REASONS.siblingOpen;
            I.setOpen(!1, (0, A.createChangeEventDetails)(t));
          }
        }, [P.events, I]));
      let em = (0, et.useTimeout)();
      (i.useEffect(() => {
        N || em.clear();
      }, [N, em]),
        i.useEffect(() => {
          function e(e) {
            if (N && e.nodeId === I.select("floatingParentNodeId"))
              if (e.target && F && F !== e.target) {
                let e = I.select("closeDelay");
                e > 0
                  ? em.isStarted() ||
                    em.start(e, () => {
                      I.setOpen(
                        !1,
                        (0, A.createChangeEventDetails)(h.REASONS.siblingOpen),
                      );
                    })
                  : I.setOpen(
                      !1,
                      (0, A.createChangeEventDetails)(h.REASONS.siblingOpen),
                    );
              } else em.clear();
          }
          return (
            P.events.on("itemhover", e),
            () => {
              P.events.off("itemhover", e);
            }
          );
        }, [P.events, N, F, I, em]),
        i.useEffect(() => {
          let e = {
            open: N,
            nodeId: V,
            parentNodeId: G,
            reason: I.select("lastOpenChangeReason"),
          };
          P.events.emit("menuopenchange", e);
        }, [P.events, N, I, V, G]),
        (0, U.useIsoLayoutEffect)(() => {
          let e = K.current;
          if ((Y && (K.current = Y), e && Y && Y !== e)) {
            I.set("instantType", void 0);
            let e = new AbortController();
            return (
              z(() => {
                I.set("instantType", "trigger-change");
              }, e.signal),
              () => {
                e.abort();
              }
            );
          }
        }, [Y, z, I]));
      let ev = {
          open: N,
          side: eg.side,
          align: eg.align,
          anchorHidden: eg.anchorHidden,
          nested: "menu" === M.type,
          instant: B,
        },
        eh = "menubar" === M.type && M.context.modal,
        eE = L && W !== h.REASONS.triggerHover;
      (0, ec.useAnchoredPopupScrollLock)(N && (eh || eE), "touch" === D, _, F);
      let eR = (0, el.usePositioner)(e, ev, {
          styles: eg.positionerStyles,
          transitionStatus: j,
          props: C,
          refs: [t, I.useStateSetter("positionerElement")],
          hidden: !w,
          inert: !N,
        }),
        eS =
          w &&
          "menu" !== M.type &&
          (("menubar" !== M.type && L && W !== h.REASONS.triggerHover) ||
            ("menubar" === M.type && M.context.modal)),
        eb = null;
      return (
        "menubar" === M.type
          ? (eb = M.context.contentElement)
          : void 0 === M.type && (eb = F),
        (0, r.jsxs)(a.Provider, {
          value: eg,
          children: [
            eS &&
              (0, r.jsx)(ei.InternalBackdrop, {
                ref:
                  "context-menu" === M.type || "nested-context-menu" === M.type
                    ? M.context.internalBackdropRef
                    : null,
                inert: (0, ee.inertValue)(!N),
                cutout: eb,
              }),
            (0, r.jsx)(en.FloatingNode, {
              id: V,
              children: (0, r.jsx)(eo.CompositeList, {
                elementsRef: I.context.itemDomElements,
                labelsRef: I.context.itemLabels,
                children: eR,
              }),
            }),
          ],
        })
      );
    });
    var ep = e.i(67865);
    let ef = i.createContext(void 0),
      eg = i.memo(
        i.forwardRef(function (e, t) {
          let {
              render: n,
              className: o,
              value: s,
              defaultValue: a,
              onValueChange: u,
              disabled: l = !1,
              style: c,
              "aria-labelledby": p,
              ...f
            } = e,
            [g, m] = i.useState(void 0),
            [v, h] = (0, S.useControlled)({
              controlled: s,
              default: a,
              name: "MenuRadioGroup",
            }),
            E = (0, ep.useStableCallback)((e, t) => {
              (u?.(e, t), t.isCanceled || h(e));
            }),
            R = (0, d.useRenderElement)("div", e, {
              state: { disabled: l },
              ref: t,
              props: {
                role: "group",
                "aria-labelledby": p ?? g,
                "aria-disabled": l || void 0,
                ...f,
              },
            }),
            b = i.useMemo(
              () => ({ value: v, setValue: E, disabled: l }),
              [v, E, l],
            );
          return (0, r.jsx)(_.Provider, {
            value: m,
            children: (0, r.jsx)(ef.Provider, { value: b, children: R }),
          });
        }),
      ),
      em = i.createContext(void 0),
      ev = i.forwardRef(function (e, t) {
        let {
            render: n,
            className: o,
            id: a,
            label: l,
            nativeButton: p = !1,
            disabled: f = !1,
            closeOnClick: g = !1,
            value: m,
            style: v,
            ...E
          } = e,
          R = (0, k.useCompositeListItem)({ label: l }),
          S = u(!0),
          b = (0, P.useBaseUiId)(a),
          { store: x } = c(),
          y = x.useState("isActive", R.index),
          C = x.useState("itemProps"),
          {
            value: I,
            setValue: O,
            disabled: w,
          } = (function () {
            let e = i.useContext(ef);
            if (void 0 === e) throw Error((0, s.default)(34));
            return e;
          })(),
          L = w || f,
          D = I === m,
          { getItemProps: F, itemRef: j } = M({
            closeOnClick: g,
            disabled: L,
            highlighted: y,
            id: b,
            store: x,
            nativeButton: p,
            nodeId: S?.context.nodeId,
            itemMetadata: T,
          }),
          _ = i.useMemo(
            () => ({ disabled: L, highlighted: y, checked: D }),
            [L, y, D],
          ),
          B = (0, d.useRenderElement)("div", e, {
            state: _,
            stateAttributesMapping: N,
            props: [
              C,
              {
                role: "menuitemradio",
                "aria-checked": D,
                onClick: function (e) {
                  O(
                    m,
                    (0, A.createChangeEventDetails)(
                      h.REASONS.itemPress,
                      e.nativeEvent,
                      void 0,
                      { preventUnmountOnClose() {} },
                    ),
                  );
                },
              },
              E,
              F,
            ],
            ref: [j, t, R.ref],
          });
        return (0, r.jsx)(em.Provider, { value: _, children: B });
      }),
      eh = i.forwardRef(function (e, t) {
        let {
            render: n,
            className: r,
            style: o,
            keepMounted: a = !1,
            ...u
          } = e,
          l = (function () {
            let e = i.useContext(em);
            if (void 0 === e) throw Error((0, s.default)(35));
            return e;
          })(),
          c = i.useRef(null),
          { transitionStatus: p, setMounted: f } = (0, D.useTransitionStatus)(
            l.checked,
          );
        (0, F.useOpenChangeComplete)({
          open: l.checked,
          ref: c,
          onComplete() {
            l.checked || f(!1);
          },
        });
        let g = {
          checked: l.checked,
          disabled: l.disabled,
          highlighted: l.highlighted,
          transitionStatus: p,
        };
        return (0, d.useRenderElement)("span", e, {
          state: g,
          stateAttributesMapping: N,
          ref: [t, c],
          props: { "aria-hidden": !0, ...u },
          enabled: a || l.checked,
        });
      });
    var eE = e.i(83977),
      eR = e.i(56789),
      eS = e.i(96499),
      eb = e.i(17989),
      ex = e.i(8445),
      ey = e.i(8868),
      eC = e.i(46265),
      eI = e.i(29315),
      eO = e.i(21082),
      eT = e.i(49055),
      eM = e.i(47554),
      ek = e.i(96296),
      eP = e.i(3596),
      ew = e.i(57940);
    function eN(e, t, n) {
      switch (e) {
        case "vertical":
          return t;
        case "horizontal":
          return n;
        default:
          return t || n;
      }
    }
    function eA(e, t) {
      return eN(
        t,
        e === eT.ARROW_UP || e === eT.ARROW_DOWN,
        e === eT.ARROW_LEFT || e === eT.ARROW_RIGHT,
      );
    }
    function eL(e, t, n) {
      return (
        eN(
          t,
          e === eT.ARROW_DOWN,
          n ? e === eT.ARROW_LEFT : e === eT.ARROW_RIGHT,
        ) ||
        "Enter" === e ||
        " " === e ||
        "" === e
      );
    }
    var eD = e.i(50527);
    let eF = i.createContext(null);
    function ej(e) {
      let t = i.useContext(eF);
      if (null === t && !e) throw Error((0, s.default)(5));
      return t;
    }
    var e_ = e.i(72855),
      eB = e.i(32199),
      eU = e.i(16269),
      eH = e.i(1252),
      eW = e.i(88940),
      eV = e.i(79248),
      eG = e.i(16786),
      eY = e.i(90627);
    let eK = {
      ...eG.popupStoreSelectors,
      disabled: (0, eU.createSelector)(
        (e) =>
          ("menubar" === e.parent.type && e.parent.context.disabled) ||
          e.disabled,
      ),
      modal: (0, eU.createSelector)(
        (e) =>
          (void 0 === e.parent.type || "context-menu" === e.parent.type) &&
          (e.modal ?? !0),
      ),
      openMethod: (0, eU.createSelector)((e) => e.openMethod),
      allowMouseEnter: (0, eU.createSelector)((e) => e.allowMouseEnter),
      highlightItemOnHover: (0, eU.createSelector)(
        (e) => e.highlightItemOnHover,
      ),
      stickIfOpen: (0, eU.createSelector)((e) => e.stickIfOpen),
      parent: (0, eU.createSelector)((e) => e.parent),
      rootId: (0, eU.createSelector)((e) =>
        "menu" === e.parent.type
          ? e.parent.store.select("rootId")
          : void 0 !== e.parent.type
            ? e.parent.context.rootId
            : e.rootId,
      ),
      activeIndex: (0, eU.createSelector)((e) => e.activeIndex),
      isActive: (0, eU.createSelector)((e, t) => e.activeIndex === t),
      hoverEnabled: (0, eU.createSelector)((e) => e.hoverEnabled),
      instantType: (0, eU.createSelector)((e) => e.instantType),
      lastOpenChangeReason: (0, eU.createSelector)((e) => e.openChangeReason),
      floatingTreeRoot: (0, eU.createSelector)((e) =>
        "menu" === e.parent.type
          ? e.parent.store.select("floatingTreeRoot")
          : e.floatingTreeRoot,
      ),
      floatingNodeId: (0, eU.createSelector)((e) => e.floatingNodeId),
      floatingParentNodeId: (0, eU.createSelector)(
        (e) => e.floatingParentNodeId,
      ),
      itemProps: (0, eU.createSelector)((e) => e.itemProps),
      closeDelay: (0, eU.createSelector)((e) => e.closeDelay),
      hasViewport: (0, eU.createSelector)((e) => e.hasViewport),
      keyboardEventRelay: (0, eU.createSelector)((e) =>
        e.keyboardEventRelay
          ? e.keyboardEventRelay
          : "menu" === e.parent.type
            ? e.parent.store.select("keyboardEventRelay")
            : void 0,
      ),
    };
    class ez extends eH.ReactStore {
      constructor(e) {
        (super(
          {
            ...{
              ...(0, eG.createInitialPopupStoreState)(),
              disabled: !1,
              modal: !0,
              openMethod: null,
              allowMouseEnter: !1,
              highlightItemOnHover: !0,
              stickIfOpen: !0,
              parent: { type: void 0 },
              rootId: void 0,
              activeIndex: null,
              hoverEnabled: !0,
              instantType: void 0,
              openChangeReason: null,
              floatingTreeRoot: new eV.FloatingTreeStore(),
              floatingNodeId: void 0,
              floatingParentNodeId: null,
              itemProps: eR.EMPTY_OBJECT,
              keyboardEventRelay: void 0,
              closeDelay: 0,
              hasViewport: !1,
            },
            ...e,
          },
          {
            positionerRef: i.createRef(),
            popupRef: i.createRef(),
            typingRef: { current: !1 },
            itemDomElements: { current: [] },
            itemLabels: { current: [] },
            allowMouseUpTriggerRef: { current: !1 },
            triggerFocusTargetRef: i.createRef(),
            beforeContentFocusGuardRef: i.createRef(),
            onOpenChangeComplete: void 0,
            triggerElements: new eY.PopupTriggerMap(),
          },
          eK,
        ),
          (this.unsubscribeParentListener = this.observe("parent", (e) => {
            if ((this.unsubscribeParentListener?.(), "menu" === e.type)) {
              let t = e.store.select("rootId"),
                n = e.store.select("floatingTreeRoot"),
                r = e.store.select("keyboardEventRelay");
              ((this.unsubscribeParentListener = e.store.subscribe(() => {
                let o = e.store.select("rootId"),
                  i = e.store.select("floatingTreeRoot"),
                  s = e.store.select("keyboardEventRelay");
                (t !== o || n !== i || r !== s) &&
                  ((t = o), (n = i), (r = s), this.notifyAll());
              })),
                (this.context.allowMouseUpTriggerRef =
                  e.store.context.allowMouseUpTriggerRef));
              return;
            }
            (void 0 !== e.type &&
              (this.context.allowMouseUpTriggerRef =
                e.context.allowMouseUpTriggerRef),
              (this.unsubscribeParentListener = null));
          })));
      }
      setOpen(e, t) {
        this.state.floatingRootContext.context.events.emit("setOpen", {
          open: e,
          eventDetails: t,
        });
      }
      static useStore(e, t) {
        let n = (0, eW.useRefWithInit)(() => new ez(t)).current;
        return e ?? n;
      }
      unsubscribeParentListener = null;
    }
    var eJ = e.i(64111);
    let eq = i.createContext(void 0);
    function e$() {
      return i.useContext(eq);
    }
    let eX = (0, eS.fastComponent)(function (e) {
      let t,
        {
          children: n,
          open: o,
          onOpenChange: s,
          onOpenChangeComplete: a,
          defaultOpen: u = !1,
          disabled: d = !1,
          modal: p,
          loopFocus: f = !0,
          orientation: g = "vertical",
          actionsRef: m,
          closeParentOnEsc: E = !1,
          handle: R,
          triggerId: S,
          defaultTriggerId: b = null,
          highlightItemOnHover: x = !0,
        } = e,
        y = v(!0),
        I = c(!0),
        O = ej(!0),
        T = e$(),
        M = i.useMemo(
          () =>
            T && I
              ? { type: "menu", store: I.store }
              : O
                ? { type: "menubar", context: O }
                : y && !I
                  ? { type: "context-menu", context: y }
                  : { type: void 0 },
          [y, I, O, T],
        ),
        k = ez.useStore(R?.store, {
          open: u,
          openProp: o,
          activeTriggerId: b,
          triggerIdProp: S,
          parent: M,
        });
      ((0, eJ.useInitialOpenSync)(k, o, u, b),
        k.useControlledProp("openProp", o),
        k.useControlledProp("triggerIdProp", S),
        k.useContextCallback("onOpenChangeComplete", a));
      let P = (0, eE.useId)(),
        w = (0, eE.useId)(),
        N = k.useState("floatingTreeRoot"),
        L = (0, en.useFloatingNodeId)(N),
        D = (0, en.useFloatingParentNodeId)(),
        F = k.useState("open"),
        j = k.useState("activeTriggerElement"),
        _ = k.useState("positionerElement"),
        B = k.useState("hoverEnabled"),
        H = k.useState("disabled"),
        W = k.useState("lastOpenChangeReason"),
        V = k.useState("parent"),
        G = k.useState("activeIndex"),
        Y = k.useState("payload"),
        K = k.useState("floatingParentNodeId"),
        z = i.useRef(null),
        J = i.useRef("context-menu" !== V.type),
        q = (0, et.useTimeout)(),
        $ = i.useRef(!0),
        X = (0, et.useTimeout)(),
        Q = null != K,
        { openMethod: Z, triggerProps: ee } = (0, eB.useOpenInteractionType)(F);
      (k.useSyncedValues({
        disabled: d,
        highlightItemOnHover: x,
        modal: void 0 === V.type ? p : void 0,
        openMethod: Z,
        rootId: P,
      }),
        (0, eJ.useImplicitActiveTrigger)(k));
      let { forceUnmount: er } = (0, eJ.useOpenStateTransitions)(F, k, () => {
        k.update({ allowMouseEnter: !1, stickIfOpen: !0 });
      });
      ((0, U.useIsoLayoutEffect)(() => {
        y && !I
          ? k.update({
              parent: { type: "context-menu", context: y },
              floatingNodeId: L,
              floatingParentNodeId: D,
            })
          : I && k.update({ floatingNodeId: L, floatingParentNodeId: D });
      }, [y, I, L, D, k]),
        i.useEffect(() => {
          if ((F || (z.current = null), "context-menu" === V.type)) {
            if (!F) {
              (q.clear(), (J.current = !1));
              return;
            }
            q.start(500, () => {
              J.current = !0;
            });
          }
        }, [q, F, V.type]),
        (0, U.useIsoLayoutEffect)(() => {
          F || B || k.set("hoverEnabled", !0);
        }, [F, B, k]));
      let eo = (0, ep.useStableCallback)((e, t) => {
          let n = t.reason;
          if (F === e && t.trigger === j && W === n) return;
          let r = (0, eJ.attachPreventUnmountOnClose)(t);
          if (
            (e || null != t.trigger || (t.trigger = j ?? void 0),
            s?.(e, t),
            t.isCanceled)
          )
            return;
          k.state.floatingRootContext.dispatchOpenChange(e, t);
          let o = t.event;
          if (
            !1 === e &&
            o?.type === "click" &&
            "touch" === o.pointerType &&
            !$.current
          )
            return;
          e && n === h.REASONS.triggerFocus
            ? (($.current = !1),
              X.start(300, () => {
                $.current = !0;
              }))
            : (($.current = !0), X.clear());
          let i =
              (n === h.REASONS.triggerPress || n === h.REASONS.itemPress) &&
              0 === o.detail &&
              o?.isTrusted,
            a = !e && (n === h.REASONS.escapeKey || null == n),
            u = { open: e, openChangeReason: n };
          ((z.current = t.event ?? null),
            (0, eJ.setPopupOpenState)(u, e, t.trigger, r()),
            k.update(u),
            "menubar" === V.type &&
            (n === h.REASONS.triggerFocus ||
              n === h.REASONS.focusOut ||
              n === h.REASONS.triggerHover ||
              n === h.REASONS.listNavigation ||
              n === h.REASONS.siblingOpen)
              ? k.set("instantType", "group")
              : i || a
                ? k.set("instantType", i ? "click" : "dismiss")
                : k.set("instantType", void 0));
        }),
        ei = (0, eD.useSyncedFloatingRootContext)({
          popupStore: k,
          floatingId: w,
          nested: null != D,
          onOpenChange: eo,
        }),
        ea = ei.context.events;
      i.useEffect(() => {
        let e = ({ open: e, eventDetails: t }) => eo(e, t);
        return (
          ea.on("setOpen", e),
          () => {
            ea?.off("setOpen", e);
          }
        );
      }, [ea, eo]);
      let eu = i.useCallback(() => {
        k.setOpen(
          !1,
          (0, A.createChangeEventDetails)(h.REASONS.imperativeAction),
        );
      }, [k]);
      (i.useImperativeHandle(m, () => ({ unmount: er, close: eu }), [er, eu]),
        "context-menu" === V.type && (t = V.context),
        i.useImperativeHandle(t?.positionerRef, () => _, [_]),
        i.useImperativeHandle(t?.actionsRef, () => ({ setOpen: eo }), [eo]));
      let el = (0, eb.useDismiss)(ei, {
          enabled: !H,
          bubbles: { escapeKey: E && "menu" === V.type },
          outsidePress: () =>
            "context-menu" !== V.type ||
            z.current?.type === "contextmenu" ||
            J.current,
          externalTree: Q ? N : void 0,
        }),
        ec = (0, e_.useDirection)(),
        ed = i.useCallback(
          (e) => {
            k.select("activeIndex") !== e && k.set("activeIndex", e);
          },
          [k],
        ),
        ef = (function (e, t) {
          let {
              listRef: n,
              activeIndex: r,
              onNavigate: o = () => {},
              enabled: s = !0,
              selectedIndex: a = null,
              allowEscape: u = !1,
              loopFocus: l = !1,
              nested: c = !1,
              rtl: d = !1,
              virtual: p = !1,
              focusItemOnOpen: f = "auto",
              focusItemOnHover: g = !0,
              openOnArrowKeyDown: m = !0,
              disabledIndices: v,
              orientation: E = "vertical",
              parentOrientation: R,
              id: S,
              resetOnPointerLeave: b = !0,
              externalTree: x,
              grid: y,
            } = t,
            C = null != y,
            I = "rootStore" in e ? e.rootStore : e,
            O = I.useState("open"),
            T = I.useState("floatingElement"),
            M = I.useState("domReferenceElement"),
            k = I.context.dataRef,
            P = (0, ek.getFloatingFocusElement)(T),
            w = (0, ek.isTypeableCombobox)(M),
            N = (0, eC.useValueAsRef)(P),
            L = (0, en.useFloatingParentNodeId)(),
            D = (0, en.useFloatingTree)(x),
            F = i.useRef(f),
            j = i.useRef(a ?? -1),
            _ = i.useRef(null),
            B = i.useRef(!0),
            H = (0, ep.useStableCallback)((e) => {
              o(-1 === j.current ? null : j.current, e);
            }),
            W = i.useRef(!!T),
            V = i.useRef(O),
            G = i.useRef(!1),
            Y = i.useRef(!1),
            K = i.useRef(null),
            z = (0, eC.useValueAsRef)(v),
            J = (0, eC.useValueAsRef)(O),
            q = (0, eC.useValueAsRef)(a),
            $ = (0, eC.useValueAsRef)(b),
            X = (0, ex.useAnimationFrame)(),
            Q = (0, ex.useAnimationFrame)(),
            Z = (0, ep.useStableCallback)(() => {
              function e(e) {
                p
                  ? D?.events.emit("virtualfocus", e)
                  : (K.current = (0, eP.enqueueFocus)(e, {
                      sync: G.current,
                      preventScroll: !0,
                    }));
              }
              let t = n.current[j.current],
                r = Y.current;
              (t && e(t),
                (G.current ? (e) => e() : (e) => X.request(e))(() => {
                  let o = n.current[j.current] || t;
                  !o ||
                    (t || e(o),
                    es &&
                      (r || !B.current) &&
                      o.scrollIntoView?.({
                        block: "nearest",
                        inline: "nearest",
                      }));
                }));
            });
          ((0, U.useIsoLayoutEffect)(() => {
            k.current.orientation = E;
          }, [k, E]),
            (0, U.useIsoLayoutEffect)(() => {
              s &&
                (O && T
                  ? ((j.current = a ?? -1),
                    F.current && null != a && ((Y.current = !0), H()))
                  : W.current && ((j.current = -1), H()));
            }, [s, O, T, a, H]),
            (0, U.useIsoLayoutEffect)(() => {
              if (s) {
                if (!O) {
                  G.current = !1;
                  return;
                }
                if (T)
                  if (null == r) {
                    if (((G.current = !1), null != q.current)) return;
                    if (
                      (W.current && ((j.current = -1), Z()),
                      (!V.current || !W.current) &&
                        F.current &&
                        (null != _.current ||
                          (!0 === F.current && null == _.current)))
                    ) {
                      let e = 0,
                        t = () => {
                          null == n.current[0]
                            ? (e < 2 &&
                                (e ? (e) => Q.request(e) : queueMicrotask)(t),
                              (e += 1))
                            : ((j.current =
                                null == _.current || eL(_.current, E, d) || c
                                  ? (0, eO.getMinListIndex)(n)
                                  : (0, eO.getMaxListIndex)(n)),
                              (_.current = null),
                              H());
                        };
                      t();
                    }
                  } else
                    (0, eO.isIndexOutOfListBounds)(n.current, r) ||
                      ((j.current = r), Z(), (Y.current = !1));
              }
            }, [s, O, T, r, q, c, n, E, d, H, Z, Q]),
            (0, U.useIsoLayoutEffect)(() => {
              if (!s || T || !D || p || !W.current) return;
              let e = D.nodesRef.current,
                t = e.find((e) => e.id === L)?.context?.elements.floating,
                n = (0, eM.activeElement)(
                  (0, ey.ownerDocument)(M ?? t ?? null),
                ),
                r = e.some(
                  (e) =>
                    e.context &&
                    (0, eM.contains)(e.context.elements.floating, n),
                );
              t && !r && B.current && t.focus({ preventScroll: !0 });
            }, [s, T, M, D, L, p]),
            (0, U.useIsoLayoutEffect)(() => {
              ((V.current = O), (W.current = !!T));
            }),
            (0, U.useIsoLayoutEffect)(() => {
              O || ((_.current = null), (F.current = f));
            }, [O, f]));
          let ee = null != r,
            et = (0, ep.useStableCallback)((e) => {
              if (!J.current) return;
              let t = n.current.indexOf(e.currentTarget);
              -1 !== t &&
                (j.current !== t || r !== t) &&
                ((j.current = t), H(e));
            }),
            er = (0, ep.useStableCallback)(
              () =>
                R ??
                D?.nodesRef.current.find((e) => e.id === L)?.context?.dataRef
                  ?.current.orientation,
            ),
            eo = (0, ep.useStableCallback)(() =>
              (0, eO.getMinListIndex)(n, z.current),
            ),
            ei = (0, ep.useStableCallback)((e) => {
              var t;
              let r, o;
              if (
                ((B.current = !1),
                (G.current = !0),
                229 === e.which ||
                  (!J.current && e.currentTarget === N.current))
              )
                return;
              if (
                c &&
                ((t = e.key),
                (r = d ? t === eT.ARROW_RIGHT : t === eT.ARROW_LEFT),
                (o = t === eT.ARROW_UP),
                "both" === E || ("horizontal" === E && C)
                  ? "Escape" === t
                  : eN(E, r, o))
              ) {
                (eA(e.key, er()) || (0, ew.stopEvent)(e),
                  I.setOpen(
                    !1,
                    (0, A.createChangeEventDetails)(
                      h.REASONS.listNavigation,
                      e.nativeEvent,
                    ),
                  ),
                  (0, eI.isHTMLElement)(M) &&
                    (p ? D?.events.emit("virtualfocus", M) : M.focus()));
                return;
              }
              let i = j.current,
                s = (0, eO.getMinListIndex)(n, v),
                a = (0, eO.getMaxListIndex)(n, v);
              if (
                (w ||
                  ("Home" === e.key &&
                    ((0, ew.stopEvent)(e), (j.current = s), H(e)),
                  "End" === e.key &&
                    ((0, ew.stopEvent)(e), (j.current = a), H(e))),
                null != y)
              ) {
                let t = y(e, j.current, n, E, l, d, v, s, a);
                if ((null != t && ((j.current = t), H(e)), "both" === E))
                  return;
              }
              if (eA(e.key, E)) {
                if (
                  ((0, ew.stopEvent)(e),
                  O &&
                    !p &&
                    (0, eM.activeElement)(e.currentTarget.ownerDocument) ===
                      e.currentTarget)
                ) {
                  ((j.current = eL(e.key, E, d) ? s : a), H(e));
                  return;
                }
                (eL(e.key, E, d)
                  ? l
                    ? i >= a
                      ? u && i !== n.current.length
                        ? (j.current = -1)
                        : ((G.current = !1), (j.current = s))
                      : (j.current = (0, eO.findNonDisabledListIndex)(
                          n.current,
                          { startingIndex: i, disabledIndices: v },
                        ))
                    : (j.current = Math.min(
                        a,
                        (0, eO.findNonDisabledListIndex)(n.current, {
                          startingIndex: i,
                          disabledIndices: v,
                        }),
                      ))
                  : l
                    ? i <= s
                      ? u && -1 !== i
                        ? (j.current = n.current.length)
                        : ((G.current = !1), (j.current = a))
                      : (j.current = (0, eO.findNonDisabledListIndex)(
                          n.current,
                          {
                            startingIndex: i,
                            decrement: !0,
                            disabledIndices: v,
                          },
                        ))
                    : (j.current = Math.max(
                        s,
                        (0, eO.findNonDisabledListIndex)(n.current, {
                          startingIndex: i,
                          decrement: !0,
                          disabledIndices: v,
                        }),
                      )),
                  (0, eO.isIndexOutOfListBounds)(n.current, j.current) &&
                    (j.current = -1),
                  H(e));
              }
            }),
            es = i.useMemo(
              () => ({
                onFocus(e) {
                  ((G.current = !0), et(e));
                },
                onClick: ({ currentTarget: e }) =>
                  e.focus({ preventScroll: !0 }),
                onMouseMove(e) {
                  ((G.current = !0), (Y.current = !1), g && et(e));
                },
                onPointerLeave(e) {
                  if (!J.current || !B.current || "touch" === e.pointerType)
                    return;
                  G.current = !0;
                  let t = e.relatedTarget;
                  if (
                    !(!g || n.current.includes(t)) &&
                    $.current &&
                    (K.current?.(),
                    (K.current = null),
                    (j.current = -1),
                    H(e),
                    !p)
                  ) {
                    let e = N.current,
                      t = (0, eM.activeElement)((0, ey.ownerDocument)(e));
                    e &&
                      (0, eM.contains)(e, t) &&
                      e.focus({ preventScroll: !0 });
                  }
                },
              }),
              [et, J, N, g, n, H, $, p],
            ),
            ea = i.useMemo(
              () => p && O && ee && { "aria-activedescendant": `${S}-${r}` },
              [p, O, ee, S, r],
            ),
            eu = i.useMemo(
              () => ({
                "aria-orientation": "both" === E ? void 0 : E,
                ...(!w ? ea : {}),
                onKeyDown(e) {
                  if ("Tab" === e.key && e.shiftKey && O && !p) {
                    let t = (0, eM.getTarget)(e.nativeEvent);
                    if (t && !(0, eM.contains)(N.current, t)) return;
                    ((0, ew.stopEvent)(e),
                      I.setOpen(
                        !1,
                        (0, A.createChangeEventDetails)(
                          h.REASONS.focusOut,
                          e.nativeEvent,
                        ),
                      ),
                      (0, eI.isHTMLElement)(M) && M.focus());
                    return;
                  }
                  ei(e);
                },
                onPointerMove() {
                  B.current = !0;
                },
              }),
              [ea, ei, N, E, w, I, O, p, M],
            ),
            el = i.useMemo(() => {
              function e(e) {
                I.setOpen(
                  !0,
                  (0, A.createChangeEventDetails)(
                    h.REASONS.listNavigation,
                    e.nativeEvent,
                    e.currentTarget,
                  ),
                );
              }
              function t(e) {
                "auto" === f &&
                  (0, ew.isVirtualClick)(e.nativeEvent) &&
                  (F.current = !p);
              }
              function n(e) {
                ((F.current = f),
                  "auto" === f &&
                    (0, ew.isVirtualPointerEvent)(e.nativeEvent) &&
                    (F.current = !0));
              }
              return {
                onKeyDown(t) {
                  var n, r;
                  let o = I.select("open");
                  B.current = !1;
                  let i = t.key.startsWith("Arrow"),
                    s =
                      ((n = t.key),
                      (r = er()),
                      eN(
                        r,
                        d ? n === eT.ARROW_LEFT : n === eT.ARROW_RIGHT,
                        n === eT.ARROW_DOWN,
                      )),
                    a = eA(t.key, E),
                    u = (c ? s : a) || "Enter" === t.key || "" === t.key.trim();
                  if (p && o) return ei(t);
                  if (o || m || !i) {
                    if (u) {
                      let e = eA(t.key, er());
                      _.current = c && e ? null : t.key;
                    }
                    if (c) {
                      s &&
                        ((0, ew.stopEvent)(t),
                        o ? ((j.current = eo()), H(t)) : e(t));
                      return;
                    }
                    a &&
                      (null != q.current && (j.current = q.current),
                      (0, ew.stopEvent)(t),
                      !o && m ? e(t) : ei(t),
                      o && H(t));
                  }
                },
                onFocus(e) {
                  I.select("open") && !p && ((j.current = -1), H(e));
                },
                onPointerDown: n,
                onPointerEnter: n,
                onMouseDown: t,
                onClick: t,
              };
            }, [ei, f, eo, c, H, I, m, E, er, d, q, p]),
            ec = i.useMemo(() => ({ ...ea, ...el }), [ea, el]);
          return i.useMemo(
            () =>
              s ? { reference: ec, floating: eu, item: es, trigger: el } : {},
            [s, ec, eu, el, es],
          );
        })(ei, {
          enabled: !H,
          listRef: k.context.itemDomElements,
          activeIndex: G,
          nested: void 0 !== V.type,
          loopFocus: f,
          orientation: g,
          parentOrientation:
            "menubar" === V.type ? V.context.orientation : void 0,
          rtl: "rtl" === ec,
          disabledIndices: eR.EMPTY_ARRAY,
          onNavigate: ed,
          openOnArrowKeyDown: "context-menu" !== V.type,
          externalTree: Q ? N : void 0,
          focusItemOnHover: x,
        }),
        eg = i.useCallback(
          (e) => {
            k.context.typingRef.current = e;
          },
          [k],
        ),
        em = (function (e, t) {
          let {
              listRef: n,
              elementsRef: r,
              activeIndex: o,
              onMatch: s,
              disabledIndices: a,
              onTyping: u,
              enabled: l = !0,
              resetMs: c = 750,
              selectedIndex: d = null,
            } = t,
            p = "rootStore" in e ? e.rootStore : e,
            f = p.useState("open"),
            g = (0, et.useTimeout)(),
            m = i.useRef(""),
            v = i.useRef(d ?? o ?? -1),
            h = i.useRef(null),
            E = (0, ep.useStableCallback)((e) => {
              function t(e) {
                let t;
                return (
                  !!(!(t = r?.current[e]) || (0, eO.isElementVisible)(t)) &&
                  (null == a ||
                    !(0, eO.isListIndexDisabled)(eR.EMPTY_ARRAY, e, a))
                );
              }
              function i(e, n, r = 0) {
                if (0 === e.length) return -1;
                let o = ((r % e.length) + e.length) % e.length,
                  s = n.toLowerCase();
                for (let n = 0; n < e.length; n += 1) {
                  let r = (o + n) % e.length,
                    i = e[r];
                  if (i?.toLowerCase().startsWith(s) && t(r)) return r;
                }
                return -1;
              }
              let l = n.current;
              if (
                (m.current.length > 0 &&
                  " " === e.key &&
                  ((0, ew.stopEvent)(e), u?.(!0)),
                m.current.length > 0 &&
                  " " !== m.current[0] &&
                  -1 === i(l, m.current) &&
                  " " !== e.key &&
                  u?.(!1),
                null == l ||
                  1 !== e.key.length ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.altKey)
              )
                return;
              f && " " !== e.key && ((0, ew.stopEvent)(e), u?.(!0));
              let p = "" === m.current;
              (p && (v.current = d ?? o ?? -1),
                l.every(
                  (e, n) =>
                    !(e && t(n)) || e[0]?.toLowerCase() !== e[1]?.toLowerCase(),
                ) &&
                  m.current === e.key &&
                  ((m.current = ""), (v.current = h.current)),
                (m.current += e.key),
                g.start(c, () => {
                  ((m.current = ""), (v.current = h.current), u?.(!1));
                }));
              let E = p ? (d ?? o ?? -1) : v.current,
                R = i(l, m.current, (E ?? 0) + 1);
              -1 !== R
                ? (s?.(R), (h.current = R))
                : " " !== e.key && ((m.current = ""), u?.(!1));
            }),
            R = (0, ep.useStableCallback)((e) => {
              let t = e.relatedTarget,
                n = p.select("domReferenceElement"),
                r = p.select("floatingElement");
              (0, eM.contains)(n, t) ||
                (0, eM.contains)(r, t) ||
                (g.clear(), (m.current = ""), (v.current = h.current), u?.(!1));
            });
          ((0, U.useIsoLayoutEffect)(() => {
            (f || null === d) &&
              (g.clear(),
              (h.current = null),
              "" !== m.current && (m.current = ""));
          }, [f, d, g]),
            (0, U.useIsoLayoutEffect)(() => {
              f && "" === m.current && (v.current = d ?? o ?? -1);
            }, [f, d, o]));
          let S = i.useMemo(() => ({ onKeyDown: E, onBlur: R }), [E, R]);
          return i.useMemo(
            () => (l ? { reference: S, floating: S } : {}),
            [l, S],
          );
        })(ei, {
          enabled: !H,
          listRef: k.context.itemLabels,
          elementsRef: k.context.itemDomElements,
          activeIndex: G,
          resetMs: es.TYPEAHEAD_RESET_MS,
          onMatch: (e) => {
            F && e !== G && k.set("activeIndex", e);
          },
          onTyping: eg,
        }),
        ev = i.useMemo(() => {
          let e = (0, C.mergeProps)(
            em.reference,
            ef.reference,
            el.reference,
            {
              onMouseMove() {
                k.set("allowMouseEnter", !0);
              },
            },
            ee,
          );
          return ((e["aria-haspopup"] = "menu"), (e["aria-expanded"] = F), e);
        }, [k, em.reference, ef.reference, el.reference, ee, F]),
        eh = i.useMemo(() => {
          let e = (0, C.mergeProps)(ef.trigger, el.trigger, ee);
          return ((e["aria-haspopup"] = "menu"), (e["aria-expanded"] = !1), e);
        }, [ef.trigger, el.trigger, ee]),
        eS = i.useMemo(
          () =>
            (0, C.mergeProps)(
              eJ.FOCUSABLE_POPUP_PROPS,
              {
                id: w,
                role: "menu",
                "aria-labelledby": j?.id,
                onMouseMove() {
                  (k.set("allowMouseEnter", !0),
                    "menu" === V.type && k.set("hoverEnabled", !1));
                },
                onClick() {
                  k.select("hoverEnabled") && k.set("hoverEnabled", !1);
                },
                onKeyDown(e) {
                  let t = k.select("keyboardEventRelay");
                  t && !e.isPropagationStopped() && t(e);
                },
              },
              em.floating,
              ef.floating,
              el.floating,
            ),
          [j, w, V.type, k, em.floating, ef.floating, el.floating],
        ),
        eF = ef.item ?? eR.EMPTY_OBJECT;
      (0, eJ.usePopupInteractionProps)(k, {
        floatingRootContext: ei,
        activeTriggerProps: ev,
        inactiveTriggerProps: eh,
        popupProps: eS,
        itemProps: eF,
      });
      let eU = i.useMemo(() => ({ store: k, parent: M }), [k, M]),
        eH = (0, r.jsx)(l.Provider, {
          value: eU,
          children: "function" == typeof n ? n({ payload: Y }) : n,
        });
      return void 0 === V.type || "context-menu" === V.type
        ? (0, r.jsx)(en.FloatingTree, { externalTree: N, children: eH })
        : eH;
    });
    var eQ = e.i(50316),
      eZ = e.i(85689),
      e0 = e.i(74735),
      e1 = e.i(65420),
      e5 = e.i(51321);
    let e6 = I.platform.os.mac && I.platform.engine.webkit;
    var e3 = e.i(72135),
      e2 = e.i(33848),
      e4 = e.i(38452);
    function e7(e) {
      let {
          render: t,
          className: n,
          style: r,
          state: o = eR.EMPTY_OBJECT,
          props: s = eR.EMPTY_ARRAY,
          refs: a = eR.EMPTY_ARRAY,
          metadata: u,
          stateAttributesMapping: l,
          tag: c = "div",
          ...p
        } = e,
        { compositeProps: f, compositeRef: g } = (function (e = {}) {
          let {
              highlightItemOnHover: t,
              highlightedIndex: n,
              onHighlightedIndexChange: r,
            } = (0, e4.useCompositeRootContext)(),
            { ref: o, index: s } = (0, k.useCompositeListItem)(e),
            a = n === s,
            u = i.useRef(null),
            l = (0, x.useMergedRefs)(o, u);
          return {
            compositeProps: {
              tabIndex: a ? 0 : -1,
              onFocus() {
                r(s);
              },
              onMouseMove() {
                let e = u.current;
                if (!t || !e) return;
                let n = e.hasAttribute("disabled") || "true" === e.ariaDisabled;
                a || n || e.focus();
              },
            },
            compositeRef: l,
            index: s,
          };
        })({ metadata: u });
      return (0, d.useRenderElement)(c, e, {
        state: o,
        ref: [...a, g],
        props: [f, ...s, p],
        stateAttributesMapping: l,
      });
    }
    var e8 = e.i(46570),
      e9 = e.i(52535);
    let te = (0, eS.fastComponentRef)(function (e, t) {
      let n,
        o,
        a,
        {
          render: u,
          className: l,
          style: f,
          disabled: g = !1,
          nativeButton: m = !0,
          id: E,
          openOnHover: R,
          delay: S = 100,
          closeDelay: b = 0,
          handle: x,
          payload: O,
          ...T
        } = e,
        M = c(!0),
        k = x?.store ?? M?.store;
      if (!k) throw Error((0, s.default)(85));
      let w = (0, P.useBaseUiId)(E),
        N = k.useState("isTriggerActive", w),
        L = k.useState("floatingRootContext"),
        D = k.useState("isOpenedByTrigger", w),
        F = k.useState("triggerPopupId", w),
        j = i.useRef(null),
        _ =
          ((n = v(!0)),
          (o = c(!0)),
          (a = ej(!0)),
          i.useMemo(
            () =>
              a
                ? { type: "menubar", context: a }
                : n && !o
                  ? { type: "context-menu", context: n }
                  : { type: void 0 },
            [n, o, a],
          )),
        B = (0, e4.useCompositeRootContext)(!0),
        H = (0, en.useFloatingTree)(),
        W = i.useMemo(() => H ?? new eV.FloatingTreeStore(), [H]),
        V = (0, en.useFloatingNodeId)(W),
        G = (0, en.useFloatingParentNodeId)(),
        { registerTrigger: Y, isMountedByThisTrigger: K } = (0,
        eJ.useTriggerDataForwarding)(w, j, k, {
          payload: O,
          closeDelay: b,
          parent: _,
          floatingTreeRoot: W,
          floatingNodeId: V,
          floatingParentNodeId: G,
          keyboardEventRelay: B?.relayKeyboardEvent,
        }),
        z = "menubar" === _.type,
        J = k.useState("disabled"),
        q = g || J || (z && _.context.disabled),
        { getButtonProps: $, buttonRef: X } = (0, y.useButton)({
          disabled: q,
          native: m,
        });
      i.useEffect(() => {
        D ||
          void 0 !== _.type ||
          (k.context.allowMouseUpTriggerRef.current = !1);
      }, [k, D, _.type]);
      let Q = i.useRef(null),
        Z = (0, et.useTimeout)(),
        ee = (0, ep.useStableCallback)((e) => {
          if (!Q.current) return;
          (Z.clear(), (k.context.allowMouseUpTriggerRef.current = !1));
          let t = e.target;
          if (
            (0, eM.contains)(Q.current, t) ||
            (0, eM.contains)(k.select("positionerElement"), t) ||
            t === Q.current ||
            (null != t &&
              (function e(t) {
                return (0, eI.isHTMLElement)(t) &&
                  t.hasAttribute("data-rootownerid")
                  ? (t.getAttribute("data-rootownerid") ?? void 0)
                  : (0, eI.isLastTraversableNode)(t)
                    ? void 0
                    : e((0, eI.getParentNode)(t));
              })(t) === k.select("rootId"))
          )
            return;
          let n = (function (e) {
            let t = e.getBoundingClientRect(),
              n = (0, e2.ownerWindow)(e);
            if (I.platform.env.jsdom) return t;
            let r = n.getComputedStyle(e, "::before"),
              o = n.getComputedStyle(e, "::after");
            if ("none" === r.content && "none" === o.content) return t;
            let i = parseFloat(r.width) || 0,
              s = parseFloat(r.height) || 0,
              a = parseFloat(o.width) || 0,
              u = parseFloat(o.height) || 0,
              l = Math.max(t.width, i, a),
              c = Math.max(t.height, s, u),
              d = l - t.width,
              p = c - t.height;
            return {
              left: t.left - d / 2,
              right: t.right + d / 2,
              top: t.top - p / 2,
              bottom: t.bottom + p / 2,
            };
          })(Q.current);
          (e.clientX >= n.left - 2 &&
            e.clientX <= n.right + 2 &&
            e.clientY >= n.top - 2 &&
            e.clientY <= n.bottom + 2) ||
            W.events.emit("close", {
              domEvent: e,
              reason: h.REASONS.cancelOpen,
            });
        });
      i.useEffect(() => {
        D &&
          k.select("lastOpenChangeReason") === h.REASONS.triggerHover &&
          (0, ey.ownerDocument)(Q.current).addEventListener("mouseup", ee, {
            once: !0,
          });
      }, [D, ee, k]);
      let er = z && _.context.hasSubmenuOpen,
        eo = R ?? er,
        ei = (0, e3.useHoverReferenceInteraction)(L, {
          enabled: eo && !q && "context-menu" !== _.type && (!z || (er && !K)),
          handleClose: (0, eQ.safePolygon)({ blockPointerEvents: !z }),
          mouseOnly: !0,
          move: !1,
          restMs: void 0 === _.type ? S : void 0,
          delay: { close: b },
          triggerElementRef: j,
          externalTree: W,
          isActiveTrigger: N,
          isClosing: () => "ending" === k.select("transitionStatus"),
        }),
        ea = (function (e, t) {
          let n = (0, et.useTimeout)(),
            [r, o] = i.useState(!1);
          return (
            (0, U.useIsoLayoutEffect)(() => {
              e && "trigger-hover" === t
                ? (o(!0),
                  n.start(es.PATIENT_CLICK_THRESHOLD, () => {
                    o(!1);
                  }))
                : e || (n.clear(), o(!1));
            }, [e, t, n]),
            r
          );
        })(D, k.select("lastOpenChangeReason")),
        eu = (0, eZ.useClick)(L, {
          enabled: !q && "context-menu" !== _.type,
          event: D && z ? "click" : "mousedown",
          toggle: !0,
          ignoreMouse: !1,
          stickIfOpen: void 0 === _.type && ea,
        }),
        el = (function (e, t = {}) {
          let { enabled: n = !0, delay: r } = t,
            o = "rootStore" in e ? e.rootStore : e,
            { events: s, dataRef: a } = o.context,
            u = i.useRef(!1),
            l = i.useRef(null),
            c = i.useRef(!0),
            d = (0, et.useTimeout)();
          (i.useEffect(() => {
            let e = o.select("domReferenceElement");
            if (!n) return;
            let t = (0, eI.getWindow)(e);
            return (0, e1.mergeCleanups)(
              (0, e0.addEventListener)(t, "blur", function () {
                let e = o.select("domReferenceElement");
                !o.select("open") &&
                  (0, eI.isHTMLElement)(e) &&
                  e === (0, eM.activeElement)((0, ey.ownerDocument)(e)) &&
                  (u.current = !0);
              }),
              e6 &&
                (0, e0.addEventListener)(
                  t,
                  "keydown",
                  function () {
                    c.current = !0;
                  },
                  !0,
                ),
              e6 &&
                (0, e0.addEventListener)(
                  t,
                  "pointerdown",
                  function () {
                    c.current = !1;
                  },
                  !0,
                ),
            );
          }, [o, n]),
            i.useEffect(() => {
              if (n)
                return (
                  s.on("openchange", e),
                  () => {
                    s.off("openchange", e);
                  }
                );
              function e(e) {
                if (
                  e.reason === h.REASONS.triggerPress ||
                  e.reason === h.REASONS.escapeKey
                ) {
                  let e = o.select("domReferenceElement");
                  (0, eI.isElement)(e) && ((l.current = e), (u.current = !0));
                }
              }
            }, [s, n, o]));
          let p = i.useMemo(() => {
            function e() {
              ((u.current = !1), (l.current = null));
            }
            return {
              onMouseLeave() {
                e();
              },
              onFocus(t) {
                let n = t.currentTarget;
                if (u.current) {
                  if (l.current === n) return;
                  e();
                }
                let i = (0, eM.getTarget)(t.nativeEvent);
                if ((0, eI.isElement)(i)) {
                  if (e6 && !t.relatedTarget) {
                    if (!c.current && !(0, ek.isTypeableElement)(i)) return;
                  } else if (!(0, ek.matchesFocusVisible)(i)) return;
                }
                let s = (0, ek.isTargetInsideEnabledTrigger)(
                    t.relatedTarget,
                    o.context.triggerElements,
                  ),
                  { nativeEvent: a, currentTarget: p } = t,
                  f = "function" == typeof r ? r() : r;
                (o.select("open") && s) || 0 === f || void 0 === f
                  ? o.setOpen(
                      !0,
                      (0, A.createChangeEventDetails)(
                        h.REASONS.triggerFocus,
                        a,
                        p,
                      ),
                    )
                  : d.start(f, () => {
                      u.current ||
                        o.setOpen(
                          !0,
                          (0, A.createChangeEventDetails)(
                            h.REASONS.triggerFocus,
                            a,
                            p,
                          ),
                        );
                    });
              },
              onBlur(t) {
                e();
                let n = t.relatedTarget,
                  r = t.nativeEvent,
                  i =
                    (0, eI.isElement)(n) &&
                    n.hasAttribute((0, e5.createAttribute)("focus-guard")) &&
                    "outside" === n.getAttribute("data-type");
                d.start(0, () => {
                  let e = o.select("domReferenceElement"),
                    t = (0, eM.activeElement)((0, ey.ownerDocument)(e));
                  if (
                    (!n && t === e) ||
                    (0, eM.contains)(
                      a.current.floatingContext?.refs.floating.current,
                      t,
                    ) ||
                    (0, eM.contains)(e, t) ||
                    i
                  )
                    return;
                  let s = n ?? t;
                  (0, ek.isTargetInsideEnabledTrigger)(
                    s,
                    o.context.triggerElements,
                  ) ||
                    o.setOpen(
                      !1,
                      (0, A.createChangeEventDetails)(
                        h.REASONS.triggerFocus,
                        r,
                      ),
                    );
                });
              },
            };
          }, [a, r, o, d]);
          return i.useMemo(
            () => (n ? { reference: p, trigger: p } : {}),
            [n, p],
          );
        })(L, { enabled: !q && er }),
        ec = (function (e) {
          let { enabled: t = !0, mouseDownAction: n, open: r } = e,
            o = i.useRef(!1);
          return i.useMemo(
            () =>
              t
                ? {
                    onMouseDown: (e) => {
                      (("open" === n && !r) || ("close" === n && r)) &&
                        ((o.current = !0),
                        (0, ey.ownerDocument)(e.currentTarget).addEventListener(
                          "click",
                          () => {
                            o.current = !1;
                          },
                          { once: !0 },
                        ));
                    },
                    onClick: (e) => {
                      o.current && ((o.current = !1), e.preventBaseUIHandler());
                    },
                  }
                : eR.EMPTY_OBJECT,
            [t, n, r],
          );
        })({ open: D, enabled: z, mouseDownAction: "open" }),
        ed = i.useMemo(
          () => (0, C.mergeProps)(el.reference, eu.reference),
          [el.reference, eu.reference],
        ),
        ef = k.useState("triggerProps", K),
        {
          preFocusGuardRef: eg,
          handlePreFocusGuardFocus: em,
          handleFocusTargetFocus: ev,
        } = (0, e8.useTriggerFocusGuards)(k, j),
        eh = { disabled: q, open: D },
        eE = [Q, t, X, Y, j],
        eS = [
          ed,
          ei ?? eR.EMPTY_OBJECT,
          ef,
          {
            "aria-haspopup": "menu",
            "aria-controls": F,
            id: w,
            onMouseDown: (e) => {
              k.select("open") ||
                (Z.start(200, () => {
                  k.context.allowMouseUpTriggerRef.current = !0;
                }),
                (0, ey.ownerDocument)(e.currentTarget).addEventListener(
                  "mouseup",
                  ee,
                  { once: !0 },
                ));
            },
          },
          z ? { role: "menuitem" } : {},
          ec,
          T,
          $,
        ],
        eb = (0, d.useRenderElement)("button", e, {
          enabled: !z,
          stateAttributesMapping: p.pressableTriggerOpenStateMapping,
          state: eh,
          ref: eE,
          props: eS,
        });
      return z
        ? (0, r.jsx)(e7, {
            tag: "button",
            render: u,
            className: l,
            style: f,
            state: eh,
            refs: eE,
            props: eS,
            stateAttributesMapping: p.pressableTriggerOpenStateMapping,
          })
        : D
          ? (0, r.jsxs)(i.Fragment, {
              children: [
                (0, r.jsx)(
                  e9.FocusGuard,
                  { ref: eg, onFocus: em },
                  `${w}-pre-focus-guard`,
                ),
                (0, r.jsx)(i.Fragment, { children: eb }, w),
                (0, r.jsx)(
                  e9.FocusGuard,
                  { ref: k.context.triggerFocusTargetRef, onFocus: ev },
                  `${w}-post-focus-guard`,
                ),
              ],
            })
          : (0, r.jsx)(i.Fragment, { children: eb }, w);
    });
    var tt = e.i(18390);
    let tn =
        (((n = {}).popupWidth = "--popup-width"),
        (n.popupHeight = "--popup-height"),
        n),
      tr = {
        activationDirection: (e) =>
          e ? { "data-activation-direction": e } : null,
      },
      to = i.forwardRef(function (e, t) {
        let { render: n, className: r, style: o, children: i, ...s } = e,
          { store: a } = c(),
          { side: l } = u(),
          p = a.useState("instantType"),
          { children: f, state: g } = (0, tt.usePopupViewport)({
            store: a,
            side: l,
            cssVars: tn,
            children: i,
          }),
          m = {
            activationDirection: g.activationDirection,
            transitioning: g.transitioning,
            instant: p,
          };
        return (0, d.useRenderElement)("div", e, {
          state: m,
          ref: t,
          props: [s, { children: f }],
          stateAttributesMapping: tr,
        });
      }),
      ti = i.forwardRef(function (e, t) {
        let {
          className: n,
          render: r,
          orientation: o = "horizontal",
          style: i,
          ...s
        } = e;
        return (0, d.useRenderElement)("div", e, {
          state: { orientation: o },
          ref: t,
          props: [{ role: "separator", "aria-orientation": o }, s],
        });
      }),
      ts = i.forwardRef(function (e, t) {
        let {
            render: n,
            className: r,
            style: o,
            label: a,
            id: l,
            nativeButton: f = !1,
            openOnHover: g = !0,
            delay: m = 100,
            closeDelay: v = 0,
            disabled: h = !1,
            ...E
          } = e,
          R = (0, k.useCompositeListItem)({ label: a }),
          S = u(),
          { store: b } = c(),
          x = (0, P.useBaseUiId)(l),
          y = b.useState("open"),
          C = b.useState("floatingRootContext"),
          I = b.useState("floatingTreeRoot"),
          O = b.useState("triggerPopupId", x),
          T = (0, eJ.useTriggerRegistration)(x, b),
          w = i.useCallback(
            (e) => {
              let t = T(e);
              return (
                null !== e &&
                  b.select("open") &&
                  null == b.select("activeTriggerId") &&
                  b.update({
                    activeTriggerId: x,
                    activeTriggerElement: e,
                    closeDelay: v,
                  }),
                t
              );
            },
            [T, v, b, x],
          ),
          N = i.useRef(null),
          A = i.useCallback(
            (e) => {
              ((N.current = e), b.set("activeTriggerElement", e));
            },
            [b],
          ),
          L = e$();
        if (!L?.parentMenu) throw Error((0, s.default)(37));
        b.useSyncedValue("closeDelay", v);
        let D = L.parentMenu,
          F = b.useState("disabled"),
          j = D.useState("disabled"),
          _ = h || F || j,
          B = D.useState("itemProps"),
          U = D.useState("isActive", R.index),
          H = i.useMemo(
            () => ({
              type: "submenu-trigger",
              setActive() {
                D.select("highlightItemOnHover") &&
                  D.set("activeIndex", R.index);
              },
            }),
            [D, R.index],
          ),
          { getItemProps: W, itemRef: V } = M({
            closeOnClick: !1,
            disabled: _,
            highlighted: U,
            id: x,
            store: b,
            typingRef: D.context.typingRef,
            nativeButton: f,
            itemMetadata: H,
            nodeId: S?.context.nodeId,
          }),
          G = b.useState("hoverEnabled"),
          Y = (0, e3.useHoverReferenceInteraction)(C, {
            enabled: G && g && !_,
            handleClose: (0, eQ.safePolygon)({ blockPointerEvents: !0 }),
            mouseOnly: !0,
            move: !0,
            restMs: m,
            delay: { open: m, close: v },
            shouldOpen: m > 0 ? () => D.select("allowMouseEnter") : void 0,
            triggerElementRef: N,
            externalTree: I,
            isClosing: () => "ending" === b.select("transitionStatus"),
          }),
          K =
            (0, eZ.useClick)(C, {
              enabled: !_,
              event: "mousedown",
              toggle: !g,
              ignoreMouse: g,
              stickIfOpen: !1,
            }).reference ?? eR.EMPTY_OBJECT,
          z = b.useState("triggerProps", !0);
        return (
          delete z.id,
          (0, d.useRenderElement)("div", e, {
            state: { disabled: _, highlighted: U, open: y },
            stateAttributesMapping: p.triggerOpenStateMapping,
            props: [
              K,
              Y,
              z,
              B,
              {
                "aria-controls": O,
                tabIndex: y || U ? 0 : -1,
                onBlur() {
                  U && D.set("activeIndex", null);
                },
              },
              E,
              W,
            ],
            ref: [t, R.ref, V, w, A],
          })
        );
      });
    class ta {
      constructor() {
        this.store = new ez();
      }
      open(e) {
        let t = e ? this.store.context.triggerElements.getById(e) : void 0;
        if (e && !t) throw Error((0, s.default)(83, e));
        this.store.setOpen(
          !0,
          (0, A.createChangeEventDetails)("imperative-action", void 0, t),
        );
      }
      close() {
        this.store.setOpen(
          !1,
          (0, A.createChangeEventDetails)("imperative-action", void 0, void 0),
        );
      }
      get isOpen() {
        return this.store.select("open");
      }
    }
    e.s(
      [
        "Arrow",
        0,
        f,
        "Backdrop",
        0,
        R,
        "CheckboxItem",
        0,
        L,
        "CheckboxItemIndicator",
        0,
        j,
        "Group",
        0,
        B,
        "GroupLabel",
        0,
        H,
        "Handle",
        0,
        ta,
        "Item",
        0,
        W,
        "LinkItem",
        0,
        V,
        "Popup",
        0,
        $,
        "Portal",
        0,
        Z,
        "Positioner",
        0,
        ed,
        "RadioGroup",
        0,
        eg,
        "RadioItem",
        0,
        ev,
        "RadioItemIndicator",
        0,
        eh,
        "Root",
        0,
        eX,
        "Separator",
        0,
        ti,
        "SubmenuRoot",
        0,
        function (e) {
          let t = c().store,
            n = i.useMemo(() => ({ parentMenu: t }), [t]);
          return (0, r.jsx)(eq.Provider, {
            value: n,
            children: (0, r.jsx)(eX, { ...e }),
          });
        },
        "SubmenuTrigger",
        0,
        ts,
        "Trigger",
        0,
        te,
        "Viewport",
        0,
        to,
        "createHandle",
        0,
        function () {
          return new ta();
        },
      ],
      60948,
    );
    var tu = e.i(60948),
      tu = tu,
      tl = e.i(11795),
      tc = e.i(19455);
    function td({ avatarUrl: e, initials: t }) {
      return e
        ? (0, r.jsx)("img", {
            src: e,
            alt: "",
            referrerPolicy: "no-referrer",
            className: "size-6 shrink-0 rounded-full object-cover",
          })
        : (0, r.jsx)("span", {
            className:
              "flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[0.65rem] font-semibold text-accent",
            children: t,
          });
    }
    function tp({ className: e }) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        className: e,
        "aria-hidden": "true",
        children: (0, r.jsx)("path", {
          d: "M6 9l6 6 6-6",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      });
    }
    e.s(
      [
        "AccountMenu",
        0,
        function ({ email: e, name: t, avatarUrl: n }) {
          let i;
          if (!e)
            return (0, r.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, r.jsx)(tc.Button, {
                  size: "sm",
                  variant: "ghost",
                  nativeButton: !1,
                  render: (0, r.jsx)(o.default, { href: "/auth/login" }),
                  children: "Login",
                }),
                (0, r.jsx)(tc.Button, {
                  size: "sm",
                  nativeButton: !1,
                  render: (0, r.jsx)(o.default, { href: "/auth/signup" }),
                  children: "Get started",
                }),
              ],
            });
          let s = async () => {
              let e = (0, tl.createClient)();
              (await e.auth.signOut(), window.location.assign("/"));
            },
            a =
              0 ===
              (i = (t || e).split("@")[0].trim().split(/\s+/).filter(Boolean))
                .length
                ? "?"
                : 1 === i.length
                  ? i[0].slice(0, 2).toUpperCase()
                  : (i[0][0] + i[1][0]).toUpperCase();
          return (0, r.jsxs)(tu.Root, {
            children: [
              (0, r.jsx)(tu.Trigger, {
                render: (0, r.jsxs)(tc.Button, {
                  size: "sm",
                  variant: "outline",
                  className: "gap-2 px-2",
                  children: [
                    (0, r.jsx)(td, { avatarUrl: n, initials: a }),
                    (0, r.jsx)(tp, {
                      className: "size-3.5 text-muted-foreground",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(tu.Portal, {
                children: (0, r.jsx)(tu.Positioner, {
                  sideOffset: 8,
                  align: "end",
                  className: "z-50 outline-none",
                  children: (0, r.jsxs)(tu.Popup, {
                    className:
                      "min-w-[12rem] rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center gap-2 px-3 py-2",
                        children: [
                          (0, r.jsx)(td, { avatarUrl: n, initials: a }),
                          (0, r.jsxs)("div", {
                            className: "min-w-0",
                            children: [
                              t &&
                                (0, r.jsx)("p", {
                                  className: "truncate text-sm font-medium",
                                  children: t,
                                }),
                              (0, r.jsx)("p", {
                                className:
                                  "truncate text-xs text-muted-foreground",
                                children: e,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", { className: "my-1 h-px bg-border" }),
                      (0, r.jsx)(tu.Item, {
                        render: (0, r.jsx)(o.default, { href: "/dashboard" }),
                        className:
                          "cursor-default rounded-[min(var(--radius-md),6px)] px-3 py-2 text-sm data-[highlighted]:bg-muted",
                        children: "Dashboard",
                      }),
                      (0, r.jsx)("div", { className: "my-1 h-px bg-border" }),
                      (0, r.jsx)(tu.Item, {
                        onClick: s,
                        className:
                          "cursor-default rounded-[min(var(--radius-md),6px)] px-3 py-2 text-sm text-destructive data-[highlighted]:bg-destructive/10",
                        children: "Log out",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
      ],
      81739,
    );
  },
]);
