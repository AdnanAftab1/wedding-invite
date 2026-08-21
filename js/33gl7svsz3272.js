(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  58887,
  (e) => {
    "use strict";
    var t = e.i(95187);
    let r = (0, t.createServerReference)(
      "607b458b19368f126db10d2a469ac3184a0fae4412",
      t.callServer,
      void 0,
      t.findSourceMapURL,
      "startFreeEditing",
    );
    e.s(["startFreeEditing", 0, r]);
  },
  81506,
  15174,
  (e) => {
    "use strict";
    var t = e.i(40181),
      r = e.i(81014),
      a = e.i(16758),
      i = e.i(50200),
      s = e.i(53854),
      l = e.i(23191),
      o = e.i(95691),
      n = e.i(48092),
      d = e.i(46251),
      u = e.i(25333),
      c = e.i(97199),
      p = e.i(24024),
      h = e.i(95954);
    let m = {
      "classic-floral": t.default,
      "midnight-bloom": r.default,
      "rose-charcoal": a.default,
      "ivory-welcome": i.default,
      "sage-welcome": s.default,
      "velvet-noir": l.default,
      "grand-celebration": o.default,
      "royal-blush": n.default,
      "azure-royale": d.default,
      "noor-e-nikah": u.default,
      "anand-karaj": c.default,
      modern: p.default,
      neo: h.default,
    };
    e.s(
      [
        "getTemplateComponent",
        0,
        function (e) {
          return m[e];
        },
      ],
      81506,
    );
    var x = e.i(43476),
      f = e.i(22016);
    e.s(
      [
        "MadeWithBadge",
        0,
        function () {
          return (0, x.jsxs)("div", {
            className:
              "w-full bg-neutral-950 py-3 text-center text-xs font-medium text-white",
            children: [
              "Made with ",
              (0, x.jsx)("span", { "aria-hidden": "true", children: "❤" }),
              " on",
              " ",
              (0, x.jsx)(f.default, {
                href: "https://saveourdate.in",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "font-semibold underline-offset-2 hover:underline",
                children: "SaveOurDate.in",
              }),
            ],
          });
        },
      ],
      15174,
    );
  },
  23316,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      a = e.i(81506),
      i = e.i(32781);
    let s = (0, e.i(56420).default)("pencil-line", [
      ["path", { d: "M13 21h8", key: "1jsn5i" }],
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu",
        },
      ],
    ]);
    var l = e.i(58887);
    function o({
      templateId: e,
      templateSlug: a,
      priceLabel: n,
      referralCode: d,
    }) {
      let [u, c] = (0, r.useTransition)(),
        [p, h] = (0, r.useState)("");
      return (0, t.jsxs)("div", {
        className:
          "fixed top-4 right-4 z-50 flex flex-col items-end gap-2 sm:top-6 sm:right-6",
        children: [
          (0, t.jsxs)("button", {
            type: "button",
            onClick: () => {
              (h(""),
                c(async () => {
                  let t = await (0, l.startFreeEditing)(e, d);
                  if (t && !t.ok) {
                    if ("Sign in to start editing" === t.error)
                      return void window.top?.location.assign(
                        `/auth/signup?next=${encodeURIComponent(`/templates/${a}`)}`,
                      );
                    h(t.error ?? "Something went wrong.");
                  }
                }));
            },
            disabled: u,
            title: `Start editing this template for free -- publishing it later costs ${n}`,
            className:
              "group flex h-11 items-center gap-2 rounded-full bg-neutral-900 pr-4 pl-3 text-sm font-medium text-white shadow-lg transition-all hover:pr-5 hover:shadow-xl disabled:opacity-60",
            children: [
              u
                ? (0, t.jsx)(i.Loader2, {
                    className: "size-4 shrink-0 animate-spin",
                  })
                : (0, t.jsx)(s, { className: "size-4 shrink-0" }),
              (0, t.jsx)("span", {
                className: "whitespace-nowrap",
                children: u ? "Starting..." : "Start editing — it's free",
              }),
            ],
          }),
          p
            ? (0, t.jsx)("p", {
                className:
                  "max-w-[220px] rounded-lg border border-neutral-200 bg-white px-3 py-2 text-right text-xs text-red-600 shadow-lg",
                children: p,
              })
            : !u &&
              (0, t.jsxs)("p", {
                className:
                  "max-w-[220px] rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-right text-xs text-neutral-500 shadow-lg",
                children: ["Publish & get your link for ", n],
              }),
        ],
      });
    }
    var n = e.i(15174);
    function d({ asset: e, label: r, onClick: a }) {
      return (0, t.jsxs)("button", {
        type: "button",
        onClick: a,
        title: r ?? ("video" === e.type ? "Video" : "Photo"),
        className:
          "group relative h-40 w-64 max-w-[80vw] shrink-0 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-sm transition hover:border-foreground/30 hover:shadow-md",
        children: [
          "video" === e.type
            ? (0, t.jsx)("video", {
                src: e.url,
                muted: !0,
                autoPlay: !0,
                loop: !0,
                playsInline: !0,
                className:
                  "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
              })
            : (0, t.jsx)("img", {
                src: e.url,
                alt: "",
                className:
                  "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
              }),
          (0, t.jsx)("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0",
          }),
          (0, t.jsx)("span", {
            className:
              "absolute bottom-3 left-3 text-sm font-medium text-white",
            children: r ?? ("video" === e.type ? "Video" : "Photo"),
          }),
        ],
      });
    }
    e.s(
      [
        "TemplatePreviewGate",
        0,
        function ({
          templateKey: e,
          slug: i,
          demoData: s,
          defaultBackground: l,
          presets: u,
          templateId: c,
          priceLabel: p,
          referralCode: h,
        }) {
          let [m, x] = (0, r.useState)({
              source: "preset",
              type: "image",
              url: "https://pmhnlcksbowhdmnwpleu.supabase.co/storage/v1/object/public/template-assets/a06f4c34-3c30-44ab-ba9b-9f470838083f.webp",
              presetId: "5fe4c807-023f-46ab-b321-462ab7c41798",
              responsive: {
                tablet: {
                  type: "image",
                  url: "https://pmhnlcksbowhdmnwpleu.supabase.co/storage/v1/object/public/template-assets/c220e62e-c930-4887-956c-e6c575a0e514.webp",
                },
                mobile: {
                  type: "image",
                  url: "https://pmhnlcksbowhdmnwpleu.supabase.co/storage/v1/object/public/template-assets/a673cfad-c837-4e98-8ee6-14778f2a5d8b.webp",
                },
              },
            }),
            [f, g] = (0, r.useState)(false),
            b = (0, a.getTemplateComponent)(e);
          return b
            ? f
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "pointer-events-none fixed top-4 left-4 z-40 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white uppercase backdrop-blur-sm sm:top-6 sm:left-6",
                      children: "Preview · SaveOurDate.in",
                    }),
                    (0, t.jsx)(o, {
                      templateId: c,
                      templateSlug: i,
                      priceLabel: p,
                      referralCode: h,
                    }),
                    (0, t.jsx)(b, {
                      data: { ...s, heroBackground: m },
                      siteId: "demo",
                      isPreview: !0,
                    }),
                    (0, t.jsx)(n.MadeWithBadge, {}),
                  ],
                })
              : (0, t.jsxs)("div", {
                  className:
                    "flex min-h-screen flex-col items-center justify-center gap-10 bg-background px-6 py-20 text-center",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("p", {
                          className:
                            "font-mono text-xs tracking-[0.35em] text-accent uppercase",
                          children: "Before you preview",
                        }),
                        (0, t.jsx)("h1", {
                          className:
                            "mt-4 font-display text-4xl font-semibold tracking-tight text-foreground",
                          children: "Choose your hero background",
                        }),
                        (0, t.jsx)("p", {
                          className:
                            "mt-3 max-w-md text-sm text-muted-foreground",
                          children:
                            "This is the very first thing your guests will see. Pick one to preview the template with it -- you (or your couple) can always change it later in the editor.",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex flex-wrap justify-center gap-4",
                      children: [
                        l &&
                          (0, t.jsx)(d, {
                            asset: l,
                            label: "Default",
                            onClick: () => {
                              (x(void 0), g(!0));
                            },
                          }),
                        u.map((e) =>
                          (0, t.jsx)(
                            d,
                            {
                              asset: e,
                              label: e.label,
                              onClick: () => {
                                (x({
                                  source: "preset",
                                  type: e.type,
                                  url: e.url,
                                  presetId: e.id,
                                  responsive: e.responsive,
                                }),
                                  g(!0));
                              },
                            },
                            e.id,
                          ),
                        ),
                      ],
                    }),
                  ],
                })
            : null;
        },
      ],
      23316,
    );
  },
]);
