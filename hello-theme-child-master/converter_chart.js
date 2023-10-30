(function (t) {
   var e = {};

   function i(n) {
      if (e[n]) return e[n].exports;
      var r = e[n] = {
         i: n,
         l: !1,
         exports: {}
      };
      return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
   }
   i.m = t, i.c = e, i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, {
         enumerable: !0,
         get: n
      })
   }, i.r = function (t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
         value: "Module"
      }), Object.defineProperty(t, "__esModule", {
         value: !0
      })
   }, i.t = function (t, e) {
      if (1 & e && (t = i(t)), 8 & e) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
         }), 2 & e && "string" != typeof t)
         for (var r in t) i.d(n, r, function (e) {
            return t[e]
         }.bind(null, r));
      return n
   }, i.n = function (t) {
      var e = t && t.__esModule ? function () {
         return t["default"]
      } : function () {
         return t
      };
      return i.d(e, "a", e), e
   }, i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
   }, i.p = "/", i(i.s = 7)
})({
   "0029": function (t, e) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
   },
   "0185": function (t, e, i) {
      var n = i("e5fa");
      t.exports = function (t) {
         return Object(n(t))
      }
   },
   "01f9": function (t, e, i) {
      "use strict";
      var n = i("2d00"),
         r = i("5ca1"),
         o = i("2aba"),
         a = i("32e9"),
         s = i("84f2"),
         c = i("41a0"),
         l = i("7f20"),
         h = i("38fd"),
         d = i("2b4c")("iterator"),
         u = !([].keys && "next" in [].keys()),
         p = "@@iterator",
         f = "keys",
         m = "values",
         g = function () {
            return this
         };
      t.exports = function (t, e, i, v, y, x, b) {
         c(i, e, v);
         var _, w, k, S = function (t) {
               if (!u && t in P) return P[t];
               switch (t) {
                  case f:
                     return function () {
                        return new i(this, t)
                     };
                  case m:
                     return function () {
                        return new i(this, t)
                     }
               }
               return function () {
                  return new i(this, t)
               }
            },
            M = e + " Iterator",
            A = y == m,
            C = !1,
            P = t.prototype,
            T = P[d] || P[p] || y && P[y],
            O = T || S(y),
            L = y ? A ? S("entries") : O : void 0,
            D = "Array" == e && P.entries || T;
         if (D && (k = h(D.call(new t)), k !== Object.prototype && k.next && (l(k, M, !0), n || "function" == typeof k[d] || a(k, d, g))), A && T && T.name !== m && (C = !0, O = function () {
               return T.call(this)
            }), n && !b || !u && !C && P[d] || a(P, d, O), s[e] = O, s[M] = g, y)
            if (_ = {
                  values: A ? O : S(m),
                  keys: x ? O : S(f),
                  entries: L
               }, b)
               for (w in _) w in P || o(P, w, _[w]);
            else r(r.P + r.F * (u || C), e, _);
         return _
      }
   },
   "026a": function (t, e, i) {
      "use strict";
      var n = function () {
            var t = this,
               e = t.$createElement,
               i = t._self._c || e;
            return i("div", {
               staticClass: "cg-container",
               style: t.containerStyle,
               attrs: {
                  "data-loading": t.loading
               }
            }, [t.loading ? i("div", {
               staticClass: "cg-p-3 cg-base"
            }, [t._v("Loading widget...")]) : t._e(), i("div", {
               staticClass: "cg-widget cg-relative"
            }, [i("div", {
               attrs: {
                  id: t.chartId
               }
            }), i("div", {
               staticClass: "cg-absolute cg-bold",
               staticStyle: {
                  bottom: "5px",
                  left: "18px"
               },
               domProps: {
                  innerHTML: t._s(t.poweredByCoinGecko)
               }
            })])])
         },
         r = [],
         o = (i("7f7f"), i("a4bb")),
         a = i.n(o),
         s = (i("5df3"), i("795b")),
         c = i.n(s),
         l = (i("ac6a"), i("28a5"), i("6b54"), i("c5f6"), i("cadf"), i("551c"), i("097d"), i("e8ba")),
         h = i("e591"),
         d = i.n(h),
         u = i("0319"),
         p = i.n(u),
         f = i("c1e2");
      p()(d.a), d.a.theme = {
         chart: {
            backgroundColor: "#FFFFFF"
         },
         title: {
            style: {
               color: "#000",
               font: "20px sans-serif"
            }
         }
      }, d.a.setOptions(d.a.theme);
      var m = "#000000",
         g = 2,
         v = 500,
         y = {
            name: "CoingeckoCoinCompareChartWidget",
            mixins: [Object(f["a"])()],
            props: {
               coinIds: {
                  type: String,
                  default: "bitcoin,litecoin,tron,neo,monero"
               },
               currency: {
                  type: String,
                  default: "usd"
               },
               type: {
                  type: String,
                  default: "price"
               },
               locale: {
                  type: String,
                  default: "en"
               },
               width: {
                  type: Number,
                  default: 0
               }
            },
            data: function () {
               return {
                  chartId: "chart-".concat(Math.floor(1e6 * Math.random()).toString()),
                  loading: !0,
                  apiChartData: {},
                  apiCoinData: {},
                  seriesData: []
               }
            },
            computed: {
               currencyCode: function () {
                  return this.currency.toLowerCase()
               },
               sanitizedCoinIds: function () {
                  var t = this.coinIds.split(",").map(function (t) {
                        return t.trim()
                     }),
                     e = [],
                     i = {};
                  return t.forEach(function (t) {
                     i[t] || e.push(t), i[t] = t
                  }), e
               },
               coins: function () {
                  var t = {};
                  return this.apiChartData.forEach(function (e) {
                     t[e.id] = e
                  }), this.sanitizedCoinIds.map(function (e) {
                     return t[e]
                  })
               },
               poweredByCoinGecko: function () {
                  return this.polyglot.t("coin_compare_chart_widget.powered_by", {
                     name: " ",
                     name_start: '<a class="cg-primary-color-dark cg-no-underline" href="https://www.coingecko.com/en?'.concat(this.utmParams(this.sanitizedCoinIds.join()), '" target="_blank">'),
                     name_end: "</a>"
                  })
               },
               containerStyle: function () {
                  var t = "".concat(this.width, "px");
                  return 0 === this.width && (t = "100%"), {
                     width: t
                  }
               }
            },
            methods: {
               formatCurrency: function (t) {
                  return Object(l["formatCurrency"])(t, this.currencyCode, this.locale)
               },
               fetchCoinChartData: function (t, e) {
                  var i = this;
                  return fetch("https://api.coingecko.com/api/v3/coins/".concat(t, "/market_chart?vs_currency=").concat(this.currencyCode, "&days=").concat(e)).then(function (t) {
                     return t.json()
                  }).then(function (e) {
                     i.apiChartData[t] = e
                  })
               },
               fetchCoins: function () {
                  var t = this;
                  fetch("https://api.coingecko.com/api/v3/coins/markets?ids=".concat(this.sanitizedCoinIds, "&vs_currency=").concat(this.currencyCode)).then(function (t) {
                     return t.json()
                  }).then(function (e) {
                     t.apiCoinData = {}, e.forEach(function (e) {
                        t.apiCoinData[e.id] = e
                     })
                  })
               },
               fetchData: function () {
                  var t = this,
                     e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                     i = e.durationInDays,
                     n = void 0 === i ? "max" : i;
                  this.loading = !0, this.fetchCoins();
                  for (var r = [], o = 0; o < this.sanitizedCoinIds.length; o += g) r.push(this.sanitizedCoinIds.slice(o, o + g));
                  return this._dataPromise = c.a.resolve(), r.forEach(function (e) {
                     t._dataPromise = t._dataPromise.then(function () {
                        return c.a.all(e.map(function (e) {
                           return t.fetchCoinChartData(e, n)
                        }))
                     }).then(function () {
                        return new c.a(function (t) {
                           setTimeout(t, v)
                        })
                     })
                  }), this._dataPromise.then(function () {
                     t.seriesData = t.sanitizedCoinIds.map(function (e) {
                        var i = "prices";
                        return "price" === t.type ? i = "prices" : "market_cap" === t.type && (i = "market_caps"), {
                           name: e,
                           data: t.apiChartData[e][i]
                        }
                     }), t.loading = !1, t.createChart()
                  })
               },
               createChart: function () {
                  var t;
                  switch (this.type) {
                     case "price":
                        t = this.polyglot.t("coin_compare_chart_widget.crypto_price_comparison");
                        break;
                     case "market_cap":
                        t = this.polyglot.t("coin_compare_chart_widget.crypto_market_cap_comparison");
                        break;
                     default:
                        t = "Unknown Comparison";
                        break
                  }
                  var e = this.formatCurrency.bind(this),
                     i = this.apiCoinData;
                  this.chart = d.a.stockChart(this.$el.querySelector("#".concat(this.chartId)), {
                     chart: {
                        spacingBottom: 25,
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20
                     },
                     title: {
                        text: '',
                        style: {
                           color: m
                        }
                     },
                     subtitle: {
                        text: a()(i).map(function (t) {
                           return i[t].name
                        }).join(", ")
                     },
                     navigator: {
                        enabled: !1
                     },
                     xAxis: {
                        minRange: 36e5
                     },
                     yAxis: {
                        type: "linear",
                        labels: {
                           formatter: function () {
                              return e(this.value)
                           }
                        },
                        plotLines: [{
                           value: 0,
                           width: 2,
                           color: "silver"
                        }]
                     },
                     plotOptions: {
                        series: {
                           showInNavigator: !0
                        }
                     },
                     tooltip: {
                        pointFormatter: function () {
                           return '<span style="color:{series.color}">'.concat(i[this.series.name].name, "</span>: <b>").concat(e(this.y), "</b><br/>")
                        },
                        valueDecimals: 2,
                        split: !0
                     },
                     rangeSelector: {
                        inputEnabled: !1,
                        selected: 5,
                        buttonPosition: {
                           x: -5
                        },
                        buttonTheme: {
                           height: 16,
                           width: 24,
                           fill: "none",
                           stroke: "none",
                           "stroke-width": 0,
                           r: 2,
                           style: {
                              color: m,
                              fontWeight: "bold"
                           },
                           states: {
                              hover: {},
                              select: {
                                 fill: m,
                                 style: {
                                    color: "white"
                                 }
                              }
                           }
                        },
                        labelStyle: {
                           display: "none"
                        }
                     },
                     exporting: {
                        buttons: {
                           logButton: {
                              text: "",
                              enabled: !0,
                              className: "cg-log-button",
                              x: 5,
                              y: 50,
                              onclick: function () {
                                 var t = this.exportingGroup.element.querySelector(".cg-linear-button"),
                                    e = this.exportingGroup.element.querySelector(".cg-log-button");
                                 e.classList.add("cg-active-button"), t.classList.remove("cg-active-button"), this.update({
                                    yAxis: {
                                       type: "logarithmic"
                                    }
                                 })
                              }
                           },
                           linearButton: {
                              text: " ",
                              width: 50,
                              className: "cg-linear-button cg-active-button",
                              x: -30,
                              y: 50,
                              onclick: function () {
                                 var t = this.exportingGroup.element.querySelector(".cg-linear-button"),
                                    e = this.exportingGroup.element.querySelector(".cg-log-button");
                                 e.classList.remove("cg-active-button"), t.classList.add("cg-active-button"), this.update({
                                    yAxis: {
                                       type: "linear"
                                    }
                                 })
                              }
                           }
                        }
                     },
                     series: this.seriesData,
                     credits: {
                        position: {
                           y: -10,
                           x: -20
                        }
                     }
                  })
               },
               utmParams: function (t) {
                  return "utm_source=".concat(window.location.host, "&utm_medium=coin_compare_chart_widget&utm_content=").concat(t)
               }
            },
            watch: {
               coinIds: function () {
                  this.fetchData()
               },
               currency: function () {
                  this.fetchData()
               },
               width: function () {
                  var t = this;
                  setTimeout(function () {
                     t.createChart()
                  }, 100)
               },
               type: function () {
                  this.fetchData()
               }
            },
            created: function () {
               this.fetchData()
            }
         },
         x = y,
         b = i("2877"),
         _ = Object(b["a"])(x, n, r, !1, null, null, null);
      _.options.__file = "CoingeckoCoinCompareChartWidget.vue";
      e["a"] = _.exports
   },
   "02f4": function (t, e, i) {
      var n = i("4588"),
         r = i("be13");
      t.exports = function (t) {
         return function (e, i) {
            var o, a, s = String(r(e)),
               c = n(i),
               l = s.length;
            return c < 0 || c >= l ? t ? "" : void 0 : (o = s.charCodeAt(c), o < 55296 || o > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536)
         }
      }
   },
   "0319": function (t, e, i) {
      var n;
      (function (r) {
         t.exports ? t.exports = r : (n = function () {
            return r
         }.call(e, i, e, t), void 0 === n || (t.exports = n))
      })(function (t) {
         (function (t) {
            var e = t.defaultOptions,
               i = t.doc,
               n = t.Chart,
               r = t.addEvent,
               o = t.removeEvent,
               a = t.fireEvent,
               s = t.createElement,
               c = t.discardElement,
               l = t.css,
               h = t.merge,
               d = t.pick,
               u = t.each,
               p = t.objectEach,
               f = t.extend,
               m = t.isTouchDevice,
               g = t.win,
               v = g.navigator.userAgent,
               y = t.Renderer.prototype.symbols;
            /Edge\/|Trident\/|MSIE /.test(v), /firefox/i.test(v), f(e.lang, {
               printChart: "Print chart",
               downloadPNG: "Download PNG image",
               downloadJPEG: "Download JPEG image",
               downloadPDF: "Download PDF document",
               downloadSVG: "Download SVG vector image",
               contextButtonTitle: "Chart context menu"
            }), e.navigation = {
               buttonOptions: {
                  theme: {},
                  symbolSize: 14,
                  symbolX: 12.5,
                  symbolY: 10.5,
                  align: "right",
                  buttonSpacing: 3,
                  height: 22,
                  verticalAlign: "top",
                  width: 24
               }
            }, h(!0, e.navigation, {
               menuStyle: {
                  border: "1px solid #999999",
                  background: "#ffffff",
                  padding: "5px 0"
               },
               menuItemStyle: {
                  padding: "0.5em 1em",
                  background: "none",
                  color: "#333333",
                  fontSize: m ? "14px" : "11px",
                  transition: "background 250ms, color 250ms"
               },
               menuItemHoverStyle: {
                  background: "#335cad",
                  color: "#ffffff"
               },
               buttonOptions: {
                  symbolFill: "#666666",
                  symbolStroke: "#666666",
                  symbolStrokeWidth: 3,
                  theme: {
                     fill: "#ffffff",
                     stroke: "none",
                     padding: 5
                  }
               }
            }), e.exporting = {
               type: "image/png",
               url: "https://export.highcharts.com/",
               printMaxWidth: 780,
               scale: 2,
               buttons: {
                  contextButton: {
                     className: "highcharts-contextbutton",
                     menuClassName: "highcharts-contextmenu",
                     symbol: "menu",
                     titleKey: "contextButtonTitle",
                     menuItems: "printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")
                  }
               },
               menuItemDefinitions: {
                  printChart: {
                     textKey: "printChart",
                     onclick: function () {
                        this.print()
                     }
                  },
                  separator: {
                     separator: !0
                  },
                  downloadPNG: {
                     textKey: "downloadPNG",
                     onclick: function () {
                        this.exportChart()
                     }
                  },
                  downloadJPEG: {
                     textKey: "downloadJPEG",
                     onclick: function () {
                        this.exportChart({
                           type: "image/jpeg"
                        })
                     }
                  },
                  downloadPDF: {
                     textKey: "downloadPDF",
                     onclick: function () {
                        this.exportChart({
                           type: "application/pdf"
                        })
                     }
                  },
                  downloadSVG: {
                     textKey: "downloadSVG",
                     onclick: function () {
                        this.exportChart({
                           type: "image/svg+xml"
                        })
                     }
                  }
               }
            }, t.post = function (t, e, n) {
               var r = s("form", h({
                  method: "post",
                  action: t,
                  enctype: "multipart/form-data"
               }, n), {
                  display: "none"
               }, i.body);
               p(e, function (t, e) {
                  s("input", {
                     type: "hidden",
                     name: e,
                     value: t
                  }, null, r)
               }), r.submit(), c(r)
            }, f(n.prototype, {
               sanitizeSVG: function (t, e) {
                  if (e && e.exporting && e.exporting.allowHTML) {
                     var i = t.match(/<\/svg>(.*?$)/);
                     i && i[1] && (i = '<foreignObject x="0" y="0" width="' + e.chart.width + '" height="' + e.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + i[1] + "</body></foreignObject>", t = t.replace("</svg>", i + "</svg>"))
                  }
                  return t = t.replace(/zIndex="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+\:)href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "Â ").replace(/&shy;/g, "Â­"), this.ieSanitizeSVG && (t = this.ieSanitizeSVG(t)), t
               },
               getChartHTML: function () {
                  return this.container.innerHTML
               },
               getSVG: function (e) {
                  var n, r, o, l, d, p = h(this.options, e);
                  return r = s("div", null, {
                     position: "absolute",
                     top: "-9999em",
                     width: this.chartWidth + "px",
                     height: this.chartHeight + "px"
                  }, i.body), o = this.renderTo.style.width, d = this.renderTo.style.height, o = p.exporting.sourceWidth || p.chart.width || /px$/.test(o) && parseInt(o, 10) || 600, d = p.exporting.sourceHeight || p.chart.height || /px$/.test(d) && parseInt(d, 10) || 400, f(p.chart, {
                     animation: !1,
                     renderTo: r,
                     forExport: !0,
                     renderer: "SVGRenderer",
                     width: o,
                     height: d
                  }), p.exporting.enabled = !1, delete p.data, p.series = [], u(this.series, function (t) {
                     l = h(t.userOptions, {
                        animation: !1,
                        enableMouseTracking: !1,
                        showCheckbox: !1,
                        visible: t.visible
                     }), l.isInternal || p.series.push(l)
                  }), u(this.axes, function (e) {
                     e.userOptions.internalKey || (e.userOptions.internalKey = t.uniqueKey())
                  }), n = new t.Chart(p, this.callback), e && u(["xAxis", "yAxis", "series"], function (t) {
                     var i = {};
                     e[t] && (i[t] = e[t], n.update(i))
                  }), u(this.axes, function (e) {
                     var i = t.find(n.axes, function (t) {
                           return t.options.internalKey === e.userOptions.internalKey
                        }),
                        r = e.getExtremes(),
                        o = r.userMin;
                     r = r.userMax;
                     i && (void 0 !== o && o !== i.min || void 0 !== r && r !== i.max) && i.setExtremes(o, r, !0, !1)
                  }), o = n.getChartHTML(), a(this, "getSVG", {
                     chartCopy: n
                  }), o = this.sanitizeSVG(o, p), p = null, n.destroy(), c(r), o
               },
               getSVGForExport: function (t, e) {
                  var i = this.options.exporting;
                  return this.getSVG(h({
                     chart: {
                        borderRadius: 0
                     }
                  }, i.chartOptions, e, {
                     exporting: {
                        sourceWidth: t && t.sourceWidth || i.sourceWidth,
                        sourceHeight: t && t.sourceHeight || i.sourceHeight
                     }
                  }))
               },
               exportChart: function (e, i) {
                  i = this.getSVGForExport(e, i), e = h(this.options.exporting, e), t.post(e.url, {
                     filename: e.filename || "chart",
                     type: e.type,
                     width: e.width || 0,
                     scale: e.scale,
                     svg: i
                  }, e.formAttributes)
               },
               print: function () {
                  var t, e, n = this,
                     r = n.container,
                     o = [],
                     s = r.parentNode,
                     c = i.body,
                     l = c.childNodes,
                     h = n.options.exporting.printMaxWidth;
                  n.isPrinting || (n.isPrinting = !0, n.pointer.reset(null, 0), a(n, "beforePrint"), (e = h && n.chartWidth > h) && (t = [n.options.chart.width, void 0, !1], n.setSize(h, void 0, !1)), u(l, function (t, e) {
                     1 === t.nodeType && (o[e] = t.style.display, t.style.display = "none")
                  }), c.appendChild(r), setTimeout(function () {
                     g.focus(), g.print(), setTimeout(function () {
                        s.appendChild(r), u(l, function (t, e) {
                           1 === t.nodeType && (t.style.display = o[e])
                        }), n.isPrinting = !1, e && n.setSize.apply(n, t), a(n, "afterPrint")
                     }, 1e3)
                  }, 1))
               },
               contextMenu: function (e, n, o, a, c, h, d) {
                  var p, m = this,
                     g = m.options.navigation,
                     v = m.chartWidth,
                     y = m.chartHeight,
                     x = "cache-" + e,
                     b = m[x],
                     _ = Math.max(c, h);
                  b || (m.exportContextMenu = m[x] = b = s("div", {
                     className: e
                  }, {
                     position: "absolute",
                     zIndex: 1e3,
                     padding: _ + "px",
                     pointerEvents: "auto"
                  }, m.fixedDiv || m.container), p = s("div", {
                     className: "highcharts-menu"
                  }, null, b), l(p, f({
                     MozBoxShadow: "3px 3px 10px #888",
                     WebkitBoxShadow: "3px 3px 10px #888",
                     boxShadow: "3px 3px 10px #888"
                  }, g.menuStyle)), b.hideMenu = function () {
                     l(b, {
                        display: "none"
                     }), d && d.setState(0), m.openMenu = !1, t.clearTimeout(b.hideTimer)
                  }, m.exportEvents.push(r(b, "mouseleave", function () {
                     b.hideTimer = setTimeout(b.hideMenu, 500)
                  }), r(b, "mouseenter", function () {
                     t.clearTimeout(b.hideTimer)
                  }), r(i, "mouseup", function (t) {
                     m.pointer.inClass(t.target, e) || b.hideMenu()
                  }), r(b, "click", function () {
                     m.openMenu && b.hideMenu()
                  })), u(n, function (e) {
                     var i;
                     ("string" === typeof e && (e = m.options.exporting.menuItemDefinitions[e]), t.isObject(e, !0)) && (e.separator ? i = s("hr", null, null, p) : (i = s("div", {
                        className: "highcharts-menu-item",
                        onclick: function (t) {
                           t && t.stopPropagation(), b.hideMenu(), e.onclick && e.onclick.apply(m, arguments)
                        },
                        innerHTML: e.text || m.options.lang[e.textKey]
                     }, null, p), i.onmouseover = function () {
                        l(this, g.menuItemHoverStyle)
                     }, i.onmouseout = function () {
                        l(this, g.menuItemStyle)
                     }, l(i, f({
                        cursor: "pointer"
                     }, g.menuItemStyle))), m.exportDivElements.push(i))
                  }), m.exportDivElements.push(p, b), m.exportMenuWidth = b.offsetWidth, m.exportMenuHeight = b.offsetHeight), n = {
                     display: "block"
                  }, o + m.exportMenuWidth > v ? n.right = v - o - c - _ + "px" : n.left = o - _ + "px", a + h + m.exportMenuHeight > y && "top" !== d.alignOptions.verticalAlign ? n.bottom = y - a - _ + "px" : n.top = a + h - _ + "px", l(b, n), m.openMenu = !0
               },
               addButton: function (t) {
                  var e, i, n = this,
                     r = n.renderer,
                     o = h(n.options.navigation.buttonOptions, t),
                     a = o.onclick,
                     s = o.menuItems,
                     c = o.symbolSize || 12;
                  if (n.btnCount || (n.btnCount = 0), n.exportDivElements || (n.exportDivElements = [], n.exportSVGElements = []), !1 !== o.enabled) {
                     var l, u = o.theme,
                        p = u.states,
                        m = p && p.hover;
                     p = p && p.select;
                     delete u.states, a ? l = function (t) {
                        t && t.stopPropagation(), a.call(n, t)
                     } : s && (l = function (t) {
                        t && t.stopPropagation(), n.contextMenu(i.menuClassName, s, i.translateX, i.translateY, i.width, i.height, i), i.setState(2)
                     }), o.text && o.symbol ? u.paddingLeft = d(u.paddingLeft, 25) : o.text || f(u, {
                        width: o.width,
                        height: o.height,
                        padding: 0
                     }), i = r.button(o.text, 0, 0, l, u, m, p).addClass(t.className).attr({
                        "stroke-linecap": "round",
                        title: d(n.options.lang[o._titleKey || o.titleKey], "")
                     }), i.menuClassName = t.menuClassName || "highcharts-menu-" + n.btnCount++, o.symbol && (e = r.symbol(o.symbol, o.symbolX - c / 2, o.symbolY - c / 2, c, c, {
                        width: c,
                        height: c
                     }).addClass("highcharts-button-symbol").attr({
                        zIndex: 1
                     }).add(i), e.attr({
                        stroke: o.symbolStroke,
                        fill: o.symbolFill,
                        "stroke-width": o.symbolStrokeWidth || 1
                     })), i.add(n.exportingGroup).align(f(o, {
                        width: i.width,
                        x: d(o.x, n.buttonOffset)
                     }), !0, "spacingBox"), n.buttonOffset += (i.width + o.buttonSpacing) * ("right" === o.align ? -1 : 1), n.exportSVGElements.push(i, e)
                  }
               },
               destroyExport: function (e) {
                  var i = e ? e.target : this;
                  e = i.exportSVGElements;
                  var n, r = i.exportDivElements,
                     a = i.exportEvents;
                  e && (u(e, function (t, e) {
                     t && (t.onclick = t.ontouchstart = null, n = "cache-" + t.menuClassName, i[n] && delete i[n], i.exportSVGElements[e] = t.destroy())
                  }), e.length = 0), i.exportingGroup && (i.exportingGroup.destroy(), delete i.exportingGroup), r && (u(r, function (e, n) {
                     t.clearTimeout(e.hideTimer), o(e, "mouseleave"), i.exportDivElements[n] = e.onmouseout = e.onmouseover = e.ontouchstart = e.onclick = null, c(e)
                  }), r.length = 0), a && (u(a, function (t) {
                     t()
                  }), a.length = 0)
               }
            }), y.menu = function (t, e, i, n) {
               return ["M", t, e + 2.5, "L", t + i, e + 2.5, "M", t, e + n / 2 + .5, "L", t + i, e + n / 2 + .5, "M", t, e + n - 1.5, "L", t + i, e + n - 1.5]
            }, n.prototype.renderExporting = function () {
               var t = this,
                  e = t.options.exporting,
                  i = e.buttons,
                  n = t.isDirtyExporting || !t.exportSVGElements;
               t.buttonOffset = 0, t.isDirtyExporting && t.destroyExport(), n && !1 !== e.enabled && (t.exportEvents = [], t.exportingGroup = t.exportingGroup || t.renderer.g("exporting-group").attr({
                  zIndex: 3
               }).add(), p(i, function (e) {
                  t.addButton(e)
               }), t.isDirtyExporting = !1), r(t, "destroy", t.destroyExport)
            }, r(n, "init", function () {
               var t = this;
               u(["exporting", "navigation"], function (e) {
                  t[e] = {
                     update: function (i, n) {
                        t.isDirtyExporting = !0, h(!0, t.options[e], i), d(n, !0) && t.redraw()
                     }
                  }
               })
            }), n.prototype.callbacks.push(function (t) {
               t.renderExporting(), r(t, "redraw", t.renderExporting)
            })
         })(t)
      })
   },
   "0390": function (t, e, i) {
      "use strict";
      var n = i("02f4")(!0);
      t.exports = function (t, e, i) {
         return e + (i ? n(t, e).length : 1)
      }
   },
   "03ca": function (t, e, i) {
      "use strict";
      var n = i("f2fe");

      function r(t) {
         var e, i;
         this.promise = new t(function (t, n) {
            if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
            e = t, i = n
         }), this.resolve = n(e), this.reject = n(i)
      }
      t.exports.f = function (t) {
         return new r(t)
      }
   },
   "0423": function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "æ™‚ä¾¡ç·é¡ãƒ©ãƒ³ã‚¯",
            mcap: "æ™‚ä¾¡ç·é¡",
            "24h_volume": "24æ™‚é–“å–å¼•é«˜",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: " %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "ä»®æƒ³é€šè²¨ä¾¡æ ¼æ¯”è¼ƒ",
            crypto_market_cap_comparison: "ä»®æƒ³é€šè²¨æ™‚ä¾¡ç·é¡æ¯”è¼ƒ"
         },
         coin_price_static_headline_widget: {
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "24Hæœ€é«˜å€¤",
            "24h_low": "24Hæœ€å®‰å€¤",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "24Hæœ€é«˜å€¤",
            "24h_low": "24Hæœ€å®‰å€¤",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "ä»®æƒ³é€šè²¨ãƒ‡ãƒ¼ã‚¿ä¸€è¦§",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "24Hå–å¼•é«˜",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "å–å¼•æ‰€",
            pair: "é€šè²¨ãƒšã‚¢",
            price: "ä¾¡æ ¼",
            volume: "å–å¼•é«˜",
            trust_score: "ãƒˆãƒ©ã‚¹ãƒˆã‚¹ã‚³ã‚¢",
            view_price_chart: "ä¾¡æ ¼ãƒãƒ£ãƒ¼ãƒˆã‚’è¡¨ç¤º",
            powered_by: " %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   "056c": function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "ç¸½å¸‚å€¼æŽ’å",
            mcap: "ç¸½å¸‚å€¼",
            "24h_volume": "24 å°æ™‚äº¤æ˜“é‡",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} æä¾›",
            crypto_price_comparison: "åŠ å¯†è²¨å¹£åŒ¯çŽ‡æ¯”è¼ƒ",
            crypto_market_cap_comparison: "åŠ å¯†è²¨å¹£ç¸½å¸‚å€¼æ¯”è¼ƒ"
         },
         coin_price_static_headline_widget: {
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} æä¾›"
         },
         coin_price_chart_widget: {
            "24h_high": "24 å°æ™‚é«˜åƒ¹",
            "24h_low": "24 å°æ™‚ä½Žåƒ¹",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
         },
         coin_price_marquee_widget: {
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} æä¾›"
         },
         coin_list_widget: {
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
         },
         beam_widget: {
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} æä¾›"
         },
         coin_ticker_widget: {
            "24h_high": "24 å°æ™‚é«˜åƒ¹",
            "24h_low": "24 å°æ™‚ä½Žåƒ¹",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} æä¾›"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} æä¾›"
         },
         coin_heatmap_widget: {
            title: "åŠ å¯†è²¨å¹£æ¨¹ç‹€åœ–",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} æä¾›"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "24 å°æ™‚äº¤æ˜“é‡",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "äº¤æ˜“æ¨™çš„",
            pair: "å°",
            price: "åƒ¹æ ¼",
            volume: "äº¤æ˜“é‡",
            trust_score: "ä¿¡ä»»åˆ†æ•¸",
            view_price_chart: "æŸ¥çœ‹åŒ¯çŽ‡èµ°å‹¢åœ–",
            powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} æä¾›",
            view_all: "View all %{coin} markets"
         }
      }
   },
   "0825": function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "Classifica cap. di mercato",
            mcap: "Cap. di mercato",
            "24h_volume": "Volume nelle ultime 24 ore",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "Offerto da %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "Prezzi delle criptovalute aÂ confronto",
            crypto_market_cap_comparison: "Capitalizzazione di mercato delle criptovalute aÂ confronto"
         },
         coin_price_static_headline_widget: {
            powered_by: "Offerto da %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "Massimo in 24 ore",
            "24h_low": "Minimo in 24 ore",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Offerto da %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "Offerto da %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "Offerto da %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "Offerto da %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "Massimo in 24 ore",
            "24h_low": "Minimo in 24 ore",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Offerto da %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Offerto da %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "Mappa ad albero delle criptovalute",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "Offerto da %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "Volume nelle 24 ore",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "Exchange",
            pair: "Coppia",
            price: "Prezzo",
            volume: "Volume",
            trust_score: "Punteggio di fiducia",
            view_price_chart: "Vedi il grafico dei prezzi",
            powered_by: "Offerto da %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   "097d": function (t, e, i) {
      "use strict";
      var n = i("5ca1"),
         r = i("8378"),
         o = i("7726"),
         a = i("ebd6"),
         s = i("bcaa");
      n(n.P + n.R, "Promise", {
         finally: function (t) {
            var e = a(this, r.Promise || o.Promise),
               i = "function" == typeof t;
            return this.then(i ? function (i) {
               return s(e, t()).then(function () {
                  return i
               })
            } : t, i ? function (i) {
               return s(e, t()).then(function () {
                  throw i
               })
            } : t)
         }
      })
   },
   "0a0a": function (t, e, i) {
      var n = i("da3c"),
         r = i("a7d3"),
         o = i("b457"),
         a = i("fda1"),
         s = i("3adc").f;
      t.exports = function (t) {
         var e = r.Symbol || (r.Symbol = o ? {} : n.Symbol || {});
         "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
         })
      }
   },
   "0bfb": function (t, e, i) {
      "use strict";
      var n = i("cb7c");
      t.exports = function () {
         var t = n(this),
            e = "";
         return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
      }
   },
   "0d58": function (t, e, i) {
      var n = i("ce10"),
         r = i("e11e");
      t.exports = Object.keys || function (t) {
         return n(t, r)
      }
   },
   "0f01": function (t, e, i) {
      "use strict";
      var n = i("e9ac"),
         r = n("%Object%"),
         o = n("%TypeError%"),
         a = n("%String%"),
         s = i("c46d"),
         c = i("2057"),
         l = i("c612"),
         h = i("5975"),
         d = i("bb53"),
         u = i("21d0"),
         p = i("2f17"),
         f = i("a0d3"),
         m = {
            ToPrimitive: p,
            ToBoolean: function (t) {
               return !!t
            },
            ToNumber: function (t) {
               return +t
            },
            ToInteger: function (t) {
               var e = this.ToNumber(t);
               return c(e) ? 0 : 0 !== e && l(e) ? h(e) * Math.floor(Math.abs(e)) : e
            },
            ToInt32: function (t) {
               return this.ToNumber(t) >> 0
            },
            ToUint32: function (t) {
               return this.ToNumber(t) >>> 0
            },
            ToUint16: function (t) {
               var e = this.ToNumber(t);
               if (c(e) || 0 === e || !l(e)) return 0;
               var i = h(e) * Math.floor(Math.abs(e));
               return d(i, 65536)
            },
            ToString: function (t) {
               return a(t)
            },
            ToObject: function (t) {
               return this.CheckObjectCoercible(t), r(t)
            },
            CheckObjectCoercible: function (t, e) {
               if (null == t) throw new o(e || "Cannot call method on " + t);
               return t
            },
            IsCallable: u,
            SameValue: function (t, e) {
               return t === e ? 0 !== t || 1 / t === 1 / e : c(t) && c(e)
            },
            Type: function (t) {
               return null === t ? "Null" : "undefined" === typeof t ? "Undefined" : "function" === typeof t || "object" === typeof t ? "Object" : "number" === typeof t ? "Number" : "boolean" === typeof t ? "Boolean" : "string" === typeof t ? "String" : void 0
            },
            IsPropertyDescriptor: function (t) {
               if ("Object" !== this.Type(t)) return !1;
               var e = {
                  "[[Configurable]]": !0,
                  "[[Enumerable]]": !0,
                  "[[Get]]": !0,
                  "[[Set]]": !0,
                  "[[Value]]": !0,
                  "[[Writable]]": !0
               };
               for (var i in t)
                  if (f(t, i) && !e[i]) return !1;
               var n = f(t, "[[Value]]"),
                  r = f(t, "[[Get]]") || f(t, "[[Set]]");
               if (n && r) throw new o("Property Descriptors may not be both accessor and data descriptors");
               return !0
            },
            IsAccessorDescriptor: function (t) {
               return "undefined" !== typeof t && (s(this, "Property Descriptor", "Desc", t), !(!f(t, "[[Get]]") && !f(t, "[[Set]]")))
            },
            IsDataDescriptor: function (t) {
               return "undefined" !== typeof t && (s(this, "Property Descriptor", "Desc", t), !(!f(t, "[[Value]]") && !f(t, "[[Writable]]")))
            },
            IsGenericDescriptor: function (t) {
               return "undefined" !== typeof t && (s(this, "Property Descriptor", "Desc", t), !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t))
            },
            FromPropertyDescriptor: function (t) {
               if ("undefined" === typeof t) return t;
               if (s(this, "Property Descriptor", "Desc", t), this.IsDataDescriptor(t)) return {
                  value: t["[[Value]]"],
                  writable: !!t["[[Writable]]"],
                  enumerable: !!t["[[Enumerable]]"],
                  configurable: !!t["[[Configurable]]"]
               };
               if (this.IsAccessorDescriptor(t)) return {
                  get: t["[[Get]]"],
                  set: t["[[Set]]"],
                  enumerable: !!t["[[Enumerable]]"],
                  configurable: !!t["[[Configurable]]"]
               };
               throw new o("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
            },
            ToPropertyDescriptor: function (t) {
               if ("Object" !== this.Type(t)) throw new o("ToPropertyDescriptor requires an object");
               var e = {};
               if (f(t, "enumerable") && (e["[[Enumerable]]"] = this.ToBoolean(t.enumerable)), f(t, "configurable") && (e["[[Configurable]]"] = this.ToBoolean(t.configurable)), f(t, "value") && (e["[[Value]]"] = t.value), f(t, "writable") && (e["[[Writable]]"] = this.ToBoolean(t.writable)), f(t, "get")) {
                  var i = t.get;
                  if ("undefined" !== typeof i && !this.IsCallable(i)) throw new TypeError("getter must be a function");
                  e["[[Get]]"] = i
               }
               if (f(t, "set")) {
                  var n = t.set;
                  if ("undefined" !== typeof n && !this.IsCallable(n)) throw new o("setter must be a function");
                  e["[[Set]]"] = n
               }
               if ((f(e, "[[Get]]") || f(e, "[[Set]]")) && (f(e, "[[Value]]") || f(e, "[[Writable]]"))) throw new o("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
               return e
            }
         };
      t.exports = m
   },
   "0f7c": function (t, e, i) {
      "use strict";
      var n = i("688e");
      t.exports = Function.prototype.bind || n
   },
   "0f89": function (t, e, i) {
      var n = i("6f8a");
      t.exports = function (t) {
         if (!n(t)) throw TypeError(t + " is not an object!");
         return t
      }
   },
   "103a": function (t, e, i) {
      var n = i("da3c").document;
      t.exports = n && n.documentElement
   },
   "11e9": function (t, e, i) {
      var n = i("52a7"),
         r = i("4630"),
         o = i("6821"),
         a = i("6a99"),
         s = i("69a8"),
         c = i("c69a"),
         l = Object.getOwnPropertyDescriptor;
      e.f = i("9e1e") ? l : function (t, e) {
         if (t = o(t), e = a(e, !0), c) try {
            return l(t, e)
         } catch (i) {}
         if (s(t, e)) return r(!n.f.call(t, e), t[e])
      }
   },
   "12fd": function (t, e, i) {
      var n = i("6f8a"),
         r = i("da3c").document,
         o = n(r) && n(r.createElement);
      t.exports = function (t) {
         return o ? r.createElement(t) : {}
      }
   },
   "12fd9": function (t, e) {},
   1495: function (t, e, i) {
      var n = i("86cc"),
         r = i("cb7c"),
         o = i("0d58");
      t.exports = i("9e1e") ? Object.defineProperties : function (t, e) {
         r(t);
         var i, a = o(e),
            s = a.length,
            c = 0;
         while (s > c) n.f(t, i = a[c++], e[i]);
         return t
      }
   },
   "196c": function (t, e) {
      t.exports = function (t, e, i) {
         var n = void 0 === i;
         switch (e.length) {
            case 0:
               return n ? t() : t.call(i);
            case 1:
               return n ? t(e[0]) : t.call(i, e[0]);
            case 2:
               return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
            case 3:
               return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
            case 4:
               return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
         }
         return t.apply(i, e)
      }
   },
   1991: function (t, e, i) {
      var n, r, o, a = i("9b43"),
         s = i("31f4"),
         c = i("fab2"),
         l = i("230e"),
         h = i("7726"),
         d = h.process,
         u = h.setImmediate,
         p = h.clearImmediate,
         f = h.MessageChannel,
         m = h.Dispatch,
         g = 0,
         v = {},
         y = "onreadystatechange",
         x = function () {
            var t = +this;
            if (v.hasOwnProperty(t)) {
               var e = v[t];
               delete v[t], e()
            }
         },
         b = function (t) {
            x.call(t.data)
         };
      u && p || (u = function (t) {
         var e = [],
            i = 1;
         while (arguments.length > i) e.push(arguments[i++]);
         return v[++g] = function () {
            s("function" == typeof t ? t : Function(t), e)
         }, n(g), g
      }, p = function (t) {
         delete v[t]
      }, "process" == i("2d95")(d) ? n = function (t) {
         d.nextTick(a(x, t, 1))
      } : m && m.now ? n = function (t) {
         m.now(a(x, t, 1))
      } : f ? (r = new f, o = r.port2, r.port1.onmessage = b, n = a(o.postMessage, o, 1)) : h.addEventListener && "function" == typeof postMessage && !h.importScripts ? (n = function (t) {
         h.postMessage(t + "", "*")
      }, h.addEventListener("message", b, !1)) : n = y in l("script") ? function (t) {
         c.appendChild(l("script"))[y] = function () {
            c.removeChild(this), x.call(t)
         }
      } : function (t) {
         setTimeout(a(x, t, 1), 0)
      }), t.exports = {
         set: u,
         clear: p
      }
   },
   "1b55": function (t, e, i) {
      var n = i("7772")("wks"),
         r = i("7b00"),
         o = i("da3c").Symbol,
         a = "function" == typeof o,
         s = t.exports = function (t) {
            return n[t] || (n[t] = a && o[t] || (a ? o : r)("Symbol." + t))
         };
      s.store = n
   },
   "1b7f": function (t, e, i) {
      "use strict";
      var n = i("562e"),
         r = "â€‹";
      t.exports = function () {
         return String.prototype.trim && r.trim() === r ? String.prototype.trim : n
      }
   },
   "1b8f": function (t, e, i) {
      var n = i("a812"),
         r = Math.max,
         o = Math.min;
      t.exports = function (t, e) {
         return t = n(t), t < 0 ? r(t + e, 0) : o(t, e)
      }
   },
   "1be4": function (t, e, i) {
      "use strict";
      var n = i("da3c"),
         r = i("a7d3"),
         o = i("3adc"),
         a = i("7d95"),
         s = i("1b55")("species");
      t.exports = function (t) {
         var e = "function" == typeof r[t] ? r[t] : n[t];
         a && e && !e[s] && o.f(e, s, {
            configurable: !0,
            get: function () {
               return this
            }
         })
      }
   },
   "1fa8": function (t, e, i) {
      var n = i("cb7c");
      t.exports = function (t, e, i, r) {
         try {
            return r ? e(n(i)[0], i[1]) : e(i)
         } catch (a) {
            var o = t["return"];
            throw void 0 !== o && n(o.call(t)), a
         }
      }
   },
   2057: function (t, e) {
      t.exports = Number.isNaN || function (t) {
         return t !== t
      }
   },
   "210c": function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "Nilai Kapitalisasi Pasar",
            mcap: "Kapitalisasi Pasar",
            "24h_volume": "Volume 24 Jam",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "Perbandingan Harga Crypto",
            crypto_market_cap_comparison: "Perbandingan Kapitalisasi Pasar Crypto"
         },
         coin_price_static_headline_widget: {
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "24J Tinggi",
            "24h_low": "24J Rendah",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "24J Tinggi",
            "24h_low": "24J Rendah",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "Peta Pohon Cryptocurrency",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "Volume 24 Jam",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "Pusat Perdagangan",
            pair: "Pasangan",
            price: "Harga",
            volume: "Volume",
            trust_score: "Skor Kepercayaan",
            view_price_chart: "Lihat Grafik Harga",
            powered_by: "Didukung oleh %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   "214f": function (t, e, i) {
      "use strict";
      i("b0c5");
      var n = i("2aba"),
         r = i("32e9"),
         o = i("79e5"),
         a = i("be13"),
         s = i("2b4c"),
         c = i("520a"),
         l = s("species"),
         h = !o(function () {
            var t = /./;
            return t.exec = function () {
               var t = [];
               return t.groups = {
                  a: "7"
               }, t
            }, "7" !== "".replace(t, "$<a>")
         }),
         d = function () {
            var t = /(?:)/,
               e = t.exec;
            t.exec = function () {
               return e.apply(this, arguments)
            };
            var i = "ab".split(t);
            return 2 === i.length && "a" === i[0] && "b" === i[1]
         }();
      t.exports = function (t, e, i) {
         var u = s(t),
            p = !o(function () {
               var e = {};
               return e[u] = function () {
                  return 7
               }, 7 != "" [t](e)
            }),
            f = p ? !o(function () {
               var e = !1,
                  i = /a/;
               return i.exec = function () {
                  return e = !0, null
               }, "split" === t && (i.constructor = {}, i.constructor[l] = function () {
                  return i
               }), i[u](""), !e
            }) : void 0;
         if (!p || !f || "replace" === t && !h || "split" === t && !d) {
            var m = /./ [u],
               g = i(a, u, "" [t], function (t, e, i, n, r) {
                  return e.exec === c ? p && !r ? {
                     done: !0,
                     value: m.call(e, i, n)
                  } : {
                     done: !0,
                     value: t.call(i, e, n)
                  } : {
                     done: !1
                  }
               }),
               v = g[0],
               y = g[1];
            n(String.prototype, t, v), r(RegExp.prototype, u, 2 == e ? function (t, e) {
               return y.call(t, this, e)
            } : function (t) {
               return y.call(t, this)
            })
         }
      }
   },
   "21d0": function (t, e, i) {
      "use strict";
      var n = Function.prototype.toString,
         r = /^\s*class\b/,
         o = function (t) {
            try {
               var e = n.call(t);
               return r.test(e)
            } catch (i) {
               return !1
            }
         },
         a = function (t) {
            try {
               return !o(t) && (n.call(t), !0)
            } catch (e) {
               return !1
            }
         },
         s = Object.prototype.toString,
         c = "[object Function]",
         l = "[object GeneratorFunction]",
         h = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag;
      t.exports = function (t) {
         if (!t) return !1;
         if ("function" !== typeof t && "object" !== typeof t) return !1;
         if ("function" === typeof t && !t.prototype) return !0;
         if (h) return a(t);
         if (o(t)) return !1;
         var e = s.call(t);
         return e === c || e === l
      }
   },
   "230e": function (t, e, i) {
      var n = i("d3f4"),
         r = i("7726").document,
         o = n(r) && n(r.createElement);
      t.exports = function (t) {
         return o ? r.createElement(t) : {}
      }
   },
   2312: function (t, e, i) {
      t.exports = i("8ce0")
   },
   2350: function (t, e) {
      function i(t, e) {
         var i = t[1] || "",
            r = t[3];
         if (!r) return i;
         if (e && "function" === typeof btoa) {
            var o = n(r),
               a = r.sources.map(function (t) {
                  return "/*# sourceURL=" + r.sourceRoot + t + " */"
               });
            return [i].concat(a).concat([o]).join("\n")
         }
         return [i].join("\n")
      }

      function n(t) {
         var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
            i = "sourceMappingURL=data:application/json;charset=utf-8;base64," + e;
         return "/*# " + i + " */"
      }
      t.exports = function (t) {
         var e = [];
         return e.toString = function () {
            return this.map(function (e) {
               var n = i(e, t);
               return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
         }, e.i = function (t, i) {
            "string" === typeof t && (t = [
               [null, t, ""]
            ]);
            for (var n = {}, r = 0; r < this.length; r++) {
               var o = this[r][0];
               "number" === typeof o && (n[o] = !0)
            }
            for (r = 0; r < t.length; r++) {
               var a = t[r];
               "number" === typeof a[0] && n[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), e.push(a))
            }
         }, e
      }
   },
   "23c6": function (t, e, i) {
      var n = i("2d95"),
         r = i("2b4c")("toStringTag"),
         o = "Arguments" == n(function () {
            return arguments
         }()),
         a = function (t, e) {
            try {
               return t[e]
            } catch (i) {}
         };
      t.exports = function (t) {
         var e, i, s;
         return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = a(e = Object(t), r)) ? i : o ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
      }
   },
   2418: function (t, e, i) {
      var n = i("6a9b"),
         r = i("a5ab"),
         o = i("1b8f");
      t.exports = function (t) {
         return function (e, i, a) {
            var s, c = n(e),
               l = r(c.length),
               h = o(a, l);
            if (t && i != i) {
               while (l > h)
                  if (s = c[h++], s != s) return !0
            } else
               for (; l > h; h++)
                  if ((t || h in c) && c[h] === i) return t || h || 0;
            return !t && -1
         }
      }
   },
   "245b": function (t, e) {
      t.exports = function (t, e) {
         return {
            value: e,
            done: !!t
         }
      }
   },
   2695: function (t, e, i) {
      var n = i("43c8"),
         r = i("6a9b"),
         o = i("2418")(!1),
         a = i("5d8f")("IE_PROTO");
      t.exports = function (t, e) {
         var i, s = r(t),
            c = 0,
            l = [];
         for (i in s) i != a && n(s, i) && l.push(i);
         while (e.length > c) n(s, i = e[c++]) && (~o(l, i) || l.push(i));
         return l
      }
   },
   "27ee": function (t, e, i) {
      var n = i("23c6"),
         r = i("2b4c")("iterator"),
         o = i("84f2");
      t.exports = i("8378").getIteratorMethod = function (t) {
         if (void 0 != t) return t[r] || t["@@iterator"] || o[n(t)]
      }
   },
   2877: function (t, e, i) {
      "use strict";

      function n(t, e, i, n, r, o, a, s) {
         var c, l = "function" === typeof t ? t.options : t;
         if (e && (l.render = e, l.staticRenderFns = i, l._compiled = !0), n && (l.functional = !0), o && (l._scopeId = "data-v-" + o), a ? (c = function (t) {
               t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
            }, l._ssrRegister = c) : r && (c = s ? function () {
               r.call(this, this.$root.$options.shadowRoot)
            } : r), c)
            if (l.functional) {
               l._injectStyles = c;
               var h = l.render;
               l.render = function (t, e) {
                  return c.call(e), h(t, e)
               }
            } else {
               var d = l.beforeCreate;
               l.beforeCreate = d ? [].concat(d, c) : [c]
            } return {
            exports: t,
            options: l
         }
      }
      i.d(e, "a", function () {
         return n
      })
   },
   "288a": function (t, e, i) {
      "use strict";
      var n = i("d024"),
         r = i("fa4e"),
         o = i("a0d3"),
         a = i("ca9f"),
         s = function (t) {
            r(!1, t)
         },
         c = String.prototype.replace,
         l = String.prototype.split,
         h = "||||",
         d = function (t) {
            var e = t % 10;
            return 11 !== t && 1 === e ? 0 : 2 <= e && e <= 4 && !(t >= 12 && t <= 14) ? 1 : 2
         },
         u = {
            arabic: function (t) {
               if (t < 3) return t;
               var e = t % 100;
               return e >= 3 && e <= 10 ? 3 : e >= 11 ? 4 : 5
            },
            bosnian_serbian: d,
            chinese: function () {
               return 0
            },
            croatian: d,
            french: function (t) {
               return t > 1 ? 1 : 0
            },
            german: function (t) {
               return 1 !== t ? 1 : 0
            },
            russian: d,
            lithuanian: function (t) {
               return t % 10 === 1 && t % 100 !== 11 ? 0 : t % 10 >= 2 && t % 10 <= 9 && (t % 100 < 11 || t % 100 > 19) ? 1 : 2
            },
            czech: function (t) {
               return 1 === t ? 0 : t >= 2 && t <= 4 ? 1 : 2
            },
            polish: function (t) {
               if (1 === t) return 0;
               var e = t % 10;
               return 2 <= e && e <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
            },
            icelandic: function (t) {
               return t % 10 !== 1 || t % 100 === 11 ? 1 : 0
            },
            slovenian: function (t) {
               var e = t % 100;
               return 1 === e ? 0 : 2 === e ? 1 : 3 === e || 4 === e ? 2 : 3
            }
         },
         p = {
            arabic: ["ar"],
            bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
            chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
            croatian: ["hr", "hr-HR"],
            german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
            french: ["fr", "tl", "pt-br"],
            russian: ["ru", "ru-RU"],
            lithuanian: ["lt"],
            czech: ["cs", "cs-CZ", "sk"],
            polish: ["pl"],
            icelandic: ["is"],
            slovenian: ["sl-SL"]
         };

      function f(t) {
         var e = {};
         return n(t, function (t, i) {
            n(t, function (t) {
               e[t] = i
            })
         }), e
      }

      function m(t) {
         var e = f(p);
         return e[t] || e[l.call(t, /-/, 1)[0]] || e.en
      }

      function g(t, e) {
         return u[m(t)](e)
      }

      function v(t) {
         return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      }

      function y(t) {
         var e = t && t.prefix || "%{",
            i = t && t.suffix || "}";
         if (e === h || i === h) throw new RangeError('"' + h + '" token is reserved for pluralization');
         return new RegExp(v(e) + "(.*?)" + v(i), "g")
      }
      var x = /\$/g,
         b = "$$",
         _ = /%\{(.*?)\}/g;

      function w(t, e, i, n) {
         if ("string" !== typeof t) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
         if (null == e) return t;
         var r = t,
            s = n || _,
            d = "number" === typeof e ? {
               smart_count: e
            } : e;
         if (null != d.smart_count && r) {
            var u = l.call(r, h);
            r = a(u[g(i || "en", d.smart_count)] || u[0])
         }
         return r = c.call(r, s, function (t, e) {
            return o(d, e) && null != d[e] ? c.call(d[e], x, b) : t
         }), r
      }

      function k(t) {
         var e = t || {};
         this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en";
         var i = e.allowMissing ? w : null;
         this.onMissingKey = "function" === typeof e.onMissingKey ? e.onMissingKey : i, this.warn = e.warn || s, this.tokenRegex = y(e.interpolation)
      }
      k.prototype.locale = function (t) {
         return t && (this.currentLocale = t), this.currentLocale
      }, k.prototype.extend = function (t, e) {
         n(t, function (t, i) {
            var n = e ? e + "." + i : i;
            "object" === typeof t ? this.extend(t, n) : this.phrases[n] = t
         }, this)
      }, k.prototype.unset = function (t, e) {
         "string" === typeof t ? delete this.phrases[t] : n(t, function (t, i) {
            var n = e ? e + "." + i : i;
            "object" === typeof t ? this.unset(t, n) : delete this.phrases[n]
         }, this)
      }, k.prototype.clear = function () {
         this.phrases = {}
      }, k.prototype.replace = function (t) {
         this.clear(), this.extend(t)
      }, k.prototype.t = function (t, e) {
         var i, n, r = null == e ? {} : e;
         if ("string" === typeof this.phrases[t]) i = this.phrases[t];
         else if ("string" === typeof r._) i = r._;
         else if (this.onMissingKey) {
            var o = this.onMissingKey;
            n = o(t, r, this.currentLocale, this.tokenRegex)
         } else this.warn('Missing translation for key: "' + t + '"'), n = t;
         return "string" === typeof i && (n = w(i, r, this.currentLocale, this.tokenRegex)), n
      }, k.prototype.has = function (t) {
         return o(this.phrases, t)
      }, k.transformPhrase = function (t, e, i) {
         return w(t, e, i)
      }, t.exports = k
   },
   "28a5": function (t, e, i) {
      "use strict";
      var n = i("aae3"),
         r = i("cb7c"),
         o = i("ebd6"),
         a = i("0390"),
         s = i("9def"),
         c = i("5f1b"),
         l = i("520a"),
         h = i("79e5"),
         d = Math.min,
         u = [].push,
         p = "split",
         f = "length",
         m = "lastIndex",
         g = 4294967295,
         v = !h(function () {
            RegExp(g, "y")
         });
      i("214f")("split", 2, function (t, e, i, h) {
         var y;
         return y = "c" == "abbc" [p](/(b)*/)[1] || 4 != "test" [p](/(?:)/, -1)[f] || 2 != "ab" [p](/(?:ab)*/)[f] || 4 != "." [p](/(.?)(.?)/)[f] || "." [p](/()()/)[f] > 1 || "" [p](/.?/)[f] ? function (t, e) {
            var r = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!n(t)) return i.call(r, t, e);
            var o, a, s, c = [],
               h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
               d = 0,
               p = void 0 === e ? g : e >>> 0,
               v = new RegExp(t.source, h + "g");
            while (o = l.call(v, r)) {
               if (a = v[m], a > d && (c.push(r.slice(d, o.index)), o[f] > 1 && o.index < r[f] && u.apply(c, o.slice(1)), s = o[0][f], d = a, c[f] >= p)) break;
               v[m] === o.index && v[m]++
            }
            return d === r[f] ? !s && v.test("") || c.push("") : c.push(r.slice(d)), c[f] > p ? c.slice(0, p) : c
         } : "0" [p](void 0, 0)[f] ? function (t, e) {
            return void 0 === t && 0 === e ? [] : i.call(this, t, e)
         } : i, [function (i, n) {
            var r = t(this),
               o = void 0 == i ? void 0 : i[e];
            return void 0 !== o ? o.call(i, r, n) : y.call(String(r), i, n)
         }, function (t, e) {
            var n = h(y, t, this, e, y !== i);
            if (n.done) return n.value;
            var l = r(t),
               u = String(this),
               p = o(l, RegExp),
               f = l.unicode,
               m = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (v ? "y" : "g"),
               x = new p(v ? l : "^(?:" + l.source + ")", m),
               b = void 0 === e ? g : e >>> 0;
            if (0 === b) return [];
            if (0 === u.length) return null === c(x, u) ? [u] : [];
            var _ = 0,
               w = 0,
               k = [];
            while (w < u.length) {
               x.lastIndex = v ? w : 0;
               var S, M = c(x, v ? u : u.slice(w));
               if (null === M || (S = d(s(x.lastIndex + (v ? 0 : w)), u.length)) === _) w = a(u, w, f);
               else {
                  if (k.push(u.slice(_, w)), k.length === b) return k;
                  for (var A = 1; A <= M.length - 1; A++)
                     if (k.push(M[A]), k.length === b) return k;
                  w = _ = S
               }
            }
            return k.push(u.slice(_)), k
         }]
      })
   },
   "2a4e": function (t, e, i) {
      var n = i("a812"),
         r = i("e5fa");
      t.exports = function (t) {
         return function (e, i) {
            var o, a, s = String(r(e)),
               c = n(i),
               l = s.length;
            return c < 0 || c >= l ? t ? "" : void 0 : (o = s.charCodeAt(c), o < 55296 || o > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536)
         }
      }
   },
   "2aba": function (t, e, i) {
      var n = i("7726"),
         r = i("32e9"),
         o = i("69a8"),
         a = i("ca5a")("src"),
         s = i("fa5b"),
         c = "toString",
         l = ("" + s).split(c);
      i("8378").inspectSource = function (t) {
         return s.call(t)
      }, (t.exports = function (t, e, i, s) {
         var c = "function" == typeof i;
         c && (o(i, "name") || r(i, "name", e)), t[e] !== i && (c && (o(i, a) || r(i, a, t[e] ? "" + t[e] : l.join(String(e)))), t === n ? t[e] = i : s ? t[e] ? t[e] = i : r(t, e, i) : (delete t[e], r(t, e, i)))
      })(Function.prototype, c, function () {
         return "function" == typeof this && this[a] || s.call(this)
      })
   },
   "2aeb": function (t, e, i) {
      var n = i("cb7c"),
         r = i("1495"),
         o = i("e11e"),
         a = i("613b")("IE_PROTO"),
         s = function () {},
         c = "prototype",
         l = function () {
            var t, e = i("230e")("iframe"),
               n = o.length,
               r = "<",
               a = ">";
            e.style.display = "none", i("fab2").appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(r + "script" + a + "document.F=Object" + r + "/script" + a), t.close(), l = t.F;
            while (n--) delete l[c][o[n]];
            return l()
         };
      t.exports = Object.create || function (t, e) {
         var i;
         return null !== t ? (s[c] = n(t), i = new s, s[c] = null, i[a] = t) : i = l(), void 0 === e ? i : r(i, e)
      }
   },
   "2b0e": function (t, e, i) {
      "use strict";
      (function (t) {
         /*!
          * Vue.js v2.5.21
          * (c) 2014-2018 Evan You
          * Released under the MIT License.
          */
         var i = Object.freeze({});

         function n(t) {
            return void 0 === t || null === t
         }

         function r(t) {
            return void 0 !== t && null !== t
         }

         function o(t) {
            return !0 === t
         }

         function a(t) {
            return !1 === t
         }

         function s(t) {
            return "string" === typeof t || "number" === typeof t || "symbol" === typeof t || "boolean" === typeof t
         }

         function c(t) {
            return null !== t && "object" === typeof t
         }
         var l = Object.prototype.toString;

         function h(t) {
            return "[object Object]" === l.call(t)
         }

         function d(t) {
            return "[object RegExp]" === l.call(t)
         }

         function u(t) {
            var e = parseFloat(String(t));
            return e >= 0 && Math.floor(e) === e && isFinite(t)
         }

         function p(t) {
            return null == t ? "" : "object" === typeof t ? JSON.stringify(t, null, 2) : String(t)
         }

         function f(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e
         }

         function m(t, e) {
            for (var i = Object.create(null), n = t.split(","), r = 0; r < n.length; r++) i[n[r]] = !0;
            return e ? function (t) {
               return i[t.toLowerCase()]
            } : function (t) {
               return i[t]
            }
         }
         m("slot,component", !0);
         var g = m("key,ref,slot,slot-scope,is");

         function v(t, e) {
            if (t.length) {
               var i = t.indexOf(e);
               if (i > -1) return t.splice(i, 1)
            }
         }
         var y = Object.prototype.hasOwnProperty;

         function x(t, e) {
            return y.call(t, e)
         }

         function b(t) {
            var e = Object.create(null);
            return function (i) {
               var n = e[i];
               return n || (e[i] = t(i))
            }
         }
         var _ = /-(\w)/g,
            w = b(function (t) {
               return t.replace(_, function (t, e) {
                  return e ? e.toUpperCase() : ""
               })
            }),
            k = b(function (t) {
               return t.charAt(0).toUpperCase() + t.slice(1)
            }),
            S = /\B([A-Z])/g,
            M = b(function (t) {
               return t.replace(S, "-$1").toLowerCase()
            });

         function A(t, e) {
            function i(i) {
               var n = arguments.length;
               return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e)
            }
            return i._length = t.length, i
         }

         function C(t, e) {
            return t.bind(e)
         }
         var P = Function.prototype.bind ? C : A;

         function T(t, e) {
            e = e || 0;
            var i = t.length - e,
               n = new Array(i);
            while (i--) n[i] = t[i + e];
            return n
         }

         function O(t, e) {
            for (var i in e) t[i] = e[i];
            return t
         }

         function L(t) {
            for (var e = {}, i = 0; i < t.length; i++) t[i] && O(e, t[i]);
            return e
         }

         function D(t, e, i) {}
         var E = function (t, e, i) {
               return !1
            },
            I = function (t) {
               return t
            };

         function z(t, e) {
            if (t === e) return !0;
            var i = c(t),
               n = c(e);
            if (!i || !n) return !i && !n && String(t) === String(e);
            try {
               var r = Array.isArray(t),
                  o = Array.isArray(e);
               if (r && o) return t.length === e.length && t.every(function (t, i) {
                  return z(t, e[i])
               });
               if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
               if (r || o) return !1;
               var a = Object.keys(t),
                  s = Object.keys(e);
               return a.length === s.length && a.every(function (i) {
                  return z(t[i], e[i])
               })
            } catch (l) {
               return !1
            }
         }

         function B(t, e) {
            for (var i = 0; i < t.length; i++)
               if (z(t[i], e)) return i;
            return -1
         }

         function N(t) {
            var e = !1;
            return function () {
               e || (e = !0, t.apply(this, arguments))
            }
         }
         var R = "data-server-rendered",
            j = ["component", "directive", "filter"],
            H = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
            G = {
               optionMergeStrategies: Object.create(null),
               silent: !1,
               productionTip: !1,
               devtools: !1,
               performance: !1,
               errorHandler: null,
               warnHandler: null,
               ignoredElements: [],
               keyCodes: Object.create(null),
               isReservedTag: E,
               isReservedAttr: E,
               isUnknownElement: E,
               getTagNamespace: D,
               parsePlatformTagName: I,
               mustUseProp: E,
               async: !0,
               _lifecycleHooks: H
            };

         function F(t) {
            var e = (t + "").charCodeAt(0);
            return 36 === e || 95 === e
         }

         function W(t, e, i, n) {
            Object.defineProperty(t, e, {
               value: i,
               enumerable: !!n,
               writable: !0,
               configurable: !0
            })
         }
         var $ = /[^\w.$]/;

         function X(t) {
            if (!$.test(t)) {
               var e = t.split(".");
               return function (t) {
                  for (var i = 0; i < e.length; i++) {
                     if (!t) return;
                     t = t[e[i]]
                  }
                  return t
               }
            }
         }
         var V, Y = "__proto__" in {},
            U = "undefined" !== typeof window,
            K = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
            q = K && WXEnvironment.platform.toLowerCase(),
            Z = U && window.navigator.userAgent.toLowerCase(),
            J = Z && /msie|trident/.test(Z),
            Q = Z && Z.indexOf("msie 9.0") > 0,
            tt = Z && Z.indexOf("edge/") > 0,
            et = (Z && Z.indexOf("android"), Z && /iphone|ipad|ipod|ios/.test(Z) || "ios" === q),
            it = (Z && /chrome\/\d+/.test(Z), {}.watch),
            nt = !1;
         if (U) try {
            var rt = {};
            Object.defineProperty(rt, "passive", {
               get: function () {
                  nt = !0
               }
            }), window.addEventListener("test-passive", null, rt)
         } catch (sa) {}
         var ot = function () {
               return void 0 === V && (V = !U && !K && "undefined" !== typeof t && (t["process"] && "server" === t["process"].env.VUE_ENV)), V
            },
            at = U && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

         function st(t) {
            return "function" === typeof t && /native code/.test(t.toString())
         }
         var ct, lt = "undefined" !== typeof Symbol && st(Symbol) && "undefined" !== typeof Reflect && st(Reflect.ownKeys);
         ct = "undefined" !== typeof Set && st(Set) ? Set : function () {
            function t() {
               this.set = Object.create(null)
            }
            return t.prototype.has = function (t) {
               return !0 === this.set[t]
            }, t.prototype.add = function (t) {
               this.set[t] = !0
            }, t.prototype.clear = function () {
               this.set = Object.create(null)
            }, t
         }();
         var ht = D,
            dt = 0,
            ut = function () {
               this.id = dt++, this.subs = []
            };
         ut.prototype.addSub = function (t) {
            this.subs.push(t)
         }, ut.prototype.removeSub = function (t) {
            v(this.subs, t)
         }, ut.prototype.depend = function () {
            ut.target && ut.target.addDep(this)
         }, ut.prototype.notify = function () {
            var t = this.subs.slice();
            for (var e = 0, i = t.length; e < i; e++) t[e].update()
         }, ut.target = null;
         var pt = [];

         function ft(t) {
            pt.push(t), ut.target = t
         }

         function mt() {
            pt.pop(), ut.target = pt[pt.length - 1]
         }
         var gt = function (t, e, i, n, r, o, a, s) {
               this.tag = t, this.data = e, this.children = i, this.text = n, this.elm = r, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            },
            vt = {
               child: {
                  configurable: !0
               }
            };
         vt.child.get = function () {
            return this.componentInstance
         }, Object.defineProperties(gt.prototype, vt);
         var yt = function (t) {
            void 0 === t && (t = "");
            var e = new gt;
            return e.text = t, e.isComment = !0, e
         };

         function xt(t) {
            return new gt(void 0, void 0, void 0, String(t))
         }

         function bt(t) {
            var e = new gt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
            return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e
         }
         var _t = Array.prototype,
            wt = Object.create(_t),
            kt = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
         kt.forEach(function (t) {
            var e = _t[t];
            W(wt, t, function () {
               var i = [],
                  n = arguments.length;
               while (n--) i[n] = arguments[n];
               var r, o = e.apply(this, i),
                  a = this.__ob__;
               switch (t) {
                  case "push":
                  case "unshift":
                     r = i;
                     break;
                  case "splice":
                     r = i.slice(2);
                     break
               }
               return r && a.observeArray(r), a.dep.notify(), o
            })
         });
         var St = Object.getOwnPropertyNames(wt),
            Mt = !0;

         function At(t) {
            Mt = t
         }
         var Ct = function (t) {
            this.value = t, this.dep = new ut, this.vmCount = 0, W(t, "__ob__", this), Array.isArray(t) ? (Y ? Pt(t, wt) : Tt(t, wt, St), this.observeArray(t)) : this.walk(t)
         };

         function Pt(t, e) {
            t.__proto__ = e
         }

         function Tt(t, e, i) {
            for (var n = 0, r = i.length; n < r; n++) {
               var o = i[n];
               W(t, o, e[o])
            }
         }

         function Ot(t, e) {
            var i;
            if (c(t) && !(t instanceof gt)) return x(t, "__ob__") && t.__ob__ instanceof Ct ? i = t.__ob__ : Mt && !ot() && (Array.isArray(t) || h(t)) && Object.isExtensible(t) && !t._isVue && (i = new Ct(t)), e && i && i.vmCount++, i
         }

         function Lt(t, e, i, n, r) {
            var o = new ut,
               a = Object.getOwnPropertyDescriptor(t, e);
            if (!a || !1 !== a.configurable) {
               var s = a && a.get,
                  c = a && a.set;
               s && !c || 2 !== arguments.length || (i = t[e]);
               var l = !r && Ot(i);
               Object.defineProperty(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                     var e = s ? s.call(t) : i;
                     return ut.target && (o.depend(), l && (l.dep.depend(), Array.isArray(e) && It(e))), e
                  },
                  set: function (e) {
                     var n = s ? s.call(t) : i;
                     e === n || e !== e && n !== n || s && !c || (c ? c.call(t, e) : i = e, l = !r && Ot(e), o.notify())
                  }
               })
            }
         }

         function Dt(t, e, i) {
            if (Array.isArray(t) && u(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, i), i;
            if (e in t && !(e in Object.prototype)) return t[e] = i, i;
            var n = t.__ob__;
            return t._isVue || n && n.vmCount ? i : n ? (Lt(n.value, e, i), n.dep.notify(), i) : (t[e] = i, i)
         }

         function Et(t, e) {
            if (Array.isArray(t) && u(e)) t.splice(e, 1);
            else {
               var i = t.__ob__;
               t._isVue || i && i.vmCount || x(t, e) && (delete t[e], i && i.dep.notify())
            }
         }

         function It(t) {
            for (var e = void 0, i = 0, n = t.length; i < n; i++) e = t[i], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && It(e)
         }
         Ct.prototype.walk = function (t) {
            for (var e = Object.keys(t), i = 0; i < e.length; i++) Lt(t, e[i])
         }, Ct.prototype.observeArray = function (t) {
            for (var e = 0, i = t.length; e < i; e++) Ot(t[e])
         };
         var zt = G.optionMergeStrategies;

         function Bt(t, e) {
            if (!e) return t;
            for (var i, n, r, o = Object.keys(e), a = 0; a < o.length; a++) i = o[a], n = t[i], r = e[i], x(t, i) ? n !== r && h(n) && h(r) && Bt(n, r) : Dt(t, i, r);
            return t
         }

         function Nt(t, e, i) {
            return i ? function () {
               var n = "function" === typeof e ? e.call(i, i) : e,
                  r = "function" === typeof t ? t.call(i, i) : t;
               return n ? Bt(n, r) : r
            } : e ? t ? function () {
               return Bt("function" === typeof e ? e.call(this, this) : e, "function" === typeof t ? t.call(this, this) : t)
            } : e : t
         }

         function Rt(t, e) {
            return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
         }

         function jt(t, e, i, n) {
            var r = Object.create(t || null);
            return e ? O(r, e) : r
         }
         zt.data = function (t, e, i) {
            return i ? Nt(t, e, i) : e && "function" !== typeof e ? t : Nt(t, e)
         }, H.forEach(function (t) {
            zt[t] = Rt
         }), j.forEach(function (t) {
            zt[t + "s"] = jt
         }), zt.watch = function (t, e, i, n) {
            if (t === it && (t = void 0), e === it && (e = void 0), !e) return Object.create(t || null);
            if (!t) return e;
            var r = {};
            for (var o in O(r, t), e) {
               var a = r[o],
                  s = e[o];
               a && !Array.isArray(a) && (a = [a]), r[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
            }
            return r
         }, zt.props = zt.methods = zt.inject = zt.computed = function (t, e, i, n) {
            if (!t) return e;
            var r = Object.create(null);
            return O(r, t), e && O(r, e), r
         }, zt.provide = Nt;
         var Ht = function (t, e) {
            return void 0 === e ? t : e
         };

         function Gt(t, e) {
            var i = t.props;
            if (i) {
               var n, r, o, a = {};
               if (Array.isArray(i)) {
                  n = i.length;
                  while (n--) r = i[n], "string" === typeof r && (o = w(r), a[o] = {
                     type: null
                  })
               } else if (h(i))
                  for (var s in i) r = i[s], o = w(s), a[o] = h(r) ? r : {
                     type: r
                  };
               else 0;
               t.props = a
            }
         }

         function Ft(t, e) {
            var i = t.inject;
            if (i) {
               var n = t.inject = {};
               if (Array.isArray(i))
                  for (var r = 0; r < i.length; r++) n[i[r]] = {
                     from: i[r]
                  };
               else if (h(i))
                  for (var o in i) {
                     var a = i[o];
                     n[o] = h(a) ? O({
                        from: o
                     }, a) : {
                        from: a
                     }
                  } else 0
            }
         }

         function Wt(t) {
            var e = t.directives;
            if (e)
               for (var i in e) {
                  var n = e[i];
                  "function" === typeof n && (e[i] = {
                     bind: n,
                     update: n
                  })
               }
         }

         function $t(t, e, i) {
            if ("function" === typeof e && (e = e.options), Gt(e, i), Ft(e, i), Wt(e), !e._base && (e.extends && (t = $t(t, e.extends, i)), e.mixins))
               for (var n = 0, r = e.mixins.length; n < r; n++) t = $t(t, e.mixins[n], i);
            var o, a = {};
            for (o in t) s(o);
            for (o in e) x(t, o) || s(o);

            function s(n) {
               var r = zt[n] || Ht;
               a[n] = r(t[n], e[n], i, n)
            }
            return a
         }

         function Xt(t, e, i, n) {
            if ("string" === typeof i) {
               var r = t[e];
               if (x(r, i)) return r[i];
               var o = w(i);
               if (x(r, o)) return r[o];
               var a = k(o);
               if (x(r, a)) return r[a];
               var s = r[i] || r[o] || r[a];
               return s
            }
         }

         function Vt(t, e, i, n) {
            var r = e[t],
               o = !x(i, t),
               a = i[t],
               s = qt(Boolean, r.type);
            if (s > -1)
               if (o && !x(r, "default")) a = !1;
               else if ("" === a || a === M(t)) {
               var c = qt(String, r.type);
               (c < 0 || s < c) && (a = !0)
            }
            if (void 0 === a) {
               a = Yt(n, r, t);
               var l = Mt;
               At(!0), Ot(a), At(l)
            }
            return a
         }

         function Yt(t, e, i) {
            if (x(e, "default")) {
               var n = e.default;
               return t && t.$options.propsData && void 0 === t.$options.propsData[i] && void 0 !== t._props[i] ? t._props[i] : "function" === typeof n && "Function" !== Ut(e.type) ? n.call(t) : n
            }
         }

         function Ut(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e ? e[1] : ""
         }

         function Kt(t, e) {
            return Ut(t) === Ut(e)
         }

         function qt(t, e) {
            if (!Array.isArray(e)) return Kt(e, t) ? 0 : -1;
            for (var i = 0, n = e.length; i < n; i++)
               if (Kt(e[i], t)) return i;
            return -1
         }

         function Zt(t, e, i) {
            if (e) {
               var n = e;
               while (n = n.$parent) {
                  var r = n.$options.errorCaptured;
                  if (r)
                     for (var o = 0; o < r.length; o++) try {
                        var a = !1 === r[o].call(n, t, e, i);
                        if (a) return
                     } catch (sa) {
                        Jt(sa, n, "errorCaptured hook")
                     }
               }
            }
            Jt(t, e, i)
         }

         function Jt(t, e, i) {
            if (G.errorHandler) try {
               return G.errorHandler.call(null, t, e, i)
            } catch (sa) {
               Qt(sa, null, "config.errorHandler")
            }
            Qt(t, e, i)
         }

         function Qt(t, e, i) {
            if (!U && !K || "undefined" === typeof console) throw t;
            console.error(t)
         }
         var te, ee, ie = [],
            ne = !1;

         function re() {
            ne = !1;
            var t = ie.slice(0);
            ie.length = 0;
            for (var e = 0; e < t.length; e++) t[e]()
         }
         var oe = !1;
         if ("undefined" !== typeof setImmediate && st(setImmediate)) ee = function () {
            setImmediate(re)
         };
         else if ("undefined" === typeof MessageChannel || !st(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) ee = function () {
            setTimeout(re, 0)
         };
         else {
            var ae = new MessageChannel,
               se = ae.port2;
            ae.port1.onmessage = re, ee = function () {
               se.postMessage(1)
            }
         }
         if ("undefined" !== typeof Promise && st(Promise)) {
            var ce = Promise.resolve();
            te = function () {
               ce.then(re), et && setTimeout(D)
            }
         } else te = ee;

         function le(t) {
            return t._withTask || (t._withTask = function () {
               oe = !0;
               try {
                  return t.apply(null, arguments)
               } finally {
                  oe = !1
               }
            })
         }

         function he(t, e) {
            var i;
            if (ie.push(function () {
                  if (t) try {
                     t.call(e)
                  } catch (sa) {
                     Zt(sa, e, "nextTick")
                  } else i && i(e)
               }), ne || (ne = !0, oe ? ee() : te()), !t && "undefined" !== typeof Promise) return new Promise(function (t) {
               i = t
            })
         }
         var de = new ct;

         function ue(t) {
            pe(t, de), de.clear()
         }

         function pe(t, e) {
            var i, n, r = Array.isArray(t);
            if (!(!r && !c(t) || Object.isFrozen(t) || t instanceof gt)) {
               if (t.__ob__) {
                  var o = t.__ob__.dep.id;
                  if (e.has(o)) return;
                  e.add(o)
               }
               if (r) {
                  i = t.length;
                  while (i--) pe(t[i], e)
               } else {
                  n = Object.keys(t), i = n.length;
                  while (i--) pe(t[n[i]], e)
               }
            }
         }
         var fe, me = b(function (t) {
            var e = "&" === t.charAt(0);
            t = e ? t.slice(1) : t;
            var i = "~" === t.charAt(0);
            t = i ? t.slice(1) : t;
            var n = "!" === t.charAt(0);
            return t = n ? t.slice(1) : t, {
               name: t,
               once: i,
               capture: n,
               passive: e
            }
         });

         function ge(t) {
            function e() {
               var t = arguments,
                  i = e.fns;
               if (!Array.isArray(i)) return i.apply(null, arguments);
               for (var n = i.slice(), r = 0; r < n.length; r++) n[r].apply(null, t)
            }
            return e.fns = t, e
         }

         function ve(t, e, i, r, a, s) {
            var c, l, h, d;
            for (c in t) l = t[c], h = e[c], d = me(c), n(l) || (n(h) ? (n(l.fns) && (l = t[c] = ge(l)), o(d.once) && (l = t[c] = a(d.name, l, d.capture)), i(d.name, l, d.capture, d.passive, d.params)) : l !== h && (h.fns = l, t[c] = h));
            for (c in e) n(t[c]) && (d = me(c), r(d.name, e[c], d.capture))
         }

         function ye(t, e, i) {
            var a;
            t instanceof gt && (t = t.data.hook || (t.data.hook = {}));
            var s = t[e];

            function c() {
               i.apply(this, arguments), v(a.fns, c)
            }
            n(s) ? a = ge([c]) : r(s.fns) && o(s.merged) ? (a = s, a.fns.push(c)) : a = ge([s, c]), a.merged = !0, t[e] = a
         }

         function xe(t, e, i) {
            var o = e.options.props;
            if (!n(o)) {
               var a = {},
                  s = t.attrs,
                  c = t.props;
               if (r(s) || r(c))
                  for (var l in o) {
                     var h = M(l);
                     be(a, c, l, h, !0) || be(a, s, l, h, !1)
                  }
               return a
            }
         }

         function be(t, e, i, n, o) {
            if (r(e)) {
               if (x(e, i)) return t[i] = e[i], o || delete e[i], !0;
               if (x(e, n)) return t[i] = e[n], o || delete e[n], !0
            }
            return !1
         }

         function _e(t) {
            for (var e = 0; e < t.length; e++)
               if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
            return t
         }

         function we(t) {
            return s(t) ? [xt(t)] : Array.isArray(t) ? Se(t) : void 0
         }

         function ke(t) {
            return r(t) && r(t.text) && a(t.isComment)
         }

         function Se(t, e) {
            var i, a, c, l, h = [];
            for (i = 0; i < t.length; i++) a = t[i], n(a) || "boolean" === typeof a || (c = h.length - 1, l = h[c], Array.isArray(a) ? a.length > 0 && (a = Se(a, (e || "") + "_" + i), ke(a[0]) && ke(l) && (h[c] = xt(l.text + a[0].text), a.shift()), h.push.apply(h, a)) : s(a) ? ke(l) ? h[c] = xt(l.text + a) : "" !== a && h.push(xt(a)) : ke(a) && ke(l) ? h[c] = xt(l.text + a.text) : (o(t._isVList) && r(a.tag) && n(a.key) && r(e) && (a.key = "__vlist" + e + "_" + i + "__"), h.push(a)));
            return h
         }

         function Me(t, e) {
            return (t.__esModule || lt && "Module" === t[Symbol.toStringTag]) && (t = t.default), c(t) ? e.extend(t) : t
         }

         function Ae(t, e, i, n, r) {
            var o = yt();
            return o.asyncFactory = t, o.asyncMeta = {
               data: e,
               context: i,
               children: n,
               tag: r
            }, o
         }

         function Ce(t, e, i) {
            if (o(t.error) && r(t.errorComp)) return t.errorComp;
            if (r(t.resolved)) return t.resolved;
            if (o(t.loading) && r(t.loadingComp)) return t.loadingComp;
            if (!r(t.contexts)) {
               var a = t.contexts = [i],
                  s = !0,
                  l = function (t) {
                     for (var e = 0, i = a.length; e < i; e++) a[e].$forceUpdate();
                     t && (a.length = 0)
                  },
                  h = N(function (i) {
                     t.resolved = Me(i, e), s || l(!0)
                  }),
                  d = N(function (e) {
                     r(t.errorComp) && (t.error = !0, l(!0))
                  }),
                  u = t(h, d);
               return c(u) && ("function" === typeof u.then ? n(t.resolved) && u.then(h, d) : r(u.component) && "function" === typeof u.component.then && (u.component.then(h, d), r(u.error) && (t.errorComp = Me(u.error, e)), r(u.loading) && (t.loadingComp = Me(u.loading, e), 0 === u.delay ? t.loading = !0 : setTimeout(function () {
                  n(t.resolved) && n(t.error) && (t.loading = !0, l(!1))
               }, u.delay || 200)), r(u.timeout) && setTimeout(function () {
                  n(t.resolved) && d(null)
               }, u.timeout))), s = !1, t.loading ? t.loadingComp : t.resolved
            }
            t.contexts.push(i)
         }

         function Pe(t) {
            return t.isComment && t.asyncFactory
         }

         function Te(t) {
            if (Array.isArray(t))
               for (var e = 0; e < t.length; e++) {
                  var i = t[e];
                  if (r(i) && (r(i.componentOptions) || Pe(i))) return i
               }
         }

         function Oe(t) {
            t._events = Object.create(null), t._hasHookEvent = !1;
            var e = t.$options._parentListeners;
            e && Ie(t, e)
         }

         function Le(t, e) {
            fe.$on(t, e)
         }

         function De(t, e) {
            fe.$off(t, e)
         }

         function Ee(t, e) {
            var i = fe;
            return function n() {
               var r = e.apply(null, arguments);
               null !== r && i.$off(t, n)
            }
         }

         function Ie(t, e, i) {
            fe = t, ve(e, i || {}, Le, De, Ee, t), fe = void 0
         }

         function ze(t) {
            var e = /^hook:/;
            t.prototype.$on = function (t, i) {
               var n = this;
               if (Array.isArray(t))
                  for (var r = 0, o = t.length; r < o; r++) n.$on(t[r], i);
               else(n._events[t] || (n._events[t] = [])).push(i), e.test(t) && (n._hasHookEvent = !0);
               return n
            }, t.prototype.$once = function (t, e) {
               var i = this;

               function n() {
                  i.$off(t, n), e.apply(i, arguments)
               }
               return n.fn = e, i.$on(t, n), i
            }, t.prototype.$off = function (t, e) {
               var i = this;
               if (!arguments.length) return i._events = Object.create(null), i;
               if (Array.isArray(t)) {
                  for (var n = 0, r = t.length; n < r; n++) i.$off(t[n], e);
                  return i
               }
               var o = i._events[t];
               if (!o) return i;
               if (!e) return i._events[t] = null, i;
               if (e) {
                  var a, s = o.length;
                  while (s--)
                     if (a = o[s], a === e || a.fn === e) {
                        o.splice(s, 1);
                        break
                     }
               }
               return i
            }, t.prototype.$emit = function (t) {
               var e = this,
                  i = e._events[t];
               if (i) {
                  i = i.length > 1 ? T(i) : i;
                  for (var n = T(arguments, 1), r = 0, o = i.length; r < o; r++) try {
                     i[r].apply(e, n)
                  } catch (sa) {
                     Zt(sa, e, 'event handler for "' + t + '"')
                  }
               }
               return e
            }
         }

         function Be(t, e) {
            var i = {};
            if (!t) return i;
            for (var n = 0, r = t.length; n < r; n++) {
               var o = t[n],
                  a = o.data;
               if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== e && o.fnContext !== e || !a || null == a.slot)(i.default || (i.default = [])).push(o);
               else {
                  var s = a.slot,
                     c = i[s] || (i[s] = []);
                  "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o)
               }
            }
            for (var l in i) i[l].every(Ne) && delete i[l];
            return i
         }

         function Ne(t) {
            return t.isComment && !t.asyncFactory || " " === t.text
         }

         function Re(t, e) {
            e = e || {};
            for (var i = 0; i < t.length; i++) Array.isArray(t[i]) ? Re(t[i], e) : e[t[i].key] = t[i].fn;
            return e
         }
         var je = null;

         function He(t) {
            var e = je;
            return je = t,
               function () {
                  je = e
               }
         }

         function Ge(t) {
            var e = t.$options,
               i = e.parent;
            if (i && !e.abstract) {
               while (i.$options.abstract && i.$parent) i = i.$parent;
               i.$children.push(t)
            }
            t.$parent = i, t.$root = i ? i.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
         }

         function Fe(t) {
            t.prototype._update = function (t, e) {
               var i = this,
                  n = i.$el,
                  r = i._vnode,
                  o = He(i);
               i._vnode = t, i.$el = r ? i.__patch__(r, t) : i.__patch__(i.$el, t, e, !1), o(), n && (n.__vue__ = null), i.$el && (i.$el.__vue__ = i), i.$vnode && i.$parent && i.$vnode === i.$parent._vnode && (i.$parent.$el = i.$el)
            }, t.prototype.$forceUpdate = function () {
               var t = this;
               t._watcher && t._watcher.update()
            }, t.prototype.$destroy = function () {
               var t = this;
               if (!t._isBeingDestroyed) {
                  Ue(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                  var e = t.$parent;
                  !e || e._isBeingDestroyed || t.$options.abstract || v(e.$children, t), t._watcher && t._watcher.teardown();
                  var i = t._watchers.length;
                  while (i--) t._watchers[i].teardown();
                  t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Ue(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
               }
            }
         }

         function We(t, e, i) {
            var n;
            return t.$el = e, t.$options.render || (t.$options.render = yt), Ue(t, "beforeMount"), n = function () {
               t._update(t._render(), i)
            }, new ci(t, n, D, {
               before: function () {
                  t._isMounted && !t._isDestroyed && Ue(t, "beforeUpdate")
               }
            }, !0), i = !1, null == t.$vnode && (t._isMounted = !0, Ue(t, "mounted")), t
         }

         function $e(t, e, n, r, o) {
            var a = !!(o || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== i);
            if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = o, t.$attrs = r.data.attrs || i, t.$listeners = n || i, e && t.$options.props) {
               At(!1);
               for (var s = t._props, c = t.$options._propKeys || [], l = 0; l < c.length; l++) {
                  var h = c[l],
                     d = t.$options.props;
                  s[h] = Vt(h, d, e, t)
               }
               At(!0), t.$options.propsData = e
            }
            n = n || i;
            var u = t.$options._parentListeners;
            t.$options._parentListeners = n, Ie(t, n, u), a && (t.$slots = Be(o, r.context), t.$forceUpdate())
         }

         function Xe(t) {
            while (t && (t = t.$parent))
               if (t._inactive) return !0;
            return !1
         }

         function Ve(t, e) {
            if (e) {
               if (t._directInactive = !1, Xe(t)) return
            } else if (t._directInactive) return;
            if (t._inactive || null === t._inactive) {
               t._inactive = !1;
               for (var i = 0; i < t.$children.length; i++) Ve(t.$children[i]);
               Ue(t, "activated")
            }
         }

         function Ye(t, e) {
            if ((!e || (t._directInactive = !0, !Xe(t))) && !t._inactive) {
               t._inactive = !0;
               for (var i = 0; i < t.$children.length; i++) Ye(t.$children[i]);
               Ue(t, "deactivated")
            }
         }

         function Ue(t, e) {
            ft();
            var i = t.$options[e];
            if (i)
               for (var n = 0, r = i.length; n < r; n++) try {
                  i[n].call(t)
               } catch (sa) {
                  Zt(sa, t, e + " hook")
               }
            t._hasHookEvent && t.$emit("hook:" + e), mt()
         }
         var Ke = [],
            qe = [],
            Ze = {},
            Je = !1,
            Qe = !1,
            ti = 0;

         function ei() {
            ti = Ke.length = qe.length = 0, Ze = {}, Je = Qe = !1
         }

         function ii() {
            var t, e;
            for (Qe = !0, Ke.sort(function (t, e) {
                  return t.id - e.id
               }), ti = 0; ti < Ke.length; ti++) t = Ke[ti], t.before && t.before(), e = t.id, Ze[e] = null, t.run();
            var i = qe.slice(),
               n = Ke.slice();
            ei(), oi(i), ni(n), at && G.devtools && at.emit("flush")
         }

         function ni(t) {
            var e = t.length;
            while (e--) {
               var i = t[e],
                  n = i.vm;
               n._watcher === i && n._isMounted && !n._isDestroyed && Ue(n, "updated")
            }
         }

         function ri(t) {
            t._inactive = !1, qe.push(t)
         }

         function oi(t) {
            for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Ve(t[e], !0)
         }

         function ai(t) {
            var e = t.id;
            if (null == Ze[e]) {
               if (Ze[e] = !0, Qe) {
                  var i = Ke.length - 1;
                  while (i > ti && Ke[i].id > t.id) i--;
                  Ke.splice(i + 1, 0, t)
               } else Ke.push(t);
               Je || (Je = !0, he(ii))
            }
         }
         var si = 0,
            ci = function (t, e, i, n, r) {
               this.vm = t, r && (t._watcher = this), t._watchers.push(this), n ? (this.deep = !!n.deep, this.user = !!n.user, this.lazy = !!n.lazy, this.sync = !!n.sync, this.before = n.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = i, this.id = ++si, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ct, this.newDepIds = new ct, this.expression = "", "function" === typeof e ? this.getter = e : (this.getter = X(e), this.getter || (this.getter = D)), this.value = this.lazy ? void 0 : this.get()
            };
         ci.prototype.get = function () {
            var t;
            ft(this);
            var e = this.vm;
            try {
               t = this.getter.call(e, e)
            } catch (sa) {
               if (!this.user) throw sa;
               Zt(sa, e, 'getter for watcher "' + this.expression + '"')
            } finally {
               this.deep && ue(t), mt(), this.cleanupDeps()
            }
            return t
         }, ci.prototype.addDep = function (t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
         }, ci.prototype.cleanupDeps = function () {
            var t = this.deps.length;
            while (t--) {
               var e = this.deps[t];
               this.newDepIds.has(e.id) || e.removeSub(this)
            }
            var i = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = i, this.newDepIds.clear(), i = this.deps, this.deps = this.newDeps, this.newDeps = i, this.newDeps.length = 0
         }, ci.prototype.update = function () {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : ai(this)
         }, ci.prototype.run = function () {
            if (this.active) {
               var t = this.get();
               if (t !== this.value || c(t) || this.deep) {
                  var e = this.value;
                  if (this.value = t, this.user) try {
                     this.cb.call(this.vm, t, e)
                  } catch (sa) {
                     Zt(sa, this.vm, 'callback for watcher "' + this.expression + '"')
                  } else this.cb.call(this.vm, t, e)
               }
            }
         }, ci.prototype.evaluate = function () {
            this.value = this.get(), this.dirty = !1
         }, ci.prototype.depend = function () {
            var t = this.deps.length;
            while (t--) this.deps[t].depend()
         }, ci.prototype.teardown = function () {
            if (this.active) {
               this.vm._isBeingDestroyed || v(this.vm._watchers, this);
               var t = this.deps.length;
               while (t--) this.deps[t].removeSub(this);
               this.active = !1
            }
         };
         var li = {
            enumerable: !0,
            configurable: !0,
            get: D,
            set: D
         };

         function hi(t, e, i) {
            li.get = function () {
               return this[e][i]
            }, li.set = function (t) {
               this[e][i] = t
            }, Object.defineProperty(t, i, li)
         }

         function di(t) {
            t._watchers = [];
            var e = t.$options;
            e.props && ui(t, e.props), e.methods && bi(t, e.methods), e.data ? pi(t) : Ot(t._data = {}, !0), e.computed && gi(t, e.computed), e.watch && e.watch !== it && _i(t, e.watch)
         }

         function ui(t, e) {
            var i = t.$options.propsData || {},
               n = t._props = {},
               r = t.$options._propKeys = [],
               o = !t.$parent;
            o || At(!1);
            var a = function (o) {
               r.push(o);
               var a = Vt(o, e, i, t);
               Lt(n, o, a), o in t || hi(t, "_props", o)
            };
            for (var s in e) a(s);
            At(!0)
         }

         function pi(t) {
            var e = t.$options.data;
            e = t._data = "function" === typeof e ? fi(e, t) : e || {}, h(e) || (e = {});
            var i = Object.keys(e),
               n = t.$options.props,
               r = (t.$options.methods, i.length);
            while (r--) {
               var o = i[r];
               0, n && x(n, o) || F(o) || hi(t, "_data", o)
            }
            Ot(e, !0)
         }

         function fi(t, e) {
            ft();
            try {
               return t.call(e, e)
            } catch (sa) {
               return Zt(sa, e, "data()"), {}
            } finally {
               mt()
            }
         }
         var mi = {
            lazy: !0
         };

         function gi(t, e) {
            var i = t._computedWatchers = Object.create(null),
               n = ot();
            for (var r in e) {
               var o = e[r],
                  a = "function" === typeof o ? o : o.get;
               0, n || (i[r] = new ci(t, a || D, D, mi)), r in t || vi(t, r, o)
            }
         }

         function vi(t, e, i) {
            var n = !ot();
            "function" === typeof i ? (li.get = n ? yi(e) : xi(i), li.set = D) : (li.get = i.get ? n && !1 !== i.cache ? yi(e) : xi(i.get) : D, li.set = i.set || D), Object.defineProperty(t, e, li)
         }

         function yi(t) {
            return function () {
               var e = this._computedWatchers && this._computedWatchers[t];
               if (e) return e.dirty && e.evaluate(), ut.target && e.depend(), e.value
            }
         }

         function xi(t) {
            return function () {
               return t.call(this, this)
            }
         }

         function bi(t, e) {
            t.$options.props;
            for (var i in e) t[i] = "function" !== typeof e[i] ? D : P(e[i], t)
         }

         function _i(t, e) {
            for (var i in e) {
               var n = e[i];
               if (Array.isArray(n))
                  for (var r = 0; r < n.length; r++) wi(t, i, n[r]);
               else wi(t, i, n)
            }
         }

         function wi(t, e, i, n) {
            return h(i) && (n = i, i = i.handler), "string" === typeof i && (i = t[i]), t.$watch(e, i, n)
         }

         function ki(t) {
            var e = {
                  get: function () {
                     return this._data
                  }
               },
               i = {
                  get: function () {
                     return this._props
                  }
               };
            Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", i), t.prototype.$set = Dt, t.prototype.$delete = Et, t.prototype.$watch = function (t, e, i) {
               var n = this;
               if (h(e)) return wi(n, t, e, i);
               i = i || {}, i.user = !0;
               var r = new ci(n, t, e, i);
               if (i.immediate) try {
                  e.call(n, r.value)
               } catch (o) {
                  Zt(o, n, 'callback for immediate watcher "' + r.expression + '"')
               }
               return function () {
                  r.teardown()
               }
            }
         }

         function Si(t) {
            var e = t.$options.provide;
            e && (t._provided = "function" === typeof e ? e.call(t) : e)
         }

         function Mi(t) {
            var e = Ai(t.$options.inject, t);
            e && (At(!1), Object.keys(e).forEach(function (i) {
               Lt(t, i, e[i])
            }), At(!0))
         }

         function Ai(t, e) {
            if (t) {
               for (var i = Object.create(null), n = lt ? Reflect.ownKeys(t).filter(function (e) {
                     return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }) : Object.keys(t), r = 0; r < n.length; r++) {
                  var o = n[r],
                     a = t[o].from,
                     s = e;
                  while (s) {
                     if (s._provided && x(s._provided, a)) {
                        i[o] = s._provided[a];
                        break
                     }
                     s = s.$parent
                  }
                  if (!s)
                     if ("default" in t[o]) {
                        var c = t[o].default;
                        i[o] = "function" === typeof c ? c.call(e) : c
                     } else 0
               }
               return i
            }
         }

         function Ci(t, e) {
            var i, n, o, a, s;
            if (Array.isArray(t) || "string" === typeof t)
               for (i = new Array(t.length), n = 0, o = t.length; n < o; n++) i[n] = e(t[n], n);
            else if ("number" === typeof t)
               for (i = new Array(t), n = 0; n < t; n++) i[n] = e(n + 1, n);
            else if (c(t))
               for (a = Object.keys(t), i = new Array(a.length), n = 0, o = a.length; n < o; n++) s = a[n], i[n] = e(t[s], s, n);
            return r(i) || (i = []), i._isVList = !0, i
         }

         function Pi(t, e, i, n) {
            var r, o = this.$scopedSlots[t];
            o ? (i = i || {}, n && (i = O(O({}, n), i)), r = o(i) || e) : r = this.$slots[t] || e;
            var a = i && i.slot;
            return a ? this.$createElement("template", {
               slot: a
            }, r) : r
         }

         function Ti(t) {
            return Xt(this.$options, "filters", t, !0) || I
         }

         function Oi(t, e) {
            return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
         }

         function Li(t, e, i, n, r) {
            var o = G.keyCodes[e] || i;
            return r && n && !G.keyCodes[e] ? Oi(r, n) : o ? Oi(o, t) : n ? M(n) !== e : void 0
         }

         function Di(t, e, i, n, r) {
            if (i)
               if (c(i)) {
                  var o;
                  Array.isArray(i) && (i = L(i));
                  var a = function (a) {
                     if ("class" === a || "style" === a || g(a)) o = t;
                     else {
                        var s = t.attrs && t.attrs.type;
                        o = n || G.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                     }
                     var c = w(a);
                     if (!(a in o) && !(c in o) && (o[a] = i[a], r)) {
                        var l = t.on || (t.on = {});
                        l["update:" + c] = function (t) {
                           i[a] = t
                        }
                     }
                  };
                  for (var s in i) a(s)
               } else;
            return t
         }

         function Ei(t, e) {
            var i = this._staticTrees || (this._staticTrees = []),
               n = i[t];
            return n && !e ? n : (n = i[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), zi(n, "__static__" + t, !1), n)
         }

         function Ii(t, e, i) {
            return zi(t, "__once__" + e + (i ? "_" + i : ""), !0), t
         }

         function zi(t, e, i) {
            if (Array.isArray(t))
               for (var n = 0; n < t.length; n++) t[n] && "string" !== typeof t[n] && Bi(t[n], e + "_" + n, i);
            else Bi(t, e, i)
         }

         function Bi(t, e, i) {
            t.isStatic = !0, t.key = e, t.isOnce = i
         }

         function Ni(t, e) {
            if (e)
               if (h(e)) {
                  var i = t.on = t.on ? O({}, t.on) : {};
                  for (var n in e) {
                     var r = i[n],
                        o = e[n];
                     i[n] = r ? [].concat(r, o) : o
                  }
               } else;
            return t
         }

         function Ri(t) {
            t._o = Ii, t._n = f, t._s = p, t._l = Ci, t._t = Pi, t._q = z, t._i = B, t._m = Ei, t._f = Ti, t._k = Li, t._b = Di, t._v = xt, t._e = yt, t._u = Re, t._g = Ni
         }

         function ji(t, e, n, r, a) {
            var s, c = a.options;
            x(r, "_uid") ? (s = Object.create(r), s._original = r) : (s = r, r = r._original);
            var l = o(c._compiled),
               h = !l;
            this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || i, this.injections = Ai(c.inject, r), this.slots = function () {
               return Be(n, r)
            }, l && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || i), c._scopeId ? this._c = function (t, e, i, n) {
               var o = Ji(s, t, e, i, n, h);
               return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId, o.fnContext = r), o
            } : this._c = function (t, e, i, n) {
               return Ji(s, t, e, i, n, h)
            }
         }

         function Hi(t, e, n, o, a) {
            var s = t.options,
               c = {},
               l = s.props;
            if (r(l))
               for (var h in l) c[h] = Vt(h, l, e || i);
            else r(n.attrs) && Fi(c, n.attrs), r(n.props) && Fi(c, n.props);
            var d = new ji(n, c, a, o, t),
               u = s.render.call(null, d._c, d);
            if (u instanceof gt) return Gi(u, n, d.parent, s, d);
            if (Array.isArray(u)) {
               for (var p = we(u) || [], f = new Array(p.length), m = 0; m < p.length; m++) f[m] = Gi(p[m], n, d.parent, s, d);
               return f
            }
         }

         function Gi(t, e, i, n, r) {
            var o = bt(t);
            return o.fnContext = i, o.fnOptions = n, e.slot && ((o.data || (o.data = {})).slot = e.slot), o
         }

         function Fi(t, e) {
            for (var i in e) t[w(i)] = e[i]
         }
         Ri(ji.prototype);
         var Wi = {
               init: function (t, e) {
                  if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                     var i = t;
                     Wi.prepatch(i, i)
                  } else {
                     var n = t.componentInstance = Vi(t, je);
                     n.$mount(e ? t.elm : void 0, e)
                  }
               },
               prepatch: function (t, e) {
                  var i = e.componentOptions,
                     n = e.componentInstance = t.componentInstance;
                  $e(n, i.propsData, i.listeners, e, i.children)
               },
               insert: function (t) {
                  var e = t.context,
                     i = t.componentInstance;
                  i._isMounted || (i._isMounted = !0, Ue(i, "mounted")), t.data.keepAlive && (e._isMounted ? ri(i) : Ve(i, !0))
               },
               destroy: function (t) {
                  var e = t.componentInstance;
                  e._isDestroyed || (t.data.keepAlive ? Ye(e, !0) : e.$destroy())
               }
            },
            $i = Object.keys(Wi);

         function Xi(t, e, i, a, s) {
            if (!n(t)) {
               var l = i.$options._base;
               if (c(t) && (t = l.extend(t)), "function" === typeof t) {
                  var h;
                  if (n(t.cid) && (h = t, t = Ce(h, l, i), void 0 === t)) return Ae(h, e, i, a, s);
                  e = e || {}, cn(t), r(e.model) && Ki(t.options, e);
                  var d = xe(e, t, s);
                  if (o(t.options.functional)) return Hi(t, d, e, i, a);
                  var u = e.on;
                  if (e.on = e.nativeOn, o(t.options.abstract)) {
                     var p = e.slot;
                     e = {}, p && (e.slot = p)
                  }
                  Yi(e);
                  var f = t.options.name || s,
                     m = new gt("vue-component-" + t.cid + (f ? "-" + f : ""), e, void 0, void 0, void 0, i, {
                        Ctor: t,
                        propsData: d,
                        listeners: u,
                        tag: s,
                        children: a
                     }, h);
                  return m
               }
            }
         }

         function Vi(t, e) {
            var i = {
                  _isComponent: !0,
                  _parentVnode: t,
                  parent: e
               },
               n = t.data.inlineTemplate;
            return r(n) && (i.render = n.render, i.staticRenderFns = n.staticRenderFns), new t.componentOptions.Ctor(i)
         }

         function Yi(t) {
            for (var e = t.hook || (t.hook = {}), i = 0; i < $i.length; i++) {
               var n = $i[i],
                  r = e[n],
                  o = Wi[n];
               r === o || r && r._merged || (e[n] = r ? Ui(o, r) : o)
            }
         }

         function Ui(t, e) {
            var i = function (i, n) {
               t(i, n), e(i, n)
            };
            return i._merged = !0, i
         }

         function Ki(t, e) {
            var i = t.model && t.model.prop || "value",
               n = t.model && t.model.event || "input";
            (e.props || (e.props = {}))[i] = e.model.value;
            var o = e.on || (e.on = {}),
               a = o[n],
               s = e.model.callback;
            r(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[n] = [s].concat(a)) : o[n] = s
         }
         var qi = 1,
            Zi = 2;

         function Ji(t, e, i, n, r, a) {
            return (Array.isArray(i) || s(i)) && (r = n, n = i, i = void 0), o(a) && (r = Zi), Qi(t, e, i, n, r)
         }

         function Qi(t, e, i, n, o) {
            if (r(i) && r(i.__ob__)) return yt();
            if (r(i) && r(i.is) && (e = i.is), !e) return yt();
            var a, s, c;
            (Array.isArray(n) && "function" === typeof n[0] && (i = i || {}, i.scopedSlots = {
               default: n[0]
            }, n.length = 0), o === Zi ? n = we(n) : o === qi && (n = _e(n)), "string" === typeof e) ? (s = t.$vnode && t.$vnode.ns || G.getTagNamespace(e), a = G.isReservedTag(e) ? new gt(G.parsePlatformTagName(e), i, n, void 0, void 0, t) : i && i.pre || !r(c = Xt(t.$options, "components", e)) ? new gt(e, i, n, void 0, void 0, t) : Xi(c, i, t, n, e)) : a = Xi(e, i, t, n);
            return Array.isArray(a) ? a : r(a) ? (r(s) && tn(a, s), r(i) && en(i), a) : yt()
         }

         function tn(t, e, i) {
            if (t.ns = e, "foreignObject" === t.tag && (e = void 0, i = !0), r(t.children))
               for (var a = 0, s = t.children.length; a < s; a++) {
                  var c = t.children[a];
                  r(c.tag) && (n(c.ns) || o(i) && "svg" !== c.tag) && tn(c, e, i)
               }
         }

         function en(t) {
            c(t.style) && ue(t.style), c(t.class) && ue(t.class)
         }

         function nn(t) {
            t._vnode = null, t._staticTrees = null;
            var e = t.$options,
               n = t.$vnode = e._parentVnode,
               r = n && n.context;
            t.$slots = Be(e._renderChildren, r), t.$scopedSlots = i, t._c = function (e, i, n, r) {
               return Ji(t, e, i, n, r, !1)
            }, t.$createElement = function (e, i, n, r) {
               return Ji(t, e, i, n, r, !0)
            };
            var o = n && n.data;
            Lt(t, "$attrs", o && o.attrs || i, null, !0), Lt(t, "$listeners", e._parentListeners || i, null, !0)
         }

         function rn(t) {
            Ri(t.prototype), t.prototype.$nextTick = function (t) {
               return he(t, this)
            }, t.prototype._render = function () {
               var t, e = this,
                  n = e.$options,
                  r = n.render,
                  o = n._parentVnode;
               o && (e.$scopedSlots = o.data.scopedSlots || i), e.$vnode = o;
               try {
                  t = r.call(e._renderProxy, e.$createElement)
               } catch (sa) {
                  Zt(sa, e, "render"), t = e._vnode
               }
               return t instanceof gt || (t = yt()), t.parent = o, t
            }
         }
         var on = 0;

         function an(t) {
            t.prototype._init = function (t) {
               var e = this;
               e._uid = on++, e._isVue = !0, t && t._isComponent ? sn(e, t) : e.$options = $t(cn(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, Ge(e), Oe(e), nn(e), Ue(e, "beforeCreate"), Mi(e), di(e), Si(e), Ue(e, "created"), e.$options.el && e.$mount(e.$options.el)
            }
         }

         function sn(t, e) {
            var i = t.$options = Object.create(t.constructor.options),
               n = e._parentVnode;
            i.parent = e.parent, i._parentVnode = n;
            var r = n.componentOptions;
            i.propsData = r.propsData, i._parentListeners = r.listeners, i._renderChildren = r.children, i._componentTag = r.tag, e.render && (i.render = e.render, i.staticRenderFns = e.staticRenderFns)
         }

         function cn(t) {
            var e = t.options;
            if (t.super) {
               var i = cn(t.super),
                  n = t.superOptions;
               if (i !== n) {
                  t.superOptions = i;
                  var r = ln(t);
                  r && O(t.extendOptions, r), e = t.options = $t(i, t.extendOptions), e.name && (e.components[e.name] = t)
               }
            }
            return e
         }

         function ln(t) {
            var e, i = t.options,
               n = t.extendOptions,
               r = t.sealedOptions;
            for (var o in i) i[o] !== r[o] && (e || (e = {}), e[o] = hn(i[o], n[o], r[o]));
            return e
         }

         function hn(t, e, i) {
            if (Array.isArray(t)) {
               var n = [];
               i = Array.isArray(i) ? i : [i], e = Array.isArray(e) ? e : [e];
               for (var r = 0; r < t.length; r++)(e.indexOf(t[r]) >= 0 || i.indexOf(t[r]) < 0) && n.push(t[r]);
               return n
            }
            return t
         }

         function dn(t) {
            this._init(t)
         }

         function un(t) {
            t.use = function (t) {
               var e = this._installedPlugins || (this._installedPlugins = []);
               if (e.indexOf(t) > -1) return this;
               var i = T(arguments, 1);
               return i.unshift(this), "function" === typeof t.install ? t.install.apply(t, i) : "function" === typeof t && t.apply(null, i), e.push(t), this
            }
         }

         function pn(t) {
            t.mixin = function (t) {
               return this.options = $t(this.options, t), this
            }
         }

         function fn(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function (t) {
               t = t || {};
               var i = this,
                  n = i.cid,
                  r = t._Ctor || (t._Ctor = {});
               if (r[n]) return r[n];
               var o = t.name || i.options.name;
               var a = function (t) {
                  this._init(t)
               };
               return a.prototype = Object.create(i.prototype), a.prototype.constructor = a, a.cid = e++, a.options = $t(i.options, t), a["super"] = i, a.options.props && mn(a), a.options.computed && gn(a), a.extend = i.extend, a.mixin = i.mixin, a.use = i.use, j.forEach(function (t) {
                  a[t] = i[t]
               }), o && (a.options.components[o] = a), a.superOptions = i.options, a.extendOptions = t, a.sealedOptions = O({}, a.options), r[n] = a, a
            }
         }

         function mn(t) {
            var e = t.options.props;
            for (var i in e) hi(t.prototype, "_props", i)
         }

         function gn(t) {
            var e = t.options.computed;
            for (var i in e) vi(t.prototype, i, e[i])
         }

         function vn(t) {
            j.forEach(function (e) {
               t[e] = function (t, i) {
                  return i ? ("component" === e && h(i) && (i.name = i.name || t, i = this.options._base.extend(i)), "directive" === e && "function" === typeof i && (i = {
                     bind: i,
                     update: i
                  }), this.options[e + "s"][t] = i, i) : this.options[e + "s"][t]
               }
            })
         }

         function yn(t) {
            return t && (t.Ctor.options.name || t.tag)
         }

         function xn(t, e) {
            return Array.isArray(t) ? t.indexOf(e) > -1 : "string" === typeof t ? t.split(",").indexOf(e) > -1 : !!d(t) && t.test(e)
         }

         function bn(t, e) {
            var i = t.cache,
               n = t.keys,
               r = t._vnode;
            for (var o in i) {
               var a = i[o];
               if (a) {
                  var s = yn(a.componentOptions);
                  s && !e(s) && _n(i, o, n, r)
               }
            }
         }

         function _n(t, e, i, n) {
            var r = t[e];
            !r || n && r.tag === n.tag || r.componentInstance.$destroy(), t[e] = null, v(i, e)
         }
         an(dn), ki(dn), ze(dn), Fe(dn), rn(dn);
         var wn = [String, RegExp, Array],
            kn = {
               name: "keep-alive",
               abstract: !0,
               props: {
                  include: wn,
                  exclude: wn,
                  max: [String, Number]
               },
               created: function () {
                  this.cache = Object.create(null), this.keys = []
               },
               destroyed: function () {
                  for (var t in this.cache) _n(this.cache, t, this.keys)
               },
               mounted: function () {
                  var t = this;
                  this.$watch("include", function (e) {
                     bn(t, function (t) {
                        return xn(e, t)
                     })
                  }), this.$watch("exclude", function (e) {
                     bn(t, function (t) {
                        return !xn(e, t)
                     })
                  })
               },
               render: function () {
                  var t = this.$slots.default,
                     e = Te(t),
                     i = e && e.componentOptions;
                  if (i) {
                     var n = yn(i),
                        r = this,
                        o = r.include,
                        a = r.exclude;
                     if (o && (!n || !xn(o, n)) || a && n && xn(a, n)) return e;
                     var s = this,
                        c = s.cache,
                        l = s.keys,
                        h = null == e.key ? i.Ctor.cid + (i.tag ? "::" + i.tag : "") : e.key;
                     c[h] ? (e.componentInstance = c[h].componentInstance, v(l, h), l.push(h)) : (c[h] = e, l.push(h), this.max && l.length > parseInt(this.max) && _n(c, l[0], l, this._vnode)), e.data.keepAlive = !0
                  }
                  return e || t && t[0]
               }
            },
            Sn = {
               KeepAlive: kn
            };

         function Mn(t) {
            var e = {
               get: function () {
                  return G
               }
            };
            Object.defineProperty(t, "config", e), t.util = {
               warn: ht,
               extend: O,
               mergeOptions: $t,
               defineReactive: Lt
            }, t.set = Dt, t.delete = Et, t.nextTick = he, t.options = Object.create(null), j.forEach(function (e) {
               t.options[e + "s"] = Object.create(null)
            }), t.options._base = t, O(t.options.components, Sn), un(t), pn(t), fn(t), vn(t)
         }
         Mn(dn), Object.defineProperty(dn.prototype, "$isServer", {
            get: ot
         }), Object.defineProperty(dn.prototype, "$ssrContext", {
            get: function () {
               return this.$vnode && this.$vnode.ssrContext
            }
         }), Object.defineProperty(dn, "FunctionalRenderContext", {
            value: ji
         }), dn.version = "2.5.21";
         var An = m("style,class"),
            Cn = m("input,textarea,option,select,progress"),
            Pn = function (t, e, i) {
               return "value" === i && Cn(t) && "button" !== e || "selected" === i && "option" === t || "checked" === i && "input" === t || "muted" === i && "video" === t
            },
            Tn = m("contenteditable,draggable,spellcheck"),
            On = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            Ln = "http://www.w3.org/1999/xlink",
            Dn = function (t) {
               return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
            },
            En = function (t) {
               return Dn(t) ? t.slice(6, t.length) : ""
            },
            In = function (t) {
               return null == t || !1 === t
            };

         function zn(t) {
            var e = t.data,
               i = t,
               n = t;
            while (r(n.componentInstance)) n = n.componentInstance._vnode, n && n.data && (e = Bn(n.data, e));
            while (r(i = i.parent)) i && i.data && (e = Bn(e, i.data));
            return Nn(e.staticClass, e.class)
         }

         function Bn(t, e) {
            return {
               staticClass: Rn(t.staticClass, e.staticClass),
               class: r(t.class) ? [t.class, e.class] : e.class
            }
         }

         function Nn(t, e) {
            return r(t) || r(e) ? Rn(t, jn(e)) : ""
         }

         function Rn(t, e) {
            return t ? e ? t + " " + e : t : e || ""
         }

         function jn(t) {
            return Array.isArray(t) ? Hn(t) : c(t) ? Gn(t) : "string" === typeof t ? t : ""
         }

         function Hn(t) {
            for (var e, i = "", n = 0, o = t.length; n < o; n++) r(e = jn(t[n])) && "" !== e && (i && (i += " "), i += e);
            return i
         }

         function Gn(t) {
            var e = "";
            for (var i in t) t[i] && (e && (e += " "), e += i);
            return e
         }
         var Fn = {
               svg: "http://www.w3.org/2000/svg",
               math: "http://www.w3.org/1998/Math/MathML"
            },
            Wn = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            $n = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            Xn = function (t) {
               return Wn(t) || $n(t)
            };

         function Vn(t) {
            return $n(t) ? "svg" : "math" === t ? "math" : void 0
         }
         var Yn = Object.create(null);

         function Un(t) {
            if (!U) return !0;
            if (Xn(t)) return !1;
            if (t = t.toLowerCase(), null != Yn[t]) return Yn[t];
            var e = document.createElement(t);
            return t.indexOf("-") > -1 ? Yn[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Yn[t] = /HTMLUnknownElement/.test(e.toString())
         }
         var Kn = m("text,number,password,search,email,tel,url");

         function qn(t) {
            if ("string" === typeof t) {
               var e = document.querySelector(t);
               return e || document.createElement("div")
            }
            return t
         }

         function Zn(t, e) {
            var i = document.createElement(t);
            return "select" !== t ? i : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && i.setAttribute("multiple", "multiple"), i)
         }

         function Jn(t, e) {
            return document.createElementNS(Fn[t], e)
         }

         function Qn(t) {
            return document.createTextNode(t)
         }

         function tr(t) {
            return document.createComment(t)
         }

         function er(t, e, i) {
            t.insertBefore(e, i)
         }

         function ir(t, e) {
            t.removeChild(e)
         }

         function nr(t, e) {
            t.appendChild(e)
         }

         function rr(t) {
            return t.parentNode
         }

         function or(t) {
            return t.nextSibling
         }

         function ar(t) {
            return t.tagName
         }

         function sr(t, e) {
            t.textContent = e
         }

         function cr(t, e) {
            t.setAttribute(e, "")
         }
         var lr = Object.freeze({
               createElement: Zn,
               createElementNS: Jn,
               createTextNode: Qn,
               createComment: tr,
               insertBefore: er,
               removeChild: ir,
               appendChild: nr,
               parentNode: rr,
               nextSibling: or,
               tagName: ar,
               setTextContent: sr,
               setStyleScope: cr
            }),
            hr = {
               create: function (t, e) {
                  dr(e)
               },
               update: function (t, e) {
                  t.data.ref !== e.data.ref && (dr(t, !0), dr(e))
               },
               destroy: function (t) {
                  dr(t, !0)
               }
            };

         function dr(t, e) {
            var i = t.data.ref;
            if (r(i)) {
               var n = t.context,
                  o = t.componentInstance || t.elm,
                  a = n.$refs;
               e ? Array.isArray(a[i]) ? v(a[i], o) : a[i] === o && (a[i] = void 0) : t.data.refInFor ? Array.isArray(a[i]) ? a[i].indexOf(o) < 0 && a[i].push(o) : a[i] = [o] : a[i] = o
            }
         }
         var ur = new gt("", {}, []),
            pr = ["create", "activate", "update", "remove", "destroy"];

         function fr(t, e) {
            return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && r(t.data) === r(e.data) && mr(t, e) || o(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && n(e.asyncFactory.error))
         }

         function mr(t, e) {
            if ("input" !== t.tag) return !0;
            var i, n = r(i = t.data) && r(i = i.attrs) && i.type,
               o = r(i = e.data) && r(i = i.attrs) && i.type;
            return n === o || Kn(n) && Kn(o)
         }

         function gr(t, e, i) {
            var n, o, a = {};
            for (n = e; n <= i; ++n) o = t[n].key, r(o) && (a[o] = n);
            return a
         }

         function vr(t) {
            var e, i, a = {},
               c = t.modules,
               l = t.nodeOps;
            for (e = 0; e < pr.length; ++e)
               for (a[pr[e]] = [], i = 0; i < c.length; ++i) r(c[i][pr[e]]) && a[pr[e]].push(c[i][pr[e]]);

            function h(t) {
               return new gt(l.tagName(t).toLowerCase(), {}, [], void 0, t)
            }

            function d(t, e) {
               function i() {
                  0 === --i.listeners && u(t)
               }
               return i.listeners = e, i
            }

            function u(t) {
               var e = l.parentNode(t);
               r(e) && l.removeChild(e, t)
            }

            function p(t, e, i, n, a, s, c) {
               if (r(t.elm) && r(s) && (t = s[c] = bt(t)), t.isRootInsert = !a, !f(t, e, i, n)) {
                  var h = t.data,
                     d = t.children,
                     u = t.tag;
                  r(u) ? (t.elm = t.ns ? l.createElementNS(t.ns, u) : l.createElement(u, t), w(t), x(t, d, e), r(h) && _(t, e), y(i, t.elm, n)) : o(t.isComment) ? (t.elm = l.createComment(t.text), y(i, t.elm, n)) : (t.elm = l.createTextNode(t.text), y(i, t.elm, n))
               }
            }

            function f(t, e, i, n) {
               var a = t.data;
               if (r(a)) {
                  var s = r(t.componentInstance) && a.keepAlive;
                  if (r(a = a.hook) && r(a = a.init) && a(t, !1), r(t.componentInstance)) return g(t, e), y(i, t.elm, n), o(s) && v(t, e, i, n), !0
               }
            }

            function g(t, e) {
               r(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, b(t) ? (_(t, e), w(t)) : (dr(t), e.push(t))
            }

            function v(t, e, i, n) {
               var o, s = t;
               while (s.componentInstance)
                  if (s = s.componentInstance._vnode, r(o = s.data) && r(o = o.transition)) {
                     for (o = 0; o < a.activate.length; ++o) a.activate[o](ur, s);
                     e.push(s);
                     break
                  } y(i, t.elm, n)
            }

            function y(t, e, i) {
               r(t) && (r(i) ? l.parentNode(i) === t && l.insertBefore(t, e, i) : l.appendChild(t, e))
            }

            function x(t, e, i) {
               if (Array.isArray(e)) {
                  0;
                  for (var n = 0; n < e.length; ++n) p(e[n], i, t.elm, null, !0, e, n)
               } else s(t.text) && l.appendChild(t.elm, l.createTextNode(String(t.text)))
            }

            function b(t) {
               while (t.componentInstance) t = t.componentInstance._vnode;
               return r(t.tag)
            }

            function _(t, i) {
               for (var n = 0; n < a.create.length; ++n) a.create[n](ur, t);
               e = t.data.hook, r(e) && (r(e.create) && e.create(ur, t), r(e.insert) && i.push(t))
            }

            function w(t) {
               var e;
               if (r(e = t.fnScopeId)) l.setStyleScope(t.elm, e);
               else {
                  var i = t;
                  while (i) r(e = i.context) && r(e = e.$options._scopeId) && l.setStyleScope(t.elm, e), i = i.parent
               }
               r(e = je) && e !== t.context && e !== t.fnContext && r(e = e.$options._scopeId) && l.setStyleScope(t.elm, e)
            }

            function k(t, e, i, n, r, o) {
               for (; n <= r; ++n) p(i[n], o, t, e, !1, i, n)
            }

            function S(t) {
               var e, i, n = t.data;
               if (r(n))
                  for (r(e = n.hook) && r(e = e.destroy) && e(t), e = 0; e < a.destroy.length; ++e) a.destroy[e](t);
               if (r(e = t.children))
                  for (i = 0; i < t.children.length; ++i) S(t.children[i])
            }

            function M(t, e, i, n) {
               for (; i <= n; ++i) {
                  var o = e[i];
                  r(o) && (r(o.tag) ? (A(o), S(o)) : u(o.elm))
               }
            }

            function A(t, e) {
               if (r(e) || r(t.data)) {
                  var i, n = a.remove.length + 1;
                  for (r(e) ? e.listeners += n : e = d(t.elm, n), r(i = t.componentInstance) && r(i = i._vnode) && r(i.data) && A(i, e), i = 0; i < a.remove.length; ++i) a.remove[i](t, e);
                  r(i = t.data.hook) && r(i = i.remove) ? i(t, e) : e()
               } else u(t.elm)
            }

            function C(t, e, i, o, a) {
               var s, c, h, d, u = 0,
                  f = 0,
                  m = e.length - 1,
                  g = e[0],
                  v = e[m],
                  y = i.length - 1,
                  x = i[0],
                  b = i[y],
                  _ = !a;
               while (u <= m && f <= y) n(g) ? g = e[++u] : n(v) ? v = e[--m] : fr(g, x) ? (T(g, x, o, i, f), g = e[++u], x = i[++f]) : fr(v, b) ? (T(v, b, o, i, y), v = e[--m], b = i[--y]) : fr(g, b) ? (T(g, b, o, i, y), _ && l.insertBefore(t, g.elm, l.nextSibling(v.elm)), g = e[++u], b = i[--y]) : fr(v, x) ? (T(v, x, o, i, f), _ && l.insertBefore(t, v.elm, g.elm), v = e[--m], x = i[++f]) : (n(s) && (s = gr(e, u, m)), c = r(x.key) ? s[x.key] : P(x, e, u, m), n(c) ? p(x, o, t, g.elm, !1, i, f) : (h = e[c], fr(h, x) ? (T(h, x, o, i, f), e[c] = void 0, _ && l.insertBefore(t, h.elm, g.elm)) : p(x, o, t, g.elm, !1, i, f)), x = i[++f]);
               u > m ? (d = n(i[y + 1]) ? null : i[y + 1].elm, k(t, d, i, f, y, o)) : f > y && M(t, e, u, m)
            }

            function P(t, e, i, n) {
               for (var o = i; o < n; o++) {
                  var a = e[o];
                  if (r(a) && fr(t, a)) return o
               }
            }

            function T(t, e, i, s, c, h) {
               if (t !== e) {
                  r(e.elm) && r(s) && (e = s[c] = bt(e));
                  var d = e.elm = t.elm;
                  if (o(t.isAsyncPlaceholder)) r(e.asyncFactory.resolved) ? D(t.elm, e, i) : e.isAsyncPlaceholder = !0;
                  else if (o(e.isStatic) && o(t.isStatic) && e.key === t.key && (o(e.isCloned) || o(e.isOnce))) e.componentInstance = t.componentInstance;
                  else {
                     var u, p = e.data;
                     r(p) && r(u = p.hook) && r(u = u.prepatch) && u(t, e);
                     var f = t.children,
                        m = e.children;
                     if (r(p) && b(e)) {
                        for (u = 0; u < a.update.length; ++u) a.update[u](t, e);
                        r(u = p.hook) && r(u = u.update) && u(t, e)
                     }
                     n(e.text) ? r(f) && r(m) ? f !== m && C(d, f, m, i, h) : r(m) ? (r(t.text) && l.setTextContent(d, ""), k(d, null, m, 0, m.length - 1, i)) : r(f) ? M(d, f, 0, f.length - 1) : r(t.text) && l.setTextContent(d, "") : t.text !== e.text && l.setTextContent(d, e.text), r(p) && r(u = p.hook) && r(u = u.postpatch) && u(t, e)
                  }
               }
            }

            function O(t, e, i) {
               if (o(i) && r(t.parent)) t.parent.data.pendingInsert = e;
               else
                  for (var n = 0; n < e.length; ++n) e[n].data.hook.insert(e[n])
            }
            var L = m("attrs,class,staticClass,staticStyle,key");

            function D(t, e, i, n) {
               var a, s = e.tag,
                  c = e.data,
                  l = e.children;
               if (n = n || c && c.pre, e.elm = t, o(e.isComment) && r(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
               if (r(c) && (r(a = c.hook) && r(a = a.init) && a(e, !0), r(a = e.componentInstance))) return g(e, i), !0;
               if (r(s)) {
                  if (r(l))
                     if (t.hasChildNodes())
                        if (r(a = c) && r(a = a.domProps) && r(a = a.innerHTML)) {
                           if (a !== t.innerHTML) return !1
                        } else {
                           for (var h = !0, d = t.firstChild, u = 0; u < l.length; u++) {
                              if (!d || !D(d, l[u], i, n)) {
                                 h = !1;
                                 break
                              }
                              d = d.nextSibling
                           }
                           if (!h || d) return !1
                        }
                  else x(e, l, i);
                  if (r(c)) {
                     var p = !1;
                     for (var f in c)
                        if (!L(f)) {
                           p = !0, _(e, i);
                           break
                        }! p && c["class"] && ue(c["class"])
                  }
               } else t.data !== e.text && (t.data = e.text);
               return !0
            }
            return function (t, e, i, s) {
               if (!n(e)) {
                  var c = !1,
                     d = [];
                  if (n(t)) c = !0, p(e, d);
                  else {
                     var u = r(t.nodeType);
                     if (!u && fr(t, e)) T(t, e, d, null, null, s);
                     else {
                        if (u) {
                           if (1 === t.nodeType && t.hasAttribute(R) && (t.removeAttribute(R), i = !0), o(i) && D(t, e, d)) return O(e, d, !0), t;
                           t = h(t)
                        }
                        var f = t.elm,
                           m = l.parentNode(f);
                        if (p(e, d, f._leaveCb ? null : m, l.nextSibling(f)), r(e.parent)) {
                           var g = e.parent,
                              v = b(e);
                           while (g) {
                              for (var y = 0; y < a.destroy.length; ++y) a.destroy[y](g);
                              if (g.elm = e.elm, v) {
                                 for (var x = 0; x < a.create.length; ++x) a.create[x](ur, g);
                                 var _ = g.data.hook.insert;
                                 if (_.merged)
                                    for (var w = 1; w < _.fns.length; w++) _.fns[w]()
                              } else dr(g);
                              g = g.parent
                           }
                        }
                        r(m) ? M(m, [t], 0, 0) : r(t.tag) && S(t)
                     }
                  }
                  return O(e, d, c), e.elm
               }
               r(t) && S(t)
            }
         }
         var yr = {
            create: xr,
            update: xr,
            destroy: function (t) {
               xr(t, ur)
            }
         };

         function xr(t, e) {
            (t.data.directives || e.data.directives) && br(t, e)
         }

         function br(t, e) {
            var i, n, r, o = t === ur,
               a = e === ur,
               s = wr(t.data.directives, t.context),
               c = wr(e.data.directives, e.context),
               l = [],
               h = [];
            for (i in c) n = s[i], r = c[i], n ? (r.oldValue = n.value, Sr(r, "update", e, t), r.def && r.def.componentUpdated && h.push(r)) : (Sr(r, "bind", e, t), r.def && r.def.inserted && l.push(r));
            if (l.length) {
               var d = function () {
                  for (var i = 0; i < l.length; i++) Sr(l[i], "inserted", e, t)
               };
               o ? ye(e, "insert", d) : d()
            }
            if (h.length && ye(e, "postpatch", function () {
                  for (var i = 0; i < h.length; i++) Sr(h[i], "componentUpdated", e, t)
               }), !o)
               for (i in s) c[i] || Sr(s[i], "unbind", t, t, a)
         }
         var _r = Object.create(null);

         function wr(t, e) {
            var i, n, r = Object.create(null);
            if (!t) return r;
            for (i = 0; i < t.length; i++) n = t[i], n.modifiers || (n.modifiers = _r), r[kr(n)] = n, n.def = Xt(e.$options, "directives", n.name, !0);
            return r
         }

         function kr(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
         }

         function Sr(t, e, i, n, r) {
            var o = t.def && t.def[e];
            if (o) try {
               o(i.elm, t, i, n, r)
            } catch (sa) {
               Zt(sa, i.context, "directive " + t.name + " " + e + " hook")
            }
         }
         var Mr = [hr, yr];

         function Ar(t, e) {
            var i = e.componentOptions;
            if ((!r(i) || !1 !== i.Ctor.options.inheritAttrs) && (!n(t.data.attrs) || !n(e.data.attrs))) {
               var o, a, s, c = e.elm,
                  l = t.data.attrs || {},
                  h = e.data.attrs || {};
               for (o in r(h.__ob__) && (h = e.data.attrs = O({}, h)), h) a = h[o], s = l[o], s !== a && Cr(c, o, a);
               for (o in (J || tt) && h.value !== l.value && Cr(c, "value", h.value), l) n(h[o]) && (Dn(o) ? c.removeAttributeNS(Ln, En(o)) : Tn(o) || c.removeAttribute(o))
            }
         }

         function Cr(t, e, i) {
            t.tagName.indexOf("-") > -1 ? Pr(t, e, i) : On(e) ? In(i) ? t.removeAttribute(e) : (i = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, i)) : Tn(e) ? t.setAttribute(e, In(i) || "false" === i ? "false" : "true") : Dn(e) ? In(i) ? t.removeAttributeNS(Ln, En(e)) : t.setAttributeNS(Ln, e, i) : Pr(t, e, i)
         }

         function Pr(t, e, i) {
            if (In(i)) t.removeAttribute(e);
            else {
               if (J && !Q && ("TEXTAREA" === t.tagName || "INPUT" === t.tagName) && "placeholder" === e && !t.__ieph) {
                  var n = function (e) {
                     e.stopImmediatePropagation(), t.removeEventListener("input", n)
                  };
                  t.addEventListener("input", n), t.__ieph = !0
               }
               t.setAttribute(e, i)
            }
         }
         var Tr = {
            create: Ar,
            update: Ar
         };

         function Or(t, e) {
            var i = e.elm,
               o = e.data,
               a = t.data;
            if (!(n(o.staticClass) && n(o.class) && (n(a) || n(a.staticClass) && n(a.class)))) {
               var s = zn(e),
                  c = i._transitionClasses;
               r(c) && (s = Rn(s, jn(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s)
            }
         }
         var Lr, Dr = {
               create: Or,
               update: Or
            },
            Er = "__r",
            Ir = "__c";

         function zr(t) {
            if (r(t[Er])) {
               var e = J ? "change" : "input";
               t[e] = [].concat(t[Er], t[e] || []), delete t[Er]
            }
            r(t[Ir]) && (t.change = [].concat(t[Ir], t.change || []), delete t[Ir])
         }

         function Br(t, e, i) {
            var n = Lr;
            return function r() {
               var o = e.apply(null, arguments);
               null !== o && Rr(t, r, i, n)
            }
         }

         function Nr(t, e, i, n) {
            e = le(e), Lr.addEventListener(t, e, nt ? {
               capture: i,
               passive: n
            } : i)
         }

         function Rr(t, e, i, n) {
            (n || Lr).removeEventListener(t, e._withTask || e, i)
         }

         function jr(t, e) {
            if (!n(t.data.on) || !n(e.data.on)) {
               var i = e.data.on || {},
                  r = t.data.on || {};
               Lr = e.elm, zr(i), ve(i, r, Nr, Rr, Br, e.context), Lr = void 0
            }
         }
         var Hr = {
            create: jr,
            update: jr
         };

         function Gr(t, e) {
            if (!n(t.data.domProps) || !n(e.data.domProps)) {
               var i, o, a = e.elm,
                  s = t.data.domProps || {},
                  c = e.data.domProps || {};
               for (i in r(c.__ob__) && (c = e.data.domProps = O({}, c)), s) n(c[i]) && (a[i] = "");
               for (i in c) {
                  if (o = c[i], "textContent" === i || "innerHTML" === i) {
                     if (e.children && (e.children.length = 0), o === s[i]) continue;
                     1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                  }
                  if ("value" === i) {
                     a._value = o;
                     var l = n(o) ? "" : String(o);
                     Fr(a, l) && (a.value = l)
                  } else a[i] = o
               }
            }
         }

         function Fr(t, e) {
            return !t.composing && ("OPTION" === t.tagName || Wr(t, e) || $r(t, e))
         }

         function Wr(t, e) {
            var i = !0;
            try {
               i = document.activeElement !== t
            } catch (sa) {}
            return i && t.value !== e
         }

         function $r(t, e) {
            var i = t.value,
               n = t._vModifiers;
            if (r(n)) {
               if (n.lazy) return !1;
               if (n.number) return f(i) !== f(e);
               if (n.trim) return i.trim() !== e.trim()
            }
            return i !== e
         }
         var Xr = {
               create: Gr,
               update: Gr
            },
            Vr = b(function (t) {
               var e = {},
                  i = /;(?![^(]*\))/g,
                  n = /:(.+)/;
               return t.split(i).forEach(function (t) {
                  if (t) {
                     var i = t.split(n);
                     i.length > 1 && (e[i[0].trim()] = i[1].trim())
                  }
               }), e
            });

         function Yr(t) {
            var e = Ur(t.style);
            return t.staticStyle ? O(t.staticStyle, e) : e
         }

         function Ur(t) {
            return Array.isArray(t) ? L(t) : "string" === typeof t ? Vr(t) : t
         }

         function Kr(t, e) {
            var i, n = {};
            if (e) {
               var r = t;
               while (r.componentInstance) r = r.componentInstance._vnode, r && r.data && (i = Yr(r.data)) && O(n, i)
            }(i = Yr(t.data)) && O(n, i);
            var o = t;
            while (o = o.parent) o.data && (i = Yr(o.data)) && O(n, i);
            return n
         }
         var qr, Zr = /^--/,
            Jr = /\s*!important$/,
            Qr = function (t, e, i) {
               if (Zr.test(e)) t.style.setProperty(e, i);
               else if (Jr.test(i)) t.style.setProperty(e, i.replace(Jr, ""), "important");
               else {
                  var n = eo(e);
                  if (Array.isArray(i))
                     for (var r = 0, o = i.length; r < o; r++) t.style[n] = i[r];
                  else t.style[n] = i
               }
            },
            to = ["Webkit", "Moz", "ms"],
            eo = b(function (t) {
               if (qr = qr || document.createElement("div").style, t = w(t), "filter" !== t && t in qr) return t;
               for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < to.length; i++) {
                  var n = to[i] + e;
                  if (n in qr) return n
               }
            });

         function io(t, e) {
            var i = e.data,
               o = t.data;
            if (!(n(i.staticStyle) && n(i.style) && n(o.staticStyle) && n(o.style))) {
               var a, s, c = e.elm,
                  l = o.staticStyle,
                  h = o.normalizedStyle || o.style || {},
                  d = l || h,
                  u = Ur(e.data.style) || {};
               e.data.normalizedStyle = r(u.__ob__) ? O({}, u) : u;
               var p = Kr(e, !0);
               for (s in d) n(p[s]) && Qr(c, s, "");
               for (s in p) a = p[s], a !== d[s] && Qr(c, s, null == a ? "" : a)
            }
         }
         var no = {
               create: io,
               update: io
            },
            ro = /\s+/;

         function oo(t, e) {
            if (e && (e = e.trim()))
               if (t.classList) e.indexOf(" ") > -1 ? e.split(ro).forEach(function (e) {
                  return t.classList.add(e)
               }) : t.classList.add(e);
               else {
                  var i = " " + (t.getAttribute("class") || "") + " ";
                  i.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (i + e).trim())
               }
         }

         function ao(t, e) {
            if (e && (e = e.trim()))
               if (t.classList) e.indexOf(" ") > -1 ? e.split(ro).forEach(function (e) {
                  return t.classList.remove(e)
               }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
               else {
                  var i = " " + (t.getAttribute("class") || "") + " ",
                     n = " " + e + " ";
                  while (i.indexOf(n) >= 0) i = i.replace(n, " ");
                  i = i.trim(), i ? t.setAttribute("class", i) : t.removeAttribute("class")
               }
         }

         function so(t) {
            if (t) {
               if ("object" === typeof t) {
                  var e = {};
                  return !1 !== t.css && O(e, co(t.name || "v")), O(e, t), e
               }
               return "string" === typeof t ? co(t) : void 0
            }
         }
         var co = b(function (t) {
               return {
                  enterClass: t + "-enter",
                  enterToClass: t + "-enter-to",
                  enterActiveClass: t + "-enter-active",
                  leaveClass: t + "-leave",
                  leaveToClass: t + "-leave-to",
                  leaveActiveClass: t + "-leave-active"
               }
            }),
            lo = U && !Q,
            ho = "transition",
            uo = "animation",
            po = "transition",
            fo = "transitionend",
            mo = "animation",
            go = "animationend";
         lo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (po = "WebkitTransition", fo = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (mo = "WebkitAnimation", go = "webkitAnimationEnd"));
         var vo = U ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (t) {
            return t()
         };

         function yo(t) {
            vo(function () {
               vo(t)
            })
         }

         function xo(t, e) {
            var i = t._transitionClasses || (t._transitionClasses = []);
            i.indexOf(e) < 0 && (i.push(e), oo(t, e))
         }

         function bo(t, e) {
            t._transitionClasses && v(t._transitionClasses, e), ao(t, e)
         }

         function _o(t, e, i) {
            var n = ko(t, e),
               r = n.type,
               o = n.timeout,
               a = n.propCount;
            if (!r) return i();
            var s = r === ho ? fo : go,
               c = 0,
               l = function () {
                  t.removeEventListener(s, h), i()
               },
               h = function (e) {
                  e.target === t && ++c >= a && l()
               };
            setTimeout(function () {
               c < a && l()
            }, o + 1), t.addEventListener(s, h)
         }
         var wo = /\b(transform|all)(,|$)/;

         function ko(t, e) {
            var i, n = window.getComputedStyle(t),
               r = (n[po + "Delay"] || "").split(", "),
               o = (n[po + "Duration"] || "").split(", "),
               a = So(r, o),
               s = (n[mo + "Delay"] || "").split(", "),
               c = (n[mo + "Duration"] || "").split(", "),
               l = So(s, c),
               h = 0,
               d = 0;
            e === ho ? a > 0 && (i = ho, h = a, d = o.length) : e === uo ? l > 0 && (i = uo, h = l, d = c.length) : (h = Math.max(a, l), i = h > 0 ? a > l ? ho : uo : null, d = i ? i === ho ? o.length : c.length : 0);
            var u = i === ho && wo.test(n[po + "Property"]);
            return {
               type: i,
               timeout: h,
               propCount: d,
               hasTransform: u
            }
         }

         function So(t, e) {
            while (t.length < e.length) t = t.concat(t);
            return Math.max.apply(null, e.map(function (e, i) {
               return Mo(e) + Mo(t[i])
            }))
         }

         function Mo(t) {
            return 1e3 * Number(t.slice(0, -1).replace(",", "."))
         }

         function Ao(t, e) {
            var i = t.elm;
            r(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
            var o = so(t.data.transition);
            if (!n(o) && !r(i._enterCb) && 1 === i.nodeType) {
               var a = o.css,
                  s = o.type,
                  l = o.enterClass,
                  h = o.enterToClass,
                  d = o.enterActiveClass,
                  u = o.appearClass,
                  p = o.appearToClass,
                  m = o.appearActiveClass,
                  g = o.beforeEnter,
                  v = o.enter,
                  y = o.afterEnter,
                  x = o.enterCancelled,
                  b = o.beforeAppear,
                  _ = o.appear,
                  w = o.afterAppear,
                  k = o.appearCancelled,
                  S = o.duration,
                  M = je,
                  A = je.$vnode;
               while (A && A.parent) A = A.parent, M = A.context;
               var C = !M._isMounted || !t.isRootInsert;
               if (!C || _ || "" === _) {
                  var P = C && u ? u : l,
                     T = C && m ? m : d,
                     O = C && p ? p : h,
                     L = C && b || g,
                     D = C && "function" === typeof _ ? _ : v,
                     E = C && w || y,
                     I = C && k || x,
                     z = f(c(S) ? S.enter : S);
                  0;
                  var B = !1 !== a && !Q,
                     R = To(D),
                     j = i._enterCb = N(function () {
                        B && (bo(i, O), bo(i, T)), j.cancelled ? (B && bo(i, P), I && I(i)) : E && E(i), i._enterCb = null
                     });
                  t.data.show || ye(t, "insert", function () {
                     var e = i.parentNode,
                        n = e && e._pending && e._pending[t.key];
                     n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), D && D(i, j)
                  }), L && L(i), B && (xo(i, P), xo(i, T), yo(function () {
                     bo(i, P), j.cancelled || (xo(i, O), R || (Po(z) ? setTimeout(j, z) : _o(i, s, j)))
                  })), t.data.show && (e && e(), D && D(i, j)), B || R || j()
               }
            }
         }

         function Co(t, e) {
            var i = t.elm;
            r(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
            var o = so(t.data.transition);
            if (n(o) || 1 !== i.nodeType) return e();
            if (!r(i._leaveCb)) {
               var a = o.css,
                  s = o.type,
                  l = o.leaveClass,
                  h = o.leaveToClass,
                  d = o.leaveActiveClass,
                  u = o.beforeLeave,
                  p = o.leave,
                  m = o.afterLeave,
                  g = o.leaveCancelled,
                  v = o.delayLeave,
                  y = o.duration,
                  x = !1 !== a && !Q,
                  b = To(p),
                  _ = f(c(y) ? y.leave : y);
               0;
               var w = i._leaveCb = N(function () {
                  i.parentNode && i.parentNode._pending && (i.parentNode._pending[t.key] = null), x && (bo(i, h), bo(i, d)), w.cancelled ? (x && bo(i, l), g && g(i)) : (e(), m && m(i)), i._leaveCb = null
               });
               v ? v(k) : k()
            }

            function k() {
               w.cancelled || (!t.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[t.key] = t), u && u(i), x && (xo(i, l), xo(i, d), yo(function () {
                  bo(i, l), w.cancelled || (xo(i, h), b || (Po(_) ? setTimeout(w, _) : _o(i, s, w)))
               })), p && p(i, w), x || b || w())
            }
         }

         function Po(t) {
            return "number" === typeof t && !isNaN(t)
         }

         function To(t) {
            if (n(t)) return !1;
            var e = t.fns;
            return r(e) ? To(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
         }

         function Oo(t, e) {
            !0 !== e.data.show && Ao(e)
         }
         var Lo = U ? {
               create: Oo,
               activate: Oo,
               remove: function (t, e) {
                  !0 !== t.data.show ? Co(t, e) : e()
               }
            } : {},
            Do = [Tr, Dr, Hr, Xr, no, Lo],
            Eo = Do.concat(Mr),
            Io = vr({
               nodeOps: lr,
               modules: Eo
            });
         Q && document.addEventListener("selectionchange", function () {
            var t = document.activeElement;
            t && t.vmodel && Fo(t, "input")
         });
         var zo = {
            inserted: function (t, e, i, n) {
               "select" === i.tag ? (n.elm && !n.elm._vOptions ? ye(i, "postpatch", function () {
                  zo.componentUpdated(t, e, i)
               }) : Bo(t, e, i.context), t._vOptions = [].map.call(t.options, jo)) : ("textarea" === i.tag || Kn(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", Ho), t.addEventListener("compositionend", Go), t.addEventListener("change", Go), Q && (t.vmodel = !0)))
            },
            componentUpdated: function (t, e, i) {
               if ("select" === i.tag) {
                  Bo(t, e, i.context);
                  var n = t._vOptions,
                     r = t._vOptions = [].map.call(t.options, jo);
                  if (r.some(function (t, e) {
                        return !z(t, n[e])
                     })) {
                     var o = t.multiple ? e.value.some(function (t) {
                        return Ro(t, r)
                     }) : e.value !== e.oldValue && Ro(e.value, r);
                     o && Fo(t, "change")
                  }
               }
            }
         };

         function Bo(t, e, i) {
            No(t, e, i), (J || tt) && setTimeout(function () {
               No(t, e, i)
            }, 0)
         }

         function No(t, e, i) {
            var n = e.value,
               r = t.multiple;
            if (!r || Array.isArray(n)) {
               for (var o, a, s = 0, c = t.options.length; s < c; s++)
                  if (a = t.options[s], r) o = B(n, jo(a)) > -1, a.selected !== o && (a.selected = o);
                  else if (z(jo(a), n)) return void(t.selectedIndex !== s && (t.selectedIndex = s));
               r || (t.selectedIndex = -1)
            }
         }

         function Ro(t, e) {
            return e.every(function (e) {
               return !z(e, t)
            })
         }

         function jo(t) {
            return "_value" in t ? t._value : t.value
         }

         function Ho(t) {
            t.target.composing = !0
         }

         function Go(t) {
            t.target.composing && (t.target.composing = !1, Fo(t.target, "input"))
         }

         function Fo(t, e) {
            var i = document.createEvent("HTMLEvents");
            i.initEvent(e, !0, !0), t.dispatchEvent(i)
         }

         function Wo(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : Wo(t.componentInstance._vnode)
         }
         var $o = {
               bind: function (t, e, i) {
                  var n = e.value;
                  i = Wo(i);
                  var r = i.data && i.data.transition,
                     o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                  n && r ? (i.data.show = !0, Ao(i, function () {
                     t.style.display = o
                  })) : t.style.display = n ? o : "none"
               },
               update: function (t, e, i) {
                  var n = e.value,
                     r = e.oldValue;
                  if (!n !== !r) {
                     i = Wo(i);
                     var o = i.data && i.data.transition;
                     o ? (i.data.show = !0, n ? Ao(i, function () {
                        t.style.display = t.__vOriginalDisplay
                     }) : Co(i, function () {
                        t.style.display = "none"
                     })) : t.style.display = n ? t.__vOriginalDisplay : "none"
                  }
               },
               unbind: function (t, e, i, n, r) {
                  r || (t.style.display = t.__vOriginalDisplay)
               }
            },
            Xo = {
               model: zo,
               show: $o
            },
            Vo = {
               name: String,
               appear: Boolean,
               css: Boolean,
               mode: String,
               type: String,
               enterClass: String,
               leaveClass: String,
               enterToClass: String,
               leaveToClass: String,
               enterActiveClass: String,
               leaveActiveClass: String,
               appearClass: String,
               appearActiveClass: String,
               appearToClass: String,
               duration: [Number, String, Object]
            };

         function Yo(t) {
            var e = t && t.componentOptions;
            return e && e.Ctor.options.abstract ? Yo(Te(e.children)) : t
         }

         function Uo(t) {
            var e = {},
               i = t.$options;
            for (var n in i.propsData) e[n] = t[n];
            var r = i._parentListeners;
            for (var o in r) e[w(o)] = r[o];
            return e
         }

         function Ko(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
               props: e.componentOptions.propsData
            })
         }

         function qo(t) {
            while (t = t.parent)
               if (t.data.transition) return !0
         }

         function Zo(t, e) {
            return e.key === t.key && e.tag === t.tag
         }
         var Jo = function (t) {
               return t.tag || Pe(t)
            },
            Qo = function (t) {
               return "show" === t.name
            },
            ta = {
               name: "transition",
               props: Vo,
               abstract: !0,
               render: function (t) {
                  var e = this,
                     i = this.$slots.default;
                  if (i && (i = i.filter(Jo), i.length)) {
                     0;
                     var n = this.mode;
                     0;
                     var r = i[0];
                     if (qo(this.$vnode)) return r;
                     var o = Yo(r);
                     if (!o) return r;
                     if (this._leaving) return Ko(t, r);
                     var a = "__transition-" + this._uid + "-";
                     o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
                     var c = (o.data || (o.data = {})).transition = Uo(this),
                        l = this._vnode,
                        h = Yo(l);
                     if (o.data.directives && o.data.directives.some(Qo) && (o.data.show = !0), h && h.data && !Zo(o, h) && !Pe(h) && (!h.componentInstance || !h.componentInstance._vnode.isComment)) {
                        var d = h.data.transition = O({}, c);
                        if ("out-in" === n) return this._leaving = !0, ye(d, "afterLeave", function () {
                           e._leaving = !1, e.$forceUpdate()
                        }), Ko(t, r);
                        if ("in-out" === n) {
                           if (Pe(o)) return l;
                           var u, p = function () {
                              u()
                           };
                           ye(c, "afterEnter", p), ye(c, "enterCancelled", p), ye(d, "delayLeave", function (t) {
                              u = t
                           })
                        }
                     }
                     return r
                  }
               }
            },
            ea = O({
               tag: String,
               moveClass: String
            }, Vo);
         delete ea.mode;
         var ia = {
            props: ea,
            beforeMount: function () {
               var t = this,
                  e = this._update;
               this._update = function (i, n) {
                  var r = He(t);
                  t.__patch__(t._vnode, t.kept, !1, !0), t._vnode = t.kept, r(), e.call(t, i, n)
               }
            },
            render: function (t) {
               for (var e = this.tag || this.$vnode.data.tag || "span", i = Object.create(null), n = this.prevChildren = this.children, r = this.$slots.default || [], o = this.children = [], a = Uo(this), s = 0; s < r.length; s++) {
                  var c = r[s];
                  if (c.tag)
                     if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) o.push(c), i[c.key] = c, (c.data || (c.data = {})).transition = a;
                     else;
               }
               if (n) {
                  for (var l = [], h = [], d = 0; d < n.length; d++) {
                     var u = n[d];
                     u.data.transition = a, u.data.pos = u.elm.getBoundingClientRect(), i[u.key] ? l.push(u) : h.push(u)
                  }
                  this.kept = t(e, null, l), this.removed = h
               }
               return t(e, null, o)
            },
            updated: function () {
               var t = this.prevChildren,
                  e = this.moveClass || (this.name || "v") + "-move";
               t.length && this.hasMove(t[0].elm, e) && (t.forEach(na), t.forEach(ra), t.forEach(oa), this._reflow = document.body.offsetHeight, t.forEach(function (t) {
                  if (t.data.moved) {
                     var i = t.elm,
                        n = i.style;
                     xo(i, e), n.transform = n.WebkitTransform = n.transitionDuration = "", i.addEventListener(fo, i._moveCb = function t(n) {
                        n && n.target !== i || n && !/transform$/.test(n.propertyName) || (i.removeEventListener(fo, t), i._moveCb = null, bo(i, e))
                     })
                  }
               }))
            },
            methods: {
               hasMove: function (t, e) {
                  if (!lo) return !1;
                  if (this._hasMove) return this._hasMove;
                  var i = t.cloneNode();
                  t._transitionClasses && t._transitionClasses.forEach(function (t) {
                     ao(i, t)
                  }), oo(i, e), i.style.display = "none", this.$el.appendChild(i);
                  var n = ko(i);
                  return this.$el.removeChild(i), this._hasMove = n.hasTransform
               }
            }
         };

         function na(t) {
            t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
         }

         function ra(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
         }

         function oa(t) {
            var e = t.data.pos,
               i = t.data.newPos,
               n = e.left - i.left,
               r = e.top - i.top;
            if (n || r) {
               t.data.moved = !0;
               var o = t.elm.style;
               o.transform = o.WebkitTransform = "translate(" + n + "px," + r + "px)", o.transitionDuration = "0s"
            }
         }
         var aa = {
            Transition: ta,
            TransitionGroup: ia
         };
         dn.config.mustUseProp = Pn, dn.config.isReservedTag = Xn, dn.config.isReservedAttr = An, dn.config.getTagNamespace = Vn, dn.config.isUnknownElement = Un, O(dn.options.directives, Xo), O(dn.options.components, aa), dn.prototype.__patch__ = U ? Io : D, dn.prototype.$mount = function (t, e) {
            return t = t && U ? qn(t) : void 0, We(this, t, e)
         }, U && setTimeout(function () {
            G.devtools && at && at.emit("init", dn)
         }, 0), e["a"] = dn
      }).call(this, i("c8ba"))
   },
   "2b4c": function (t, e, i) {
      var n = i("5537")("wks"),
         r = i("ca5a"),
         o = i("7726").Symbol,
         a = "function" == typeof o,
         s = t.exports = function (t) {
            return n[t] || (n[t] = a && o[t] || (a ? o : r)("Symbol." + t))
         };
      s.store = n
   },
   "2d00": function (t, e) {
      t.exports = !1
   },
   "2d95": function (t, e) {
      var i = {}.toString;
      t.exports = function (t) {
         return i.call(t).slice(8, -1)
      }
   },
   "2ea1": function (t, e, i) {
      var n = i("6f8a");
      t.exports = function (t, e) {
         if (!n(t)) return t;
         var i, r;
         if (e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r;
         if ("function" == typeof (i = t.valueOf) && !n(r = i.call(t))) return r;
         if (!e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r;
         throw TypeError("Can't convert object to primitive value")
      }
   },
   "2f17": function (t, e, i) {
      "use strict";
      var n = Object.prototype.toString,
         r = i("4de8"),
         o = i("21d0"),
         a = {
            "[[DefaultValue]]": function (t) {
               var e;
               if (e = arguments.length > 1 ? arguments[1] : "[object Date]" === n.call(t) ? String : Number, e === String || e === Number) {
                  var i, a, s = e === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                  for (a = 0; a < s.length; ++a)
                     if (o(t[s[a]]) && (i = t[s[a]](), r(i))) return i;
                  throw new TypeError("No default value")
               }
               throw new TypeError("invalid [[DefaultValue]] hint supplied")
            }
         };
      t.exports = function (t) {
         return r(t) ? t : arguments.length > 1 ? a["[[DefaultValue]]"](t, arguments[1]) : a["[[DefaultValue]]"](t)
      }
   },
   "302f": function (t, e, i) {
      var n = i("0f89"),
         r = i("f2fe"),
         o = i("1b55")("species");
      t.exports = function (t, e) {
         var i, a = n(t).constructor;
         return void 0 === a || void 0 == (i = n(a)[o]) ? e : r(i)
      }
   },
   "31c2": function (t, e) {
      e.f = Object.getOwnPropertySymbols
   },
   "31f4": function (t, e) {
      t.exports = function (t, e, i) {
         var n = void 0 === i;
         switch (e.length) {
            case 0:
               return n ? t() : t.call(i);
            case 1:
               return n ? t(e[0]) : t.call(i, e[0]);
            case 2:
               return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
            case 3:
               return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
            case 4:
               return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
         }
         return t.apply(i, e)
      }
   },
   "32e9": function (t, e, i) {
      var n = i("86cc"),
         r = i("4630");
      t.exports = i("9e1e") ? function (t, e, i) {
         return n.f(t, e, r(1, i))
      } : function (t, e, i) {
         return t[e] = i, t
      }
   },
   "33a4": function (t, e, i) {
      var n = i("84f2"),
         r = i("2b4c")("iterator"),
         o = Array.prototype;
      t.exports = function (t) {
         return void 0 !== t && (n.Array === t || o[r] === t)
      }
   },
   3504: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "æ€»å¸‚å€¼æŽ’å",
            mcap: "å¸‚å€¼",
            "24h_volume": "24 å°æ—¶äº¤æ˜“é‡",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨",
            crypto_price_comparison: "åŠ å¯†ä»·æ ¼æ¯”è¾ƒ",
            crypto_market_cap_comparison: "åŠ å¯†å¸‚å€¼æ¯”è¾ƒ"
         },
         coin_price_static_headline_widget: {
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
         },
         coin_price_chart_widget: {
            "24h_high": "24å°æ—¶é«˜",
            "24h_low": "24å°æ—¶ä½Ž",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
         },
         coin_price_marquee_widget: {
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
         },
         coin_list_widget: {
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
         },
         beam_widget: {
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
         },
         coin_ticker_widget: {
            "24h_high": "24å°æ—¶é«˜",
            "24h_low": "24å°æ—¶ä½Ž",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
         },
         coin_heatmap_widget: {
            title: "åŠ å¯†è´§å¸æ ‘åž‹å›¾",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "24 å°æ—¶äº¤æ˜“é‡",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "äº¤æ˜“æ‰€",
            pair: "å¯¹",
            price: "ä»·æ ¼",
            volume: "äº¤æ˜“é‡",
            trust_score: "ä¿¡ç”¨è¯„åˆ†",
            view_price_chart: "æµè§ˆä»·æ ¼èµ°åŠ¿å›¾",
            powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨",
            view_all: "View all %{coin} markets"
         }
      }
   },
   "36dc": function (t, e, i) {
      var n = i("da3c"),
         r = i("df0a").set,
         o = n.MutationObserver || n.WebKitMutationObserver,
         a = n.process,
         s = n.Promise,
         c = "process" == i("6e1f")(a);
      t.exports = function () {
         var t, e, i, l = function () {
            var n, r;
            c && (n = a.domain) && n.exit();
            while (t) {
               r = t.fn, t = t.next;
               try {
                  r()
               } catch (o) {
                  throw t ? i() : e = void 0, o
               }
            }
            e = void 0, n && n.enter()
         };
         if (c) i = function () {
            a.nextTick(l)
         };
         else if (!o || n.navigator && n.navigator.standalone)
            if (s && s.resolve) {
               var h = s.resolve(void 0);
               i = function () {
                  h.then(l)
               }
            } else i = function () {
               r.call(n, l)
            };
         else {
            var d = !0,
               u = document.createTextNode("");
            new o(l).observe(u, {
               characterData: !0
            }), i = function () {
               u.data = d = !d
            }
         }
         return function (n) {
            var r = {
               fn: n,
               next: void 0
            };
            e && (e.next = r), t || (t = r, i()), e = r
         }
      }
   },
   3846: function (t, e, i) {
      i("9e1e") && "g" != /./g.flags && i("86cc").f(RegExp.prototype, "flags", {
         configurable: !0,
         get: i("0bfb")
      })
   },
   "38fd": function (t, e, i) {
      var n = i("69a8"),
         r = i("4bf8"),
         o = i("613b")("IE_PROTO"),
         a = Object.prototype;
      t.exports = Object.getPrototypeOf || function (t) {
         return t = r(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
      }
   },
   3904: function (t, e, i) {
      var n = i("8ce0");
      t.exports = function (t, e, i) {
         for (var r in e) i && t[r] ? t[r] = e[r] : n(t, r, e[r]);
         return t
      }
   },
   "390b": function (t, e, i) {
      e = t.exports = i("2350")(!1), e.i(i("51e3"), ""), e.push([t.i, ".cg-container {\n  font-family: sans-serif;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n\n  color: #4c4c4c;\n  line-height: 1.25;\n  font-size: 12px;\n\n  min-width: 250px;\n  box-sizing: border-box;\n}\n.cg-container[data-loading] .cg-widget {\n  display: none;\n}\n.cg-active-button rect {\n  fill: #ffffff !important;display: none;\n}\n.cg-active-button text {\n  fill: white !important;\n}\n", ""])
   },
   "3adc": function (t, e, i) {
      var n = i("0f89"),
         r = i("a47f"),
         o = i("2ea1"),
         a = Object.defineProperty;
      e.f = i("7d95") ? Object.defineProperty : function (t, e, i) {
         if (n(t), e = o(e, !0), n(i), r) try {
            return a(t, e, i)
         } catch (s) {}
         if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
         return "value" in i && (t[e] = i.value), t
      }
   },
   "41a0": function (t, e, i) {
      "use strict";
      var n = i("2aeb"),
         r = i("4630"),
         o = i("7f20"),
         a = {};
      i("32e9")(a, i("2b4c")("iterator"), function () {
         return this
      }), t.exports = function (t, e, i) {
         t.prototype = n(a, {
            next: r(1, i)
         }), o(t, e + " Iterator")
      }
   },
   "436c": function (t, e, i) {
      var n = i("1b55")("iterator"),
         r = !1;
      try {
         var o = [7][n]();
         o["return"] = function () {
            r = !0
         }, Array.from(o, function () {
            throw 2
         })
      } catch (a) {}
      t.exports = function (t, e) {
         if (!e && !r) return !1;
         var i = !1;
         try {
            var o = [7],
               s = o[n]();
            s.next = function () {
               return {
                  done: i = !0
               }
            }, o[n] = function () {
               return s
            }, t(o)
         } catch (a) {}
         return i
      }
   },
   "43c8": function (t, e) {
      var i = {}.hasOwnProperty;
      t.exports = function (t, e) {
         return i.call(t, e)
      }
   },
   4588: function (t, e) {
      var i = Math.ceil,
         n = Math.floor;
      t.exports = function (t) {
         return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
      }
   },
   4630: function (t, e) {
      t.exports = function (t, e) {
         return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
         }
      }
   },
   "4a59": function (t, e, i) {
      var n = i("9b43"),
         r = i("1fa8"),
         o = i("33a4"),
         a = i("cb7c"),
         s = i("9def"),
         c = i("27ee"),
         l = {},
         h = {};
      e = t.exports = function (t, e, i, d, u) {
         var p, f, m, g, v = u ? function () {
               return t
            } : c(t),
            y = n(i, d, e ? 2 : 1),
            x = 0;
         if ("function" != typeof v) throw TypeError(t + " is not iterable!");
         if (o(v)) {
            for (p = s(t.length); p > x; x++)
               if (g = e ? y(a(f = t[x])[0], f[1]) : y(t[x]), g === l || g === h) return g
         } else
            for (m = v.call(t); !(f = m.next()).done;)
               if (g = r(m, y, f.value, e), g === l || g === h) return g
      };
      e.BREAK = l, e.RETURN = h
   },
   "4bf8": function (t, e, i) {
      var n = i("be13");
      t.exports = function (t) {
         return Object(n(t))
      }
   },
   "4de8": function (t, e) {
      t.exports = function (t) {
         return null === t || "function" !== typeof t && "object" !== typeof t
      }
   },
   5176: function (t, e, i) {
      t.exports = i("81ee")
   },
   "51e3": function (t, e, i) {
      e = t.exports = i("2350")(!1), e.push([t.i, ".cg-default {\n  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Helvetica, Arial, sans-serif,\n    apple color emoji, segoe ui emoji, segoe ui symbol;\n}\n.cg-bold {\n  font-weight: 600;\n}\n.cg-center {\n  text-align: center;\n}\n.cg-primary-color {\n  color: #8dc647 !important;\n}\n.cg-primary-color-dark {\n  color: #000000 !important;\n}\n.cg-red-color-dark {\n  color: #c2220d !important;\n}\n.cg-red-color {\n  color: #ff614d !important;\n}\n.cg-2xs {\n  font-size: 8.8px; /* 0.55rem; */\n}\n.cg-xs {\n  font-size: 10.4px; /* 0.65rem */\n}\n.cg-sm {\n  font-size: 12.8px; /* 0.8rem */\n}\n.cg-normal {\n  font-size: 13.6px; /* 0.85rem */\n}\n.cg-base {\n  font-size: 16px; /* 16px */\n}\n.cg-medium {\n  font-size: 19.2px; /* 1.2rem */\n}\n.cg-lg {\n  font-size: 24px; /* 1.5rem */\n}\n.cg-xl {\n  font-size: 30.4px; /* 1.9rem */\n}\n.cg-cap {\n  text-transform: capitalize;\n}\n.cg-no-underline {\n  text-decoration: none;\n}\n.cg-nowrap {\n  white-space: nowrap;\n}\n\n.cg-m-0 {\n  margin: 0;\n}\n.cg-m-1 {\n  margin: 4px;\n}\n.cg-m-2 {\n  margin: 8px;\n}\n.cg-mt-1 {\n  margin-top: 4px;\n}\n.cg-mb-1 {\n  margin-bottom: 4px;\n}\n.cg-ml-1 {\n  margin-left: 4px;\n}\n.cg-mr-1 {\n  margin-right: 4px;\n}\n.cg-mt-2 {\n  margin-top: 8px;\n}\n.cg-ml-2 {\n  margin-left: 8px;\n}\n.cg-mr-2 {\n  margin-right: 8px;\n}\n.cg-mb-2 {\n  margin-bottom: 8px;\n}\n.cg-mx-1 {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.cg-my-1 {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n.cg-mx-2 {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.cg-my-2 {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.cg-my-5 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.cg-p-1 {\n  padding: 4px;\n}\n.cg-p-2 {\n  padding: 8px;\n}\n.cg-p-3 {\n  padding: 12px;\n}\n.cg-p-4 {\n  padding: 16px;\n}\n.cg-pt-1 {\n  padding-top: 4px;\n}\n.cg-pb-1 {\n  padding-bottom: 4px;\n}\n.cg-pt-2 {\n  padding-top: 8px;\n}\n.cg-pb-2 {\n  padding-bottom: 8px;\n}\n.cg-pt-3 {\n  padding-top: 12px;\n}\n.cg-pb-3 {\n  padding-bottom: 12px;\n}\n.cg-py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.cg-px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.cg-py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.cg-px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.cg-py-3 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.cg-px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.cg-px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.cg-py-4 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.cg-py-5 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.cg-pr-1 {\n  padding-right: 4px;\n}\n.cg-pr-2 {\n  padding-right: 8px;\n}\n\n.cg-flex {\n  display: flex !important;\n}\n.cg-flex-row {\n  flex-direction: row;\n}\n.cg-flex-column {\n  flex-direction: column;\n}\n\n.cg-items-stretch {\n  align-items: flex-stretch;\n}\n.cg-items-start {\n  align-items: flex-start;\n}\n.cg-items-center {\n  align-items: center;\n}\n.cg-items-end {\n  align-items: flex-end;\n}\n.cg-items-baseline {\n  align-items: baseline;\n}\n\n.cg-justify-start {\n  justify-content: flex-start;\n}\n.cg-justify-center {\n  justify-content: center;\n}\n.cg-justify-end {\n  justify-content: flex-end;\n}\n.cg-justify-between {\n  justify-content: space-between;\n}\n.cg-justify-around {\n  justify-content: space-around;\n}\n\n.cg-self-auto {\n  align-self: auto;\n}\n.cg-self-start {\n  align-self: flex-start;\n}\n.cg-self-center {\n  align-self: center;\n}\n.cg-self-end {\n  align-self: flex-end;\n}\n.cg-self-stretch {\n  align-self: stretch;\n}\n\n.cg-relative {\n  position: relative;\n}\n.cg-absolute {\n  position: absolute;\n}\n.cg-block {\n  display: block;\n}\n", ""])
   },
   "520a": function (t, e, i) {
      "use strict";
      var n = i("0bfb"),
         r = RegExp.prototype.exec,
         o = String.prototype.replace,
         a = r,
         s = "lastIndex",
         c = function () {
            var t = /a/,
               e = /b*/g;
            return r.call(t, "a"), r.call(e, "a"), 0 !== t[s] || 0 !== e[s]
         }(),
         l = void 0 !== /()??/.exec("")[1],
         h = c || l;
      h && (a = function (t) {
         var e, i, a, h, d = this;
         return l && (i = new RegExp("^" + d.source + "$(?!\\s)", n.call(d))), c && (e = d[s]), a = r.call(d, t), c && a && (d[s] = d.global ? a.index + a[0].length : e), l && a && a.length > 1 && o.call(a[0], i, function () {
            for (h = 1; h < arguments.length - 2; h++) void 0 === arguments[h] && (a[h] = void 0)
         }), a
      }), t.exports = a
   },
   "52a7": function (t, e) {
      e.f = {}.propertyIsEnumerable
   },
   5309: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
         return n
      });
      var n = {
         customElement: {
            src: "https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.11.1/document-register-element.js",
            integrity: "sha384-zA6V4chYFGgsezh1yAQzus2VNUcyTyGI3NO7L5pEiE8AOXv3EC+OS2C//72VU6Mg"
         },
         fetch: {
            src: "https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.4/fetch.min.js",
            integrity: "sha384-2kkuqwSCFze1y7UcAejUH6wt2MpQ4naa++zWP0SxyUC/jnwq91SAfe14RAruXtnV"
         },
         cssvar: {
            src: "https://cdn.jsdelivr.net/npm/css-vars-ponyfill@1.16.2",
            integrity: "sha384-4sVVstGAX5EEHQzxsff05CedY46UVjXOMcU5elu94vztG5bO2VSAq69D1ZPGPL5E"
         }
      }
   },
   "551c": function (t, e, i) {
      "use strict";
      var n, r, o, a, s = i("2d00"),
         c = i("7726"),
         l = i("9b43"),
         h = i("23c6"),
         d = i("5ca1"),
         u = i("d3f4"),
         p = i("d8e8"),
         f = i("f605"),
         m = i("4a59"),
         g = i("ebd6"),
         v = i("1991").set,
         y = i("8079")(),
         x = i("a5b8"),
         b = i("9c80"),
         _ = i("a25f"),
         w = i("bcaa"),
         k = "Promise",
         S = c.TypeError,
         M = c.process,
         A = M && M.versions,
         C = A && A.v8 || "",
         P = c[k],
         T = "process" == h(M),
         O = function () {},
         L = r = x.f,
         D = !! function () {
            try {
               var t = P.resolve(1),
                  e = (t.constructor = {})[i("2b4c")("species")] = function (t) {
                     t(O, O)
                  };
               return (T || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e && 0 !== C.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
            } catch (n) {}
         }(),
         E = function (t) {
            var e;
            return !(!u(t) || "function" != typeof (e = t.then)) && e
         },
         I = function (t, e) {
            if (!t._n) {
               t._n = !0;
               var i = t._c;
               y(function () {
                  var n = t._v,
                     r = 1 == t._s,
                     o = 0,
                     a = function (e) {
                        var i, o, a, s = r ? e.ok : e.fail,
                           c = e.resolve,
                           l = e.reject,
                           h = e.domain;
                        try {
                           s ? (r || (2 == t._h && N(t), t._h = 1), !0 === s ? i = n : (h && h.enter(), i = s(n), h && (h.exit(), a = !0)), i === e.promise ? l(S("Promise-chain cycle")) : (o = E(i)) ? o.call(i, c, l) : c(i)) : l(n)
                        } catch (d) {
                           h && !a && h.exit(), l(d)
                        }
                     };
                  while (i.length > o) a(i[o++]);
                  t._c = [], t._n = !1, e && !t._h && z(t)
               })
            }
         },
         z = function (t) {
            v.call(c, function () {
               var e, i, n, r = t._v,
                  o = B(t);
               if (o && (e = b(function () {
                     T ? M.emit("unhandledRejection", r, t) : (i = c.onunhandledrejection) ? i({
                        promise: t,
                        reason: r
                     }) : (n = c.console) && n.error && n.error("Unhandled promise rejection", r)
                  }), t._h = T || B(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            })
         },
         B = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
         },
         N = function (t) {
            v.call(c, function () {
               var e;
               T ? M.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                  promise: t,
                  reason: t._v
               })
            })
         },
         R = function (t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
         },
         j = function (t) {
            var e, i = this;
            if (!i._d) {
               i._d = !0, i = i._w || i;
               try {
                  if (i === t) throw S("Promise can't be resolved itself");
                  (e = E(t)) ? y(function () {
                     var n = {
                        _w: i,
                        _d: !1
                     };
                     try {
                        e.call(t, l(j, n, 1), l(R, n, 1))
                     } catch (r) {
                        R.call(n, r)
                     }
                  }): (i._v = t, i._s = 1, I(i, !1))
               } catch (n) {
                  R.call({
                     _w: i,
                     _d: !1
                  }, n)
               }
            }
         };
      D || (P = function (t) {
         f(this, P, k, "_h"), p(t), n.call(this);
         try {
            t(l(j, this, 1), l(R, this, 1))
         } catch (e) {
            R.call(this, e)
         }
      }, n = function (t) {
         this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
      }, n.prototype = i("dcbc")(P.prototype, {
         then: function (t, e) {
            var i = L(g(this, P));
            return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = T ? M.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && I(this, !1), i.promise
         },
         catch: function (t) {
            return this.then(void 0, t)
         }
      }), o = function () {
         var t = new n;
         this.promise = t, this.resolve = l(j, t, 1), this.reject = l(R, t, 1)
      }, x.f = L = function (t) {
         return t === P || t === a ? new o(t) : r(t)
      }), d(d.G + d.W + d.F * !D, {
         Promise: P
      }), i("7f20")(P, k), i("7a56")(k), a = i("8378")[k], d(d.S + d.F * !D, k, {
         reject: function (t) {
            var e = L(this),
               i = e.reject;
            return i(t), e.promise
         }
      }), d(d.S + d.F * (s || !D), k, {
         resolve: function (t) {
            return w(s && this === a ? P : this, t)
         }
      }), d(d.S + d.F * !(D && i("5cc5")(function (t) {
         P.all(t)["catch"](O)
      })), k, {
         all: function (t) {
            var e = this,
               i = L(e),
               n = i.resolve,
               r = i.reject,
               o = b(function () {
                  var i = [],
                     o = 0,
                     a = 1;
                  m(t, !1, function (t) {
                     var s = o++,
                        c = !1;
                     i.push(void 0), a++, e.resolve(t).then(function (t) {
                        c || (c = !0, i[s] = t, --a || n(i))
                     }, r)
                  }), --a || n(i)
               });
            return o.e && r(o.v), i.promise
         },
         race: function (t) {
            var e = this,
               i = L(e),
               n = i.reject,
               r = b(function () {
                  m(t, !1, function (t) {
                     e.resolve(t).then(i.resolve, n)
                  })
               });
            return r.e && n(r.v), i.promise
         }
      })
   },
   5537: function (t, e, i) {
      var n = i("8378"),
         r = i("7726"),
         o = "__core-js_shared__",
         a = r[o] || (r[o] = {});
      (t.exports = function (t, e) {
         return a[t] || (a[t] = void 0 !== e ? e : {})
      })("versions", []).push({
         version: n.version,
         mode: i("2d00") ? "pure" : "global",
         copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
      })
   },
   "560b": function (t, e, i) {
      var n = i("bc25"),
         r = i("9c93"),
         o = i("c227"),
         a = i("0f89"),
         s = i("a5ab"),
         c = i("f159"),
         l = {},
         h = {};
      e = t.exports = function (t, e, i, d, u) {
         var p, f, m, g, v = u ? function () {
               return t
            } : c(t),
            y = n(i, d, e ? 2 : 1),
            x = 0;
         if ("function" != typeof v) throw TypeError(t + " is not iterable!");
         if (o(v)) {
            for (p = s(t.length); p > x; x++)
               if (g = e ? y(a(f = t[x])[0], f[1]) : y(t[x]), g === l || g === h) return g
         } else
            for (m = v.call(t); !(f = m.next()).done;)
               if (g = r(m, y, f.value, e), g === l || g === h) return g
      };
      e.BREAK = l, e.RETURN = h
   },
   "562e": function (t, e, i) {
      "use strict";
      var n = i("0f7c"),
         r = i("0f01"),
         o = n.call(Function.call, String.prototype.replace),
         a = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
         s = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
      t.exports = function () {
         var t = r.ToString(r.CheckObjectCoercible(this));
         return o(o(t, a, ""), s, "")
      }
   },
   "565d": function (t, e, i) {
      var n = i("6a9b"),
         r = i("d876").f,
         o = {}.toString,
         a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
         s = function (t) {
            try {
               return r(t)
            } catch (e) {
               return a.slice()
            }
         };
      t.exports.f = function (t) {
         return a && "[object Window]" == o.call(t) ? s(t) : r(n(t))
      }
   },
   5927: function (t, e, i) {
      i("93c4"), i("b42c"), t.exports = i("fda1").f("iterator")
   },
   5975: function (t, e) {
      t.exports = function (t) {
         return t >= 0 ? 1 : -1
      }
   },
   "5b5f": function (t, e, i) {
      "use strict";
      var n, r, o, a, s = i("b457"),
         c = i("da3c"),
         l = i("bc25"),
         h = i("7d8a"),
         d = i("d13f"),
         u = i("6f8a"),
         p = i("f2fe"),
         f = i("b0bc"),
         m = i("560b"),
         g = i("302f"),
         v = i("df0a").set,
         y = i("36dc")(),
         x = i("03ca"),
         b = i("75c9"),
         _ = i("8a12"),
         w = i("decf"),
         k = "Promise",
         S = c.TypeError,
         M = c.process,
         A = M && M.versions,
         C = A && A.v8 || "",
         P = c[k],
         T = "process" == h(M),
         O = function () {},
         L = r = x.f,
         D = !! function () {
            try {
               var t = P.resolve(1),
                  e = (t.constructor = {})[i("1b55")("species")] = function (t) {
                     t(O, O)
                  };
               return (T || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e && 0 !== C.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
            } catch (n) {}
         }(),
         E = function (t) {
            var e;
            return !(!u(t) || "function" != typeof (e = t.then)) && e
         },
         I = function (t, e) {
            if (!t._n) {
               t._n = !0;
               var i = t._c;
               y(function () {
                  var n = t._v,
                     r = 1 == t._s,
                     o = 0,
                     a = function (e) {
                        var i, o, a, s = r ? e.ok : e.fail,
                           c = e.resolve,
                           l = e.reject,
                           h = e.domain;
                        try {
                           s ? (r || (2 == t._h && N(t), t._h = 1), !0 === s ? i = n : (h && h.enter(), i = s(n), h && (h.exit(), a = !0)), i === e.promise ? l(S("Promise-chain cycle")) : (o = E(i)) ? o.call(i, c, l) : c(i)) : l(n)
                        } catch (d) {
                           h && !a && h.exit(), l(d)
                        }
                     };
                  while (i.length > o) a(i[o++]);
                  t._c = [], t._n = !1, e && !t._h && z(t)
               })
            }
         },
         z = function (t) {
            v.call(c, function () {
               var e, i, n, r = t._v,
                  o = B(t);
               if (o && (e = b(function () {
                     T ? M.emit("unhandledRejection", r, t) : (i = c.onunhandledrejection) ? i({
                        promise: t,
                        reason: r
                     }) : (n = c.console) && n.error && n.error("Unhandled promise rejection", r)
                  }), t._h = T || B(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            })
         },
         B = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
         },
         N = function (t) {
            v.call(c, function () {
               var e;
               T ? M.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                  promise: t,
                  reason: t._v
               })
            })
         },
         R = function (t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
         },
         j = function (t) {
            var e, i = this;
            if (!i._d) {
               i._d = !0, i = i._w || i;
               try {
                  if (i === t) throw S("Promise can't be resolved itself");
                  (e = E(t)) ? y(function () {
                     var n = {
                        _w: i,
                        _d: !1
                     };
                     try {
                        e.call(t, l(j, n, 1), l(R, n, 1))
                     } catch (r) {
                        R.call(n, r)
                     }
                  }): (i._v = t, i._s = 1, I(i, !1))
               } catch (n) {
                  R.call({
                     _w: i,
                     _d: !1
                  }, n)
               }
            }
         };
      D || (P = function (t) {
         f(this, P, k, "_h"), p(t), n.call(this);
         try {
            t(l(j, this, 1), l(R, this, 1))
         } catch (e) {
            R.call(this, e)
         }
      }, n = function (t) {
         this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
      }, n.prototype = i("3904")(P.prototype, {
         then: function (t, e) {
            var i = L(g(this, P));
            return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = T ? M.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && I(this, !1), i.promise
         },
         catch: function (t) {
            return this.then(void 0, t)
         }
      }), o = function () {
         var t = new n;
         this.promise = t, this.resolve = l(j, t, 1), this.reject = l(R, t, 1)
      }, x.f = L = function (t) {
         return t === P || t === a ? new o(t) : r(t)
      }), d(d.G + d.W + d.F * !D, {
         Promise: P
      }), i("c0d8")(P, k), i("1be4")(k), a = i("a7d3")[k], d(d.S + d.F * !D, k, {
         reject: function (t) {
            var e = L(this),
               i = e.reject;
            return i(t), e.promise
         }
      }), d(d.S + d.F * (s || !D), k, {
         resolve: function (t) {
            return w(s && this === a ? P : this, t)
         }
      }), d(d.S + d.F * !(D && i("436c")(function (t) {
         P.all(t)["catch"](O)
      })), k, {
         all: function (t) {
            var e = this,
               i = L(e),
               n = i.resolve,
               r = i.reject,
               o = b(function () {
                  var i = [],
                     o = 0,
                     a = 1;
                  m(t, !1, function (t) {
                     var s = o++,
                        c = !1;
                     i.push(void 0), a++, e.resolve(t).then(function (t) {
                        c || (c = !0, i[s] = t, --a || n(i))
                     }, r)
                  }), --a || n(i)
               });
            return o.e && r(o.v), i.promise
         },
         race: function (t) {
            var e = this,
               i = L(e),
               n = i.reject,
               r = b(function () {
                  m(t, !1, function (t) {
                     e.resolve(t).then(i.resolve, n)
                  })
               });
            return r.e && n(r.v), i.promise
         }
      })
   },
   "5be4": function (t, e, i) {
      "use strict";
      i.r(e);
      i("6b54"), i("cadf"), i("551c"), i("097d");
      var n = i("2b0e"),
         r = i("c894"),
         o = i("5309"),
         a = i("af14"),
         s = i("c649"),
         c = i("026a"),
         l = i("390b"),
         h = i.n(l);
      n["a"].use(r["a"]);
      var d = function () {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            shadow: !1
         };
         n["a"].customElement("coingecko-coin-compare-chart-widget", c["a"], {
            shadow: t.shadow,
            shadowCss: h.a.toString(),
            connectedCallback: function () {
               if (!t.shadow) {
                  var e = document.createElement("style");
                  e.innerHTML = h.a.toString(), document.head.append(e)
               }
            }
         })
      };
      Object(a["a"])() ? d({
         shadow: !0
      }) : Object(s["c"])([o["a"].customElement, o["a"].fetch, o["a"].cssvar]).then(function () {
         return d({
            shadow: !1
         })
      })
   },
   "5ca1": function (t, e, i) {
      var n = i("7726"),
         r = i("8378"),
         o = i("32e9"),
         a = i("2aba"),
         s = i("9b43"),
         c = "prototype",
         l = function (t, e, i) {
            var h, d, u, p, f = t & l.F,
               m = t & l.G,
               g = t & l.S,
               v = t & l.P,
               y = t & l.B,
               x = m ? n : g ? n[e] || (n[e] = {}) : (n[e] || {})[c],
               b = m ? r : r[e] || (r[e] = {}),
               _ = b[c] || (b[c] = {});
            for (h in m && (i = e), i) d = !f && x && void 0 !== x[h], u = (d ? x : i)[h], p = y && d ? s(u, n) : v && "function" == typeof u ? s(Function.call, u) : u, x && a(x, h, u, t & l.U), b[h] != u && o(b, h, p), v && _[h] != u && (_[h] = u)
         };
      n.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
   },
   "5cc5": function (t, e, i) {
      var n = i("2b4c")("iterator"),
         r = !1;
      try {
         var o = [7][n]();
         o["return"] = function () {
            r = !0
         }, Array.from(o, function () {
            throw 2
         })
      } catch (a) {}
      t.exports = function (t, e) {
         if (!e && !r) return !1;
         var i = !1;
         try {
            var o = [7],
               s = o[n]();
            s.next = function () {
               return {
                  done: i = !0
               }
            }, o[n] = function () {
               return s
            }, t(o)
         } catch (a) {}
         return i
      }
   },
   "5ce7": function (t, e, i) {
      "use strict";
      var n = i("7108"),
         r = i("f845"),
         o = i("c0d8"),
         a = {};
      i("8ce0")(a, i("1b55")("iterator"), function () {
         return this
      }), t.exports = function (t, e, i) {
         t.prototype = n(a, {
            next: r(1, i)
         }), o(t, e + " Iterator")
      }
   },
   "5d58": function (t, e, i) {
      t.exports = i("5927")
   },
   "5d67": function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "PosiÃ§Ã£o da capitalizaÃ§Ã£o no mercado",
            mcap: "CapitalizaÃ§Ã£o de mercado",
            "24h_volume": "Volume em 24h",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "ComparaÃ§Ã£o de preÃ§o de criptomoedas",
            crypto_market_cap_comparison: "ComparaÃ§Ã£o de capitalizaÃ§Ã£o de mercado de criptomoedas"
         },
         coin_price_static_headline_widget: {
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "Alta de 24h",
            "24h_low": "Baixa de 24h",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "Alta de 24h",
            "24h_low": "Baixa de 24h",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "Mapa de Ã¡rvore de criptomoedas",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "Volume em 24h",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "Troca",
            pair: "Par",
            price: "PreÃ§o",
            volume: "Volume",
            trust_score: "PontuaÃ§Ã£o de Liquidez",
            view_price_chart: "Ver tabela de preÃ§os",
            powered_by: "Fornecido por %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   "5d8f": function (t, e, i) {
      var n = i("7772")("keys"),
         r = i("7b00");
      t.exports = function (t) {
         return n[t] || (n[t] = r(t))
      }
   },
   "5dbc": function (t, e, i) {
      var n = i("d3f4"),
         r = i("8b97").set;
      t.exports = function (t, e, i) {
         var o, a = e.constructor;
         return a !== i && "function" == typeof a && (o = a.prototype) !== i.prototype && n(o) && r && r(t, o), t
      }
   },
   "5df3": function (t, e, i) {
      "use strict";
      var n = i("02f4")(!0);
      i("01f9")(String, "String", function (t) {
         this._t = String(t), this._i = 0
      }, function () {
         var t, e = this._t,
            i = this._i;
         return i >= e.length ? {
            value: void 0,
            done: !0
         } : (t = n(e, i), this._i += t.length, {
            value: t,
            done: !1
         })
      })
   },
   "5f1b": function (t, e, i) {
      "use strict";
      var n = i("23c6"),
         r = RegExp.prototype.exec;
      t.exports = function (t, e) {
         var i = t.exec;
         if ("function" === typeof i) {
            var o = i.call(t, e);
            if ("object" !== typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return o
         }
         if ("RegExp" !== n(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
         return r.call(t, e)
      }
   },
   "613b": function (t, e, i) {
      var n = i("5537")("keys"),
         r = i("ca5a");
      t.exports = function (t) {
         return n[t] || (n[t] = r(t))
      }
   },
   "626a": function (t, e, i) {
      var n = i("2d95");
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
         return "String" == n(t) ? t.split("") : Object(t)
      }
   },
   "626e": function (t, e, i) {
      var n = i("d74e"),
         r = i("f845"),
         o = i("6a9b"),
         a = i("2ea1"),
         s = i("43c8"),
         c = i("a47f"),
         l = Object.getOwnPropertyDescriptor;
      e.f = i("7d95") ? l : function (t, e) {
         if (t = o(t), e = a(e, !0), c) try {
            return l(t, e)
         } catch (i) {}
         if (s(t, e)) return r(!n.f.call(t, e), t[e])
      }
   },
   6277: function (t, e, i) {
      var n = i("7b00")("meta"),
         r = i("6f8a"),
         o = i("43c8"),
         a = i("3adc").f,
         s = 0,
         c = Object.isExtensible || function () {
            return !0
         },
         l = !i("d782")(function () {
            return c(Object.preventExtensions({}))
         }),
         h = function (t) {
            a(t, n, {
               value: {
                  i: "O" + ++s,
                  w: {}
               }
            })
         },
         d = function (t, e) {
            if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, n)) {
               if (!c(t)) return "F";
               if (!e) return "E";
               h(t)
            }
            return t[n].i
         },
         u = function (t, e) {
            if (!o(t, n)) {
               if (!c(t)) return !0;
               if (!e) return !1;
               h(t)
            }
            return t[n].w
         },
         p = function (t) {
            return l && f.NEED && c(t) && !o(t, n) && h(t), t
         },
         f = t.exports = {
            KEY: n,
            NEED: !1,
            fastKey: d,
            getWeak: u,
            onFreeze: p
         }
   },
   "67bb": function (t, e, i) {
      t.exports = i("b258")
   },
   6821: function (t, e, i) {
      var n = i("626a"),
         r = i("be13");
      t.exports = function (t) {
         return n(r(t))
      }
   },
   "688e": function (t, e, i) {
      "use strict";
      var n = "Function.prototype.bind called on incompatible ",
         r = Array.prototype.slice,
         o = Object.prototype.toString,
         a = "[object Function]";
      t.exports = function (t) {
         var e = this;
         if ("function" !== typeof e || o.call(e) !== a) throw new TypeError(n + e);
         for (var i, s = r.call(arguments, 1), c = function () {
               if (this instanceof i) {
                  var n = e.apply(this, s.concat(r.call(arguments)));
                  return Object(n) === n ? n : this
               }
               return e.apply(t, s.concat(r.call(arguments)))
            }, l = Math.max(0, e.length - s.length), h = [], d = 0; d < l; d++) h.push("$" + d);
         if (i = Function("binder", "return function (" + h.join(",") + "){ return binder.apply(this,arguments); }")(c), e.prototype) {
            var u = function () {};
            u.prototype = e.prototype, i.prototype = new u, u.prototype = null
         }
         return i
      }
   },
   "69a8": function (t, e) {
      var i = {}.hasOwnProperty;
      t.exports = function (t, e) {
         return i.call(t, e)
      }
   },
   "6a99": function (t, e, i) {
      var n = i("d3f4");
      t.exports = function (t, e) {
         if (!n(t)) return t;
         var i, r;
         if (e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r;
         if ("function" == typeof (i = t.valueOf) && !n(r = i.call(t))) return r;
         if (!e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r;
         throw TypeError("Can't convert object to primitive value")
      }
   },
   "6a9b": function (t, e, i) {
      var n = i("8bab"),
         r = i("e5fa");
      t.exports = function (t) {
         return n(r(t))
      }
   },
   "6b54": function (t, e, i) {
      "use strict";
      i("3846");
      var n = i("cb7c"),
         r = i("0bfb"),
         o = i("9e1e"),
         a = "toString",
         s = /./ [a],
         c = function (t) {
            i("2aba")(RegExp.prototype, a, t, !0)
         };
      i("79e5")(function () {
         return "/a/b" != s.call({
            source: "a",
            flags: "b"
         })
      }) ? c(function () {
         var t = n(this);
         return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? r.call(t) : void 0)
      }) : s.name != a && c(function () {
         return s.call(this)
      })
   },
   "6ce2": function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "Marktkapitalisierungsrang",
            mcap: "Marktkapitalisierung",
            "24h_volume": "24-Stunden-Volumen",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "KryptowÃ¤hrungs-Preisvergleich",
            crypto_market_cap_comparison: "Vergleich der KryptowÃ¤hrungs-Marktkapitalisierung"
         },
         coin_price_static_headline_widget: {
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "24h Hoch",
            "24h_low": "24h Tief",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "24h Hoch",
            "24h_low": "24h Tief",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "KryptowÃ¤hrungs-Tree-Map",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "24-Stunden-Volumen",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "BÃ¶rse",
            pair: "Paar",
            price: "Kurs",
            volume: "Volumen",
            trust_score: "Vertrauenswert",
            view_price_chart: "PreisÃ¼bersicht anzeigen",
            powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   "6e1f": function (t, e) {
      var i = {}.toString;
      t.exports = function (t) {
         return i.call(t).slice(8, -1)
      }
   },
   "6f8a": function (t, e) {
      t.exports = function (t) {
         return "object" === typeof t ? null !== t : "function" === typeof t
      }
   },
   7: function (t, e, i) {
      t.exports = i("5be4")
   },
   7108: function (t, e, i) {
      var n = i("0f89"),
         r = i("f568"),
         o = i("0029"),
         a = i("5d8f")("IE_PROTO"),
         s = function () {},
         c = "prototype",
         l = function () {
            var t, e = i("12fd")("iframe"),
               n = o.length,
               r = "<",
               a = ">";
            e.style.display = "none", i("103a").appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(r + "script" + a + "document.F=Object" + r + "/script" + a), t.close(), l = t.F;
            while (n--) delete l[c][o[n]];
            return l()
         };
      t.exports = Object.create || function (t, e) {
         var i;
         return null !== t ? (s[c] = n(t), i = new s, s[c] = null, i[a] = t) : i = l(), void 0 === e ? i : r(i, e)
      }
   },
   "75c9": function (t, e) {
      t.exports = function (t) {
         try {
            return {
               e: !1,
               v: t()
            }
         } catch (e) {
            return {
               e: !0,
               v: e
            }
         }
      }
   },
   7618: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
         return c
      });
      var n = i("5d58"),
         r = i.n(n),
         o = i("67bb"),
         a = i.n(o);

      function s(t) {
         return s = "function" === typeof a.a && "symbol" === typeof r.a ? function (t) {
            return typeof t
         } : function (t) {
            return t && "function" === typeof a.a && t.constructor === a.a && t !== a.a.prototype ? "symbol" : typeof t
         }, s(t)
      }

      function c(t) {
         return c = "function" === typeof a.a && "symbol" === s(r.a) ? function (t) {
            return s(t)
         } : function (t) {
            return t && "function" === typeof a.a && t.constructor === a.a && t !== a.a.prototype ? "symbol" : s(t)
         }, c(t)
      }
   },
   7633: function (t, e, i) {
      var n = i("2695"),
         r = i("0029");
      t.exports = Object.keys || function (t) {
         return n(t, r)
      }
   },
   7704: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "ÐŸÐ¾Ð·Ð¸Ñ†Ð¸Ñ Ð² Ñ€ÐµÐ¹Ñ‚Ð¸Ð½Ð³Ðµ Market Cap",
            mcap: "Ð Ñ‹Ð½Ð¾Ñ‡Ð½Ð°Ñ ÐºÐ°Ð¿Ð¸Ñ‚Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ñ",
            "24h_volume": "ÐžÐ±ÑŠÐµÐ¼ Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "Ð¡Ñ€Ð°Ð²Ð½ÐµÐ½Ð¸Ðµ ÐºÑƒÑ€ÑÐ¾Ð² ÐºÑ€Ð¸Ð¿Ñ‚Ð¾Ð²Ð°Ð»ÑŽÑ‚",
            crypto_market_cap_comparison: "Ð¡Ñ€Ð°Ð²Ð½ÐµÐ½Ð¸Ðµ ÐºÑ€Ð¸Ð¿Ñ‚Ð¾Ð²Ð°Ð»ÑŽÑ‚ Ð¿Ð¾ Ñ€Ñ‹Ð½Ð¾Ñ‡Ð½Ð¾Ð¹ ÐºÐ°Ð¿Ð¸Ñ‚Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸"
         },
         coin_price_static_headline_widget: {
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "ÐœÐ°ÐºÑ. Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
            "24h_low": "ÐœÐ¸Ð½. Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "ÐœÐ°ÐºÑ. Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
            "24h_low": "ÐœÐ¸Ð½. Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "ÐšÐ°Ñ€Ñ‚Ð° Ð´ÐµÑ€ÐµÐ²Ð° ÐºÑ€Ð¸Ð¿Ñ‚Ð¾Ð²Ð°Ð»ÑŽÑ‚",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "ÐžÐ±ÑŠÐµÐ¼ Ñ‚Ð¾Ñ€Ð³Ð¾Ð² Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "ÐžÐ±Ð¼ÐµÐ½",
            pair: "ÐŸÐ°Ñ€Ð°",
            price: "Ð¦ÐµÐ½Ð°",
            volume: "ÐžÐ±ÑŠÐµÐ¼",
            trust_score: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÑŒ Ð½Ð°Ð´ÐµÐ¶Ð½Ð¾ÑÑ‚Ð¸",
            view_price_chart: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð³Ñ€Ð°Ñ„Ð¸Ðº Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÐºÑƒÑ€ÑÐ°",
            powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   7726: function (t, e) {
      var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = i)
   },
   7772: function (t, e, i) {
      var n = i("a7d3"),
         r = i("da3c"),
         o = "__core-js_shared__",
         a = r[o] || (r[o] = {});
      (t.exports = function (t, e) {
         return a[t] || (a[t] = void 0 !== e ? e : {})
      })("versions", []).push({
         version: n.version,
         mode: i("b457") ? "pure" : "global",
         copyright: "Â© 2018 Denis Pushkarev (zloirock.ru)"
      })
   },
   "77f1": function (t, e, i) {
      var n = i("4588"),
         r = Math.max,
         o = Math.min;
      t.exports = function (t, e) {
         return t = n(t), t < 0 ? r(t + e, 0) : o(t, e)
      }
   },
   "795b": function (t, e, i) {
      t.exports = i("dd04")
   },
   "79e5": function (t, e) {
      t.exports = function (t) {
         try {
            return !!t()
         } catch (e) {
            return !0
         }
      }
   },
   "7a56": function (t, e, i) {
      "use strict";
      var n = i("7726"),
         r = i("86cc"),
         o = i("9e1e"),
         a = i("2b4c")("species");
      t.exports = function (t) {
         var e = n[t];
         o && e && !e[a] && r.f(e, a, {
            configurable: !0,
            get: function () {
               return this
            }
         })
      }
   },
   "7b00": function (t, e) {
      var i = 0,
         n = Math.random();
      t.exports = function (t) {
         return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
      }
   },
   "7d8a": function (t, e, i) {
      var n = i("6e1f"),
         r = i("1b55")("toStringTag"),
         o = "Arguments" == n(function () {
            return arguments
         }()),
         a = function (t, e) {
            try {
               return t[e]
            } catch (i) {}
         };
      t.exports = function (t) {
         var e, i, s;
         return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = a(e = Object(t), r)) ? i : o ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
      }
   },
   "7d95": function (t, e, i) {
      t.exports = !i("d782")(function () {
         return 7 != Object.defineProperty({}, "a", {
            get: function () {
               return 7
            }
         }).a
      })
   },
   "7f20": function (t, e, i) {
      var n = i("86cc").f,
         r = i("69a8"),
         o = i("2b4c")("toStringTag");
      t.exports = function (t, e, i) {
         t && !r(t = i ? t : t.prototype, o) && n(t, o, {
            configurable: !0,
            value: e
         })
      }
   },
   "7f7f": function (t, e, i) {
      var n = i("86cc").f,
         r = Function.prototype,
         o = /^\s*function ([^ (]*)/,
         a = "name";
      a in r || i("9e1e") && n(r, a, {
         configurable: !0,
         get: function () {
            try {
               return ("" + this).match(o)[1]
            } catch (t) {
               return ""
            }
         }
      })
   },
   8079: function (t, e, i) {
      var n = i("7726"),
         r = i("1991").set,
         o = n.MutationObserver || n.WebKitMutationObserver,
         a = n.process,
         s = n.Promise,
         c = "process" == i("2d95")(a);
      t.exports = function () {
         var t, e, i, l = function () {
            var n, r;
            c && (n = a.domain) && n.exit();
            while (t) {
               r = t.fn, t = t.next;
               try {
                  r()
               } catch (o) {
                  throw t ? i() : e = void 0, o
               }
            }
            e = void 0, n && n.enter()
         };
         if (c) i = function () {
            a.nextTick(l)
         };
         else if (!o || n.navigator && n.navigator.standalone)
            if (s && s.resolve) {
               var h = s.resolve(void 0);
               i = function () {
                  h.then(l)
               }
            } else i = function () {
               r.call(n, l)
            };
         else {
            var d = !0,
               u = document.createTextNode("");
            new o(l).observe(u, {
               characterData: !0
            }), i = function () {
               u.data = d = !d
            }
         }
         return function (n) {
            var r = {
               fn: n,
               next: void 0
            };
            e && (e.next = r), t || (t = r, i()), e = r
         }
      }
   },
   "81ee": function (t, e, i) {
      i("9a51"), t.exports = i("a7d3").Object.assign
   },
   8378: function (t, e) {
      var i = t.exports = {
         version: "2.6.5"
      };
      "number" == typeof __e && (__e = i)
   },
   "84f2": function (t, e) {
      t.exports = {}
   },
   8680: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "à¸­à¸±à¸™à¸”à¸±à¸šà¸¡à¸¹à¸¥à¸„à¹ˆà¸²à¸•à¸²à¸¡à¸£à¸²à¸„à¸²à¸•à¸¥à¸²à¸”",
            mcap: "à¸¡à¸¹à¸¥à¸„à¹ˆà¸²à¸•à¸²à¸¡à¸£à¸²à¸„à¸²à¸•à¸¥à¸²à¸”",
            "24h_volume": "à¸›à¸£à¸´à¸¡à¸²à¸“ 24 à¸Šà¸¡.",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "à¸à¸²à¸£à¹€à¸›à¸£à¸µà¸¢à¸šà¹€à¸—à¸µà¸¢à¸šà¸£à¸²à¸„à¸² Crypto",
            crypto_market_cap_comparison: "à¸à¸²à¸£à¹€à¸›à¸£à¸µà¸¢à¸šà¹€à¸—à¸µà¸¢à¸šà¸¡à¸¹à¸¥à¸„à¹ˆà¸²à¸•à¸²à¸¡à¸£à¸²à¸„à¸²à¸•à¸¥à¸²à¸”à¸‚à¸­à¸‡ Crypto"
         },
         coin_price_static_headline_widget: {
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "à¸ªà¸¹à¸‡ 24 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
            "24h_low": "à¸•à¹ˆà¸³ 24 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "à¸ªà¸¹à¸‡ 24 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
            "24h_low": "à¸•à¹ˆà¸³ 24 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "à¹à¸œà¸™à¸—à¸µà¹ˆà¸£à¸¹à¸›à¸•à¹‰à¸™à¹„à¸«à¸¡ Cryptocurrency",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "à¸›à¸£à¸´à¸¡à¸²à¸“ 24 à¸Šà¸¡.",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "à¹à¸¥à¸à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™",
            pair: "à¸ˆà¸±à¸šà¸„à¸¹à¹ˆ",
            price: "à¸£à¸²à¸„à¸²",
            volume: "à¸›à¸£à¸´à¸¡à¸²à¸“",
            trust_score: "à¸„à¸°à¹à¸™à¸™à¸„à¸§à¸²à¸¡à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸±à¹ˆà¸™",
            view_price_chart: "à¸”à¸¹à¸à¸£à¸²à¸Ÿà¸£à¸²à¸„à¸²",
            powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   "86cc": function (t, e, i) {
      var n = i("cb7c"),
         r = i("c69a"),
         o = i("6a99"),
         a = Object.defineProperty;
      e.f = i("9e1e") ? Object.defineProperty : function (t, e, i) {
         if (n(t), e = o(e, !0), n(i), r) try {
            return a(t, e, i)
         } catch (s) {}
         if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
         return "value" in i && (t[e] = i.value), t
      }
   },
   "89b2": function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "Ocena wg. kapitalizacji rynku",
            mcap: "Kapitalizacja rynkowa",
            "24h_volume": "Wolumen â€“ 24 godz.",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "PorÃ³wnanie cen kryptowalut",
            crypto_market_cap_comparison: "PorÃ³wnanie dominacji w kapitalizacji rynku kryptowalut"
         },
         coin_price_static_headline_widget: {
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "24 godz. â€“ maks.",
            "24h_low": "24 godz. â€“ min.",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "24 godz. â€“ maks.",
            "24h_low": "24 godz. â€“ min.",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "Drzewo kryptowalut",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "Wolumen â€“ 24 godz.",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "GieÅ‚da",
            pair: "Para",
            price: "Kurs",
            volume: "Wolumen",
            trust_score: "Wynik zaufania",
            view_price_chart: "WyÅ›wietl wykres ceny",
            powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   "8a12": function (t, e, i) {
      var n = i("da3c"),
         r = n.navigator;
      t.exports = r && r.userAgent || ""
   },
   "8b97": function (t, e, i) {
      var n = i("d3f4"),
         r = i("cb7c"),
         o = function (t, e) {
            if (r(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
         };
      t.exports = {
         set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
            try {
               n = i("9b43")(Function.call, i("11e9").f(Object.prototype, "__proto__").set, 2), n(t, []), e = !(t instanceof Array)
            } catch (r) {
               e = !0
            }
            return function (t, i) {
               return o(t, i), e ? t.__proto__ = i : n(t, i), t
            }
         }({}, !1) : void 0),
         check: o
      }
   },
   "8bab": function (t, e, i) {
      var n = i("6e1f");
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
         return "String" == n(t) ? t.split("") : Object(t)
      }
   },
   "8ce0": function (t, e, i) {
      var n = i("3adc"),
         r = i("f845");
      t.exports = i("7d95") ? function (t, e, i) {
         return n.f(t, e, r(1, i))
      } : function (t, e, i) {
         return t[e] = i, t
      }
   },
   9093: function (t, e, i) {
      var n = i("ce10"),
         r = i("e11e").concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function (t) {
         return n(t, r)
      }
   },
   "93c4": function (t, e, i) {
      "use strict";
      var n = i("2a4e")(!0);
      i("e4a9")(String, "String", function (t) {
         this._t = String(t), this._i = 0
      }, function () {
         var t, e = this._t,
            i = this._i;
         return i >= e.length ? {
            value: void 0,
            done: !0
         } : (t = n(e, i), this._i += t.length, {
            value: t,
            done: !1
         })
      })
   },
   "9a51": function (t, e, i) {
      var n = i("d13f");
      n(n.S + n.F, "Object", {
         assign: i("9e44")
      })
   },
   "9b43": function (t, e, i) {
      var n = i("d8e8");
      t.exports = function (t, e, i) {
         if (n(t), void 0 === e) return t;
         switch (i) {
            case 1:
               return function (i) {
                  return t.call(e, i)
               };
            case 2:
               return function (i, n) {
                  return t.call(e, i, n)
               };
            case 3:
               return function (i, n, r) {
                  return t.call(e, i, n, r)
               }
         }
         return function () {
            return t.apply(e, arguments)
         }
      }
   },
   "9c6c": function (t, e, i) {
      var n = i("2b4c")("unscopables"),
         r = Array.prototype;
      void 0 == r[n] && i("32e9")(r, n, {}), t.exports = function (t) {
         r[n][t] = !0
      }
   },
   "9c80": function (t, e) {
      t.exports = function (t) {
         try {
            return {
               e: !1,
               v: t()
            }
         } catch (e) {
            return {
               e: !0,
               v: e
            }
         }
      }
   },
   "9c93": function (t, e, i) {
      var n = i("0f89");
      t.exports = function (t, e, i, r) {
         try {
            return r ? e(n(i)[0], i[1]) : e(i)
         } catch (a) {
            var o = t["return"];
            throw void 0 !== o && n(o.call(t)), a
         }
      }
   },
   "9def": function (t, e, i) {
      var n = i("4588"),
         r = Math.min;
      t.exports = function (t) {
         return t > 0 ? r(n(t), 9007199254740991) : 0
      }
   },
   "9e1e": function (t, e, i) {
      t.exports = !i("79e5")(function () {
         return 7 != Object.defineProperty({}, "a", {
            get: function () {
               return 7
            }
         }).a
      })
   },
   "9e44": function (t, e, i) {
      "use strict";
      var n = i("7633"),
         r = i("31c2"),
         o = i("d74e"),
         a = i("0185"),
         s = i("8bab"),
         c = Object.assign;
      t.exports = !c || i("d782")(function () {
         var t = {},
            e = {},
            i = Symbol(),
            n = "abcdefghijklmnopqrst";
         return t[i] = 7, n.split("").forEach(function (t) {
            e[t] = t
         }), 7 != c({}, t)[i] || Object.keys(c({}, e)).join("") != n
      }) ? function (t, e) {
         var i = a(t),
            c = arguments.length,
            l = 1,
            h = r.f,
            d = o.f;
         while (c > l) {
            var u, p = s(arguments[l++]),
               f = h ? n(p).concat(h(p)) : n(p),
               m = f.length,
               g = 0;
            while (m > g) d.call(p, u = f[g++]) && (i[u] = p[u])
         }
         return i
      } : c
   },
   a0d3: function (t, e, i) {
      "use strict";
      var n = i("0f7c");
      t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
   },
   a25f: function (t, e, i) {
      var n = i("7726"),
         r = n.navigator;
      t.exports = r && r.userAgent || ""
   },
   a306: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "ClasificaciÃ³n de capitalizaciÃ³n de mercado",
            mcap: "Cap. de mercado",
            "24h_volume": "Volumen en 24Â h",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "ComparaciÃ³n de precios de criptomonedas",
            crypto_market_cap_comparison: "ComparaciÃ³n de la capitalizaciÃ³n de mercado de las criptomonedas"
         },
         coin_price_static_headline_widget: {
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "MÃ¡ximo en 24 h",
            "24h_low": "MÃ­nimo en 24 h",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "MÃ¡ximo en 24 h",
            "24h_low": "MÃ­nimo en 24 h",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "Mapa de Ã¡rbol de criptomonedas",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "Volumen en 24Â h",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "Intercambios",
            pair: "Par",
            price: "Precio",
            volume: "Volumen",
            trust_score: "Trust Score",
            view_price_chart: "Ver tabla de precios",
            powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   a47f: function (t, e, i) {
      t.exports = !i("7d95") && !i("d782")(function () {
         return 7 != Object.defineProperty(i("12fd")("div"), "a", {
            get: function () {
               return 7
            }
         }).a
      })
   },
   a481: function (t, e, i) {
      "use strict";
      var n = i("cb7c"),
         r = i("4bf8"),
         o = i("9def"),
         a = i("4588"),
         s = i("0390"),
         c = i("5f1b"),
         l = Math.max,
         h = Math.min,
         d = Math.floor,
         u = /\$([$&`']|\d\d?|<[^>]*>)/g,
         p = /\$([$&`']|\d\d?)/g,
         f = function (t) {
            return void 0 === t ? t : String(t)
         };
      i("214f")("replace", 2, function (t, e, i, m) {
         return [function (n, r) {
            var o = t(this),
               a = void 0 == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, o, r) : i.call(String(o), n, r)
         }, function (t, e) {
            var r = m(i, t, this, e);
            if (r.done) return r.value;
            var d = n(t),
               u = String(this),
               p = "function" === typeof e;
            p || (e = String(e));
            var v = d.global;
            if (v) {
               var y = d.unicode;
               d.lastIndex = 0
            }
            var x = [];
            while (1) {
               var b = c(d, u);
               if (null === b) break;
               if (x.push(b), !v) break;
               var _ = String(b[0]);
               "" === _ && (d.lastIndex = s(u, o(d.lastIndex), y))
            }
            for (var w = "", k = 0, S = 0; S < x.length; S++) {
               b = x[S];
               for (var M = String(b[0]), A = l(h(a(b.index), u.length), 0), C = [], P = 1; P < b.length; P++) C.push(f(b[P]));
               var T = b.groups;
               if (p) {
                  var O = [M].concat(C, A, u);
                  void 0 !== T && O.push(T);
                  var L = String(e.apply(void 0, O))
               } else L = g(M, u, A, C, T, e);
               A >= k && (w += u.slice(k, A) + L, k = A + M.length)
            }
            return w + u.slice(k)
         }];

         function g(t, e, n, o, a, s) {
            var c = n + t.length,
               l = o.length,
               h = p;
            return void 0 !== a && (a = r(a), h = u), i.call(s, h, function (i, r) {
               var s;
               switch (r.charAt(0)) {
                  case "$":
                     return "$";
                  case "&":
                     return t;
                  case "`":
                     return e.slice(0, n);
                  case "'":
                     return e.slice(c);
                  case "<":
                     s = a[r.slice(1, -1)];
                     break;
                  default:
                     var h = +r;
                     if (0 === h) return i;
                     if (h > l) {
                        var u = d(h / 10);
                        return 0 === u ? i : u <= l ? void 0 === o[u - 1] ? r.charAt(1) : o[u - 1] + r.charAt(1) : i
                     }
                     s = o[h - 1]
               }
               return void 0 === s ? "" : s
            })
         }
      })
   },
   a4bb: function (t, e, i) {
      t.exports = i("fda6")
   },
   a5ab: function (t, e, i) {
      var n = i("a812"),
         r = Math.min;
      t.exports = function (t) {
         return t > 0 ? r(n(t), 9007199254740991) : 0
      }
   },
   a5b8: function (t, e, i) {
      "use strict";
      var n = i("d8e8");

      function r(t) {
         var e, i;
         this.promise = new t(function (t, n) {
            if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
            e = t, i = n
         }), this.resolve = n(e), this.reject = n(i)
      }
      t.exports.f = function (t) {
         return new r(t)
      }
   },
   a7d3: function (t, e) {
      var i = t.exports = {
         version: "2.6.1"
      };
      "number" == typeof __e && (__e = i)
   },
   a812: function (t, e) {
      var i = Math.ceil,
         n = Math.floor;
      t.exports = function (t) {
         return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
      }
   },
   aa77: function (t, e, i) {
      var n = i("5ca1"),
         r = i("be13"),
         o = i("79e5"),
         a = i("fdef"),
         s = "[" + a + "]",
         c = "â€‹Â…",
         l = RegExp("^" + s + s + "*"),
         h = RegExp(s + s + "*$"),
         d = function (t, e, i) {
            var r = {},
               s = o(function () {
                  return !!a[t]() || c[t]() != c
               }),
               l = r[t] = s ? e(u) : a[t];
            i && (r[i] = l), n(n.P + n.F * s, "String", r)
         },
         u = d.trim = function (t, e) {
            return t = String(r(t)), 1 & e && (t = t.replace(l, "")), 2 & e && (t = t.replace(h, "")), t
         };
      t.exports = d
   },
   aae3: function (t, e, i) {
      var n = i("d3f4"),
         r = i("2d95"),
         o = i("2b4c")("match");
      t.exports = function (t) {
         var e;
         return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == r(t))
      }
   },
   ac6a: function (t, e, i) {
      for (var n = i("cadf"), r = i("0d58"), o = i("2aba"), a = i("7726"), s = i("32e9"), c = i("84f2"), l = i("2b4c"), h = l("iterator"), d = l("toStringTag"), u = c.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
         }, f = r(p), m = 0; m < f.length; m++) {
         var g, v = f[m],
            y = p[v],
            x = a[v],
            b = x && x.prototype;
         if (b && (b[h] || s(b, h, u), b[d] || s(b, d, v), c[v] = u, y))
            for (g in n) b[g] || o(b, g, n[g], !0)
      }
   },
   aced: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "Xáº¿p háº¡ng Vá»‘n hÃ³a thá»‹ trÆ°á»ng",
            mcap: "GiÃ¡ trá»‹ vá»‘n hÃ³a thá»‹ trÆ°á»ng",
            "24h_volume": "Khá»‘i lÆ°á»£ng trong 24h",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "So sÃ¡nh giÃ¡ tiá»n mÃ£ hÃ³a",
            crypto_market_cap_comparison: "So sÃ¡nh vá»‘n hÃ³a thá»‹ trÆ°á»ng tiá»n mÃ£ hÃ³a"
         },
         coin_price_static_headline_widget: {
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "Cao trong 24H",
            "24h_low": "Tháº¥p trong 24H",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "Cao trong 24H",
            "24h_low": "Tháº¥p trong 24H",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "SÆ¡ Ä‘á»“ cÃ¢y Tiá»n mÃ£ hÃ³a",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "Khá»‘i lÆ°á»£ng trong 24h",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "SÃ n giao dá»‹ch",
            pair: "Cáº·p",
            price: "GiÃ¡",
            volume: "Khá»‘i lÆ°á»£ng",
            trust_score: "Äiá»ƒm tin cáº­y",
            view_price_chart: "Xem biá»ƒu Ä‘á»“ giÃ¡",
            powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   af08: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "ØªØµÙ†ÙŠÙ Ø§Ù„Ù‚ÙŠÙ…Ø© Ø§Ù„Ø³ÙˆÙ‚ÙŠØ©",
            mcap: "Ø§Ù„Ù‚ÙŠÙ…Ø© Ø§Ù„Ø³ÙˆÙ‚ÙŠØ©",
            "24h_volume": "Ø­Ø¬Ù… 24 Ø³Ø§Ø¹Ø©",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "Ù…Ù‚Ø§Ø±Ù†Ø© Ø£Ø³Ø¹Ø§Ø± Ø§Ù„Ø¹Ù…Ù„Ø© Ø§Ù„Ù…Ø´ÙØ±Ø©",
            crypto_market_cap_comparison: "Ù…Ù‚Ø§Ø±Ù†Ø© Ø³Ù‚Ù Ø£Ø³Ø¹Ø§Ø± Ø³ÙˆÙ‚ Ø§Ù„Ø¹Ù…Ù„Ø§Øª Ø§Ù„Ù…Ø´ÙØ±Ø©"
         },
         coin_price_static_headline_widget: {
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "Ø§Ø±ØªÙØ§Ø¹ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 24 Ø³Ø§Ø¹Ø©",
            "24h_low": "Ø§Ù†Ø®ÙØ§Ø¶ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 24 Ø³Ø§Ø¹Ø©",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "Ø§Ø±ØªÙØ§Ø¹ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 24 Ø³Ø§Ø¹Ø©",
            "24h_low": "Ø§Ù†Ø®ÙØ§Ø¶ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 24 Ø³Ø§Ø¹Ø©",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "Ø®Ø±ÙŠØ·Ø© Ø´Ø¬Ø±Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Øª Ø§Ù„Ù…Ø´ÙØ±Ø©",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "Ø­Ø¬Ù… 24 Ø³Ø§Ø¹Ø©",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "Ø¨ÙˆØ±ØµØ©",
            pair: "Ø²ÙˆØ¬",
            price: "Ø§Ù„Ø³Ø¹Ø±",
            volume: "Ø­Ø¬Ù… Ø§Ù„ØªØ¯Ø§ÙˆÙ„",
            trust_score: "Ù†ØªÙŠØ¬Ø© Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚ÙŠØ©",
            view_price_chart: "Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø§Ù„Ø³Ø¹Ø±",
            powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   af14: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
         return n
      });
      i("7618");

      function n() {
         return null != document.head.attachShadow && null != window.customElements && null != window.fetch
      }
   },
   b0bc: function (t, e) {
      t.exports = function (t, e, i, n) {
         if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
         return t
      }
   },
   b0c5: function (t, e, i) {
      "use strict";
      var n = i("520a");
      i("5ca1")({
         target: "RegExp",
         proto: !0,
         forced: n !== /./.exec
      }, {
         exec: n
      })
   },
   b22a: function (t, e) {
      t.exports = {}
   },
   b258: function (t, e, i) {
      i("d256"), i("12fd9"), i("d127"), i("d24f"), t.exports = i("a7d3").Symbol
   },
   b3e7: function (t, e) {
      t.exports = function () {}
   },
   b3fd: function (t, e, i) {
      "use strict";
      var n = i("f367"),
         r = i("1b7f");
      t.exports = function () {
         var t = r();
         return n(String.prototype, {
            trim: t
         }, {
            trim: function () {
               return String.prototype.trim !== t
            }
         }), t
      }
   },
   b42c: function (t, e, i) {
      i("fa54");
      for (var n = i("da3c"), r = i("8ce0"), o = i("b22a"), a = i("1b55")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
         var l = s[c],
            h = n[l],
            d = h && h.prototype;
         d && !d[a] && r(d, a, l), o[l] = o.Array
      }
   },
   b457: function (t, e) {
      t.exports = !0
   },
   b5aa: function (t, e, i) {
      var n = i("6e1f");
      t.exports = Array.isArray || function (t) {
         return "Array" == n(t)
      }
   },
   b604: function (t, e, i) {
      "use strict";
      var n = i("d13f"),
         r = i("a7d3"),
         o = i("da3c"),
         a = i("302f"),
         s = i("decf");
      n(n.P + n.R, "Promise", {
         finally: function (t) {
            var e = a(this, r.Promise || o.Promise),
               i = "function" == typeof t;
            return this.then(i ? function (i) {
               return s(e, t()).then(function () {
                  return i
               })
            } : t, i ? function (i) {
               return s(e, t()).then(function () {
                  throw i
               })
            } : t)
         }
      })
   },
   bb53: function (t, e) {
      t.exports = function (t, e) {
         var i = t % e;
         return Math.floor(i >= 0 ? i : i + e)
      }
   },
   bc25: function (t, e, i) {
      var n = i("f2fe");
      t.exports = function (t, e, i) {
         if (n(t), void 0 === e) return t;
         switch (i) {
            case 1:
               return function (i) {
                  return t.call(e, i)
               };
            case 2:
               return function (i, n) {
                  return t.call(e, i, n)
               };
            case 3:
               return function (i, n, r) {
                  return t.call(e, i, n, r)
               }
         }
         return function () {
            return t.apply(e, arguments)
         }
      }
   },
   bcaa: function (t, e, i) {
      var n = i("cb7c"),
         r = i("d3f4"),
         o = i("a5b8");
      t.exports = function (t, e) {
         if (n(t), r(e) && e.constructor === t) return e;
         var i = o.f(t),
            a = i.resolve;
         return a(e), i.promise
      }
   },
   be13: function (t, e) {
      t.exports = function (t) {
         if (void 0 == t) throw TypeError("Can't call method on  " + t);
         return t
      }
   },
   c0d8: function (t, e, i) {
      var n = i("3adc").f,
         r = i("43c8"),
         o = i("1b55")("toStringTag");
      t.exports = function (t, e, i) {
         t && !r(t = i ? t : t.prototype, o) && n(t, o, {
            configurable: !0,
            value: e
         })
      }
   },
   c165: function (t, e, i) {
      var n = i("d13f"),
         r = i("a7d3"),
         o = i("d782");
      t.exports = function (t, e) {
         var i = (r.Object || {})[t] || Object[t],
            a = {};
         a[t] = e(i), n(n.S + n.F * o(function () {
            i(1)
         }), "Object", a)
      }
   },
   c1e2: function (t, e, i) {
      "use strict";
      var n = i("2b0e"),
         r = i("288a"),
         o = i.n(r),
         a = i("7618"),
         s = i("5176"),
         c = i.n(s),
         l = i("af08"),
         h = i("6ce2"),
         d = i("edd4"),
         u = i("a306"),
         p = i("f693"),
         f = i("210c"),
         m = i("0825"),
         g = i("0423"),
         v = i("dd11"),
         y = i("89b2"),
         x = i("5d67"),
         b = i("7704"),
         _ = i("8680"),
         w = i("ffeb"),
         k = i("aced"),
         S = i("056c"),
         M = i("3504"),
         A = {
            ar: l,
            de: h,
            en: d,
            es: u,
            fr: p,
            id: f,
            it: m,
            ja: g,
            ko: v,
            pl: y,
            pt: x,
            ru: b,
            th: _,
            tr: w,
            vi: k,
            "zh-tw": S,
            zh: M
         },
         C = A;

      function P(t) {
         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en";
         return T(A[t], A[e])
      }

      function T(t, e) {
         var i = c()({}, e);
         for (var n in i) {
            var r = t[n],
               o = i[n];
            if (r && o)
               if ("object" === Object(a["a"])(r) && "object" === Object(a["a"])(o))
                  for (var s in t[n]) i[n][s] = t[n][s];
               else i[n] = t[n]
         }
         return i
      }
      var O = function () {
         return n["a"].mixin({
            data: function () {
               return {
                  polyglot: new o.a({
                     phrases: P("en")
                  })
               }
            },
            methods: {
               reloadLocale: function () {
                  if (void 0 !== this.locale) {
                     if (!C[this.locale]) throw new Error("Locale not supported by widget. Contact support@coingecko.com for help.");
                     this.polyglot = new o.a({
                        phrases: P(this.locale, "en")
                     })
                  }
               }
            },
            watch: {
               locale: function () {
                  this.reloadLocale()
               }
            },
            created: function () {
               this.reloadLocale()
            }
         })
      };
      e["a"] = O
   },
   c227: function (t, e, i) {
      var n = i("b22a"),
         r = i("1b55")("iterator"),
         o = Array.prototype;
      t.exports = function (t) {
         return void 0 !== t && (n.Array === t || o[r] === t)
      }
   },
   c366: function (t, e, i) {
      var n = i("6821"),
         r = i("9def"),
         o = i("77f1");
      t.exports = function (t) {
         return function (e, i, a) {
            var s, c = n(e),
               l = r(c.length),
               h = o(a, l);
            if (t && i != i) {
               while (l > h)
                  if (s = c[h++], s != s) return !0
            } else
               for (; l > h; h++)
                  if ((t || h in c) && c[h] === i) return t || h || 0;
            return !t && -1
         }
      }
   },
   c46d: function (t, e, i) {
      "use strict";
      var n = i("e9ac"),
         r = n("%TypeError%"),
         o = n("%SyntaxError%"),
         a = i("a0d3"),
         s = {
            "Property Descriptor": function (t, e) {
               if ("Object" !== t.Type(e)) return !1;
               var i = {
                  "[[Configurable]]": !0,
                  "[[Enumerable]]": !0,
                  "[[Get]]": !0,
                  "[[Set]]": !0,
                  "[[Value]]": !0,
                  "[[Writable]]": !0
               };
               for (var n in e)
                  if (a(e, n) && !i[n]) return !1;
               var o = a(e, "[[Value]]"),
                  s = a(e, "[[Get]]") || a(e, "[[Set]]");
               if (o && s) throw new r("Property Descriptors may not be both accessor and data descriptors");
               return !0
            }
         };
      t.exports = function (t, e, i, n) {
         var a = s[e];
         if ("function" !== typeof a) throw new o("unknown record type: " + e);
         if (!a(t, n)) throw new r(i + " must be a " + e);
         console.log(a(t, n), n)
      }
   },
   c5f6: function (t, e, i) {
      "use strict";
      var n = i("7726"),
         r = i("69a8"),
         o = i("2d95"),
         a = i("5dbc"),
         s = i("6a99"),
         c = i("79e5"),
         l = i("9093").f,
         h = i("11e9").f,
         d = i("86cc").f,
         u = i("aa77").trim,
         p = "Number",
         f = n[p],
         m = f,
         g = f.prototype,
         v = o(i("2aeb")(g)) == p,
         y = "trim" in String.prototype,
         x = function (t) {
            var e = s(t, !1);
            if ("string" == typeof e && e.length > 2) {
               e = y ? e.trim() : u(e, 3);
               var i, n, r, o = e.charCodeAt(0);
               if (43 === o || 45 === o) {
                  if (i = e.charCodeAt(2), 88 === i || 120 === i) return NaN
               } else if (48 === o) {
                  switch (e.charCodeAt(1)) {
                     case 66:
                     case 98:
                        n = 2, r = 49;
                        break;
                     case 79:
                     case 111:
                        n = 8, r = 55;
                        break;
                     default:
                        return +e
                  }
                  for (var a, c = e.slice(2), l = 0, h = c.length; l < h; l++)
                     if (a = c.charCodeAt(l), a < 48 || a > r) return NaN;
                  return parseInt(c, n)
               }
            }
            return +e
         };
      if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
         f = function (t) {
            var e = arguments.length < 1 ? 0 : t,
               i = this;
            return i instanceof f && (v ? c(function () {
               g.valueOf.call(i)
            }) : o(i) != p) ? a(new m(x(e)), i, f) : x(e)
         };
         for (var b, _ = i("9e1e") ? l(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; _.length > w; w++) r(m, b = _[w]) && !r(f, b) && d(f, b, h(m, b));
         f.prototype = g, g.constructor = f, i("2aba")(n, p, f)
      }
   },
   c609: function (t, e, i) {
      "use strict";
      var n = i("d13f"),
         r = i("03ca"),
         o = i("75c9");
      n(n.S, "Promise", {
         try: function (t) {
            var e = r.f(this),
               i = o(t);
            return (i.e ? e.reject : e.resolve)(i.v), e.promise
         }
      })
   },
   c612: function (t, e) {
      var i = Number.isNaN || function (t) {
         return t !== t
      };
      t.exports = Number.isFinite || function (t) {
         return "number" === typeof t && !i(t) && t !== 1 / 0 && t !== -1 / 0
      }
   },
   c649: function (t, e, i) {
      "use strict";
      i.d(e, "c", function () {
         return o
      }), i.d(e, "b", function () {
         return s
      }), i.d(e, "a", function () {
         return c
      });
      i("a481"), i("5df3");
      var n = i("795b"),
         r = i.n(n);
      i("ac6a");

      function o(t) {
         var e = [];
         return t.forEach(function (t) {
            e.push(new r.a(function (e, i) {
               a(t, e, i)
            }))
         }), r.a.all(e)
      }

      function a(t) {
         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
            n = document.createElement("script");
         n.src = t.src, n.crossOrigin = "anonymous", n.integrity = t.integrity, n.onload = e, n.onerror = function () {
            i(new Error("Failed to load script " + t.src))
         }, document.head.appendChild(n)
      }

      function s(t, e, i) {
         var n;
         return function () {
            var r = this,
               o = arguments,
               a = function () {
                  n = null, i || t.apply(r, o)
               },
               s = i && !n;
            clearTimeout(n), n = setTimeout(a, e), s && t.apply(r, o)
         }
      }

      function c(t) {
         var e = [].slice,
            i = 1 <= arguments.length ? e.call(arguments, 0) : [],
            n = /(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi;
         return i.length > 0 ? t.replace(n, function (t, e, i) {
            var n = '<a href="' + i + '" class="cg-primary-color-dark cg-no-underline" target="_blank">' + i + "</a>";
            return "" + e + n
         }) : t.replace(n, '$1<a class="cg-primary-color-dark cg-no-underline" target="_blank" href="$2">$2</a>')
      }
   },
   c69a: function (t, e, i) {
      t.exports = !i("9e1e") && !i("79e5")(function () {
         return 7 != Object.defineProperty(i("230e")("div"), "a", {
            get: function () {
               return 7
            }
         }).a
      })
   },
   c894: function (t, e, i) {
      "use strict";

      function n(t, e) {
         return t.__proto__ = e, t
      }
      Object.setPrototypeOf = Object.setPrototypeOf || n;
      n.bind(Object);

      function r() {
         return "undefined" !== typeof Symbol && "undefined" !== typeof Reflect && "undefined" !== typeof Proxy && !Object.isSealed(Proxy)
      }
      var o = r(),
         a = function () {
            function t(t, e) {
               for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
               }
            }
            return function (e, i, n) {
               return i && t(e.prototype, i), n && t(e, n), e
            }
         }();

      function s(t, e) {
         if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function c(t, e) {
         if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
         return !e || "object" !== typeof e && "function" !== typeof e ? t : e
      }

      function l(t, e) {
         if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
         t.prototype = Object.create(e && e.prototype, {
            constructor: {
               value: t,
               enumerable: !1,
               writable: !0,
               configurable: !0
            }
         }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
      }

      function h() {
         return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
      }

      function d(t) {
         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
         if ("undefined" !== typeof customElements) {
            if (o) {
               var i = function (t) {
                  function i(t) {
                     var e;
                     s(this, i);
                     var n = c(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this)),
                        o = t ? HTMLElement.call(t) : n;
                     return r.call(o), e = o, c(n, e)
                  }
                  return l(i, t), a(i, null, [{
                     key: "observedAttributes",
                     get: function () {
                        return e.observedAttributes || []
                     }
                  }]), i
               }(h);
               return i.prototype.connectedCallback = d, i.prototype.disconnectedCallback = u, i.prototype.attributeChangedCallback = p, f(t, i), i
            }
            var n = function (t) {
               var e = t ? HTMLElement.call(t) : this;
               return r.call(e), e
            };
            return n.observedAttributes = e.observedAttributes || [], n.prototype = Object.create(HTMLElement.prototype, {
               constructor: {
                  configurable: !0,
                  writable: !0,
                  value: n
               }
            }), n.prototype.connectedCallback = d, n.prototype.disconnectedCallback = u, n.prototype.attributeChangedCallback = p, f(t, n), n
         }

         function r() {
            !0 === e.shadow && HTMLElement.prototype.attachShadow && this.attachShadow({
               mode: "open"
            }), "function" === typeof e.constructorCallback && e.constructorCallback.call(this)
         }

         function d() {
            "function" === typeof e.connectedCallback && e.connectedCallback.call(this)
         }

         function u() {
            "function" === typeof e.disconnectedCallback && e.disconnectedCallback.call(this)
         }

         function p(t, i, n) {
            "function" === typeof e.attributeChangedCallback && e.attributeChangedCallback.call(this, t, i, n)
         }

         function f(t, e) {
            var i = customElements.get(t);
            return "undefined" !== typeof i ? i : customElements.define(t, e)
         }
      }
      Object.setPrototypeOf(h.prototype, HTMLElement.prototype), Object.setPrototypeOf(h, HTMLElement);
      var u = /-(\w)/g,
         p = function (t) {
            return t.replace(u, function (t, e) {
               return e ? e.toUpperCase() : ""
            })
         },
         f = /([^-])([A-Z])/g,
         m = function (t) {
            return t.replace(f, "$1-$2").replace(f, "$1-$2").toLowerCase()
         };

      function g(t) {
         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = t.length - e,
            n = new Array(i);
         while (i--) n[i] = t[i + e];
         return n
      }
      var v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
         return typeof t
      } : function (t) {
         return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      };

      function y(t, e) {
         var i = t,
            n = ["true", "false"].indexOf(t) > -1,
            r = parseFloat(i, 10),
            o = !isNaN(r) && isFinite(i) && "string" === typeof i && !i.match(/^0+[^.]\d*$/g);
         return e && e !== Boolean && ("undefined" === typeof i ? "undefined" : v(i)) !== e ? i = e(t) : n || e === Boolean ? i = "" === i || "true" === i : o && (i = r), i
      }

      function x(t, e) {
         if (t && t.length) t.forEach(function (t) {
            var i = p(t); - 1 === e.camelCase.indexOf(i) && e.camelCase.push(i)
         });
         else if (t && "object" === ("undefined" === typeof t ? "undefined" : v(t)))
            for (var i in t) {
               var n = p(i); - 1 === e.camelCase.indexOf(n) && e.camelCase.push(n), t[n] && t[n].type && (e.types[i] = [].concat(t[n].type)[0])
            }
      }

      function b() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = {
               camelCase: [],
               hyphenate: [],
               types: {}
            };
         if (t.mixins && t.mixins.forEach(function (t) {
               x(t.props, e)
            }), t.extends && t.extends.props) {
            var i = t.extends.props;
            x(i, e)
         }
         return x(t.props, e), e.camelCase.forEach(function (t) {
            e.hyphenate.push(m(t))
         }), e
      }

      function _(t, e) {
         e.camelCase.forEach(function (i, n) {
            Object.defineProperty(t, i, {
               get: function () {
                  return this.__vue_custom_element__[i]
               },
               set: function (t) {
                  if ("object" !== ("undefined" === typeof t ? "undefined" : v(t)) && "function" !== typeof t || !this.__vue_custom_element__) {
                     var i = e.types[e.camelCase[n]];
                     this.setAttribute(e.hyphenate[n], y(t, i))
                  } else {
                     var r = e.camelCase[n];
                     this.__vue_custom_element__[r] = t
                  }
               }
            })
         })
      }

      function w(t, e, i) {
         var n = e.propsData || {};
         return i.hyphenate.forEach(function (e, r) {
            var o = i.camelCase[r],
               a = t.attributes[e] || t[o],
               s = null;
            i.types[o] && (s = i.types[o]), a instanceof Attr ? n[o] = y(a.value, s) : "undefined" !== typeof a && (n[o] = a)
         }), n
      }

      function k(t) {
         var e = {};
         return g(t.attributes).forEach(function (t) {
            e["vue-slot" === t.nodeName ? "slot" : t.nodeName] = t.nodeValue
         }), e
      }

      function S(t) {
         if (t.childNodes.length) return t.childNodes;
         if (t.content && t.content.childNodes && t.content.childNodes.length) return t.content.childNodes;
         var e = document.createElement("div");
         return e.innerHTML = t.innerHTML, e.childNodes
      }

      function M(t, e, i) {
         var n = S(e),
            r = g(n).map(function (e) {
               return "#text" === e.nodeName ? e.nodeValue : t(e.tagName, {
                  attrs: k(e),
                  domProps: {
                     innerHTML: e.innerHTML
                  }
               })
            });
         return i.slot = e.id, t("template", i, r)
      }

      function A() {
         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments[1],
            i = [];
         return g(t).forEach(function (t) {
            if ("#text" === t.nodeName) t.nodeValue.trim() && i.push(e("span", t.nodeValue));
            else if ("#comment" !== t.nodeName) {
               var n = k(t),
                  r = {
                     attrs: n,
                     domProps: {
                        innerHTML: "" === t.innerHTML ? t.innerText : t.innerHTML
                     }
                  };
               n.slot && (r.slot = n.slot, n.slot = void 0);
               var o = "TEMPLATE" === t.tagName ? M(e, t, r) : e(t.tagName, r);
               i.push(o)
            }
         }), i
      }

      function C(t, e) {
         var i = {
               bubbles: !1,
               cancelable: !1,
               detail: e
            },
            n = void 0;
         return "function" === typeof window.CustomEvent ? n = new CustomEvent(t, i) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(t, i.bubbles, i.cancelable, i.detail)), n
      }

      function P(t, e) {
         for (var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) n[r - 2] = arguments[r];
         var o = C(e, [].concat(n));
         t.dispatchEvent(o)
      }

      function T(t, e, i, n, r) {
         if (!t.__vue_custom_element__) {
            var o = function () {
                  this.$emit = function () {
                     for (var e, i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                     P.apply(void 0, [t].concat(n)), this.__proto__ && (e = this.__proto__.$emit).call.apply(e, [this].concat(n))
                  }
               },
               a = e.util.extend({}, i),
               s = w(t, a, n),
               c = e.version && parseInt(e.version.split(".")[0], 10) || 0;
            if (a.beforeCreate = [].concat(a.beforeCreate || [], o), a._compiled) {
               var l = {};
               a._Ctor && (l = Object.values(a._Ctor)[0].options), l.beforeCreate = a.beforeCreate
            }
            var h = void 0;
            if (c >= 2) {
               var d = t.cloneNode(!0).childNodes;
               h = {
                  propsData: s,
                  props: n.camelCase,
                  computed: {
                     reactiveProps: function () {
                        var t = this,
                           e = {};
                        return n.camelCase.forEach(function (i) {
                           "undefined" !== typeof t[i] && (e[i] = t[i])
                        }), e
                     }
                  },
                  render: function (t) {
                     var e = {
                        props: this.reactiveProps
                     };
                     return t(a, e, A(d, t))
                  }
               }
            } else if (1 === c) h = a, h.propsData = s;
            else {
               h = a;
               var u = {};
               Object.keys(s).forEach(function (t) {
                  u[t] = {
                     default: s[t]
                  }
               }), h.props = u
            }
            var p = c >= 2 ? "<div></div>" : ("<div>" + t.innerHTML + "</div>").replace(/vue-slot=/g, "slot=");
            if (r.shadow && t.shadowRoot ? (t.shadowRoot.innerHTML = p, h.el = t.shadowRoot.children[0]) : (t.innerHTML = p, h.el = t.children[0]), _(t, n), "function" === typeof r.beforeCreateVueInstance && (h = r.beforeCreateVueInstance(h) || h), t.__vue_custom_element__ = new e(h), t.__vue_custom_element_props__ = n, t.getVueInstance = function () {
                  return t.__vue_custom_element__.$children[0]
               }, r.shadow && r.shadowCss && t.shadowRoot) {
               var f = document.createElement("style");
               f.type = "text/css", f.appendChild(document.createTextNode(r.shadowCss)), t.shadowRoot.appendChild(f)
            }
            t.removeAttribute("vce-cloak"), t.setAttribute("vce-ready", ""), P(t, "vce-ready")
         }
      }

      function O(t) {
         t.customElement = function (e, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
               r = "function" === typeof i,
               o = r && {
                  props: n.props || []
               },
               a = b(r ? o : i),
               s = d(e, {
                  constructorCallback: function () {
                     "function" === typeof n.constructorCallback && n.constructorCallback.call(this)
                  },
                  connectedCallback: function () {
                     var o = this,
                        s = r && i(),
                        c = s && s.then && "function" === typeof s.then;
                     if ("function" === typeof n.connectedCallback && n.connectedCallback.call(this), r && !c) throw new Error("Async component " + e + " do not returns Promise");
                     this.__detached__ || (c ? s.then(function (e) {
                        var i = b(e);
                        T(o, t, e, i, n), "function" === typeof n.vueInstanceCreatedCallback && n.vueInstanceCreatedCallback.call(o)
                     }) : (T(this, t, i, a, n), "function" === typeof n.vueInstanceCreatedCallback && n.vueInstanceCreatedCallback.call(this))), this.__detached__ = !1
                  },
                  disconnectedCallback: function () {
                     var t = this;
                     this.__detached__ = !0, "function" === typeof n.disconnectedCallback && n.disconnectedCallback.call(this), setTimeout(function () {
                        t.__detached__ && t.__vue_custom_element__ && (t.__vue_custom_element__.$destroy(!0), delete t.__vue_custom_element__, delete t.__vue_custom_element_props__)
                     }, n.destroyTimeout || 3e3)
                  },
                  attributeChangedCallback: function (t, e, i) {
                     if (this.__vue_custom_element__ && "undefined" !== typeof i) {
                        var r = p(t);
                        "function" === typeof n.attributeChangedCallback && n.attributeChangedCallback.call(this, t, e, i);
                        var o = this.__vue_custom_element_props__.types[r];
                        this.__vue_custom_element__[r] = y(i, o)
                     }
                  },
                  observedAttributes: a.hyphenate,
                  shadow: !!n.shadow && !!HTMLElement.prototype.attachShadow
               });
            return s
         }
      }
      "undefined" !== typeof window && window.Vue && (window.Vue.use(O), O.installed && (O.installed = !1)), e["a"] = O
   },
   c8ba: function (t, e) {
      var i;
      i = function () {
         return this
      }();
      try {
         i = i || new Function("return this")()
      } catch (n) {
         "object" === typeof window && (i = window)
      }
      t.exports = i
   },
   ca5a: function (t, e) {
      var i = 0,
         n = Math.random();
      t.exports = function (t) {
         return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
      }
   },
   ca9f: function (t, e, i) {
      "use strict";
      var n = i("0f7c"),
         r = i("f367"),
         o = i("562e"),
         a = i("1b7f"),
         s = i("b3fd"),
         c = n.call(Function.call, a());
      r(c, {
         getPolyfill: a,
         implementation: o,
         shim: s
      }), t.exports = c
   },
   cadf: function (t, e, i) {
      "use strict";
      var n = i("9c6c"),
         r = i("d53b"),
         o = i("84f2"),
         a = i("6821");
      t.exports = i("01f9")(Array, "Array", function (t, e) {
         this._t = a(t), this._i = 0, this._k = e
      }, function () {
         var t = this._t,
            e = this._k,
            i = this._i++;
         return !t || i >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
      }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
   },
   cb7c: function (t, e, i) {
      var n = i("d3f4");
      t.exports = function (t) {
         if (!n(t)) throw TypeError(t + " is not an object!");
         return t
      }
   },
   ce10: function (t, e, i) {
      var n = i("69a8"),
         r = i("6821"),
         o = i("c366")(!1),
         a = i("613b")("IE_PROTO");
      t.exports = function (t, e) {
         var i, s = r(t),
            c = 0,
            l = [];
         for (i in s) i != a && n(s, i) && l.push(i);
         while (e.length > c) n(s, i = e[c++]) && (~o(l, i) || l.push(i));
         return l
      }
   },
   d024: function (t, e, i) {
      "use strict";
      var n = i("21d0"),
         r = Object.prototype.toString,
         o = Object.prototype.hasOwnProperty,
         a = function (t, e, i) {
            for (var n = 0, r = t.length; n < r; n++) o.call(t, n) && (null == i ? e(t[n], n, t) : e.call(i, t[n], n, t))
         },
         s = function (t, e, i) {
            for (var n = 0, r = t.length; n < r; n++) null == i ? e(t.charAt(n), n, t) : e.call(i, t.charAt(n), n, t)
         },
         c = function (t, e, i) {
            for (var n in t) o.call(t, n) && (null == i ? e(t[n], n, t) : e.call(i, t[n], n, t))
         },
         l = function (t, e, i) {
            if (!n(e)) throw new TypeError("iterator must be a function");
            var o;
            arguments.length >= 3 && (o = i), "[object Array]" === r.call(t) ? a(t, e, o) : "string" === typeof t ? s(t, e, o) : c(t, e, o)
         };
      t.exports = l
   },
   d127: function (t, e, i) {
      i("0a0a")("asyncIterator")
   },
   d13f: function (t, e, i) {
      var n = i("da3c"),
         r = i("a7d3"),
         o = i("bc25"),
         a = i("8ce0"),
         s = i("43c8"),
         c = "prototype",
         l = function (t, e, i) {
            var h, d, u, p = t & l.F,
               f = t & l.G,
               m = t & l.S,
               g = t & l.P,
               v = t & l.B,
               y = t & l.W,
               x = f ? r : r[e] || (r[e] = {}),
               b = x[c],
               _ = f ? n : m ? n[e] : (n[e] || {})[c];
            for (h in f && (i = e), i) d = !p && _ && void 0 !== _[h], d && s(x, h) || (u = d ? _[h] : i[h], x[h] = f && "function" != typeof _[h] ? i[h] : v && d ? o(u, n) : y && _[h] == u ? function (t) {
               var e = function (e, i, n) {
                  if (this instanceof t) {
                     switch (arguments.length) {
                        case 0:
                           return new t;
                        case 1:
                           return new t(e);
                        case 2:
                           return new t(e, i)
                     }
                     return new t(e, i, n)
                  }
                  return t.apply(this, arguments)
               };
               return e[c] = t[c], e
            }(u) : g && "function" == typeof u ? o(Function.call, u) : u, g && ((x.virtual || (x.virtual = {}))[h] = u, t & l.R && b && !b[h] && a(b, h, u)))
         };
      l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
   },
   d24f: function (t, e, i) {
      i("0a0a")("observable")
   },
   d256: function (t, e, i) {
      "use strict";
      var n = i("da3c"),
         r = i("43c8"),
         o = i("7d95"),
         a = i("d13f"),
         s = i("2312"),
         c = i("6277").KEY,
         l = i("d782"),
         h = i("7772"),
         d = i("c0d8"),
         u = i("7b00"),
         p = i("1b55"),
         f = i("fda1"),
         m = i("0a0a"),
         g = i("d2d6"),
         v = i("b5aa"),
         y = i("0f89"),
         x = i("6f8a"),
         b = i("6a9b"),
         _ = i("2ea1"),
         w = i("f845"),
         k = i("7108"),
         S = i("565d"),
         M = i("626e"),
         A = i("3adc"),
         C = i("7633"),
         P = M.f,
         T = A.f,
         O = S.f,
         L = n.Symbol,
         D = n.JSON,
         E = D && D.stringify,
         I = "prototype",
         z = p("_hidden"),
         B = p("toPrimitive"),
         N = {}.propertyIsEnumerable,
         R = h("symbol-registry"),
         j = h("symbols"),
         H = h("op-symbols"),
         G = Object[I],
         F = "function" == typeof L,
         W = n.QObject,
         $ = !W || !W[I] || !W[I].findChild,
         X = o && l(function () {
            return 7 != k(T({}, "a", {
               get: function () {
                  return T(this, "a", {
                     value: 7
                  }).a
               }
            })).a
         }) ? function (t, e, i) {
            var n = P(G, e);
            n && delete G[e], T(t, e, i), n && t !== G && T(G, e, n)
         } : T,
         V = function (t) {
            var e = j[t] = k(L[I]);
            return e._k = t, e
         },
         Y = F && "symbol" == typeof L.iterator ? function (t) {
            return "symbol" == typeof t
         } : function (t) {
            return t instanceof L
         },
         U = function (t, e, i) {
            return t === G && U(H, e, i), y(t), e = _(e, !0), y(i), r(j, e) ? (i.enumerable ? (r(t, z) && t[z][e] && (t[z][e] = !1), i = k(i, {
               enumerable: w(0, !1)
            })) : (r(t, z) || T(t, z, w(1, {})), t[z][e] = !0), X(t, e, i)) : T(t, e, i)
         },
         K = function (t, e) {
            y(t);
            var i, n = g(e = b(e)),
               r = 0,
               o = n.length;
            while (o > r) U(t, i = n[r++], e[i]);
            return t
         },
         q = function (t, e) {
            return void 0 === e ? k(t) : K(k(t), e)
         },
         Z = function (t) {
            var e = N.call(this, t = _(t, !0));
            return !(this === G && r(j, t) && !r(H, t)) && (!(e || !r(this, t) || !r(j, t) || r(this, z) && this[z][t]) || e)
         },
         J = function (t, e) {
            if (t = b(t), e = _(e, !0), t !== G || !r(j, e) || r(H, e)) {
               var i = P(t, e);
               return !i || !r(j, e) || r(t, z) && t[z][e] || (i.enumerable = !0), i
            }
         },
         Q = function (t) {
            var e, i = O(b(t)),
               n = [],
               o = 0;
            while (i.length > o) r(j, e = i[o++]) || e == z || e == c || n.push(e);
            return n
         },
         tt = function (t) {
            var e, i = t === G,
               n = O(i ? H : b(t)),
               o = [],
               a = 0;
            while (n.length > a) !r(j, e = n[a++]) || i && !r(G, e) || o.push(j[e]);
            return o
         };
      F || (L = function () {
         if (this instanceof L) throw TypeError("Symbol is not a constructor!");
         var t = u(arguments.length > 0 ? arguments[0] : void 0),
            e = function (i) {
               this === G && e.call(H, i), r(this, z) && r(this[z], t) && (this[z][t] = !1), X(this, t, w(1, i))
            };
         return o && $ && X(G, t, {
            configurable: !0,
            set: e
         }), V(t)
      }, s(L[I], "toString", function () {
         return this._k
      }), M.f = J, A.f = U, i("d876").f = S.f = Q, i("d74e").f = Z, i("31c2").f = tt, o && !i("b457") && s(G, "propertyIsEnumerable", Z, !0), f.f = function (t) {
         return V(p(t))
      }), a(a.G + a.W + a.F * !F, {
         Symbol: L
      });
      for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; et.length > it;) p(et[it++]);
      for (var nt = C(p.store), rt = 0; nt.length > rt;) m(nt[rt++]);
      a(a.S + a.F * !F, "Symbol", {
         for: function (t) {
            return r(R, t += "") ? R[t] : R[t] = L(t)
         },
         keyFor: function (t) {
            if (!Y(t)) throw TypeError(t + " is not a symbol!");
            for (var e in R)
               if (R[e] === t) return e
         },
         useSetter: function () {
            $ = !0
         },
         useSimple: function () {
            $ = !1
         }
      }), a(a.S + a.F * !F, "Object", {
         create: q,
         defineProperty: U,
         defineProperties: K,
         getOwnPropertyDescriptor: J,
         getOwnPropertyNames: Q,
         getOwnPropertySymbols: tt
      }), D && a(a.S + a.F * (!F || l(function () {
         var t = L();
         return "[null]" != E([t]) || "{}" != E({
            a: t
         }) || "{}" != E(Object(t))
      })), "JSON", {
         stringify: function (t) {
            var e, i, n = [t],
               r = 1;
            while (arguments.length > r) n.push(arguments[r++]);
            if (i = e = n[1], (x(e) || void 0 !== t) && !Y(t)) return v(e) || (e = function (t, e) {
               if ("function" == typeof i && (e = i.call(this, t, e)), !Y(e)) return e
            }), n[1] = e, E.apply(D, n)
         }
      }), L[I][B] || i("8ce0")(L[I], B, L[I].valueOf), d(L, "Symbol"), d(Math, "Math", !0), d(n.JSON, "JSON", !0)
   },
   d2d6: function (t, e, i) {
      var n = i("7633"),
         r = i("31c2"),
         o = i("d74e");
      t.exports = function (t) {
         var e = n(t),
            i = r.f;
         if (i) {
            var a, s = i(t),
               c = o.f,
               l = 0;
            while (s.length > l) c.call(t, a = s[l++]) && e.push(a)
         }
         return e
      }
   },
   d3f4: function (t, e) {
      t.exports = function (t) {
         return "object" === typeof t ? null !== t : "function" === typeof t
      }
   },
   d4ab: function (t, e, i) {
      "use strict";
      var n = Object.prototype.toString;
      t.exports = function (t) {
         var e = n.call(t),
            i = "[object Arguments]" === e;
         return i || (i = "[object Array]" !== e && null !== t && "object" === typeof t && "number" === typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), i
      }
   },
   d53b: function (t, e) {
      t.exports = function (t, e) {
         return {
            value: e,
            done: !!t
         }
      }
   },
   d6c7: function (t, e, i) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
         r = Object.prototype.toString,
         o = Array.prototype.slice,
         a = i("d4ab"),
         s = Object.prototype.propertyIsEnumerable,
         c = !s.call({
            toString: null
         }, "toString"),
         l = s.call(function () {}, "prototype"),
         h = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
         d = function (t) {
            var e = t.constructor;
            return e && e.prototype === t
         },
         u = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
         },
         p = function () {
            if ("undefined" === typeof window) return !1;
            for (var t in window) try {
               if (!u["$" + t] && n.call(window, t) && null !== window[t] && "object" === typeof window[t]) try {
                  d(window[t])
               } catch (e) {
                  return !0
               }
            } catch (e) {
               return !0
            }
            return !1
         }(),
         f = function (t) {
            if ("undefined" === typeof window || !p) return d(t);
            try {
               return d(t)
            } catch (e) {
               return !1
            }
         },
         m = function (t) {
            var e = null !== t && "object" === typeof t,
               i = "[object Function]" === r.call(t),
               o = a(t),
               s = e && "[object String]" === r.call(t),
               d = [];
            if (!e && !i && !o) throw new TypeError("Object.keys called on a non-object");
            var u = l && i;
            if (s && t.length > 0 && !n.call(t, 0))
               for (var p = 0; p < t.length; ++p) d.push(String(p));
            if (o && t.length > 0)
               for (var m = 0; m < t.length; ++m) d.push(String(m));
            else
               for (var g in t) u && "prototype" === g || !n.call(t, g) || d.push(String(g));
            if (c)
               for (var v = f(t), y = 0; y < h.length; ++y) v && "constructor" === h[y] || !n.call(t, h[y]) || d.push(h[y]);
            return d
         };
      m.shim = function () {
         if (Object.keys) {
            var t = function () {
               return 2 === (Object.keys(arguments) || "").length
            }(1, 2);
            if (!t) {
               var e = Object.keys;
               Object.keys = function (t) {
                  return a(t) ? e(o.call(t)) : e(t)
               }
            }
         } else Object.keys = m;
         return Object.keys || m
      }, t.exports = m
   },
   d74e: function (t, e) {
      e.f = {}.propertyIsEnumerable
   },
   d782: function (t, e) {
      t.exports = function (t) {
         try {
            return !!t()
         } catch (e) {
            return !0
         }
      }
   },
   d876: function (t, e, i) {
      var n = i("2695"),
         r = i("0029").concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function (t) {
         return n(t, r)
      }
   },
   d8e8: function (t, e) {
      t.exports = function (t) {
         if ("function" != typeof t) throw TypeError(t + " is not a function!");
         return t
      }
   },
   da3c: function (t, e) {
      var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = i)
   },
   dcbc: function (t, e, i) {
      var n = i("2aba");
      t.exports = function (t, e, i) {
         for (var r in e) n(t, r, e[r], i);
         return t
      }
   },
   dd04: function (t, e, i) {
      i("12fd9"), i("93c4"), i("b42c"), i("5b5f"), i("b604"), i("c609"), t.exports = i("a7d3").Promise
   },
   dd11: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "ì‹œê°€ì´ì•¡ ìˆœìœ„",
            mcap: "ì‹œê°€ì´ì•¡",
            "24h_volume": "24ì‹œê°„ ê±°ëž˜ëŸ‰",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: " %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "ì•”í˜¸í™”í ê°€ê²© ë¹„êµ",
            crypto_market_cap_comparison: "ì•”í˜¸í™”í ì‹œê°€ì´ì•¡ ë¹„êµ"
         },
         coin_price_static_headline_widget: {
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "ê³ ê°€ (24ì‹œê°„)",
            "24h_low": "ì €ê°€ (24ì‹œê°„)",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "ê³ ê°€ (24ì‹œê°„)",
            "24h_low": "ì €ê°€ (24ì‹œê°„)",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "ì•”í˜¸í™”í ë‚˜ë¬´ì§€ë„",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "24ì‹œê°„ ê±°ëž˜ëŸ‰",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "ê±°ëž˜ì†Œ",
            pair: "ê±°ëž˜ìŒ",
            price: "ì‹œì„¸",
            volume: "ê±°ëž˜ëŒ€ê¸ˆ",
            trust_score: "ì‹ ë¢°ì§€ìˆ˜",
            view_price_chart: "ì°¨íŠ¸ ë³´ê¸°",
            powered_by: " %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   decf: function (t, e, i) {
      var n = i("0f89"),
         r = i("6f8a"),
         o = i("03ca");
      t.exports = function (t, e) {
         if (n(t), r(e) && e.constructor === t) return e;
         var i = o.f(t),
            a = i.resolve;
         return a(e), i.promise
      }
   },
   df0a: function (t, e, i) {
      var n, r, o, a = i("bc25"),
         s = i("196c"),
         c = i("103a"),
         l = i("12fd"),
         h = i("da3c"),
         d = h.process,
         u = h.setImmediate,
         p = h.clearImmediate,
         f = h.MessageChannel,
         m = h.Dispatch,
         g = 0,
         v = {},
         y = "onreadystatechange",
         x = function () {
            var t = +this;
            if (v.hasOwnProperty(t)) {
               var e = v[t];
               delete v[t], e()
            }
         },
         b = function (t) {
            x.call(t.data)
         };
      u && p || (u = function (t) {
         var e = [],
            i = 1;
         while (arguments.length > i) e.push(arguments[i++]);
         return v[++g] = function () {
            s("function" == typeof t ? t : Function(t), e)
         }, n(g), g
      }, p = function (t) {
         delete v[t]
      }, "process" == i("6e1f")(d) ? n = function (t) {
         d.nextTick(a(x, t, 1))
      } : m && m.now ? n = function (t) {
         m.now(a(x, t, 1))
      } : f ? (r = new f, o = r.port2, r.port1.onmessage = b, n = a(o.postMessage, o, 1)) : h.addEventListener && "function" == typeof postMessage && !h.importScripts ? (n = function (t) {
         h.postMessage(t + "", "*")
      }, h.addEventListener("message", b, !1)) : n = y in l("script") ? function (t) {
         c.appendChild(l("script"))[y] = function () {
            c.removeChild(this), x.call(t)
         }
      } : function (t) {
         setTimeout(a(x, t, 1), 0)
      }), t.exports = {
         set: u,
         clear: p
      }
   },
   e11e: function (t, e) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
   },
   e4a9: function (t, e, i) {
      "use strict";
      var n = i("b457"),
         r = i("d13f"),
         o = i("2312"),
         a = i("8ce0"),
         s = i("b22a"),
         c = i("5ce7"),
         l = i("c0d8"),
         h = i("ff0c"),
         d = i("1b55")("iterator"),
         u = !([].keys && "next" in [].keys()),
         p = "@@iterator",
         f = "keys",
         m = "values",
         g = function () {
            return this
         };
      t.exports = function (t, e, i, v, y, x, b) {
         c(i, e, v);
         var _, w, k, S = function (t) {
               if (!u && t in P) return P[t];
               switch (t) {
                  case f:
                     return function () {
                        return new i(this, t)
                     };
                  case m:
                     return function () {
                        return new i(this, t)
                     }
               }
               return function () {
                  return new i(this, t)
               }
            },
            M = e + " Iterator",
            A = y == m,
            C = !1,
            P = t.prototype,
            T = P[d] || P[p] || y && P[y],
            O = T || S(y),
            L = y ? A ? S("entries") : O : void 0,
            D = "Array" == e && P.entries || T;
         if (D && (k = h(D.call(new t)), k !== Object.prototype && k.next && (l(k, M, !0), n || "function" == typeof k[d] || a(k, d, g))), A && T && T.name !== m && (C = !0, O = function () {
               return T.call(this)
            }), n && !b || !u && !C && P[d] || a(P, d, O), s[e] = O, s[M] = g, y)
            if (_ = {
                  values: A ? O : S(m),
                  keys: x ? O : S(f),
                  entries: L
               }, b)
               for (w in _) w in P || o(P, w, _[w]);
            else r(r.P + r.F * (u || C), e, _);
         return _
      }
   },
   e591: function (t, e, i) {
      var n;
      (function (r, o) {
         t.exports ? t.exports = r.document ? o(r) : o : (n = function () {
            return o(r)
         }.call(e, i, e, t), void 0 === n || (t.exports = n))
      })("undefined" !== typeof window ? window : this, function (t) {
         var e = function () {
            var e = "undefined" === typeof t ? window : t,
               i = e.document,
               n = e.navigator && e.navigator.userAgent || "",
               r = i && i.createElementNS && !!i.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
               o = /(edge|msie|trident)/i.test(n) && !e.opera,
               a = -1 !== n.indexOf("Firefox"),
               s = -1 !== n.indexOf("Chrome"),
               c = a && 4 > parseInt(n.split("Firefox/")[1], 10);
            return e.Highcharts ? e.Highcharts.error(16, !0) : {
               product: "Highstock",
               version: "6.2.0",
               deg2rad: 2 * Math.PI / 360,
               doc: i,
               hasBidiBug: c,
               hasTouch: i && void 0 !== i.documentElement.ontouchstart,
               isMS: o,
               isWebKit: -1 !== n.indexOf("AppleWebKit"),
               isFirefox: a,
               isChrome: s,
               isSafari: !s && -1 !== n.indexOf("Safari"),
               isTouchDevice: /(Mobile|Android|Windows Phone)/.test(n),
               SVG_NS: "http://www.w3.org/2000/svg",
               chartCount: 0,
               seriesTypes: {},
               symbolSizes: {},
               svg: r,
               win: e,
               marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
               noop: function () {},
               charts: []
            }
         }();
         (function (t) {
            t.timers = [];
            var e = t.charts,
               i = t.doc,
               n = t.win;
            t.error = function (e, i) {
               if (e = t.isNumber(e) ? "Highcharts error #" + e + ": www.highcharts.com/errors/" + e : e, i) throw Error(e);
               n.console && console.log(e)
            }, t.Fx = function (t, e, i) {
               this.options = e, this.elem = t, this.prop = i
            }, t.Fx.prototype = {
               dSetter: function () {
                  var t, e = this.paths[0],
                     i = this.paths[1],
                     n = [],
                     r = this.now,
                     o = e.length;
                  if (1 === r) n = this.toD;
                  else if (o === i.length && 1 > r)
                     for (; o--;) t = parseFloat(e[o]), n[o] = isNaN(t) ? i[o] : r * parseFloat(i[o] - t) + t;
                  else n = i;
                  this.elem.attr("d", n, null, !0)
               },
               update: function () {
                  var t = this.elem,
                     e = this.prop,
                     i = this.now,
                     n = this.options.step;
                  this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, n && n.call(t, i, this)
               },
               run: function (e, i, r) {
                  var o = this,
                     a = o.options,
                     s = function (t) {
                        return !s.stopped && o.step(t)
                     },
                     c = n.requestAnimationFrame || function (t) {
                        setTimeout(t, 13)
                     },
                     l = function () {
                        for (var e = 0; e < t.timers.length; e++) t.timers[e]() || t.timers.splice(e--, 1);
                        t.timers.length && c(l)
                     };
                  e !== i || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = e, this.end = i, this.unit = r, this.now = this.start, this.pos = 0, s.elem = this.elem, s.prop = this.prop, s() && 1 === t.timers.push(s) && c(l)) : (delete a.curAnim[this.prop], a.complete && 0 === t.keys(a.curAnim).length && a.complete.call(this.elem))
               },
               step: function (e) {
                  var i, n = +new Date,
                     r = this.options,
                     o = this.elem,
                     a = r.complete,
                     s = r.duration,
                     c = r.curAnim;
                  return o.attr && !o.element ? e = !1 : e || n >= s + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), i = c[this.prop] = !0, t.objectEach(c, function (t) {
                     !0 !== t && (i = !1)
                  }), i && a && a.call(o), e = !1) : (this.pos = r.easing((n - this.startTime) / s), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e
               },
               initPath: function (e, i, n) {
                  function r(t) {
                     var e, i;
                     for (h = t.length; h--;) e = "M" === t[h] || "L" === t[h], i = /[a-zA-Z]/.test(t[h + 3]), e && i && t.splice(h + 1, 0, t[h + 1], t[h + 2], t[h + 1], t[h + 2])
                  }

                  function o(t, e) {
                     for (; t.length < c;) {
                        t[0] = e[c - t.length];
                        var i = t.slice(0, f);
                        [].splice.apply(t, [0, 0].concat(i)), g && (i = t.slice(t.length - f), [].splice.apply(t, [t.length, 0].concat(i)), h--)
                     }
                     t[0] = "M"
                  }

                  function a(t, e) {
                     for (var i = (c - t.length) / f; 0 < i && i--;) l = t.slice().splice(t.length / v - f, f * v), l[0] = e[c - f - i * f], p && (l[f - 6] = l[f - 2], l[f - 5] = l[f - 1]), [].splice.apply(t, [t.length / v, 0].concat(l)), g && i--
                  }
                  i = i || "";
                  var s, c, l, h, d = e.startX,
                     u = e.endX,
                     p = -1 < i.indexOf("C"),
                     f = p ? 7 : 3;
                  i = i.split(" "), n = n.slice();
                  var m, g = e.isArea,
                     v = g ? 2 : 1;
                  if (p && (r(i), r(n)), d && u) {
                     for (h = 0; h < d.length; h++) {
                        if (d[h] === u[0]) {
                           s = h;
                           break
                        }
                        if (d[0] === u[u.length - d.length + h]) {
                           s = h, m = !0;
                           break
                        }
                     }
                     void 0 === s && (i = [])
                  }
                  return i.length && t.isNumber(s) && (c = n.length + s * v * f, m ? (o(i, n), a(n, i)) : (o(n, i), a(i, n))), [i, n]
               },
               fillSetter: function () {
                  t.Fx.prototype.strokeSetter.apply(this, arguments)
               },
               strokeSetter: function () {
                  this.elem.attr(this.prop, t.color(this.start).tweenTo(t.color(this.end), this.pos), null, !0)
               }
            }, t.merge = function () {
               var e, i, n = arguments,
                  r = {},
                  o = function (e, i) {
                     return "object" !== typeof e && (e = {}), t.objectEach(i, function (n, r) {
                        !t.isObject(n, !0) || t.isClass(n) || t.isDOMElement(n) ? e[r] = i[r] : e[r] = o(e[r] || {}, n)
                     }), e
                  };
               for (!0 === n[0] && (r = n[1], n = Array.prototype.slice.call(n, 2)), i = n.length, e = 0; e < i; e++) r = o(r, n[e]);
               return r
            }, t.pInt = function (t, e) {
               return parseInt(t, e || 10)
            }, t.isString = function (t) {
               return "string" === typeof t
            }, t.isArray = function (t) {
               return t = Object.prototype.toString.call(t), "[object Array]" === t || "[object Array Iterator]" === t
            }, t.isObject = function (e, i) {
               return !!e && "object" === typeof e && (!i || !t.isArray(e))
            }, t.isDOMElement = function (e) {
               return t.isObject(e) && "number" === typeof e.nodeType
            }, t.isClass = function (e) {
               var i = e && e.constructor;
               return !(!t.isObject(e, !0) || t.isDOMElement(e) || !i || !i.name || "Object" === i.name)
            }, t.isNumber = function (t) {
               return "number" === typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t
            }, t.erase = function (t, e) {
               for (var i = t.length; i--;)
                  if (t[i] === e) {
                     t.splice(i, 1);
                     break
                  }
            }, t.defined = function (t) {
               return void 0 !== t && null !== t
            }, t.attr = function (e, i, n) {
               var r;
               return t.isString(i) ? t.defined(n) ? e.setAttribute(i, n) : e && e.getAttribute && ((r = e.getAttribute(i)) || "class" !== i || (r = e.getAttribute(i + "Name"))) : t.defined(i) && t.isObject(i) && t.objectEach(i, function (t, i) {
                  e.setAttribute(i, t)
               }), r
            }, t.splat = function (e) {
               return t.isArray(e) ? e : [e]
            }, t.syncTimeout = function (t, e, i) {
               if (e) return setTimeout(t, e, i);
               t.call(0, i)
            }, t.clearTimeout = function (e) {
               t.defined(e) && clearTimeout(e)
            }, t.extend = function (t, e) {
               var i;
               for (i in t || (t = {}), e) t[i] = e[i];
               return t
            }, t.pick = function () {
               var t, e, i = arguments,
                  n = i.length;
               for (t = 0; t < n; t++)
                  if (e = i[t], void 0 !== e && null !== e) return e
            }, t.css = function (e, i) {
               t.isMS && !t.svg && i && void 0 !== i.opacity && (i.filter = "alpha(opacity=" + 100 * i.opacity + ")"), t.extend(e.style, i)
            }, t.createElement = function (e, n, r, o, a) {
               e = i.createElement(e);
               var s = t.css;
               return n && t.extend(e, n), a && s(e, {
                  padding: 0,
                  border: "none",
                  margin: 0
               }), r && s(e, r), o && o.appendChild(e), e
            }, t.extendClass = function (e, i) {
               var n = function () {};
               return n.prototype = new e, t.extend(n.prototype, i), n
            }, t.pad = function (t, e, i) {
               return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || 0) + t
            }, t.relativeLength = function (t, e, i) {
               return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
            }, t.wrap = function (t, e, i) {
               var n = t[e];
               t[e] = function () {
                  var t = Array.prototype.slice.call(arguments),
                     e = arguments,
                     r = this;
                  return r.proceed = function () {
                     n.apply(r, arguments.length ? arguments : e)
                  }, t.unshift(n), t = i.apply(this, t), r.proceed = null, t
               }
            }, t.datePropsToTimestamps = function (e) {
               t.objectEach(e, function (i, n) {
                  t.isObject(i) && "function" === typeof i.getTime ? e[n] = i.getTime() : (t.isObject(i) || t.isArray(i)) && t.datePropsToTimestamps(i)
               })
            }, t.formatSingle = function (e, i, n) {
               var r = /\.([0-9])/,
                  o = t.defaultOptions.lang;
               return /f$/.test(e) ? (n = (n = e.match(r)) ? n[1] : -1, null !== i && (i = t.numberFormat(i, n, o.decimalPoint, -1 < e.indexOf(",") ? o.thousandsSep : ""))) : i = (n || t.time).dateFormat(e, i), i
            }, t.format = function (e, i, n) {
               for (var r, o, a, s, c, l = "{", h = !1, d = []; e;) {
                  if (l = e.indexOf(l), -1 === l) break;
                  if (r = e.slice(0, l), h) {
                     for (r = r.split(":"), o = r.shift().split("."), s = o.length, c = i, a = 0; a < s; a++) c && (c = c[o[a]]);
                     r.length && (c = t.formatSingle(r.join(":"), c, n)), d.push(c)
                  } else d.push(r);
                  e = e.slice(l + 1), l = (h = !h) ? "}" : "{"
               }
               return d.push(e), d.join("")
            }, t.getMagnitude = function (t) {
               return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
            }, t.normalizeTickInterval = function (e, i, n, r, o) {
               var a, s = e;
               for (n = t.pick(n, 1), a = e / n, i || (i = o ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === r && (1 === n ? i = t.grep(i, function (t) {
                     return 0 === t % 1
                  }) : .1 >= n && (i = [1 / n]))), r = 0; r < i.length && (s = i[r], !(o && s * n >= e || !o && a <= (i[r] + (i[r + 1] || i[r])) / 2)); r++);
               return t.correctFloat(s * n, -Math.round(Math.log(.001) / Math.LN10))
            }, t.stableSort = function (t, e) {
               var i, n, r = t.length;
               for (n = 0; n < r; n++) t[n].safeI = n;
               for (t.sort(function (t, n) {
                     return i = e(t, n), 0 === i ? t.safeI - n.safeI : i
                  }), n = 0; n < r; n++) delete t[n].safeI
            }, t.arrayMin = function (t) {
               for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
               return i
            }, t.arrayMax = function (t) {
               for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
               return i
            }, t.destroyObjectProperties = function (e, i) {
               t.objectEach(e, function (t, n) {
                  t && t !== i && t.destroy && t.destroy(), delete e[n]
               })
            }, t.discardElement = function (e) {
               var i = t.garbageBin;
               i || (i = t.createElement("div")), e && i.appendChild(e), i.innerHTML = ""
            }, t.correctFloat = function (t, e) {
               return parseFloat(t.toPrecision(e || 14))
            }, t.setAnimation = function (e, i) {
               i.renderer.globalAnimation = t.pick(e, i.options.chart.animation, !0)
            }, t.animObject = function (e) {
               return t.isObject(e) ? t.merge(e) : {
                  duration: e ? 500 : 0
               }
            }, t.timeUnits = {
               millisecond: 1,
               second: 1e3,
               minute: 6e4,
               hour: 36e5,
               day: 864e5,
               week: 6048e5,
               month: 24192e5,
               year: 314496e5
            }, t.numberFormat = function (e, i, n, r) {
               e = +e || 0, i = +i;
               var o, a, s = t.defaultOptions.lang,
                  c = (e.toString().split(".")[1] || "").split("e")[0].length,
                  l = e.toString().split("e");
               return -1 === i ? i = Math.min(c, 20) : t.isNumber(i) ? i && l[1] && 0 > l[1] && (o = i + +l[1], 0 <= o ? (l[0] = (+l[0]).toExponential(o).split("e")[0], i = o) : (l[0] = l[0].split(".")[0] || 0, e = 20 > i ? (l[0] * Math.pow(10, l[1])).toFixed(i) : 0, l[1] = 0)) : i = 2, a = (Math.abs(l[1] ? l[0] : e) + Math.pow(10, -Math.max(i, c) - 1)).toFixed(i), c = String(t.pInt(a)), o = 3 < c.length ? c.length % 3 : 0, n = t.pick(n, s.decimalPoint), r = t.pick(r, s.thousandsSep), e = (0 > e ? "-" : "") + (o ? c.substr(0, o) + r : ""), e += c.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + r), i && (e += n + a.slice(-i)), l[1] && 0 !== +e && (e += "e" + l[1]), e
            }, Math.easeInOutSine = function (t) {
               return -.5 * (Math.cos(Math.PI * t) - 1)
            }, t.getStyle = function (e, i, r) {
               return "width" === i ? Math.max(0, Math.min(e.offsetWidth, e.scrollWidth) - t.getStyle(e, "padding-left") - t.getStyle(e, "padding-right")) : "height" === i ? Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - t.getStyle(e, "padding-top") - t.getStyle(e, "padding-bottom")) : (n.getComputedStyle || t.error(27, !0), (e = n.getComputedStyle(e, void 0)) && (e = e.getPropertyValue(i), t.pick(r, "opacity" !== i) && (e = t.pInt(e))), e)
            }, t.inArray = function (e, i, n) {
               return (t.indexOfPolyfill || Array.prototype.indexOf).call(i, e, n)
            }, t.grep = function (e, i) {
               return (t.filterPolyfill || Array.prototype.filter).call(e, i)
            }, t.find = Array.prototype.find ? function (t, e) {
               return t.find(e)
            } : function (t, e) {
               var i, n = t.length;
               for (i = 0; i < n; i++)
                  if (e(t[i], i)) return t[i]
            }, t.some = function (e, i, n) {
               return (t.somePolyfill || Array.prototype.some).call(e, i, n)
            }, t.map = function (t, e) {
               for (var i = [], n = 0, r = t.length; n < r; n++) i[n] = e.call(t[n], t[n], n, t);
               return i
            }, t.keys = function (e) {
               return (t.keysPolyfill || Object.keys).call(void 0, e)
            }, t.reduce = function (e, i, n) {
               return (t.reducePolyfill || Array.prototype.reduce).apply(e, 2 < arguments.length ? [i, n] : [i])
            }, t.offset = function (t) {
               var e = i.documentElement;
               return t = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                  top: 0,
                  left: 0
               }, {
                  top: t.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                  left: t.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
               }
            }, t.stop = function (e, i) {
               for (var n = t.timers.length; n--;) t.timers[n].elem !== e || i && i !== t.timers[n].prop || (t.timers[n].stopped = !0)
            }, t.each = function (e, i, n) {
               return (t.forEachPolyfill || Array.prototype.forEach).call(e, i, n)
            }, t.objectEach = function (t, e, i) {
               for (var n in t) t.hasOwnProperty(n) && e.call(i || t[n], t[n], n, t)
            }, t.addEvent = function (e, i, n, r) {
               var o, a = e.addEventListener || t.addEventListenerPolyfill;
               return o = "function" === typeof e && e.prototype ? e.prototype.protoEvents = e.prototype.protoEvents || {} : e.hcEvents = e.hcEvents || {}, t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0), a && a.call(e, i, n, !1), o[i] || (o[i] = []), o[i].push(n), r && t.isNumber(r.order) && (n.order = r.order, o[i].sort(function (t, e) {
                     return t.order - e.order
                  })),
                  function () {
                     t.removeEvent(e, i, n)
                  }
            }, t.removeEvent = function (e, i, n) {
               function r(i, n) {
                  var r = e.removeEventListener || t.removeEventListenerPolyfill;
                  r && r.call(e, i, n, !1)
               }

               function o(n) {
                  var o, a;
                  e.nodeName && (i ? (o = {}, o[i] = !0) : o = n, t.objectEach(o, function (t, e) {
                     if (n[e])
                        for (a = n[e].length; a--;) r(e, n[e][a])
                  }))
               }
               var a, s;
               t.each(["protoEvents", "hcEvents"], function (c) {
                  var l = e[c];
                  l && (i ? (a = l[i] || [], n ? (s = t.inArray(n, a), -1 < s && (a.splice(s, 1), l[i] = a), r(i, n)) : (o(l), l[i] = [])) : (o(l), e[c] = {}))
               })
            }, t.fireEvent = function (e, n, r, o) {
               var a, s, c, l, h;
               r = r || {}, i.createEvent && (e.dispatchEvent || e.fireEvent) ? (a = i.createEvent("Events"), a.initEvent(n, !0, !0), t.extend(a, r), e.dispatchEvent ? e.dispatchEvent(a) : e.fireEvent(n, a)) : t.each(["protoEvents", "hcEvents"], function (i) {
                  if (e[i])
                     for (s = e[i][n] || [], c = s.length, r.target || t.extend(r, {
                           preventDefault: function () {
                              r.defaultPrevented = !0
                           },
                           target: e,
                           type: n
                        }), l = 0; l < c; l++)(h = s[l]) && !1 === h.call(e, r) && r.preventDefault()
               }), o && !r.defaultPrevented && o.call(e, r)
            }, t.animate = function (e, i, n) {
               var r, o, a, s, c = "";
               t.isObject(n) || (s = arguments, n = {
                  duration: s[2],
                  easing: s[3],
                  complete: s[4]
               }), t.isNumber(n.duration) || (n.duration = 400), n.easing = "function" === typeof n.easing ? n.easing : Math[n.easing] || Math.easeInOutSine, n.curAnim = t.merge(i), t.objectEach(i, function (s, l) {
                  t.stop(e, l), a = new t.Fx(e, n, l), o = null, "d" === l ? (a.paths = a.initPath(e, e.d, i.d), a.toD = i.d, r = 0, o = 1) : e.attr ? r = e.attr(l) : (r = parseFloat(t.getStyle(e, l)) || 0, "opacity" !== l && (c = "px")), o || (o = s), o && o.match && o.match("px") && (o = o.replace(/px/g, "")), a.run(r, o, c)
               })
            }, t.seriesType = function (e, i, n, r, o) {
               var a = t.getOptions(),
                  s = t.seriesTypes;
               return a.plotOptions[e] = t.merge(a.plotOptions[i], n), s[e] = t.extendClass(s[i] || function () {}, r), s[e].prototype.type = e, o && (s[e].prototype.pointClass = t.extendClass(t.Point, o)), s[e]
            }, t.uniqueKey = function () {
               var t = Math.random().toString(36).substring(2, 9),
                  e = 0;
               return function () {
                  return "highcharts-" + t + "-" + e++
               }
            }(), n.jQuery && (n.jQuery.fn.highcharts = function () {
               var i = [].slice.call(arguments);
               if (this[0]) return i[0] ? (new(t[t.isString(i[0]) ? i.shift() : "Chart"])(this[0], i[0], i[1]), this) : e[t.attr(this[0], "data-highcharts-chart")]
            })
         })(e),
         function (t) {
            var e = t.each,
               i = t.isNumber,
               n = t.map,
               r = t.merge,
               o = t.pInt;
            t.Color = function (e) {
               if (!(this instanceof t.Color)) return new t.Color(e);
               this.init(e)
            }, t.Color.prototype = {
               parsers: [{
                  regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                  parse: function (t) {
                     return [o(t[1]), o(t[2]), o(t[3]), parseFloat(t[4], 10)]
                  }
               }, {
                  regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                  parse: function (t) {
                     return [o(t[1]), o(t[2]), o(t[3]), 1]
                  }
               }],
               names: {
                  white: "#ffffff",
                  black: "#000000"
               },
               init: function (e) {
                  var i, r, o, a;
                  if ((this.input = e = this.names[e && e.toLowerCase ? e.toLowerCase() : ""] || e) && e.stops) this.stops = n(e.stops, function (e) {
                     return new t.Color(e[1])
                  });
                  else if (e && e.charAt && "#" === e.charAt() && (i = e.length, e = parseInt(e.substr(1), 16), 7 === i ? r = [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 1] : 4 === i && (r = [(3840 & e) >> 4 | (3840 & e) >> 8, (240 & e) >> 4 | 240 & e, (15 & e) << 4 | 15 & e, 1])), !r)
                     for (o = this.parsers.length; o-- && !r;) a = this.parsers[o], (i = a.regex.exec(e)) && (r = a.parse(i));
                  this.rgba = r || []
               },
               get: function (t) {
                  var n, o = this.input,
                     a = this.rgba;
                  return this.stops ? (n = r(o), n.stops = [].concat(n.stops), e(this.stops, function (e, i) {
                     n.stops[i] = [n.stops[i][0], e.get(t)]
                  })) : n = a && i(a[0]) ? "rgb" === t || !t && 1 === a[3] ? "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")" : "a" === t ? a[3] : "rgba(" + a.join(",") + ")" : o, n
               },
               brighten: function (t) {
                  var n, r = this.rgba;
                  if (this.stops) e(this.stops, function (e) {
                     e.brighten(t)
                  });
                  else if (i(t) && 0 !== t)
                     for (n = 0; 3 > n; n++) r[n] += o(255 * t), 0 > r[n] && (r[n] = 0), 255 < r[n] && (r[n] = 255);
                  return this
               },
               setOpacity: function (t) {
                  return this.rgba[3] = t, this
               },
               tweenTo: function (t, e) {
                  var i = this.rgba,
                     n = t.rgba;
                  return n.length && i && i.length ? (t = 1 !== n[3] || 1 !== i[3], e = (t ? "rgba(" : "rgb(") + Math.round(n[0] + (i[0] - n[0]) * (1 - e)) + "," + Math.round(n[1] + (i[1] - n[1]) * (1 - e)) + "," + Math.round(n[2] + (i[2] - n[2]) * (1 - e)) + (t ? "," + (n[3] + (i[3] - n[3]) * (1 - e)) : "") + ")") : e = t.input || "none", e
               }
            }, t.color = function (e) {
               return new t.Color(e)
            }
         }(e),
         function (t) {
            var e, i, n = t.addEvent,
               r = t.animate,
               o = t.attr,
               a = t.charts,
               s = t.color,
               c = t.css,
               l = t.createElement,
               h = t.defined,
               d = t.deg2rad,
               u = t.destroyObjectProperties,
               p = t.doc,
               f = t.each,
               m = t.extend,
               g = t.erase,
               v = t.grep,
               y = t.hasTouch,
               x = t.inArray,
               b = t.isArray,
               _ = t.isFirefox,
               w = t.isMS,
               k = t.isObject,
               S = t.isString,
               M = t.isWebKit,
               A = t.merge,
               C = t.noop,
               P = t.objectEach,
               T = t.pick,
               O = t.pInt,
               L = t.removeEvent,
               D = t.stop,
               E = t.svg,
               I = t.SVG_NS,
               z = t.symbolSizes,
               B = t.win;
            e = t.SVGElement = function () {
               return this
            }, m(e.prototype, {
               opacity: 1,
               SVG_NS: I,
               textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
               init: function (t, e) {
                  this.element = "span" === e ? l(e) : p.createElementNS(this.SVG_NS, e), this.renderer = t
               },
               animate: function (e, i, n) {
                  return i = t.animObject(T(i, this.renderer.globalAnimation, !0)), 0 !== i.duration ? (n && (i.complete = n), r(this, e, i)) : (this.attr(e, null, n), i.step && i.step.call(this)), this
               },
               complexColor: function (e, i, n) {
                  var r, o, a, s, c, l, d, u, p, m, g, v, y = this.renderer,
                     x = [];
                  t.fireEvent(this.renderer, "complexColor", {
                     args: arguments
                  }, function () {
                     e.radialGradient ? o = "radialGradient" : e.linearGradient && (o = "linearGradient"), o && (a = e[o], c = y.gradients, d = e.stops, m = n.radialReference, b(a) && (e[o] = a = {
                        x1: a[0],
                        y1: a[1],
                        x2: a[2],
                        y2: a[3],
                        gradientUnits: "userSpaceOnUse"
                     }), "radialGradient" === o && m && !h(a.gradientUnits) && (s = a, a = A(a, y.getRadialAttr(m, s), {
                        gradientUnits: "userSpaceOnUse"
                     })), P(a, function (t, e) {
                        "id" !== e && x.push(e, t)
                     }), P(d, function (t) {
                        x.push(t)
                     }), x = x.join(","), c[x] ? g = c[x].attr("id") : (a.id = g = t.uniqueKey(), c[x] = l = y.createElement(o).attr(a).add(y.defs), l.radAttr = s, l.stops = [], f(d, function (e) {
                        0 === e[1].indexOf("rgba") ? (r = t.color(e[1]), u = r.get("rgb"), p = r.get("a")) : (u = e[1], p = 1), e = y.createElement("stop").attr({
                           offset: e[0],
                           "stop-color": u,
                           "stop-opacity": p
                        }).add(l), l.stops.push(e)
                     })), v = "url(" + y.url + "#" + g + ")", n.setAttribute(i, v), n.gradient = x, e.toString = function () {
                        return v
                     })
                  })
               },
               applyTextOutline: function (e) {
                  var i, n, r, a, s, c = this.element;
                  if (-1 !== e.indexOf("contrast") && (e = e.replace(/contrast/g, this.renderer.getContrast(c.style.fill))), e = e.split(" "), n = e[e.length - 1], (r = e[0]) && "none" !== r && t.svg) {
                     for (this.fakeTS = !0, e = [].slice.call(c.getElementsByTagName("tspan")), this.ySetter = this.xSetter, r = r.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
                           return 2 * e + i
                        }), s = e.length; s--;) i = e[s], "highcharts-text-outline" === i.getAttribute("class") && g(e, c.removeChild(i));
                     a = c.firstChild, f(e, function (t, e) {
                        0 === e && (t.setAttribute("x", c.getAttribute("x")), e = c.getAttribute("y"), t.setAttribute("y", e || 0), null === e && c.setAttribute("y", 0)), t = t.cloneNode(1), o(t, {
                           class: "highcharts-text-outline",
                           fill: n,
                           stroke: n,
                           "stroke-width": r,
                           "stroke-linejoin": "round"
                        }), c.insertBefore(t, a)
                     })
                  }
               },
               attr: function (t, e, i, n) {
                  var r, o, a, s, c = this.element,
                     l = this;
                  return "string" === typeof t && void 0 !== e && (r = t, t = {}, t[r] = e), "string" === typeof t ? l = (this[t + "Getter"] || this._defaultGetter).call(this, t, c) : (P(t, function (e, i) {
                     a = !1, n || D(this, i), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(i) && (o || (this.symbolAttr(t), o = !0), a = !0), !this.rotation || "x" !== i && "y" !== i || (this.doTransform = !0), a || (s = this[i + "Setter"] || this._defaultSetter, s.call(this, e, i, c), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) && this.updateShadows(i, e, s))
                  }, this), this.afterSetters()), i && i.call(this), l
               },
               afterSetters: function () {
                  this.doTransform && (this.updateTransform(), this.doTransform = !1)
               },
               updateShadows: function (t, e, i) {
                  for (var n = this.shadows, r = n.length; r--;) i.call(n[r], "height" === t ? Math.max(e - (n[r].cutHeight || 0), 0) : "d" === t ? this.d : e, t, n[r])
               },
               addClass: function (t, e) {
                  var i = this.attr("class") || "";
                  return -1 === i.indexOf(t) && (e || (t = (i + (i ? " " : "") + t).replace("  ", " ")), this.attr("class", t)), this
               },
               hasClass: function (t) {
                  return -1 !== x(t, (this.attr("class") || "").split(" "))
               },
               removeClass: function (t) {
                  return this.attr("class", (this.attr("class") || "").replace(t, ""))
               },
               symbolAttr: function (t) {
                  var e = this;
                  f("x y r start end width height innerR anchorX anchorY".split(" "), function (i) {
                     e[i] = T(t[i], e[i])
                  }), e.attr({
                     d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
                  })
               },
               clip: function (t) {
                  return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
               },
               crisp: function (t, e) {
                  var i;
                  return e = e || t.strokeWidth || 0, i = Math.round(e) % 2 / 2, t.x = Math.floor(t.x || this.x || 0) + i, t.y = Math.floor(t.y || this.y || 0) + i, t.width = Math.floor((t.width || this.width || 0) - 2 * i), t.height = Math.floor((t.height || this.height || 0) - 2 * i), h(t.strokeWidth) && (t.strokeWidth = e), t
               },
               css: function (t) {
                  var e, i, n = this.styles,
                     r = {},
                     a = this.element,
                     s = "",
                     l = !n,
                     h = ["textOutline", "textOverflow", "width"];
                  return t && t.color && (t.fill = t.color), n && P(t, function (t, e) {
                     t !== n[e] && (r[e] = t, l = !0)
                  }), l && (n && (t = m(n, r)), t && (null === t.width || "auto" === t.width ? delete this.textWidth : "text" === a.nodeName.toLowerCase() && t.width && (e = this.textWidth = O(t.width))), this.styles = t, e && !E && this.renderer.forExport && delete t.width, a.namespaceURI === this.SVG_NS ? (i = function (t, e) {
                     return "-" + e.toLowerCase()
                  }, P(t, function (t, e) {
                     -1 === x(e, h) && (s += e.replace(/([A-Z])/g, i) + ":" + t + ";")
                  }), s && o(a, "style", s)) : c(a, t), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t && t.textOutline && this.applyTextOutline(t.textOutline))), this
               },
               strokeWidth: function () {
                  return this["stroke-width"] || 0
               },
               on: function (t, e) {
                  var i = this,
                     n = i.element;
                  return y && "click" === t ? (n.ontouchstart = function (t) {
                     i.touchEventFired = Date.now(), t.preventDefault(), e.call(n, t)
                  }, n.onclick = function (t) {
                     (-1 === B.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (i.touchEventFired || 0)) && e.call(n, t)
                  }) : n["on" + t] = e, this
               },
               setRadialReference: function (t) {
                  var e = this.renderer.gradients[this.element.gradient];
                  return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
               },
               translate: function (t, e) {
                  return this.attr({
                     translateX: t,
                     translateY: e
                  })
               },
               invert: function (t) {
                  return this.inverted = t, this.updateTransform(), this
               },
               updateTransform: function () {
                  var t = this.translateX || 0,
                     e = this.translateY || 0,
                     i = this.scaleX,
                     n = this.scaleY,
                     r = this.inverted,
                     o = this.rotation,
                     a = this.matrix,
                     s = this.element;
                  r && (t += this.width, e += this.height), t = ["translate(" + t + "," + e + ")"], h(a) && t.push("matrix(" + a.join(",") + ")"), r ? t.push("rotate(90) scale(-1,1)") : o && t.push("rotate(" + o + " " + T(this.rotationOriginX, s.getAttribute("x"), 0) + " " + T(this.rotationOriginY, s.getAttribute("y") || 0) + ")"), (h(i) || h(n)) && t.push("scale(" + T(i, 1) + " " + T(n, 1) + ")"), t.length && s.setAttribute("transform", t.join(" "))
               },
               toFront: function () {
                  var t = this.element;
                  return t.parentNode.appendChild(t), this
               },
               align: function (t, e, i) {
                  var n, r, o, a, s, c, l = {};
                  return r = this.renderer, o = r.alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || S(i)) && (this.alignTo = n = i || "renderer", g(o, this), o.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, n = this.alignTo), i = T(i, r[n], r), n = t.align, r = t.verticalAlign, o = (i.x || 0) + (t.x || 0), a = (i.y || 0) + (t.y || 0), "right" === n ? s = 1 : "center" === n && (s = 2), s && (o += (i.width - (t.width || 0)) / s), l[e ? "translateX" : "x"] = Math.round(o), "bottom" === r ? c = 1 : "middle" === r && (c = 2), c && (a += (i.height - (t.height || 0)) / c), l[e ? "translateY" : "y"] = Math.round(a), this[this.placed ? "animate" : "attr"](l), this.placed = !0, this.alignAttr = l, this
               },
               getBBox: function (t, e) {
                  var i, n, r, o, a, s = this.renderer,
                     c = this.element,
                     l = this.styles,
                     u = this.textStr,
                     p = s.cache,
                     g = s.cacheKeys,
                     v = c.namespaceURI === this.SVG_NS;
                  if (e = T(e, this.rotation), n = e * d, r = l && l.fontSize, h(u) && (a = u.toString(), -1 === a.indexOf("<") && (a = a.replace(/[0-9]/g, "0")), a += ["", e || 0, r, this.textWidth, l && l.textOverflow].join()), a && !t && (i = p[a]), !i) {
                     if (v || s.forExport) {
                        try {
                           (o = this.fakeTS && function (t) {
                              f(c.querySelectorAll(".highcharts-text-outline"), function (e) {
                                 e.style.display = t
                              })
                           }) && o("none"), i = c.getBBox ? m({}, c.getBBox()) : {
                              width: c.offsetWidth,
                              height: c.offsetHeight
                           }, o && o("")
                        } catch (y) {}(!i || 0 > i.width) && (i = {
                           width: 0,
                           height: 0
                        })
                     } else i = this.htmlGetBBox();
                     if (s.isSVG && (t = i.width, s = i.height, v && (i.height = s = {
                           "11px,17": 14,
                           "13px,20": 16
                        } [l && l.fontSize + "," + Math.round(s)] || s), e && (i.width = Math.abs(s * Math.sin(n)) + Math.abs(t * Math.cos(n)), i.height = Math.abs(s * Math.cos(n)) + Math.abs(t * Math.sin(n)))), a && 0 < i.height) {
                        for (; 250 < g.length;) delete p[g.shift()];
                        p[a] || g.push(a), p[a] = i
                     }
                  }
                  return i
               },
               show: function (t) {
                  return this.attr({
                     visibility: t ? "inherit" : "visible"
                  })
               },
               hide: function () {
                  return this.attr({
                     visibility: "hidden"
                  })
               },
               fadeOut: function (t) {
                  var e = this;
                  e.animate({
                     opacity: 0
                  }, {
                     duration: t || 150,
                     complete: function () {
                        e.attr({
                           y: -9999
                        })
                     }
                  })
               },
               add: function (t) {
                  var e, i = this.renderer,
                     n = this.element;
                  return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(n), this.onAdd && this.onAdd(), this
               },
               safeRemoveChild: function (t) {
                  var e = t.parentNode;
                  e && e.removeChild(t)
               },
               destroy: function () {
                  var t = this,
                     e = t.element || {},
                     i = t.renderer.isSVG && "SPAN" === e.nodeName && t.parentGroup,
                     n = e.ownerSVGElement,
                     r = t.clipPath;
                  if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, D(t), r && n && (f(n.querySelectorAll("[clip-path],[CLIP-PATH]"), function (t) {
                        var e = t.getAttribute("clip-path"),
                           i = r.element.id;
                        (-1 < e.indexOf("(#" + i + ")") || -1 < e.indexOf('("#' + i + '")')) && t.removeAttribute("clip-path")
                     }), t.clipPath = r.destroy()), t.stops) {
                     for (n = 0; n < t.stops.length; n++) t.stops[n] = t.stops[n].destroy();
                     t.stops = null
                  }
                  for (t.safeRemoveChild(e), t.destroyShadows(); i && i.div && 0 === i.div.childNodes.length;) e = i.parentGroup, t.safeRemoveChild(i.div), delete i.div, i = e;
                  return t.alignTo && g(t.renderer.alignedObjects, t), P(t, function (e, i) {
                     delete t[i]
                  }), null
               },
               shadow: function (t, e, i) {
                  var n, r, a, s, c, l, h = [],
                     d = this.element;
                  if (t) {
                     if (!this.shadows) {
                        for (s = T(t.width, 3), c = (t.opacity || .15) / s, l = this.parentInverted ? "(-1,-1)" : "(" + T(t.offsetX, 1) + ", " + T(t.offsetY, 1) + ")", n = 1; n <= s; n++) r = d.cloneNode(0), a = 2 * s + 1 - 2 * n, o(r, {
                           stroke: t.color || "#000000",
                           "stroke-opacity": c * n,
                           "stroke-width": a,
                           transform: "translate" + l,
                           fill: "none"
                        }), r.setAttribute("class", (r.getAttribute("class") || "") + " highcharts-shadow"), i && (o(r, "height", Math.max(o(r, "height") - a, 0)), r.cutHeight = a), e ? e.element.appendChild(r) : d.parentNode && d.parentNode.insertBefore(r, d), h.push(r);
                        this.shadows = h
                     }
                  } else this.destroyShadows();
                  return this
               },
               destroyShadows: function () {
                  f(this.shadows || [], function (t) {
                     this.safeRemoveChild(t)
                  }, this), this.shadows = void 0
               },
               xGetter: function (t) {
                  return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
               },
               _defaultGetter: function (t) {
                  return t = T(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
               },
               dSetter: function (t, e, i) {
                  t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
               },
               dashstyleSetter: function (t) {
                  var e, i = this["stroke-width"];
                  if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                     for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), e = t.length; e--;) t[e] = O(t[e]) * i;
                     t = t.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                  }
               },
               alignSetter: function (t) {
                  this.alignValue = t, this.element.setAttribute("text-anchor", {
                     left: "start",
                     center: "middle",
                     right: "end"
                  } [t])
               },
               opacitySetter: function (t, e, i) {
                  this[e] = t, i.setAttribute(e, t)
               },
               titleSetter: function (t) {
                  var e = this.element.getElementsByTagName("title")[0];
                  e || (e = p.createElementNS(this.SVG_NS, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(p.createTextNode(String(T(t), "").replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")))
               },
               textSetter: function (t) {
                  t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
               },
               fillSetter: function (t, e, i) {
                  "string" === typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
               },
               visibilitySetter: function (t, e, i) {
                  "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
               },
               zIndexSetter: function (t, e) {
                  var i, n, r, o, a = this.renderer,
                     s = this.parentGroup,
                     c = (s || a).element || a.box,
                     l = this.element;
                  a = c === a.box;
                  if (i = this.added, h(t) ? (l.setAttribute("data-z-index", t), t = +t, this[e] === t && (i = !1)) : h(this[e]) && l.removeAttribute("data-z-index"), this[e] = t, i) {
                     for ((t = this.zIndex) && s && (s.handleZ = !0), e = c.childNodes, o = e.length - 1; 0 <= o && !n; o--) s = e[o], i = s.getAttribute("data-z-index"), r = !h(i), s !== l && (0 > t && r && !a && !o ? (c.insertBefore(l, e[o]), n = !0) : (O(i) <= t || r && (!h(t) || 0 <= t)) && (c.insertBefore(l, e[o + 1] || null), n = !0));
                     n || (c.insertBefore(l, e[a ? 3 : 0] || null), n = !0)
                  }
                  return n
               },
               _defaultSetter: function (t, e, i) {
                  i.setAttribute(e, t)
               }
            }), e.prototype.yGetter = e.prototype.xGetter, e.prototype.translateXSetter = e.prototype.translateYSetter = e.prototype.rotationSetter = e.prototype.verticalAlignSetter = e.prototype.rotationOriginXSetter = e.prototype.rotationOriginYSetter = e.prototype.scaleXSetter = e.prototype.scaleYSetter = e.prototype.matrixSetter = function (t, e) {
               this[e] = t, this.doTransform = !0
            }, e.prototype["stroke-widthSetter"] = e.prototype.strokeSetter = function (t, i, n) {
               this[i] = t, this.stroke && this["stroke-width"] ? (e.prototype.fillSetter.call(this, this.stroke, "stroke", n), n.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === i && 0 === t && this.hasStroke && (n.removeAttribute("stroke"), this.hasStroke = !1)
            }, i = t.SVGRenderer = function () {
               this.init.apply(this, arguments)
            }, m(i.prototype, {
               Element: e,
               SVG_NS: I,
               init: function (t, e, i, r, a, s) {
                  var l, h;
                  r = this.createElement("svg").attr({
                     version: "1.1",
                     class: "highcharts-root"
                  }).css(this.getStyle(r)), l = r.element, t.appendChild(l), o(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && o(l, "xmlns", this.SVG_NS), this.isSVG = !0, this.box = l, this.boxWrapper = r, this.alignedObjects = [], this.url = (_ || M) && p.getElementsByTagName("base").length ? B.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highstock 6.2.0")), this.defs = this.createElement("defs").add(), this.allowHTML = s, this.forExport = a, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), _ && t.getBoundingClientRect && (e = function () {
                     c(t, {
                        left: 0,
                        top: 0
                     }), h = t.getBoundingClientRect(), c(t, {
                        left: Math.ceil(h.left) - h.left + "px",
                        top: Math.ceil(h.top) - h.top + "px"
                     })
                  }, e(), this.unSubPixelFix = n(B, "resize", e))
               },
               getStyle: function (t) {
                  return this.style = m({
                     fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                     fontSize: "12px"
                  }, t)
               },
               setStyle: function (t) {
                  this.boxWrapper.css(this.getStyle(t))
               },
               isHidden: function () {
                  return !this.boxWrapper.getBBox().width
               },
               destroy: function () {
                  var t = this.defs;
                  return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), u(this.gradients || {}), this.gradients = null, t && (this.defs = t.destroy()), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null
               },
               createElement: function (t) {
                  var e = new this.Element;
                  return e.init(this, t), e
               },
               draw: C,
               getRadialAttr: function (t, e) {
                  return {
                     cx: t[0] - t[2] / 2 + e.cx * t[2],
                     cy: t[1] - t[2] / 2 + e.cy * t[2],
                     r: e.r * t[2]
                  }
               },
               truncate: function (t, e, i, n, r, o, a) {
                  var s, c, l, h = this,
                     d = t.rotation,
                     u = n ? 1 : 0,
                     f = (i || n).length,
                     m = f,
                     g = [],
                     v = function (t) {
                        e.firstChild && e.removeChild(e.firstChild), t && e.appendChild(p.createTextNode(t))
                     },
                     y = function (o, s) {
                        if (s = s || o, void 0 === g[s])
                           if (e.getSubStringLength) try {
                              g[s] = r + e.getSubStringLength(0, n ? s + 1 : s)
                           } catch (c) {} else h.getSpanWidth && (v(a(i || n, o)), g[s] = r + h.getSpanWidth(t, e));
                        return g[s]
                     };
                  if (t.rotation = 0, c = y(e.textContent.length), l = r + c > o) {
                     for (; u <= f;) m = Math.ceil((u + f) / 2), n && (s = a(n, m)), c = y(m, s && s.length - 1), u === f ? u = f + 1 : c > o ? f = m - 1 : u = m;
                     0 === f ? v("") : i && f === i.length - 1 || v(s || a(i || n, m))
                  }
                  return n && n.splice(0, m), t.actualWidth = c, t.rotation = d, l
               },
               escapes: {
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  "'": "&#39;",
                  '"': "&quot;"
               },
               buildText: function (t) {
                  var e, i, n, r = t.element,
                     a = this,
                     s = a.forExport,
                     l = T(t.textStr, "").toString(),
                     h = -1 !== l.indexOf("<"),
                     d = r.childNodes,
                     u = o(r, "x"),
                     m = t.styles,
                     g = t.textWidth,
                     y = m && m.lineHeight,
                     b = m && m.textOutline,
                     _ = m && "ellipsis" === m.textOverflow,
                     w = m && "nowrap" === m.whiteSpace,
                     k = m && m.fontSize,
                     S = d.length,
                     M = (m = g && !t.added && this.box, function (t) {
                        var e;
                        return e = /(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : k || a.style.fontSize || 12, y ? O(y) : a.fontMetrics(e, t.getAttribute("style") ? t : r).h
                     }),
                     A = function (t, e) {
                        return P(a.escapes, function (i, n) {
                           e && -1 !== x(i, e) || (t = t.toString().replace(new RegExp(i, "g"), n))
                        }), t
                     },
                     C = function (t, e) {
                        var i;
                        if (i = t.indexOf("<"), t = t.substring(i, t.indexOf(">") - i), i = t.indexOf(e + "="), -1 !== i && (i = i + e.length + 1, e = t.charAt(i), '"' === e || "'" === e)) return t = t.substring(i + 1), t.substring(0, t.indexOf(e))
                     };
                  if (i = [l, _, w, y, b, k, g].join(), i !== t.textCache) {
                     for (t.textCache = i; S--;) r.removeChild(d[S]);
                     h || b || _ || g || -1 !== l.indexOf(" ") ? (m && m.appendChild(r), l = h ? l.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [l], l = v(l, function (t) {
                        return "" !== t
                     }), f(l, function (i, l) {
                        var h, d = 0,
                           m = 0;
                        i = i.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), h = i.split("|||"), f(h, function (i) {
                           if ("" !== i || 1 === h.length) {
                              var f, v, y = {},
                                 x = p.createElementNS(a.SVG_NS, "tspan");
                              if ((f = C(i, "class")) && o(x, "class", f), (f = C(i, "style")) && (f = f.replace(/(;| |^)color([ :])/, "$1fill$2"), o(x, "style", f)), (v = C(i, "href")) && !s && (o(x, "onclick", 'location.href="' + v + '"'), o(x, "class", "highcharts-anchor"), c(x, {
                                    cursor: "pointer"
                                 })), i = A(i.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " "), " " !== i) {
                                 if (x.appendChild(p.createTextNode(i)), d ? y.dx = 0 : l && null !== u && (y.x = u), o(x, y), r.appendChild(x), !d && n && (!E && s && c(x, {
                                       display: "block"
                                    }), o(x, "dy", M(x))), g) {
                                    var b = i.replace(/([^\^])-/g, "$1- ").split(" ");
                                    y = !w && (1 < h.length || l || 1 < b.length);
                                    v = 0;
                                    var S = M(x);
                                    if (_) e = a.truncate(t, x, i, void 0, 0, Math.max(0, g - parseInt(k || 12, 10)), function (t, e) {
                                       return t.substring(0, e) + "â€¦"
                                    });
                                    else if (y)
                                       for (; b.length;) b.length && !w && 0 < v && (x = p.createElementNS(I, "tspan"), o(x, {
                                          dy: S,
                                          x: u
                                       }), f && o(x, "style", f), x.appendChild(p.createTextNode(b.join(" ").replace(/- /g, "-"))), r.appendChild(x)), a.truncate(t, x, null, b, 0 === v ? m : 0, g, function (t, e) {
                                          return b.slice(0, e).join(" ").replace(/- /g, "-")
                                       }), m = t.actualWidth, v++
                                 }
                                 d++
                              }
                           }
                        }), n = n || r.childNodes.length
                     }), _ && e && t.attr("title", A(t.textStr, ["&lt;", "&gt;"])), m && m.removeChild(r), b && t.applyTextOutline && t.applyTextOutline(b)) : r.appendChild(p.createTextNode(A(l)))
                  }
               },
               getContrast: function (t) {
                  return t = s(t).rgba, t[0] *= 1, t[1] *= 1.2, t[2] *= .5, 459 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
               },
               button: function (t, e, i, r, o, a, s, c, l) {
                  var h, d, u, p, f = this.label(t, e, i, l, null, null, null, null, "button"),
                     g = 0;
                  return f.attr(A({
                     padding: 8,
                     r: 2
                  }, o)), o = A({
                     fill: "#f7f7f7",
                     stroke: "#cccccc",
                     "stroke-width": 1,
                     style: {
                        color: "#333333",
                        cursor: "pointer",
                        fontWeight: "normal"
                     }
                  }, o), h = o.style, delete o.style, a = A(o, {
                     fill: "#e6e6e6"
                  }, a), d = a.style, delete a.style, s = A(o, {
                     fill: "#e6ebf5",
                     style: {
                        color: "#000000",
                        fontWeight: "bold"
                     }
                  }, s), u = s.style, delete s.style, c = A(o, {
                     style: {
                        color: "#cccccc"
                     }
                  }, c), p = c.style, delete c.style, n(f.element, w ? "mouseover" : "mouseenter", function () {
                     3 !== g && f.setState(1)
                  }), n(f.element, w ? "mouseout" : "mouseleave", function () {
                     3 !== g && f.setState(g)
                  }), f.setState = function (t) {
                     1 !== t && (f.state = g = t), f.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]), f.attr([o, a, s, c][t || 0]).css([h, d, u, p][t || 0])
                  }, f.attr(o).css(m({
                     cursor: "default"
                  }, h)), f.on("click", function (t) {
                     3 !== g && r.call(f, t)
                  })
               },
               crispLine: function (t, e) {
                  return t[1] === t[4] && (t[1] = t[4] = Math.round(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = Math.round(t[2]) + e % 2 / 2), t
               },
               path: function (t) {
                  var e = {
                     fill: "none"
                  };
                  return b(t) ? e.d = t : k(t) && m(e, t), this.createElement("path").attr(e)
               },
               circle: function (t, e, i) {
                  return t = k(t) ? t : {
                     x: t,
                     y: e,
                     r: i
                  }, e = this.createElement("circle"), e.xSetter = e.ySetter = function (t, e, i) {
                     i.setAttribute("c" + e, t)
                  }, e.attr(t)
               },
               arc: function (t, e, i, n, r, o) {
                  return k(t) ? (n = t, e = n.y, i = n.r, t = n.x) : n = {
                     innerR: n,
                     start: r,
                     end: o
                  }, t = this.symbol("arc", t, e, i, i, n), t.r = i, t
               },
               rect: function (t, e, i, n, r, a) {
                  r = k(t) ? t.r : r;
                  var s = this.createElement("rect");
                  return t = k(t) ? t : void 0 === t ? {} : {
                     x: t,
                     y: e,
                     width: Math.max(i, 0),
                     height: Math.max(n, 0)
                  }, void 0 !== a && (t.strokeWidth = a, t = s.crisp(t)), t.fill = "none", r && (t.r = r), s.rSetter = function (t, e, i) {
                     o(i, {
                        rx: t,
                        ry: t
                     })
                  }, s.attr(t)
               },
               setSize: function (t, e, i) {
                  var n = this.alignedObjects,
                     r = n.length;
                  for (this.width = t, this.height = e, this.boxWrapper.animate({
                        width: t,
                        height: e
                     }, {
                        step: function () {
                           this.attr({
                              viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                           })
                        },
                        duration: T(i, !0) ? void 0 : 0
                     }); r--;) n[r].align()
               },
               g: function (t) {
                  var e = this.createElement("g");
                  return t ? e.attr({
                     class: "highcharts-" + t
                  }) : e
               },
               image: function (t, e, i, r, o, a) {
                  var s, c = {
                        preserveAspectRatio: "none"
                     },
                     l = function (t, e) {
                        t.setAttributeNS ? t.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : t.setAttribute("hc-svg-href", e)
                     },
                     h = function (e) {
                        l(s.element, t), a.call(s, e)
                     };
                  return 1 < arguments.length && m(c, {
                     x: e,
                     y: i,
                     width: r,
                     height: o
                  }), s = this.createElement("image").attr(c), a ? (l(s.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), c = new B.Image, n(c, "load", h), c.src = t, c.complete && h({})) : l(s.element, t), s
               },
               symbol: function (t, e, i, n, r, o) {
                  var s, d, u, g = this,
                     v = /^url\((.*?)\)$/,
                     y = v.test(t),
                     x = !y && (this.symbols[t] ? t : "circle"),
                     b = x && this.symbols[x],
                     _ = h(e) && b && b.call(this.symbols, Math.round(e), Math.round(i), n, r, o);
                  return b ? (s = this.path(_), s.attr("fill", "none"), m(s, {
                     symbolName: x,
                     x: e,
                     y: i,
                     width: n,
                     height: r
                  }), o && m(s, o)) : y && (d = t.match(v)[1], s = this.image(d), s.imgwidth = T(z[d] && z[d].width, o && o.width), s.imgheight = T(z[d] && z[d].height, o && o.height), u = function () {
                     s.attr({
                        width: s.width,
                        height: s.height
                     })
                  }, f(["width", "height"], function (t) {
                     s[t + "Setter"] = function (t, e) {
                        var i = {},
                           n = this["img" + e],
                           r = "width" === e ? "translateX" : "translateY";
                        this[e] = t, h(n) && (this.element && this.element.setAttribute(e, n), this.alignByTranslate || (i[r] = ((this[e] || 0) - n) / 2, this.attr(i)))
                     }
                  }), h(e) && s.attr({
                     x: e,
                     y: i
                  }), s.isImg = !0, h(s.imgwidth) && h(s.imgheight) ? u() : (s.attr({
                     width: 0,
                     height: 0
                  }), l("img", {
                     onload: function () {
                        var t = a[g.chartIndex];
                        0 === this.width && (c(this, {
                           position: "absolute",
                           top: "-999em"
                        }), p.body.appendChild(this)), z[d] = {
                           width: this.width,
                           height: this.height
                        }, s.imgwidth = this.width, s.imgheight = this.height, s.element && u(), this.parentNode && this.parentNode.removeChild(this), g.imgCount--, !g.imgCount && t && t.onload && t.onload()
                     },
                     src: d
                  }), this.imgCount++)), s
               },
               symbols: {
                  circle: function (t, e, i, n) {
                     return this.arc(t + i / 2, e + n / 2, i / 2, n / 2, {
                        start: 0,
                        end: 2 * Math.PI,
                        open: !1
                     })
                  },
                  square: function (t, e, i, n) {
                     return ["M", t, e, "L", t + i, e, t + i, e + n, t, e + n, "Z"]
                  },
                  triangle: function (t, e, i, n) {
                     return ["M", t + i / 2, e, "L", t + i, e + n, t, e + n, "Z"]
                  },
                  "triangle-down": function (t, e, i, n) {
                     return ["M", t, e, "L", t + i, e, t + i / 2, e + n, "Z"]
                  },
                  diamond: function (t, e, i, n) {
                     return ["M", t + i / 2, e, "L", t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, "Z"]
                  },
                  arc: function (t, e, i, n, r) {
                     var o = r.start,
                        a = r.r || i,
                        s = r.r || n || i,
                        c = r.end - .001;
                     i = r.innerR, n = T(r.open, .001 > Math.abs(r.end - r.start - 2 * Math.PI));
                     var l = Math.cos(o),
                        d = Math.sin(o),
                        u = Math.cos(c);
                     c = Math.sin(c);
                     return r = .001 > r.end - o - Math.PI ? 0 : 1, a = ["M", t + a * l, e + s * d, "A", a, s, 0, r, 1, t + a * u, e + s * c], h(i) && a.push(n ? "M" : "L", t + i * u, e + i * c, "A", i, i, 0, r, 0, t + i * l, e + i * d), a.push(n ? "" : "Z"), a
                  },
                  callout: function (t, e, i, n, r) {
                     var o, a = Math.min(r && r.r || 0, i, n),
                        s = a + 6,
                        c = r && r.anchorX;
                     return r = r && r.anchorY, o = ["M", t + a, e, "L", t + i - a, e, "C", t + i, e, t + i, e, t + i, e + a, "L", t + i, e + n - a, "C", t + i, e + n, t + i, e + n, t + i - a, e + n, "L", t + a, e + n, "C", t, e + n, t, e + n, t, e + n - a, "L", t, e + a, "C", t, e, t, e, t + a, e], c && c > i ? r > e + s && r < e + n - s ? o.splice(13, 3, "L", t + i, r - 6, t + i + 6, r, t + i, r + 6, t + i, e + n - a) : o.splice(13, 3, "L", t + i, n / 2, c, r, t + i, n / 2, t + i, e + n - a) : c && 0 > c ? r > e + s && r < e + n - s ? o.splice(33, 3, "L", t, r + 6, t - 6, r, t, r - 6, t, e + a) : o.splice(33, 3, "L", t, n / 2, c, r, t, n / 2, t, e + a) : r && r > n && c > t + s && c < t + i - s ? o.splice(23, 3, "L", c + 6, e + n, c, e + n + 6, c - 6, e + n, t + a, e + n) : r && 0 > r && c > t + s && c < t + i - s && o.splice(3, 3, "L", c - 6, e, c, e - 6, c + 6, e, i - a, e), o
                  }
               },
               clipRect: function (e, i, n, r) {
                  var o = t.uniqueKey(),
                     a = this.createElement("clipPath").attr({
                        id: o
                     }).add(this.defs);
                  return e = this.rect(e, i, n, r, 0).add(a), e.id = o, e.clipPath = a, e.count = 0, e
               },
               text: function (t, e, i, n) {
                  var r = {};
                  return !n || !this.allowHTML && this.forExport ? (r.x = Math.round(e || 0), i && (r.y = Math.round(i)), h(t) && (r.text = t), t = this.createElement("text").attr(r), n || (t.xSetter = function (t, e, i) {
                     var n, r, o = i.getElementsByTagName("tspan"),
                        a = i.getAttribute(e);
                     for (r = 0; r < o.length; r++) n = o[r], n.getAttribute(e) === a && n.setAttribute(e, t);
                     i.setAttribute(e, t)
                  }), t) : this.html(t, e, i)
               },
               fontMetrics: function (t, e) {
                  return t = t || e && e.style && e.style.fontSize || this.style && this.style.fontSize, t = /px/.test(t) ? O(t) : /em/.test(t) ? parseFloat(t) * (e ? this.fontMetrics(null, e.parentNode).f : 16) : 12, e = 24 > t ? t + 3 : Math.round(1.2 * t), {
                     h: e,
                     b: Math.round(.8 * e),
                     f: t
                  }
               },
               rotCorr: function (t, e, i) {
                  var n = t;
                  return e && i && (n = Math.max(n * Math.cos(e * d), 4)), {
                     x: -t / 3 * Math.sin(e * d),
                     y: n
                  }
               },
               label: function (i, n, r, o, a, s, c, l, d) {
                  var u, p, g, v, y, x, b, _, w, k, S, M, C, P = this,
                     T = P.g("button" !== d && "label"),
                     O = T.text = P.text("", 0, 0, c).attr({
                        zIndex: 1
                     }),
                     D = 0,
                     E = 3,
                     I = 0,
                     z = {},
                     B = /^url\((.*?)\)$/.test(o),
                     N = B;
                  d && T.addClass("highcharts-" + d), N = B, k = function () {
                     return (_ || 0) % 2 / 2
                  }, S = function () {
                     var t = O.element.style,
                        e = {};
                     p = (void 0 === g || void 0 === v || b) && h(O.textStr) && O.getBBox(), T.width = (g || p.width || 0) + 2 * E + I, T.height = (v || p.height || 0) + 2 * E, w = E + P.fontMetrics(t && t.fontSize, O).b, N && (u || (T.box = u = P.symbols[o] || B ? P.symbol(o) : P.rect(), u.addClass(("button" === d ? "" : "highcharts-label-box") + (d ? " highcharts-" + d + "-box" : "")), u.add(T), t = k(), e.x = t, e.y = (l ? -w : 0) + t), e.width = Math.round(T.width), e.height = Math.round(T.height), u.attr(m(e, z)), z = {})
                  }, M = function () {
                     var t, e = I + E;
                     t = l ? 0 : w, h(g) && p && ("center" === b || "right" === b) && (e += {
                        center: .5,
                        right: 1
                     } [b] * (g - p.width)), e === O.x && t === O.y || (O.attr("x", e), O.hasBoxWidthChanged && (p = O.getBBox(!0), S()), void 0 !== t && O.attr("y", t)), O.x = e, O.y = t
                  }, C = function (t, e) {
                     u ? u.attr(t, e) : z[t] = e
                  }, T.onAdd = function () {
                     O.add(T), T.attr({
                        text: i || 0 === i ? i : "",
                        x: n,
                        y: r
                     }), u && h(a) && T.attr({
                        anchorX: a,
                        anchorY: s
                     })
                  }, T.widthSetter = function (e) {
                     g = t.isNumber(e) ? e : null
                  }, T.heightSetter = function (t) {
                     v = t
                  }, T["text-alignSetter"] = function (t) {
                     b = t
                  }, T.paddingSetter = function (t) {
                     h(t) && t !== E && (E = T.padding = t, M())
                  }, T.paddingLeftSetter = function (t) {
                     h(t) && t !== I && (I = t, M())
                  }, T.alignSetter = function (t) {
                     t = {
                        left: 0,
                        center: .5,
                        right: 1
                     } [t], t !== D && (D = t, p && T.attr({
                        x: y
                     }))
                  }, T.textSetter = function (t) {
                     void 0 !== t && O.textSetter(t), S(), M()
                  }, T["stroke-widthSetter"] = function (t, e) {
                     t && (N = !0), _ = this["stroke-width"] = t, C(e, t)
                  }, T.strokeSetter = T.fillSetter = T.rSetter = function (t, e) {
                     "r" !== e && ("fill" === e && t && (N = !0), T[e] = t), C(e, t)
                  }, T.anchorXSetter = function (t, e) {
                     a = T.anchorX = t, C(e, Math.round(t) - k() - y)
                  }, T.anchorYSetter = function (t, e) {
                     s = T.anchorY = t, C(e, t - x)
                  }, T.xSetter = function (t) {
                     T.x = t, D && (t -= D * ((g || p.width) + 2 * E), T["forceAnimate:x"] = !0), y = Math.round(t), T.attr("translateX", y)
                  }, T.ySetter = function (t) {
                     x = T.y = Math.round(t), T.attr("translateY", x)
                  };
                  var R = T.css;
                  return m(T, {
                     css: function (t) {
                        if (t) {
                           var e = {};
                           t = A(t), f(T.textProps, function (i) {
                              void 0 !== t[i] && (e[i] = t[i], delete t[i])
                           }), O.css(e), "width" in e && S()
                        }
                        return R.call(T, t)
                     },
                     getBBox: function () {
                        return {
                           width: p.width + 2 * E,
                           height: p.height + 2 * E,
                           x: p.x - E,
                           y: p.y - E
                        }
                     },
                     shadow: function (t) {
                        return t && (S(), u && u.shadow(t)), T
                     },
                     destroy: function () {
                        L(T.element, "mouseenter"), L(T.element, "mouseleave"), O && (O = O.destroy()), u && (u = u.destroy()), e.prototype.destroy.call(T), T = P = S = M = C = null
                     }
                  })
               }
            }), t.Renderer = i
         }(e),
         function (t) {
            var e = t.attr,
               i = t.createElement,
               n = t.css,
               r = t.defined,
               o = t.each,
               a = t.extend,
               s = t.isFirefox,
               c = t.isMS,
               l = t.isWebKit,
               h = t.pick,
               d = t.pInt,
               u = t.SVGRenderer,
               p = t.win,
               f = t.wrap;
            a(t.SVGElement.prototype, {
               htmlCss: function (t) {
                  var e = "SPAN" === this.element.tagName && t && "width" in t,
                     i = h(e && t.width, void 0);
                  return e && (delete t.width, this.textWidth = i, this.htmlUpdateTransform()), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = a(this.styles, t), n(this.element, t), this
               },
               htmlGetBBox: function () {
                  var t = this.element;
                  return {
                     x: t.offsetLeft,
                     y: t.offsetTop,
                     width: t.offsetWidth,
                     height: t.offsetHeight
                  }
               },
               htmlUpdateTransform: function () {
                  if (this.added) {
                     var t = this.renderer,
                        e = this.element,
                        i = this.translateX || 0,
                        a = this.translateY || 0,
                        s = this.x || 0,
                        c = this.y || 0,
                        l = this.textAlign || "left",
                        h = {
                           left: 0,
                           center: .5,
                           right: 1
                        } [l],
                        u = this.styles,
                        p = u && u.whiteSpace;
                     if (n(e, {
                           marginLeft: i,
                           marginTop: a
                        }), this.shadows && o(this.shadows, function (t) {
                           n(t, {
                              marginLeft: i + 1,
                              marginTop: a + 1
                           })
                        }), this.inverted && o(e.childNodes, function (i) {
                           t.invertChild(i, e)
                        }), "SPAN" === e.tagName) {
                        u = this.rotation;
                        var f, m = this.textWidth && d(this.textWidth),
                           g = [u, l, e.innerHTML, this.textWidth, this.textAlign].join();
                        (f = m !== this.oldTextWidth) && !(f = m > this.oldTextWidth) && ((f = this.textPxLength) || (n(e, {
                           width: "",
                           whiteSpace: p || "nowrap"
                        }), f = e.offsetWidth), f = f > m), f && /[ \-]/.test(e.textContent || e.innerText) ? (n(e, {
                           width: m + "px",
                           display: "block",
                           whiteSpace: p || "normal"
                        }), this.oldTextWidth = m, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1, g !== this.cTT && (p = t.fontMetrics(e.style.fontSize).b, !r(u) || u === (this.oldRotation || 0) && l === this.oldAlign || this.setSpanRotation(u, h, p), this.getSpanCorrection(!r(u) && this.textPxLength || e.offsetWidth, p, h, u, l)), n(e, {
                           left: s + (this.xCorr || 0) + "px",
                           top: c + (this.yCorr || 0) + "px"
                        }), this.cTT = g, this.oldRotation = u, this.oldAlign = l
                     }
                  } else this.alignOnAdd = !0
               },
               setSpanRotation: function (t, e, i) {
                  var r = {},
                     o = this.renderer.getTransformKey();
                  r[o] = r.transform = "rotate(" + t + "deg)", r[o + (s ? "Origin" : "-origin")] = r.transformOrigin = 100 * e + "% " + i + "px", n(this.element, r)
               },
               getSpanCorrection: function (t, e, i) {
                  this.xCorr = -t * i, this.yCorr = -e
               }
            }), a(u.prototype, {
               getTransformKey: function () {
                  return c && !/Edge/.test(p.navigator.userAgent) ? "-ms-transform" : l ? "-webkit-transform" : s ? "MozTransform" : p.opera ? "-o-transform" : ""
               },
               html: function (t, n, r) {
                  var s = this.createElement("span"),
                     c = s.element,
                     l = s.renderer,
                     d = l.isSVG,
                     u = function (t, e) {
                        o(["opacity", "visibility"], function (i) {
                           f(t, i + "Setter", function (t, i, n, r) {
                              t.call(this, i, n, r), e[n] = i
                           })
                        }), t.addedSetters = !0
                     };
                  return s.textSetter = function (t) {
                     t !== c.innerHTML && delete this.bBox, this.textStr = t, c.innerHTML = h(t, ""), s.doTransform = !0
                  }, d && u(s, s.element.style), s.xSetter = s.ySetter = s.alignSetter = s.rotationSetter = function (t, e) {
                     "align" === e && (e = "textAlign"), s[e] = t, s.doTransform = !0
                  }, s.afterSetters = function () {
                     this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1)
                  }, s.attr({
                     text: t,
                     x: Math.round(n),
                     y: Math.round(r)
                  }).css({
                     fontFamily: this.style.fontFamily,
                     fontSize: this.style.fontSize,
                     position: "absolute"
                  }), c.style.whiteSpace = "nowrap", s.css = s.htmlCss, d && (s.add = function (t) {
                     var n, r = l.box.parentNode,
                        h = [];
                     if (this.parentGroup = t) {
                        if (n = t.div, !n) {
                           for (; t;) h.push(t), t = t.parentGroup;
                           o(h.reverse(), function (t) {
                              function o(e, i) {
                                 t[i] = e, "translateX" === i ? c.left = e + "px" : c.top = e + "px", t.doTransform = !0
                              }
                              var c, l = e(t.element, "class");
                              l && (l = {
                                 className: l
                              }), n = t.div = t.div || i("div", l, {
                                 position: "absolute",
                                 left: (t.translateX || 0) + "px",
                                 top: (t.translateY || 0) + "px",
                                 display: t.display,
                                 opacity: t.opacity,
                                 pointerEvents: t.styles && t.styles.pointerEvents
                              }, n || r), c = n.style, a(t, {
                                 classSetter: function (t) {
                                    return function (e) {
                                       this.element.setAttribute("class", e), t.className = e
                                    }
                                 }(n),
                                 on: function () {
                                    return h[0].div && s.on.apply({
                                       element: h[0].div
                                    }, arguments), t
                                 },
                                 translateXSetter: o,
                                 translateYSetter: o
                              }), t.addedSetters || u(t, c)
                           })
                        }
                     } else n = r;
                     return n.appendChild(c), s.added = !0, s.alignOnAdd && s.htmlUpdateTransform(), s
                  }), s
               }
            })
         }(e),
         function (t) {
            var e = t.defined,
               i = t.each,
               n = t.extend,
               r = t.merge,
               o = t.pick,
               a = t.timeUnits,
               s = t.win;
            t.Time = function (t) {
               this.update(t, !1)
            }, t.Time.prototype = {
               defaultOptions: {},
               update: function (t) {
                  var e = o(t && t.useUTC, !0),
                     i = this;
                  this.options = t = r(!0, this.options || {}, t), this.Date = t.Date || s.Date, this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset, this.getTimezoneOffset = this.timezoneOffsetFunction(), (this.variableTimezone = !(e && !t.getTimezoneOffset && !t.timezone)) || this.timezoneOffset ? (this.get = function (t, e) {
                     var n = e.getTime(),
                        r = n - i.getTimezoneOffset(e);
                     return e.setTime(r), t = e["getUTC" + t](), e.setTime(n), t
                  }, this.set = function (t, e, n) {
                     var r;
                     "Milliseconds" === t || "Seconds" === t || "Minutes" === t && 0 === e.getTimezoneOffset() % 60 ? e["set" + t](n) : (r = i.getTimezoneOffset(e), r = e.getTime() - r, e.setTime(r), e["setUTC" + t](n), t = i.getTimezoneOffset(e), r = e.getTime() + t, e.setTime(r))
                  }) : e ? (this.get = function (t, e) {
                     return e["getUTC" + t]()
                  }, this.set = function (t, e, i) {
                     return e["setUTC" + t](i)
                  }) : (this.get = function (t, e) {
                     return e["get" + t]()
                  }, this.set = function (t, e, i) {
                     return e["set" + t](i)
                  })
               },
               makeTime: function (e, i, n, r, a, s) {
                  var c, l, h;
                  return this.useUTC ? (c = this.Date.UTC.apply(0, arguments), l = this.getTimezoneOffset(c), c += l, h = this.getTimezoneOffset(c), l !== h ? c += h - l : l - 36e5 !== this.getTimezoneOffset(c - 36e5) || t.isSafari || (c -= 36e5)) : c = new this.Date(e, i, o(n, 1), o(r, 0), o(a, 0), o(s, 0)).getTime(), c
               },
               timezoneOffsetFunction: function () {
                  var e = this,
                     i = this.options,
                     n = s.moment;
                  if (!this.useUTC) return function (t) {
                     return 6e4 * new Date(t).getTimezoneOffset()
                  };
                  if (i.timezone) {
                     if (n) return function (t) {
                        return 6e4 * -n.tz(t, i.timezone).utcOffset()
                     };
                     t.error(25)
                  }
                  return this.useUTC && i.getTimezoneOffset ? function (t) {
                     return 6e4 * i.getTimezoneOffset(t)
                  } : function () {
                     return 6e4 * (e.timezoneOffset || 0)
                  }
               },
               dateFormat: function (e, i, n) {
                  if (!t.defined(i) || isNaN(i)) return t.defaultOptions.lang.invalidDate || "";
                  e = t.pick(e, "%Y-%m-%d %H:%M:%S");
                  var r = this,
                     o = new this.Date(i),
                     a = this.get("Hours", o),
                     s = this.get("Day", o),
                     c = this.get("Date", o),
                     l = this.get("Month", o),
                     h = this.get("FullYear", o),
                     d = t.defaultOptions.lang,
                     u = d.weekdays,
                     p = d.shortWeekdays,
                     f = t.pad;
                  o = t.extend({
                     a: p ? p[s] : u[s].substr(0, 3),
                     A: u[s],
                     d: f(c),
                     e: f(c, 2, " "),
                     w: s,
                     b: d.shortMonths[l],
                     B: d.months[l],
                     m: f(l + 1),
                     o: l + 1,
                     y: h.toString().substr(2, 2),
                     Y: h,
                     H: f(a),
                     k: a,
                     I: f(a % 12 || 12),
                     l: a % 12 || 12,
                     M: f(r.get("Minutes", o)),
                     p: 12 > a ? "AM" : "PM",
                     P: 12 > a ? "am" : "pm",
                     S: f(o.getSeconds()),
                     L: f(Math.floor(i % 1e3), 3)
                  }, t.dateFormats);
                  return t.objectEach(o, function (t, n) {
                     for (; - 1 !== e.indexOf("%" + n);) e = e.replace("%" + n, "function" === typeof t ? t.call(r, i) : t)
                  }), n ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
               },
               resolveDTLFormat: function (e) {
                  return t.isObject(e, !0) ? e : (e = t.splat(e), {
                     main: e[0],
                     from: e[1],
                     to: e[2]
                  })
               },
               getTimeTicks: function (t, r, s, c) {
                  var l, h, d = this,
                     u = [],
                     p = {};
                  l = new d.Date(r);
                  var f, m = t.unitRange,
                     g = t.count || 1;
                  if (c = o(c, 1), e(r)) {
                     d.set("Milliseconds", l, m >= a.second ? 0 : g * Math.floor(d.get("Milliseconds", l) / g)), m >= a.second && d.set("Seconds", l, m >= a.minute ? 0 : g * Math.floor(d.get("Seconds", l) / g)), m >= a.minute && d.set("Minutes", l, m >= a.hour ? 0 : g * Math.floor(d.get("Minutes", l) / g)), m >= a.hour && d.set("Hours", l, m >= a.day ? 0 : g * Math.floor(d.get("Hours", l) / g)), m >= a.day && d.set("Date", l, m >= a.month ? 1 : g * Math.floor(d.get("Date", l) / g)), m >= a.month && (d.set("Month", l, m >= a.year ? 0 : g * Math.floor(d.get("Month", l) / g)), h = d.get("FullYear", l)), m >= a.year && d.set("FullYear", l, h - h % g), m === a.week && (h = d.get("Day", l), d.set("Date", l, d.get("Date", l) - h + c + (h < c ? -7 : 0))), h = d.get("FullYear", l), c = d.get("Month", l);
                     var v = d.get("Date", l),
                        y = d.get("Hours", l);
                     for (r = l.getTime(), d.variableTimezone && (f = s - r > 4 * a.month || d.getTimezoneOffset(r) !== d.getTimezoneOffset(s)), r = l.getTime(), l = 1; r < s;) u.push(r), r = m === a.year ? d.makeTime(h + l * g, 0) : m === a.month ? d.makeTime(h, c + l * g) : !f || m !== a.day && m !== a.week ? f && m === a.hour && 1 < g ? d.makeTime(h, c, v, y + l * g) : r + m * g : d.makeTime(h, c, v + l * g * (m === a.day ? 1 : 7)), l++;
                     u.push(r), m <= a.hour && 1e4 > u.length && i(u, function (t) {
                        0 === t % 18e5 && "000000000" === d.dateFormat("%H%M%S%L", t) && (p[t] = "day")
                     })
                  }
                  return u.info = n(t, {
                     higherRanks: p,
                     totalRange: m * g
                  }), u
               }
            }
         }(e),
         function (t) {
            var e = t.color,
               i = t.merge;
            t.defaultOptions = {
               colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
               symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
               lang: {
                  loading: "Loading...",
                  months: "January February March April May June July August September October November December".split(" "),
                  shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                  weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                  decimalPoint: ".",
                  numericSymbols: "kMGTPE".split(""),
                  resetZoom: "Reset zoom",
                  resetZoomTitle: "Reset zoom level 1:1",
                  thousandsSep: " "
               },
               global: {},
               time: t.Time.prototype.defaultOptions,
               chart: {
                  borderRadius: 0,
                  defaultSeriesType: "line",
                  ignoreHiddenSeries: !0,
                  spacing: [10, 10, 15, 10],
                  resetZoomButton: {
                     theme: {
                        zIndex: 6
                     },
                     position: {
                        align: "right",
                        x: -10,
                        y: 10
                     }
                  },
                  width: null,
                  height: null,
                  borderColor: "#335cad",
                  backgroundColor: "#ffffff",
                  plotBorderColor: "#cccccc"
               },
               title: {
                  text: "Chart title",
                  align: "center",
                  margin: 15,
                  widthAdjust: -44
               },
               subtitle: {
                  text: "",
                  align: "center",
                  widthAdjust: -44
               },
               plotOptions: {},
               labels: {
                  style: {
                     position: "absolute",
                     color: "#333333"
                  }
               },
               legend: {
                  enabled: !0,
                  align: "center",
                  alignColumns: !0,
                  layout: "horizontal",
                  labelFormatter: function () {
                     return this.name
                  },
                  borderColor: "#999999",
                  borderRadius: 0,
                  navigation: {
                     activeColor: "#003399",
                     inactiveColor: "#cccccc"
                  },
                  itemStyle: {
                     color: "#333333",
                     fontSize: "12px",
                     fontWeight: "bold",
                     textOverflow: "ellipsis"
                  },
                  itemHoverStyle: {
                     color: "#000000"
                  },
                  itemHiddenStyle: {
                     color: "#cccccc"
                  },
                  shadow: !1,
                  itemCheckboxStyle: {
                     position: "absolute",
                     width: "13px",
                     height: "13px"
                  },
                  squareSymbol: !0,
                  symbolPadding: 5,
                  verticalAlign: "bottom",
                  x: 0,
                  y: 0,
                  title: {
                     style: {
                        fontWeight: "bold"
                     }
                  }
               },
               loading: {
                  labelStyle: {
                     fontWeight: "bold",
                     position: "relative",
                     top: "45%"
                  },
                  style: {
                     position: "absolute",
                     backgroundColor: "#ffffff",
                     opacity: .5,
                     textAlign: "center"
                  }
               },
               tooltip: {
                  enabled: !0,
                  animation: t.svg,
                  borderRadius: 3,
                  dateTimeLabelFormats: {
                     millisecond: "%A, %b %e, %H:%M:%S.%L",
                     second: "%A, %b %e, %H:%M:%S",
                     minute: "%A, %b %e, %H:%M",
                     hour: "%A, %b %e, %H:%M",
                     day: "%A, %b %e, %Y",
                     week: "Week from %A, %b %e, %Y",
                     month: "%B %Y",
                     year: "%Y"
                  },
                  footerFormat: "",
                  padding: 8,
                  snap: t.isTouchDevice ? 25 : 10,
                  backgroundColor: e("#f7f7f7").setOpacity(.85).get(),
                  borderWidth: 1,
                  headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                  pointFormat: '<span style="color:{point.color}">â—</span> {series.name}: <b>{point.y}</b><br/>',
                  shadow: !0,
                  style: {
                     color: "#333333",
                     cursor: "default",
                     fontSize: "12px",
                     pointerEvents: "none",
                     whiteSpace: "nowrap"
                  }
               },
               credits: {
                  enabled: !0,
                  href: "https://www.highcharts.com",
                  position: {
                     align: "right",
                     x: -10,
                     verticalAlign: "bottom",
                     y: -5
                  },
                  style: {
                     cursor: "pointer",
                     color: "#999999",
                     fontSize: "9px"
                  },
                  text: "Highcharts.com"
               }
            }, t.setOptions = function (e) {
               return t.defaultOptions = i(!0, t.defaultOptions, e), t.time.update(i(t.defaultOptions.global, t.defaultOptions.time), !1), t.defaultOptions
            }, t.getOptions = function () {
               return t.defaultOptions
            }, t.defaultPlotOptions = t.defaultOptions.plotOptions, t.time = new t.Time(i(t.defaultOptions.global, t.defaultOptions.time)), t.dateFormat = function (e, i, n) {
               return t.time.dateFormat(e, i, n)
            }
         }(e),
         function (t) {
            var e = t.correctFloat,
               i = t.defined,
               n = t.destroyObjectProperties,
               r = t.fireEvent,
               o = t.isNumber,
               a = t.merge,
               s = t.pick,
               c = t.deg2rad;
            t.Tick = function (t, e, i, n, r) {
               this.axis = t, this.pos = e, this.type = i || "", this.isNewLabel = this.isNew = !0, this.parameters = r || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, i || n || this.addLabel()
            }, t.Tick.prototype = {
               addLabel: function () {
                  var n, r, o, c, l = this,
                     h = l.axis,
                     d = h.options,
                     u = h.chart,
                     p = h.categories,
                     f = h.names,
                     m = l.pos,
                     g = s(l.options && l.options.labels, d.labels),
                     v = h.tickPositions,
                     y = m === v[0],
                     x = m === v[v.length - 1],
                     b = (p = this.parameters.category || (p ? s(p[m], f[m], m) : m), l.label);
                  v = v.info;
                  h.isDatetimeAxis && v && (r = u.time.resolveDTLFormat(d.dateTimeLabelFormats[!d.grid && v.higherRanks[m] || v.unitName]), n = r.main), l.isFirst = y, l.isLast = x, l.formatCtx = {
                     axis: h,
                     chart: u,
                     isFirst: y,
                     isLast: x,
                     dateTimeLabelFormat: n,
                     tickPositionInfo: v,
                     value: h.isLog ? e(h.lin2log(p)) : p,
                     pos: m
                  }, d = h.labelFormatter.call(l.formatCtx, this.formatCtx), (c = r && r.list) && (l.shortenLabel = function () {
                     for (o = 0; o < c.length; o++)
                        if (b.attr({
                              text: h.labelFormatter.call(t.extend(l.formatCtx, {
                                 dateTimeLabelFormat: c[o]
                              }))
                           }), b.getBBox().width < h.getSlotWidth(l) - 2 * s(g.padding, 5)) return;
                     b.attr({
                        text: ""
                     })
                  }), i(b) ? b && b.textStr !== d && (!b.textWidth || g.style && g.style.width || b.styles.width || b.css({
                     width: null
                  }), b.attr({
                     text: d
                  })) : ((l.label = b = i(d) && g.enabled ? u.renderer.text(d, 0, 0, g.useHTML).css(a(g.style)).add(h.labelGroup) : null) && (b.textPxLength = b.getBBox().width), l.rotation = 0)
               },
               getLabelSize: function () {
                  return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
               },
               handleOverflow: function (t) {
                  var e, i = this.axis,
                     n = i.options.labels,
                     r = t.x,
                     o = i.chart.chartWidth,
                     a = i.chart.spacing,
                     l = s(i.labelLeft, Math.min(i.pos, a[3])),
                     h = (a = s(i.labelRight, Math.max(i.isRadial ? 0 : i.pos + i.len, o - a[1])), this.label),
                     d = this.rotation,
                     u = {
                        left: 0,
                        center: .5,
                        right: 1
                     } [i.labelAlign || h.attr("align")],
                     p = h.getBBox().width,
                     f = i.getSlotWidth(this),
                     m = f,
                     g = 1,
                     v = {};
                  d || "justify" !== s(n.overflow, "justify") ? 0 > d && r - u * p < l ? e = Math.round(r / Math.cos(d * c) - l) : 0 < d && r + u * p > a && (e = Math.round((o - r) / Math.cos(d * c))) : (o = r + (1 - u) * p, r - u * p < l ? m = t.x + m * (1 - u) - l : o > a && (m = a - t.x + m * u, g = -1), m = Math.min(f, m), m < f && "center" === i.labelAlign && (t.x += g * (f - m - u * (f - Math.min(p, m)))), (p > m || i.autoRotation && (h.styles || {}).width) && (e = m)), e && (this.shortenLabel ? this.shortenLabel() : (v.width = e, (n.style || {}).textOverflow || (v.textOverflow = "ellipsis"), h.css(v)))
               },
               getPosition: function (e, i, n, o) {
                  var a = this.axis,
                     s = a.chart,
                     c = o && s.oldChartHeight || s.chartHeight;
                  return e = {
                     x: e ? t.correctFloat(a.translate(i + n, null, null, o) + a.transB) : a.left + a.offset + (a.opposite ? (o && s.oldChartWidth || s.chartWidth) - a.right - a.left : 0),
                     y: e ? c - a.bottom + a.offset - (a.opposite ? a.height : 0) : t.correctFloat(c - a.translate(i + n, null, null, o) - a.transB)
                  }, r(this, "afterGetPosition", {
                     pos: e
                  }), e
               },
               getLabelPosition: function (t, e, n, o, a, s, l, h) {
                  var d = this.axis,
                     u = d.transA,
                     p = d.reversed,
                     f = d.staggerLines,
                     m = d.tickRotCorr || {
                        x: 0,
                        y: 0
                     },
                     g = a.y,
                     v = o || d.reserveSpaceDefault ? 0 : -d.labelOffset * ("center" === d.labelAlign ? .5 : 1),
                     y = {};
                  return i(g) || (g = 0 === d.side ? n.rotation ? -8 : -n.getBBox().height : 2 === d.side ? m.y + 8 : Math.cos(n.rotation * c) * (m.y - n.getBBox(!1, 0).height / 2)), t = t + a.x + v + m.x - (s && o ? s * u * (p ? -1 : 1) : 0), e = e + g - (s && !o ? s * u * (p ? 1 : -1) : 0), f && (n = l / (h || 1) % f, d.opposite && (n = f - n - 1), e += d.labelOffset / f * n), y.x = t, y.y = Math.round(e), r(this, "afterGetLabelPosition", {
                     pos: y
                  }), y
               },
               getMarkPath: function (t, e, i, n, r, o) {
                  return o.crispLine(["M", t, e, "L", t + (r ? 0 : -i), e + (r ? i : 0)], n)
               },
               renderGridLine: function (t, e, i) {
                  var n = this.axis,
                     r = n.options,
                     o = this.gridLine,
                     a = {},
                     c = this.pos,
                     l = this.type,
                     h = s(this.tickmarkOffset, n.tickmarkOffset),
                     d = n.chart.renderer,
                     u = l ? l + "Grid" : "grid",
                     p = r[u + "LineWidth"],
                     f = r[u + "LineColor"];
                  r = r[u + "LineDashStyle"];
                  o || (a.stroke = f, a["stroke-width"] = p, r && (a.dashstyle = r), l || (a.zIndex = 1), t && (e = 0), this.gridLine = o = d.path().attr(a).addClass("highcharts-" + (l ? l + "-" : "") + "grid-line").add(n.gridGroup)), o && (i = n.getPlotLinePath(c + h, o.strokeWidth() * i, t, "pass")) && o[t || this.isNew ? "attr" : "animate"]({
                     d: i,
                     opacity: e
                  })
               },
               renderMark: function (t, e, i) {
                  var n = this.axis,
                     r = n.options,
                     o = n.chart.renderer,
                     a = this.type,
                     c = a ? a + "Tick" : "tick",
                     l = n.tickSize(c),
                     h = this.mark,
                     d = !h,
                     u = t.x;
                  t = t.y;
                  var p = s(r[c + "Width"], !a && n.isXAxis ? 1 : 0);
                  r = r[c + "Color"];
                  l && (n.opposite && (l[0] = -l[0]), d && (this.mark = h = o.path().addClass("highcharts-" + (a ? a + "-" : "") + "tick").add(n.axisGroup), h.attr({
                     stroke: r,
                     "stroke-width": p
                  })), h[d ? "attr" : "animate"]({
                     d: this.getMarkPath(u, t, l[0], h.strokeWidth() * i, n.horiz, o),
                     opacity: e
                  }))
               },
               renderLabel: function (t, e, i, n) {
                  var r = this.axis,
                     a = r.horiz,
                     c = r.options,
                     l = this.label,
                     h = c.labels,
                     d = h.step,
                     u = (r = s(this.tickmarkOffset, r.tickmarkOffset), !0),
                     p = t.x;
                  t = t.y, l && o(p) && (l.xy = t = this.getLabelPosition(p, t, l, a, h, r, n, d), this.isFirst && !this.isLast && !s(c.showFirstLabel, 1) || this.isLast && !this.isFirst && !s(c.showLastLabel, 1) ? u = !1 : !a || h.step || h.rotation || e || 0 === i || this.handleOverflow(t), d && n % d && (u = !1), u && o(t.y) ? (t.opacity = i, l[this.isNewLabel ? "attr" : "animate"](t), this.isNewLabel = !1) : (l.attr("y", -9999), this.isNewLabel = !0))
               },
               render: function (e, i, n) {
                  var r = this.axis,
                     o = r.horiz,
                     a = this.pos,
                     c = s(this.tickmarkOffset, r.tickmarkOffset),
                     l = (a = this.getPosition(o, a, c, i), c = a.x, a.y);
                  r = o && c === r.pos + r.len || !o && l === r.pos ? -1 : 1;
                  n = s(n, 1), this.isActive = !0, this.renderGridLine(i, n, r), this.renderMark(a, n, r), this.renderLabel(a, i, n, e), this.isNew = !1, t.fireEvent(this, "afterRender")
               },
               destroy: function () {
                  n(this, this.axis)
               }
            }
         }(e);
         var i = function (t) {
            var e = t.addEvent,
               i = t.animObject,
               n = t.arrayMax,
               r = t.arrayMin,
               o = t.color,
               a = t.correctFloat,
               s = t.defaultOptions,
               c = t.defined,
               l = t.deg2rad,
               h = t.destroyObjectProperties,
               d = t.each,
               u = t.extend,
               p = t.fireEvent,
               f = t.format,
               m = t.getMagnitude,
               g = t.grep,
               v = t.inArray,
               y = t.isArray,
               x = t.isNumber,
               b = t.isString,
               _ = t.merge,
               w = t.normalizeTickInterval,
               k = t.objectEach,
               S = t.pick,
               M = t.removeEvent,
               A = t.splat,
               C = t.syncTimeout,
               P = t.Tick,
               T = function () {
                  this.init.apply(this, arguments)
               };
            return t.extend(T.prototype, {
               defaultOptions: {
                  dateTimeLabelFormats: {
                     millisecond: {
                        main: "%H:%M:%S.%L",
                        range: !1
                     },
                     second: {
                        main: "%H:%M:%S",
                        range: !1
                     },
                     minute: {
                        main: "%H:%M",
                        range: !1
                     },
                     hour: {
                        main: "%H:%M",
                        range: !1
                     },
                     day: {
                        main: "%e. %b"
                     },
                     week: {
                        main: "%e. %b"
                     },
                     month: {
                        main: "%b '%y"
                     },
                     year: {
                        main: "%Y"
                     }
                  },
                  endOnTick: !1,
                  labels: {
                     enabled: !0,
                     indentation: 10,
                     x: 0,
                     style: {
                        color: "#666666",
                        cursor: "default",
                        fontSize: "11px"
                     }
                  },
                  maxPadding: .01,
                  minorTickLength: 2,
                  minorTickPosition: "outside",
                  minPadding: .01,
                  startOfWeek: 1,
                  startOnTick: !1,
                  tickLength: 10,
                  tickPixelInterval: 100,
                  tickmarkPlacement: "between",
                  tickPosition: "outside",
                  title: {
                     align: "middle",
                     style: {
                        color: "#666666"
                     }
                  },
                  type: "linear",
                  minorGridLineColor: "#f2f2f2",
                  minorGridLineWidth: 1,
                  minorTickColor: "#999999",
                  lineColor: "#ccd6eb",
                  lineWidth: 1,
                  gridLineColor: "#e6e6e6",
                  tickColor: "#ccd6eb"
               },
               defaultYAxisOptions: {
                  endOnTick: !0,
                  maxPadding: .05,
                  minPadding: .05,
                  tickPixelInterval: 72,
                  showLastLabel: !0,
                  labels: {
                     x: -8
                  },
                  startOnTick: !0,
                  title: {
                     rotation: 270,
                     text: "Values"
                  },
                  stackLabels: {
                     allowOverlap: !1,
                     enabled: !1,
                     formatter: function () {
                        return t.numberFormat(this.total, -1)
                     },
                     style: {
                        color: "#000000",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textOutline: "1px contrast"
                     }
                  },
                  gridLineWidth: 1,
                  lineWidth: 0
               },
               defaultLeftAxisOptions: {
                  labels: {
                     x: -15
                  },
                  title: {
                     rotation: 270
                  }
               },
               defaultRightAxisOptions: {
                  labels: {
                     x: 15
                  },
                  title: {
                     rotation: 90
                  }
               },
               defaultBottomAxisOptions: {
                  labels: {
                     autoRotation: [-45],
                     x: 0
                  },
                  title: {
                     rotation: 0
                  }
               },
               defaultTopAxisOptions: {
                  labels: {
                     autoRotation: [-45],
                     x: 0
                  },
                  title: {
                     rotation: 0
                  }
               },
               init: function (t, i) {
                  var n = i.isX,
                     r = this;
                  r.chart = t, r.horiz = t.inverted && !r.isZAxis ? !n : n, r.isXAxis = n, r.coll = r.coll || (n ? "xAxis" : "yAxis"), p(this, "init", {
                     userOptions: i
                  }), r.opposite = i.opposite, r.side = i.side || (r.horiz ? r.opposite ? 0 : 2 : r.opposite ? 1 : 3), r.setOptions(i);
                  var o = this.options,
                     a = o.type;
                  r.labelFormatter = o.labels.formatter || r.defaultLabelFormatter, r.userOptions = i, r.minPixelPadding = 0, r.reversed = o.reversed, r.visible = !1 !== o.visible, r.zoomEnabled = !1 !== o.zoomEnabled, r.hasNames = "category" === a || !0 === o.categories, r.categories = o.categories || r.hasNames, r.names || (r.names = [], r.names.keys = {}), r.plotLinesAndBandsGroups = {}, r.isLog = "logarithmic" === a, r.isDatetimeAxis = "datetime" === a, r.positiveValuesOnly = r.isLog && !r.allowNegativeLog, r.isLinked = c(o.linkedTo), r.ticks = {}, r.labelEdge = [], r.minorTicks = {}, r.plotLinesAndBands = [], r.alternateBands = {}, r.len = 0, r.minRange = r.userMinRange = o.minRange || o.maxZoom, r.range = o.range, r.offset = o.offset || 0, r.stacks = {}, r.oldStacks = {}, r.stacksTouched = 0, r.max = null, r.min = null, r.crosshair = S(o.crosshair, A(t.options.tooltip.crosshairs)[n ? 0 : 1], !1), i = r.options.events, -1 === v(r, t.axes) && (n ? t.axes.splice(t.xAxis.length, 0, r) : t.axes.push(r), t[r.coll].push(r)), r.series = r.series || [], t.inverted && !r.isZAxis && n && void 0 === r.reversed && (r.reversed = !0), k(i, function (t, i) {
                     e(r, i, t)
                  }), r.lin2log = o.linearToLogConverter || r.lin2log, r.isLog && (r.val2lin = r.log2lin, r.lin2val = r.lin2log), p(this, "afterInit")
               },
               setOptions: function (t) {
                  this.options = _(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], _(s[this.coll], t)), p(this, "afterSetOptions", {
                     userOptions: t
                  })
               },
               defaultLabelFormatter: function () {
                  var e, i = this.axis,
                     n = this.value,
                     r = i.chart.time,
                     o = i.categories,
                     a = this.dateTimeLabelFormat,
                     c = s.lang,
                     l = c.numericSymbols,
                     h = (c = c.numericSymbolMagnitude || 1e3, l && l.length),
                     d = i.options.labels.format;
                  i = i.isLog ? Math.abs(n) : i.tickInterval;
                  if (d) e = f(d, this, r);
                  else if (o) e = n;
                  else if (a) e = r.dateFormat(a, n);
                  else if (h && 1e3 <= i)
                     for (; h-- && void 0 === e;) r = Math.pow(c, h + 1), i >= r && 0 === 10 * n % r && null !== l[h] && 0 !== n && (e = t.numberFormat(n / r, -1) + l[h]);
                  return void 0 === e && (e = 1e4 <= Math.abs(n) ? t.numberFormat(n, -1) : t.numberFormat(n, -1, void 0, "")), e
               },
               getSeriesExtremes: function () {
                  var t = this,
                     e = t.chart;
                  p(this, "getSeriesExtremes", null, function () {
                     t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = null, t.softThreshold = !t.isXAxis, t.buildStacks && t.buildStacks(), d(t.series, function (i) {
                        if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                           var o, a = i.options,
                              s = a.threshold;
                           t.hasVisibleSeries = !0, t.positiveValuesOnly && 0 >= s && (s = null), t.isXAxis ? (a = i.xData, a.length && (i = r(a), o = n(a), x(i) || i instanceof Date || (a = g(a, x), i = r(a), o = n(a)), a.length && (t.dataMin = Math.min(S(t.dataMin, a[0], i), i), t.dataMax = Math.max(S(t.dataMax, a[0], o), o)))) : (i.getExtremes(), o = i.dataMax, i = i.dataMin, c(i) && c(o) && (t.dataMin = Math.min(S(t.dataMin, i), i), t.dataMax = Math.max(S(t.dataMax, o), o)), c(s) && (t.threshold = s), (!a.softThreshold || t.positiveValuesOnly) && (t.softThreshold = !1))
                        }
                     })
                  }), p(this, "afterGetSeriesExtremes")
               },
               translate: function (t, e, i, n, r, o) {
                  var a = this.linkedParent || this,
                     s = 1,
                     c = 0,
                     l = n ? a.oldTransA : a.transA;
                  n = n ? a.oldMin : a.min;
                  var h = a.minPixelPadding;
                  return r = (a.isOrdinal || a.isBroken || a.isLog && r) && a.lin2val, l || (l = a.transA), i && (s *= -1, c = a.len), a.reversed && (s *= -1, c -= s * (a.sector || a.len)), e ? (t = (t * s + c - h) / l + n, r && (t = a.lin2val(t))) : (r && (t = a.val2lin(t)), t = x(n) ? s * (t - n) * l + c + s * h + (x(o) ? l * o : 0) : void 0), t
               },
               toPixels: function (t, e) {
                  return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
               },
               toValue: function (t, e) {
                  return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
               },
               getPlotLinePath: function (t, e, i, n, r) {
                  var o, a, s, c = this.chart,
                     l = this.left,
                     h = this.top,
                     d = i && c.oldChartHeight || c.chartHeight,
                     u = i && c.oldChartWidth || c.chartWidth;
                  o = this.transB;
                  var p = function (t, e, i) {
                     return ("pass" !== n && t < e || t > i) && (n ? t = Math.min(Math.max(e, t), i) : s = !0), t
                  };
                  return r = S(r, this.translate(t, null, null, i)), r = Math.min(Math.max(-1e5, r), 1e5), t = i = Math.round(r + o), o = a = Math.round(d - r - o), x(r) ? this.horiz ? (o = h, a = d - this.bottom, t = i = p(t, l, l + this.width)) : (t = l, i = u - this.right, o = a = p(o, h, h + this.height)) : (s = !0, n = !1), s && !n ? null : c.renderer.crispLine(["M", t, o, "L", i, a], e || 1)
               },
               getLinearTickPositions: function (t, e, i) {
                  var n, r = a(Math.floor(e / t) * t);
                  i = a(Math.ceil(i / t) * t);
                  var o, s = [];
                  if (a(r + t) === r && (o = 20), this.single) return [e];
                  for (e = r; e <= i;) {
                     if (s.push(e), e = a(e + t, o), e === n) break;
                     n = e
                  }
                  return s
               },
               getMinorTickInterval: function () {
                  var t = this.options;
                  return !0 === t.minorTicks ? S(t.minorTickInterval, "auto") : !1 === t.minorTicks ? null : t.minorTickInterval
               },
               getMinorTickPositions: function () {
                  var t = this,
                     e = t.options,
                     i = t.tickPositions,
                     n = t.minorTickInterval,
                     r = [],
                     o = t.pointRangePadding || 0,
                     a = t.min - o,
                     s = (o = t.max + o, o - a);
                  if (s && s / n < t.len / 3)
                     if (t.isLog) d(this.paddedTicks, function (e, i, o) {
                        i && r.push.apply(r, t.getLogTickPositions(n, o[i - 1], o[i], !0))
                     });
                     else if (t.isDatetimeAxis && "auto" === this.getMinorTickInterval()) r = r.concat(t.getTimeTicks(t.normalizeTimeTickInterval(n), a, o, e.startOfWeek));
                  else
                     for (e = a + (i[0] - a) % n; e <= o && e !== r[0]; e += n) r.push(e);
                  return 0 !== r.length && t.trimTicks(r), r
               },
               adjustForMinRange: function () {
                  var t, e, i, o, a, s, l, h = this.options,
                     u = this.min,
                     p = this.max;
                  this.isXAxis && void 0 === this.minRange && !this.isLog && (c(h.min) || c(h.max) ? this.minRange = null : (d(this.series, function (t) {
                     for (s = t.xData, o = t.xIncrement ? 1 : s.length - 1; 0 < o; o--) a = s[o] - s[o - 1], (void 0 === i || a < i) && (i = a)
                  }), this.minRange = Math.min(5 * i, this.dataMax - this.dataMin))), p - u < this.minRange && (e = this.dataMax - this.dataMin >= this.minRange, l = this.minRange, t = (l - p + u) / 2, t = [u - t, S(h.min, u - t)], e && (t[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), u = n(t), p = [u + l, S(h.max, u + l)], e && (p[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), p = r(p), p - u < l && (t[0] = p - l, t[1] = S(h.min, p - l), u = n(t))), this.min = u, this.max = p
               },
               getClosest: function () {
                  var t;
                  return this.categories ? t = 1 : d(this.series, function (e) {
                     var i = e.closestPointRange,
                        n = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                     !e.noSharedTooltip && c(i) && n && (t = c(t) ? Math.min(t, i) : i)
                  }), t
               },
               nameToX: function (t) {
                  var e, i = y(this.categories),
                     n = i ? this.categories : this.names,
                     r = t.options.x;
                  return t.series.requireSorting = !1, c(r) || (r = !1 === this.options.uniqueNames ? t.series.autoIncrement() : i ? v(t.name, n) : S(n.keys[t.name], -1)), -1 === r ? i || (e = n.length) : e = r, void 0 !== e && (this.names[e] = t.name, this.names.keys[t.name] = e), e
               },
               updateNames: function () {
                  var e = this,
                     i = this.names;
                  0 < i.length && (d(t.keys(i.keys), function (t) {
                     delete i.keys[t]
                  }), i.length = 0, this.minRange = this.userMinRange, d(this.series || [], function (t) {
                     t.xIncrement = null, t.points && !t.isDirtyData || (t.processData(), t.generatePoints()), d(t.points, function (i, n) {
                        var r;
                        i.options && (r = e.nameToX(i), void 0 !== r && r !== i.x && (i.x = r, t.xData[n] = r))
                     })
                  }))
               },
               setAxisTranslation: function (t) {
                  var e, i = this,
                     n = i.max - i.min,
                     r = i.axisPointRange || 0,
                     o = 0,
                     a = 0,
                     s = i.linkedParent,
                     c = !!i.categories,
                     l = i.transA,
                     h = i.isXAxis;
                  (h || c || r) && (e = i.getClosest(), s ? (o = s.minPointOffset, a = s.pointRangePadding) : d(i.series, function (t) {
                     var n = c ? 1 : h ? S(t.options.pointRange, e, 0) : i.axisPointRange || 0;
                     t = t.options.pointPlacement, r = Math.max(r, n), i.single || (o = Math.max(o, b(t) ? 0 : n / 2), a = Math.max(a, "on" === t ? 0 : n))
                  }), s = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = o *= s, i.pointRangePadding = a *= s, i.pointRange = Math.min(r, n), h && (i.closestPointRange = e)), t && (i.oldTransA = l), i.translationSlope = i.transA = l = i.staticScale || i.len / (n + a || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = l * o, p(this, "afterSetAxisTranslation")
               },
               minFromRange: function () {
                  return this.max - this.range
               },
               setTickInterval: function (e) {
                  var i, n, r, o, s = this,
                     l = s.chart,
                     h = s.options,
                     u = s.isLog,
                     f = s.isDatetimeAxis,
                     g = s.isXAxis,
                     v = s.isLinked,
                     y = h.maxPadding,
                     b = h.minPadding,
                     _ = h.tickInterval,
                     k = h.tickPixelInterval,
                     M = s.categories,
                     A = x(s.threshold) ? s.threshold : null,
                     C = s.softThreshold;
                  f || M || v || this.getTickAmount(), r = S(s.userMin, h.min), o = S(s.userMax, h.max), v ? (s.linkedParent = l[s.coll][h.linkedTo], l = s.linkedParent.getExtremes(), s.min = S(l.min, l.dataMin), s.max = S(l.max, l.dataMax), h.type !== s.linkedParent.options.type && t.error(11, 1)) : (!C && c(A) && (s.dataMin >= A ? (i = A, b = 0) : s.dataMax <= A && (n = A, y = 0)), s.min = S(r, i, s.dataMin), s.max = S(o, n, s.dataMax)), u && (s.positiveValuesOnly && !e && 0 >= Math.min(s.min, S(s.dataMin, s.min)) && t.error(10, 1), s.min = a(s.log2lin(s.min), 15), s.max = a(s.log2lin(s.max), 15)), s.range && c(s.max) && (s.userMin = s.min = r = Math.max(s.dataMin, s.minFromRange()), s.userMax = o = s.max, s.range = null), p(s, "foundExtremes"), s.beforePadding && s.beforePadding(), s.adjustForMinRange(), !(M || s.axisPointRange || s.usePercentage || v) && c(s.min) && c(s.max) && (l = s.max - s.min) && (!c(r) && b && (s.min -= l * b), !c(o) && y && (s.max += l * y)), x(h.softMin) && !x(s.userMin) && (s.min = Math.min(s.min, h.softMin)), x(h.softMax) && !x(s.userMax) && (s.max = Math.max(s.max, h.softMax)), x(h.floor) && (s.min = Math.max(s.min, h.floor)), x(h.ceiling) && (s.max = Math.min(s.max, h.ceiling)), C && c(s.dataMin) && (A = A || 0, !c(r) && s.min < A && s.dataMin >= A ? s.min = A : !c(o) && s.max > A && s.dataMax <= A && (s.max = A)), s.tickInterval = s.min === s.max || void 0 === s.min || void 0 === s.max ? 1 : v && !_ && k === s.linkedParent.options.tickPixelInterval ? _ = s.linkedParent.tickInterval : S(_, this.tickAmount ? (s.max - s.min) / Math.max(this.tickAmount - 1, 1) : void 0, M ? 1 : (s.max - s.min) * k / Math.max(s.len, k)), g && !e && d(s.series, function (t) {
                     t.processData(s.min !== s.oldMin || s.max !== s.oldMax)
                  }), s.setAxisTranslation(!0), s.beforeSetTickPositions && s.beforeSetTickPositions(), s.postProcessTickInterval && (s.tickInterval = s.postProcessTickInterval(s.tickInterval)), s.pointRange && !_ && (s.tickInterval = Math.max(s.pointRange, s.tickInterval)), e = S(h.minTickInterval, s.isDatetimeAxis && s.closestPointRange), !_ && s.tickInterval < e && (s.tickInterval = e), f || u || _ || (s.tickInterval = w(s.tickInterval, null, m(s.tickInterval), S(h.allowDecimals, !(.5 < s.tickInterval && 5 > s.tickInterval && 1e3 < s.max && 9999 > s.max)), !!this.tickAmount)), this.tickAmount || (s.tickInterval = s.unsquish()), this.setTickPositions()
               },
               setTickPositions: function () {
                  var e, i = this.options,
                     n = i.tickPositions;
                  e = this.getMinorTickInterval();
                  var r = i.tickPositioner,
                     o = i.startOnTick,
                     a = i.endOnTick;
                  this.tickmarkOffset = this.categories && "between" === i.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === e && this.tickInterval ? this.tickInterval / 5 : e, this.single = this.min === this.max && c(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== i.allowDecimals), this.tickPositions = e = n && n.slice(), !e && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (e = [this.min, this.max], t.error(19)) : e = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), e.length > this.len && (e = [e[0], e.pop()], e[0] === e[1] && (e.length = 1)), this.tickPositions = e, r && (r = r.apply(this, [this.min, this.max]))) && (this.tickPositions = e = r), this.paddedTicks = e.slice(0), this.trimTicks(e, o, a), this.isLinked || (this.single && 2 > e.length && (this.min -= .5, this.max += .5), n || r || this.adjustTickAmount()), p(this, "afterSetTickPositions")
               },
               trimTicks: function (t, e, i) {
                  var n = t[0],
                     r = t[t.length - 1],
                     o = this.minPointOffset || 0;
                  if (!this.isLinked) {
                     if (e && -1 / 0 !== n) this.min = n;
                     else
                        for (; this.min - o > t[0];) t.shift();
                     if (i) this.max = r;
                     else
                        for (; this.max + o < t[t.length - 1];) t.pop();
                     0 === t.length && c(n) && !this.options.tickPositions && t.push((r + n) / 2)
                  }
               },
               alignToOthers: function () {
                  var t, e = {},
                     i = this.options;
                  return !1 === this.chart.options.chart.alignTicks || !1 === i.alignTicks || !1 === i.startOnTick || !1 === i.endOnTick || this.isLog || d(this.chart[this.coll], function (i) {
                     var n = i.options;
                     n = [i.horiz ? n.left : n.top, n.width, n.height, n.pane].join();
                     i.series.length && (e[n] ? t = !0 : e[n] = 1)
                  }), t
               },
               getTickAmount: function () {
                  var t = this.options,
                     e = t.tickAmount,
                     i = t.tickPixelInterval;
                  !c(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = Math.ceil(this.len / i) + 1), 4 > e && (this.finalTickAmt = e, e = 5), this.tickAmount = e
               },
               adjustTickAmount: function () {
                  var t = this.tickInterval,
                     e = this.tickPositions,
                     i = this.tickAmount,
                     n = this.finalTickAmt,
                     r = e && e.length,
                     o = S(this.threshold, this.softThreshold ? 0 : null);
                  if (this.hasData()) {
                     if (r < i) {
                        for (; e.length < i;) e.length % 2 || this.min === o ? e.push(a(e[e.length - 1] + t)) : e.unshift(a(e[0] - t));
                        this.transA *= (r - 1) / (i - 1), this.min = e[0], this.max = e[e.length - 1]
                     } else r > i && (this.tickInterval *= 2, this.setTickPositions());
                     if (c(n)) {
                        for (t = i = e.length; t--;)(3 === n && 1 === t % 2 || 2 >= n && 0 < t && t < i - 1) && e.splice(t, 1);
                        this.finalTickAmt = void 0
                     }
                  }
               },
               setScale: function () {
                  var t, e;
                  this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), e = this.len !== this.oldAxisLength, d(this.series, function (e) {
                     (e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0)
                  }), e || t || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks(), p(this, "afterSetScale")
               },
               setExtremes: function (t, e, i, n, r) {
                  var o = this,
                     a = o.chart;
                  i = S(i, !0), d(o.series, function (t) {
                     delete t.kdTree
                  }), r = u(r, {
                     min: t,
                     max: e
                  }), p(o, "setExtremes", r, function () {
                     o.userMin = t, o.userMax = e, o.eventArgs = r, i && a.redraw(n)
                  })
               },
               zoom: function (t, e) {
                  var i = this.dataMin,
                     n = this.dataMax,
                     r = this.options,
                     o = Math.min(i, S(r.min, i));
                  r = Math.max(n, S(r.max, n));
                  return t === this.min && e === this.max || (this.allowZoomOutside || (c(i) && (t < o && (t = o), t > r && (t = r)), c(n) && (e < o && (e = o), e > r && (e = r))), this.displayBtn = void 0 !== t || void 0 !== e, this.setExtremes(t, e, !1, void 0, {
                     trigger: "zoom"
                  })), !0
               },
               setAxisSize: function () {
                  var e = this.chart,
                     i = this.options,
                     n = i.offsets || [0, 0, 0, 0],
                     r = this.horiz,
                     o = this.width = Math.round(t.relativeLength(S(i.width, e.plotWidth - n[3] + n[1]), e.plotWidth)),
                     a = this.height = Math.round(t.relativeLength(S(i.height, e.plotHeight - n[0] + n[2]), e.plotHeight)),
                     s = this.top = Math.round(t.relativeLength(S(i.top, e.plotTop + n[0]), e.plotHeight, e.plotTop));
                  i = this.left = Math.round(t.relativeLength(S(i.left, e.plotLeft + n[3]), e.plotWidth, e.plotLeft));
                  this.bottom = e.chartHeight - a - s, this.right = e.chartWidth - o - i, this.len = Math.max(r ? o : a, 0), this.pos = r ? i : s
               },
               getExtremes: function () {
                  var t = this.isLog;
                  return {
                     min: t ? a(this.lin2log(this.min)) : this.min,
                     max: t ? a(this.lin2log(this.max)) : this.max,
                     dataMin: this.dataMin,
                     dataMax: this.dataMax,
                     userMin: this.userMin,
                     userMax: this.userMax
                  }
               },
               getThreshold: function (t) {
                  var e = this.isLog,
                     i = e ? this.lin2log(this.min) : this.min;
                  e = e ? this.lin2log(this.max) : this.max;
                  return null === t || -1 / 0 === t ? t = i : 1 / 0 === t ? t = e : i > t ? t = i : e < t && (t = e), this.translate(t, 0, 1, 0, 1)
               },
               autoLabelAlign: function (t) {
                  return t = (S(t, 0) - 90 * this.side + 720) % 360, 15 < t && 165 > t ? "right" : 195 < t && 345 > t ? "left" : "center"
               },
               tickSize: function (t) {
                  var e = this.options,
                     i = e[t + "Length"],
                     n = S(e[t + "Width"], "tick" === t && this.isXAxis ? 1 : 0);
                  if (n && i) return "inside" === e[t + "Position"] && (i = -i), [i, n]
               },
               labelMetrics: function () {
                  var t = this.tickPositions && this.tickPositions[0] || 0;
                  return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[t] && this.ticks[t].label)
               },
               unsquish: function () {
                  var t, e, i, n = this.options.labels,
                     r = this.horiz,
                     o = this.tickInterval,
                     s = o,
                     h = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / o),
                     u = n.rotation,
                     p = this.labelMetrics(),
                     f = Number.MAX_VALUE,
                     m = function (t) {
                        return t /= h || 1, t = 1 < t ? Math.ceil(t) : 1, a(t * o)
                     };
                  return r ? (i = !n.staggerLines && !n.step && (c(u) ? [u] : h < S(n.autoRotationLimit, 80) && n.autoRotation)) && d(i, function (i) {
                     var n;
                     (i === u || i && -90 <= i && 90 >= i) && (e = m(Math.abs(p.h / Math.sin(l * i))), n = e + Math.abs(i / 360), n < f && (f = n, t = i, s = e))
                  }) : n.step || (s = m(p.h)), this.autoRotation = i, this.labelRotation = S(t, u), s
               },
               getSlotWidth: function (t) {
                  var e = this.chart,
                     i = this.horiz,
                     n = this.options.labels,
                     r = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                     o = e.margin[3];
                  return t && t.slotWidth || i && 2 > (n.step || 0) && !n.rotation && (this.staggerLines || 1) * this.len / r || !i && (n.style && parseInt(n.style.width, 10) || o && o - e.spacing[3] || .33 * e.chartWidth)
               },
               renderUnsquish: function () {
                  var t, e, i, n = this.chart,
                     r = n.renderer,
                     o = this.tickPositions,
                     a = this.ticks,
                     s = this.options.labels,
                     c = s && s.style || {},
                     l = this.horiz,
                     h = this.getSlotWidth(),
                     u = Math.max(1, Math.round(h - 2 * (s.padding || 5))),
                     p = {},
                     f = this.labelMetrics(),
                     m = s.style && s.style.textOverflow,
                     g = 0;
                  if (b(s.rotation) || (p.rotation = s.rotation || 0), d(o, function (t) {
                        (t = a[t]) && t.label && t.label.textPxLength > g && (g = t.label.textPxLength)
                     }), this.maxLabelLength = g, this.autoRotation) g > u && g > f.h ? p.rotation = this.labelRotation : this.labelRotation = 0;
                  else if (h && (t = u, !m))
                     for (e = "clip", u = o.length; !l && u--;) i = o[u], (i = a[i].label) && (i.styles && "ellipsis" === i.styles.textOverflow ? i.css({
                        textOverflow: "clip"
                     }) : i.textPxLength > h && i.css({
                        width: h + "px"
                     }), i.getBBox().height > this.len / o.length - (f.h - f.f) && (i.specificTextOverflow = "ellipsis"));
                  p.rotation && (t = g > .5 * n.chartHeight ? .33 * n.chartHeight : g, m || (e = "ellipsis")), (this.labelAlign = s.align || this.autoLabelAlign(this.labelRotation)) && (p.align = this.labelAlign), d(o, function (i) {
                     var n = (i = a[i]) && i.label,
                        r = c.width,
                        o = {};
                     n && (n.attr(p), i.shortenLabel ? i.shortenLabel() : t && !r && "nowrap" !== c.whiteSpace && (t < n.textPxLength || "SPAN" === n.element.tagName) ? (o.width = t, m || (o.textOverflow = n.specificTextOverflow || e), n.css(o)) : n.styles && n.styles.width && !o.width && !r && n.css({
                        width: null
                     }), delete n.specificTextOverflow, i.rotation = p.rotation)
                  }, this), this.tickRotCorr = r.rotCorr(f.b, this.labelRotation || 0, 0 !== this.side)
               },
               hasData: function () {
                  return this.hasVisibleSeries || c(this.min) && c(this.max) && this.tickPositions && 0 < this.tickPositions.length
               },
               addTitle: function (t) {
                  var e, i = this.chart.renderer,
                     n = this.horiz,
                     r = this.opposite,
                     o = this.options.title;
                  this.axisTitle || ((e = o.textAlign) || (e = (n ? {
                     low: "left",
                     middle: "center",
                     high: "right"
                  } : {
                     low: r ? "right" : "left",
                     middle: "center",
                     high: r ? "left" : "right"
                  })[o.align]), this.axisTitle = i.text(o.text, 0, 0, o.useHTML).attr({
                     zIndex: 7,
                     rotation: o.rotation || 0,
                     align: e
                  }).addClass("highcharts-axis-title").css(_(o.style)).add(this.axisGroup), this.axisTitle.isNew = !0), o.style.width || this.isRadial || this.axisTitle.css({
                     width: this.len
                  }), this.axisTitle[t ? "show" : "hide"](!0)
               },
               generateTick: function (t) {
                  var e = this.ticks;
                  e[t] ? e[t].addLabel() : e[t] = new P(this, t)
               },
               getOffset: function () {
                  var t, e, i, n = this,
                     r = n.chart,
                     o = r.renderer,
                     a = n.options,
                     s = n.tickPositions,
                     l = n.ticks,
                     h = n.horiz,
                     u = n.side,
                     f = r.inverted && !n.isZAxis ? [1, 0, 3, 2][u] : u,
                     m = 0,
                     g = 0,
                     v = a.title,
                     y = a.labels,
                     x = 0,
                     b = r.axisOffset,
                     _ = (r = r.clipOffset, [-1, 1, 1, -1][u]),
                     w = a.className,
                     M = n.axisParent;
                  t = n.hasData(), n.showAxis = e = t || S(a.showEmpty, !0), n.staggerLines = n.horiz && y.staggerLines, n.axisGroup || (n.gridGroup = o.g("grid").attr({
                     zIndex: a.gridZIndex || 1
                  }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (w || "")).add(M), n.axisGroup = o.g("axis").attr({
                     zIndex: a.zIndex || 2
                  }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (w || "")).add(M), n.labelGroup = o.g("axis-labels").attr({
                     zIndex: y.zIndex || 7
                  }).addClass("highcharts-" + n.coll.toLowerCase() + "-labels " + (w || "")).add(M)), t || n.isLinked ? (d(s, function (t, e) {
                     n.generateTick(t, e)
                  }), n.renderUnsquish(), n.reserveSpaceDefault = 0 === u || 2 === u || {
                     1: "left",
                     3: "right"
                  } [u] === n.labelAlign, S(y.reserveSpace, "center" === n.labelAlign || null, n.reserveSpaceDefault) && d(s, function (t) {
                     x = Math.max(l[t].getLabelSize(), x)
                  }), n.staggerLines && (x *= n.staggerLines), n.labelOffset = x * (n.opposite ? -1 : 1)) : k(l, function (t, e) {
                     t.destroy(), delete l[e]
                  }), v && v.text && !1 !== v.enabled && (n.addTitle(e), e && !1 !== v.reserveSpace && (n.titleOffset = m = n.axisTitle.getBBox()[h ? "height" : "width"], i = v.offset, g = c(i) ? 0 : S(v.margin, h ? 5 : 10))), n.renderLine(), n.offset = _ * S(a.offset, b[u]), n.tickRotCorr = n.tickRotCorr || {
                     x: 0,
                     y: 0
                  }, o = 0 === u ? -n.labelMetrics().h : 2 === u ? n.tickRotCorr.y : 0, g = Math.abs(x) + g, x && (g = g - o + _ * (h ? S(y.y, n.tickRotCorr.y + 8 * _) : y.x)), n.axisTitleMargin = S(i, g), n.getMaxLabelDimensions && (n.maxLabelDimensions = n.getMaxLabelDimensions(l, s)), h = this.tickSize("tick"), b[u] = Math.max(b[u], n.axisTitleMargin + m + _ * n.offset, g, t && s.length && h ? h[0] + _ * n.offset : 0), a = a.offset ? 0 : 2 * Math.floor(n.axisLine.strokeWidth() / 2), r[f] = Math.max(r[f], a), p(this, "afterGetOffset")
               },
               getLinePath: function (t) {
                  var e = this.chart,
                     i = this.opposite,
                     n = this.offset,
                     r = this.horiz,
                     o = this.left + (i ? this.width : 0) + n;
                  n = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
                  return i && (t *= -1), e.renderer.crispLine(["M", r ? this.left : o, r ? n : this.top, "L", r ? e.chartWidth - this.right : o, r ? n : e.chartHeight - this.bottom], t)
               },
               renderLine: function () {
                  this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({
                     stroke: this.options.lineColor,
                     "stroke-width": this.options.lineWidth,
                     zIndex: 7
                  }))
               },
               getTitlePosition: function () {
                  var t = this.horiz,
                     e = this.left,
                     i = this.top,
                     n = this.len,
                     r = this.options.title,
                     o = t ? e : i,
                     a = this.opposite,
                     s = this.offset,
                     c = r.x || 0,
                     l = r.y || 0,
                     h = this.axisTitle,
                     d = this.chart.renderer.fontMetrics(r.style && r.style.fontSize, h);
                  h = Math.max(h.getBBox(null, 0).height - d.h - 1, 0), n = {
                     low: o + (t ? 0 : n),
                     middle: o + n / 2,
                     high: o + (t ? n : 0)
                  } [r.align], e = (t ? i + this.height : e) + (t ? 1 : -1) * (a ? -1 : 1) * this.axisTitleMargin + [-h, h, d.f, -h][this.side];
                  return {
                     x: t ? n + c : e + (a ? this.width : 0) + s + c,
                     y: t ? e + l - (a ? this.height : 0) + s : n + l
                  }
               },
               renderMinorTick: function (t) {
                  var e = this.chart.hasRendered && x(this.oldMin),
                     i = this.minorTicks;
                  i[t] || (i[t] = new P(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
               },
               renderTick: function (t, e) {
                  var i = this.isLinked,
                     n = this.ticks,
                     r = this.chart.hasRendered && x(this.oldMin);
                  (!i || t >= this.min && t <= this.max) && (n[t] || (n[t] = new P(this, t)), r && n[t].isNew && n[t].render(e, !0, -1), n[t].render(e))
               },
               render: function () {
                  var e, n, r = this,
                     o = r.chart,
                     a = r.options,
                     s = r.isLog,
                     c = r.isLinked,
                     l = r.tickPositions,
                     h = r.axisTitle,
                     u = r.ticks,
                     f = r.minorTicks,
                     m = r.alternateBands,
                     g = a.stackLabels,
                     v = a.alternateGridColor,
                     y = r.tickmarkOffset,
                     b = r.axisLine,
                     _ = r.showAxis,
                     w = i(o.renderer.globalAnimation);
                  r.labelEdge.length = 0, r.overlap = !1, d([u, f, m], function (t) {
                     k(t, function (t) {
                        t.isActive = !1
                     })
                  }), (r.hasData() || c) && (r.minorTickInterval && !r.categories && d(r.getMinorTickPositions(), function (t) {
                     r.renderMinorTick(t)
                  }), l.length && (d(l, function (t, e) {
                     r.renderTick(t, e)
                  }), y && (0 === r.min || r.single) && (u[-1] || (u[-1] = new P(r, -1, null, !0)), u[-1].render(-1))), v && d(l, function (i, a) {
                     n = void 0 !== l[a + 1] ? l[a + 1] + y : r.max - y, 0 === a % 2 && i < r.max && n <= r.max + (o.polar ? -y : y) && (m[i] || (m[i] = new t.PlotLineOrBand(r)), e = i + y, m[i].options = {
                        from: s ? r.lin2log(e) : e,
                        to: s ? r.lin2log(n) : n,
                        color: v
                     }, m[i].render(), m[i].isActive = !0)
                  }), r._addedPlotLB || (d((a.plotLines || []).concat(a.plotBands || []), function (t) {
                     r.addPlotBandOrLine(t)
                  }), r._addedPlotLB = !0)), d([u, f, m], function (t) {
                     var e, i = [],
                        n = w.duration;
                     k(t, function (t, e) {
                        t.isActive || (t.render(e, !1, 0), t.isActive = !1, i.push(e))
                     }), C(function () {
                        for (e = i.length; e--;) t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(), delete t[i[e]])
                     }, t !== m && o.hasRendered && n ? n : 0)
                  }), b && (b[b.isPlaced ? "animate" : "attr"]({
                     d: this.getLinePath(b.strokeWidth())
                  }), b.isPlaced = !0, b[_ ? "show" : "hide"](!0)), h && _ && (a = r.getTitlePosition(), x(a.y) ? (h[h.isNew ? "attr" : "animate"](a), h.isNew = !1) : (h.attr("y", -9999), h.isNew = !0)), g && g.enabled && r.renderStackTotals(), r.isDirty = !1, p(this, "afterRender")
               },
               redraw: function () {
                  this.visible && (this.render(), d(this.plotLinesAndBands, function (t) {
                     t.render()
                  })), d(this.series, function (t) {
                     t.isDirty = !0
                  })
               },
               keepProps: "extKey hcEvents names series userMax userMin".split(" "),
               destroy: function (t) {
                  var e, i = this,
                     n = i.stacks,
                     r = i.plotLinesAndBands;
                  if (p(this, "destroy", {
                        keepEvents: t
                     }), t || M(i), k(n, function (t, e) {
                        h(t), n[e] = null
                     }), d([i.ticks, i.minorTicks, i.alternateBands], function (t) {
                        h(t)
                     }), r)
                     for (t = r.length; t--;) r[t].destroy();
                  for (e in d("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" "), function (t) {
                        i[t] && (i[t] = i[t].destroy())
                     }), i.plotLinesAndBandsGroups) i.plotLinesAndBandsGroups[e] = i.plotLinesAndBandsGroups[e].destroy();
                  k(i, function (t, e) {
                     -1 === v(e, i.keepProps) && delete i[e]
                  })
               },
               drawCrosshair: function (t, e) {
                  var i, n, r = this.crosshair,
                     a = S(r.snap, !0),
                     s = this.cross;
                  if (p(this, "drawCrosshair", {
                        e: t,
                        point: e
                     }), t || (t = this.cross && this.cross.e), this.crosshair && !1 !== (c(e) || !a)) {
                     if (a ? c(e) && (n = S(e.crosshairPos, this.isXAxis ? e.plotX : this.len - e.plotY)) : n = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), c(n) && (i = this.getPlotLinePath(e && (this.isXAxis ? e.x : S(e.stackY, e.y)), null, null, null, n) || null), !c(i)) return void this.hideCrosshair();
                     a = this.categories && !this.isRadial, s || (this.cross = s = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (a ? "category " : "thin ") + r.className).attr({
                        zIndex: S(r.zIndex, 2)
                     }).add(), s.attr({
                        stroke: r.color || (a ? o("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                        "stroke-width": S(r.width, 1)
                     }).css({
                        "pointer-events": "none"
                     }), r.dashStyle && s.attr({
                        dashstyle: r.dashStyle
                     })), s.show().attr({
                        d: i
                     }), a && !r.width && s.attr({
                        "stroke-width": this.transA
                     }), this.cross.e = t
                  } else this.hideCrosshair();
                  p(this, "afterDrawCrosshair", {
                     e: t,
                     point: e
                  })
               },
               hideCrosshair: function () {
                  this.cross && this.cross.hide()
               }
            }), t.Axis = T
         }(e);
         return function (t) {
               var e = t.Axis,
                  i = t.getMagnitude,
                  n = t.normalizeTickInterval,
                  r = t.timeUnits;
               e.prototype.getTimeTicks = function () {
                  return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
               }, e.prototype.normalizeTimeTickInterval = function (t, e) {
                  var o = e || [
                     ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                     ["second", [1, 2, 5, 10, 15, 30]],
                     ["minute", [1, 2, 5, 10, 15, 30]],
                     ["hour", [1, 2, 3, 4, 6, 8, 12]],
                     ["day", [1, 2]],
                     ["week", [1, 2]],
                     ["month", [1, 2, 3, 4, 6]],
                     ["year", null]
                  ];
                  e = o[o.length - 1];
                  var a, s = r[e[0]],
                     c = e[1];
                  for (a = 0; a < o.length && (e = o[a], s = r[e[0]], c = e[1], !(o[a + 1] && t <= (s * c[c.length - 1] + r[o[a + 1][0]]) / 2)); a++);
                  return s === r.year && t < 5 * s && (c = [1, 2, 5]), t = n(t / s, c, "year" === e[0] ? Math.max(i(t / s), 1) : 1), {
                     unitRange: s,
                     count: t,
                     unitName: e[0]
                  }
               }
            }(e),
            function (t) {
               var e = t.Axis,
                  i = t.getMagnitude,
                  n = t.map,
                  r = t.normalizeTickInterval,
                  o = t.pick;
               e.prototype.getLogTickPositions = function (t, e, a, s) {
                  var c = this.options,
                     l = this.len,
                     h = [];
                  if (s || (this._minorAutoInterval = null), .5 <= t) t = Math.round(t), h = this.getLinearTickPositions(t, e, a);
                  else if (.08 <= t) {
                     var d, u, p, f, m;
                     for (l = Math.floor(e), c = .3 < t ? [1, 2, 4] : .15 < t ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; l < a + 1 && !m; l++)
                        for (u = c.length, d = 0; d < u && !m; d++) p = this.log2lin(this.lin2log(l) * c[d]), p > e && (!s || f <= a) && void 0 !== f && h.push(f), f > a && (m = !0), f = p
                  } else e = this.lin2log(e), a = this.lin2log(a), t = s ? this.getMinorTickInterval() : c.tickInterval, t = o("auto" === t ? null : t, this._minorAutoInterval, c.tickPixelInterval / (s ? 5 : 1) * (a - e) / ((s ? l / this.tickPositions.length : l) || 1)), t = r(t, null, i(t)), h = n(this.getLinearTickPositions(t, e, a), this.log2lin), s || (this._minorAutoInterval = t / 5);
                  return s || (this.tickInterval = t), h
               }, e.prototype.log2lin = function (t) {
                  return Math.log(t) / Math.LN10
               }, e.prototype.lin2log = function (t) {
                  return Math.pow(10, t)
               }
            }(e),
            function (t, e) {
               var i = t.arrayMax,
                  n = t.arrayMin,
                  r = t.defined,
                  o = t.destroyObjectProperties,
                  a = t.each,
                  s = t.erase,
                  c = t.merge,
                  l = t.pick;
               t.PlotLineOrBand = function (t, e) {
                  this.axis = t, e && (this.options = e, this.id = e.id)
               }, t.PlotLineOrBand.prototype = {
                  render: function () {
                     t.fireEvent(this, "render");
                     var e = this,
                        i = e.axis,
                        n = i.horiz,
                        o = e.options,
                        a = o.label,
                        s = e.label,
                        h = o.to,
                        d = o.from,
                        u = o.value,
                        p = r(d) && r(h),
                        f = r(u),
                        m = e.svgElem,
                        g = !m,
                        v = [],
                        y = o.color,
                        x = l(o.zIndex, 0),
                        b = o.events,
                        _ = (v = {
                           class: "highcharts-plot-" + (p ? "band " : "line ") + (o.className || "")
                        }, {}),
                        w = i.chart.renderer,
                        k = p ? "bands" : "lines";
                     if (i.isLog && (d = i.log2lin(d), h = i.log2lin(h), u = i.log2lin(u)), f ? (v.stroke = y, v["stroke-width"] = o.width, o.dashStyle && (v.dashstyle = o.dashStyle)) : p && (y && (v.fill = y), o.borderWidth && (v.stroke = o.borderColor, v["stroke-width"] = o.borderWidth)), _.zIndex = x, k += "-" + x, (y = i.plotLinesAndBandsGroups[k]) || (i.plotLinesAndBandsGroups[k] = y = w.g("plot-" + k).attr(_).add()), g && (e.svgElem = m = w.path().attr(v).add(y)), f) v = i.getPlotLinePath(u, m.strokeWidth());
                     else {
                        if (!p) return;
                        v = i.getPlotBandPath(d, h, o)
                     }
                     return g && v && v.length ? (m.attr({
                        d: v
                     }), b && t.objectEach(b, function (t, i) {
                        m.on(i, function (t) {
                           b[i].apply(e, [t])
                        })
                     })) : m && (v ? (m.show(), m.animate({
                        d: v
                     })) : (m.hide(), s && (e.label = s = s.destroy()))), a && r(a.text) && v && v.length && 0 < i.width && 0 < i.height && !v.isFlat ? (a = c({
                        align: n && p && "center",
                        x: n ? !p && 4 : 10,
                        verticalAlign: !n && p && "middle",
                        y: n ? p ? 16 : 10 : p ? 6 : -4,
                        rotation: n && !p && 90
                     }, a), this.renderLabel(a, v, p, x)) : s && s.hide(), e
                  },
                  renderLabel: function (t, e, r, o) {
                     var a = this.label,
                        s = this.axis.chart.renderer;
                     a || (a = {
                        align: t.textAlign || t.align,
                        rotation: t.rotation,
                        class: "highcharts-plot-" + (r ? "band" : "line") + "-label " + (t.className || "")
                     }, a.zIndex = o, this.label = a = s.text(t.text, 0, 0, t.useHTML).attr(a).add(), a.css(t.style)), o = e.xBounds || [e[1], e[4], r ? e[6] : e[1]], e = e.yBounds || [e[2], e[5], r ? e[7] : e[2]], r = n(o), s = n(e), a.align(t, !1, {
                        x: r,
                        y: s,
                        width: i(o) - r,
                        height: i(e) - s
                     }), a.show()
                  },
                  destroy: function () {
                     s(this.axis.plotLinesAndBands, this), delete this.axis, o(this)
                  }
               }, t.extend(e.prototype, {
                  getPlotBandPath: function (t, e) {
                     var i, n = this.getPlotLinePath(e, null, null, !0),
                        r = this.getPlotLinePath(t, null, null, !0),
                        o = [],
                        a = this.horiz,
                        s = 1;
                     if (t = t < this.min && e < this.min || t > this.max && e > this.max, r && n)
                        for (t && (i = r.toString() === n.toString(), s = 0), t = 0; t < r.length; t += 6) a && n[t + 1] === r[t + 1] ? (n[t + 1] += s, n[t + 4] += s) : a || n[t + 2] !== r[t + 2] || (n[t + 2] += s, n[t + 5] += s), o.push("M", r[t + 1], r[t + 2], "L", r[t + 4], r[t + 5], n[t + 4], n[t + 5], n[t + 1], n[t + 2], "z"), o.isFlat = i;
                     return o
                  },
                  addPlotBand: function (t) {
                     return this.addPlotBandOrLine(t, "plotBands")
                  },
                  addPlotLine: function (t) {
                     return this.addPlotBandOrLine(t, "plotLines")
                  },
                  addPlotBandOrLine: function (e, i) {
                     var n = new t.PlotLineOrBand(this, e).render(),
                        r = this.userOptions;
                     return n && (i && (r[i] = r[i] || [], r[i].push(e)), this.plotLinesAndBands.push(n)), n
                  },
                  removePlotBandOrLine: function (t) {
                     for (var e = this.plotLinesAndBands, i = this.options, n = this.userOptions, r = e.length; r--;) e[r].id === t && e[r].destroy();
                     a([i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []], function (e) {
                        for (r = e.length; r--;) e[r].id === t && s(e, e[r])
                     })
                  },
                  removePlotBand: function (t) {
                     this.removePlotBandOrLine(t)
                  },
                  removePlotLine: function (t) {
                     this.removePlotBandOrLine(t)
                  }
               })
            }(e, i),
            function (t) {
               var e = t.doc,
                  i = t.each,
                  n = t.extend,
                  r = t.format,
                  o = t.isNumber,
                  a = t.map,
                  s = t.merge,
                  c = t.pick,
                  l = t.splat,
                  h = t.syncTimeout,
                  d = t.timeUnits;
               t.Tooltip = function () {
                  this.init.apply(this, arguments)
               }, t.Tooltip.prototype = {
                  init: function (t, e) {
                     this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                        x: 0,
                        y: 0
                     }, this.isHidden = !0, this.split = e.split && !t.inverted, this.shared = e.shared || this.split, this.outside = e.outside && !this.split
                  },
                  cleanSplit: function (t) {
                     i(this.chart.series, function (e) {
                        var i = e && e.tt;
                        i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                     })
                  },
                  getLabel: function () {
                     var e, i = this.chart.renderer,
                        n = this.options;
                     return this.label || (this.outside && (this.container = e = t.doc.createElement("div"), e.className = "highcharts-tooltip-container", t.css(e, {
                        position: "absolute",
                        top: "1px",
                        pointerEvents: n.style && n.style.pointerEvents
                     }), t.doc.body.appendChild(e), this.renderer = i = new t.Renderer(e, 0, 0)), this.split ? this.label = i.g("tooltip") : (this.label = i.label("", 0, 0, n.shape || "callout", null, null, n.useHTML, null, "tooltip").attr({
                        padding: n.padding,
                        r: n.borderRadius
                     }), this.label.attr({
                        fill: n.backgroundColor,
                        "stroke-width": n.borderWidth
                     }).css(n.style).shadow(n.shadow)), this.outside && (this.label.attr({
                        x: this.distance,
                        y: this.distance
                     }), this.label.xSetter = function (t) {
                        e.style.left = t + "px"
                     }, this.label.ySetter = function (t) {
                        e.style.top = t + "px"
                     }), this.label.attr({
                        zIndex: 8
                     }).add()), this.label
                  },
                  update: function (t) {
                     this.destroy(), s(!0, this.chart.options.tooltip.userOptions, t), this.init(this.chart, s(!0, this.options, t))
                  },
                  destroy: function () {
                     this.label && (this.label = this.label.destroy()), this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), t.discardElement(this.container)), t.clearTimeout(this.hideTimer), t.clearTimeout(this.tooltipTimeout)
                  },
                  move: function (e, i, r, o) {
                     var a = this,
                        s = a.now,
                        c = !1 !== a.options.animation && !a.isHidden && (1 < Math.abs(e - s.x) || 1 < Math.abs(i - s.y)),
                        l = a.followPointer || 1 < a.len;
                     n(s, {
                        x: c ? (2 * s.x + e) / 3 : e,
                        y: c ? (s.y + i) / 2 : i,
                        anchorX: l ? void 0 : c ? (2 * s.anchorX + r) / 3 : r,
                        anchorY: l ? void 0 : c ? (s.anchorY + o) / 2 : o
                     }), a.getLabel().attr(s), c && (t.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                        a && a.move(e, i, r, o)
                     }, 32))
                  },
                  hide: function (e) {
                     var i = this;
                     t.clearTimeout(this.hideTimer), e = c(e, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = h(function () {
                        i.getLabel()[e ? "fadeOut" : "hide"](), i.isHidden = !0
                     }, e))
                  },
                  getAnchor: function (t, e) {
                     var n, r, o = this.chart,
                        s = o.pointer,
                        c = o.inverted,
                        h = o.plotTop,
                        d = o.plotLeft,
                        u = 0,
                        p = 0;
                     return t = l(t), this.followPointer && e ? (void 0 === e.chartX && (e = s.normalize(e)), t = [e.chartX - o.plotLeft, e.chartY - h]) : t[0].tooltipPos ? t = t[0].tooltipPos : (i(t, function (t) {
                        n = t.series.yAxis, r = t.series.xAxis, u += t.plotX + (!c && r ? r.left - d : 0), p += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!c && n ? n.top - h : 0)
                     }), u /= t.length, p /= t.length, t = [c ? o.plotWidth - p : u, this.shared && !c && 1 < t.length && e ? e.chartY - h : c ? o.plotHeight - u : p]), a(t, Math.round)
                  },
                  getPosition: function (t, i, n) {
                     var r, o = this.chart,
                        a = this.distance,
                        s = {},
                        l = o.inverted && n.h || 0,
                        h = this.outside,
                        d = h ? e.documentElement.clientWidth - 2 * a : o.chartWidth,
                        u = h ? Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.documentElement.clientHeight) : o.chartHeight,
                        p = o.pointer.chartPosition,
                        f = ["y", u, i, (h ? p.top - a : 0) + n.plotY + o.plotTop, h ? 0 : o.plotTop, h ? u : o.plotTop + o.plotHeight],
                        m = ["x", d, t, (h ? p.left - a : 0) + n.plotX + o.plotLeft, h ? 0 : o.plotLeft, h ? d : o.plotLeft + o.plotWidth],
                        g = !this.followPointer && c(n.ttBelow, !o.inverted === !!n.negative),
                        v = function (t, e, i, n, r, o) {
                           var c = i < n - a,
                              h = n + a + i < e,
                              d = n - a - i;
                           if (n += a, g && h) s[t] = n;
                           else if (!g && c) s[t] = d;
                           else if (c) s[t] = Math.min(o - i, 0 > d - l ? d : d - l);
                           else {
                              if (!h) return !1;
                              s[t] = Math.max(r, n + l + i > e ? n : n + l)
                           }
                        },
                        y = function (t, e, i, n) {
                           var r;
                           return n < a || n > e - a ? r = !1 : s[t] = n < i / 2 ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2, r
                        },
                        x = function (t) {
                           var e = f;
                           f = m, m = e, r = t
                        },
                        b = function () {
                           !1 !== v.apply(0, f) ? !1 !== y.apply(0, m) || r || (x(!0), b()) : r ? s.x = s.y = 0 : (x(!0), b())
                        };
                     return (o.inverted || 1 < this.len) && x(), b(), s
                  },
                  defaultFormatter: function (t) {
                     var e, i = this.points || l(this);
                     return e = [t.tooltipFooterHeaderFormatter(i[0])], e = e.concat(t.bodyFormatter(i)), e.push(t.tooltipFooterHeaderFormatter(i[0], !0)), e
                  },
                  refresh: function (e, n) {
                     var r, o, a, s = this.options,
                        h = e,
                        d = {},
                        u = [];
                     r = s.formatter || this.defaultFormatter;
                     var p;
                     d = this.shared;
                     s.enabled && (t.clearTimeout(this.hideTimer), this.followPointer = l(h)[0].series.tooltipOptions.followPointer, a = this.getAnchor(h, n), n = a[0], o = a[1], !d || h.series && h.series.noSharedTooltip ? d = h.getLabelConfig() : (i(h, function (t) {
                        t.setState("hover"), u.push(t.getLabelConfig())
                     }), d = {
                        x: h[0].category,
                        y: h[0].y
                     }, d.points = u, h = h[0]), this.len = u.length, d = r.call(d, this), p = h.series, this.distance = c(p.tooltipOptions.distance, 16), !1 === d ? this.hide() : (r = this.getLabel(), this.isHidden && r.attr({
                        opacity: 1
                     }).show(), this.split ? this.renderSplit(d, l(e)) : (s.style.width || r.css({
                        width: this.chart.spacingBox.width
                     }), r.attr({
                        text: d && d.join ? d.join("") : d
                     }), r.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + c(h.colorIndex, p.colorIndex)), r.attr({
                        stroke: s.borderColor || h.color || p.color || "#666666"
                     }), this.updatePosition({
                        plotX: n,
                        plotY: o,
                        negative: h.negative,
                        ttBelow: h.ttBelow,
                        h: a[2] || 0
                     })), this.isHidden = !1))
                  },
                  renderSplit: function (e, n) {
                     var r, o = this,
                        a = [],
                        s = this.chart,
                        l = s.renderer,
                        h = !0,
                        d = this.options,
                        u = 0,
                        p = this.getLabel(),
                        f = s.plotTop;
                     t.isString(e) && (e = [!1, e]), i(e.slice(0, n.length + 1), function (t, e) {
                        if (!1 !== t) {
                           e = n[e - 1] || {
                              isHeader: !0,
                              plotX: n[0].plotX
                           };
                           var i = e.series || o,
                              m = i.tt,
                              g = e.series || {},
                              v = "highcharts-color-" + c(e.colorIndex, g.colorIndex, "none");
                           m || (i.tt = m = l.label(null, null, null, "callout", null, null, d.useHTML).addClass("highcharts-tooltip-box " + v + (e.isHeader ? " highcharts-tooltip-header" : "")).attr({
                              padding: d.padding,
                              r: d.borderRadius,
                              fill: d.backgroundColor,
                              stroke: d.borderColor || e.color || g.color || "#333333",
                              "stroke-width": d.borderWidth
                           }).add(p)), m.isActive = !0, m.attr({
                              text: t
                           }), m.css(d.style).shadow(d.shadow), t = m.getBBox(), g = t.width + m.strokeWidth(), e.isHeader ? (u = t.height, s.xAxis[0].opposite && (r = !0, f -= u), g = Math.max(0, Math.min(e.plotX + s.plotLeft - g / 2, s.chartWidth + (s.scrollablePixels ? s.scrollablePixels - s.marginRight : 0) - g))) : g = e.plotX + s.plotLeft - c(d.distance, 16) - g, 0 > g && (h = !1), t = (e.series && e.series.yAxis && e.series.yAxis.pos) + (e.plotY || 0), t -= f, e.isHeader && (t = r ? -u : s.plotHeight + u), a.push({
                              target: t,
                              rank: e.isHeader ? 1 : 0,
                              size: i.tt.getBBox().height + 1,
                              point: e,
                              x: g,
                              tt: m
                           })
                        }
                     }), this.cleanSplit(), t.distribute(a, s.plotHeight + u), i(a, function (t) {
                        var e = t.point,
                           i = e.series;
                        t.tt.attr({
                           visibility: void 0 === t.pos ? "hidden" : "inherit",
                           x: h || e.isHeader ? t.x : e.plotX + s.plotLeft + c(d.distance, 16),
                           y: t.pos + f,
                           anchorX: e.isHeader ? e.plotX + s.plotLeft : e.plotX + i.xAxis.pos,
                           anchorY: e.isHeader ? s.plotTop + s.plotHeight / 2 : e.plotY + i.yAxis.pos
                        })
                     })
                  },
                  updatePosition: function (t) {
                     var e, i = this.chart,
                        n = this.getLabel(),
                        r = (this.options.positioner || this.getPosition).call(this, n.width, n.height, t),
                        o = t.plotX + i.plotLeft;
                     t = t.plotY + i.plotTop, this.outside && (e = (this.options.borderWidth || 0) + 2 * this.distance, this.renderer.setSize(n.width + e, n.height + e, !1), o += i.pointer.chartPosition.left - r.x, t += i.pointer.chartPosition.top - r.y), this.move(Math.round(r.x), Math.round(r.y || 0), o, t)
                  },
                  getDateFormat: function (t, e, i, n) {
                     var r, o, a = this.chart.time,
                        s = a.dateFormat("%m-%d %H:%M:%S.%L", e),
                        c = {
                           millisecond: 15,
                           second: 12,
                           minute: 9,
                           hour: 6,
                           day: 3
                        },
                        l = "millisecond";
                     for (o in d) {
                        if (t === d.week && +a.dateFormat("%w", e) === i && "00:00:00.000" === s.substr(6)) {
                           o = "week";
                           break
                        }
                        if (d[o] > t) {
                           o = l;
                           break
                        }
                        if (c[o] && s.substr(c[o]) !== "01-01 00:00:00.000".substr(c[o])) break;
                        "week" !== o && (l = o)
                     }
                     return o && (r = a.resolveDTLFormat(n[o]).main), r
                  },
                  getXDateFormat: function (t, e, i) {
                     e = e.dateTimeLabelFormats;
                     var n = i && i.closestPointRange;
                     return (n ? this.getDateFormat(n, t.x, i.options.startOfWeek, e) : e.day) || e.year
                  },
                  tooltipFooterHeaderFormatter: function (t, e) {
                     e = e ? "footer" : "header";
                     var n = t.series,
                        a = n.tooltipOptions,
                        s = a.xDateFormat,
                        c = n.xAxis,
                        l = c && "datetime" === c.options.type && o(t.key),
                        h = a[e + "Format"];
                     return l && !s && (s = this.getXDateFormat(t, a, c)), l && s && i(t.point && t.point.tooltipDateKeys || ["key"], function (t) {
                        h = h.replace("{point." + t + "}", "{point." + t + ":" + s + "}")
                     }), r(h, {
                        point: t,
                        series: n
                     }, this.chart.time)
                  },
                  bodyFormatter: function (t) {
                     return a(t, function (t) {
                        var e = t.series.tooltipOptions;
                        return (e[(t.point.formatPrefix || "point") + "Formatter"] || t.point.tooltipFormatter).call(t.point, e[(t.point.formatPrefix || "point") + "Format"])
                     })
                  }
               }
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.attr,
                  n = t.charts,
                  r = t.color,
                  o = t.css,
                  a = t.defined,
                  s = t.each,
                  c = t.extend,
                  l = t.find,
                  h = t.fireEvent,
                  d = t.isNumber,
                  u = t.isObject,
                  p = t.offset,
                  f = t.pick,
                  m = t.splat,
                  g = t.Tooltip;
               t.Pointer = function (t, e) {
                  this.init(t, e)
               }, t.Pointer.prototype = {
                  init: function (t, e) {
                     this.options = e, this.chart = t, this.runChartClick = e.chart.events && !!e.chart.events.click, this.pinchDown = [], this.lastValidTouch = {}, g && (t.tooltip = new g(t, e.tooltip), this.followTouchMove = f(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
                  },
                  zoomOption: function (t) {
                     var e = this.chart,
                        i = e.options.chart,
                        n = i.zoomType || "";
                     e = e.inverted;
                     /touch/.test(t.type) && (n = f(i.pinchType, n)), this.zoomX = t = /x/.test(n), this.zoomY = n = /y/.test(n), this.zoomHor = t && !e || n && e, this.zoomVert = n && !e || t && e, this.hasZoom = t || n
                  },
                  normalize: function (t, e) {
                     var i;
                     return i = t.touches ? t.touches.length ? t.touches.item(0) : t.changedTouches[0] : t, e || (this.chartPosition = e = p(this.chart.container)), c(t, {
                        chartX: Math.round(i.pageX - e.left),
                        chartY: Math.round(i.pageY - e.top)
                     })
                  },
                  getCoordinates: function (t) {
                     var e = {
                        xAxis: [],
                        yAxis: []
                     };
                     return s(this.chart.axes, function (i) {
                        e[i.isXAxis ? "xAxis" : "yAxis"].push({
                           axis: i,
                           value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                        })
                     }), e
                  },
                  findNearestKDPoint: function (t, e, i) {
                     var n;
                     return s(t, function (t) {
                        var r = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y");
                        if (t = t.searchPoint(i, r), (r = u(t, !0)) && !(r = !u(n, !0))) {
                           r = n.distX - t.distX;
                           var o = n.dist - t.dist,
                              a = (t.series.group && t.series.group.zIndex) - (n.series.group && n.series.group.zIndex);
                           r = 0 < (0 !== r && e ? r : 0 !== o ? o : 0 !== a ? a : n.series.index > t.series.index ? -1 : 1)
                        }
                        r && (n = t)
                     }), n
                  },
                  getPointFromEvent: function (t) {
                     t = t.target;
                     for (var e; t && !e;) e = t.point, t = t.parentNode;
                     return e
                  },
                  getChartCoordinatesFromPoint: function (t, e) {
                     var i = t.series,
                        n = i.xAxis,
                        r = (i = i.yAxis, f(t.clientX, t.plotX)),
                        o = t.shapeArgs;
                     return n && i ? e ? {
                        chartX: n.len + n.pos - r,
                        chartY: i.len + i.pos - t.plotY
                     } : {
                        chartX: r + n.pos,
                        chartY: t.plotY + i.pos
                     } : o && o.x && o.y ? {
                        chartX: o.x,
                        chartY: o.y
                     } : void 0
                  },
                  getHoverData: function (e, i, n, r, o, a, c) {
                     var h, d = [],
                        p = c && c.isBoosting;
                     return r = !(!r || !e), c = i && !i.stickyTracking ? [i] : t.grep(n, function (t) {
                        return t.visible && !(!o && t.directTouch) && f(t.options.enableMouseTracking, !0) && t.stickyTracking
                     }), i = (h = r ? e : this.findNearestKDPoint(c, o, a)) && h.series, h && (o && !i.noSharedTooltip ? (c = t.grep(n, function (t) {
                        return t.visible && !(!o && t.directTouch) && f(t.options.enableMouseTracking, !0) && !t.noSharedTooltip
                     }), s(c, function (t) {
                        var e = l(t.points, function (t) {
                           return t.x === h.x && !t.isNull
                        });
                        u(e) && (p && (e = t.getPoint(e)), d.push(e))
                     })) : d.push(h)), {
                        hoverPoint: h,
                        hoverSeries: i,
                        hoverPoints: d
                     }
                  },
                  runPointActions: function (i, r) {
                     var o, a = this.chart,
                        c = a.tooltip && a.tooltip.options.enabled ? a.tooltip : void 0,
                        l = !!c && c.shared,
                        h = r || a.hoverPoint,
                        d = h && h.series || a.hoverSeries;
                     d = this.getHoverData(h, d, a.series, "touchmove" !== i.type && (!!r || d && d.directTouch && this.isDirectTouch), l, i, {
                        isBoosting: a.isBoosting
                     }), h = d.hoverPoint;
                     if (o = d.hoverPoints, r = (d = d.hoverSeries) && d.tooltipOptions.followPointer, l = l && d && !d.noSharedTooltip, h && (h !== a.hoverPoint || c && c.isHidden)) {
                        if (s(a.hoverPoints || [], function (e) {
                              -1 === t.inArray(e, o) && e.setState()
                           }), s(o || [], function (t) {
                              t.setState("hover")
                           }), a.hoverSeries !== d && d.onMouseOver(), a.hoverPoint && a.hoverPoint.firePointEvent("mouseOut"), !h.series) return;
                        h.firePointEvent("mouseOver"), a.hoverPoints = o, a.hoverPoint = h, c && c.refresh(l ? o : h, i)
                     } else r && c && !c.isHidden && (h = c.getAnchor([{}], i), c.updatePosition({
                        plotX: h[0],
                        plotY: h[1]
                     }));
                     this.unDocMouseMove || (this.unDocMouseMove = e(a.container.ownerDocument, "mousemove", function (e) {
                        var i = n[t.hoverChartIndex];
                        i && i.pointer.onDocumentMouseMove(e)
                     })), s(a.axes, function (e) {
                        var n = f(e.crosshair.snap, !0),
                           r = n ? t.find(o, function (t) {
                              return t.series[e.coll] === e
                           }) : void 0;
                        r || !n ? e.drawCrosshair(i, r) : e.hideCrosshair()
                     })
                  },
                  reset: function (t, e) {
                     var i = this.chart,
                        n = i.hoverSeries,
                        r = i.hoverPoint,
                        o = i.hoverPoints,
                        a = i.tooltip,
                        c = a && a.shared ? o : r;
                     t && c && s(m(c), function (e) {
                        e.series.isCartesian && void 0 === e.plotX && (t = !1)
                     }), t ? a && c && (a.refresh(c), a.shared && o ? s(o, function (t) {
                        t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t))
                     }) : r && (r.setState(r.state, !0), s(i.axes, function (t) {
                        t.crosshair && t.drawCrosshair(null, r)
                     }))) : (r && r.onMouseOut(), o && s(o, function (t) {
                        t.setState()
                     }), n && n.onMouseOut(), a && a.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), s(i.axes, function (t) {
                        t.hideCrosshair()
                     }), this.hoverX = i.hoverPoints = i.hoverPoint = null)
                  },
                  scaleGroups: function (t, e) {
                     var i, n = this.chart;
                     s(n.series, function (r) {
                        i = t || r.getPlotBox(), r.xAxis && r.xAxis.zoomEnabled && r.group && (r.group.attr(i), r.markerGroup && (r.markerGroup.attr(i), r.markerGroup.clip(e ? n.clipRect : null)), r.dataLabelsGroup && r.dataLabelsGroup.attr(i))
                     }), n.clipRect.attr(e || n.clipBox)
                  },
                  dragStart: function (t) {
                     var e = this.chart;
                     e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
                  },
                  drag: function (t) {
                     var e, i = this.chart,
                        n = i.options.chart,
                        o = t.chartX,
                        a = t.chartY,
                        s = this.zoomHor,
                        c = this.zoomVert,
                        l = i.plotLeft,
                        h = i.plotTop,
                        d = i.plotWidth,
                        u = i.plotHeight,
                        p = this.selectionMarker,
                        f = this.mouseDownX,
                        m = this.mouseDownY,
                        g = n.panKey && t[n.panKey + "Key"];
                     p && p.touch || (o < l ? o = l : o > l + d && (o = l + d), a < h ? a = h : a > h + u && (a = h + u), this.hasDragged = Math.sqrt(Math.pow(f - o, 2) + Math.pow(m - a, 2)), 10 < this.hasDragged && (e = i.isInsidePlot(f - l, m - h), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !g && !p && (this.selectionMarker = p = i.renderer.rect(l, h, s ? 1 : d, c ? 1 : u, 0).attr({
                        fill: n.selectionMarkerFill || r("#335cad").setOpacity(.25).get(),
                        class: "highcharts-selection-marker",
                        zIndex: 7
                     }).add()), p && s && (o -= f, p.attr({
                        width: Math.abs(o),
                        x: (0 < o ? 0 : o) + f
                     })), p && c && (o = a - m, p.attr({
                        height: Math.abs(o),
                        y: (0 < o ? 0 : o) + m
                     })), e && !p && n.panning && i.pan(t, n.panning)))
                  },
                  drop: function (t) {
                     var e = this,
                        i = this.chart,
                        n = this.hasPinched;
                     if (this.selectionMarker) {
                        var r, l = {
                              originalEvent: t,
                              xAxis: [],
                              yAxis: []
                           },
                           u = this.selectionMarker,
                           p = u.attr ? u.attr("x") : u.x,
                           f = u.attr ? u.attr("y") : u.y,
                           m = u.attr ? u.attr("width") : u.width,
                           g = u.attr ? u.attr("height") : u.height;
                        (this.hasDragged || n) && (s(i.axes, function (i) {
                           if (i.zoomEnabled && a(i.min) && (n || e[{
                                 xAxis: "zoomX",
                                 yAxis: "zoomY"
                              } [i.coll]])) {
                              var o = i.horiz,
                                 s = "touchend" === t.type ? i.minPixelPadding : 0,
                                 c = i.toValue((o ? p : f) + s);
                              o = i.toValue((o ? p + m : f + g) - s);
                              l[i.coll].push({
                                 axis: i,
                                 min: Math.min(c, o),
                                 max: Math.max(c, o)
                              }), r = !0
                           }
                        }), r && h(i, "selection", l, function (t) {
                           i.zoom(c(t, n ? {
                              animation: !1
                           } : null))
                        })), d(i.index) && (this.selectionMarker = this.selectionMarker.destroy()), n && this.scaleGroups()
                     }
                     i && d(i.index) && (o(i.container, {
                        cursor: i._cursor
                     }), i.cancelClick = 10 < this.hasDragged, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                  },
                  onContainerMouseDown: function (t) {
                     t = this.normalize(t), 2 !== t.button && (this.zoomOption(t), t.preventDefault && t.preventDefault(), this.dragStart(t))
                  },
                  onDocumentMouseUp: function (e) {
                     n[t.hoverChartIndex] && n[t.hoverChartIndex].pointer.drop(e)
                  },
                  onDocumentMouseMove: function (t) {
                     var e = this.chart,
                        i = this.chartPosition;
                     t = this.normalize(t, i), !i || this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.reset()
                  },
                  onContainerMouseLeave: function (e) {
                     var i = n[t.hoverChartIndex];
                     i && (e.relatedTarget || e.toElement) && (i.pointer.reset(), i.pointer.chartPosition = null)
                  },
                  onContainerMouseMove: function (e) {
                     var i = this.chart;
                     a(t.hoverChartIndex) && n[t.hoverChartIndex] && n[t.hoverChartIndex].mouseIsDown || (t.hoverChartIndex = i.index), e = this.normalize(e), e.returnValue = !1, "mousedown" === i.mouseIsDown && this.drag(e), !this.inClass(e.target, "highcharts-tracker") && !i.isInsidePlot(e.chartX - i.plotLeft, e.chartY - i.plotTop) || i.openMenu || this.runPointActions(e)
                  },
                  inClass: function (t, e) {
                     for (var n; t;) {
                        if (n = i(t, "class")) {
                           if (-1 !== n.indexOf(e)) return !0;
                           if (-1 !== n.indexOf("highcharts-container")) return !1
                        }
                        t = t.parentNode
                     }
                  },
                  onTrackerMouseOut: function (t) {
                     var e = this.chart.hoverSeries;
                     t = t.relatedTarget || t.toElement, this.isDirectTouch = !1, !e || !t || e.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) && this.inClass(t, "highcharts-tracker") || e.onMouseOut()
                  },
                  onContainerClick: function (t) {
                     var e = this.chart,
                        i = e.hoverPoint,
                        n = e.plotLeft,
                        r = e.plotTop;
                     t = this.normalize(t), e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (h(i.series, "click", c(t, {
                        point: i
                     })), e.hoverPoint && i.firePointEvent("click", t)) : (c(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - n, t.chartY - r) && h(e, "click", t)))
                  },
                  setDOMEvents: function () {
                     var i = this,
                        n = i.chart.container,
                        r = n.ownerDocument;
                     n.onmousedown = function (t) {
                        i.onContainerMouseDown(t)
                     }, n.onmousemove = function (t) {
                        i.onContainerMouseMove(t)
                     }, n.onclick = function (t) {
                        i.onContainerClick(t)
                     }, this.unbindContainerMouseLeave = e(n, "mouseleave", i.onContainerMouseLeave), t.unbindDocumentMouseUp || (t.unbindDocumentMouseUp = e(r, "mouseup", i.onDocumentMouseUp)), t.hasTouch && (n.ontouchstart = function (t) {
                        i.onContainerTouchStart(t)
                     }, n.ontouchmove = function (t) {
                        i.onContainerTouchMove(t)
                     }, t.unbindDocumentTouchEnd || (t.unbindDocumentTouchEnd = e(r, "touchend", i.onDocumentTouchEnd)))
                  },
                  destroy: function () {
                     var e = this;
                     e.unDocMouseMove && e.unDocMouseMove(), this.unbindContainerMouseLeave(), t.chartCount || (t.unbindDocumentMouseUp && (t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()), t.unbindDocumentTouchEnd && (t.unbindDocumentTouchEnd = t.unbindDocumentTouchEnd())), clearInterval(e.tooltipTimeout), t.objectEach(e, function (t, i) {
                        e[i] = null
                     })
                  }
               }
            }(e),
            function (t) {
               var e = t.charts,
                  i = t.each,
                  n = t.extend,
                  r = t.map,
                  o = t.noop,
                  a = t.pick;
               n(t.Pointer.prototype, {
                  pinchTranslate: function (t, e, i, n, r, o) {
                     this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, n, r, o), this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, n, r, o)
                  },
                  pinchTranslateDirection: function (t, e, i, n, r, o, a, s) {
                     var c, l, h, d = this.chart,
                        u = t ? "x" : "y",
                        p = t ? "X" : "Y",
                        f = "chart" + p,
                        m = t ? "width" : "height",
                        g = d["plot" + (t ? "Left" : "Top")],
                        v = s || 1,
                        y = d.inverted,
                        x = d.bounds[t ? "h" : "v"],
                        b = 1 === e.length,
                        _ = e[0][f],
                        w = i[0][f],
                        k = !b && e[1][f],
                        S = !b && i[1][f];
                     i = function () {
                        !b && 20 < Math.abs(_ - k) && (v = s || Math.abs(w - S) / Math.abs(_ - k)), l = (g - w) / v + _, c = d["plot" + (t ? "Width" : "Height")] / v
                     }, i(), e = l, e < x.min ? (e = x.min, h = !0) : e + c > x.max && (e = x.max - c, h = !0), h ? (w -= .8 * (w - a[u][0]), b || (S -= .8 * (S - a[u][1])), i()) : a[u] = [w, S], y || (o[u] = l - g, o[m] = c), o = y ? 1 / v : v, r[m] = c, r[u] = e, n[y ? t ? "scaleY" : "scaleX" : "scale" + p] = v, n["translate" + p] = o * g + (w - o * _)
                  },
                  pinch: function (t) {
                     var e = this,
                        s = e.chart,
                        c = e.pinchDown,
                        l = t.touches,
                        h = l.length,
                        d = e.lastValidTouch,
                        u = e.hasZoom,
                        p = e.selectionMarker,
                        f = {},
                        m = 1 === h && (e.inClass(t.target, "highcharts-tracker") && s.runTrackerClick || e.runChartClick),
                        g = {};
                     1 < h && (e.initiated = !0), u && e.initiated && !m && t.preventDefault(), r(l, function (t) {
                        return e.normalize(t)
                     }), "touchstart" === t.type ? (i(l, function (t, e) {
                        c[e] = {
                           chartX: t.chartX,
                           chartY: t.chartY
                        }
                     }), d.x = [c[0].chartX, c[1] && c[1].chartX], d.y = [c[0].chartY, c[1] && c[1].chartY], i(s.axes, function (t) {
                        if (t.zoomEnabled) {
                           var e = s.bounds[t.horiz ? "h" : "v"],
                              i = t.minPixelPadding,
                              n = t.toPixels(a(t.options.min, t.dataMin)),
                              r = t.toPixels(a(t.options.max, t.dataMax)),
                              o = Math.max(n, r);
                           e.min = Math.min(t.pos, Math.min(n, r) - i), e.max = Math.max(t.pos + t.len, o + i)
                        }
                     }), e.res = !0) : e.followTouchMove && 1 === h ? this.runPointActions(e.normalize(t)) : c.length && (p || (e.selectionMarker = p = n({
                        destroy: o,
                        touch: !0
                     }, s.plotBox)), e.pinchTranslate(c, l, f, p, g, d), e.hasPinched = u, e.scaleGroups(f, g), e.res && (e.res = !1, this.reset(!1, 0)))
                  },
                  touch: function (e, i) {
                     var n, r = this.chart;
                     r.index !== t.hoverChartIndex && this.onContainerMouseLeave({
                        relatedTarget: !0
                     }), t.hoverChartIndex = r.index, 1 === e.touches.length ? (e = this.normalize(e), r.isInsidePlot(e.chartX - r.plotLeft, e.chartY - r.plotTop) && !r.openMenu ? (i && this.runPointActions(e), "touchmove" === e.type && (i = this.pinchDown, n = !!i[0] && 4 <= Math.sqrt(Math.pow(i[0].chartX - e.chartX, 2) + Math.pow(i[0].chartY - e.chartY, 2))), a(n, !0) && this.pinch(e)) : i && this.reset()) : 2 === e.touches.length && this.pinch(e)
                  },
                  onContainerTouchStart: function (t) {
                     this.zoomOption(t), this.touch(t, !0)
                  },
                  onContainerTouchMove: function (t) {
                     this.touch(t)
                  },
                  onDocumentTouchEnd: function (i) {
                     e[t.hoverChartIndex] && e[t.hoverChartIndex].pointer.drop(i)
                  }
               })
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.charts,
                  n = t.css,
                  r = t.doc,
                  o = t.extend,
                  a = t.noop,
                  s = t.Pointer,
                  c = t.removeEvent,
                  l = t.win,
                  h = t.wrap;
               if (!t.hasTouch && (l.PointerEvent || l.MSPointerEvent)) {
                  var d = {},
                     u = !!l.PointerEvent,
                     p = function () {
                        var e = [];
                        return e.item = function (t) {
                           return this[t]
                        }, t.objectEach(d, function (t) {
                           e.push({
                              pageX: t.pageX,
                              pageY: t.pageY,
                              target: t.target
                           })
                        }), e
                     },
                     f = function (e, n, r, o) {
                        "touch" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH || !i[t.hoverChartIndex] || (o(e), o = i[t.hoverChartIndex].pointer, o[n]({
                           type: r,
                           target: e.currentTarget,
                           preventDefault: a,
                           touches: p()
                        }))
                     };
                  o(s.prototype, {
                     onContainerPointerDown: function (t) {
                        f(t, "onContainerTouchStart", "touchstart", function (t) {
                           d[t.pointerId] = {
                              pageX: t.pageX,
                              pageY: t.pageY,
                              target: t.currentTarget
                           }
                        })
                     },
                     onContainerPointerMove: function (t) {
                        f(t, "onContainerTouchMove", "touchmove", function (t) {
                           d[t.pointerId] = {
                              pageX: t.pageX,
                              pageY: t.pageY
                           }, d[t.pointerId].target || (d[t.pointerId].target = t.currentTarget)
                        })
                     },
                     onDocumentPointerUp: function (t) {
                        f(t, "onDocumentTouchEnd", "touchend", function (t) {
                           delete d[t.pointerId]
                        })
                     },
                     batchMSEvents: function (t) {
                        t(this.chart.container, u ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, u ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(r, u ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                     }
                  }), h(s.prototype, "init", function (t, e, i) {
                     t.call(this, e, i), this.hasZoom && n(e.container, {
                        "-ms-touch-action": "none",
                        "touch-action": "none"
                     })
                  }), h(s.prototype, "setDOMEvents", function (t) {
                     t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e)
                  }), h(s.prototype, "destroy", function (t) {
                     this.batchMSEvents(c), t.call(this)
                  })
               }
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.css,
                  n = t.discardElement,
                  r = t.defined,
                  o = t.each,
                  a = t.fireEvent,
                  s = t.isFirefox,
                  c = t.marginNames,
                  l = t.merge,
                  h = t.pick,
                  d = t.setAnimation,
                  u = t.stableSort,
                  p = t.win,
                  f = t.wrap;
               t.Legend = function (t, e) {
                  this.init(t, e)
               }, t.Legend.prototype = {
                  init: function (t, i) {
                     this.chart = t, this.setOptions(i), i.enabled && (this.render(), e(this.chart, "endResize", function () {
                        this.legend.positionCheckboxes()
                     }), this.proximate ? this.unchartrender = e(this.chart, "render", function () {
                        this.legend.proximatePositions(), this.legend.positionItems()
                     }) : this.unchartrender && this.unchartrender())
                  },
                  setOptions: function (t) {
                     var e = h(t.padding, 8);
                     this.options = t, this.itemStyle = t.itemStyle, this.itemHiddenStyle = l(this.itemStyle, t.itemHiddenStyle), this.itemMarginTop = t.itemMarginTop || 0, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = h(t.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t.layout && !this.chart.inverted
                  },
                  update: function (t, e) {
                     var i = this.chart;
                     this.setOptions(l(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, h(e, !0) && i.redraw(), a(this, "afterUpdate")
                  },
                  colorizeItem: function (t, e) {
                     t.legendGroup[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                     var i = this.options,
                        n = t.legendItem,
                        r = t.legendLine,
                        o = t.legendSymbol,
                        s = this.itemHiddenStyle.color,
                        c = (i = e ? i.itemStyle.color : s, e && t.color || s),
                        l = t.options && t.options.marker,
                        h = {
                           fill: c
                        };
                     n && n.css({
                        fill: i,
                        color: i
                     }), r && r.attr({
                        stroke: c
                     }), o && (l && o.isMarker && (h = t.pointAttribs(), e || (h.stroke = h.fill = s)), o.attr(h)), a(this, "afterColorizeItem", {
                        item: t,
                        visible: e
                     })
                  },
                  positionItems: function () {
                     o(this.allItems, this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
                  },
                  positionItem: function (t) {
                     var e = this.options,
                        i = e.symbolPadding,
                        n = (e = !e.rtl, t._legendItemPos),
                        o = n[0],
                        a = (n = n[1], t.checkbox);
                     (t = t.legendGroup) && t.element && t[r(t.translateY) ? "animate" : "attr"]({
                        translateX: e ? o : this.legendWidth - o - 2 * i - 4,
                        translateY: n
                     }), a && (a.x = o, a.y = n)
                  },
                  destroyItem: function (t) {
                     var e = t.checkbox;
                     o(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (e) {
                        t[e] && (t[e] = t[e].destroy())
                     }), e && n(t.checkbox)
                  },
                  destroy: function () {
                     function t(t) {
                        this[t] && (this[t] = this[t].destroy())
                     }
                     o(this.getAllItems(), function (e) {
                        o(["legendItem", "legendGroup"], t, e)
                     }), o("clipRect up down pager nav box title group".split(" "), t, this), this.display = null
                  },
                  positionCheckboxes: function () {
                     var t, e = this.group && this.group.alignAttr,
                        n = this.clipHeight || this.legendHeight,
                        r = this.titleHeight;
                     e && (t = e.translateY, o(this.allItems, function (o) {
                        var a, s = o.checkbox;
                        s && (a = t + r + s.y + (this.scrollOffset || 0) + 3, i(s, {
                           left: e.translateX + o.checkboxOffset + s.x - 20 + "px",
                           top: a + "px",
                           display: this.proximate || a > t - 6 && a < t + n - 6 ? "" : "none"
                        }))
                     }, this))
                  },
                  renderTitle: function () {
                     var t = this.options,
                        e = this.padding,
                        i = t.title,
                        n = 0;
                     i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, "legend-title").attr({
                        zIndex: 1
                     }).css(i.style).add(this.group)), t = this.title.getBBox(), n = t.height, this.offsetWidth = t.width, this.contentGroup.attr({
                        translateY: n
                     })), this.titleHeight = n
                  },
                  setText: function (e) {
                     var i = this.options;
                     e.legendItem.attr({
                        text: i.labelFormat ? t.format(i.labelFormat, e, this.chart.time) : i.labelFormatter.call(e)
                     })
                  },
                  renderItem: function (t) {
                     var e = this.chart,
                        i = e.renderer,
                        n = this.options,
                        r = this.symbolWidth,
                        o = n.symbolPadding,
                        a = this.itemStyle,
                        s = this.itemHiddenStyle,
                        c = "horizontal" === n.layout ? h(n.itemDistance, 20) : 0,
                        d = !n.rtl,
                        u = t.legendItem,
                        p = !t.series,
                        f = !p && t.series.drawLegendSymbol ? t.series : t,
                        m = f.options,
                        g = (m = this.createCheckboxForItem && m && m.showCheckbox, c = r + o + c + (m ? 20 : 0), n.useHTML),
                        v = t.options.className;
                     u || (t.legendGroup = i.g("legend-item").addClass("highcharts-" + f.type + "-series highcharts-color-" + t.colorIndex + (v ? " " + v : "") + (p ? " highcharts-series-" + t.index : "")).attr({
                        zIndex: 1
                     }).add(this.scrollGroup), t.legendItem = u = i.text("", d ? r + o : -o, this.baseline || 0, g).css(l(t.visible ? a : s)).attr({
                        align: d ? "left" : "right",
                        zIndex: 2
                     }).add(t.legendGroup), this.baseline || (r = a.fontSize, this.fontMetrics = i.fontMetrics(r, u), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, u.attr("y", this.baseline)), this.symbolHeight = n.symbolHeight || this.fontMetrics.f, f.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, u, g), m && this.createCheckboxForItem(t)), this.colorizeItem(t, t.visible), a.width || u.css({
                        width: (n.itemWidth || n.width || e.spacingBox.width) - c
                     }), this.setText(t), e = u.getBBox(), t.itemWidth = t.checkboxOffset = n.itemWidth || t.legendItemWidth || e.width + c, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(t.legendItemHeight || e.height || this.symbolHeight)
                  },
                  layoutItem: function (t) {
                     var e = this.options,
                        i = this.padding,
                        n = "horizontal" === e.layout,
                        r = t.itemHeight,
                        o = e.itemMarginBottom || 0,
                        a = this.itemMarginTop,
                        s = n ? h(e.itemDistance, 20) : 0,
                        c = e.width,
                        l = c || this.chart.spacingBox.width - 2 * i - e.x;
                     e = e.alignColumns && this.totalItemWidth > l ? this.maxItemWidth : t.itemWidth;
                     n && this.itemX - i + e > l && (this.itemX = i, this.itemY += a + this.lastLineHeight + o, this.lastLineHeight = 0), this.lastItemY = a + this.itemY + o, this.lastLineHeight = Math.max(r, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], n ? this.itemX += e : (this.itemY += a + r + o, this.lastLineHeight = r), this.offsetWidth = c || Math.max((n ? this.itemX - i - (t.checkbox ? 0 : s) : e) + i, this.offsetWidth)
                  },
                  getAllItems: function () {
                     var t = [];
                     return o(this.chart.series, function (e) {
                        var i = e && e.options;
                        e && h(i.showInLegend, !r(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
                     }), a(this, "afterGetAllItems", {
                        allItems: t
                     }), t
                  },
                  getAlignment: function () {
                     var t = this.options;
                     return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
                  },
                  adjustMargins: function (t, e) {
                     var i = this.chart,
                        n = this.options,
                        a = this.getAlignment();
                     a && o([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (o, s) {
                        o.test(a) && !r(t[s]) && (i[c[s]] = Math.max(i[c[s]], i.legend[(s + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][s] * n[s % 2 ? "x" : "y"] + h(n.margin, 12) + e[s] + (0 === s && void 0 !== i.options.title.margin ? i.titleOffset + i.options.title.margin : 0)))
                     })
                  },
                  proximatePositions: function () {
                     var e = this.chart,
                        i = [],
                        n = "left" === this.options.align;
                     o(this.allItems, function (r) {
                        var o, a;
                        o = n, r.xAxis && r.points && (r.xAxis.options.reversed && (o = !o), o = t.find(o ? r.points : r.points.slice(0).reverse(), function (e) {
                           return t.isNumber(e.plotY)
                        }), a = r.legendGroup.getBBox().height, i.push({
                           target: r.visible ? (o ? o.plotY : r.xAxis.height) - .3 * a : e.plotHeight,
                           size: a,
                           item: r
                        }))
                     }, this), t.distribute(i, e.plotHeight), o(i, function (t) {
                        t.item._legendItemPos[1] = e.plotTop - e.spacing[0] + t.pos
                     })
                  },
                  render: function () {
                     var t, e, i, n = this.chart,
                        r = n.renderer,
                        a = this.group,
                        s = this.box,
                        c = this.options,
                        h = this.padding;
                     this.itemX = h, this.itemY = this.initialItemY, this.lastItemY = this.offsetWidth = 0, a || (this.group = a = r.g("legend").attr({
                        zIndex: 7
                     }).add(), this.contentGroup = r.g().attr({
                        zIndex: 1
                     }).add(a), this.scrollGroup = r.g().add(this.contentGroup)), this.renderTitle(), t = this.getAllItems(), u(t, function (t, e) {
                        return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                     }), c.reversed && t.reverse(), this.allItems = t, this.display = e = !!t.length, this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0, o(t, this.renderItem, this), o(t, this.layoutItem, this), t = (c.width || this.offsetWidth) + h, i = this.lastItemY + this.lastLineHeight + this.titleHeight, i = this.handleOverflow(i), i += h, s || (this.box = s = r.rect().addClass("highcharts-legend-box").attr({
                        r: c.borderRadius
                     }).add(a), s.isNew = !0), s.attr({
                        stroke: c.borderColor,
                        "stroke-width": c.borderWidth || 0,
                        fill: c.backgroundColor || "none"
                     }).shadow(c.shadow), 0 < t && 0 < i && (s[s.isNew ? "attr" : "animate"](s.crisp.call({}, {
                        x: 0,
                        y: 0,
                        width: t,
                        height: i
                     }, s.strokeWidth())), s.isNew = !1), s[e ? "show" : "hide"](), this.legendWidth = t, this.legendHeight = i, e && (r = n.spacingBox, /(lth|ct|rth)/.test(this.getAlignment()) && (r = l(r, {
                        y: r.y + n.titleOffset + n.options.title.margin
                     })), a.align(l(c, {
                        width: t,
                        height: i,
                        verticalAlign: this.proximate ? "top" : c.verticalAlign
                     }), !0, r)), this.proximate || this.positionItems()
                  },
                  handleOverflow: function (t) {
                     var e, i, n = this,
                        r = this.chart,
                        a = r.renderer,
                        s = this.options,
                        c = s.y,
                        l = this.padding,
                        d = (r = r.spacingBox.height + ("top" === s.verticalAlign ? -c : c) - l, c = s.maxHeight, this.clipRect),
                        u = s.navigation,
                        p = h(u.animation, !0),
                        f = u.arrowSize || 12,
                        m = this.nav,
                        g = this.pages,
                        v = this.allItems,
                        y = function (t) {
                           "number" === typeof t ? d.attr({
                              height: t
                           }) : d && (n.clipRect = d.destroy(), n.contentGroup.clip()), n.contentGroup.div && (n.contentGroup.div.style.clip = t ? "rect(" + l + "px,9999px," + (l + t) + "px,0)" : "auto")
                        };
                     return "horizontal" !== s.layout || "middle" === s.verticalAlign || s.floating || (r /= 2), c && (r = Math.min(r, c)), g.length = 0, t > r && !1 !== u.enabled ? (this.clipHeight = e = Math.max(r - 20 - this.titleHeight - l, 0), this.currentPage = h(this.currentPage, 1), this.fullHeight = t, o(v, function (t, n) {
                        var r = t._legendItemPos[1],
                           o = Math.round(t.legendItem.getBBox().height),
                           a = g.length;
                        (!a || r - g[a - 1] > e && (i || r) !== g[a - 1]) && (g.push(i || r), a++), t.pageIx = a - 1, i && (v[n - 1].pageIx = a - 1), n === v.length - 1 && r + o - g[a - 1] > e && (g.push(r), t.pageIx = a), r !== i && (i = r)
                     }), d || (d = n.clipRect = a.clipRect(0, l, 9999, 0), n.contentGroup.clip(d)), y(e), m || (this.nav = m = a.g().attr({
                        zIndex: 1
                     }).add(this.group), this.up = a.symbol("triangle", 0, 0, f, f).on("click", function () {
                        n.scroll(-1, p)
                     }).add(m), this.pager = a.text("", 15, 10).addClass("highcharts-legend-navigation").css(u.style).add(m), this.down = a.symbol("triangle-down", 0, 0, f, f).on("click", function () {
                        n.scroll(1, p)
                     }).add(m)), n.scroll(0), t = r) : m && (y(), this.nav = m.destroy(), this.scrollGroup.attr({
                        translateY: 1
                     }), this.clipHeight = 0), t
                  },
                  scroll: function (t, e) {
                     var i = this.pages,
                        n = i.length;
                     t = this.currentPage + t;
                     var r = this.clipHeight,
                        o = this.options.navigation,
                        a = this.pager,
                        s = this.padding;
                     t > n && (t = n), 0 < t && (void 0 !== e && d(e, this.chart), this.nav.attr({
                        translateX: s,
                        translateY: r + this.padding + 7 + this.titleHeight,
                        visibility: "visible"
                     }), this.up.attr({
                        class: 1 === t ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                     }), a.attr({
                        text: t + "/" + n
                     }), this.down.attr({
                        x: 18 + this.pager.getBBox().width,
                        class: t === n ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                     }), this.up.attr({
                        fill: 1 === t ? o.inactiveColor : o.activeColor
                     }).css({
                        cursor: 1 === t ? "default" : "pointer"
                     }), this.down.attr({
                        fill: t === n ? o.inactiveColor : o.activeColor
                     }).css({
                        cursor: t === n ? "default" : "pointer"
                     }), this.scrollOffset = -i[t - 1] + this.initialItemY, this.scrollGroup.animate({
                        translateY: this.scrollOffset
                     }), this.currentPage = t, this.positionCheckboxes())
                  }
               }, t.LegendSymbolMixin = {
                  drawRectangle: function (t, e) {
                     var i = t.symbolHeight,
                        n = t.options.squareSymbol;
                     e.legendSymbol = this.chart.renderer.rect(n ? (t.symbolWidth - i) / 2 : 0, t.baseline - i + 1, n ? i : t.symbolWidth, i, h(t.options.symbolRadius, i / 2)).addClass("highcharts-point").attr({
                        zIndex: 3
                     }).add(e.legendGroup)
                  },
                  drawLineMarker: function (t) {
                     var e, i = this.options,
                        n = i.marker,
                        r = t.symbolWidth,
                        o = t.symbolHeight,
                        a = o / 2,
                        s = this.chart.renderer,
                        c = this.legendGroup;
                     t = t.baseline - Math.round(.3 * t.fontMetrics.b), e = {
                        "stroke-width": i.lineWidth || 0
                     }, i.dashStyle && (e.dashstyle = i.dashStyle), this.legendLine = s.path(["M", 0, t, "L", r, t]).addClass("highcharts-graph").attr(e).add(c), n && !1 !== n.enabled && r && (i = Math.min(h(n.radius, a), a), 0 === this.symbol.indexOf("url") && (n = l(n, {
                        width: o,
                        height: o
                     }), i = 0), this.legendSymbol = n = s.symbol(this.symbol, r / 2 - i, t - i, 2 * i, 2 * i, n).addClass("highcharts-point").add(c), n.isMarker = !0)
                  }
               }, (/Trident\/7\.0/.test(p.navigator.userAgent) || s) && f(t.Legend.prototype, "positionItem", function (t, e) {
                  var i = this,
                     n = function () {
                        e._legendItemPos && t.call(i, e)
                     };
                  n(), setTimeout(n)
               })
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.animate,
                  n = t.animObject,
                  r = t.attr,
                  o = t.doc,
                  a = t.Axis,
                  s = t.createElement,
                  c = t.defaultOptions,
                  l = t.discardElement,
                  h = t.charts,
                  d = t.css,
                  u = t.defined,
                  p = t.each,
                  f = t.extend,
                  m = t.find,
                  g = t.fireEvent,
                  v = t.grep,
                  y = t.isNumber,
                  x = t.isObject,
                  b = t.isString,
                  _ = t.Legend,
                  w = t.marginNames,
                  k = t.merge,
                  S = t.objectEach,
                  M = t.Pointer,
                  A = t.pick,
                  C = t.pInt,
                  P = t.removeEvent,
                  T = t.seriesTypes,
                  O = t.splat,
                  L = t.syncTimeout,
                  D = t.win,
                  E = t.Chart = function () {
                     this.getArgs.apply(this, arguments)
                  };
               t.chart = function (t, e, i) {
                  return new E(t, e, i)
               }, f(E.prototype, {
                  callbacks: [],
                  getArgs: function () {
                     var t = [].slice.call(arguments);
                     (b(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1])
                  },
                  init: function (i, n) {
                     var r, o, a = i.series,
                        s = i.plotOptions || {};
                     g(this, "init", {
                        args: arguments
                     }, function () {
                        for (o in i.series = null, r = k(c, i), r.plotOptions) r.plotOptions[o].tooltip = s[o] && k(s[o].tooltip) || void 0;
                        r.tooltip.userOptions = i.chart && i.chart.forExport && i.tooltip.userOptions || i.tooltip, r.series = i.series = a, this.userOptions = i;
                        var l = r.chart,
                           d = l.events;
                        this.margin = [], this.spacing = [], this.bounds = {
                           h: {},
                           v: {}
                        }, this.labelCollectors = [], this.callback = n, this.isResizing = 0, this.options = r, this.axes = [], this.series = [], this.time = i.time && t.keys(i.time).length ? new t.Time(i.time) : t.time, this.hasCartesianSeries = l.showAxes;
                        var u = this;
                        u.index = h.length, h.push(u), t.chartCount++, d && S(d, function (t, i) {
                           e(u, i, t)
                        }), u.xAxis = [], u.yAxis = [], u.pointCount = u.colorCounter = u.symbolCounter = 0, g(u, "afterInit"), u.firstRender()
                     })
                  },
                  initSeries: function (e) {
                     var i = this.options.chart;
                     return (i = T[e.type || i.type || i.defaultSeriesType]) || t.error(17, !0), i = new i, i.init(this, e), i
                  },
                  orderSeries: function (t) {
                     var e = this.series;
                     for (t = t || 0; t < e.length; t++) e[t] && (e[t].index = t, e[t].name = e[t].getName())
                  },
                  isInsidePlot: function (t, e, i) {
                     var n = i ? e : t;
                     return t = i ? t : e, 0 <= n && n <= this.plotWidth && 0 <= t && t <= this.plotHeight
                  },
                  redraw: function (e) {
                     g(this, "beforeRedraw");
                     var i, n, r, o = this.axes,
                        a = this.series,
                        s = this.pointer,
                        c = this.legend,
                        l = this.userOptions.legend,
                        h = this.isDirtyLegend,
                        d = this.hasCartesianSeries,
                        u = this.isDirtyBox,
                        m = this.renderer,
                        v = m.isHidden(),
                        y = [];
                     for (this.setResponsive && this.setResponsive(!1), t.setAnimation(e, this), v && this.temporaryDisplay(), this.layOutTitles(), e = a.length; e--;)
                        if (r = a[e], r.options.stacking && (i = !0, r.isDirty)) {
                           n = !0;
                           break
                        } if (n)
                        for (e = a.length; e--;) r = a[e], r.options.stacking && (r.isDirty = !0);
                     p(a, function (t) {
                        t.isDirty && ("point" === t.options.legendType ? (t.updateTotals && t.updateTotals(), h = !0) : l && (l.labelFormatter || l.labelFormat) && (h = !0)), t.isDirtyData && g(t, "updatedData")
                     }), h && c && c.options.enabled && (c.render(), this.isDirtyLegend = !1), i && this.getStacks(), d && p(o, function (t) {
                        t.updateNames(), t.updateYNames && t.updateYNames(), t.setScale()
                     }), this.getMargins(), d && (p(o, function (t) {
                        t.isDirty && (u = !0)
                     }), p(o, function (t) {
                        var e = t.min + "," + t.max;
                        t.extKey !== e && (t.extKey = e, y.push(function () {
                           g(t, "afterSetExtremes", f(t.eventArgs, t.getExtremes())), delete t.eventArgs
                        })), (u || i) && t.redraw()
                     })), u && this.drawChartBox(), g(this, "predraw"), p(a, function (t) {
                        (u || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                     }), s && s.reset(!0), m.draw(), g(this, "redraw"), g(this, "render"), v && this.temporaryDisplay(!0), p(y, function (t) {
                        t.call()
                     })
                  },
                  get: function (t) {
                     function e(e) {
                        return e.id === t || e.options && e.options.id === t
                     }
                     var i, n, r = this.series;
                     for (i = m(this.axes, e) || m(this.series, e), n = 0; !i && n < r.length; n++) i = m(r[n].points || [], e);
                     return i
                  },
                  getAxes: function () {
                     var t = this,
                        e = this.options,
                        i = e.xAxis = O(e.xAxis || {});
                     e = e.yAxis = O(e.yAxis || {});
                     g(this, "getAxes"), p(i, function (t, e) {
                        t.index = e, t.isX = !0
                     }), p(e, function (t, e) {
                        t.index = e
                     }), i = i.concat(e), p(i, function (e) {
                        new a(t, e)
                     }), g(this, "afterGetAxes")
                  },
                  getSelectedPoints: function () {
                     var t = [];
                     return p(this.series, function (e) {
                        t = t.concat(v(e.data || [], function (t) {
                           return t.selected
                        }))
                     }), t
                  },
                  getSelectedSeries: function () {
                     return v(this.series, function (t) {
                        return t.selected
                     })
                  },
                  setTitle: function (t, e, i) {
                     var n, r = this,
                        o = r.options;
                     n = o.title = k({
                        style: {
                           color: "#333333",
                           fontSize: o.isStock ? "16px" : "18px"
                        }
                     }, o.title, t), o = o.subtitle = k({
                        style: {
                           color: "#666666"
                        }
                     }, o.subtitle, e), p([
                        ["title", t, n],
                        ["subtitle", e, o]
                     ], function (t, e) {
                        var i = t[0],
                           n = r[i],
                           o = t[1];
                        t = t[2], n && o && (r[i] = n = n.destroy()), t && !n && (r[i] = r.renderer.text(t.text, 0, 0, t.useHTML).attr({
                           align: t.align,
                           class: "highcharts-" + i,
                           zIndex: t.zIndex || 4
                        }).add(), r[i].update = function (t) {
                           r.setTitle(!e && t, e && t)
                        }, r[i].css(t.style))
                     }), r.layOutTitles(i)
                  },
                  layOutTitles: function (t) {
                     var e, i = 0,
                        n = this.renderer,
                        r = this.spacingBox;
                     p(["title", "subtitle"], function (t) {
                        var e, o = this[t],
                           a = this.options[t];
                        t = "title" === t ? -3 : a.verticalAlign ? 0 : i + 2, o && (e = a.style.fontSize, e = n.fontMetrics(e, o).b, o.css({
                           width: (a.width || r.width + a.widthAdjust) + "px"
                        }).align(f({
                           y: t + e
                        }, a), !1, "spacingBox"), a.floating || a.verticalAlign || (i = Math.ceil(i + o.getBBox(a.useHTML).height)))
                     }, this), e = this.titleOffset !== i, this.titleOffset = i, !this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e, this.hasRendered && A(t, !0) && this.isDirtyBox && this.redraw())
                  },
                  getChartSize: function () {
                     var e = this.options.chart,
                        i = e.width,
                        n = (e = e.height, this.renderTo);
                     u(i) || (this.containerWidth = t.getStyle(n, "width")), u(e) || (this.containerHeight = t.getStyle(n, "height")), this.chartWidth = Math.max(0, i || this.containerWidth || 600), this.chartHeight = Math.max(0, t.relativeLength(e, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                  },
                  temporaryDisplay: function (e) {
                     var i = this.renderTo;
                     if (e)
                        for (; i && i.style;) i.hcOrigStyle && (t.css(i, i.hcOrigStyle), delete i.hcOrigStyle), i.hcOrigDetached && (o.body.removeChild(i), i.hcOrigDetached = !1), i = i.parentNode;
                     else
                        for (; i && i.style;)
                           if (o.body.contains(i) || i.parentNode || (i.hcOrigDetached = !0, o.body.appendChild(i)), ("none" === t.getStyle(i, "display", !1) || i.hcOricDetached) && (i.hcOrigStyle = {
                                 display: i.style.display,
                                 height: i.style.height,
                                 overflow: i.style.overflow
                              }, e = {
                                 display: "block",
                                 overflow: "hidden"
                              }, i !== this.renderTo && (e.height = 0), t.css(i, e), i.offsetWidth || i.style.setProperty("display", "block", "important")), i = i.parentNode, i === o.body) break
                  },
                  setClassName: function (t) {
                     this.container.className = "highcharts-container " + (t || "")
                  },
                  getContainer: function () {
                     var e, i, n, a = this.options,
                        c = a.chart;
                     e = this.renderTo;
                     var l, d = t.uniqueKey();
                     e || (this.renderTo = e = c.renderTo), b(e) && (this.renderTo = e = o.getElementById(e)), e || t.error(13, !0), i = C(r(e, "data-highcharts-chart")), y(i) && h[i] && h[i].hasRendered && h[i].destroy(), r(e, "data-highcharts-chart", this.index), e.innerHTML = "", c.skipClone || e.offsetWidth || this.temporaryDisplay(), this.getChartSize(), i = this.chartWidth, n = this.chartHeight, l = f({
                        position: "relative",
                        overflow: "hidden",
                        width: i + "px",
                        height: n + "px",
                        textAlign: "left",
                        lineHeight: "normal",
                        zIndex: 0,
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                     }, c.style), this.container = e = s("div", {
                        id: d
                     }, l, e), this._cursor = e.style.cursor, this.renderer = new(t[c.renderer] || t.Renderer)(e, i, n, null, c.forExport, a.exporting && a.exporting.allowHTML), this.setClassName(c.className), this.renderer.setStyle(c.style), this.renderer.chartIndex = this.index, g(this, "afterGetContainer")
                  },
                  getMargins: function (t) {
                     var e = this.spacing,
                        i = this.margin,
                        n = this.titleOffset;
                     this.resetMargins(), n && !u(i[0]) && (this.plotTop = Math.max(this.plotTop, n + this.options.title.margin + e[0])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), g(this, "getMargins"), t || this.getAxisMargins()
                  },
                  getAxisMargins: function () {
                     var t = this,
                        e = t.axisOffset = [0, 0, 0, 0],
                        i = t.margin;
                     t.hasCartesianSeries && p(t.axes, function (t) {
                        t.visible && t.getOffset()
                     }), p(w, function (n, r) {
                        u(i[r]) || (t[n] += e[r])
                     }), t.setChartSize()
                  },
                  reflow: function (e) {
                     var i = this,
                        n = i.options.chart,
                        r = i.renderTo,
                        a = u(n.width) && u(n.height),
                        s = n.width || t.getStyle(r, "width");
                     n = n.height || t.getStyle(r, "height"), r = e ? e.target : D;
                     a || i.isPrinting || !s || !n || r !== D && r !== o || (s === i.containerWidth && n === i.containerHeight || (t.clearTimeout(i.reflowTimeout), i.reflowTimeout = L(function () {
                        i.container && i.setSize(void 0, void 0, !1)
                     }, e ? 100 : 0)), i.containerWidth = s, i.containerHeight = n)
                  },
                  setReflow: function (t) {
                     var i = this;
                     !1 === t || this.unbindReflow ? !1 === t && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = e(D, "resize", function (t) {
                        i.reflow(t)
                     }), e(this, "destroy", this.unbindReflow))
                  },
                  setSize: function (e, r, o) {
                     var a = this,
                        s = a.renderer;
                     a.isResizing += 1, t.setAnimation(o, a), a.oldChartHeight = a.chartHeight, a.oldChartWidth = a.chartWidth, void 0 !== e && (a.options.chart.width = e), void 0 !== r && (a.options.chart.height = r), a.getChartSize(), e = s.globalAnimation, (e ? i : d)(a.container, {
                        width: a.chartWidth + "px",
                        height: a.chartHeight + "px"
                     }, e), a.setChartSize(!0), s.setSize(a.chartWidth, a.chartHeight, o), p(a.axes, function (t) {
                        t.isDirty = !0, t.setScale()
                     }), a.isDirtyLegend = !0, a.isDirtyBox = !0, a.layOutTitles(), a.getMargins(), a.redraw(o), a.oldChartHeight = null, g(a, "resize"), L(function () {
                        a && g(a, "endResize", null, function () {
                           --a.isResizing
                        })
                     }, n(e).duration)
                  },
                  setChartSize: function (t) {
                     var e, i, n, r, o = this.inverted,
                        a = this.renderer,
                        s = this.chartWidth,
                        c = this.chartHeight,
                        l = this.options.chart,
                        h = this.spacing,
                        d = this.clipOffset;
                     this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = n = Math.max(0, Math.round(s - e - this.marginRight)), this.plotHeight = r = Math.max(0, Math.round(c - i - this.marginBottom)), this.plotSizeX = o ? r : n, this.plotSizeY = o ? n : r, this.plotBorderWidth = l.plotBorderWidth || 0, this.spacingBox = a.spacingBox = {
                        x: h[3],
                        y: h[0],
                        width: s - h[3] - h[1],
                        height: c - h[0] - h[2]
                     }, this.plotBox = a.plotBox = {
                        x: e,
                        y: i,
                        width: n,
                        height: r
                     }, s = 2 * Math.floor(this.plotBorderWidth / 2), o = Math.ceil(Math.max(s, d[3]) / 2), a = Math.ceil(Math.max(s, d[0]) / 2), this.clipBox = {
                        x: o,
                        y: a,
                        width: Math.floor(this.plotSizeX - Math.max(s, d[1]) / 2 - o),
                        height: Math.max(0, Math.floor(this.plotSizeY - Math.max(s, d[2]) / 2 - a))
                     }, t || p(this.axes, function (t) {
                        t.setAxisSize(), t.setAxisTranslation()
                     }), g(this, "afterSetChartSize", {
                        skipAxes: t
                     })
                  },
                  resetMargins: function () {
                     var t = this,
                        e = t.options.chart;
                     p(["margin", "spacing"], function (i) {
                        var n = e[i],
                           r = x(n) ? n : [n, n, n, n];
                        p(["Top", "Right", "Bottom", "Left"], function (n, o) {
                           t[i][o] = A(e[i + n], r[o])
                        })
                     }), p(w, function (e, i) {
                        t[e] = A(t.margin[i], t.spacing[i])
                     }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
                  },
                  drawChartBox: function () {
                     var t, e, i = this.options.chart,
                        n = this.renderer,
                        r = this.chartWidth,
                        o = this.chartHeight,
                        a = this.chartBackground,
                        s = this.plotBackground,
                        c = this.plotBorder,
                        l = this.plotBGImage,
                        h = i.backgroundColor,
                        d = i.plotBackgroundColor,
                        u = i.plotBackgroundImage,
                        p = this.plotLeft,
                        f = this.plotTop,
                        m = this.plotWidth,
                        v = this.plotHeight,
                        y = this.plotBox,
                        x = this.clipRect,
                        b = this.clipBox,
                        _ = "animate";
                     a || (this.chartBackground = a = n.rect().addClass("highcharts-background").add(), _ = "attr"), t = i.borderWidth || 0, e = t + (i.shadow ? 8 : 0), h = {
                        fill: h || "none"
                     }, (t || a["stroke-width"]) && (h.stroke = i.borderColor, h["stroke-width"] = t), a.attr(h).shadow(i.shadow), a[_]({
                        x: e / 2,
                        y: e / 2,
                        width: r - e - t % 2,
                        height: o - e - t % 2,
                        r: i.borderRadius
                     }), _ = "animate", s || (_ = "attr", this.plotBackground = s = n.rect().addClass("highcharts-plot-background").add()), s[_](y), s.attr({
                        fill: d || "none"
                     }).shadow(i.plotShadow), u && (l ? l.animate(y) : this.plotBGImage = n.image(u, p, f, m, v).add()), x ? x.animate({
                        width: b.width,
                        height: b.height
                     }) : this.clipRect = n.clipRect(b), _ = "animate", c || (_ = "attr", this.plotBorder = c = n.rect().addClass("highcharts-plot-border").attr({
                        zIndex: 1
                     }).add()), c.attr({
                        stroke: i.plotBorderColor,
                        "stroke-width": i.plotBorderWidth || 0,
                        fill: "none"
                     }), c[_](c.crisp({
                        x: p,
                        y: f,
                        width: m,
                        height: v
                     }, -c.strokeWidth())), this.isDirtyBox = !1, g(this, "afterDrawChartBox")
                  },
                  propFromSeries: function () {
                     var t, e, i, n = this,
                        r = n.options.chart,
                        o = n.options.series;
                     p(["inverted", "angular", "polar"], function (a) {
                        for (t = T[r.type || r.defaultSeriesType], i = r[a] || t && t.prototype[a], e = o && o.length; !i && e--;)(t = T[o[e].type]) && t.prototype[a] && (i = !0);
                        n[a] = i
                     })
                  },
                  linkSeries: function () {
                     var t = this,
                        e = t.series;
                     p(e, function (t) {
                        t.linkedSeries.length = 0
                     }), p(e, function (e) {
                        var i = e.options.linkedTo;
                        b(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = A(e.options.visible, i.options.visible, e.visible))
                     }), g(this, "afterLinkSeries")
                  },
                  renderSeries: function () {
                     p(this.series, function (t) {
                        t.translate(), t.render()
                     })
                  },
                  renderLabels: function () {
                     var t = this,
                        e = t.options.labels;
                     e.items && p(e.items, function (i) {
                        var n = f(e.style, i.style),
                           r = C(n.left) + t.plotLeft,
                           o = C(n.top) + t.plotTop + 12;
                        delete n.left, delete n.top, t.renderer.text(i.html, r, o).attr({
                           zIndex: 2
                        }).css(n).add()
                     })
                  },
                  render: function () {
                     var t, e, i, n = this.axes,
                        r = this.renderer,
                        o = this.options;
                     this.setTitle(), this.legend = new _(this, o.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), o = this.plotWidth, t = this.plotHeight = Math.max(this.plotHeight - 21, 0), p(n, function (t) {
                        t.setScale()
                     }), this.getAxisMargins(), e = 1.1 < o / this.plotWidth, i = 1.05 < t / this.plotHeight, (e || i) && (p(n, function (t) {
                        (t.horiz && e || !t.horiz && i) && t.setTickInterval(!0)
                     }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && p(n, function (t) {
                        t.visible && t.render()
                     }), this.seriesGroup || (this.seriesGroup = r.g("series-group").attr({
                        zIndex: 3
                     }).add()), this.renderSeries(), this.renderLabels(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
                  },
                  addCredits: function (t) {
                     var e = this;
                     t = k(!0, this.options.credits, t), t.enabled && !this.credits && (this.credits = this.renderer.text(t.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
                        t.href && (D.location.href = t.href)
                     }).attr({
                        align: t.position.align,
                        zIndex: 8
                     }).css(t.style).add().align(t.position), this.credits.update = function (t) {
                        e.credits = e.credits.destroy(), e.addCredits(t)
                     })
                  },
                  destroy: function () {
                     var e, i = this,
                        n = i.axes,
                        r = i.series,
                        o = i.container,
                        a = o && o.parentNode;
                     for (g(i, "destroy"), i.renderer.forExport ? t.erase(h, i) : h[i.index] = void 0, t.chartCount--, i.renderTo.removeAttribute("data-highcharts-chart"), P(i), e = n.length; e--;) n[e] = n[e].destroy();
                     for (this.scroller && this.scroller.destroy && this.scroller.destroy(), e = r.length; e--;) r[e] = r[e].destroy();
                     p("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (t) {
                        var e = i[t];
                        e && e.destroy && (i[t] = e.destroy())
                     }), o && (o.innerHTML = "", P(o), a && l(o)), S(i, function (t, e) {
                        delete i[e]
                     })
                  },
                  firstRender: function () {
                     var t = this,
                        e = t.options;
                     t.isReadyToRender && !t.isReadyToRender() || (t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), p(e.series || [], function (e) {
                        t.initSeries(e)
                     }), t.linkSeries(), g(t, "beforeRender"), M && (t.pointer = new M(t, e)), t.render(), !t.renderer.imgCount && t.onload && t.onload(), t.temporaryDisplay(!0))
                  },
                  onload: function () {
                     p([this.callback].concat(this.callbacks), function (t) {
                        t && void 0 !== this.index && t.apply(this, [this])
                     }, this), g(this, "load"), g(this, "render"), u(this.index) && this.setReflow(this.options.chart.reflow), this.onload = null
                  }
               })
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.Chart,
                  n = t.each;
               e(i, "afterSetChartSize", function (e) {
                  var i = this.options.chart.scrollablePlotArea;
                  (i = i && i.minWidth) && !this.renderer.forExport && (this.scrollablePixels = i = Math.max(0, i - this.chartWidth)) && (this.plotWidth += i, this.clipBox.width += i, e.skipAxes || n(this.axes, function (e) {
                     1 === e.side ? e.getPlotLinePath = function () {
                        var i, n = this.right;
                        return this.right = n - e.chart.scrollablePixels, i = t.Axis.prototype.getPlotLinePath.apply(this, arguments), this.right = n, i
                     } : (e.setAxisSize(), e.setAxisTranslation())
                  }))
               }), e(i, "render", function () {
                  this.scrollablePixels ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed()
               }), i.prototype.setUpScrolling = function () {
                  this.scrollingContainer = t.createElement("div", {
                     className: "highcharts-scrolling"
                  }, {
                     overflowX: "auto",
                     WebkitOverflowScrolling: "touch"
                  }, this.renderTo), this.innerContainer = t.createElement("div", {
                     className: "highcharts-inner-container"
                  }, null, this.scrollingContainer), this.innerContainer.appendChild(this.container), this.setUpScrolling = null
               }, i.prototype.applyFixed = function () {
                  var e, i, n = this.container,
                     r = !this.fixedDiv;
                  r && (this.fixedDiv = t.createElement("div", {
                     className: "highcharts-fixed"
                  }, {
                     position: "absolute",
                     overflow: "hidden",
                     pointerEvents: "none",
                     zIndex: 2
                  }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.fixedRenderer = e = new t.Renderer(this.fixedDiv, 0, 0), this.scrollableMask = e.path().attr({
                     fill: t.color(this.options.chart.backgroundColor || "#fff").setOpacity(.85).get(),
                     zIndex: -1
                  }).addClass("highcharts-scrollable-mask").add(), t.each([this.inverted ? ".highcharts-xaxis" : ".highcharts-yaxis", this.inverted ? ".highcharts-xaxis-labels" : ".highcharts-yaxis-labels", ".highcharts-contextbutton", ".highcharts-credits", ".highcharts-legend", ".highcharts-subtitle", ".highcharts-title", ".highcharts-legend-checkbox"], function (i) {
                     t.each(n.querySelectorAll(i), function (t) {
                        (t.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(t), t.style.pointerEvents = "auto"
                     })
                  })), this.fixedRenderer.setSize(this.chartWidth, this.chartHeight), i = this.chartWidth + this.scrollablePixels, t.stop(this.container), this.container.style.width = i + "px", this.renderer.boxWrapper.attr({
                     width: i,
                     height: this.chartHeight,
                     viewBox: [0, 0, i, this.chartHeight].join(" ")
                  }), this.chartBackground.attr({
                     width: i
                  }), r && (i = this.options.chart.scrollablePlotArea, i.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixels * i.scrollPositionX)), r = this.axisOffset, i = this.plotTop - r[0] - 1;
                  r = this.plotTop + this.plotHeight + r[2];
                  var o = this.plotLeft + this.plotWidth - this.scrollablePixels;
                  this.scrollableMask.attr({
                     d: this.scrollablePixels ? ["M", 0, i, "L", this.plotLeft - 1, i, "L", this.plotLeft - 1, r, "L", 0, r, "Z", "M", o, i, "L", this.chartWidth, i, "L", this.chartWidth, r, "L", o, r, "Z"] : ["M", 0, 0]
                  })
               }
            }(e),
            function (t) {
               var e, i = t.each,
                  n = t.extend,
                  r = t.erase,
                  o = t.fireEvent,
                  a = t.format,
                  s = t.isArray,
                  c = t.isNumber,
                  l = t.pick,
                  h = t.uniqueKey,
                  d = t.defined,
                  u = t.removeEvent;
               t.Point = e = function () {}, t.Point.prototype = {
                  init: function (t, e, i) {
                     return this.series = t, this.color = t.color, this.applyOptions(e, i), this.id = d(this.id) ? this.id : h(), t.options.colorByPoint ? (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter], e = e.length, i = t.colorCounter, t.colorCounter++, t.colorCounter === e && (t.colorCounter = 0)) : i = t.colorIndex, this.colorIndex = l(this.colorIndex, i), t.chart.pointCount++, o(this, "afterInit"), this
                  },
                  applyOptions: function (t, i) {
                     var r = this.series,
                        o = r.options.pointValKey || r.pointValKey;
                     return t = e.prototype.optionsToObject.call(this, t), n(this, t), this.options = this.options ? n(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, o && (this.y = this[o]), this.isNull = l(this.isValid && !this.isValid(), null === this.x || !c(this.y, !0)), this.selected && (this.state = "select"), "name" in this && void 0 === i && r.xAxis && r.xAxis.hasNames && (this.x = r.xAxis.nameToX(this)), void 0 === this.x && r && (this.x = void 0 === i ? r.autoIncrement(this) : i), this
                  },
                  setNestedProperty: function (e, i, n) {
                     return n = n.split("."), t.reduce(n, function (e, n, r, o) {
                        return e[n] = o.length - 1 === r ? i : t.isObject(e[n], !0) ? e[n] : {}, e[n]
                     }, e), e
                  },
                  optionsToObject: function (e) {
                     var i = {},
                        n = this.series,
                        r = n.options.keys,
                        o = r || n.pointArrayMap || ["y"],
                        a = o.length,
                        l = 0,
                        h = 0;
                     if (c(e) || null === e) i[o[0]] = e;
                     else if (s(e))
                        for (!r && e.length > a && (n = typeof e[0], "string" === n ? i.name = e[0] : "number" === n && (i.x = e[0]), l++); h < a;) r && void 0 === e[l] || (0 < o[h].indexOf(".") ? t.Point.prototype.setNestedProperty(i, e[l], o[h]) : i[o[h]] = e[l]), l++, h++;
                     else "object" === typeof e && (i = e, e.dataLabels && (n._hasPointLabels = !0), e.marker && (n._hasPointMarkers = !0));
                     return i
                  },
                  getClassName: function () {
                     return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                  },
                  getZone: function () {
                     var t, e = this.series,
                        i = e.zones,
                        n = (e = e.zoneAxis || "y", 0);
                     for (t = i[n]; this[e] >= t.value;) t = i[++n];
                     return this.nonZonedColor || (this.nonZonedColor = this.color), this.color = t && t.color && !this.options.color ? t.color : this.nonZonedColor, t
                  },
                  destroy: function () {
                     var t, e = this.series.chart,
                        i = e.hoverPoints;
                     for (t in e.pointCount--, i && (this.setState(), r(i, this), i.length || (e.hoverPoints = null)), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel || this.dataLabels) && (u(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this), this) this[t] = null
                  },
                  destroyElements: function () {
                     for (var t, e = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], n = 6; n--;) t = e[n], this[t] && (this[t] = this[t].destroy());
                     this.dataLabels && (i(this.dataLabels, function (t) {
                        t.element && t.destroy()
                     }), delete this.dataLabels), this.connectors && (i(this.connectors, function (t) {
                        t.element && t.destroy()
                     }), delete this.connectors)
                  },
                  getLabelConfig: function () {
                     return {
                        x: this.category,
                        y: this.y,
                        color: this.color,
                        colorIndex: this.colorIndex,
                        key: this.name || this.category,
                        series: this.series,
                        point: this,
                        percentage: this.percentage,
                        total: this.total || this.stackTotal
                     }
                  },
                  tooltipFormatter: function (t) {
                     var e = this.series,
                        n = e.tooltipOptions,
                        r = l(n.valueDecimals, ""),
                        o = n.valuePrefix || "",
                        s = n.valueSuffix || "";
                     return i(e.pointArrayMap || ["y"], function (e) {
                        e = "{point." + e, (o || s) && (t = t.replace(RegExp(e + "}", "g"), o + e + "}" + s)), t = t.replace(RegExp(e + "}", "g"), e + ":,." + r + "f}")
                     }), a(t, {
                        point: this,
                        series: this.series
                     }, e.chart.time)
                  },
                  firePointEvent: function (t, e, i) {
                     var n = this,
                        r = this.series.options;
                     (r.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(), "click" === t && r.allowPointSelect && (i = function (t) {
                        n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                     }), o(this, t, e, i)
                  },
                  visible: !0
               }
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.animObject,
                  n = t.arrayMax,
                  r = t.arrayMin,
                  o = t.correctFloat,
                  a = t.defaultOptions,
                  s = t.defaultPlotOptions,
                  c = t.defined,
                  l = t.each,
                  h = t.erase,
                  d = t.extend,
                  u = t.fireEvent,
                  p = t.grep,
                  f = t.isArray,
                  m = t.isNumber,
                  g = t.isString,
                  v = t.merge,
                  y = t.objectEach,
                  x = t.pick,
                  b = t.removeEvent,
                  _ = t.splat,
                  w = t.SVGElement,
                  k = t.syncTimeout,
                  S = t.win;
               t.Series = t.seriesType("line", null, {
                  lineWidth: 2,
                  allowPointSelect: !1,
                  showCheckbox: !1,
                  animation: {
                     duration: 1e3
                  },
                  events: {},
                  marker: {
                     lineWidth: 0,
                     lineColor: "#ffffff",
                     enabledThreshold: 2,
                     radius: 4,
                     states: {
                        normal: {
                           animation: !0
                        },
                        hover: {
                           animation: {
                              duration: 50
                           },
                           enabled: !0,
                           radiusPlus: 2,
                           lineWidthPlus: 1
                        },
                        select: {
                           fillColor: "#cccccc",
                           lineColor: "#000000",
                           lineWidth: 2
                        }
                     }
                  },
                  point: {
                     events: {}
                  },
                  dataLabels: {
                     align: "center",
                     formatter: function () {
                        return null === this.y ? "" : t.numberFormat(this.y, -1)
                     },
                     style: {
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "contrast",
                        textOutline: "1px contrast"
                     },
                     verticalAlign: "bottom",
                     x: 0,
                     y: 0,
                     padding: 5
                  },
                  cropThreshold: 300,
                  pointRange: 0,
                  softThreshold: !0,
                  states: {
                     normal: {
                        animation: !0
                     },
                     hover: {
                        animation: {
                           duration: 50
                        },
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                           size: 10,
                           opacity: .25
                        }
                     },
                     select: {}
                  },
                  stickyTracking: !0,
                  turboThreshold: 1e3,
                  findNearestPointBy: "x"
               }, {
                  isCartesian: !0,
                  pointClass: t.Point,
                  sorted: !0,
                  requireSorting: !0,
                  directTouch: !1,
                  axisTypes: ["xAxis", "yAxis"],
                  colorCounter: 0,
                  parallelArrays: ["x", "y"],
                  coll: "series",
                  init: function (t, i) {
                     var n, r, o = this,
                        a = t.series;
                     o.chart = t, o.options = i = o.setOptions(i), o.linkedSeries = [], o.bindAxes(), d(o, {
                        name: i.name,
                        state: "",
                        visible: !1 !== i.visible,
                        selected: !0 === i.selected
                     }), n = i.events, y(n, function (t, i) {
                        e(o, i, t)
                     }), (n && n.click || i.point && i.point.events && i.point.events.click || i.allowPointSelect) && (t.runTrackerClick = !0), o.getColor(), o.getSymbol(), l(o.parallelArrays, function (t) {
                        o[t + "Data"] = []
                     }), o.setData(i.data, !1), o.isCartesian && (t.hasCartesianSeries = !0), a.length && (r = a[a.length - 1]), o._i = x(r && r._i, -1) + 1, t.orderSeries(this.insert(a)), u(this, "afterInit")
                  },
                  insert: function (t) {
                     var e, i = this.options.index;
                     if (m(i)) {
                        for (e = t.length; e--;)
                           if (i >= x(t[e].options.index, t[e]._i)) {
                              t.splice(e + 1, 0, this);
                              break
                           } - 1 === e && t.unshift(this), e += 1
                     } else t.push(this);
                     return x(e, t.length - 1)
                  },
                  bindAxes: function () {
                     var e, i = this,
                        n = i.options,
                        r = i.chart;
                     l(i.axisTypes || [], function (o) {
                        l(r[o], function (t) {
                           e = t.options, (n[o] === e.index || void 0 !== n[o] && n[o] === e.id || void 0 === n[o] && 0 === e.index) && (i.insert(t.series), i[o] = t, t.isDirty = !0)
                        }), i[o] || i.optionalAxis === o || t.error(18, !0)
                     })
                  },
                  updateParallelArrays: function (t, e) {
                     var i = t.series,
                        n = arguments,
                        r = m(e) ? function (n) {
                           var r = "y" === n && i.toYData ? i.toYData(t) : t[n];
                           i[n + "Data"][e] = r
                        } : function (t) {
                           Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(n, 2))
                        };
                     l(i.parallelArrays, r)
                  },
                  autoIncrement: function () {
                     var t, e = this.options,
                        i = this.xIncrement,
                        n = e.pointIntervalUnit,
                        r = this.chart.time;
                     i = x(i, e.pointStart, 0);
                     return this.pointInterval = t = x(this.pointInterval, e.pointInterval, 1), n && (e = new r.Date(i), "day" === n ? r.set("Date", e, r.get("Date", e) + t) : "month" === n ? r.set("Month", e, r.get("Month", e) + t) : "year" === n && r.set("FullYear", e, r.get("FullYear", e) + t), t = e.getTime() - i), this.xIncrement = i + t, i
                  },
                  setOptions: function (t) {
                     var e = this.chart,
                        i = e.options,
                        n = i.plotOptions,
                        r = (e.userOptions || {}).plotOptions || {},
                        o = n[this.type];
                     return this.userOptions = t, e = v(o, n.series, t), this.tooltipOptions = v(a.tooltip, a.plotOptions.series && a.plotOptions.series.tooltip, a.plotOptions[this.type].tooltip, i.tooltip.userOptions, n.series && n.series.tooltip, n[this.type].tooltip, t.tooltip), this.stickyTracking = x(t.stickyTracking, r[this.type] && r[this.type].stickyTracking, r.series && r.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || e.stickyTracking), null === o.marker && delete e.marker, this.zoneAxis = e.zoneAxis, t = this.zones = (e.zones || []).slice(), !e.negativeColor && !e.negativeFillColor || e.zones || t.push({
                        value: e[this.zoneAxis + "Threshold"] || e.threshold || 0,
                        className: "highcharts-negative",
                        color: e.negativeColor,
                        fillColor: e.negativeFillColor
                     }), t.length && c(t[t.length - 1].value) && t.push({
                        color: this.color,
                        fillColor: this.fillColor
                     }), u(this, "afterSetOptions", {
                        options: e
                     }), e
                  },
                  getName: function () {
                     return this.name || "Series " + (this.index + 1)
                  },
                  getCyclic: function (t, e, i) {
                     var n, r = this.chart,
                        o = this.userOptions,
                        a = t + "Index",
                        s = t + "Counter",
                        l = i ? i.length : x(r.options.chart[t + "Count"], r[t + "Count"]);
                     e || (n = x(o[a], o["_" + a]), c(n) || (r.series.length || (r[s] = 0), o["_" + a] = n = r[s] % l, r[s] += 1), i && (e = i[n])), void 0 !== n && (this[a] = n), this[t] = e
                  },
                  getColor: function () {
                     this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || s[this.type].color, this.chart.options.colors)
                  },
                  getSymbol: function () {
                     this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
                  },
                  drawLegendSymbol: t.LegendSymbolMixin.drawLineMarker,
                  updateData: function (e) {
                     var i, n, r, o = this.options,
                        a = this.points,
                        s = [],
                        c = this.requireSorting;
                     if (l(e, function (e) {
                           var n;
                           n = t.defined(e) && this.pointClass.prototype.optionsToObject.call({
                              series: this
                           }, e).x, m(n) && (n = t.inArray(n, this.xData, r), -1 === n || a[n].touched ? s.push(e) : e !== o.data[n] ? (a[n].update(e, !1, null, !1), a[n].touched = !0, c && (r = n + 1)) : a[n] && (a[n].touched = !0), i = !0)
                        }, this), i)
                        for (e = a.length; e--;) n = a[e], n.touched || n.remove(!1), n.touched = !1;
                     else {
                        if (e.length !== a.length) return !1;
                        l(e, function (t, e) {
                           a[e].update && t !== o.data[e] && a[e].update(t, !1, null, !1)
                        })
                     }
                     return l(s, function (t) {
                        this.addPoint(t, !1)
                     }, this), !0
                  },
                  setData: function (e, i, n, r) {
                     var o, a, s = this,
                        c = s.points,
                        h = c && c.length || 0,
                        d = s.options,
                        u = s.chart,
                        p = null,
                        v = s.xAxis,
                        y = d.turboThreshold,
                        b = this.xData,
                        _ = this.yData,
                        w = (o = s.pointArrayMap) && o.length;
                     if (e = e || [], o = e.length, i = x(i, !0), !1 !== r && o && h && !s.cropped && !s.hasGroupedData && s.visible && !s.isSeriesBoosting && (a = this.updateData(e)), !a) {
                        if (s.xIncrement = null, s.colorCounter = 0, l(this.parallelArrays, function (t) {
                              s[t + "Data"].length = 0
                           }), y && o > y) {
                           for (n = 0; null === p && n < o;) p = e[n], n++;
                           if (m(p))
                              for (n = 0; n < o; n++) b[n] = this.autoIncrement(), _[n] = e[n];
                           else if (f(p))
                              if (w)
                                 for (n = 0; n < o; n++) p = e[n], b[n] = p[0], _[n] = p.slice(1, w + 1);
                              else
                                 for (n = 0; n < o; n++) p = e[n], b[n] = p[0], _[n] = p[1];
                           else t.error(12)
                        } else
                           for (n = 0; n < o; n++) void 0 !== e[n] && (p = {
                              series: s
                           }, s.pointClass.prototype.applyOptions.apply(p, [e[n]]), s.updateParallelArrays(p, n));
                        for (_ && g(_[0]) && t.error(14, !0), s.data = [], s.options.data = s.userOptions.data = e, n = h; n--;) c[n] && c[n].destroy && c[n].destroy();
                        v && (v.minRange = v.userMinRange), s.isDirty = u.isDirtyBox = !0, s.isDirtyData = !!c, n = !1
                     }
                     "point" === d.legendType && (this.processData(), this.generatePoints()), i && u.redraw(n)
                  },
                  processData: function (e) {
                     var i, n = this.xData,
                        r = this.yData,
                        o = n.length;
                     i = 0;
                     var a, s, c, l = this.xAxis,
                        h = this.options;
                     c = h.cropThreshold;
                     var d, u, p = this.getExtremesFromAll || h.getExtremesFromAll,
                        f = this.isCartesian,
                        m = (h = l && l.val2lin, l && l.isLog),
                        g = this.requireSorting;
                     if (f && !this.isDirty && !l.isDirty && !this.yAxis.isDirty && !e) return !1;
                     for (l && (e = l.getExtremes(), d = e.min, u = e.max), f && this.sorted && !p && (!c || o > c || this.forceCrop) && (n[o - 1] < d || n[0] > u ? (n = [], r = []) : this.yData && (n[0] < d || n[o - 1] > u) && (i = this.cropData(this.xData, this.yData, d, u), n = i.xData, r = i.yData, i = i.start, a = !0)), c = n.length || 1; --c;) o = m ? h(n[c]) - h(n[c - 1]) : n[c] - n[c - 1], 0 < o && (void 0 === s || o < s) ? s = o : 0 > o && g && (t.error(15), g = !1);
                     this.cropped = a, this.cropStart = i, this.processedXData = n, this.processedYData = r, this.closestPointRange = s
                  },
                  cropData: function (t, e, i, n, r) {
                     var o, a = t.length,
                        s = 0,
                        c = a;
                     for (r = x(r, this.cropShoulder, 1), o = 0; o < a; o++)
                        if (t[o] >= i) {
                           s = Math.max(0, o - r);
                           break
                        } for (i = o; i < a; i++)
                        if (t[i] > n) {
                           c = i + r;
                           break
                        } return {
                        xData: t.slice(s, c),
                        yData: e.slice(s, c),
                        start: s,
                        end: c
                     }
                  },
                  generatePoints: function () {
                     var t, e, i, n, r = this.options,
                        o = r.data,
                        a = this.data,
                        s = this.processedXData,
                        c = this.processedYData,
                        l = this.pointClass,
                        h = s.length,
                        u = this.cropStart || 0,
                        p = this.hasGroupedData,
                        f = (r = r.keys, []);
                     for (a || p || (a = [], a.length = o.length, a = this.data = a), r && p && (this.options.keys = !1), n = 0; n < h; n++) e = u + n, p ? (i = (new l).init(this, [s[n]].concat(_(c[n]))), i.dataGroup = this.groupMap[n], i.dataGroup.options && (i.options = i.dataGroup.options, d(i, i.dataGroup.options))) : (i = a[e]) || void 0 === o[e] || (a[e] = i = (new l).init(this, o[e], s[n])), i && (i.index = e, f[n] = i);
                     if (this.options.keys = r, a && (h !== (t = a.length) || p))
                        for (n = 0; n < t; n++) n !== u || p || (n += h), a[n] && (a[n].destroyElements(), a[n].plotX = void 0);
                     this.data = a, this.points = f
                  },
                  getExtremes: function (t) {
                     var e, i = this.yAxis,
                        o = this.processedXData,
                        a = [],
                        s = 0;
                     e = this.xAxis.getExtremes();
                     var c, l, h, d, u = e.min,
                        p = e.max,
                        g = this.requireSorting ? 1 : 0;
                     for (t = t || this.stackedYData || this.processedYData || [], e = t.length, d = 0; d < e; d++)
                        if (l = o[d], h = t[d], c = (m(h, !0) || f(h)) && (!i.positiveValuesOnly || h.length || 0 < h), l = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (o[d + g] || l) >= u && (o[d - g] || l) <= p, c && l)
                           if (c = h.length)
                              for (; c--;) "number" === typeof h[c] && (a[s++] = h[c]);
                           else a[s++] = h;
                     this.dataMin = r(a), this.dataMax = n(a)
                  },
                  translate: function () {
                     this.processedXData || this.processData(), this.generatePoints();
                     var t, e, i, n, r = this.options,
                        a = r.stacking,
                        s = this.xAxis,
                        l = s.categories,
                        h = this.yAxis,
                        d = this.points,
                        p = d.length,
                        f = !!this.modifyValue,
                        g = r.pointPlacement,
                        v = "between" === g || m(g),
                        y = r.threshold,
                        b = r.startFromThreshold ? y : 0,
                        _ = Number.MAX_VALUE;
                     for ("between" === g && (g = .5), m(g) && (g *= x(r.pointRange || s.pointRange)), r = 0; r < p; r++) {
                        var w = d[r],
                           k = w.x,
                           S = w.y;
                        e = w.low;
                        var M, A = a && h.stacks[(this.negStacks && S < (b ? 0 : y) ? "-" : "") + this.stackKey];
                        h.positiveValuesOnly && null !== S && 0 >= S && (w.isNull = !0), w.plotX = t = o(Math.min(Math.max(-1e5, s.translate(k, 0, 0, 0, 1, g, "flags" === this.type)), 1e5)), a && this.visible && !w.isNull && A && A[k] && (n = this.getStackIndicator(n, k, this.index), M = A[k], S = M.points[n.key], e = S[0], S = S[1], e === b && n.key === A[k].base && (e = x(m(y) && y, h.min)), h.positiveValuesOnly && 0 >= e && (e = null), w.total = w.stackTotal = M.total, w.percentage = M.total && w.y / M.total * 100, w.stackY = S, M.setOffset(this.pointXOffset || 0, this.barW || 0)), w.yBottom = c(e) ? Math.min(Math.max(-1e5, h.translate(e, 0, 1, 0, 1)), 1e5) : null, f && (S = this.modifyValue(S, w)), w.plotY = e = "number" === typeof S && 1 / 0 !== S ? Math.min(Math.max(-1e5, h.translate(S, 0, 1, 0, 1)), 1e5) : void 0, w.isInside = void 0 !== e && 0 <= e && e <= h.len && 0 <= t && t <= s.len, w.clientX = v ? o(s.translate(k, 0, 0, 0, 1, g)) : t, w.negative = w.y < (y || 0), w.category = l && void 0 !== l[w.x] ? l[w.x] : w.x, w.isNull || (void 0 !== i && (_ = Math.min(_, Math.abs(t - i))), i = t), w.zone = this.zones.length && w.getZone()
                     }
                     this.closestPointRangePx = _, u(this, "afterTranslate")
                  },
                  getValidPoints: function (t, e) {
                     var i = this.chart;
                     return p(t || this.points || [], function (t) {
                        return !(e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted)) && !t.isNull
                     })
                  },
                  setClip: function (t) {
                     var e = this.chart,
                        i = this.options,
                        n = e.renderer,
                        r = e.inverted,
                        o = this.clipBox,
                        a = o || e.clipBox,
                        s = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, a.height, i.xAxis, i.yAxis].join(),
                        c = e[s],
                        l = e[s + "m"];
                     c || (t && (a.width = 0, r && (a.x = e.plotSizeX), e[s + "m"] = l = n.clipRect(r ? e.plotSizeX + 99 : -99, r ? -e.plotLeft : -e.plotTop, 99, r ? e.chartWidth : e.chartHeight)), e[s] = c = n.clipRect(a), c.count = {
                        length: 0
                     }), t && !c.count[this.index] && (c.count[this.index] = !0, c.count.length += 1), !1 !== i.clip && (this.group.clip(t || o ? c : e.clipRect), this.markerGroup.clip(l), this.sharedClipKey = s), t || (c.count[this.index] && (delete c.count[this.index], --c.count.length), 0 === c.count.length && s && e[s] && (o || (e[s] = e[s].destroy()), e[s + "m"] && (e[s + "m"] = e[s + "m"].destroy())))
                  },
                  animate: function (t) {
                     var e, n = this.chart,
                        r = i(this.options.animation);
                     t ? this.setClip(r) : (e = this.sharedClipKey, (t = n[e]) && t.animate({
                        width: n.plotSizeX,
                        x: 0
                     }, r), n[e + "m"] && n[e + "m"].animate({
                        width: n.plotSizeX + 99,
                        x: 0
                     }, r), this.animate = null)
                  },
                  afterAnimate: function () {
                     this.setClip(), u(this, "afterAnimate"), this.finishedAnimating = !0
                  },
                  drawPoints: function () {
                     var t, e, i, n, r, o, a, s, c = this.points,
                        l = this.chart,
                        h = this.options.marker,
                        d = this[this.specialGroup] || this.markerGroup,
                        u = x(h.enabled, !!this.xAxis.isRadial || null, this.closestPointRangePx >= h.enabledThreshold * h.radius);
                     if (!1 !== h.enabled || this._hasPointMarkers)
                        for (t = 0; t < c.length; t++) e = c[t], n = e.graphic, r = e.marker || {}, o = !!e.marker, i = u && void 0 === r.enabled || r.enabled, a = e.isInside, i && !e.isNull ? (i = x(r.symbol, this.symbol), s = this.markerAttribs(e, e.selected && "select"), n ? n[a ? "show" : "hide"](!0).animate(s) : a && (0 < s.width || e.hasImage) && (e.graphic = n = l.renderer.symbol(i, s.x, s.y, s.width, s.height, o ? r : h).add(d)), n && n.attr(this.pointAttribs(e, e.selected && "select")), n && n.addClass(e.getClassName(), !0)) : n && (e.graphic = n.destroy())
                  },
                  markerAttribs: function (t, e) {
                     var i = this.options.marker,
                        n = t.marker || {},
                        r = n.symbol || i.symbol,
                        o = x(n.radius, i.radius);
                     return e && (i = i.states[e], e = n.states && n.states[e], o = x(e && e.radius, i && i.radius, o + (i && i.radiusPlus || 0))), t.hasImage = r && 0 === r.indexOf("url"), t.hasImage && (o = 0), t = {
                        x: Math.floor(t.plotX) - o,
                        y: t.plotY - o
                     }, o && (t.width = t.height = 2 * o), t
                  },
                  pointAttribs: function (t, e) {
                     var i = this.options.marker,
                        n = t && t.options,
                        r = n && n.marker || {},
                        o = this.color,
                        a = n && n.color,
                        s = t && t.color;
                     n = x(r.lineWidth, i.lineWidth);
                     return t = t && t.zone && t.zone.color, o = a || t || s || o, t = r.fillColor || i.fillColor || o, o = r.lineColor || i.lineColor || o, e && (i = i.states[e], e = r.states && r.states[e] || {}, n = x(e.lineWidth, i.lineWidth, n + x(e.lineWidthPlus, i.lineWidthPlus, 0)), t = e.fillColor || i.fillColor || t, o = e.lineColor || i.lineColor || o), {
                        stroke: o,
                        "stroke-width": n,
                        fill: t
                     }
                  },
                  destroy: function () {
                     var e, i, n, r, o = this,
                        a = o.chart,
                        s = /AppleWebKit\/533/.test(S.navigator.userAgent),
                        c = o.data || [];
                     for (u(o, "destroy"), b(o), l(o.axisTypes || [], function (t) {
                           (r = o[t]) && r.series && (h(r.series, o), r.isDirty = r.forceRedraw = !0)
                        }), o.legendItem && o.chart.legend.destroyItem(o), i = c.length; i--;)(n = c[i]) && n.destroy && n.destroy();
                     o.points = null, t.clearTimeout(o.animationTimeout), y(o, function (t, i) {
                        t instanceof w && !t.survive && (e = s && "group" === i ? "hide" : "destroy", t[e]())
                     }), a.hoverSeries === o && (a.hoverSeries = null), h(a.series, o), a.orderSeries(), y(o, function (t, e) {
                        delete o[e]
                     })
                  },
                  getGraphPath: function (t, e, i) {
                     var n, r, o = this,
                        a = o.options,
                        s = a.step,
                        h = [],
                        d = [];
                     return t = t || o.points, (n = t.reversed) && t.reverse(), (s = {
                        right: 1,
                        center: 2
                     } [s] || s && 3) && n && (s = 4 - s), !a.connectNulls || e || i || (t = this.getValidPoints(t)), l(t, function (n, l) {
                        var u = n.plotX,
                           p = n.plotY,
                           f = t[l - 1];
                        (n.leftCliff || f && f.rightCliff) && !i && (r = !0), n.isNull && !c(e) && 0 < l ? r = !a.connectNulls : n.isNull && !e ? r = !0 : (0 === l || r ? l = ["M", n.plotX, n.plotY] : o.getPointSpline ? l = o.getPointSpline(t, n, l) : s ? (l = 1 === s ? ["L", f.plotX, p] : 2 === s ? ["L", (f.plotX + u) / 2, f.plotY, "L", (f.plotX + u) / 2, p] : ["L", u, f.plotY], l.push("L", u, p)) : l = ["L", u, p], d.push(n.x), s && (d.push(n.x), 2 === s && d.push(n.x)), h.push.apply(h, l), r = !1)
                     }), h.xMap = d, o.graphPath = h
                  },
                  drawGraph: function () {
                     var t = this,
                        e = this.options,
                        i = (this.gappedPath || this.getGraphPath).call(this),
                        n = [
                           ["graph", "highcharts-graph", e.lineColor || this.color, e.dashStyle]
                        ];
                     n = t.getZonesGraphs(n);
                     l(n, function (n, r) {
                        var o = n[0],
                           a = t[o];
                        a ? (a.endX = t.preventGraphAnimation ? null : i.xMap, a.animate({
                           d: i
                        })) : i.length && (t[o] = t.chart.renderer.path(i).addClass(n[1]).attr({
                           zIndex: 1
                        }).add(t.group), a = {
                           stroke: n[2],
                           "stroke-width": e.lineWidth,
                           fill: t.fillGraph && t.color || "none"
                        }, n[3] ? a.dashstyle = n[3] : "square" !== e.linecap && (a["stroke-linecap"] = a["stroke-linejoin"] = "round"), a = t[o].attr(a).shadow(2 > r && e.shadow)), a && (a.startX = i.xMap, a.isArea = i.isArea)
                     })
                  },
                  getZonesGraphs: function (t) {
                     return l(this.zones, function (e, i) {
                        t.push(["zone-graph-" + i, "highcharts-graph highcharts-zone-graph-" + i + " " + (e.className || ""), e.color || this.color, e.dashStyle || this.options.dashStyle])
                     }, this), t
                  },
                  applyZones: function () {
                     var t, e, i, n, r, o, a, s, c, h = this,
                        d = this.chart,
                        u = d.renderer,
                        p = this.zones,
                        f = this.clips || [],
                        m = this.graph,
                        g = this.area,
                        v = Math.max(d.chartWidth, d.chartHeight),
                        y = this[(this.zoneAxis || "y") + "Axis"],
                        b = d.inverted,
                        _ = !1;
                     p.length && (m || g) && y && void 0 !== y.min && (r = y.reversed, o = y.horiz, m && !this.showLine && m.hide(), g && g.hide(), n = y.getExtremes(), l(p, function (l, p) {
                        t = r ? o ? d.plotWidth : 0 : o ? 0 : y.toPixels(n.min), t = Math.min(Math.max(x(e, t), 0), v), e = Math.min(Math.max(Math.round(y.toPixels(x(l.value, n.max), !0)), 0), v), _ && (t = e = y.toPixels(n.max)), a = Math.abs(t - e), s = Math.min(t, e), c = Math.max(t, e), y.isXAxis ? (i = {
                           x: b ? c : s,
                           y: 0,
                           width: a,
                           height: v
                        }, o || (i.x = d.plotHeight - i.x)) : (i = {
                           x: 0,
                           y: b ? c : s,
                           width: v,
                           height: a
                        }, o && (i.y = d.plotWidth - i.y)), b && u.isVML && (i = y.isXAxis ? {
                           x: 0,
                           y: r ? s : c,
                           height: i.width,
                           width: d.chartWidth
                        } : {
                           x: i.y - d.plotLeft - d.spacingBox.x,
                           y: 0,
                           width: i.height,
                           height: d.chartHeight
                        }), f[p] ? f[p].animate(i) : (f[p] = u.clipRect(i), m && h["zone-graph-" + p].clip(f[p]), g && h["zone-area-" + p].clip(f[p])), _ = l.value > n.max, h.resetZones && 0 === e && (e = void 0)
                     }), this.clips = f)
                  },
                  invertGroups: function (t) {
                     function i() {
                        l(["group", "markerGroup"], function (e) {
                           r[e] && (o.renderer.isVML && r[e].attr({
                              width: r.yAxis.len,
                              height: r.xAxis.len
                           }), r[e].width = r.yAxis.len, r[e].height = r.xAxis.len, r[e].invert(t))
                        })
                     }
                     var n, r = this,
                        o = r.chart;
                     r.xAxis && (n = e(o, "resize", i), e(r, "destroy", n), i(t), r.invertGroups = i)
                  },
                  plotGroup: function (t, e, i, n, r) {
                     var o = this[t],
                        a = !o;
                     return a && (this[t] = o = this.chart.renderer.g().attr({
                        zIndex: n || .1
                     }).add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (c(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr({
                        visibility: i
                     })[a ? "attr" : "animate"](this.getPlotBox()), o
                  },
                  getPlotBox: function () {
                     var t = this.chart,
                        e = this.xAxis,
                        i = this.yAxis;
                     return t.inverted && (e = i, i = this.xAxis), {
                        translateX: e ? e.left : t.plotLeft,
                        translateY: i ? i.top : t.plotTop,
                        scaleX: 1,
                        scaleY: 1
                     }
                  },
                  render: function () {
                     var t, e = this,
                        n = e.chart,
                        r = e.options,
                        o = !!e.animate && n.renderer.isSVG && i(r.animation).duration,
                        a = e.visible ? "inherit" : "hidden",
                        s = r.zIndex,
                        c = e.hasRendered,
                        l = n.seriesGroup,
                        h = n.inverted;
                     t = e.plotGroup("group", "series", a, s, l), e.markerGroup = e.plotGroup("markerGroup", "markers", a, s, l), o && e.animate(!0), t.inverted = !!e.isCartesian && h, e.drawGraph && (e.drawGraph(), e.applyZones()), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && !1 !== e.options.enableMouseTracking && e.drawTracker(), e.invertGroups(h), !1 === r.clip || e.sharedClipKey || c || t.clip(n.clipRect), o && e.animate(), c || (e.animationTimeout = k(function () {
                        e.afterAnimate()
                     }, o)), e.isDirty = !1, e.hasRendered = !0, u(e, "afterRender")
                  },
                  redraw: function () {
                     var t = this.chart,
                        e = this.isDirty || this.isDirtyData,
                        i = this.group,
                        n = this.xAxis,
                        r = this.yAxis;
                     i && (t.inverted && i.attr({
                        width: t.plotWidth,
                        height: t.plotHeight
                     }), i.animate({
                        translateX: x(n && n.left, t.plotLeft),
                        translateY: x(r && r.top, t.plotTop)
                     })), this.translate(), this.render(), e && delete this.kdTree
                  },
                  kdAxisArray: ["clientX", "plotY"],
                  searchPoint: function (t, e) {
                     var i = this.xAxis,
                        n = this.yAxis,
                        r = this.chart.inverted;
                     return this.searchKDTree({
                        clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                        plotY: r ? n.len - t.chartX + n.pos : t.chartY - n.pos
                     }, e)
                  },
                  buildKDTree: function () {
                     function t(i, n, r) {
                        var o, a;
                        if (a = i && i.length) return o = e.kdAxisArray[n % r], i.sort(function (t, e) {
                           return t[o] - e[o]
                        }), a = Math.floor(a / 2), {
                           point: i[a],
                           left: t(i.slice(0, a), n + 1, r),
                           right: t(i.slice(a + 1), n + 1, r)
                        }
                     }
                     this.buildingKdTree = !0;
                     var e = this,
                        i = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                     delete e.kdTree, k(function () {
                        e.kdTree = t(e.getValidPoints(null, !e.directTouch), i, i), e.buildingKdTree = !1
                     }, e.options.kdNow ? 0 : 1)
                  },
                  searchKDTree: function (t, e) {
                     function i(t, e, s, l) {
                        var h, d, u = e.point,
                           p = n.kdAxisArray[s % l],
                           f = u;
                        return d = c(t[r]) && c(u[r]) ? Math.pow(t[r] - u[r], 2) : null, h = c(t[o]) && c(u[o]) ? Math.pow(t[o] - u[o], 2) : null, h = (d || 0) + (h || 0), u.dist = c(h) ? Math.sqrt(h) : Number.MAX_VALUE, u.distX = c(d) ? Math.sqrt(d) : Number.MAX_VALUE, p = t[p] - u[p], h = 0 > p ? "left" : "right", d = 0 > p ? "right" : "left", e[h] && (h = i(t, e[h], s + 1, l), f = h[a] < f[a] ? h : u), e[d] && Math.sqrt(p * p) < f[a] && (t = i(t, e[d], s + 1, l), f = t[a] < f[a] ? t : f), f
                     }
                     var n = this,
                        r = this.kdAxisArray[0],
                        o = this.kdAxisArray[1],
                        a = e ? "distX" : "dist";
                     if (e = -1 < n.options.findNearestPointBy.indexOf("y") ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(), this.kdTree) return i(t, this.kdTree, e, e)
                  }
               })
            }(e),
            function (t) {
               var e = t.Axis,
                  i = t.Chart,
                  n = t.correctFloat,
                  r = t.defined,
                  o = t.destroyObjectProperties,
                  a = t.each,
                  s = t.format,
                  c = t.objectEach,
                  l = t.pick,
                  h = t.Series;
               t.StackItem = function (t, e, i, n, r) {
                  var o = t.chart.inverted;
                  this.axis = t, this.isNegative = i, this.options = e, this.x = n, this.total = null, this.points = {}, this.stack = r, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
                     align: e.align || (o ? i ? "left" : "right" : "center"),
                     verticalAlign: e.verticalAlign || (o ? "middle" : i ? "bottom" : "top"),
                     y: l(e.y, o ? 4 : i ? 14 : -6),
                     x: l(e.x, o ? i ? -6 : 6 : 0)
                  }, this.textAlign = e.textAlign || (o ? i ? "right" : "left" : "center")
               }, t.StackItem.prototype = {
                  destroy: function () {
                     o(this, this.axis)
                  },
                  render: function (t) {
                     var e = this.axis.chart,
                        i = this.options,
                        n = i.format;
                     n = n ? s(n, this, e.time) : i.formatter.call(this);
                     this.label ? this.label.attr({
                        text: n,
                        visibility: "hidden"
                     }) : this.label = e.renderer.text(n, null, null, i.useHTML).css(i.style).attr({
                        align: this.textAlign,
                        rotation: i.rotation,
                        visibility: "hidden"
                     }).add(t), this.label.labelrank = e.plotHeight
                  },
                  setOffset: function (t, e) {
                     var i = this.axis,
                        n = i.chart,
                        o = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                        a = i.translate(0);
                     a = r(o) && Math.abs(o - a);
                     t = n.xAxis[0].translate(this.x) + t, i = r(o) && this.getStackBox(n, this, t, o, e, a, i), (e = this.label) && i && (e.align(this.alignOptions, null, i), i = e.alignAttr, e[!1 === this.options.crop || n.isInsidePlot(i.x, i.y) ? "show" : "hide"](!0))
                  },
                  getStackBox: function (t, e, i, n, r, o, a) {
                     var s = e.axis.reversed,
                        c = t.inverted;
                     return t = a.height + a.pos - (c ? t.plotLeft : t.plotTop), e = e.isNegative && !s || !e.isNegative && s, {
                        x: c ? e ? n : n - o : i,
                        y: c ? t - i - r : e ? t - n - o : t - n,
                        width: c ? o : r,
                        height: c ? r : o
                     }
                  }
               }, i.prototype.getStacks = function () {
                  var t = this;
                  a(t.yAxis, function (t) {
                     t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
                  }), a(t.series, function (e) {
                     !e.options.stacking || !0 !== e.visible && !1 !== t.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + l(e.options.stack, ""))
                  })
               }, e.prototype.buildStacks = function () {
                  var t, e = this.series,
                     i = l(this.options.reversedStacks, !0),
                     n = e.length;
                  if (!this.isXAxis) {
                     for (this.usePercentage = !1, t = n; t--;) e[i ? t : n - t - 1].setStackedPoints();
                     for (t = 0; t < n; t++) e[t].modifyStacks()
                  }
               }, e.prototype.renderStackTotals = function () {
                  var t = this.chart,
                     e = t.renderer,
                     i = this.stacks,
                     n = this.stackTotalGroup;
                  n || (this.stackTotalGroup = n = e.g("stack-labels").attr({
                     visibility: "visible",
                     zIndex: 6
                  }).add()), n.translate(t.plotLeft, t.plotTop), c(i, function (t) {
                     c(t, function (t) {
                        t.render(n)
                     })
                  })
               }, e.prototype.resetStacks = function () {
                  var t = this,
                     e = t.stacks;
                  t.isXAxis || c(e, function (e) {
                     c(e, function (i, n) {
                        i.touched < t.stacksTouched ? (i.destroy(), delete e[n]) : (i.total = null, i.cumulative = null)
                     })
                  })
               }, e.prototype.cleanStacks = function () {
                  var t;
                  this.isXAxis || (this.oldStacks && (t = this.stacks = this.oldStacks), c(t, function (t) {
                     c(t, function (t) {
                        t.cumulative = t.total
                     })
                  }))
               }, h.prototype.setStackedPoints = function () {
                  if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                     var e, i, o, a, s, c, h, d = this.processedXData,
                        u = this.processedYData,
                        p = [],
                        f = u.length,
                        m = this.options,
                        g = m.threshold,
                        v = l(m.startFromThreshold && g, 0),
                        y = m.stack,
                        x = (m = m.stacking, this.stackKey),
                        b = "-" + x,
                        _ = this.negStacks,
                        w = this.yAxis,
                        k = w.stacks,
                        S = w.oldStacks;
                     for (w.stacksTouched += 1, s = 0; s < f; s++) c = d[s], h = u[s], e = this.getStackIndicator(e, c, this.index), a = e.key, o = (i = _ && h < (v ? 0 : g)) ? b : x, k[o] || (k[o] = {}), k[o][c] || (S[o] && S[o][c] ? (k[o][c] = S[o][c], k[o][c].total = null) : k[o][c] = new t.StackItem(w, w.options.stackLabels, i, c, y)), o = k[o][c], null !== h ? (o.points[a] = o.points[this.index] = [l(o.cumulative, v)], r(o.cumulative) || (o.base = a), o.touched = w.stacksTouched, 0 < e.index && !1 === this.singleStacks && (o.points[a][0] = o.points[this.index + "," + c + ",0"][0])) : o.points[a] = o.points[this.index] = null, "percent" === m ? (i = i ? x : b, _ && k[i] && k[i][c] ? (i = k[i][c], o.total = i.total = Math.max(i.total, o.total) + Math.abs(h) || 0) : o.total = n(o.total + (Math.abs(h) || 0))) : o.total = n(o.total + (h || 0)), o.cumulative = l(o.cumulative, v) + (h || 0), null !== h && (o.points[a].push(o.cumulative), p[s] = o.cumulative);
                     "percent" === m && (w.usePercentage = !0), this.stackedYData = p, w.oldStacks = {}
                  }
               }, h.prototype.modifyStacks = function () {
                  var t, e = this,
                     i = e.stackKey,
                     n = e.yAxis.stacks,
                     r = e.processedXData,
                     o = e.options.stacking;
                  e[o + "Stacker"] && a([i, "-" + i], function (i) {
                     for (var a, s, c = r.length; c--;) a = r[c], t = e.getStackIndicator(t, a, e.index, i), (s = (a = n[i] && n[i][a]) && a.points[t.key]) && e[o + "Stacker"](s, a, c)
                  })
               }, h.prototype.percentStacker = function (t, e, i) {
                  e = e.total ? 100 / e.total : 0, t[0] = n(t[0] * e), t[1] = n(t[1] * e), this.stackedYData[i] = t[1]
               }, h.prototype.getStackIndicator = function (t, e, i, n) {
                  return !r(t) || t.x !== e || n && t.key !== n ? t = {
                     x: e,
                     index: 0,
                     key: n
                  } : t.index++, t.key = [i, e, t.index].join(), t
               }
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.animate,
                  n = t.Axis,
                  r = t.createElement,
                  o = t.css,
                  a = t.defined,
                  s = t.each,
                  c = t.erase,
                  l = t.extend,
                  h = t.fireEvent,
                  d = t.inArray,
                  u = t.isNumber,
                  p = t.isObject,
                  f = t.isArray,
                  m = t.merge,
                  g = t.objectEach,
                  v = t.pick,
                  y = t.Point,
                  x = t.Series,
                  b = t.seriesTypes,
                  _ = t.setAnimation,
                  w = t.splat;
               l(t.Chart.prototype, {
                  addSeries: function (t, e, i) {
                     var n, r = this;
                     return t && (e = v(e, !0), h(r, "addSeries", {
                        options: t
                     }, function () {
                        n = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), h(r, "afterAddSeries"), e && r.redraw(i)
                     })), n
                  },
                  addAxis: function (t, e, i, r) {
                     var o = e ? "xAxis" : "yAxis",
                        a = this.options;
                     return t = m(t, {
                        index: this[o].length,
                        isX: e
                     }), e = new n(this, t), a[o] = w(a[o] || {}), a[o].push(t), v(i, !0) && this.redraw(r), e
                  },
                  showLoading: function (t) {
                     var n = this,
                        a = n.options,
                        s = n.loadingDiv,
                        c = a.loading,
                        h = function () {
                           s && o(s, {
                              left: n.plotLeft + "px",
                              top: n.plotTop + "px",
                              width: n.plotWidth + "px",
                              height: n.plotHeight + "px"
                           })
                        };
                     s || (n.loadingDiv = s = r("div", {
                        className: "highcharts-loading highcharts-loading-hidden"
                     }, null, n.container), n.loadingSpan = r("span", {
                        className: "highcharts-loading-inner"
                     }, null, s), e(n, "redraw", h)), s.className = "highcharts-loading", n.loadingSpan.innerHTML = t || a.lang.loading, o(s, l(c.style, {
                        zIndex: 10
                     })), o(n.loadingSpan, c.labelStyle), n.loadingShown || (o(s, {
                        opacity: 0,
                        display: ""
                     }), i(s, {
                        opacity: c.style.opacity || .5
                     }, {
                        duration: c.showDuration || 0
                     })), n.loadingShown = !0, h()
                  },
                  hideLoading: function () {
                     var t = this.options,
                        e = this.loadingDiv;
                     e && (e.className = "highcharts-loading highcharts-loading-hidden", i(e, {
                        opacity: 0
                     }, {
                        duration: t.loading.hideDuration || 100,
                        complete: function () {
                           o(e, {
                              display: "none"
                           })
                        }
                     })), this.loadingShown = !1
                  },
                  propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
                  propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
                  update: function (t, e, i, n) {
                     var r, o, c = this,
                        l = {
                           credits: "addCredits",
                           title: "setTitle",
                           subtitle: "setSubtitle"
                        },
                        p = t.chart,
                        f = [];
                     h(c, "update", {
                        options: t
                     }), p && (m(!0, c.options.chart, p), "className" in p && c.setClassName(p.className), "reflow" in p && c.setReflow(p.reflow), ("inverted" in p || "polar" in p || "type" in p) && (c.propFromSeries(), r = !0), "alignTicks" in p && (r = !0), g(p, function (t, e) {
                        -1 !== d("chart." + e, c.propsRequireUpdateSeries) && (o = !0), -1 !== d(e, c.propsRequireDirtyBox) && (c.isDirtyBox = !0)
                     }), "style" in p && c.renderer.setStyle(p.style)), t.colors && (this.options.colors = t.colors), t.plotOptions && m(!0, this.options.plotOptions, t.plotOptions), g(t, function (t, e) {
                        c[e] && "function" === typeof c[e].update ? c[e].update(t, !1) : "function" === typeof c[l[e]] && c[l[e]](t), "chart" !== e && -1 !== d(e, c.propsRequireUpdateSeries) && (o = !0)
                     }), s("xAxis yAxis zAxis series colorAxis pane".split(" "), function (e) {
                        var n;
                        t[e] && ("series" === e && (n = [], s(c[e], function (t, e) {
                           t.options.isInternal || n.push(e)
                        })), s(w(t[e]), function (t, r) {
                           (r = a(t.id) && c.get(t.id) || c[e][n ? n[r] : r]) && r.coll === e && (r.update(t, !1), i && (r.touched = !0)), !r && i && ("series" === e ? c.addSeries(t, !1).touched = !0 : "xAxis" !== e && "yAxis" !== e || (c.addAxis(t, "xAxis" === e, !1).touched = !0))
                        }), i && s(c[e], function (t) {
                           t.touched || t.options.isInternal ? delete t.touched : f.push(t)
                        }))
                     }), s(f, function (t) {
                        t.remove && t.remove(!1)
                     }), r && s(c.axes, function (t) {
                        t.update({}, !1)
                     }), o && s(c.series, function (t) {
                        t.update({}, !1)
                     }), t.loading && m(!0, c.options.loading, t.loading), r = p && p.width, p = p && p.height, u(r) && r !== c.chartWidth || u(p) && p !== c.chartHeight ? c.setSize(r, p, n) : v(e, !0) && c.redraw(n), h(c, "afterUpdate", {
                        options: t
                     })
                  },
                  setSubtitle: function (t) {
                     this.setTitle(void 0, t)
                  }
               }), l(y.prototype, {
                  update: function (t, e, i, n) {
                     function r() {
                        a.applyOptions(t), null === a.y && c && (a.graphic = c.destroy()), p(t, !0) && (c && c.element && t && t.marker && void 0 !== t.marker.symbol && (a.graphic = c.destroy()), t && t.dataLabels && a.dataLabel && (a.dataLabel = a.dataLabel.destroy()), a.connector && (a.connector = a.connector.destroy())), o = a.index, s.updateParallelArrays(a, o), h.data[o] = p(h.data[o], !0) || p(t, !0) ? a.options : v(t, h.data[o]), s.isDirty = s.isDirtyData = !0, !s.fixedBox && s.hasCartesianSeries && (l.isDirtyBox = !0), "point" === h.legendType && (l.isDirtyLegend = !0), e && l.redraw(i)
                     }
                     var o, a = this,
                        s = a.series,
                        c = a.graphic,
                        l = s.chart,
                        h = s.options;
                     e = v(e, !0), !1 === n ? r() : a.firePointEvent("update", {
                        options: t
                     }, r)
                  },
                  remove: function (t, e) {
                     this.series.removePoint(d(this, this.series.data), t, e)
                  }
               }), l(x.prototype, {
                  addPoint: function (t, e, i, n) {
                     var r, o, a, s, c = this.options,
                        l = this.data,
                        h = this.chart,
                        d = this.xAxis,
                        u = (d = d && d.hasNames && d.names, c.data),
                        p = this.xData;
                     if (e = v(e, !0), r = {
                           series: this
                        }, this.pointClass.prototype.applyOptions.apply(r, [t]), s = r.x, a = p.length, this.requireSorting && s < p[a - 1])
                        for (o = !0; a && p[a - 1] > s;) a--;
                     this.updateParallelArrays(r, "splice", a, 0, 0), this.updateParallelArrays(r, a), d && r.name && (d[s] = r.name), u.splice(a, 0, t), o && (this.data.splice(a, 0, null), this.processData()), "point" === c.legendType && this.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(r, "shift"), u.shift())), this.isDirtyData = this.isDirty = !0, e && h.redraw(n)
                  },
                  removePoint: function (t, e, i) {
                     var n = this,
                        r = n.data,
                        o = r[t],
                        a = n.points,
                        s = n.chart,
                        c = function () {
                           a && a.length === r.length && a.splice(t, 1), r.splice(t, 1), n.options.data.splice(t, 1), n.updateParallelArrays(o || {
                              series: n
                           }, "splice", t, 1), o && o.destroy(), n.isDirty = !0, n.isDirtyData = !0, e && s.redraw()
                        };
                     _(i, s), e = v(e, !0), o ? o.firePointEvent("remove", null, c) : c()
                  },
                  remove: function (t, e, i) {
                     function n() {
                        r.destroy(), r.remove = null, o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(), v(t, !0) && o.redraw(e)
                     }
                     var r = this,
                        o = r.chart;
                     !1 !== i ? h(r, "remove", null, n) : n()
                  },
                  update: function (e, i) {
                     var n, r = this,
                        o = r.chart,
                        a = r.userOptions,
                        c = r.oldType || r.type,
                        u = e.type || a.type || o.options.chart.type,
                        p = b[c].prototype,
                        f = ["group", "markerGroup", "dataLabelsGroup"],
                        g = ["navigatorSeries", "baseSeries"],
                        y = r.finishedAnimating && {
                           animation: !1
                        },
                        x = ["data", "name", "turboThreshold"],
                        _ = t.keys(e),
                        w = 0 < _.length;
                     if (s(_, function (t) {
                           -1 === d(t, x) && (w = !1)
                        }), w) e.data && this.setData(e.data, !1), e.name && this.setName(e.name, !1);
                     else {
                        for (n in g = f.concat(g), s(g, function (t) {
                              g[t] = r[t], delete r[t]
                           }), e = m(a, y, {
                              index: r.index,
                              pointStart: v(a.pointStart, r.xData[0])
                           }, {
                              data: r.options.data
                           }, e), r.remove(!1, null, !1), p) r[n] = void 0;
                        b[u || c] ? l(r, b[u || c].prototype) : t.error(17, !0), s(g, function (t) {
                           r[t] = g[t]
                        }), r.init(o, e), e.zIndex !== a.zIndex && s(f, function (t) {
                           r[t] && r[t].attr({
                              zIndex: e.zIndex
                           })
                        }), r.oldType = c, o.linkSeries()
                     }
                     h(this, "afterUpdate"), v(i, !0) && o.redraw(!!w && void 0)
                  },
                  setName: function (t) {
                     this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
                  }
               }), l(n.prototype, {
                  update: function (t, e) {
                     var i = this.chart,
                        n = t && t.events || {};
                     t = m(this.userOptions, t), i.options[this.coll].indexOf && (i.options[this.coll][i.options[this.coll].indexOf(this.userOptions)] = t), g(i.options[this.coll].events, function (t, e) {
                        "undefined" === typeof n[e] && (n[e] = void 0)
                     }), this.destroy(!0), this.init(i, l(t, {
                        events: n
                     })), i.isDirtyBox = !0, v(e, !0) && i.redraw()
                  },
                  remove: function (t) {
                     for (var e = this.chart, i = this.coll, n = this.series, r = n.length; r--;) n[r] && n[r].remove(!1);
                     c(e.axes, this), c(e[i], this), f(e.options[i]) ? e.options[i].splice(this.options.index, 1) : delete e.options[i], s(e[i], function (t, e) {
                        t.options.index = t.userOptions.index = e
                     }), this.destroy(), e.isDirtyBox = !0, v(t, !0) && e.redraw()
                  },
                  setTitle: function (t, e) {
                     this.update({
                        title: t
                     }, e)
                  },
                  setCategories: function (t, e) {
                     this.update({
                        categories: t
                     }, e)
                  }
               })
            }(e),
            function (t) {
               var e = t.color,
                  i = t.each,
                  n = t.map,
                  r = t.pick,
                  o = t.Series,
                  a = t.seriesType;
               a("area", "line", {
                  softThreshold: !1,
                  threshold: 0
               }, {
                  singleStacks: !1,
                  getStackPoints: function (e) {
                     var o, a, s = [],
                        c = [],
                        l = this.xAxis,
                        h = this.yAxis,
                        d = h.stacks[this.stackKey],
                        u = {},
                        p = this.index,
                        f = h.series,
                        m = f.length,
                        g = r(h.options.reversedStacks, !0) ? 1 : -1;
                     if (e = e || this.points, this.options.stacking) {
                        for (a = 0; a < e.length; a++) e[a].leftNull = e[a].rightNull = null, u[e[a].x] = e[a];
                        t.objectEach(d, function (t, e) {
                           null !== t.total && c.push(e)
                        }), c.sort(function (t, e) {
                           return t - e
                        }), o = n(f, function () {
                           return this.visible
                        }), i(c, function (t, e) {
                           var n, r, f = 0;
                           if (u[t] && !u[t].isNull) s.push(u[t]), i([-1, 1], function (i) {
                              var s = 1 === i ? "rightNull" : "leftNull",
                                 l = 0,
                                 h = d[c[e + i]];
                              if (h)
                                 for (a = p; 0 <= a && a < m;) n = h.points[a], n || (a === p ? u[t][s] = !0 : o[a] && (r = d[t].points[a]) && (l -= r[1] - r[0])), a += g;
                              u[t][1 === i ? "rightCliff" : "leftCliff"] = l
                           });
                           else {
                              for (a = p; 0 <= a && a < m;) {
                                 if (n = d[t].points[a]) {
                                    f = n[1];
                                    break
                                 }
                                 a += g
                              }
                              f = h.translate(f, 0, 1, 0, 1), s.push({
                                 isNull: !0,
                                 plotX: l.translate(t, 0, 0, 0, 1),
                                 x: t,
                                 plotY: f,
                                 yBottom: f
                              })
                           }
                        })
                     }
                     return s
                  },
                  getGraphPath: function (t) {
                     var e, i, n, a, s = o.prototype.getGraphPath,
                        c = this.options,
                        l = c.stacking,
                        h = this.yAxis,
                        d = [],
                        u = [],
                        p = this.index,
                        f = h.stacks[this.stackKey],
                        m = c.threshold,
                        g = h.getThreshold(c.threshold),
                        v = (c = c.connectNulls || "percent" === l, function (e, i, r) {
                           var o = t[e];
                           e = l && f[o.x].points[p];
                           var a = o[r + "Null"] || 0;
                           r = o[r + "Cliff"] || 0;
                           var s, c;
                           o = !0;
                           r || a ? (s = (a ? e[0] : e[1]) + r, c = e[0] + r, o = !!a) : !l && t[i] && t[i].isNull && (s = c = m), void 0 !== s && (u.push({
                              plotX: n,
                              plotY: null === s ? g : h.getThreshold(s),
                              isNull: o,
                              isCliff: !0
                           }), d.push({
                              plotX: n,
                              plotY: null === c ? g : h.getThreshold(c),
                              doCurve: !1
                           }))
                        });
                     for (t = t || this.points, l && (t = this.getStackPoints(t)), e = 0; e < t.length; e++) i = t[e].isNull, n = r(t[e].rectPlotX, t[e].plotX), a = r(t[e].yBottom, g), (!i || c) && (c || v(e, e - 1, "left"), i && !l && c || (u.push(t[e]), d.push({
                        x: e,
                        plotX: n,
                        plotY: a
                     })), c || v(e, e + 1, "right"));
                     return e = s.call(this, u, !0, !0), d.reversed = !0, i = s.call(this, d, !0, !0), i.length && (i[0] = "L"), i = e.concat(i), s = s.call(this, u, !1, c), i.xMap = e.xMap, this.areaPath = i, s
                  },
                  drawGraph: function () {
                     this.areaPath = [], o.prototype.drawGraph.apply(this);
                     var t = this,
                        n = this.areaPath,
                        a = this.options,
                        s = [
                           ["area", "highcharts-area", this.color, a.fillColor]
                        ];
                     i(this.zones, function (e, i) {
                        s.push(["zone-area-" + i, "highcharts-area highcharts-zone-area-" + i + " " + e.className, e.color || t.color, e.fillColor || a.fillColor])
                     }), i(s, function (i) {
                        var o = i[0],
                           s = t[o];
                        s ? (s.endX = t.preventGraphAnimation ? null : n.xMap, s.animate({
                           d: n
                        })) : (s = t[o] = t.chart.renderer.path(n).addClass(i[1]).attr({
                           fill: r(i[3], e(i[2]).setOpacity(r(a.fillOpacity, .75)).get()),
                           zIndex: 0
                        }).add(t.group), s.isArea = !0), s.startX = n.xMap, s.shiftUnit = a.step ? 2 : 1
                     })
                  },
                  drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
               })
            }(e),
            function (t) {
               var e = t.pick;
               t = t.seriesType, t("spline", "line", {}, {
                  getPointSpline: function (t, i, n) {
                     var r, o, a, s, c = i.plotX,
                        l = i.plotY,
                        h = t[n - 1];
                     if (n = t[n + 1], h && !h.isNull && !1 !== h.doCurve && !i.isCliff && n && !n.isNull && !1 !== n.doCurve && !i.isCliff) {
                        t = h.plotY, a = n.plotX, n = n.plotY;
                        var d = 0;
                        r = (1.5 * c + h.plotX) / 2.5, o = (1.5 * l + t) / 2.5, a = (1.5 * c + a) / 2.5, s = (1.5 * l + n) / 2.5, a !== r && (d = (s - o) * (a - c) / (a - r) + l - s), o += d, s += d, o > t && o > l ? (o = Math.max(t, l), s = 2 * l - o) : o < t && o < l && (o = Math.min(t, l), s = 2 * l - o), s > n && s > l ? (s = Math.max(n, l), o = 2 * l - s) : s < n && s < l && (s = Math.min(n, l), o = 2 * l - s), i.rightContX = a, i.rightContY = s
                     }
                     return i = ["C", e(h.rightContX, h.plotX), e(h.rightContY, h.plotY), e(r, c), e(o, l), c, l], h.rightContX = h.rightContY = null, i
                  }
               })
            }(e),
            function (t) {
               var e = t.seriesTypes.area.prototype,
                  i = t.seriesType;
               i("areaspline", "spline", t.defaultPlotOptions.area, {
                  getStackPoints: e.getStackPoints,
                  getGraphPath: e.getGraphPath,
                  drawGraph: e.drawGraph,
                  drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
               })
            }(e),
            function (t) {
               var e = t.animObject,
                  i = t.color,
                  n = t.each,
                  r = t.extend,
                  o = t.defined,
                  a = t.isNumber,
                  s = t.merge,
                  c = t.pick,
                  l = t.Series,
                  h = t.seriesType,
                  d = t.svg;
               h("column", "line", {
                  borderRadius: 0,
                  crisp: !0,
                  groupPadding: .2,
                  marker: null,
                  pointPadding: .1,
                  minPointLength: 0,
                  cropThreshold: 50,
                  pointRange: null,
                  states: {
                     hover: {
                        halo: !1,
                        brightness: .1
                     },
                     select: {
                        color: "#cccccc",
                        borderColor: "#000000"
                     }
                  },
                  dataLabels: {
                     align: null,
                     verticalAlign: null,
                     y: null
                  },
                  softThreshold: !1,
                  startFromThreshold: !0,
                  stickyTracking: !1,
                  tooltip: {
                     distance: 6
                  },
                  threshold: 0,
                  borderColor: "#ffffff"
               }, {
                  cropShoulder: 0,
                  directTouch: !0,
                  trackerGroups: ["group", "dataLabelsGroup"],
                  negStacks: !0,
                  init: function () {
                     l.prototype.init.apply(this, arguments);
                     var t = this,
                        e = t.chart;
                     e.hasRendered && n(e.series, function (e) {
                        e.type === t.type && (e.isDirty = !0)
                     })
                  },
                  getColumnMetrics: function () {
                     var t, e = this,
                        i = e.options,
                        r = e.xAxis,
                        o = e.yAxis,
                        a = r.options.reversedStacks,
                        s = (a = r.reversed && !a || !r.reversed && a, {}),
                        l = 0;
                     !1 === i.grouping ? l = 1 : n(e.chart.series, function (i) {
                        var n, r = i.options,
                           a = i.yAxis;
                        i.type !== e.type || !i.visible && e.chart.options.chart.ignoreHiddenSeries || o.len !== a.len || o.pos !== a.pos || (r.stacking ? (t = i.stackKey, void 0 === s[t] && (s[t] = l++), n = s[t]) : !1 !== r.grouping && (n = l++), i.columnIndex = n)
                     });
                     var h = Math.min(Math.abs(r.transA) * (r.ordinalSlope || i.pointRange || r.closestPointRange || r.tickInterval || 1), r.len),
                        d = h * i.groupPadding,
                        u = (h - 2 * d) / (l || 1);
                     i = Math.min(i.maxPointWidth || r.len, c(i.pointWidth, u * (1 - 2 * i.pointPadding)));
                     return e.columnMetrics = {
                        width: i,
                        offset: (u - i) / 2 + (d + ((e.columnIndex || 0) + (a ? 1 : 0)) * u - h / 2) * (a ? -1 : 1)
                     }, e.columnMetrics
                  },
                  crispCol: function (t, e, i, n) {
                     var r = this.chart,
                        o = this.borderWidth,
                        a = -(o % 2 ? .5 : 0);
                     o = o % 2 ? .5 : 1;
                     return r.inverted && r.renderer.isVML && (o += 1), this.options.crisp && (i = Math.round(t + i) + a, t = Math.round(t) + a, i -= t), n = Math.round(e + n) + o, a = .5 >= Math.abs(e) && .5 < n, e = Math.round(e) + o, n -= e, a && n && (--e, n += 1), {
                        x: t,
                        y: e,
                        width: i,
                        height: n
                     }
                  },
                  translate: function () {
                     var t = this,
                        e = t.chart,
                        i = t.options,
                        r = t.dense = 2 > t.closestPointRange * t.xAxis.transA,
                        a = (r = t.borderWidth = c(i.borderWidth, r ? 0 : 1), t.yAxis),
                        s = i.threshold,
                        h = t.translatedThreshold = a.getThreshold(s),
                        d = c(i.minPointLength, 5),
                        u = t.getColumnMetrics(),
                        p = u.width,
                        f = t.barW = Math.max(p, 1 + 2 * r),
                        m = t.pointXOffset = u.offset;
                     e.inverted && (h -= .5), i.pointPadding && (f = Math.ceil(f)), l.prototype.translate.apply(t), n(t.points, function (i) {
                        var n, r = c(i.yBottom, h),
                           l = 999 + Math.abs(r),
                           u = p,
                           g = (l = Math.min(Math.max(-l, i.plotY), a.len + l), i.plotX + m),
                           v = f,
                           y = Math.min(l, r),
                           x = Math.max(l, r) - y;
                        d && Math.abs(x) < d && (x = d, n = !a.reversed && !i.negative || a.reversed && i.negative, i.y === s && t.dataMax <= s && a.min < s && (n = !n), y = Math.abs(y - h) > d ? r - d : h - (n ? d : 0)), o(i.options.pointWidth) && (u = v = Math.ceil(i.options.pointWidth), g -= Math.round((u - p) / 2)), i.barX = g, i.pointWidth = u, i.tooltipPos = e.inverted ? [a.len + a.pos - e.plotLeft - l, t.xAxis.len - g - v / 2, x] : [g + v / 2, l + a.pos - e.plotTop, x], i.shapeType = "rect", i.shapeArgs = t.crispCol.apply(t, i.isNull ? [g, h, v, 0] : [g, y, v, x])
                     })
                  },
                  getSymbol: t.noop,
                  drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                  drawGraph: function () {
                     this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                  },
                  pointAttribs: function (t, e) {
                     var n, r = this.options,
                        o = this.pointAttrToOptions || {};
                     n = o.stroke || "borderColor";
                     var a = o["stroke-width"] || "borderWidth",
                        c = t && t.color || this.color,
                        l = t && t[n] || r[n] || this.color || c,
                        h = t && t[a] || r[a] || this[a] || 0;
                     o = r.dashStyle;
                     return t && this.zones.length && (c = t.getZone(), c = t.options.color || c && c.color || this.color), e && (t = s(r.states[e], t.options.states && t.options.states[e] || {}), e = t.brightness, c = t.color || void 0 !== e && i(c).brighten(t.brightness).get() || c, l = t[n] || l, h = t[a] || h, o = t.dashStyle || o), n = {
                        fill: c,
                        stroke: l,
                        "stroke-width": h
                     }, o && (n.dashstyle = o), n
                  },
                  drawPoints: function () {
                     var t, e = this,
                        i = this.chart,
                        r = e.options,
                        o = i.renderer,
                        c = r.animationLimit || 250;
                     n(e.points, function (n) {
                        var l = n.graphic,
                           h = l && i.pointCount < c ? "animate" : "attr";
                        a(n.plotY) && null !== n.y ? (t = n.shapeArgs, l ? l[h](s(t)) : n.graphic = l = o[n.shapeType](t).add(n.group || e.group), r.borderRadius && l.attr({
                           r: r.borderRadius
                        }), l[h](e.pointAttribs(n, n.selected && "select")).shadow(r.shadow, null, r.stacking && !r.borderRadius), l.addClass(n.getClassName(), !0)) : l && (n.graphic = l.destroy())
                     })
                  },
                  animate: function (t) {
                     var i, n = this,
                        o = this.yAxis,
                        a = n.options,
                        s = this.chart.inverted,
                        c = {},
                        l = s ? "translateX" : "translateY";
                     d && (t ? (c.scaleY = .001, t = Math.min(o.pos + o.len, Math.max(o.pos, o.toPixels(a.threshold))), s ? c.translateX = t - o.len : c.translateY = t, n.group.attr(c)) : (i = n.group.attr(l), n.group.animate({
                        scaleY: 1
                     }, r(e(n.options.animation), {
                        step: function (t, e) {
                           c[l] = i + e.pos * (o.pos - i), n.group.attr(c)
                        }
                     })), n.animate = null))
                  },
                  remove: function () {
                     var t = this,
                        e = t.chart;
                     e.hasRendered && n(e.series, function (e) {
                        e.type === t.type && (e.isDirty = !0)
                     }), l.prototype.remove.apply(t, arguments)
                  }
               })
            }(e),
            function (t) {
               t = t.seriesType, t("bar", "column", null, {
                  inverted: !0
               })
            }(e),
            function (t) {
               var e = t.Series;
               t = t.seriesType, t("scatter", "line", {
                  lineWidth: 0,
                  findNearestPointBy: "xy",
                  marker: {
                     enabled: !0
                  },
                  tooltip: {
                     headerFormat: '<span style="color:{point.color}">â—</span> <span style="font-size: 0.85em"> {series.name}</span><br/>',
                     pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                  }
               }, {
                  sorted: !1,
                  requireSorting: !1,
                  noSharedTooltip: !0,
                  trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                  takeOrdinalPosition: !1,
                  drawGraph: function () {
                     this.options.lineWidth && e.prototype.drawGraph.call(this)
                  }
               })
            }(e),
            function (t) {
               var e = t.deg2rad,
                  i = t.isNumber,
                  n = t.pick,
                  r = t.relativeLength;
               t.CenteredSeriesMixin = {
                  getCenter: function () {
                     var t, e, i = this.options,
                        o = this.chart,
                        a = 2 * (i.slicedOffset || 0),
                        s = o.plotWidth - 2 * a,
                        c = (o = o.plotHeight - 2 * a, i.center),
                        l = (c = [n(c[0], "50%"), n(c[1], "50%"), i.size || "100%", i.innerSize || 0], Math.min(s, o));
                     for (t = 0; 4 > t; ++t) e = c[t], i = 2 > t || 2 === t && /%$/.test(e), c[t] = r(e, [s, o, l, c[2]][t]) + (i ? a : 0);
                     return c[3] > c[2] && (c[3] = c[2]), c
                  },
                  getStartAndEndRadians: function (t, n) {
                     return t = i(t) ? t : 0, n = i(n) && n > t && 360 > n - t ? n : t + 360, {
                        start: e * (t + -90),
                        end: e * (n + -90)
                     }
                  }
               }
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.CenteredSeriesMixin,
                  n = t.defined,
                  r = t.each,
                  o = t.extend,
                  a = i.getStartAndEndRadians,
                  s = t.inArray,
                  c = t.noop,
                  l = t.pick,
                  h = t.Point,
                  d = t.Series,
                  u = t.seriesType,
                  p = t.setAnimation;
               u("pie", "line", {
                  center: [null, null],
                  clip: !1,
                  colorByPoint: !0,
                  dataLabels: {
                     allowOverlap: !0,
                     distance: 30,
                     enabled: !0,
                     formatter: function () {
                        return this.point.isNull ? void 0 : this.point.name
                     },
                     x: 0
                  },
                  ignoreHiddenPoint: !0,
                  legendType: "point",
                  marker: null,
                  size: null,
                  showInLegend: !1,
                  slicedOffset: 10,
                  stickyTracking: !1,
                  tooltip: {
                     followPointer: !0
                  },
                  borderColor: "#ffffff",
                  borderWidth: 1,
                  states: {
                     hover: {
                        brightness: .1
                     }
                  }
               }, {
                  isCartesian: !1,
                  requireSorting: !1,
                  directTouch: !0,
                  noSharedTooltip: !0,
                  trackerGroups: ["group", "dataLabelsGroup"],
                  axisTypes: [],
                  pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
                  animate: function (t) {
                     var e = this,
                        i = e.points,
                        n = e.startAngleRad;
                     t || (r(i, function (t) {
                        var i = t.graphic,
                           r = t.shapeArgs;
                        i && (i.attr({
                           r: t.startR || e.center[3] / 2,
                           start: n,
                           end: n
                        }), i.animate({
                           r: r.r,
                           start: r.start,
                           end: r.end
                        }, e.options.animation))
                     }), e.animate = null)
                  },
                  updateTotals: function () {
                     var t, e, i = 0,
                        n = this.points,
                        r = n.length,
                        o = this.options.ignoreHiddenPoint;
                     for (t = 0; t < r; t++) e = n[t], i += o && !e.visible ? 0 : e.isNull ? 0 : e.y;
                     for (this.total = i, t = 0; t < r; t++) e = n[t], e.percentage = 0 < i && (e.visible || !o) ? e.y / i * 100 : 0, e.total = i
                  },
                  generatePoints: function () {
                     d.prototype.generatePoints.call(this), this.updateTotals()
                  },
                  translate: function (t) {
                     this.generatePoints();
                     var e, i, n, r, o, s, c = 0,
                        h = this.options,
                        d = h.slicedOffset,
                        u = d + (h.borderWidth || 0),
                        p = a(h.startAngle, h.endAngle),
                        f = this.startAngleRad = p.start,
                        m = (p = (this.endAngleRad = p.end) - f, this.points),
                        g = h.dataLabels.distance,
                        v = (h = h.ignoreHiddenPoint, m.length);
                     for (t || (this.center = t = this.getCenter()), this.getX = function (e, i, r) {
                           return n = Math.asin(Math.min((e - t[1]) / (t[2] / 2 + r.labelDistance), 1)), t[0] + (i ? -1 : 1) * Math.cos(n) * (t[2] / 2 + r.labelDistance)
                        }, o = 0; o < v; o++) s = m[o], s.labelDistance = l(s.options.dataLabels && s.options.dataLabels.distance, g), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, s.labelDistance), e = f + c * p, h && !s.visible || (c += s.percentage / 100), i = f + c * p, s.shapeType = "arc", s.shapeArgs = {
                        x: t[0],
                        y: t[1],
                        r: t[2] / 2,
                        innerR: t[3] / 2,
                        start: Math.round(1e3 * e) / 1e3,
                        end: Math.round(1e3 * i) / 1e3
                     }, n = (i + e) / 2, n > 1.5 * Math.PI ? n -= 2 * Math.PI : n < -Math.PI / 2 && (n += 2 * Math.PI), s.slicedTranslation = {
                        translateX: Math.round(Math.cos(n) * d),
                        translateY: Math.round(Math.sin(n) * d)
                     }, i = Math.cos(n) * t[2] / 2, r = Math.sin(n) * t[2] / 2, s.tooltipPos = [t[0] + .7 * i, t[1] + .7 * r], s.half = n < -Math.PI / 2 || n > Math.PI / 2 ? 1 : 0, s.angle = n, e = Math.min(u, s.labelDistance / 5), s.labelPos = [t[0] + i + Math.cos(n) * s.labelDistance, t[1] + r + Math.sin(n) * s.labelDistance, t[0] + i + Math.cos(n) * e, t[1] + r + Math.sin(n) * e, t[0] + i, t[1] + r, 0 > s.labelDistance ? "center" : s.half ? "right" : "left", n]
                  },
                  drawGraph: null,
                  drawPoints: function () {
                     var t, e, i, n, a = this,
                        s = a.chart.renderer,
                        c = a.options.shadow;
                     c && !a.shadowGroup && (a.shadowGroup = s.g("shadow").add(a.group)), r(a.points, function (r) {
                        if (e = r.graphic, r.isNull) e && (r.graphic = e.destroy());
                        else {
                           n = r.shapeArgs, t = r.getTranslate();
                           var l = r.shadowGroup;
                           c && !l && (l = r.shadowGroup = s.g("shadow").add(a.shadowGroup)), l && l.attr(t), i = a.pointAttribs(r, r.selected && "select"), e ? e.setRadialReference(a.center).attr(i).animate(o(n, t)) : (r.graphic = e = s[r.shapeType](n).setRadialReference(a.center).attr(t).add(a.group), e.attr(i).attr({
                              "stroke-linejoin": "round"
                           }).shadow(c, l)), e.attr({
                              visibility: r.visible ? "inherit" : "hidden"
                           }), e.addClass(r.getClassName())
                        }
                     })
                  },
                  searchPoint: c,
                  sortByAngle: function (t, e) {
                     t.sort(function (t, i) {
                        return void 0 !== t.angle && (i.angle - t.angle) * e
                     })
                  },
                  drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                  getCenter: i.getCenter,
                  getSymbol: c
               }, {
                  init: function () {
                     h.prototype.init.apply(this, arguments);
                     var t, i = this;
                     return i.name = l(i.name, "Slice"), t = function (t) {
                        i.slice("select" === t.type)
                     }, e(i, "select", t), e(i, "unselect", t), i
                  },
                  isValid: function () {
                     return t.isNumber(this.y, !0) && 0 <= this.y
                  },
                  setVisible: function (t, e) {
                     var i = this,
                        n = i.series,
                        o = n.chart,
                        a = n.options.ignoreHiddenPoint;
                     e = l(e, a), t !== i.visible && (i.visible = i.options.visible = t = void 0 === t ? !i.visible : t, n.options.data[s(i, n.data)] = i.options, r(["graphic", "dataLabel", "connector", "shadowGroup"], function (e) {
                        i[e] && i[e][t ? "show" : "hide"](!0)
                     }), i.legendItem && o.legend.colorizeItem(i, t), t || "hover" !== i.state || i.setState(""), a && (n.isDirty = !0), e && o.redraw())
                  },
                  slice: function (t, e, i) {
                     var r = this.series;
                     p(i, r.chart), l(e, !0), this.sliced = this.options.sliced = n(t) ? t : !this.sliced, r.options.data[s(this, r.data)] = this.options, this.graphic.animate(this.getTranslate()), this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                  },
                  getTranslate: function () {
                     return this.sliced ? this.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                     }
                  },
                  haloPath: function (t) {
                     var e = this.shapeArgs;
                     return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                        innerR: this.shapeArgs.r - 1,
                        start: e.start,
                        end: e.end
                     })
                  }
               })
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.arrayMax,
                  n = t.defined,
                  r = t.each,
                  o = t.extend,
                  a = t.format,
                  s = t.map,
                  c = t.merge,
                  l = t.noop,
                  h = t.pick,
                  d = t.relativeLength,
                  u = t.Series,
                  p = t.seriesTypes,
                  f = t.some,
                  m = t.stableSort,
                  g = t.isArray,
                  v = t.splat;
               t.distribute = function (e, i, n) {
                  function o(t, e) {
                     return t.target - e.target
                  }
                  var a, c, l = !0,
                     d = e,
                     u = [];
                  c = 0;
                  var p = d.reducedLen || i;
                  for (a = e.length; a--;) c += e[a].size;
                  if (c > p) {
                     for (m(e, function (t, e) {
                           return (e.rank || 0) - (t.rank || 0)
                        }), c = a = 0; c <= p;) c += e[a].size, a++;
                     u = e.splice(a - 1, e.length)
                  }
                  for (m(e, o), e = s(e, function (t) {
                        return {
                           size: t.size,
                           targets: [t.target],
                           align: h(t.align, .5)
                        }
                     }); l;) {
                     for (a = e.length; a--;) l = e[a], c = (Math.min.apply(0, l.targets) + Math.max.apply(0, l.targets)) / 2, l.pos = Math.min(Math.max(0, c - l.size * l.align), i - l.size);
                     for (a = e.length, l = !1; a--;) 0 < a && e[a - 1].pos + e[a - 1].size > e[a].pos && (e[a - 1].size += e[a].size, e[a - 1].targets = e[a - 1].targets.concat(e[a].targets), e[a - 1].align = .5, e[a - 1].pos + e[a - 1].size > i && (e[a - 1].pos = i - e[a - 1].size), e.splice(a, 1), l = !0)
                  }
                  d.push.apply(d, u), a = 0, f(e, function (e) {
                     var o = 0;
                     if (f(e.targets, function () {
                           if (d[a].pos = e.pos + o, Math.abs(d[a].pos - d[a].target) > n) return r(d.slice(0, a + 1), function (t) {
                              delete t.pos
                           }), d.reducedLen = (d.reducedLen || i) - .1 * i, d.reducedLen > .1 * i && t.distribute(d, i, n), !0;
                           o += d[a].size, a++
                        })) return !0
                  }), m(d, o)
               }, u.prototype.drawDataLabels = function () {
                  function i(t, e) {
                     var i = e.filter;
                     return !i || (e = i.operator, t = t[i.property], i = i.value, ">" === e && t > i || "<" === e && t < i || ">=" === e && t >= i || "<=" === e && t <= i || "==" === e && t == i || "===" === e && t === i)
                  }

                  function o(t, e) {
                     var i, n = [];
                     if (g(t) && !g(e)) n = s(t, function (t) {
                        return c(t, e)
                     });
                     else if (g(e) && !g(t)) n = s(e, function (e) {
                        return c(t, e)
                     });
                     else if (g(t) || g(e))
                        for (i = Math.max(t.length, e.length); i--;) n[i] = c(t[i], e[i]);
                     else n = c(t, e);
                     return n
                  }
                  var l, d, u = this,
                     p = u.chart,
                     f = u.options,
                     m = f.dataLabels,
                     y = u.points,
                     x = u.hasRendered || 0,
                     b = h(m.defer, !!f.animation),
                     _ = p.renderer;
                  m = o(o(p.options.plotOptions && p.options.plotOptions.series && p.options.plotOptions.series.dataLabels, p.options.plotOptions && p.options.plotOptions[u.type] && p.options.plotOptions[u.type].dataLabels), m);
                  (g(m) || m.enabled || u._hasPointLabels) && (d = u.plotGroup("dataLabelsGroup", "data-labels", b && !x ? "hidden" : "visible", m.zIndex || 6), b && (d.attr({
                     opacity: +x
                  }), x || e(u, "afterAnimate", function () {
                     u.visible && d.show(!0), d[f.animation ? "animate" : "attr"]({
                        opacity: 1
                     }, {
                        duration: 200
                     })
                  })), r(y, function (e) {
                     l = v(o(m, e.dlOptions || e.options && e.options.dataLabels)), r(l, function (r, o) {
                        var s, c, l, m, g = r.enabled && !e.isNull && i(e, r),
                           v = e.dataLabels ? e.dataLabels[o] : e.dataLabel,
                           y = e.connectors ? e.connectors[o] : e.connector,
                           x = !v;
                        g && (s = e.getLabelConfig(), c = r[e.formatPrefix + "Format"] || r.format, s = n(c) ? a(c, s, p.time) : (r[e.formatPrefix + "Formatter"] || r.formatter).call(s, r), c = r.style, l = r.rotation, c.color = h(r.color, c.color, u.color, "#000000"), "contrast" === c.color && (e.contrastColor = _.getContrast(e.color || u.color), c.color = r.inside || 0 > h(r.distance, e.labelDistance) || f.stacking ? e.contrastColor : "#000000"), f.cursor && (c.cursor = f.cursor), m = {
                           fill: r.backgroundColor,
                           stroke: r.borderColor,
                           "stroke-width": r.borderWidth,
                           r: r.borderRadius || 0,
                           rotation: l,
                           padding: r.padding,
                           zIndex: 1
                        }, t.objectEach(m, function (t, e) {
                           void 0 === t && delete m[e]
                        })), !v || g && n(s) ? g && n(s) && (v ? m.text = s : (e.dataLabels = e.dataLabels || [], v = e.dataLabels[o] = l ? _.text(s, 0, -9999).addClass("highcharts-data-label") : _.label(s, 0, -9999, r.shape, null, null, r.useHTML, null, "data-label"), o || (e.dataLabel = v), v.addClass(" highcharts-data-label-color-" + e.colorIndex + " " + (r.className || "") + (r.useHTML ? " highcharts-tracker" : ""))), v.options = r, v.attr(m), v.css(c).shadow(r.shadow), v.added || v.add(d), u.alignDataLabel(e, v, r, null, x)) : (e.dataLabel = e.dataLabel.destroy(), e.dataLabels && (1 === e.dataLabels.length ? delete e.dataLabels : delete e.dataLabels[o]), o || delete e.dataLabel, y && (e.connector = e.connector.destroy(), e.connectors && (1 === e.connectors.length ? delete e.connectors : delete e.connectors[o])))
                     })
                  })), t.fireEvent(this, "afterDrawDataLabels")
               }, u.prototype.alignDataLabel = function (t, e, i, n, r) {
                  var a, s = this.chart,
                     c = s.inverted,
                     l = h(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                     d = h(t.plotY, -9999),
                     u = e.getBBox(),
                     p = i.rotation,
                     f = i.align,
                     m = this.visible && (t.series.forceDL || s.isInsidePlot(l, Math.round(d), c) || n && s.isInsidePlot(l, c ? n.x + 1 : n.y + n.height - 1, c)),
                     g = "justify" === h(i.overflow, "justify");
                  m && (a = i.style.fontSize, a = s.renderer.fontMetrics(a, e).b, n = o({
                     x: c ? this.yAxis.len - d : l,
                     y: Math.round(c ? this.xAxis.len - l : d),
                     width: 0,
                     height: 0
                  }, n), o(i, {
                     width: u.width,
                     height: u.height
                  }), p ? (g = !1, l = s.renderer.rotCorr(a, p), l = {
                     x: n.x + i.x + n.width / 2 + l.x,
                     y: n.y + i.y + {
                        top: 0,
                        middle: .5,
                        bottom: 1
                     } [i.verticalAlign] * n.height
                  }, e[r ? "attr" : "animate"](l).attr({
                     align: f
                  }), d = (p + 720) % 360, d = 180 < d && 360 > d, "left" === f ? l.y -= d ? u.height : 0 : "center" === f ? (l.x -= u.width / 2, l.y -= u.height / 2) : "right" === f && (l.x -= u.width, l.y -= d ? 0 : u.height), e.placed = !0, e.alignAttr = l) : (e.align(i, null, n), l = e.alignAttr), g && 0 <= n.height ? t.isLabelJustified = this.justifyDataLabel(e, i, l, u, n, r) : h(i.crop, !0) && (m = s.isInsidePlot(l.x, l.y) && s.isInsidePlot(l.x + u.width, l.y + u.height)), i.shape && !p) && e[r ? "attr" : "animate"]({
                     anchorX: c ? s.plotWidth - t.plotY : t.plotX,
                     anchorY: c ? s.plotHeight - t.plotX : t.plotY
                  }), m || (e.attr({
                     y: -9999
                  }), e.placed = !1)
               }, u.prototype.justifyDataLabel = function (t, e, i, n, r, o) {
                  var a, s, c = this.chart,
                     l = e.align,
                     h = e.verticalAlign,
                     d = t.box ? 0 : t.padding || 0;
                  return a = i.x + d, 0 > a && ("right" === l ? e.align = "left" : e.x = -a, s = !0), a = i.x + n.width - d, a > c.plotWidth && ("left" === l ? e.align = "right" : e.x = c.plotWidth - a, s = !0), a = i.y + d, 0 > a && ("bottom" === h ? e.verticalAlign = "top" : e.y = -a, s = !0), a = i.y + n.height - d, a > c.plotHeight && ("top" === h ? e.verticalAlign = "bottom" : e.y = c.plotHeight - a, s = !0), s && (t.placed = !o, t.align(e, null, r)), s
               }, p.pie && (p.pie.prototype.drawDataLabels = function () {
                  var e, o, a, s, c, l, d, p, f, m, g = this,
                     v = g.data,
                     y = g.chart,
                     x = g.options.dataLabels,
                     b = h(x.connectorPadding, 10),
                     _ = h(x.connectorWidth, 1),
                     w = y.plotWidth,
                     k = y.plotHeight,
                     S = Math.round(y.chartWidth / 3),
                     M = g.center,
                     A = M[2] / 2,
                     C = M[1],
                     P = [
                        [],
                        []
                     ],
                     T = [0, 0, 0, 0];
                  g.visible && (x.enabled || g._hasPointLabels) && (r(v, function (t) {
                     t.dataLabel && t.visible && t.dataLabel.shortened && (t.dataLabel.attr({
                        width: "auto"
                     }).css({
                        width: "auto",
                        textOverflow: "clip"
                     }), t.dataLabel.shortened = !1)
                  }), u.prototype.drawDataLabels.apply(g), r(v, function (t) {
                     t.dataLabel && (t.visible ? (P[t.half].push(t), t.dataLabel._pos = null, !n(x.style.width) && !n(t.options.dataLabels && t.options.dataLabels.style && t.options.dataLabels.style.width) && t.dataLabel.getBBox().width > S && (t.dataLabel.css({
                        width: .7 * S
                     }), t.dataLabel.shortened = !0)) : (t.dataLabel = t.dataLabel.destroy(), t.dataLabels && 1 === t.dataLabels.length && delete t.dataLabels))
                  }), r(P, function (i, o) {
                     var u, v, _, S = i.length,
                        P = [];
                     if (S)
                        for (g.sortByAngle(i, o - .5), 0 < g.maxLabelDistance && (u = Math.max(0, C - A - g.maxLabelDistance), v = Math.min(C + A + g.maxLabelDistance, y.plotHeight), r(i, function (t) {
                              0 < t.labelDistance && t.dataLabel && (t.top = Math.max(0, C - A - t.labelDistance), t.bottom = Math.min(C + A + t.labelDistance, y.plotHeight), _ = t.dataLabel.getBBox().height || 21, t.distributeBox = {
                                 target: t.labelPos[1] - t.top + _ / 2,
                                 size: _,
                                 rank: t.y
                              }, P.push(t.distributeBox))
                           }), u = v + _ - u, t.distribute(P, u, u / 5)), m = 0; m < S; m++) e = i[m], c = e.labelPos, a = e.dataLabel, f = !1 === e.visible ? "hidden" : "inherit", p = u = c[1], P && n(e.distributeBox) && (void 0 === e.distributeBox.pos ? f = "hidden" : (l = e.distributeBox.size, p = e.top + e.distributeBox.pos)), delete e.positionIndex, d = x.justify ? M[0] + (o ? -1 : 1) * (A + e.labelDistance) : g.getX(p < e.top + 2 || p > e.bottom - 2 ? u : p, o, e), a._attr = {
                           visibility: f,
                           align: c[6]
                        }, a._pos = {
                           x: d + x.x + ({
                              left: b,
                              right: -b
                           } [c[6]] || 0),
                           y: p + x.y - 10
                        }, c.x = d, c.y = p, h(x.crop, !0) && (s = a.getBBox().width, u = null, d - s < b && 1 === o ? (u = Math.round(s - d + b), T[3] = Math.max(u, T[3])) : d + s > w - b && 0 === o && (u = Math.round(d + s - w + b), T[1] = Math.max(u, T[1])), 0 > p - l / 2 ? T[0] = Math.max(Math.round(l / 2 - p), T[0]) : p + l / 2 > k && (T[2] = Math.max(Math.round(p + l / 2 - k), T[2])), a.sideOverflow = u)
                  }), 0 === i(T) || this.verifyDataLabelOverflow(T)) && (this.placeDataLabels(), _ && r(this.points, function (t) {
                     var e;
                     o = t.connector, (a = t.dataLabel) && a._pos && t.visible && 0 < t.labelDistance ? (f = a._attr.visibility, (e = !o) && (t.connector = o = y.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(g.dataLabelsGroup), o.attr({
                        "stroke-width": _,
                        stroke: x.connectorColor || t.color || "#666666"
                     })), o[e ? "attr" : "animate"]({
                        d: g.connectorPath(t.labelPos)
                     }), o.attr("visibility", f)) : o && (t.connector = o.destroy())
                  }))
               }, p.pie.prototype.connectorPath = function (t) {
                  var e = t.x,
                     i = t.y;
                  return h(this.options.dataLabels.softConnector, !0) ? ["M", e + ("left" === t[6] ? 5 : -5), i, "C", e, i, 2 * t[2] - t[4], 2 * t[3] - t[5], t[2], t[3], "L", t[4], t[5]] : ["M", e + ("left" === t[6] ? 5 : -5), i, "L", t[2], t[3], "L", t[4], t[5]]
               }, p.pie.prototype.placeDataLabels = function () {
                  r(this.points, function (t) {
                     var e = t.dataLabel;
                     e && t.visible && ((t = e._pos) ? (e.sideOverflow && (e._attr.width = e.getBBox().width - e.sideOverflow, e.css({
                        width: e._attr.width + "px",
                        textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
                     }), e.shortened = !0), e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({
                        y: -9999
                     }))
                  }, this)
               }, p.pie.prototype.alignDataLabel = l, p.pie.prototype.verifyDataLabelOverflow = function (t) {
                  var e, i = this.center,
                     n = this.options,
                     r = n.center,
                     o = n.minSize || 80,
                     a = null !== n.size;
                  return a || (null !== r[0] ? e = Math.max(i[2] - Math.max(t[1], t[3]), o) : (e = Math.max(i[2] - t[1] - t[3], o), i[0] += (t[3] - t[1]) / 2), null !== r[1] ? e = Math.max(Math.min(e, i[2] - Math.max(t[0], t[2])), o) : (e = Math.max(Math.min(e, i[2] - t[0] - t[2]), o), i[1] += (t[0] - t[2]) / 2), e < i[2] ? (i[2] = e, i[3] = Math.min(d(n.innerSize || 0, e), e), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : a = !0), a
               }), p.column && (p.column.prototype.alignDataLabel = function (t, e, i, n, r) {
                  var o = this.chart.inverted,
                     a = t.series,
                     s = t.dlBox || t.shapeArgs,
                     l = h(t.below, t.plotY > h(this.translatedThreshold, a.yAxis.len)),
                     d = h(i.inside, !!this.options.stacking);
                  s && (n = c(s), 0 > n.y && (n.height += n.y, n.y = 0), s = n.y + n.height - a.yAxis.len, 0 < s && (n.height -= s), o && (n = {
                     x: a.yAxis.len - n.y - n.height,
                     y: a.xAxis.len - n.x - n.width,
                     width: n.height,
                     height: n.width
                  }), d || (o ? (n.x += l ? 0 : n.width, n.width = 0) : (n.y += l ? n.height : 0, n.height = 0))), i.align = h(i.align, !o || d ? "center" : l ? "right" : "left"), i.verticalAlign = h(i.verticalAlign, o || d ? "middle" : l ? "top" : "bottom"), u.prototype.alignDataLabel.call(this, t, e, i, n, r), t.isLabelJustified && t.contrastColor && e.css({
                     color: t.contrastColor
                  })
               })
            }(e),
            function (t) {
               var e = t.Chart,
                  i = t.each,
                  n = t.isArray,
                  r = t.objectEach,
                  o = t.pick;
               t = t.addEvent, t(e, "render", function () {
                  var t = [];
                  i(this.labelCollectors || [], function (e) {
                     t = t.concat(e())
                  }), i(this.yAxis || [], function (e) {
                     e.options.stackLabels && !e.options.stackLabels.allowOverlap && r(e.stacks, function (e) {
                        r(e, function (e) {
                           t.push(e.label)
                        })
                     })
                  }), i(this.series || [], function (e) {
                     var r = e.options.dataLabels;
                     e.visible && (!1 !== r.enabled || e._hasPointLabels) && i(e.points, function (e) {
                        if (e.visible) {
                           var r = n(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [];
                           i(r, function (i) {
                              var n = i.options;
                              i.labelrank = o(n.labelrank, e.labelrank, e.shapeArgs && e.shapeArgs.height), n.allowOverlap || t.push(i)
                           })
                        }
                     })
                  }), this.hideOverlappingLabels(t)
               }), e.prototype.hideOverlappingLabels = function (t) {
                  var e, n, r, o, a, s, c = t.length,
                     l = this.renderer,
                     h = function (t, e, i, n, r, o, a, s) {
                        return !(r > t + i || r + a < t || o > e + n || o + s < e)
                     };
                  for (r = function (t) {
                        var e, i, n, r = t.box ? 0 : t.padding || 0;
                        if (n = 0, t && (!t.alignAttr || t.placed)) return e = t.alignAttr || {
                           x: t.attr("x"),
                           y: t.attr("y")
                        }, i = t.parentGroup, t.width || (n = t.getBBox(), t.width = n.width, t.height = n.height, n = l.fontMetrics(null, t.element).h), {
                           x: e.x + (i.translateX || 0) + r,
                           y: e.y + (i.translateY || 0) + r - n,
                           width: t.width - 2 * r,
                           height: t.height - 2 * r
                        }
                     }, n = 0; n < c; n++)(e = t[n]) && (e.oldOpacity = e.opacity, e.newOpacity = 1, e.absoluteBox = r(e));
                  for (t.sort(function (t, e) {
                        return (e.labelrank || 0) - (t.labelrank || 0)
                     }), n = 0; n < c; n++)
                     for (s = (r = t[n]) && r.absoluteBox, e = n + 1; e < c; ++e) a = (o = t[e]) && o.absoluteBox, s && a && r !== o && 0 !== r.newOpacity && 0 !== o.newOpacity && (a = h(s.x, s.y, s.width, s.height, a.x, a.y, a.width, a.height)) && ((r.labelrank < o.labelrank ? r : o).newOpacity = 0);
                  i(t, function (t) {
                     var e, i;
                     t && (i = t.newOpacity, t.oldOpacity !== i && (t.alignAttr && t.placed ? (i ? t.show(!0) : e = function () {
                        t.hide()
                     }, t.alignAttr.opacity = i, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e)) : t.attr({
                        opacity: i
                     })), t.isOld = !0)
                  })
               }
            }(e),
            function (t) {
               var e, i = t.addEvent,
                  n = t.Chart,
                  r = t.createElement,
                  o = t.css,
                  a = t.defaultOptions,
                  s = t.defaultPlotOptions,
                  c = t.each,
                  l = t.extend,
                  h = t.fireEvent,
                  d = t.hasTouch,
                  u = t.inArray,
                  p = t.isObject,
                  f = t.Legend,
                  m = t.merge,
                  g = t.pick,
                  v = t.Point,
                  y = t.Series,
                  x = t.seriesTypes,
                  b = t.svg;
               e = t.TrackerMixin = {
                  drawTrackerPoint: function () {
                     var t = this,
                        e = t.chart.pointer,
                        i = function (t) {
                           var i = e.getPointFromEvent(t);
                           void 0 !== i && (e.isDirectTouch = !0, i.onMouseOver(t))
                        };
                     c(t.points, function (t) {
                        t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.div ? t.dataLabel.div.point = t : t.dataLabel.element.point = t)
                     }), t._hasTracking || (c(t.trackerGroups, function (n) {
                        t[n] && (t[n].addClass("highcharts-tracker").on("mouseover", i).on("mouseout", function (t) {
                           e.onTrackerMouseOut(t)
                        }), d && t[n].on("touchstart", i), t.options.cursor && t[n].css(o).css({
                           cursor: t.options.cursor
                        }))
                     }), t._hasTracking = !0), h(this, "afterDrawTracker")
                  },
                  drawTrackerGraph: function () {
                     var t, e = this,
                        i = e.options,
                        n = i.trackByArea,
                        r = [].concat(n ? e.areaPath : e.graphPath),
                        o = r.length,
                        a = e.chart,
                        s = a.pointer,
                        l = a.renderer,
                        u = a.options.tooltip.snap,
                        p = e.tracker,
                        f = function () {
                           a.hoverSeries !== e && e.onMouseOver()
                        },
                        m = "rgba(192,192,192," + (b ? 1e-4 : .002) + ")";
                     if (o && !n)
                        for (t = o + 1; t--;) "M" === r[t] && r.splice(t + 1, 0, r[t + 1] - u, r[t + 2], "L"), (t && "M" === r[t] || t === o) && r.splice(t, 0, "L", r[t - 2] + u, r[t - 1]);
                     p ? p.attr({
                        d: r
                     }) : e.graph && (e.tracker = l.path(r).attr({
                        "stroke-linejoin": "round",
                        stroke: m,
                        fill: n ? m : "none",
                        "stroke-width": e.graph.strokeWidth() + (n ? 0 : 2 * u),
                        visibility: e.visible ? "visible" : "hidden",
                        zIndex: 2
                     }).addClass(n ? "highcharts-tracker-area" : "highcharts-tracker-line").add(e.group), c([e.tracker, e.markerGroup], function (t) {
                        t.addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (t) {
                           s.onTrackerMouseOut(t)
                        }), i.cursor && t.css({
                           cursor: i.cursor
                        }), d && t.on("touchstart", f)
                     })), h(this, "afterDrawTracker")
                  }
               }, x.column && (x.column.prototype.drawTracker = e.drawTrackerPoint), x.pie && (x.pie.prototype.drawTracker = e.drawTrackerPoint), x.scatter && (x.scatter.prototype.drawTracker = e.drawTrackerPoint), a.legend.itemStyle.cursor = "pointer", l(f.prototype, {
                  setItemEvents: function (t, e, i) {
                     var n = this,
                        r = n.chart.renderer.boxWrapper,
                        o = "highcharts-legend-" + (t instanceof v ? "point" : "series") + "-active";
                     (i ? e : t.legendGroup).on("mouseover", function () {
                        t.setState("hover"), r.addClass(o), e.css(n.options.itemHoverStyle)
                     }).on("mouseout", function () {
                        e.css(m(t.visible ? n.itemStyle : n.itemHiddenStyle)), r.removeClass(o), t.setState()
                     }).on("click", function (e) {
                        var i = function () {
                           t.setVisible && t.setVisible()
                        };
                        r.removeClass(o), e = {
                           browserEvent: e
                        }, t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : h(t, "legendItemClick", e, i)
                     })
                  },
                  createCheckboxForItem: function (t) {
                     t.checkbox = r("input", {
                        type: "checkbox",
                        className: "highcharts-legend-checkbox",
                        checked: t.selected,
                        defaultChecked: t.selected
                     }, this.options.itemCheckboxStyle, this.chart.container), i(t.checkbox, "click", function (e) {
                        h(t.series || t, "checkboxClick", {
                           checked: e.target.checked,
                           item: t
                        }, function () {
                           t.select()
                        })
                     })
                  }
               }), l(n.prototype, {
                  showResetZoom: function () {
                     function t() {
                        e.zoomOut()
                     }
                     var e = this,
                        i = a.lang,
                        n = e.options.chart.resetZoomButton,
                        r = n.theme,
                        o = r.states,
                        s = "chart" === n.relativeTo ? null : "plotBox";
                     h(this, "beforeShowResetZoom", null, function () {
                        e.resetZoomButton = e.renderer.button(i.resetZoom, null, null, t, r, o && o.hover).attr({
                           align: n.position.align,
                           title: i.resetZoomTitle
                        }).addClass("highcharts-reset-zoom").add().align(n.position, !1, s)
                     })
                  },
                  zoomOut: function () {
                     h(this, "selection", {
                        resetSelection: !0
                     }, this.zoom)
                  },
                  zoom: function (t) {
                     var e, i, n = this.pointer,
                        r = !1;
                     !t || t.resetSelection ? (c(this.axes, function (t) {
                        e = t.zoom()
                     }), n.initiated = !1) : c(t.xAxis.concat(t.yAxis), function (t) {
                        var i = t.axis;
                        n[i.isXAxis ? "zoomX" : "zoomY"] && (e = i.zoom(t.min, t.max), i.displayBtn && (r = !0))
                     }), i = this.resetZoomButton, r && !i ? this.showResetZoom() : !r && p(i) && (this.resetZoomButton = i.destroy()), e && this.redraw(g(this.options.chart.animation, t && t.animation, 100 > this.pointCount))
                  },
                  pan: function (t, e) {
                     var i, n = this,
                        r = n.hoverPoints;
                     r && c(r, function (t) {
                        t.setState()
                     }), c("xy" === e ? [1, 0] : [1], function (e) {
                        e = n[e ? "xAxis" : "yAxis"][0];
                        var r = e.horiz,
                           o = t[r ? "chartX" : "chartY"],
                           a = (r = r ? "mouseDownX" : "mouseDownY", n[r]),
                           s = (e.pointRange || 0) / 2,
                           c = e.reversed && !n.inverted || !e.reversed && n.inverted ? -1 : 1,
                           l = e.getExtremes(),
                           h = e.toValue(a - o, !0) + s * c,
                           d = (c = e.toValue(a + e.len - o, !0) - s * c, c < h);
                        a = d ? c : h, h = d ? h : c, c = Math.min(l.dataMin, s ? l.min : e.toValue(e.toPixels(l.min) - e.minPixelPadding)), s = Math.max(l.dataMax, s ? l.max : e.toValue(e.toPixels(l.max) + e.minPixelPadding)), d = c - a;
                        0 < d && (h += d, a = c), d = h - s, 0 < d && (h = s, a -= d), e.series.length && a !== l.min && h !== l.max && (e.setExtremes(a, h, !1, !1, {
                           trigger: "pan"
                        }), i = !0), n[r] = o
                     }), i && n.redraw(!1), o(n.container, {
                        cursor: "move"
                     })
                  }
               }), l(v.prototype, {
                  select: function (t, e) {
                     var i = this,
                        n = i.series,
                        r = n.chart;
                     t = g(t, !i.selected), i.firePointEvent(t ? "select" : "unselect", {
                        accumulate: e
                     }, function () {
                        i.selected = i.options.selected = t, n.options.data[u(i, n.data)] = i.options, i.setState(t && "select"), e || c(r.getSelectedPoints(), function (t) {
                           t.selected && t !== i && (t.selected = t.options.selected = !1, n.options.data[u(t, n.data)] = t.options, t.setState(""), t.firePointEvent("unselect"))
                        })
                     })
                  },
                  onMouseOver: function (t) {
                     var e = this.series.chart,
                        i = e.pointer;
                     t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted), i.runPointActions(t, this)
                  },
                  onMouseOut: function () {
                     var t = this.series.chart;
                     this.firePointEvent("mouseOut"), c(t.hoverPoints || [], function (t) {
                        t.setState()
                     }), t.hoverPoints = t.hoverPoint = null
                  },
                  importEvents: function () {
                     if (!this.hasImportedEvents) {
                        var e = this,
                           n = m(e.series.options.point, e.options).events;
                        e.events = n, t.objectEach(n, function (t, n) {
                           i(e, n, t)
                        }), this.hasImportedEvents = !0
                     }
                  },
                  setState: function (t, e) {
                     var i, n = Math.floor(this.plotX),
                        r = this.plotY,
                        o = this.series,
                        a = o.options.states[t || "normal"] || {},
                        c = s[o.type].marker && o.options.marker,
                        d = c && !1 === c.enabled,
                        u = c && c.states && c.states[t || "normal"] || {},
                        p = !1 === u.enabled,
                        f = o.stateMarkerGraphic,
                        m = this.marker || {},
                        v = o.chart,
                        y = o.halo,
                        x = c && o.markerAttribs;
                     t = t || "", t === this.state && !e || this.selected && "select" !== t || !1 === a.enabled || t && (p || d && !1 === u.enabled) || t && m.states && m.states[t] && !1 === m.states[t].enabled || (x && (i = o.markerAttribs(this, t)), this.graphic ? (this.state && this.graphic.removeClass("highcharts-point-" + this.state), t && this.graphic.addClass("highcharts-point-" + t), this.graphic.animate(o.pointAttribs(this, t), g(v.options.chart.animation, a.animation)), i && this.graphic.animate(i, g(v.options.chart.animation, u.animation, c.animation)), f && f.hide()) : (t && u && (c = m.symbol || o.symbol, f && f.currentSymbol !== c && (f = f.destroy()), f ? f[e ? "animate" : "attr"]({
                        x: i.x,
                        y: i.y
                     }) : c && (o.stateMarkerGraphic = f = v.renderer.symbol(c, i.x, i.y, i.width, i.height).add(o.markerGroup), f.currentSymbol = c), f && f.attr(o.pointAttribs(this, t))), f && (f[t && v.isInsidePlot(n, r, v.inverted) ? "show" : "hide"](), f.element.point = this)), (n = a.halo) && n.size ? (y || (o.halo = y = v.renderer.path().add((this.graphic || f).parentGroup)), y.show()[e ? "animate" : "attr"]({
                        d: this.haloPath(n.size)
                     }), y.attr({
                        class: "highcharts-halo highcharts-color-" + g(this.colorIndex, o.colorIndex) + (this.className ? " " + this.className : ""),
                        zIndex: -1
                     }), y.point = this, y.attr(l({
                        fill: this.color || o.color,
                        "fill-opacity": n.opacity
                     }, n.attributes))) : y && y.point && y.point.haloPath && y.animate({
                        d: y.point.haloPath(0)
                     }, null, y.hide), this.state = t, h(this, "afterSetState"))
                  },
                  haloPath: function (t) {
                     return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - t, this.plotY - t, 2 * t, 2 * t)
                  }
               }), l(y.prototype, {
                  onMouseOver: function () {
                     var t = this.chart,
                        e = t.hoverSeries;
                     e && e !== this && e.onMouseOut(), this.options.events.mouseOver && h(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
                  },
                  onMouseOut: function () {
                     var t = this.options,
                        e = this.chart,
                        i = e.tooltip,
                        n = e.hoverPoint;
                     e.hoverSeries = null, n && n.onMouseOut(), this && t.events.mouseOut && h(this, "mouseOut"), !i || this.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(), this.setState()
                  },
                  setState: function (t) {
                     var e = this,
                        i = e.options,
                        n = e.graph,
                        r = i.states,
                        o = i.lineWidth;
                     i = 0;
                     if (t = t || "", e.state !== t && (c([e.group, e.markerGroup, e.dataLabelsGroup], function (i) {
                           i && (e.state && i.removeClass("highcharts-series-" + e.state), t && i.addClass("highcharts-series-" + t))
                        }), e.state = t, !r[t] || !1 !== r[t].enabled) && (t && (o = r[t].lineWidth || o + (r[t].lineWidthPlus || 0)), n && !n.dashstyle))
                        for (o = {
                              "stroke-width": o
                           }, n.animate(o, g(r[t || "normal"] && r[t || "normal"].animation, e.chart.options.chart.animation)); e["zone-graph-" + i];) e["zone-graph-" + i].attr(o), i += 1
                  },
                  setVisible: function (t, e) {
                     var i, n = this,
                        r = n.chart,
                        o = n.legendItem,
                        a = r.options.chart.ignoreHiddenSeries,
                        s = n.visible;
                     i = (n.visible = t = n.options.visible = n.userOptions.visible = void 0 === t ? !s : t) ? "show" : "hide", c(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (t) {
                        n[t] && n[t][i]()
                     }), r.hoverSeries !== n && (r.hoverPoint && r.hoverPoint.series) !== n || n.onMouseOut(), o && r.legend.colorizeItem(n, t), n.isDirty = !0, n.options.stacking && c(r.series, function (t) {
                        t.options.stacking && t.visible && (t.isDirty = !0)
                     }), c(n.linkedSeries, function (e) {
                        e.setVisible(t, !1)
                     }), a && (r.isDirtyBox = !0), h(n, i), !1 !== e && r.redraw()
                  },
                  show: function () {
                     this.setVisible(!0)
                  },
                  hide: function () {
                     this.setVisible(!1)
                  },
                  select: function (t) {
                     this.selected = t = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), h(this, t ? "select" : "unselect")
                  },
                  drawTracker: e.drawTrackerGraph
               })
            }(e),
            function (t) {
               var e = t.Chart,
                  i = t.each,
                  n = t.inArray,
                  r = t.isArray,
                  o = t.isObject,
                  a = t.pick,
                  s = t.splat;
               e.prototype.setResponsive = function (e) {
                  var n = this.options.responsive,
                     r = [],
                     o = this.currentResponsive;
                  n && n.rules && i(n.rules, function (i) {
                     void 0 === i._id && (i._id = t.uniqueKey()), this.matchResponsiveRule(i, r, e)
                  }, this);
                  var a = t.merge.apply(0, t.map(r, function (e) {
                     return t.find(n.rules, function (t) {
                        return t._id === e
                     }).chartOptions
                  }));
                  r = r.toString() || void 0;
                  r !== (o && o.ruleIds) && (o && this.update(o.undoOptions, e), r ? (this.currentResponsive = {
                     ruleIds: r,
                     mergedOptions: a,
                     undoOptions: this.currentOptions(a)
                  }, this.update(a, e)) : this.currentResponsive = void 0)
               }, e.prototype.matchResponsiveRule = function (t, e) {
                  var i = t.condition;
                  (i.callback || function () {
                     return this.chartWidth <= a(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= a(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= a(i.minWidth, 0) && this.chartHeight >= a(i.minHeight, 0)
                  }).call(this) && e.push(t._id)
               }, e.prototype.currentOptions = function (e) {
                  function i(e, a, c, l) {
                     var h;
                     t.objectEach(e, function (t, e) {
                        if (!l && -1 < n(e, ["series", "xAxis", "yAxis"]))
                           for (t = s(t), c[e] = [], h = 0; h < t.length; h++) a[e][h] && (c[e][h] = {}, i(t[h], a[e][h], c[e][h], l + 1));
                        else o(t) ? (c[e] = r(t) ? [] : {}, i(t, a[e] || {}, c[e], l + 1)) : c[e] = a[e] || null
                     })
                  }
                  var a = {};
                  return i(e, this.options, a, 0), a
               }
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.Axis,
                  n = t.Chart,
                  r = t.css,
                  o = t.defined,
                  a = t.each,
                  s = t.extend,
                  c = t.noop,
                  l = t.pick,
                  h = t.timeUnits,
                  d = t.wrap;
               d(t.Series.prototype, "init", function (t) {
                  var i;
                  t.apply(this, Array.prototype.slice.call(arguments, 1)), (i = this.xAxis) && i.options.ordinal && e(this, "updatedData", function () {
                     delete i.ordinalIndex
                  })
               }), d(i.prototype, "getTimeTicks", function (t, e, i, n, r, a, s, c) {
                  var l, d, u, p, f, m = 0,
                     g = {},
                     v = [],
                     y = -Number.MAX_VALUE,
                     x = this.options.tickPixelInterval,
                     b = this.chart.time;
                  if (!this.options.ordinal && !this.options.breaks || !a || 3 > a.length || void 0 === i) return t.call(this, e, i, n, r);
                  for (p = a.length, l = 0; l < p; l++) {
                     if (f = l && a[l - 1] > n, a[l] < i && (m = l), l === p - 1 || a[l + 1] - a[l] > 5 * s || f) {
                        if (a[l] > y) {
                           for (d = t.call(this, e, a[m], a[l], r); d.length && d[0] <= y;) d.shift();
                           d.length && (y = d[d.length - 1]), v = v.concat(d)
                        }
                        m = l + 1
                     }
                     if (f) break
                  }
                  if (t = d.info, c && t.unitRange <= h.hour) {
                     for (l = v.length - 1, m = 1; m < l; m++) b.dateFormat("%d", v[m]) !== b.dateFormat("%d", v[m - 1]) && (g[v[m]] = "day", u = !0);
                     u && (g[v[0]] = "day"), t.higherRanks = g
                  }
                  if (v.info = t, c && o(x)) {
                     var _;
                     for (c = b = v.length, l = [], u = []; c--;) m = this.translate(v[c]), _ && (u[c] = _ - m), l[c] = _ = m;
                     for (u.sort(), u = u[Math.floor(u.length / 2)], u < .6 * x && (u = null), c = v[b - 1] > n ? b - 1 : b, _ = void 0; c--;) m = l[c], n = Math.abs(_ - m), _ && n < .8 * x && (null === u || n < .8 * u) ? (g[v[c]] && !g[v[c + 1]] ? (n = c + 1, _ = m) : n = c, v.splice(n, 1)) : _ = m
                  }
                  return v
               }), s(i.prototype, {
                  beforeSetTickPositions: function () {
                     var t, e, i, n, r, s = [],
                        c = !1,
                        h = this.getExtremes(),
                        d = h.min,
                        u = h.max,
                        p = this.isXAxis && !!this.options.breaks,
                        f = (h = this.options.ordinal, Number.MAX_VALUE),
                        m = this.chart.options.chart.ignoreHiddenSeries;
                     if (i = "highcharts-navigator-xaxis" === this.options.className, !this.options.overscroll || this.max !== this.dataMax || this.chart.mouseIsDown && !i || this.eventArgs && (!this.eventArgs || "navigator" === this.eventArgs.trigger) || (this.max += this.options.overscroll, !i && o(this.userMin) && (this.min += this.options.overscroll)), h || p) {
                        if (a(this.series, function (i, n) {
                              if (e = [], !(m && !1 === i.visible || !1 === i.takeOrdinalPosition && !p) && (s = s.concat(i.processedXData), t = s.length, s.sort(function (t, e) {
                                    return t - e
                                 }), f = Math.min(f, l(i.closestPointRange, f)), t)) {
                                 for (n = 0; n < t - 1;) s[n] !== s[n + 1] && e.push(s[n + 1]), n++;
                                 e[0] !== s[0] && e.unshift(s[0]), s = e
                              }
                              i.isSeriesBoosting && (r = !0)
                           }), r && (s.length = 0), t = s.length, 2 < t) {
                           for (i = s[1] - s[0], n = t - 1; n-- && !c;) s[n + 1] - s[n] !== i && (c = !0);
                           !this.options.keepOrdinalPadding && (s[0] - d > i || u - s[s.length - 1] > i) && (c = !0)
                        } else this.options.overscroll && (2 === t ? f = s[1] - s[0] : 1 === t ? (f = this.options.overscroll, s = [s[0], s[0] + f]) : f = this.overscrollPointsRange);
                        c ? (this.options.overscroll && (this.overscrollPointsRange = f, s = s.concat(this.getOverscrollPositions())), this.ordinalPositions = s, i = this.ordinal2lin(Math.max(d, s[0]), !0), n = Math.max(this.ordinal2lin(Math.min(u, s[s.length - 1]), !0), 1), this.ordinalSlope = u = (u - d) / (n - i), this.ordinalOffset = d - i * u) : (this.overscrollPointsRange = l(this.closestPointRange, this.overscrollPointsRange), this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = void 0)
                     }
                     this.isOrdinal = h && c, this.groupIntervalFactor = null
                  },
                  val2lin: function (t, e) {
                     var i = this.ordinalPositions;
                     if (i) {
                        var n, r, o = i.length;
                        for (n = o; n--;)
                           if (i[n] === t) {
                              r = n;
                              break
                           } for (n = o - 1; n--;)
                           if (t > i[n] || 0 === n) {
                              t = (t - i[n]) / (i[n + 1] - i[n]), r = n + t;
                              break
                           } e = e ? r : this.ordinalSlope * (r || 0) + this.ordinalOffset
                     } else e = t;
                     return e
                  },
                  lin2val: function (t, e) {
                     var i = this.ordinalPositions;
                     if (i) {
                        var n, r = this.ordinalSlope,
                           o = this.ordinalOffset,
                           a = i.length - 1;
                        if (e) 0 > t ? t = i[0] : t > a ? t = i[a] : (a = Math.floor(t), n = t - a);
                        else
                           for (; a--;)
                              if (e = r * a + o, t >= e) {
                                 r = r * (a + 1) + o, n = (t - e) / (r - e);
                                 break
                              } return void 0 !== n && void 0 !== i[a] ? i[a] + (n ? n * (i[a + 1] - i[a]) : 0) : t
                     }
                     return t
                  },
                  getExtendedPositions: function () {
                     var t, e, n = this,
                        r = n.chart,
                        o = n.series[0].currentDataGrouping,
                        s = n.ordinalIndex,
                        l = o ? o.count + o.unitName : "raw",
                        h = n.options.overscroll,
                        d = n.getExtremes();
                     return s || (s = n.ordinalIndex = {}), s[l] || (t = {
                        series: [],
                        chart: r,
                        getExtremes: function () {
                           return {
                              min: d.dataMin,
                              max: d.dataMax + h
                           }
                        },
                        options: {
                           ordinal: !0
                        },
                        val2lin: i.prototype.val2lin,
                        ordinal2lin: i.prototype.ordinal2lin
                     }, a(n.series, function (i) {
                        e = {
                           xAxis: t,
                           xData: i.xData.slice(),
                           chart: r,
                           destroyGroupedData: c
                        }, e.xData = e.xData.concat(n.getOverscrollPositions()), e.options = {
                           dataGrouping: o ? {
                              enabled: !0,
                              forced: !0,
                              approximation: "open",
                              units: [
                                 [o.unitName, [o.count]]
                              ]
                           } : {
                              enabled: !1
                           }
                        }, i.processData.apply(e), t.series.push(e)
                     }), n.beforeSetTickPositions.apply(t), s[l] = t.ordinalPositions), s[l]
                  },
                  getOverscrollPositions: function () {
                     var e = this.options.overscroll,
                        i = this.overscrollPointsRange,
                        n = [],
                        r = this.dataMax;
                     if (t.defined(i))
                        for (n.push(r); r <= this.dataMax + e;) r += i, n.push(r);
                     return n
                  },
                  getGroupIntervalFactor: function (t, e, i) {
                     var n;
                     i = i.processedXData;
                     var r = i.length,
                        o = [];
                     if (n = this.groupIntervalFactor, !n) {
                        for (n = 0; n < r - 1; n++) o[n] = i[n + 1] - i[n];
                        o.sort(function (t, e) {
                           return t - e
                        }), o = o[Math.floor(r / 2)], t = Math.max(t, i[0]), e = Math.min(e, i[r - 1]), this.groupIntervalFactor = n = r * o / (e - t)
                     }
                     return n
                  },
                  postProcessTickInterval: function (t) {
                     var e = this.ordinalSlope;
                     return e ? this.options.breaks ? this.closestPointRange || t : t / (e / this.closestPointRange) : t
                  }
               }), i.prototype.ordinal2lin = i.prototype.val2lin, d(n.prototype, "pan", function (t, e) {
                  var i = this.xAxis[0],
                     n = i.options.overscroll,
                     o = e.chartX,
                     s = !1;
                  if (i.options.ordinal && i.series.length) {
                     var c, l = this.mouseDownX,
                        h = i.getExtremes(),
                        d = h.dataMax,
                        u = h.min,
                        p = h.max,
                        f = this.hoverPoints,
                        m = i.closestPointRange || i.overscrollPointsRange,
                        g = (l = (l - o) / (i.translationSlope * (i.ordinalSlope || m)), {
                           ordinalPositions: i.getExtendedPositions()
                        }),
                        v = (m = i.lin2val, i.val2lin);
                     g.ordinalPositions ? 1 < Math.abs(l) && (f && a(f, function (t) {
                        t.setState()
                     }), 0 > l ? (f = g, c = i.ordinalPositions ? i : g) : (f = i.ordinalPositions ? i : g, c = g), g = c.ordinalPositions, d > g[g.length - 1] && g.push(d), this.fixedRange = p - u, l = i.toFixedRange(null, null, m.apply(f, [v.apply(f, [u, !0]) + l, !0]), m.apply(c, [v.apply(c, [p, !0]) + l, !0])), l.min >= Math.min(h.dataMin, u) && l.max <= Math.max(d, p) + n && i.setExtremes(l.min, l.max, !0, !1, {
                        trigger: "pan"
                     }), this.mouseDownX = o, r(this.container, {
                        cursor: "move"
                     })) : s = !0
                  } else s = !0;
                  s && (n && (i.max = i.dataMax + n), t.apply(this, Array.prototype.slice.call(arguments, 1)))
               })
            }(e),
            function (t) {
               function e() {
                  return Array.prototype.slice.call(arguments, 1)
               }

               function i(t) {
                  t.apply(this), this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, r(this.pointArrayMap, ["y"]))
               }
               var n = t.addEvent,
                  r = t.pick,
                  o = t.wrap,
                  a = t.each,
                  s = t.extend,
                  c = t.isArray,
                  l = t.fireEvent,
                  h = t.Axis,
                  d = t.Series;
               s(h.prototype, {
                  isInBreak: function (t, e) {
                     var i = t.repeat || 1 / 0,
                        n = t.from,
                        r = t.to - t.from;
                     return e = e >= n ? (e - n) % i : i - (n - e) % i, t.inclusive ? e <= r : e < r && 0 !== e
                  },
                  isInAnyBreak: function (t, e) {
                     var i, n, o, a = this.options.breaks,
                        s = a && a.length;
                     if (s) {
                        for (; s--;) this.isInBreak(a[s], t) && (i = !0, n || (n = r(a[s].showPoints, !this.isXAxis)));
                        o = i && e ? i && !n : i
                     }
                     return o
                  }
               }), n(h, "afterInit", function () {
                  "function" === typeof this.setBreaks && this.setBreaks(this.options.breaks, !1)
               }), n(h, "afterSetTickPositions", function () {
                  if (this.isBroken) {
                     var t, e = this.tickPositions,
                        i = this.tickPositions.info,
                        n = [];
                     for (t = 0; t < e.length; t++) this.isInAnyBreak(e[t]) || n.push(e[t]);
                     this.tickPositions = n, this.tickPositions.info = i
                  }
               }), n(h, "afterSetOptions", function () {
                  this.isBroken && (this.options.ordinal = !1)
               }), h.prototype.setBreaks = function (t, e) {
                  function i(t) {
                     var e, i, n = t;
                     for (i = 0; i < o.breakArray.length; i++)
                        if (e = o.breakArray[i], e.to <= t) n -= e.len;
                        else {
                           if (e.from >= t) break;
                           if (o.isInBreak(e, t)) {
                              n -= t - e.from;
                              break
                           }
                        } return n
                  }

                  function n(t) {
                     var e, i;
                     for (i = 0; i < o.breakArray.length && (e = o.breakArray[i], !(e.from >= t)); i++) e.to < t ? t += e.len : o.isInBreak(e, t) && (t += e.len);
                     return t
                  }
                  var o = this,
                     s = c(t) && !!t.length;
                  o.isDirty = o.isBroken !== s, o.isBroken = s, o.options.breaks = o.userOptions.breaks = t, o.forceRedraw = !0, s || o.val2lin !== i || (delete o.val2lin, delete o.lin2val), s && (o.userOptions.ordinal = !1, o.val2lin = i, o.lin2val = n, o.setExtremes = function (t, e, i, n, r) {
                     if (this.isBroken) {
                        for (; this.isInAnyBreak(t);) t -= this.closestPointRange;
                        for (; this.isInAnyBreak(e);) e -= this.closestPointRange
                     }
                     h.prototype.setExtremes.call(this, t, e, i, n, r)
                  }, o.setAxisTranslation = function (t) {
                     if (h.prototype.setAxisTranslation.call(this, t), this.unitLength = null, this.isBroken) {
                        t = o.options.breaks;
                        var e, i, n, s, c = [],
                           d = [],
                           u = 0,
                           p = o.userMin || o.min,
                           f = o.userMax || o.max,
                           m = r(o.pointRangePadding, 0);
                        a(t, function (t) {
                           i = t.repeat || 1 / 0, o.isInBreak(t, p) && (p += t.to % i - p % i), o.isInBreak(t, f) && (f -= f % i - t.from % i)
                        }), a(t, function (t) {
                           for (n = t.from, i = t.repeat || 1 / 0; n - i > p;) n -= i;
                           for (; n < p;) n += i;
                           for (s = n; s < f; s += i) c.push({
                              value: s,
                              move: "in"
                           }), c.push({
                              value: s + (t.to - t.from),
                              move: "out",
                              size: t.breakSize
                           })
                        }), c.sort(function (t, e) {
                           return t.value === e.value ? ("in" === t.move ? 0 : 1) - ("in" === e.move ? 0 : 1) : t.value - e.value
                        }), e = 0, n = p, a(c, function (t) {
                           e += "in" === t.move ? 1 : -1, 1 === e && "in" === t.move && (n = t.value), 0 === e && (d.push({
                              from: n,
                              to: t.value,
                              len: t.value - n - (t.size || 0)
                           }), u += t.value - n - (t.size || 0))
                        }), o.breakArray = d, o.unitLength = f - p - u + m, l(o, "afterBreaks"), o.staticScale ? o.transA = o.staticScale : o.unitLength && (o.transA *= (f - o.min + m) / o.unitLength), m && (o.minPixelPadding = o.transA * o.minPointOffset), o.min = p, o.max = f
                     }
                  }), r(e, !0) && this.chart.redraw()
               }, o(d.prototype, "generatePoints", function (t) {
                  t.apply(this, e(arguments));
                  var i, n, r = this.xAxis,
                     o = this.yAxis,
                     a = this.points,
                     s = a.length,
                     c = this.options.connectNulls;
                  if (r && o && (r.options.breaks || o.options.breaks))
                     for (; s--;) i = a[s], n = null === i.y && !1 === c, n || !r.isInAnyBreak(i.x, !0) && !o.isInAnyBreak(i.y, !0) || (a.splice(s, 1), this.data[s] && this.data[s].destroyElements())
               }), t.Series.prototype.drawBreaks = function (t, e) {
                  var i, n, o, s, c = this,
                     h = c.points;
                  t && a(e, function (e) {
                     i = t.breakArray || [], n = t.isXAxis ? t.min : r(c.options.threshold, t.min), a(h, function (c) {
                        s = r(c["stack" + e.toUpperCase()], c[e]), a(i, function (e) {
                           o = !1, n < e.from && s > e.to || n > e.from && s < e.from ? o = "pointBreak" : (n < e.from && s > e.from && s < e.to || n > e.from && s > e.to && s < e.from) && (o = "pointInBreak"), o && l(t, o, {
                              point: c,
                              brk: e
                           })
                        })
                     })
                  })
               }, t.Series.prototype.gappedPath = function () {
                  var e = this.currentDataGrouping,
                     i = e && e.totalRange,
                     n = (e = this.options.gapSize, this.points.slice()),
                     r = n.length - 1,
                     o = this.yAxis;
                  if (e && 0 < r)
                     for ("value" !== this.options.gapUnit && (e *= this.closestPointRange), i && i > e && (e = i); r--;) n[r + 1].x - n[r].x > e && (i = (n[r].x + n[r + 1].x) / 2, n.splice(r + 1, 0, {
                        isNull: !0,
                        x: i
                     }), this.options.stacking && (i = o.stacks[this.stackKey][i] = new t.StackItem(o, o.options.stackLabels, !1, i, this.stack), i.total = 0));
                  return this.getGraphPath(n)
               }, o(t.seriesTypes.column.prototype, "drawPoints", i), o(t.Series.prototype, "drawPoints", i)
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.arrayMax,
                  n = t.arrayMin,
                  r = t.Axis,
                  o = t.defaultPlotOptions,
                  a = t.defined,
                  s = t.each,
                  c = t.extend,
                  l = t.format,
                  h = t.isNumber,
                  d = t.merge,
                  u = t.pick,
                  p = t.Point,
                  f = t.Series,
                  m = t.Tooltip,
                  g = t.wrap,
                  v = f.prototype,
                  y = v.processData,
                  x = v.generatePoints,
                  b = {
                     approximation: "average",
                     groupPixelWidth: 2,
                     dateTimeLabelFormats: {
                        millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"],
                        second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"],
                        minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                        hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                        day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                        week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                        month: ["%B %Y", "%B", "-%B %Y"],
                        year: ["%Y", "%Y", "-%Y"]
                     }
                  },
                  _ = {
                     line: {},
                     spline: {},
                     area: {},
                     areaspline: {},
                     column: {
                        approximation: "sum",
                        groupPixelWidth: 10
                     },
                     arearange: {
                        approximation: "range"
                     },
                     areasplinerange: {
                        approximation: "range"
                     },
                     columnrange: {
                        approximation: "range",
                        groupPixelWidth: 10
                     },
                     candlestick: {
                        approximation: "ohlc",
                        groupPixelWidth: 10
                     },
                     ohlc: {
                        approximation: "ohlc",
                        groupPixelWidth: 5
                     }
                  },
                  w = t.defaultDataGroupingUnits = [
                     ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                     ["second", [1, 2, 5, 10, 15, 30]],
                     ["minute", [1, 2, 5, 10, 15, 30]],
                     ["hour", [1, 2, 3, 4, 6, 8, 12]],
                     ["day", [1]],
                     ["week", [1]],
                     ["month", [1, 3, 6]],
                     ["year", null]
                  ],
                  k = t.approximations = {
                     sum: function (t) {
                        var e, i = t.length;
                        if (!i && t.hasNulls) e = null;
                        else if (i)
                           for (e = 0; i--;) e += t[i];
                        return e
                     },
                     average: function (t) {
                        var e = t.length;
                        return t = k.sum(t), h(t) && e && (t /= e), t
                     },
                     averages: function () {
                        var t = [];
                        return s(arguments, function (e) {
                           t.push(k.average(e))
                        }), void 0 === t[0] ? void 0 : t
                     },
                     open: function (t) {
                        return t.length ? t[0] : t.hasNulls ? null : void 0
                     },
                     high: function (t) {
                        return t.length ? i(t) : t.hasNulls ? null : void 0
                     },
                     low: function (t) {
                        return t.length ? n(t) : t.hasNulls ? null : void 0
                     },
                     close: function (t) {
                        return t.length ? t[t.length - 1] : t.hasNulls ? null : void 0
                     },
                     ohlc: function (t, e, i, n) {
                        if (t = k.open(t), e = k.high(e), i = k.low(i), n = k.close(n), h(t) || h(e) || h(i) || h(n)) return [t, e, i, n]
                     },
                     range: function (t, e) {
                        return t = k.low(t), e = k.high(e), h(t) || h(e) ? [t, e] : null === t && null === e ? null : void 0
                     }
                  };
               v.groupData = function (t, e, i, n) {
                  var r, o, c = this,
                     l = c.data,
                     u = c.options.data,
                     p = [],
                     f = [],
                     m = [],
                     g = t.length,
                     v = !!e,
                     y = [];
                  n = "function" === typeof n ? n : k[n] || _[c.type] && k[_[c.type].approximation] || k[b.approximation];
                  var x, w, S = c.pointArrayMap,
                     M = S && S.length,
                     A = ["x"].concat(S || ["y"]),
                     C = 0,
                     P = 0;
                  for (M ? s(S, function () {
                        y.push([])
                     }) : y.push([]), x = M || 1, w = 0; w <= g && !(t[w] >= i[0]); w++);
                  for (w; w <= g; w++) {
                     for (; void 0 !== i[C + 1] && t[w] >= i[C + 1] || w === g;) {
                        for (r = i[C], c.dataGroupInfo = {
                              start: P,
                              length: y[0].length
                           }, o = n.apply(c, y), a(c.dataGroupInfo.options) || (c.dataGroupInfo.options = d(c.pointClass.prototype.optionsToObject.call({
                              series: c
                           }, c.options.data[P])), s(A, function (t) {
                              delete c.dataGroupInfo.options[t]
                           })), void 0 !== o && (p.push(r), f.push(o), m.push(c.dataGroupInfo)), P = w, r = 0; r < x; r++) y[r].length = 0, y[r].hasNulls = !1;
                        if (C += 1, w === g) break
                     }
                     if (w === g) break;
                     var T;
                     if (S)
                        for (r = c.cropStart + w, o = l && l[r] || c.pointClass.prototype.applyOptions.apply({
                              series: c
                           }, [u[r]]), r = 0; r < M; r++) T = o[S[r]], h(T) ? y[r].push(T) : null === T && (y[r].hasNulls = !0);
                     else r = v ? e[w] : null, h(r) ? y[0].push(r) : null === r && (y[0].hasNulls = !0)
                  }
                  return [p, f, m]
               }, v.processData = function () {
                  var t, e, i = this.chart,
                     n = this.options.dataGrouping,
                     r = !1 !== this.allowDG && n && u(n.enabled, i.options.isStock),
                     o = this.visible || !i.options.chart.ignoreHiddenSeries,
                     s = this.currentDataGrouping;
                  if (this.forceCrop = r, this.groupPixelWidth = null, this.hasProcessed = !0, !1 !== y.apply(this, arguments) && r) {
                     this.destroyGroupedData();
                     var c, l = n.groupAll ? this.xData : this.processedXData,
                        h = n.groupAll ? this.yData : this.processedYData,
                        d = i.plotSizeX,
                        p = (i = this.xAxis, i.options.ordinal),
                        f = this.groupPixelWidth = i.getGroupPixelWidth && i.getGroupPixelWidth();
                     if (f) {
                        if (this.isDirty = t = !0, this.points = null, r = i.getExtremes(), e = r.min, r = r.max, p = p && i.getGroupIntervalFactor(e, r, this) || 1, f = f * (r - e) / d * p, d = i.getTimeTicks(i.normalizeTimeTickInterval(f, n.units || w), Math.min(e, l[0]), Math.max(r, l[l.length - 1]), i.options.startOfWeek, l, this.closestPointRange), h = v.groupData.apply(this, [l, h, d, n.approximation]), l = h[0], p = h[1], n.smoothed && l.length) {
                           for (c = l.length - 1, l[c] = Math.min(l[c], r); c-- && 0 < c;) l[c] += f / 2;
                           l[0] = Math.max(l[0], e)
                        }
                        e = d.info, this.closestPointRange = d.info.totalRange, this.groupMap = h[2], a(l[0]) && l[0] < i.dataMin && o && ((!a(i.options.min) && i.min <= i.dataMin || i.min === i.dataMin) && (i.min = l[0]), i.dataMin = l[0]), n.groupAll && (n = this.cropData(l, p, i.min, i.max, 1), l = n.xData, p = n.yData), this.processedXData = l, this.processedYData = p
                     } else this.groupMap = null;
                     this.hasGroupedData = t, this.currentDataGrouping = e, this.preventGraphAnimation = (s && s.totalRange) !== (e && e.totalRange)
                  }
               }, v.destroyGroupedData = function () {
                  var t = this.groupedData;
                  s(t || [], function (e, i) {
                     e && (t[i] = e.destroy ? e.destroy() : null)
                  }), this.groupedData = null
               }, v.generatePoints = function () {
                  x.apply(this), this.destroyGroupedData(), this.groupedData = this.hasGroupedData ? this.points : null
               }, e(p, "update", function () {
                  if (this.dataGroup) return t.error(24), !1
               }), g(m.prototype, "tooltipFooterHeaderFormatter", function (t, e, i) {
                  var n, r = this.chart.time,
                     o = e.series,
                     a = o.tooltipOptions,
                     s = o.options.dataGrouping,
                     d = a.xDateFormat,
                     u = o.xAxis;
                  return u && "datetime" === u.options.type && s && h(e.key) ? (t = o.currentDataGrouping, s = s.dateTimeLabelFormats, t ? (u = s[t.unitName], 1 === t.count ? d = u[0] : (d = u[1], n = u[2])) : !d && s && (d = this.getXDateFormat(e, a, u)), d = r.dateFormat(d, e.key), n && (d += r.dateFormat(n, e.key + t.totalRange - 1)), l(a[(i ? "footer" : "header") + "Format"], {
                     point: c(e.point, {
                        key: d
                     }),
                     series: o
                  }, r)) : t.call(this, e, i)
               }), e(f, "destroy", v.destroyGroupedData), e(f, "afterSetOptions", function (t) {
                  t = t.options;
                  var e = this.type,
                     i = this.chart.options.plotOptions,
                     n = o[e].dataGrouping,
                     r = this.useCommonDataGrouping && b;
                  (_[e] || r) && (n || (n = d(b, _[e])), t.dataGrouping = d(r, n, i.series && i.series.dataGrouping, i[e].dataGrouping, this.userOptions.dataGrouping)), this.chart.options.isStock && (this.requireSorting = !0)
               }), e(r, "afterSetScale", function () {
                  s(this.series, function (t) {
                     t.hasProcessed = !1
                  })
               }), r.prototype.getGroupPixelWidth = function () {
                  var t, e, i = this.series,
                     n = i.length,
                     r = 0,
                     o = !1;
                  for (t = n; t--;)(e = i[t].options.dataGrouping) && (r = Math.max(r, e.groupPixelWidth));
                  for (t = n; t--;)(e = i[t].options.dataGrouping) && i[t].hasProcessed && (n = (i[t].processedXData || i[t].data).length, i[t].groupPixelWidth || n > this.chart.plotSizeX / r || n && e.forced) && (o = !0);
                  return o ? r : 0
               }, r.prototype.setDataGrouping = function (t, e) {
                  var i;
                  if (e = u(e, !0), t || (t = {
                        forced: !1,
                        units: null
                     }), this instanceof r)
                     for (i = this.series.length; i--;) this.series[i].update({
                        dataGrouping: t
                     }, !1);
                  else s(this.chart.options.series, function (e) {
                     e.dataGrouping = t
                  }, !1);
                  this.ordinalSlope = null, e && this.chart.redraw()
               }
            }(e),
            function (t) {
               var e = t.each,
                  i = t.Point,
                  n = t.seriesType,
                  r = t.seriesTypes;
               n("ohlc", "column", {
                  lineWidth: 1,
                  tooltip: {
                     pointFormat: '<span style="color:{point.color}">â—</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
                  },
                  threshold: null,
                  states: {
                     hover: {
                        lineWidth: 3
                     }
                  },
                  stickyTracking: !0
               }, {
                  directTouch: !1,
                  pointArrayMap: ["open", "high", "low", "close"],
                  toYData: function (t) {
                     return [t.open, t.high, t.low, t.close]
                  },
                  pointValKey: "close",
                  pointAttrToOptions: {
                     stroke: "color",
                     "stroke-width": "lineWidth"
                  },
                  init: function () {
                     r.column.prototype.init.apply(this, arguments), this.options.stacking = !1
                  },
                  pointAttribs: function (t, e) {
                     e = r.column.prototype.pointAttribs.call(this, t, e);
                     var i = this.options;
                     return delete e.fill, !t.options.color && i.upColor && t.open < t.close && (e.stroke = i.upColor), e
                  },
                  translate: function () {
                     var t = this,
                        i = t.yAxis,
                        n = !!t.modifyValue,
                        o = ["plotOpen", "plotHigh", "plotLow", "plotClose", "yBottom"];
                     r.column.prototype.translate.apply(t), e(t.points, function (r) {
                        e([r.open, r.high, r.low, r.close, r.low], function (e, a) {
                           null !== e && (n && (e = t.modifyValue(e)), r[o[a]] = i.toPixels(e, !0))
                        }), r.tooltipPos[1] = r.plotHigh + i.pos - t.chart.plotTop
                     })
                  },
                  drawPoints: function () {
                     var t = this,
                        i = t.chart;
                     e(t.points, function (e) {
                        var n, r, o, a, s, c = e.graphic,
                           l = !c;
                        void 0 !== e.plotY && (c || (e.graphic = c = i.renderer.path().add(t.group)), c.attr(t.pointAttribs(e, e.selected && "select")), r = c.strokeWidth() % 2 / 2, s = Math.round(e.plotX) - r, o = Math.round(e.shapeArgs.width / 2), a = ["M", s, Math.round(e.yBottom), "L", s, Math.round(e.plotHigh)], null !== e.open && (n = Math.round(e.plotOpen) + r, a.push("M", s, n, "L", s - o, n)), null !== e.close && (n = Math.round(e.plotClose) + r, a.push("M", s, n, "L", s + o, n)), c[l ? "attr" : "animate"]({
                           d: a
                        }).addClass(e.getClassName(), !0))
                     })
                  },
                  animate: null
               }, {
                  getClassName: function () {
                     return i.prototype.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down")
                  }
               })
            }(e),
            function (t) {
               var e = t.defaultPlotOptions,
                  i = t.each,
                  n = t.merge,
                  r = t.seriesType,
                  o = t.seriesTypes;
               r("candlestick", "ohlc", n(e.column, {
                  states: {
                     hover: {
                        lineWidth: 2
                     }
                  },
                  tooltip: e.ohlc.tooltip,
                  threshold: null,
                  lineColor: "#000000",
                  lineWidth: 1,
                  upColor: "#ffffff",
                  stickyTracking: !0
               }), {
                  pointAttribs: function (t, e) {
                     var i = o.column.prototype.pointAttribs.call(this, t, e),
                        n = this.options,
                        r = t.open < t.close,
                        a = n.lineColor || this.color;
                     return i["stroke-width"] = n.lineWidth, i.fill = t.options.color || r && n.upColor || this.color, i.stroke = t.lineColor || r && n.upLineColor || a, e && (t = n.states[e], i.fill = t.color || i.fill, i.stroke = t.lineColor || i.stroke, i["stroke-width"] = t.lineWidth || i["stroke-width"]), i
                  },
                  drawPoints: function () {
                     var t = this,
                        e = t.chart,
                        n = t.yAxis.reversed;
                     i(t.points, function (i) {
                        var r, o, a, s, c, l, h, d = i.graphic,
                           u = !d;
                        void 0 !== i.plotY && (d || (i.graphic = d = e.renderer.path().add(t.group)), d.attr(t.pointAttribs(i, i.selected && "select")).shadow(t.options.shadow), c = d.strokeWidth() % 2 / 2, l = Math.round(i.plotX) - c, r = i.plotOpen, o = i.plotClose, a = Math.min(r, o), r = Math.max(r, o), h = Math.round(i.shapeArgs.width / 2), o = n ? r !== i.yBottom : Math.round(a) !== Math.round(i.plotHigh), s = n ? Math.round(a) !== Math.round(i.plotHigh) : r !== i.yBottom, a = Math.round(a) + c, r = Math.round(r) + c, c = [], c.push("M", l - h, r, "L", l - h, a, "L", l + h, a, "L", l + h, r, "Z", "M", l, a, "L", l, o ? Math.round(n ? i.yBottom : i.plotHigh) : a, "M", l, r, "L", l, s ? Math.round(n ? i.plotHigh : i.yBottom) : r), d[u ? "attr" : "animate"]({
                           d: c
                        }).addClass(i.getClassName(), !0))
                     })
                  }
               })
            }(e), i = function (t) {
               var e = t.each,
                  i = t.defined,
                  n = t.seriesTypes,
                  r = t.stableSort;
               return {
                  getPlotBox: function () {
                     return t.Series.prototype.getPlotBox.call(this.options.onSeries && this.chart.get(this.options.onSeries) || this)
                  },
                  translate: function () {
                     n.column.prototype.translate.apply(this);
                     var t, o, a, s, c, l, h = this.options,
                        d = this.chart,
                        u = this.points,
                        p = u.length - 1,
                        f = h.onSeries,
                        m = (f = f && d.get(f), h = h.onKey || "y", f && f.options.step),
                        g = f && f.points,
                        v = g && g.length,
                        y = d.inverted,
                        x = this.xAxis,
                        b = this.yAxis,
                        _ = 0;
                     if (f && f.visible && v)
                        for (_ = (f.pointXOffset || 0) + (f.barW || 0) / 2, t = f.currentDataGrouping, s = g[v - 1].x + (t ? t.totalRange : 0), r(u, function (t, e) {
                              return t.x - e.x
                           }), h = "plot" + h[0].toUpperCase() + h.substr(1); v-- && u[p] && (a = g[v], t = u[p], t.y = a.y, !(a.x <= t.x && void 0 !== a[h] && (t.x <= s && (t.plotY = a[h], a.x < t.x && !m && (c = g[v + 1]) && void 0 !== c[h] && (l = (t.x - a.x) / (c.x - a.x), t.plotY += l * (c[h] - a[h]), t.y += l * (c.y - a.y))), p--, v++, 0 > p))););
                     e(u, function (t, e) {
                        var n;
                        t.plotX += _, (void 0 === t.plotY || y) && (0 <= t.plotX && t.plotX <= x.len ? y ? (t.plotY = x.translate(t.x, 0, 1, 0, 1), t.plotX = i(t.y) ? b.translate(t.y, 0, 0, 0, 1) : 0) : t.plotY = d.chartHeight - x.bottom - (x.opposite ? x.height : 0) + x.offset - b.top : t.shapeArgs = {}), (o = u[e - 1]) && o.plotX === t.plotX && (void 0 === o.stackIndex && (o.stackIndex = 0), n = o.stackIndex + 1), t.stackIndex = n
                     }), this.onSeries = f
                  }
               }
            }(e),
            function (t, e) {
               function i(t) {
                  u[t + "pin"] = function (e, i, n, r, o) {
                     var a = o && o.anchorX;
                     return o = o && o.anchorY, "circle" === t && r > n && (e -= Math.round((r - n) / 2), n = r), e = u[t](e, i, n, r), a && o && (e.push("M", "circle" === t ? e[1] - e[4] : e[1] + e[4] / 2, i > o ? i : i + r, "L", a, o), e = e.concat(u.circle(a - 1, o - 1, 2, 2))), e
                  }
               }
               var n = t.addEvent,
                  r = t.each,
                  o = t.merge,
                  a = t.noop,
                  s = t.Renderer,
                  c = t.Series,
                  l = t.seriesType,
                  h = t.TrackerMixin,
                  d = t.VMLRenderer,
                  u = t.SVGRenderer.prototype.symbols;
               l("flags", "column", {
                  pointRange: 0,
                  allowOverlapX: !1,
                  shape: "flag",
                  stackDistance: 12,
                  textAlign: "center",
                  tooltip: {
                     pointFormat: "{point.text}<br/>"
                  },
                  threshold: null,
                  y: -30,
                  fillColor: "#ffffff",
                  lineWidth: 1,
                  states: {
                     hover: {
                        lineColor: "#000000",
                        fillColor: "#ccd6eb"
                     }
                  },
                  style: {
                     fontSize: "11px",
                     fontWeight: "bold"
                  }
               }, {
                  sorted: !1,
                  noSharedTooltip: !0,
                  allowDG: !1,
                  takeOrdinalPosition: !1,
                  trackerGroups: ["markerGroup"],
                  forceCrop: !0,
                  init: c.prototype.init,
                  pointAttribs: function (t, e) {
                     var i = this.options,
                        n = t && t.color || this.color,
                        r = i.lineColor,
                        o = t && t.lineWidth;
                     return t = t && t.fillColor || i.fillColor, e && (t = i.states[e].fillColor, r = i.states[e].lineColor, o = i.states[e].lineWidth), {
                        fill: t || n,
                        stroke: r || n,
                        "stroke-width": o || i.lineWidth || 0
                     }
                  },
                  translate: e.translate,
                  getPlotBox: e.getPlotBox,
                  drawPoints: function () {
                     var e, i, n, a, s, c, l, h, d = this.points,
                        u = this.chart,
                        p = u.renderer,
                        f = u.inverted,
                        m = this.options,
                        g = m.y,
                        v = this.yAxis,
                        y = {},
                        x = [];
                     for (a = d.length; a--;) s = d[a], h = (f ? s.plotY : s.plotX) > this.xAxis.len, e = s.plotX, c = s.stackIndex, n = s.options.shape || m.shape, i = s.plotY, void 0 !== i && (i = s.plotY + g - (void 0 !== c && c * m.stackDistance)), s.anchorX = c ? void 0 : s.plotX, l = c ? void 0 : s.plotY, c = s.graphic, void 0 !== i && 0 <= e && !h ? (c || (c = s.graphic = p.label("", null, null, n, null, null, m.useHTML).attr(this.pointAttribs(s)).css(o(m.style, s.style)).attr({
                        align: "flag" === n ? "left" : "center",
                        width: m.width,
                        height: m.height,
                        "text-align": m.textAlign
                     }).addClass("highcharts-point").add(this.markerGroup), s.graphic.div && (s.graphic.div.point = s), c.shadow(m.shadow), c.isNew = !0), 0 < e && (e -= c.strokeWidth() % 2), n = {
                        y: i,
                        anchorY: l
                     }, m.allowOverlapX && (n.x = e, n.anchorX = s.anchorX), c.attr({
                        text: s.options.title || m.title || "A"
                     })[c.isNew ? "attr" : "animate"](n), m.allowOverlapX || (y[s.plotX] ? y[s.plotX].size = Math.max(y[s.plotX].size, c.width) : y[s.plotX] = {
                        align: 0,
                        size: c.width,
                        target: e,
                        anchorX: e
                     }), s.tooltipPos = [e, i + v.pos - u.plotTop]) : c && (s.graphic = c.destroy());
                     m.allowOverlapX || (t.objectEach(y, function (t) {
                        t.plotX = t.anchorX, x.push(t)
                     }), t.distribute(x, f ? v.len : this.xAxis.len, 100), r(d, function (t) {
                        var e = t.graphic && y[t.plotX];
                        e && (t.graphic[t.graphic.isNew ? "attr" : "animate"]({
                           x: e.pos,
                           anchorX: t.anchorX
                        }), e.pos ? t.graphic.isNew = !1 : (t.graphic.attr({
                           x: -9999,
                           anchorX: -9999
                        }), t.graphic.isNew = !0))
                     })), m.useHTML && t.wrap(this.markerGroup, "on", function (e) {
                        return t.SVGElement.prototype.on.apply(e.apply(this, [].slice.call(arguments, 1)), [].slice.call(arguments, 1))
                     })
                  },
                  drawTracker: function () {
                     var t = this.points;
                     h.drawTrackerPoint.apply(this), r(t, function (e) {
                        var i = e.graphic;
                        i && n(i.element, "mouseover", function () {
                           0 < e.stackIndex && !e.raised && (e._y = i.y, i.attr({
                              y: e._y - 8
                           }), e.raised = !0), r(t, function (t) {
                              t !== e && t.raised && t.graphic && (t.graphic.attr({
                                 y: t._y
                              }), t.raised = !1)
                           })
                        })
                     })
                  },
                  animate: function (t) {
                     t ? this.setClip() : this.animate = null
                  },
                  setClip: function () {
                     c.prototype.setClip.apply(this, arguments), !1 !== this.options.clip && this.sharedClipKey && this.markerGroup.clip(this.chart[this.sharedClipKey])
                  },
                  buildKDTree: a,
                  invertGroups: a
               }), u.flag = function (t, e, i, n, r) {
                  var o = r && r.anchorX || t;
                  return r = r && r.anchorY || e, u.circle(o - 1, r - 1, 2, 2).concat(["M", o, r, "L", t, e + n, t, e, t + i, e, t + i, e + n, t, e + n, "Z"])
               }, i("circle"), i("square"), s === d && r(["flag", "circlepin", "squarepin"], function (t) {
                  d.prototype.symbols[t] = u[t]
               })
            }(e, i),
            function (t) {
               function e(t, e, i) {
                  this.init(t, e, i)
               }
               var i, n = t.addEvent,
                  r = t.Axis,
                  o = t.correctFloat,
                  a = t.defaultOptions,
                  s = t.defined,
                  c = t.destroyObjectProperties,
                  l = t.each,
                  h = t.fireEvent,
                  d = t.hasTouch,
                  u = t.merge,
                  p = t.pick,
                  f = t.removeEvent,
                  m = {
                     height: t.isTouchDevice ? 20 : 14,
                     barBorderRadius: 0,
                     buttonBorderRadius: 0,
                     liveRedraw: void 0,
                     margin: 10,
                     minWidth: 6,
                     step: .2,
                     zIndex: 3,
                     barBackgroundColor: "#cccccc",
                     barBorderWidth: 1,
                     barBorderColor: "#cccccc",
                     buttonArrowColor: "#333333",
                     buttonBackgroundColor: "#e6e6e6",
                     buttonBorderColor: "#cccccc",
                     buttonBorderWidth: 1,
                     rifleColor: "#333333",
                     trackBackgroundColor: "#f2f2f2",
                     trackBorderColor: "#f2f2f2",
                     trackBorderWidth: 1
                  };
               a.scrollbar = u(!0, m, a.scrollbar), t.swapXY = i = function (t, e) {
                  var i, n = t.length;
                  if (e)
                     for (e = 0; e < n; e += 3) i = t[e + 1], t[e + 1] = t[e + 2], t[e + 2] = i;
                  return t
               }, e.prototype = {
                  init: function (t, e, i) {
                     this.scrollbarButtons = [], this.renderer = t, this.userOptions = e, this.options = u(m, e), this.chart = i, this.size = p(this.options.size, this.options.height), e.enabled && (this.render(), this.initEvents(), this.addEvents())
                  },
                  render: function () {
                     var t, e = this.renderer,
                        n = this.options,
                        r = this.size;
                     this.group = t = e.g("scrollbar").attr({
                        zIndex: n.zIndex,
                        translateY: -99999
                     }).add(), this.track = e.rect().addClass("highcharts-scrollbar-track").attr({
                        x: 0,
                        r: n.trackBorderRadius || 0,
                        height: 0,
                        width: r
                     }).add(t), this.track.attr({
                        fill: n.trackBackgroundColor,
                        stroke: n.trackBorderColor,
                        "stroke-width": n.trackBorderWidth
                     }), this.trackBorderWidth = this.track.strokeWidth(), this.track.attr({
                        y: -this.trackBorderWidth % 2 / 2
                     }), this.scrollbarGroup = e.g().add(t), this.scrollbar = e.rect().addClass("highcharts-scrollbar-thumb").attr({
                        height: 0,
                        width: r,
                        r: n.barBorderRadius || 0
                     }).add(this.scrollbarGroup), this.scrollbarRifles = e.path(i(["M", -3, r / 4, "L", -3, 2 * r / 3, "M", 0, r / 4, "L", 0, 2 * r / 3, "M", 3, r / 4, "L", 3, 2 * r / 3], n.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), this.scrollbar.attr({
                        fill: n.barBackgroundColor,
                        stroke: n.barBorderColor,
                        "stroke-width": n.barBorderWidth
                     }), this.scrollbarRifles.attr({
                        stroke: n.rifleColor,
                        "stroke-width": 1
                     }), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-this.scrollbarStrokeWidth % 2 / 2, -this.scrollbarStrokeWidth % 2 / 2), this.drawScrollbarButton(0), this.drawScrollbarButton(1)
                  },
                  position: function (t, e, i, n) {
                     var r = this.options.vertical,
                        o = 0,
                        a = this.rendered ? "animate" : "attr";
                     this.x = t, this.y = e + this.trackBorderWidth, this.width = i, this.xOffset = this.height = n, this.yOffset = o, r ? (this.width = this.yOffset = i = o = this.size, this.xOffset = e = 0, this.barWidth = n - 2 * i, this.x = t += this.options.margin) : (this.height = this.xOffset = n = e = this.size, this.barWidth = i - 2 * n, this.y += this.options.margin), this.group[a]({
                        translateX: t,
                        translateY: this.y
                     }), this.track[a]({
                        width: i,
                        height: n
                     }), this.scrollbarButtons[1][a]({
                        translateX: r ? 0 : i - e,
                        translateY: r ? n - o : 0
                     })
                  },
                  drawScrollbarButton: function (t) {
                     var e, n = this.renderer,
                        r = this.scrollbarButtons,
                        o = this.options,
                        a = this.size;
                     e = n.g().add(this.group), r.push(e), e = n.rect().addClass("highcharts-scrollbar-button").add(e), e.attr({
                        stroke: o.buttonBorderColor,
                        "stroke-width": o.buttonBorderWidth,
                        fill: o.buttonBackgroundColor
                     }), e.attr(e.crisp({
                        x: -.5,
                        y: -.5,
                        width: a + 1,
                        height: 1,
                        r: o.buttonBorderRadius
                     }, e.strokeWidth())), e = n.path(i(["M", a / 2 + (t ? -1 : 1), a / 2 - 3, "L", a / 2 + (t ? -1 : 1), a / 2 + 3, "L", a / 2 + (t ? 2 : -2), a / 2], o.vertical)).addClass("highcharts-scrollbar-arrow").add(r[t]), e.attr({
                        fill: o.buttonArrowColor
                     })
                  },
                  setRange: function (t, e) {
                     var i, n, r = this.options,
                        a = r.vertical,
                        c = r.minWidth,
                        l = this.barWidth,
                        h = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
                     s(l) && (t = Math.max(t, 0), i = Math.ceil(l * t), this.calculatedWidth = n = o(l * Math.min(e, 1) - i), n < c && (i = (l - c + n) * t, n = c), c = Math.floor(i + this.xOffset + this.yOffset), l = n / 2 - .5, this.from = t, this.to = e, a ? (this.scrollbarGroup[h]({
                        translateY: c
                     }), this.scrollbar[h]({
                        height: n
                     }), this.scrollbarRifles[h]({
                        translateY: l
                     }), this.scrollbarTop = c, this.scrollbarLeft = 0) : (this.scrollbarGroup[h]({
                        translateX: c
                     }), this.scrollbar[h]({
                        width: n
                     }), this.scrollbarRifles[h]({
                        translateX: l
                     }), this.scrollbarLeft = c, this.scrollbarTop = 0), 12 >= n ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(!0), !1 === r.showFull && (0 >= t && 1 <= e ? this.group.hide() : this.group.show()), this.rendered = !0)
                  },
                  initEvents: function () {
                     var t = this;
                     t.mouseMoveHandler = function (e) {
                        var i = t.chart.pointer.normalize(e),
                           n = t.options.vertical ? "chartY" : "chartX",
                           r = t.initPositions;
                        !t.grabbedCenter || e.touches && 0 === e.touches[0][n] || (i = t.cursorToScrollbarPosition(i)[n], n = t[n], n = i - n, t.hasDragged = !0, t.updatePosition(r[0] + n, r[1] + n), t.hasDragged && h(t, "changed", {
                           from: t.from,
                           to: t.to,
                           trigger: "scrollbar",
                           DOMType: e.type,
                           DOMEvent: e
                        }))
                     }, t.mouseUpHandler = function (e) {
                        t.hasDragged && h(t, "changed", {
                           from: t.from,
                           to: t.to,
                           trigger: "scrollbar",
                           DOMType: e.type,
                           DOMEvent: e
                        }), t.grabbedCenter = t.hasDragged = t.chartX = t.chartY = null
                     }, t.mouseDownHandler = function (e) {
                        e = t.chart.pointer.normalize(e), e = t.cursorToScrollbarPosition(e), t.chartX = e.chartX, t.chartY = e.chartY, t.initPositions = [t.from, t.to], t.grabbedCenter = !0
                     }, t.buttonToMinClick = function (e) {
                        var i = o(t.to - t.from) * t.options.step;
                        t.updatePosition(o(t.from - i), o(t.to - i)), h(t, "changed", {
                           from: t.from,
                           to: t.to,
                           trigger: "scrollbar",
                           DOMEvent: e
                        })
                     }, t.buttonToMaxClick = function (e) {
                        var i = (t.to - t.from) * t.options.step;
                        t.updatePosition(t.from + i, t.to + i), h(t, "changed", {
                           from: t.from,
                           to: t.to,
                           trigger: "scrollbar",
                           DOMEvent: e
                        })
                     }, t.trackClick = function (e) {
                        var i = t.chart.pointer.normalize(e),
                           n = t.to - t.from,
                           r = t.y + t.scrollbarTop,
                           o = t.x + t.scrollbarLeft;
                        t.options.vertical && i.chartY > r || !t.options.vertical && i.chartX > o ? t.updatePosition(t.from + n, t.to + n) : t.updatePosition(t.from - n, t.to - n), h(t, "changed", {
                           from: t.from,
                           to: t.to,
                           trigger: "scrollbar",
                           DOMEvent: e
                        })
                     }
                  },
                  cursorToScrollbarPosition: function (t) {
                     var e = this.options;
                     e = e.minWidth > this.calculatedWidth ? e.minWidth : 0;
                     return {
                        chartX: (t.chartX - this.x - this.xOffset) / (this.barWidth - e),
                        chartY: (t.chartY - this.y - this.yOffset) / (this.barWidth - e)
                     }
                  },
                  updatePosition: function (t, e) {
                     1 < e && (t = o(1 - o(e - t)), e = 1), 0 > t && (e = o(e - t), t = 0), this.from = t, this.to = e
                  },
                  update: function (t) {
                     this.destroy(), this.init(this.chart.renderer, u(!0, this.options, t), this.chart)
                  },
                  addEvents: function () {
                     var t = this.options.inverted ? [1, 0] : [0, 1],
                        e = this.scrollbarButtons,
                        i = this.scrollbarGroup.element,
                        r = this.mouseDownHandler,
                        o = this.mouseMoveHandler,
                        a = this.mouseUpHandler;
                     t = [
                        [e[t[0]].element, "click", this.buttonToMinClick],
                        [e[t[1]].element, "click", this.buttonToMaxClick],
                        [this.track.element, "click", this.trackClick],
                        [i, "mousedown", r],
                        [i.ownerDocument, "mousemove", o],
                        [i.ownerDocument, "mouseup", a]
                     ];
                     d && t.push([i, "touchstart", r], [i.ownerDocument, "touchmove", o], [i.ownerDocument, "touchend", a]), l(t, function (t) {
                        n.apply(null, t)
                     }), this._events = t
                  },
                  removeEvents: function () {
                     l(this._events, function (t) {
                        f.apply(null, t)
                     }), this._events.length = 0
                  },
                  destroy: function () {
                     var t = this.chart.scroller;
                     this.removeEvents(), l(["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"], function (t) {
                        this[t] && this[t].destroy && (this[t] = this[t].destroy())
                     }, this), t && this === t.scrollbar && (t.scrollbar = null, c(t.scrollbarButtons))
                  }
               }, n(r, "afterInit", function () {
                  var t = this;
                  t.options && t.options.scrollbar && t.options.scrollbar.enabled && (t.options.scrollbar.vertical = !t.horiz, t.options.startOnTick = t.options.endOnTick = !1, t.scrollbar = new e(t.chart.renderer, t.options.scrollbar, t.chart), n(t.scrollbar, "changed", function (e) {
                     var i, n = Math.min(p(t.options.min, t.min), t.min, t.dataMin),
                        r = Math.max(p(t.options.max, t.max), t.max, t.dataMax) - n;
                     t.horiz && !t.reversed || !t.horiz && t.reversed ? (i = n + r * this.to, n += r * this.from) : (i = n + r * (1 - this.from), n += r * (1 - this.to)), t.setExtremes(n, i, !0, !1, e)
                  }))
               }), n(r, "afterRender", function () {
                  var t = Math.min(p(this.options.min, this.min), this.min, p(this.dataMin, this.min)),
                     e = Math.max(p(this.options.max, this.max), this.max, p(this.dataMax, this.max)),
                     i = this.scrollbar,
                     n = this.titleOffset || 0;
                  i && (this.horiz ? (i.position(this.left, this.top + this.height + 2 + this.chart.scrollbarsOffsets[1] + (this.opposite ? 0 : n + this.axisTitleMargin + this.offset), this.width, this.height), n = 1) : (i.position(this.left + this.width + 2 + this.chart.scrollbarsOffsets[0] + (this.opposite ? n + this.axisTitleMargin + this.offset : 0), this.top, this.width, this.height), n = 0), (!this.opposite && !this.horiz || this.opposite && this.horiz) && (this.chart.scrollbarsOffsets[n] += this.scrollbar.size + this.scrollbar.options.margin), isNaN(t) || isNaN(e) || !s(this.min) || !s(this.max) ? i.setRange(0, 0) : (n = (this.min - t) / (e - t), t = (this.max - t) / (e - t), this.horiz && !this.reversed || !this.horiz && this.reversed ? i.setRange(n, t) : i.setRange(1 - t, 1 - n)))
               }), n(r, "afterGetOffset", function () {
                  var t = this.horiz ? 2 : 1,
                     e = this.scrollbar;
                  e && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[t] += e.size + e.options.margin)
               }), t.Scrollbar = e
            }(e),
            function (t) {
               function e(t) {
                  this.init(t)
               }
               var i = t.addEvent,
                  n = t.Axis,
                  r = t.Chart,
                  o = t.color,
                  a = t.defaultOptions,
                  s = t.defined,
                  c = t.destroyObjectProperties,
                  l = t.each,
                  h = t.erase,
                  d = t.error,
                  u = t.extend,
                  p = t.grep,
                  f = t.hasTouch,
                  m = t.isArray,
                  g = t.isNumber,
                  v = t.isObject,
                  y = t.isTouchDevice,
                  x = t.merge,
                  b = t.pick,
                  _ = t.removeEvent,
                  w = t.Scrollbar,
                  k = t.Series,
                  S = t.seriesTypes,
                  M = t.wrap,
                  A = [].concat(t.defaultDataGroupingUnits),
                  C = function (t) {
                     var e = p(arguments, g);
                     if (e.length) return Math[t].apply(0, e)
                  };
               A[4] = ["day", [1, 2, 3, 4]], A[5] = ["week", [1, 2, 3]], S = void 0 === S.areaspline ? "line" : "areaspline", u(a, {
                  navigator: {
                     height: 40,
                     margin: 25,
                     maskInside: !0,
                     handles: {
                        width: 7,
                        height: 15,
                        symbols: ["navigator-handle", "navigator-handle"],
                        enabled: !0,
                        lineWidth: 1,
                        backgroundColor: "#f2f2f2",
                        borderColor: "#999999"
                     },
                     maskFill: o("#6685c2").setOpacity(.3).get(),
                     outlineColor: "#cccccc",
                     outlineWidth: 1,
                     series: {
                        type: S,
                        fillOpacity: .05,
                        lineWidth: 1,
                        compare: null,
                        dataGrouping: {
                           approximation: "average",
                           enabled: !0,
                           groupPixelWidth: 2,
                           smoothed: !0,
                           units: A
                        },
                        dataLabels: {
                           enabled: !1,
                           zIndex: 2
                        },
                        id: "highcharts-navigator-series",
                        className: "highcharts-navigator-series",
                        lineColor: null,
                        marker: {
                           enabled: !1
                        },
                        pointRange: 0,
                        threshold: null
                     },
                     xAxis: {
                        overscroll: 0,
                        className: "highcharts-navigator-xaxis",
                        tickLength: 0,
                        lineWidth: 0,
                        gridLineColor: "#e6e6e6",
                        gridLineWidth: 1,
                        tickPixelInterval: 200,
                        labels: {
                           align: "left",
                           style: {
                              color: "#999999"
                           },
                           x: 3,
                           y: -4
                        },
                        crosshair: !1
                     },
                     yAxis: {
                        className: "highcharts-navigator-yaxis",
                        gridLineWidth: 0,
                        startOnTick: !1,
                        endOnTick: !1,
                        minPadding: .1,
                        maxPadding: .1,
                        labels: {
                           enabled: !1
                        },
                        crosshair: !1,
                        title: {
                           text: null
                        },
                        tickLength: 0,
                        tickWidth: 0
                     }
                  }
               }), t.Renderer.prototype.symbols["navigator-handle"] = function (t, e, i, n, r) {
                  return t = r.width / 2, e = Math.round(t / 3) + .5, r = r.height, ["M", -t - 1, .5, "L", t, .5, "L", t, r + .5, "L", -t - 1, r + .5, "L", -t - 1, .5, "M", -e, 4, "L", -e, r - 3, "M", e - 1, 4, "L", e - 1, r - 3]
               }, e.prototype = {
                  drawHandle: function (t, e, i, n) {
                     var r = this.navigatorOptions.handles.height;
                     this.handles[e][n](i ? {
                        translateX: Math.round(this.left + this.height / 2),
                        translateY: Math.round(this.top + parseInt(t, 10) + .5 - r)
                     } : {
                        translateX: Math.round(this.left + parseInt(t, 10)),
                        translateY: Math.round(this.top + this.height / 2 - r / 2 - 1)
                     })
                  },
                  drawOutline: function (t, e, i, n) {
                     var r = this.navigatorOptions.maskInside,
                        o = this.outline.strokeWidth(),
                        a = o / 2,
                        s = (o = o % 2 / 2, this.outlineHeight),
                        c = this.scrollbarHeight,
                        l = this.size,
                        h = this.left - c,
                        d = this.top;
                     i ? (h -= a, i = d + e + o, e = d + t + o, t = ["M", h + s, d - c - o, "L", h + s, i, "L", h, i, "L", h, e, "L", h + s, e, "L", h + s, d + l + c].concat(r ? ["M", h + s, i - a, "L", h + s, e + a] : [])) : (t += h + c - o, e += h + c - o, d += a, t = ["M", h, d, "L", t, d, "L", t, d + s, "L", e, d + s, "L", e, d, "L", h + l + 2 * c, d].concat(r ? ["M", t - a, d, "L", e + a, d] : [])), this.outline[n]({
                        d: t
                     })
                  },
                  drawMasks: function (t, e, i, n) {
                     var r, o, a, s, c = this.left,
                        h = this.top,
                        d = this.height;
                     i ? (a = [c, c, c], s = [h, h + t, h + e], o = [d, d, d], r = [t, e - t, this.size - e]) : (a = [c, c + t, c + e], s = [h, h, h], o = [t, e - t, this.size - e], r = [d, d, d]), l(this.shades, function (t, e) {
                        t[n]({
                           x: a[e],
                           y: s[e],
                           width: o[e],
                           height: r[e]
                        })
                     })
                  },
                  renderElements: function () {
                     var t, e = this,
                        i = e.navigatorOptions,
                        n = i.maskInside,
                        r = e.chart,
                        o = r.inverted,
                        a = r.renderer;
                     e.navigatorGroup = t = a.g("navigator").attr({
                        zIndex: 8,
                        visibility: "hidden"
                     }).add();
                     var s = {
                        cursor: o ? "ns-resize" : "ew-resize"
                     };
                     l([!n, n, !n], function (n, r) {
                        e.shades[r] = a.rect().addClass("highcharts-navigator-mask" + (1 === r ? "-inside" : "-outside")).attr({
                           fill: n ? i.maskFill : "rgba(0,0,0,0)"
                        }).css(1 === r && s).add(t)
                     }), e.outline = a.path().addClass("highcharts-navigator-outline").attr({
                        "stroke-width": i.outlineWidth,
                        stroke: i.outlineColor
                     }).add(t), i.handles.enabled && l([0, 1], function (n) {
                        i.handles.inverted = r.inverted, e.handles[n] = a.symbol(i.handles.symbols[n], -i.handles.width / 2 - 1, 0, i.handles.width, i.handles.height, i.handles), e.handles[n].attr({
                           zIndex: 7 - n
                        }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][n]).add(t);
                        var o = i.handles;
                        e.handles[n].attr({
                           fill: o.backgroundColor,
                           stroke: o.borderColor,
                           "stroke-width": o.lineWidth
                        }).css(s)
                     })
                  },
                  update: function (t) {
                     l(this.series || [], function (t) {
                        t.baseSeries && delete t.baseSeries.navigatorSeries
                     }), this.destroy(), x(!0, this.chart.options.navigator, this.options, t), this.init(this.chart)
                  },
                  render: function (e, i, n, r) {
                     var o, a, c, l = this.chart,
                        h = this.scrollbarHeight,
                        d = this.xAxis;
                     o = d.fake ? l.xAxis[0] : d;
                     var u, p = this.navigatorEnabled,
                        f = this.rendered;
                     a = l.inverted;
                     var m, v = l.xAxis[0].minRange,
                        y = l.xAxis[0].options.maxRange;
                     if (!this.hasDragged || s(n)) {
                        if (!g(e) || !g(i)) {
                           if (!f) return;
                           n = 0, r = b(d.width, o.width)
                        }
                        this.left = b(d.left, l.plotLeft + h + (a ? l.plotWidth : 0)), this.size = u = c = b(d.len, (a ? l.plotHeight : l.plotWidth) - 2 * h), l = a ? h : c + 2 * h, n = b(n, d.toPixels(e, !0)), r = b(r, d.toPixels(i, !0)), g(n) && 1 / 0 !== Math.abs(n) || (n = 0, r = l), e = d.toValue(n, !0), i = d.toValue(r, !0), m = Math.abs(t.correctFloat(i - e)), m < v ? this.grabbedLeft ? n = d.toPixels(i - v, !0) : this.grabbedRight && (r = d.toPixels(e + v, !0)) : s(y) && m > y && (this.grabbedLeft ? n = d.toPixels(i - y, !0) : this.grabbedRight && (r = d.toPixels(e + y, !0))), this.zoomedMax = Math.min(Math.max(n, r, 0), u), this.zoomedMin = Math.min(Math.max(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(n, r), 0), u), this.range = this.zoomedMax - this.zoomedMin, u = Math.round(this.zoomedMax), n = Math.round(this.zoomedMin), p && (this.navigatorGroup.attr({
                           visibility: "visible"
                        }), f = f && !this.hasDragged ? "animate" : "attr", this.drawMasks(n, u, a, f), this.drawOutline(n, u, a, f), this.navigatorOptions.handles.enabled && (this.drawHandle(n, 0, a, f), this.drawHandle(u, 1, a, f))), this.scrollbar && (a ? (a = this.top - h, o = this.left - h + (p || !o.opposite ? 0 : (o.titleOffset || 0) + o.axisTitleMargin), h = c + 2 * h) : (a = this.top + (p ? this.height : -h), o = this.left - h), this.scrollbar.position(o, a, l, h), this.scrollbar.setRange(this.zoomedMin / (c || 1), this.zoomedMax / (c || 1))), this.rendered = !0
                     }
                  },
                  addMouseEvents: function () {
                     var t, e, n = this,
                        r = n.chart,
                        o = r.container,
                        a = [];
                     n.mouseMoveHandler = t = function (t) {
                        n.onMouseMove(t)
                     }, n.mouseUpHandler = e = function (t) {
                        n.onMouseUp(t)
                     }, a = n.getPartsEvents("mousedown"), a.push(i(o, "mousemove", t), i(o.ownerDocument, "mouseup", e)), f && (a.push(i(o, "touchmove", t), i(o.ownerDocument, "touchend", e)), a.concat(n.getPartsEvents("touchstart"))), n.eventsToUnbind = a, n.series && n.series[0] && a.push(i(n.series[0].xAxis, "foundExtremes", function () {
                        r.navigator.modifyNavigatorAxisExtremes()
                     }))
                  },
                  getPartsEvents: function (t) {
                     var e = this,
                        n = [];
                     return l(["shades", "handles"], function (r) {
                        l(e[r], function (o, a) {
                           n.push(i(o.element, t, function (t) {
                              e[r + "Mousedown"](t, a)
                           }))
                        })
                     }), n
                  },
                  shadesMousedown: function (t, e) {
                     t = this.chart.pointer.normalize(t);
                     var i, n, r = this.chart,
                        o = this.xAxis,
                        a = this.zoomedMin,
                        c = this.left,
                        l = this.size,
                        h = this.range,
                        d = t.chartX;
                     r.inverted && (d = t.chartY, c = this.top), 1 === e ? (this.grabbedCenter = d, this.fixedWidth = h, this.dragOffset = d - a) : (t = d - c - h / 2, 0 === e ? t = Math.max(0, t) : 2 === e && t + h >= l && (t = l - h, this.reversedExtremes ? (t -= h, n = this.getUnionExtremes().dataMin) : i = this.getUnionExtremes().dataMax), t !== a && (this.fixedWidth = h, e = o.toFixedRange(t, t + h, n, i), s(e.min) && r.xAxis[0].setExtremes(Math.min(e.min, e.max), Math.max(e.min, e.max), !0, null, {
                        trigger: "navigator"
                     })))
                  },
                  handlesMousedown: function (t, e) {
                     this.chart.pointer.normalize(t), t = this.chart;
                     var i = t.xAxis[0],
                        n = this.reversedExtremes;
                     0 === e ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = n ? i.min : i.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = n ? i.max : i.min), t.fixedRange = null
                  },
                  onMouseMove: function (e) {
                     var i = this,
                        n = i.chart,
                        r = i.left,
                        o = i.navigatorSize,
                        a = i.range,
                        s = i.dragOffset,
                        c = n.inverted;
                     e.touches && 0 === e.touches[0].pageX || (e = n.pointer.normalize(e), n = e.chartX, c && (r = i.top, n = e.chartY), i.grabbedLeft ? (i.hasDragged = !0, i.render(0, 0, n - r, i.otherHandlePos)) : i.grabbedRight ? (i.hasDragged = !0, i.render(0, 0, i.otherHandlePos, n - r)) : i.grabbedCenter && (i.hasDragged = !0, n < s ? n = s : n > o + s - a && (n = o + s - a), i.render(0, 0, n - s, n - s + a)), i.hasDragged && i.scrollbar && b(i.scrollbar.options.liveRedraw, t.svg && !y && !this.chart.isBoosting) && (e.DOMType = e.type, setTimeout(function () {
                        i.onMouseUp(e)
                     }, 0)))
                  },
                  onMouseUp: function (t) {
                     var e, i, n = this.chart,
                        r = this.xAxis,
                        o = this.scrollbar,
                        a = t.DOMEvent || t;
                     (!this.hasDragged || o && o.hasDragged) && "scrollbar" !== t.trigger || (o = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? e = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (i = this.fixedExtreme), this.zoomedMax === this.size && (i = this.reversedExtremes ? o.dataMin : o.dataMax), 0 === this.zoomedMin && (e = this.reversedExtremes ? o.dataMax : o.dataMin), r = r.toFixedRange(this.zoomedMin, this.zoomedMax, e, i), s(r.min) && n.xAxis[0].setExtremes(Math.min(r.min, r.max), Math.max(r.min, r.max), !0, !this.hasDragged && null, {
                        trigger: "navigator",
                        triggerOp: "navigator-drag",
                        DOMEvent: a
                     })), "mousemove" !== t.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null)
                  },
                  removeEvents: function () {
                     this.eventsToUnbind && (l(this.eventsToUnbind, function (t) {
                        t()
                     }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents()
                  },
                  removeBaseSeriesEvents: function () {
                     var t = this.baseSeries || [];
                     this.navigatorEnabled && t[0] && (!1 !== this.navigatorOptions.adaptToUpdatedData && l(t, function (t) {
                        _(t, "updatedData", this.updatedDataHandler)
                     }, this), t[0].xAxis && _(t[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes))
                  },
                  init: function (t) {
                     var e = t.options,
                        r = e.navigator,
                        o = r.enabled,
                        a = e.scrollbar,
                        s = a.enabled,
                        c = (e = o ? r.height : 0, s ? a.height : 0);
                     this.handles = [], this.shades = [], this.chart = t, this.setBaseSeries(), this.height = e, this.scrollbarHeight = c, this.scrollbarEnabled = s, this.navigatorEnabled = o, this.navigatorOptions = r, this.scrollbarOptions = a, this.outlineHeight = e + c, this.opposite = b(r.opposite, !o && t.inverted);
                     var l = this,
                        h = (o = l.baseSeries, a = t.xAxis.length, s = t.yAxis.length, o && o[0] && o[0].xAxis || t.xAxis[0] || {
                           options: {}
                        });
                     t.isDirtyBox = !0, l.navigatorEnabled ? (l.xAxis = new n(t, x({
                        breaks: h.options.breaks,
                        ordinal: h.options.ordinal
                     }, r.xAxis, {
                        id: "navigator-x-axis",
                        yAxis: "navigator-y-axis",
                        isX: !0,
                        type: "datetime",
                        index: a,
                        isInternal: !0,
                        offset: 0,
                        keepOrdinalPadding: !0,
                        startOnTick: !1,
                        endOnTick: !1,
                        minPadding: 0,
                        maxPadding: 0,
                        zoomEnabled: !1
                     }, t.inverted ? {
                        offsets: [c, 0, -c, 0],
                        width: e
                     } : {
                        offsets: [0, -c, 0, c],
                        height: e
                     })), l.yAxis = new n(t, x(r.yAxis, {
                        id: "navigator-y-axis",
                        alignTicks: !1,
                        offset: 0,
                        index: s,
                        isInternal: !0,
                        zoomEnabled: !1
                     }, t.inverted ? {
                        width: e
                     } : {
                        height: e
                     })), o || r.series.data ? l.updateNavigatorSeries(!1) : 0 === t.series.length && (l.unbindRedraw = i(t, "beforeRedraw", function () {
                        0 < t.series.length && !l.series && (l.setBaseSeries(), l.unbindRedraw())
                     })), l.reversedExtremes = t.inverted && !l.xAxis.reversed || !t.inverted && l.xAxis.reversed, l.renderElements(), l.addMouseEvents()) : l.xAxis = {
                        translate: function (e, i) {
                           var n = t.xAxis[0],
                              r = n.getExtremes(),
                              o = n.len - 2 * c,
                              a = C("min", n.options.min, r.dataMin);
                           n = C("max", n.options.max, r.dataMax) - a;
                           return i ? e * n / o + a : o * (e - a) / n
                        },
                        toPixels: function (t) {
                           return this.translate(t)
                        },
                        toValue: function (t) {
                           return this.translate(t, !0)
                        },
                        toFixedRange: n.prototype.toFixedRange,
                        fake: !0
                     }, t.options.scrollbar.enabled && (t.scrollbar = l.scrollbar = new w(t.renderer, x(t.options.scrollbar, {
                        margin: l.navigatorEnabled ? 0 : 10,
                        vertical: t.inverted
                     }), t), i(l.scrollbar, "changed", function (e) {
                        var i = l.size,
                           n = i * this.to;
                        i *= this.from;
                        l.hasDragged = l.scrollbar.hasDragged, l.render(0, 0, i, n), (t.options.scrollbar.liveRedraw || "mousemove" !== e.DOMType && "touchmove" !== e.DOMType) && setTimeout(function () {
                           l.onMouseUp(e)
                        })
                     })), l.addBaseSeriesEvents(), l.addChartEvents()
                  },
                  getUnionExtremes: function (t) {
                     var e, i = this.chart.xAxis[0],
                        n = this.xAxis,
                        r = n.options,
                        o = i.options;
                     return t && null === i.dataMin || (e = {
                        dataMin: b(r && r.min, C("min", o.min, i.dataMin, n.dataMin, n.min)),
                        dataMax: b(r && r.max, C("max", o.max, i.dataMax, n.dataMax, n.max))
                     }), e
                  },
                  setBaseSeries: function (t, e) {
                     var i = this.chart,
                        n = this.baseSeries = [];
                     t = t || i.options && i.options.navigator.baseSeries || 0, l(i.series || [], function (e, i) {
                        e.options.isInternal || !e.options.showInNavigator && (i !== t && e.options.id !== t || !1 === e.options.showInNavigator) || n.push(e)
                     }), this.xAxis && !this.xAxis.fake && this.updateNavigatorSeries(!0, e)
                  },
                  updateNavigatorSeries: function (e, i) {
                     var n, r, o, s = this,
                        c = s.chart,
                        h = s.baseSeries,
                        d = s.navigatorOptions.series,
                        p = {
                           enableMouseTracking: !1,
                           index: null,
                           linkedTo: null,
                           group: "nav",
                           padXAxis: !1,
                           xAxis: "navigator-x-axis",
                           yAxis: "navigator-y-axis",
                           showInLegend: !1,
                           stacking: !1,
                           isInternal: !0
                        },
                        f = s.series = t.grep(s.series || [], function (e) {
                           var i = e.baseSeries;
                           return !(0 > t.inArray(i, h)) || (i && (_(i, "updatedData", s.updatedDataHandler), delete i.navigatorSeries), e.chart && e.destroy(), !1)
                        });
                     h && h.length && l(h, function (t) {
                        var e = t.navigatorSeries,
                           l = u({
                              color: t.color,
                              visible: t.visible
                           }, m(d) ? a.navigator.series : d);
                        e && !1 === s.navigatorOptions.adaptToUpdatedData || (p.name = "Navigator " + h.length, n = t.options || {}, o = n.navigatorOptions || {}, r = x(n, p, l, o), l = o.data || l.data, s.hasNavigatorData = s.hasNavigatorData || !!l, r.data = l || n.data && n.data.slice(0), e && e.options ? e.update(r, i) : (t.navigatorSeries = c.initSeries(r), t.navigatorSeries.baseSeries = t, f.push(t.navigatorSeries)))
                     }), (!d.data || h && h.length) && !m(d) || (s.hasNavigatorData = !1, d = t.splat(d), l(d, function (t, e) {
                        p.name = "Navigator " + (f.length + 1), r = x(a.navigator.series, {
                           color: c.series[e] && !c.series[e].options.isInternal && c.series[e].color || c.options.colors[e] || c.options.colors[0]
                        }, p, t), r.data = t.data, r.data && (s.hasNavigatorData = !0, f.push(c.initSeries(r)))
                     })), e && this.addBaseSeriesEvents()
                  },
                  addBaseSeriesEvents: function () {
                     var t = this,
                        e = t.baseSeries || [];
                     e[0] && e[0].xAxis && i(e[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes), l(e, function (e) {
                        i(e, "show", function () {
                           this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1)
                        }), i(e, "hide", function () {
                           this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1)
                        }), !1 !== this.navigatorOptions.adaptToUpdatedData && e.xAxis && i(e, "updatedData", this.updatedDataHandler), i(e, "remove", function () {
                           this.navigatorSeries && (h(t.series, this.navigatorSeries), s(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries)
                        })
                     }, this)
                  },
                  getBaseSeriesMin: function (e) {
                     return t.reduce(this.baseSeries, function (t, e) {
                        return Math.min(t, e.xData[0])
                     }, e)
                  },
                  modifyNavigatorAxisExtremes: function () {
                     var t, e = this.xAxis;
                     e.getExtremes && (!(t = this.getUnionExtremes(!0)) || t.dataMin === e.min && t.dataMax === e.max || (e.min = t.dataMin, e.max = t.dataMax))
                  },
                  modifyBaseAxisExtremes: function () {
                     var t, e, i = this.chart.navigator,
                        n = this.getExtremes(),
                        r = n.dataMin,
                        o = n.dataMax,
                        a = (n = n.max - n.min, i.stickToMin),
                        s = i.stickToMax,
                        c = b(this.options.overscroll, 0),
                        l = i.series && i.series[0],
                        h = !!this.setExtremes;
                     this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger || (a && (e = r, t = e + n), s && (t = o + c, a || (e = Math.max(t - n, i.getBaseSeriesMin(l && l.xData ? l.xData[0] : -Number.MAX_VALUE)))), h && (a || s) && g(e) && (this.min = this.userMin = e, this.max = this.userMax = t)), i.stickToMin = i.stickToMax = null
                  },
                  updatedDataHandler: function () {
                     var t = this.chart.navigator,
                        e = this.navigatorSeries,
                        i = t.getBaseSeriesMin(this.xData[0]);
                     t.stickToMax = t.reversedExtremes ? 0 === Math.round(t.zoomedMin) : Math.round(t.zoomedMax) >= Math.round(t.size), t.stickToMin = g(this.xAxis.min) && this.xAxis.min <= i && (!this.chart.fixedRange || !t.stickToMax), e && !t.hasNavigatorData && (e.options.pointStart = this.xData[0], e.setData(this.options.data, !1, null, !1))
                  },
                  addChartEvents: function () {
                     this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(i(this.chart, "redraw", function () {
                        var t = this.navigator,
                           e = t && (t.baseSeries && t.baseSeries[0] && t.baseSeries[0].xAxis || t.scrollbar && this.xAxis[0]);
                        e && t.render(e.min, e.max)
                     }), i(this.chart, "getMargins", function () {
                        var t = this.navigator,
                           e = t.opposite ? "plotTop" : "marginBottom";
                        this.inverted && (e = t.opposite ? "marginRight" : "plotLeft"), this[e] = (this[e] || 0) + (t.navigatorEnabled || !this.inverted ? t.outlineHeight : 0) + t.navigatorOptions.margin
                     }))
                  },
                  destroy: function () {
                     this.removeEvents(), this.xAxis && (h(this.chart.xAxis, this.xAxis), h(this.chart.axes, this.xAxis)), this.yAxis && (h(this.chart.yAxis, this.yAxis), h(this.chart.axes, this.yAxis)), l(this.series || [], function (t) {
                        t.destroy && t.destroy()
                     }), l("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "), function (t) {
                        this[t] && this[t].destroy && this[t].destroy(), this[t] = null
                     }, this), l([this.handles], function (t) {
                        c(t)
                     }, this)
                  }
               }, t.Navigator = e, M(n.prototype, "zoom", function (t, e, i) {
                  var n, r = this.chart,
                     o = r.options,
                     a = o.chart.zoomType,
                     c = o.chart.pinchType,
                     l = o.navigator;
                  o = o.rangeSelector;
                  return this.isXAxis && (l && l.enabled || o && o.enabled) && (!y && "x" === a || y && "x" === c ? r.resetZoomButton = "blocked" : "y" === a ? n = !1 : (!y && "xy" === a || y && "xy" === c) && this.options.range && (r = this.previousZoom, s(e) ? this.previousZoom = [this.min, this.max] : r && (e = r[0], i = r[1], delete this.previousZoom))), void 0 !== n ? n : t.call(this, e, i)
               }), i(r, "beforeRender", function () {
                  var t = this.options;
                  (t.navigator.enabled || t.scrollbar.enabled) && (this.scroller = this.navigator = new e(this))
               }), i(r, "afterSetChartSize", function () {
                  var t, e, i, n, r = this.legend,
                     o = this.navigator;
                  o && (e = r && r.options, i = o.xAxis, n = o.yAxis, t = o.scrollbarHeight, this.inverted ? (o.left = o.opposite ? this.chartWidth - t - o.height : this.spacing[3] + t, o.top = this.plotTop + t) : (o.left = this.plotLeft + t, o.top = o.navigatorOptions.top || this.chartHeight - o.height - t - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (e && "bottom" === e.verticalAlign && e.enabled && !e.floating ? r.legendHeight + b(e.margin, 10) : 0)), i && n && (this.inverted ? i.options.left = n.options.left = o.left : i.options.top = n.options.top = o.top, i.setAxisSize(), n.setAxisSize()))
               }), i(r, "update", function (t) {
                  var e = t.options.navigator || {},
                     i = t.options.scrollbar || {};
                  this.navigator || this.scroller || !e.enabled && !i.enabled || (x(!0, this.options.navigator, e), x(!0, this.options.scrollbar, i), delete t.options.navigator, delete t.options.scrollbar)
               }), i(r, "afterUpdate", function () {
                  this.navigator || this.scroller || !this.options.navigator.enabled && !this.options.scrollbar.enabled || (this.scroller = this.navigator = new e(this))
               }), M(k.prototype, "addPoint", function (t, e, i, n, r) {
                  var o = this.options.turboThreshold;
                  o && this.xData.length > o && v(e, !0) && this.chart.navigator && d(20, !0), t.call(this, e, i, n, r)
               }), i(r, "afterAddSeries", function () {
                  this.navigator && this.navigator.setBaseSeries(null, !1)
               }), i(k, "afterUpdate", function () {
                  this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1)
               }), r.prototype.callbacks.push(function (t) {
                  var e = t.navigator;
                  e && t.xAxis[0] && (t = t.xAxis[0].getExtremes(), e.render(t.min, t.max))
               })
            }(e),
            function (t) {
               function e(t) {
                  this.init(t)
               }
               var i = t.addEvent,
                  n = t.Axis,
                  r = t.Chart,
                  o = t.css,
                  a = t.createElement,
                  s = t.defaultOptions,
                  c = t.defined,
                  l = t.destroyObjectProperties,
                  h = t.discardElement,
                  d = t.each,
                  u = t.extend,
                  p = t.fireEvent,
                  f = t.isNumber,
                  m = t.merge,
                  g = t.pick,
                  v = t.pInt,
                  y = t.splat,
                  x = t.wrap;
               u(s, {
                  rangeSelector: {
                     verticalAlign: "top",
                     buttonTheme: {
                        "stroke-width": 0,
                        width: 28,
                        height: 18,
                        padding: 2,
                        zIndex: 7
                     },
                     floating: !1,
                     x: 0,
                     y: 0,
                     height: void 0,
                     inputPosition: {
                        align: "right",
                        x: 0,
                        y: 0
                     },
                     buttonPosition: {
                        align: "left",
                        x: 0,
                        y: 0
                     },
                     labelStyle: {
                        color: "#666666"
                     }
                  }
               }), s.lang = m(s.lang, {
                  rangeSelectorZoom: "Zoom",
                  rangeSelectorFrom: "From",
                  rangeSelectorTo: "To"
               }), e.prototype = {
                  clickButton: function (t, e) {
                     var r, o, a, s, c, l = this,
                        h = l.chart,
                        u = l.buttonOptions[t],
                        p = h.xAxis[0],
                        m = h.scroller && h.scroller.getUnionExtremes() || p || {},
                        v = m.dataMin,
                        x = m.dataMax,
                        b = p && Math.round(Math.min(p.max, g(x, p.max))),
                        _ = u.type,
                        w = (m = u._range, u.dataGrouping);
                     if (null !== v && null !== x) {
                        if (h.fixedRange = m, w && (this.forcedDataGrouping = !0, n.prototype.setDataGrouping.call(p || {
                              chart: this.chart
                           }, w, !1), this.frozenStates = u.preserveDataGrouping), "month" === _ || "year" === _) p ? (_ = {
                           range: u,
                           max: b,
                           chart: h,
                           dataMin: v,
                           dataMax: x
                        }, r = p.minFromRange.call(_), f(_.newMax) && (b = _.newMax)) : m = u;
                        else if (m) r = Math.max(b - m, v), b = Math.min(r + m, x);
                        else if ("ytd" === _) {
                           if (!p) return void i(h, "beforeRender", function () {
                              l.clickButton(t)
                           });
                           void 0 === x && (v = Number.MAX_VALUE, x = Number.MIN_VALUE, d(h.series, function (t) {
                              t = t.xData, v = Math.min(t[0], v), x = Math.max(t[t.length - 1], x)
                           }), e = !1), b = l.getYTDExtremes(x, v, h.time.useUTC), r = a = b.min, b = b.max
                        } else "all" === _ && p && (r = v, b = x);
                        r += u._offsetMin, b += u._offsetMax, l.setSelected(t), p ? p.setExtremes(r, b, g(e, 1), null, {
                           trigger: "rangeSelectorButton",
                           rangeSelectorButton: u
                        }) : (o = y(h.options.xAxis)[0], c = o.range, o.range = m, s = o.min, o.min = a, i(h, "load", function () {
                           o.range = c, o.min = s
                        }))
                     }
                  },
                  setSelected: function (t) {
                     this.selected = this.options.selected = t
                  },
                  defaultButtons: [{
                     type: "month",
                     count: 1,
                     text: "1m"
                  }, {
                     type: "month",
                     count: 3,
                     text: "3m"
                  }, {
                     type: "month",
                     count: 6,
                     text: "6m"
                  }, {
                     type: "ytd",
                     text: "YTD"
                  }, {
                     type: "year",
                     count: 1,
                     text: "1y"
                  }, {
                     type: "all",
                     text: "All"
                  }],
                  init: function (t) {
                     var e = this,
                        n = t.options.rangeSelector,
                        r = n.buttons || [].concat(e.defaultButtons),
                        o = n.selected,
                        a = function () {
                           var t = e.minInput,
                              i = e.maxInput;
                           t && t.blur && p(t, "blur"), i && i.blur && p(i, "blur")
                        };
                     e.chart = t, e.options = n, e.buttons = [], t.extraTopMargin = n.height, e.buttonOptions = r, this.unMouseDown = i(t.container, "mousedown", a), this.unResize = i(t, "resize", a), d(r, e.computeButtonRange), void 0 !== o && r[o] && this.clickButton(o, !1), i(t, "load", function () {
                        t.xAxis && t.xAxis[0] && i(t.xAxis[0], "setExtremes", function (i) {
                           this.max - this.min !== t.fixedRange && "rangeSelectorButton" !== i.trigger && "updatedData" !== i.trigger && e.forcedDataGrouping && !e.frozenStates && this.setDataGrouping(!1, !1)
                        })
                     })
                  },
                  updateButtonStates: function () {
                     var t = this,
                        e = this.chart,
                        i = e.xAxis[0],
                        n = Math.round(i.max - i.min),
                        r = !i.hasVisibleSeries,
                        o = e.scroller && e.scroller.getUnionExtremes() || i,
                        a = o.dataMin,
                        s = o.dataMax,
                        c = (e = t.getYTDExtremes(s, a, e.time.useUTC), e.min),
                        l = e.max,
                        h = t.selected,
                        u = f(h),
                        p = t.options.allButtonsEnabled,
                        m = t.buttons;
                     d(t.buttonOptions, function (e, o) {
                        var d = e._range,
                           f = e.type,
                           g = e.count || 1,
                           v = m[o],
                           y = 0;
                        e = e._offsetMax - e._offsetMin, o = o === h;
                        var x = d > s - a,
                           b = d < i.minRange,
                           _ = !1,
                           w = !1;
                        d = d === n;
                        ("month" === f || "year" === f) && n + 36e5 >= 864e5 * {
                           month: 28,
                           year: 365
                        } [f] * g - e && n - 36e5 <= 864e5 * {
                           month: 31,
                           year: 366
                        } [f] * g + e ? d = !0 : "ytd" === f ? (d = l - c + e === n, _ = !o) : "all" === f && (d = i.max - i.min >= s - a, w = !o && u && d), f = !p && (x || b || w || r), g = o && d || d && !u && !_ || o && t.frozenStates, f ? y = 3 : g && (u = !0, y = 2), v.state !== y && v.setState(y)
                     })
                  },
                  computeButtonRange: function (t) {
                     var e = t.type,
                        i = t.count || 1,
                        n = {
                           millisecond: 1,
                           second: 1e3,
                           minute: 6e4,
                           hour: 36e5,
                           day: 864e5,
                           week: 6048e5
                        };
                     n[e] ? t._range = n[e] * i : "month" !== e && "year" !== e || (t._range = 864e5 * {
                        month: 30,
                        year: 365
                     } [e] * i), t._offsetMin = g(t.offsetMin, 0), t._offsetMax = g(t.offsetMax, 0), t._range += t._offsetMax - t._offsetMin
                  },
                  setInputValue: function (t, e) {
                     var i = this.chart.options.rangeSelector,
                        n = this.chart.time,
                        r = this[t + "Input"];
                     c(e) && (r.previousValue = r.HCTime, r.HCTime = e), r.value = n.dateFormat(i.inputEditDateFormat || "%Y-%m-%d", r.HCTime), this[t + "DateBox"].attr({
                        text: n.dateFormat(i.inputDateFormat || "%b %e, %Y", r.HCTime)
                     })
                  },
                  showInput: function (t) {
                     var e = this.inputGroup,
                        i = this[t + "DateBox"];
                     o(this[t + "Input"], {
                        left: e.translateX + i.x + "px",
                        top: e.translateY + "px",
                        width: i.width - 2 + "px",
                        height: i.height - 2 + "px",
                        border: "2px solid silver"
                     })
                  },
                  hideInput: function (t) {
                     o(this[t + "Input"], {
                        border: 0,
                        width: "1px",
                        height: "1px"
                     }), this.setInputValue(t)
                  },
                  drawInput: function (t) {
                     function e() {
                        var t = i.value,
                           e = (d.inputDateParser || Date.parse)(t),
                           n = c.xAxis[0],
                           o = c.scroller && c.scroller.xAxis ? c.scroller.xAxis : n,
                           a = o.dataMin;
                        o = o.dataMax;
                        e !== i.previousValue && (i.previousValue = e, f(e) || (e = t.split("-"), e = Date.UTC(v(e[0]), v(e[1]) - 1, v(e[2]))), f(e) && (c.time.useUTC || (e += 6e4 * (new Date).getTimezoneOffset()), g ? e > r.maxInput.HCTime ? e = void 0 : e < a && (e = a) : e < r.minInput.HCTime ? e = void 0 : e > o && (e = o), void 0 !== e && n.setExtremes(g ? e : n.min, g ? n.max : e, void 0, void 0, {
                           trigger: "rangeSelectorInput"
                        })))
                     }
                     var i, n, r = this,
                        c = r.chart,
                        l = c.renderer.style || {},
                        h = c.renderer,
                        d = c.options.rangeSelector,
                        p = r.div,
                        g = "min" === t,
                        y = this.inputGroup;
                     this[t + "Label"] = n = h.label(s.lang[g ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).addClass("highcharts-range-label").attr({
                        padding: 2
                     }).add(y), y.offset += n.width + 5, this[t + "DateBox"] = h = h.label("", y.offset).addClass("highcharts-range-input").attr({
                        padding: 2,
                        width: d.inputBoxWidth || 90,
                        height: d.inputBoxHeight || 17,
                        "text-align": "center",
                        stroke: d.inputBoxBorderColor || "#cccccc",
                        "stroke-width": 1
                     }).on("click", function () {
                        r.showInput(t), r[t + "Input"].focus()
                     }).add(y), y.offset += h.width + (g ? 10 : 0), this[t + "Input"] = i = a("input", {
                        name: t,
                        className: "highcharts-range-selector",
                        type: "text"
                     }, {
                        top: c.plotTop + "px"
                     }, p), n.css(m(l, d.labelStyle)), h.css(m({
                        color: "#333333"
                     }, l, d.inputStyle)), o(i, u({
                        position: "absolute",
                        border: 0,
                        width: "1px",
                        height: "1px",
                        padding: 0,
                        textAlign: "center",
                        fontSize: l.fontSize,
                        fontFamily: l.fontFamily,
                        top: "-9999em"
                     }, d.inputStyle)), i.onfocus = function () {
                        r.showInput(t)
                     }, i.onblur = function () {
                        r.hideInput(t)
                     }, i.onchange = e, i.onkeypress = function (t) {
                        13 === t.keyCode && e()
                     }
                  },
                  getPosition: function () {
                     var t = this.chart,
                        e = t.options.rangeSelector;
                     t = "top" === e.verticalAlign ? t.plotTop - t.axisOffset[0] : 0;
                     return {
                        buttonTop: t + e.buttonPosition.y,
                        inputTop: t + e.inputPosition.y - 10
                     }
                  },
                  getYTDExtremes: function (t, e, i) {
                     var n = this.chart.time,
                        r = new n.Date(t),
                        o = n.get("FullYear", r);
                     return i = i ? n.Date.UTC(o, 0, 1) : +new n.Date(o, 0, 1), e = Math.max(e || 0, i), r = r.getTime(), {
                        max: Math.min(t || r, r),
                        min: e
                     }
                  },
                  render: function (t, e) {
                     var i, n, r = this,
                        o = r.chart,
                        c = o.renderer,
                        l = o.container,
                        h = o.options,
                        u = h.exporting && !1 !== h.exporting.enabled && h.navigation && h.navigation.buttonOptions,
                        p = s.lang,
                        f = r.div,
                        m = h.rangeSelector,
                        v = g(h.chart.style && h.chart.style.zIndex, 0) + 1,
                        y = (h = m.floating, r.buttons),
                        x = (f = r.inputGroup, m.buttonTheme),
                        b = m.buttonPosition,
                        _ = m.inputPosition,
                        w = m.inputEnabled,
                        k = x && x.states,
                        S = o.plotLeft,
                        M = r.buttonGroup;
                     n = r.rendered;
                     var A, C = r.options.verticalAlign,
                        P = o.legend,
                        T = P && P.options,
                        O = b.y,
                        L = _.y,
                        D = n || !1,
                        E = D ? "animate" : "attr",
                        I = 0,
                        z = 0;
                     !1 !== m.enabled && (n || (r.group = n = c.g("range-selector-group").attr({
                        zIndex: 7
                     }).add(), r.buttonGroup = M = c.g("range-selector-buttons").add(n), r.zoomText = c.text(p.rangeSelectorZoom, 0, 15).css(m.labelStyle).add(M), d(r.buttonOptions, function (t, e) {
                        y[e] = c.button(t.text, 0, 0, function () {
                           var i, n = t.events && t.events.click;
                           n && (i = n.call(t)), !1 !== i && r.clickButton(e), r.isActive = !0
                        }, x, k && k.hover, k && k.select, k && k.disabled).attr({
                           "text-align": "center"
                        }).add(M)
                     }), !1 !== w && (r.div = f = a("div", null, {
                        position: "relative",
                        height: 0,
                        zIndex: v
                     }), l.parentNode.insertBefore(f, l), r.inputGroup = f = c.g("input-group").add(n), f.offset = 0, r.drawInput("min"), r.drawInput("max"))), r.zoomText[E]({
                        x: g(S + b.x, S)
                     }), i = g(S + b.x, S) + r.zoomText.getBBox().width + 5, d(r.buttonOptions, function (t, e) {
                        y[e][E]({
                           x: i
                        }), i += y[e].width + g(m.buttonSpacing, 5)
                     }), S = o.plotLeft - o.spacing[3], r.updateButtonStates(), u && this.titleCollision(o) && "top" === C && "right" === b.align && b.y + M.getBBox().height - 12 < (u.y || 0) + u.height && (I = -40), "left" === b.align ? A = b.x - o.spacing[3] : "right" === b.align && (A = b.x + I - o.spacing[1]), M.align({
                        y: b.y,
                        width: M.getBBox().width,
                        align: b.align,
                        x: A
                     }, !0, o.spacingBox), r.group.placed = D, r.buttonGroup.placed = D, !1 !== w && (I = u && this.titleCollision(o) && "top" === C && "right" === _.align && _.y - f.getBBox().height - 12 < (u.y || 0) + u.height + o.spacing[0] ? -40 : 0, "left" === _.align ? A = S : "right" === _.align && (A = -Math.max(o.axisOffset[1], -I)), f.align({
                        y: _.y,
                        width: f.getBBox().width,
                        align: _.align,
                        x: _.x + A - 2
                     }, !0, o.spacingBox), l = f.alignAttr.translateX + f.alignOptions.x - I + f.getBBox().x + 2, u = f.alignOptions.width, p = M.alignAttr.translateX + M.getBBox().x, A = M.getBBox().width + 20, (_.align === b.align || p + A > l && l + u > p && O < L + f.getBBox().height) && f.attr({
                        translateX: f.alignAttr.translateX + (o.axisOffset[1] >= -I ? 0 : -I),
                        translateY: f.alignAttr.translateY + M.getBBox().height + 10
                     }), r.setInputValue("min", t), r.setInputValue("max", e), r.inputGroup.placed = D), r.group.align({
                        verticalAlign: C
                     }, !0, o.spacingBox), t = r.group.getBBox().height + 20, e = r.group.alignAttr.translateY, "bottom" === C && (P = T && "bottom" === T.verticalAlign && T.enabled && !T.floating ? P.legendHeight + g(T.margin, 10) : 0, t = t + P - 20, z = e - t - (h ? 0 : m.y) - 10), "top" === C ? (h && (z = 0), o.titleOffset && (z = o.titleOffset + o.options.title.margin), z += o.margin[0] - o.spacing[0] || 0) : "middle" === C && (L === O ? z = 0 > L ? e + void 0 : e : (L || O) && (z = 0 > L || 0 > O ? z - Math.min(L, O) : e - t + NaN)), r.group.translate(m.x, m.y + Math.floor(z)), !1 !== w && (r.minInput.style.marginTop = r.group.translateY + "px", r.maxInput.style.marginTop = r.group.translateY + "px"), r.rendered = !0)
                  },
                  getHeight: function () {
                     var t = this.options,
                        e = this.group,
                        i = t.y,
                        n = t.buttonPosition.y;
                     t = t.inputPosition.y, e = e ? e.getBBox(!0).height + 13 + i : 0, i = Math.min(t, n);
                     return (0 > t && 0 > n || 0 < t && 0 < n) && (e += Math.abs(i)), e
                  },
                  titleCollision: function (t) {
                     return !(t.options.title.text || t.options.subtitle.text)
                  },
                  update: function (t) {
                     var e = this.chart;
                     m(!0, e.options.rangeSelector, t), this.destroy(), this.init(e), e.rangeSelector.render()
                  },
                  destroy: function () {
                     var i = this,
                        n = i.minInput,
                        r = i.maxInput;
                     i.unMouseDown(), i.unResize(), l(i.buttons), n && (n.onfocus = n.onblur = n.onchange = null), r && (r.onfocus = r.onblur = r.onchange = null), t.objectEach(i, function (t, n) {
                        t && "chart" !== n && (t.destroy ? t.destroy() : t.nodeType && h(this[n])), t !== e.prototype[n] && (i[n] = null)
                     }, this)
                  }
               }, n.prototype.toFixedRange = function (t, e, i, n) {
                  var r = this.chart && this.chart.fixedRange;
                  return t = g(i, this.translate(t, !0, !this.horiz)), e = g(n, this.translate(e, !0, !this.horiz)), i = r && (e - t) / r, .7 < i && 1.3 > i && (n ? t = e - r : e = t + r), f(t) && f(e) || (t = e = void 0), {
                     min: t,
                     max: e
                  }
               }, n.prototype.minFromRange = function () {
                  var t, e, i, n = this.range,
                     r = {
                        month: "Month",
                        year: "FullYear"
                     } [n.type],
                     o = this.max,
                     a = function (t, e) {
                        var i = new Date(t),
                           n = i["get" + r]();
                        return i["set" + r](n + e), n === i["get" + r]() && i.setDate(0), i.getTime() - t
                     };
                  return f(n) ? (t = o - n, i = n) : (t = o + a(o, -n.count), this.chart && (this.chart.fixedRange = o - t)), e = g(this.dataMin, Number.MIN_VALUE), f(t) || (t = e), t <= e && (t = e, void 0 === i && (i = a(t, n.count)), this.newMax = Math.min(t + i, this.dataMax)), f(o) || (t = void 0), t
               }, i(r, "afterGetContainer", function () {
                  this.options.rangeSelector.enabled && (this.rangeSelector = new e(this))
               }), x(r.prototype, "render", function (t, e, i) {
                  var n = this.axes,
                     r = this.rangeSelector;
                  r && (d(n, function (t) {
                     t.updateNames(), t.setScale()
                  }), this.getAxisMargins(), r.render(), n = r.options.verticalAlign, r.options.floating || ("bottom" === n ? this.extraBottomMargin = !0 : "middle" !== n && (this.extraTopMargin = !0))), t.call(this, e, i)
               }), i(r, "update", function (t) {
                  var i = t.options.rangeSelector;
                  t = this.rangeSelector;
                  var n = this.extraBottomMargin,
                     r = this.extraTopMargin;
                  i && i.enabled && !c(t) && (this.options.rangeSelector.enabled = !0, this.rangeSelector = new e(this)), this.extraTopMargin = this.extraBottomMargin = !1, t && (t.render(), i = i && i.verticalAlign || t.options && t.options.verticalAlign, t.options.floating || ("bottom" === i ? this.extraBottomMargin = !0 : "middle" !== i && (this.extraTopMargin = !0)), this.extraBottomMargin !== n || this.extraTopMargin !== r) && (this.isDirtyBox = !0)
               }), x(r.prototype, "redraw", function (t, e, i) {
                  var n = this.rangeSelector;
                  n && !n.options.floating && (n.render(), n = n.options.verticalAlign, "bottom" === n ? this.extraBottomMargin = !0 : "middle" !== n && (this.extraTopMargin = !0)), t.call(this, e, i)
               }), i(r, "getMargins", function () {
                  var t = this.rangeSelector;
                  t && (t = t.getHeight(), this.extraTopMargin && (this.plotTop += t), this.extraBottomMargin && (this.marginBottom += t))
               }), r.prototype.callbacks.push(function (t) {
                  function e() {
                     n = t.xAxis[0].getExtremes(), f(n.min) && a.render(n.min, n.max)
                  }
                  var n, r, o, a = t.rangeSelector;
                  a && (o = i(t.xAxis[0], "afterSetExtremes", function (t) {
                     a.render(t.min, t.max)
                  }), r = i(t, "redraw", e), e()), i(t, "destroy", function () {
                     a && (r(), o())
                  })
               }), t.RangeSelector = e
            }(e),
            function (t) {
               var e = t.addEvent,
                  i = t.arrayMax,
                  n = t.arrayMin,
                  r = t.Axis,
                  o = t.Chart,
                  a = t.defined,
                  s = t.each,
                  c = t.extend,
                  l = t.format,
                  h = t.grep,
                  d = t.inArray,
                  u = t.isNumber,
                  p = t.isString,
                  f = t.map,
                  m = t.merge,
                  g = t.pick,
                  v = t.Point,
                  y = t.Renderer,
                  x = t.Series,
                  b = t.splat,
                  _ = t.SVGRenderer,
                  w = t.VMLRenderer,
                  k = t.wrap,
                  S = x.prototype,
                  M = S.init,
                  A = S.processData,
                  C = v.prototype.tooltipFormatter;
               t.StockChart = t.stockChart = function (e, i, n) {
                  var r, a = p(e) || e.nodeName,
                     s = arguments[a ? 1 : 0],
                     c = s.series,
                     l = t.getOptions(),
                     h = g(s.navigator && s.navigator.enabled, l.navigator.enabled, !0),
                     d = h ? {
                        startOnTick: !1,
                        endOnTick: !1
                     } : null,
                     u = {
                        marker: {
                           enabled: !1,
                           radius: 2
                        }
                     },
                     v = {
                        shadow: !1,
                        borderWidth: 0
                     };
                  return s.xAxis = f(b(s.xAxis || {}), function (t, e) {
                     return m({
                        minPadding: 0,
                        maxPadding: 0,
                        overscroll: 0,
                        ordinal: !0,
                        title: {
                           text: null
                        },
                        labels: {
                           overflow: "justify"
                        },
                        showLastLabel: !0
                     }, l.xAxis, l.xAxis && l.xAxis[e], t, {
                        type: "datetime",
                        categories: null
                     }, d)
                  }), s.yAxis = f(b(s.yAxis || {}), function (t, e) {
                     return r = g(t.opposite, !0), m({
                        labels: {
                           y: -2
                        },
                        opposite: r,
                        showLastLabel: !(!t.categories && "category" !== t.type),
                        title: {
                           text: null
                        }
                     }, l.yAxis, l.yAxis && l.yAxis[e], t)
                  }), s.series = null, s = m({
                     chart: {
                        panning: !0,
                        pinchType: "x"
                     },
                     navigator: {
                        enabled: h
                     },
                     scrollbar: {
                        enabled: g(l.scrollbar.enabled, !0)
                     },
                     rangeSelector: {
                        enabled: g(l.rangeSelector.enabled, !0)
                     },
                     title: {
                        text: null
                     },
                     tooltip: {
                        split: g(l.tooltip.split, !0),
                        crosshairs: !0
                     },
                     legend: {
                        enabled: !1
                     },
                     plotOptions: {
                        line: u,
                        spline: u,
                        area: u,
                        areaspline: u,
                        arearange: u,
                        areasplinerange: u,
                        column: v,
                        columnrange: v,
                        candlestick: v,
                        ohlc: v
                     }
                  }, s, {
                     isStock: !0
                  }), s.series = c, a ? new o(e, s, n) : new o(s, i)
               }, k(r.prototype, "autoLabelAlign", function (t) {
                  var e = this.chart,
                     i = this.options,
                     n = (e = e._labelPanes = e._labelPanes || {}, this.options.labels);
                  return this.chart.options.isStock && "yAxis" === this.coll && (i = i.top + "," + i.height, !e[i] && n.enabled) ? (15 === n.x && (n.x = 0), void 0 === n.align && (n.align = "right"), e[i] = this, "right") : t.apply(this, [].slice.call(arguments, 1))
               }), e(r, "destroy", function () {
                  var t = this.chart,
                     e = this.options && this.options.top + "," + this.options.height;
                  e && t._labelPanes && t._labelPanes[e] === this && delete t._labelPanes[e]
               }), k(r.prototype, "getPlotLinePath", function (e, i, n, r, o, c) {
                  var l, h, m, v, y, x, b = this,
                     _ = this.isLinked && !this.series ? this.linkedParent.series : this.series,
                     w = b.chart,
                     k = w.renderer,
                     S = b.left,
                     M = b.top,
                     A = [],
                     C = [];
                  return "xAxis" !== b.coll && "yAxis" !== b.coll ? e.apply(this, [].slice.call(arguments, 1)) : (C = function (t) {
                     var e = "xAxis" === t ? "yAxis" : "xAxis";
                     return t = b.options[e], u(t) ? [w[e][t]] : p(t) ? [w.get(t)] : f(_, function (t) {
                        return t[e]
                     })
                  }(b.coll), s(b.isXAxis ? w.yAxis : w.xAxis, function (t) {
                     if (!a(t.options.id) || -1 === t.options.id.indexOf("navigator")) {
                        var e = t.isXAxis ? "yAxis" : "xAxis";
                        e = a(t.options[e]) ? w[e][t.options[e]] : w[e][0];
                        b === e && C.push(t)
                     }
                  }), y = C.length ? [] : [b.isXAxis ? w.yAxis[0] : w.xAxis[0]], s(C, function (e) {
                     -1 !== d(e, y) || t.find(y, function (t) {
                        return t.pos === e.pos && t.len === e.len
                     }) || y.push(e)
                  }), x = g(c, b.translate(i, null, null, r)), u(x) && (b.horiz ? s(y, function (t) {
                     var e;
                     h = t.pos, v = h + t.len, l = m = Math.round(x + b.transB), "pass" !== o && (l < S || l > S + b.width) && (o ? l = m = Math.min(Math.max(S, l), S + b.width) : e = !0), e || A.push("M", l, h, "L", m, v)
                  }) : s(y, function (t) {
                     var e;
                     l = t.pos, m = l + t.len, h = v = Math.round(M + b.height - x), "pass" !== o && (h < M || h > M + b.height) && (o ? h = v = Math.min(Math.max(M, h), b.top + b.height) : e = !0), e || A.push("M", l, h, "L", m, v)
                  })), 0 < A.length ? k.crispPolyLine(A, n || 1) : null)
               }), _.prototype.crispPolyLine = function (t, e) {
                  var i;
                  for (i = 0; i < t.length; i += 6) t[i + 1] === t[i + 4] && (t[i + 1] = t[i + 4] = Math.round(t[i + 1]) - e % 2 / 2), t[i + 2] === t[i + 5] && (t[i + 2] = t[i + 5] = Math.round(t[i + 2]) + e % 2 / 2);
                  return t
               }, y === w && (w.prototype.crispPolyLine = _.prototype.crispPolyLine), k(r.prototype, "hideCrosshair", function (t, e) {
                  t.call(this, e), this.crossLabel && (this.crossLabel = this.crossLabel.hide())
               }), e(r, "afterDrawCrosshair", function (t) {
                  var e, i;
                  if (a(this.crosshair.label) && this.crosshair.label.enabled && this.cross) {
                     var n = this.chart,
                        r = this.options.crosshair.label,
                        o = this.horiz;
                     e = this.opposite, i = this.left;
                     var s, h, d = this.top,
                        u = this.crossLabel,
                        p = r.format,
                        f = "",
                        m = "inside" === this.options.tickPosition,
                        v = !1 !== this.crosshair.snap,
                        y = 0,
                        x = t.e || this.cross && this.cross.e,
                        b = t.point;
                     t = this.lin2log, this.isLog ? (s = t(this.min), h = t(this.max)) : (s = this.min, h = this.max), t = o ? "center" : e ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center", u || (u = this.crossLabel = n.renderer.label(null, null, null, r.shape || "callout").addClass("highcharts-crosshair-label" + (this.series[0] && " highcharts-color-" + this.series[0].colorIndex)).attr({
                        align: r.align || t,
                        padding: g(r.padding, 8),
                        r: g(r.borderRadius, 3),
                        zIndex: 2
                     }).add(this.labelGroup), u.attr({
                        fill: r.backgroundColor || this.series[0] && this.series[0].color || "#666666",
                        stroke: r.borderColor || "",
                        "stroke-width": r.borderWidth || 0
                     }).css(c({
                        color: "#ffffff",
                        fontWeight: "normal",
                        fontSize: "11px",
                        textAlign: "center"
                     }, r.style))), o ? (t = v ? b.plotX + i : x.chartX, d += e ? 0 : this.height) : (t = e ? this.width + i : 0, d = v ? b.plotY + d : x.chartY), p || r.formatter || (this.isDatetimeAxis && (f = "%b %d, %Y"), p = "{value" + (f ? ":" + f : "") + "}"), f = v ? b[this.isXAxis ? "x" : "y"] : this.toValue(o ? x.chartX : x.chartY), u.attr({
                        text: p ? l(p, {
                           value: f
                        }, n.time) : r.formatter.call(this, f),
                        x: t,
                        y: d,
                        visibility: f < s || f > h ? "hidden" : "visible"
                     }), r = u.getBBox(), o ? (m && !e || !m && e) && (d = u.y - r.height) : d = u.y - r.height / 2, o ? (e = i - r.x, i = i + this.width - r.x) : (e = "left" === this.labelAlign ? i : 0, i = "right" === this.labelAlign ? i + this.width : n.chartWidth), u.translateX < e && (y = e - u.translateX), u.translateX + r.width >= i && (y = -(u.translateX + r.width - i)), u.attr({
                        x: t + y,
                        y: d,
                        anchorX: o ? t : this.opposite ? 0 : n.chartWidth,
                        anchorY: o ? this.opposite ? n.chartHeight : 0 : d + r.height / 2
                     })
                  }
               }), S.init = function () {
                  M.apply(this, arguments), this.setCompare(this.options.compare)
               }, S.setCompare = function (t) {
                  this.modifyValue = "value" === t || "percent" === t ? function (e, i) {
                     var n = this.compareValue;
                     if (void 0 !== e && void 0 !== n) return e = "value" === t ? e - n : e / n * 100 - (100 === this.options.compareBase ? 0 : 100), i && (i.change = e), e
                  } : null, this.userOptions.compare = t, this.chart.hasRendered && (this.isDirty = !0)
               }, S.processData = function () {
                  var t, e, i, n, r, o = -1,
                     a = !0 === this.options.compareStart ? 0 : 1;
                  if (A.apply(this, arguments), this.xAxis && this.processedYData)
                     for (e = this.processedXData, i = this.processedYData, n = i.length, this.pointArrayMap && (o = d("close", this.pointArrayMap), -1 === o && (o = d(this.pointValKey || "y", this.pointArrayMap))), t = 0; t < n - a; t++)
                        if (r = i[t] && -1 < o ? i[t][o] : i[t], u(r) && e[t + a] >= this.xAxis.min && 0 !== r) {
                           this.compareValue = r;
                           break
                        }
               }, k(S, "getExtremes", function (t) {
                  var e;
                  t.apply(this, [].slice.call(arguments, 1)), this.modifyValue && (e = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = n(e), this.dataMax = i(e))
               }), r.prototype.setCompare = function (t, e) {
                  this.isXAxis || (s(this.series, function (e) {
                     e.setCompare(t)
                  }), g(e, !0) && this.chart.redraw())
               }, v.prototype.tooltipFormatter = function (e) {
                  return e = e.replace("{point.change}", (0 < this.change ? "+" : "") + t.numberFormat(this.change, g(this.series.tooltipOptions.changeDecimals, 2))), C.apply(this, [e])
               }, k(x.prototype, "render", function (t) {
                  var e;
                  this.chart.is3d && this.chart.is3d() || this.chart.polar || !this.xAxis || this.xAxis.isRadial || (e = this.yAxis.len - (this.xAxis.axisLine ? Math.floor(this.xAxis.axisLine.strokeWidth() / 2) : 0), !this.clipBox && this.animate ? (this.clipBox = m(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = e) : this.chart[this.sharedClipKey] ? this.chart[this.sharedClipKey].attr({
                     width: this.xAxis.len,
                     height: e
                  }) : this.clipBox && (this.clipBox.width = this.xAxis.len, this.clipBox.height = e)), t.call(this)
               }), k(o.prototype, "getSelectedPoints", function (t) {
                  var e = t.call(this);
                  return s(this.series, function (t) {
                     t.hasGroupedData && (e = e.concat(h(t.points || [], function (t) {
                        return t.selected
                     })))
                  }), e
               }), e(o, "update", function (t) {
                  t = t.options, "scrollbar" in t && this.navigator && (m(!0, this.options.scrollbar, t.scrollbar), this.navigator.update({}, !1), delete t.scrollbar)
               })
            }(e), e
      })
   },
   e5fa: function (t, e) {
      t.exports = function (t) {
         if (void 0 == t) throw TypeError("Can't call method on  " + t);
         return t
      }
   },
   e8ba: function (t, e, i) {
      (function (t, i) {
         i(e)
      })(0, function (t) {
         "use strict";
         const e = {
               BTC: "Éƒ",
               ETH: "Îž",
               USD: "$",
               CAD: "C$",
               GBP: "Â£",
               EUR: "â‚¬",
               CHF: "Fr.",
               SEK: "kr",
               JPY: "Â¥",
               CNY: "Â¥",
               INR: "â‚¹",
               RUB: "â‚½",
               AUD: "A$",
               HKD: "HK$",
               SGD: "S$",
               TWD: "NT$",
               BRL: "R$",
               KRW: "â‚©",
               ZAR: "R",
               MYR: "RM",
               IDR: "Rp",
               NZD: "NZ$",
               MXN: "MX$",
               PHP: "â‚±",
               DKK: "kr.",
               PLN: "zÅ‚",
               AED: "DH",
               ARS: "$",
               CLP: "CLP",
               CZK: "KÄ",
               HUF: "Ft",
               ILS: "â‚ª",
               KWD: "KD",
               LKR: "Rs",
               NOK: "kr",
               PKR: "â‚¨",
               SAR: "SR",
               THB: "à¸¿",
               TRY: "â‚º",
               XAU: "XAU",
               XAG: "XAG",
               XDR: "XDR"
            },
            i = {
               MYR: {
                  location: {
                     start: !0
                  },
                  forLocales: {
                     en: !0
                  }
               },
               SGD: {
                  location: {
                     start: !0
                  },
                  forLocales: {
                     en: !0
                  }
               },
               PHP: {
                  location: {
                     start: !0
                  },
                  forLocales: {
                     en: !0
                  }
               },
               BTC: {
                  location: {
                     start: !0
                  },
                  forLocales: {
                     en: !0
                  }
               },
               ETH: {
                  location: {
                     start: !0
                  },
                  forLocales: {
                     en: !0
                  }
               }
            };

         function n() {
            return !("object" != typeof Intl || !Intl || "function" != typeof Intl.NumberFormat)
         }

         function r(t) {
            return "BTC" === t || "ETH" === t
         }

         function o(t) {
            return r(t) || null == e[t]
         }

         function a(t, n = "en") {
            const r = t.match(/^[A-Z]{3}\s?/);
            if (null != r) {
               const o = r[0].trim(),
                  a = i[o];
               return a && a.location.start && a.forLocales[n] ? t.replace(r[0], e[o]) : t
            }
            const o = t.match(/[A-Z]{3}$/);
            if (null != o) {
               const r = o[0],
                  a = i[r];
               return a && a.location.end && a.forLocales[n] ? t.replace(r, e[r]) : t
            }
            return t
         }

         function s(t, e, i) {
            let n;
            try {
               n = new Intl.NumberFormat(e, {
                  style: "currency",
                  currency: t,
                  currencyDisplay: "symbol",
                  minimumFractionDigits: i,
                  maximumFractionDigits: i
               })
            } catch (r) {
               return c(t, e, i)
            }
            return n
         }

         function c(t, e, i = 2) {
            return t = t.toUpperCase(), i > 2 ? {
               format: e => {
                  return o(t) ? `${e.toFixed(i)} ${t}` : `${t} ${e.toFixed(i)}`
               }
            } : {
               format: i => {
                  return o(t) ? `${i.toLocaleString(e)} ${t}` : `${t} ${i.toLocaleString(e)}`
               }
            }
         }

         function l(t, e, i) {
            const a = n(),
               l = a && (!o(t) || r(t));
            return l ? s(t, e, i) : c(t, e, i)
         }
         let h, d, u, p, f, m, g, v = {};

         function y() {
            v = {}
         }

         function x(t, e) {
            const i = `${t}-${e}`,
               n = v[i];
            u = n ? n.currencyFormatterNormal : l(t, e), p = n ? n.currencyFormatterNoDecimal : l(t, e, 0), f = n ? n.currencyFormatterMedium : l(t, e, 3), m = n ? n.currencyFormatterSmall : l(t, e, 6), g = n ? n.currencyFormatterVerySmall : l(t, e, 8), null == n && (v[i] = {}, v[i].currencyFormatterNormal = u, v[i].currencyFormatterNoDecimal = p, v[i].currencyFormatterMedium = f, v[i].currencyFormatterSmall = m, v[i].currencyFormatterVerySmall = g)
         }
         const b = 50,
            _ = 1e3;

         function w(t, e, i = "en", n = !1) {
            if (e = e.toUpperCase(), h === e && d == i || (h = e, d = i, x(e, i)), o(e)) {
               let e = parseFloat(t);
               return n ? 0 === t ? e.toFixed(2) : e.toPrecision(8) : a(0 === t ? u.format(t) : e >= _ ? p.format(t) : e >= b && e < _ ? f.format(t) : e >= 1 && e < b ? m.format(t) : g.format(t), i)
            }
            return n ? t < .001 ? t.toFixed(8) : t < 1 ? t.toFixed(6) : t.toFixed(2) : a(0 === t ? u.format(t) : t < .05 ? g.format(t) : t < 1 ? m.format(t) : t > 2e4 ? p.format(t) : u.format(t), i)
         }
         t.isCrypto = o, t.clearCache = y, t.formatCurrency = w, Object.defineProperty(t, "__esModule", {
            value: !0
         })
      })
   },
   e9ac: function (t, e, i) {
      "use strict";
      var n, r, o, a, s = Object.getOwnPropertyDescriptor ? function () {
            return Object.getOwnPropertyDescriptor(arguments, "callee").get
         }() : function () {
            throw new TypeError
         },
         c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator,
         l = Object.getPrototypeOf || function (t) {
            return t.__proto__
         },
         h = r ? l(r) : n,
         d = o ? o.constructor : n,
         u = a ? l(a) : n,
         p = a ? a() : n,
         f = "undefined" === typeof Uint8Array ? n : l(Uint8Array),
         m = {
            "$ %Array%": Array,
            "$ %ArrayBuffer%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer,
            "$ %ArrayBufferPrototype%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer.prototype,
            "$ %ArrayIteratorPrototype%": c ? l([][Symbol.iterator]()) : n,
            "$ %ArrayPrototype%": Array.prototype,
            "$ %ArrayProto_entries%": Array.prototype.entries,
            "$ %ArrayProto_forEach%": Array.prototype.forEach,
            "$ %ArrayProto_keys%": Array.prototype.keys,
            "$ %ArrayProto_values%": Array.prototype.values,
            "$ %AsyncFromSyncIteratorPrototype%": n,
            "$ %AsyncFunction%": d,
            "$ %AsyncFunctionPrototype%": d ? d.prototype : n,
            "$ %AsyncGenerator%": a ? l(p) : n,
            "$ %AsyncGeneratorFunction%": u,
            "$ %AsyncGeneratorPrototype%": u ? u.prototype : n,
            "$ %AsyncIteratorPrototype%": p && c && Symbol.asyncIterator ? p[Symbol.asyncIterator]() : n,
            "$ %Atomics%": "undefined" === typeof Atomics ? n : Atomics,
            "$ %Boolean%": Boolean,
            "$ %BooleanPrototype%": Boolean.prototype,
            "$ %DataView%": "undefined" === typeof DataView ? n : DataView,
            "$ %DataViewPrototype%": "undefined" === typeof DataView ? n : DataView.prototype,
            "$ %Date%": Date,
            "$ %DatePrototype%": Date.prototype,
            "$ %decodeURI%": decodeURI,
            "$ %decodeURIComponent%": decodeURIComponent,
            "$ %encodeURI%": encodeURI,
            "$ %encodeURIComponent%": encodeURIComponent,
            "$ %Error%": Error,
            "$ %ErrorPrototype%": Error.prototype,
            "$ %eval%": eval,
            "$ %EvalError%": EvalError,
            "$ %EvalErrorPrototype%": EvalError.prototype,
            "$ %Float32Array%": "undefined" === typeof Float32Array ? n : Float32Array,
            "$ %Float32ArrayPrototype%": "undefined" === typeof Float32Array ? n : Float32Array.prototype,
            "$ %Float64Array%": "undefined" === typeof Float64Array ? n : Float64Array,
            "$ %Float64ArrayPrototype%": "undefined" === typeof Float64Array ? n : Float64Array.prototype,
            "$ %Function%": Function,
            "$ %FunctionPrototype%": Function.prototype,
            "$ %Generator%": r ? l(r()) : n,
            "$ %GeneratorFunction%": h,
            "$ %GeneratorPrototype%": h ? h.prototype : n,
            "$ %Int8Array%": "undefined" === typeof Int8Array ? n : Int8Array,
            "$ %Int8ArrayPrototype%": "undefined" === typeof Int8Array ? n : Int8Array.prototype,
            "$ %Int16Array%": "undefined" === typeof Int16Array ? n : Int16Array,
            "$ %Int16ArrayPrototype%": "undefined" === typeof Int16Array ? n : Int8Array.prototype,
            "$ %Int32Array%": "undefined" === typeof Int32Array ? n : Int32Array,
            "$ %Int32ArrayPrototype%": "undefined" === typeof Int32Array ? n : Int32Array.prototype,
            "$ %isFinite%": isFinite,
            "$ %isNaN%": isNaN,
            "$ %IteratorPrototype%": c ? l(l([][Symbol.iterator]())) : n,
            "$ %JSON%": JSON,
            "$ %JSONParse%": JSON.parse,
            "$ %Map%": "undefined" === typeof Map ? n : Map,
            "$ %MapIteratorPrototype%": "undefined" !== typeof Map && c ? l((new Map)[Symbol.iterator]()) : n,
            "$ %MapPrototype%": "undefined" === typeof Map ? n : Map.prototype,
            "$ %Math%": Math,
            "$ %Number%": Number,
            "$ %NumberPrototype%": Number.prototype,
            "$ %Object%": Object,
            "$ %ObjectPrototype%": Object.prototype,
            "$ %ObjProto_toString%": Object.prototype.toString,
            "$ %ObjProto_valueOf%": Object.prototype.valueOf,
            "$ %parseFloat%": parseFloat,
            "$ %parseInt%": parseInt,
            "$ %Promise%": "undefined" === typeof Promise ? n : Promise,
            "$ %PromisePrototype%": "undefined" === typeof Promise ? n : Promise.prototype,
            "$ %PromiseProto_then%": "undefined" === typeof Promise ? n : Promise.prototype.then,
            "$ %Promise_all%": "undefined" === typeof Promise ? n : Promise.all,
            "$ %Promise_reject%": "undefined" === typeof Promise ? n : Promise.reject,
            "$ %Promise_resolve%": "undefined" === typeof Promise ? n : Promise.resolve,
            "$ %Proxy%": "undefined" === typeof Proxy ? n : Proxy,
            "$ %RangeError%": RangeError,
            "$ %RangeErrorPrototype%": RangeError.prototype,
            "$ %ReferenceError%": ReferenceError,
            "$ %ReferenceErrorPrototype%": ReferenceError.prototype,
            "$ %Reflect%": "undefined" === typeof Reflect ? n : Reflect,
            "$ %RegExp%": RegExp,
            "$ %RegExpPrototype%": RegExp.prototype,
            "$ %Set%": "undefined" === typeof Set ? n : Set,
            "$ %SetIteratorPrototype%": "undefined" !== typeof Set && c ? l((new Set)[Symbol.iterator]()) : n,
            "$ %SetPrototype%": "undefined" === typeof Set ? n : Set.prototype,
            "$ %SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer,
            "$ %SharedArrayBufferPrototype%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer.prototype,
            "$ %String%": String,
            "$ %StringIteratorPrototype%": c ? l("" [Symbol.iterator]()) : n,
            "$ %StringPrototype%": String.prototype,
            "$ %Symbol%": c ? Symbol : n,
            "$ %SymbolPrototype%": c ? Symbol.prototype : n,
            "$ %SyntaxError%": SyntaxError,
            "$ %SyntaxErrorPrototype%": SyntaxError.prototype,
            "$ %ThrowTypeError%": s,
            "$ %TypedArray%": f,
            "$ %TypedArrayPrototype%": f ? f.prototype : n,
            "$ %TypeError%": TypeError,
            "$ %TypeErrorPrototype%": TypeError.prototype,
            "$ %Uint8Array%": "undefined" === typeof Uint8Array ? n : Uint8Array,
            "$ %Uint8ArrayPrototype%": "undefined" === typeof Uint8Array ? n : Uint8Array.prototype,
            "$ %Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray,
            "$ %Uint8ClampedArrayPrototype%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray.prototype,
            "$ %Uint16Array%": "undefined" === typeof Uint16Array ? n : Uint16Array,
            "$ %Uint16ArrayPrototype%": "undefined" === typeof Uint16Array ? n : Uint16Array.prototype,
            "$ %Uint32Array%": "undefined" === typeof Uint32Array ? n : Uint32Array,
            "$ %Uint32ArrayPrototype%": "undefined" === typeof Uint32Array ? n : Uint32Array.prototype,
            "$ %URIError%": URIError,
            "$ %URIErrorPrototype%": URIError.prototype,
            "$ %WeakMap%": "undefined" === typeof WeakMap ? n : WeakMap,
            "$ %WeakMapPrototype%": "undefined" === typeof WeakMap ? n : WeakMap.prototype,
            "$ %WeakSet%": "undefined" === typeof WeakSet ? n : WeakSet,
            "$ %WeakSetPrototype%": "undefined" === typeof WeakSet ? n : WeakSet.prototype
         };
      t.exports = function (t, e) {
         if (arguments.length > 1 && "boolean" !== typeof e) throw new TypeError('"allowMissing" argument must be a boolean');
         var i = "$ " + t;
         if (!(i in m)) throw new SyntaxError("intrinsic " + t + " does not exist!");
         if ("undefined" === typeof m[i] && !e) throw new TypeError("intrinsic " + t + " exists, but is not available. Please file an issue!");
         return m[i]
      }
   },
   ebd6: function (t, e, i) {
      var n = i("cb7c"),
         r = i("d8e8"),
         o = i("2b4c")("species");
      t.exports = function (t, e) {
         var i, a = n(t).constructor;
         return void 0 === a || void 0 == (i = n(a)[o]) ? e : r(i)
      }
   },
   edd4: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "Market Cap Rank",
            mcap: "Market Cap",
            "24h_volume": "24H Volume",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: " %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "Crypto Price Comparison",
            crypto_market_cap_comparison: "Crypto Market Cap Comparison"
         },
         coin_price_static_headline_widget: {
            powered_by: ""
         },
         coin_price_chart_widget: {
            "24h_high": "24H High",
            "24h_low": "24H Low",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: ""
         },
         coin_price_marquee_widget: {
            powered_by: ""
         },
         coin_list_widget: {
            powered_by: ""
         },
         beam_widget: {
            powered_by: ""
         },
         coin_ticker_widget: {
            "24h_high": "24H High",
            "24h_low": "24H Low",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: " %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "Cryptocurrencies Tree Map",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: ""
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin",
            available_coins: "Available Coins"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "24h Volume",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "Exchange",
            pair: "Pair",
            price: "Price",
            volume: "Volume",
            trust_score: "Trust Score",
            view_price_chart: "View Price Chart",
            powered_by: " %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   f159: function (t, e, i) {
      var n = i("7d8a"),
         r = i("1b55")("iterator"),
         o = i("b22a");
      t.exports = i("a7d3").getIteratorMethod = function (t) {
         if (void 0 != t) return t[r] || t["@@iterator"] || o[n(t)]
      }
   },
   f2fe: function (t, e) {
      t.exports = function (t) {
         if ("function" != typeof t) throw TypeError(t + " is not a function!");
         return t
      }
   },
   f367: function (t, e, i) {
      "use strict";
      var n = i("d6c7"),
         r = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"),
         o = Object.prototype.toString,
         a = Array.prototype.concat,
         s = Object.defineProperty,
         c = function (t) {
            return "function" === typeof t && "[object Function]" === o.call(t)
         },
         l = function () {
            var t = {};
            try {
               for (var e in s(t, "x", {
                     enumerable: !1,
                     value: t
                  }), t) return !1;
               return t.x === t
            } catch (i) {
               return !1
            }
         },
         h = s && l(),
         d = function (t, e, i, n) {
            (!(e in t) || c(n) && n()) && (h ? s(t, e, {
               configurable: !0,
               enumerable: !1,
               value: i,
               writable: !0
            }) : t[e] = i)
         },
         u = function (t, e) {
            var i = arguments.length > 2 ? arguments[2] : {},
               o = n(e);
            r && (o = a.call(o, Object.getOwnPropertySymbols(e)));
            for (var s = 0; s < o.length; s += 1) d(t, o[s], e[o[s]], i[o[s]])
         };
      u.supportsDescriptors = !!h, t.exports = u
   },
   f3e0: function (t, e, i) {
      var n = i("0185"),
         r = i("7633");
      i("c165")("keys", function () {
         return function (t) {
            return r(n(t))
         }
      })
   },
   f568: function (t, e, i) {
      var n = i("3adc"),
         r = i("0f89"),
         o = i("7633");
      t.exports = i("7d95") ? Object.defineProperties : function (t, e) {
         r(t);
         var i, a = o(e),
            s = a.length,
            c = 0;
         while (s > c) n.f(t, i = a[c++], e[i]);
         return t
      }
   },
   f605: function (t, e) {
      t.exports = function (t, e, i, n) {
         if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
         return t
      }
   },
   f693: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "Classement",
            mcap: "Capitalisation du marchÃ©",
            "24h_volume": "Volume (24h)",
            "24h_high_low": "Haut/Bas sur 24h"
         },
         coin_compare_chart_widget: {
            powered_by: "Fourni par %{name_start}%{name}%{name_end}",
            crypto_price_comparison: "Comparaison des cours de crypto",
            crypto_market_cap_comparison: "Comparaison des capitalisations de marchÃ© de crypto"
         },
         coin_price_static_headline_widget: {
            powered_by: "Fourni par %{name_start}%{name}%{name_end}"
         },
         coin_price_chart_widget: {
            "24h_high": "Haut sur 24h",
            "24h_low": "Bas sur 24h",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Fourni par %{name_start}%{name}%{name_end}"
         },
         coin_price_marquee_widget: {
            powered_by: "Fourni par %{name_start}%{name}%{name_end}"
         },
         coin_list_widget: {
            powered_by: "Fourni par %{name_start}%{name}%{name_end}"
         },
         beam_widget: {
            powered_by: "Fourni par %{name_start}%{name}%{name_end}"
         },
         coin_ticker_widget: {
            "24h_high": "Haut sur 24h",
            "24h_low": "Bas sur 24h",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Fourni par %{name_start}%{name}%{name_end}"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "Fourni par %{name_start}%{name}%{name_end}"
         },
         coin_heatmap_widget: {
            title: "Diagramme des crypto-monnaies",
            subtitle: "(%{top} plus grosse capitalisations)",
            powered_by: "Fourni par %{name_start}%{name}%{name_end}"
         },
         random_coin_widget: {
            disclaimer: "Clause de non responsabilitÃ© : Cet outil ne sert qu'Ã  des fins de divertissement et ne constitue pas de conseils financiers",
            spin: "Tourner",
            available_coins: "Cryptos disponibles"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "Volume sur 24Â h",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "Plate-forme d'Ã©change",
            pair: "Paire",
            price: "Cours",
            volume: "Volume",
            trust_score: "Score de confiance",
            view_price_chart: "Voir le graphique des cours",
            powered_by: "Fourni par %{name_start}%{name}%{name_end}",
            view_all: "View all %{coin} markets"
         }
      }
   },
   f845: function (t, e) {
      t.exports = function (t, e) {
         return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
         }
      }
   },
   fa4e: function (t, e, i) {
      "use strict";
      var n = !1,
         r = function () {};
      if (n) {
         var o = function (t, e) {
            var i = arguments.length;
            e = new Array(i > 2 ? i - 2 : 0);
            for (var n = 2; n < i; n++) e[n - 2] = arguments[n];
            var r = 0,
               o = "Warning: " + t.replace(/%s/g, function () {
                  return e[r++]
               });
            "undefined" !== typeof console && console.error(o);
            try {
               throw new Error(o)
            } catch (a) {}
         };
         r = function (t, e, i) {
            var n = arguments.length;
            i = new Array(n > 2 ? n - 2 : 0);
            for (var r = 2; r < n; r++) i[r - 2] = arguments[r];
            if (void 0 === e) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
            t || o.apply(null, [e].concat(i))
         }
      }
      t.exports = r
   },
   fa54: function (t, e, i) {
      "use strict";
      var n = i("b3e7"),
         r = i("245b"),
         o = i("b22a"),
         a = i("6a9b");
      t.exports = i("e4a9")(Array, "Array", function (t, e) {
         this._t = a(t), this._i = 0, this._k = e
      }, function () {
         var t = this._t,
            e = this._k,
            i = this._i++;
         return !t || i >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
      }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
   },
   fa5b: function (t, e, i) {
      t.exports = i("5537")("native-function-to-string", Function.toString)
   },
   fab2: function (t, e, i) {
      var n = i("7726").document;
      t.exports = n && n.documentElement
   },
   fda1: function (t, e, i) {
      e.f = i("1b55")
   },
   fda6: function (t, e, i) {
      i("f3e0"), t.exports = i("a7d3").Object.keys
   },
   fdef: function (t, e) {
      t.exports = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"
   },
   ff0c: function (t, e, i) {
      var n = i("43c8"),
         r = i("0185"),
         o = i("5d8f")("IE_PROTO"),
         a = Object.prototype;
      t.exports = Object.getPrototypeOf || function (t) {
         return t = r(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
      }
   },
   ffeb: function (t) {
      t.exports = {
         coin_details: {
            mcap_rank: "Piyasa DeÄŸeri SÄ±ralamasÄ±",
            mcap: "Piyasa DeÄŸeri",
            "24h_volume": "24 Saatlik Hacim",
            "24h_high_low": "24H High/Low"
         },
         coin_compare_chart_widget: {
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir",
            crypto_price_comparison: "Kripto Fiyat KarÅŸÄ±laÅŸtÄ±rmasÄ±",
            crypto_market_cap_comparison: "Kripto Piyasa DeÄŸeri KarÅŸÄ±laÅŸtÄ±rmasÄ±"
         },
         coin_price_static_headline_widget: {
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
         },
         coin_price_chart_widget: {
            "24h_high": "24S YÃ¼ksek",
            "24h_low": "24S DÃ¼ÅŸÃ¼k",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
         },
         coin_price_marquee_widget: {
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
         },
         coin_list_widget: {
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
         },
         beam_widget: {
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
         },
         coin_ticker_widget: {
            "24h_high": "24S YÃ¼ksek",
            "24h_low": "24S DÃ¼ÅŸÃ¼k",
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
         },
         coin_converter_widget: {
            view_price_chart: "View %{coin} Price Chart",
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
         },
         coin_heatmap_widget: {
            title: "Kripto Para AÄŸacÄ± HaritasÄ±",
            subtitle: "(Top %{top} by Market Cap)",
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
         },
         random_coin_widget: {
            disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
            spin: "Spin"
         },
         coin_daily_price_widget: {
            title: "CoinGecko Price Update",
            total_mcap: "Total M cap",
            "24h_vol": "24 Saatlik Hacim",
            dom: "Dom"
         },
         coin_market_ticker_list_widget: {
            exchange: "Borsa",
            pair: "Ã‡ift",
            price: "Fiyat",
            volume: "Hacim",
            trust_score: "GÃ¼ven PuanÄ±",
            view_price_chart: "Fiyat Tablosunu GÃ¶r",
            powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir",
            view_all: "View all %{coin} markets"
         }
      }
   }
});