(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    223: function(t, e, r) {
      "use strict";
      r.r(e);
      r(218), r(85);
      var i = r(116),
        n =
          (r(120),
          {
            props: {
              gutterX: { type: Number },
              gutterY: { type: Number },
              justify: {
                type: String,
                default: "left",
                validator: function(t) {
                  return (
                    -1 !==
                    ["left", "right", "center", "around", "between"].indexOf(t)
                  );
                }
              },
              align: {
                type: String,
                default: "top",
                validator: function(t) {
                  return -1 !== ["top", "middle", "bottom"].indexOf(t);
                }
              },
              stretch: { type: Boolean, default: !1 }
            },
            data: function() {
              return {};
            },
            computed: {
              classes: function() {
                var t;
                return (
                  (t = {}),
                  Object(i.a)(
                    t,
                    "v-grid-row--justify-".concat(this.justify),
                    this.justify
                  ),
                  Object(i.a)(
                    t,
                    "v-grid-row--align-".concat(this.align),
                    this.align
                  ),
                  Object(i.a)(t, "v-grid-row--stretch", this.stretch),
                  t
                );
              },
              styles: function() {
                var t = {};
                return (
                  0 !== this.gutterX &&
                    ((t["margin-left"] = "".concat(-this.gutterX / 2, "px")),
                    (t["margin-right"] = "".concat(-this.gutterX / 2, "px"))),
                  0 !== this.gutterY &&
                    ((t["margin-top"] = "".concat(-this.gutterY / 2, "px")),
                    (t["margin-bottom"] = "".concat(-this.gutterY / 2, "px"))),
                  t
                );
              }
            },
            watch: {
              gutterX: function() {
                this.updateGutter();
              },
              gutterY: function() {
                this.updateGutter();
              }
            },
            methods: {
              updateGutter: function() {
                var t = this;
                this.$children.forEach(function(e) {
                  "McGridCol" === e.$options.name &&
                    ((e.gutterX = t.gutterX), (e.gutterY = t.gutterY));
                });
              }
            }
          }),
        u = r(0),
        s = Object(u.a)(
          n,
          function() {
            var t = this.$createElement;
            return (this._self._c || t)(
              "div",
              {
                staticClass: "v-grid-row",
                class: this.classes,
                style: this.styles
              },
              [this._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = s.exports;
    }
  }
]);
