(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    124: function(t, e, n) {},
    219: function(t, e, n) {
      "use strict";
      var i = n(124);
      n.n(i).a;
    },
    225: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = {
          functional: !0,
          props: {
            type: { type: String, default: "tip" },
            text: String,
            vertical: { type: String, default: "top" }
          },
          render: function(t, e) {
            var n = e.props,
              i = e.slots;
            return t(
              "span",
              {
                class: ["badge", n.type],
                style: { verticalAlign: n.vertical }
              },
              n.text || i().default
            );
          }
        },
        r = (n(219), n(0)),
        a = Object(r.a)(i, void 0, void 0, !1, null, "c13ee5b0", null);
      e.default = a.exports;
    }
  }
]);
