(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    224: function(t, s, a) {
      "use strict";
      a.r(s);
      var n = a(0),
        r = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "vue-simple-grid-system" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#vue-simple-grid-system",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Vue Simple Grid system")
                ]),
                t._v(" "),
                a("p", [t._v("Simplified, customizable grid system")]),
                t._v(" "),
                a("h2", { attrs: { id: "npm-yarn" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#npm-yarn", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" NPM/YARN")
                ]),
                t._v(" "),
                a("div", { staticClass: "language- extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      t._v("npm install --save vue-grid\nyarn add vue-grid\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "component-registration" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#component-registration",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Component registration")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//global registration")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" VueGrid "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'vue-grid'")
                      ]),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'vue-grid/dist/styles.css'")
                      ]),
                      t._v("\nVue"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("use")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("VueGrid"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//local registration")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("GridRow"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" GridCol"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'vue-grid'")
                      ]),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//you can also import this in your style tag")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'vue-grid/dist/styles.css'")
                      ]),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//component code")]
                      ),
                      t._v("\ncomponents"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'grid-row'")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" GridRow"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'grid-col'")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" GridCol\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("grid-row")
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":gutter-x")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("15"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("grid-col")
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":span")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("3"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("First 3"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("grid-col")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("grid-col")
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":span")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("9"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("Second 9"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("grid-col")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("grid-row")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "props" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#props", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Props")
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "gridrow" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#gridrow", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" GridRow")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("props"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          t._v(
                            "/**\n   * Space between cols horizontally\n   */"
                          )
                        ]
                      ),
                      t._v("\n  gutterX"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" Number\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("/**\n   * Space between cols vertically\n   */")]
                      ),
                      t._v("\n  gutterY"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" Number\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("/**\n   * Align cols horizontally\n   */")]
                      ),
                      t._v("\n  justify"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" String"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("default")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"left"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token function-variable function" }
                        },
                        [t._v("validator")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("value")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n      "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("\n        "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"left"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"right"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"center"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"around"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"between"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("indexOf")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("value"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("!==")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("-")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1")
                      ]),
                      t._v("\n      "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("/**\n   * Align cols vertically\n   */")]
                      ),
                      t._v("\n  align"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" String"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("default")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"top"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token function-variable function" }
                        },
                        [t._v("validator")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("value")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n      "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"top"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"middle"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"bottom"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("indexOf")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("value"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("!==")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("-")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("/**\n   * Stretch items in a row\n   */")]
                      ),
                      t._v("\n  stretch"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" Boolean"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("default")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("false")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h3", { attrs: { id: "gridcol" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#gridcol", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" GridCol")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("props"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("/**\n   * Col size\n   */")]
                      ),
                      t._v("\n  span"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('""')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-s"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-m"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-l"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xxl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" Number\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("/**\n   * Col order\n   */")]
                      ),
                      t._v("\n  order"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('""')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-s"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-m"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-l"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xxl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" Number\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("/**\n   * Coll offset\n   */")]
                      ),
                      t._v("\n  offset"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('""')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-s"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-m"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-l"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xxl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" Number\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("/**\n   * Move right to the distance\n   */")]
                      ),
                      t._v("\n  push"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('""')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-s"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-m"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-l"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xxl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" Number\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("/**\n   * Move left to the distance\n   */")]
                      ),
                      t._v("\n  pull"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('""')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-s"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-m"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-l"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"-xxl"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" Number\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ])
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      s.default = r.exports;
    }
  }
]);
