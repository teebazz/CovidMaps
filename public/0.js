(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'example-component',
  components: {
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTileLayer"],
    LGeoJson: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LGeoJson"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMarker"],
    LPopup: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LPopup"],
    LIcon: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LIcon"],
    LCircle: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LCircle"]
  },
  data: function data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 6.4,
      center: [9.0820, 8.6753],
      caseLoader: true,
      stateLoader: true,
      statsLoader: true,
      statesList: null,
      mode: 'all',
      stats: null,
      cases: null,
      bounds: null,
      geojson: null,
      states: null,
      circleOpacity: 1,
      circleFillOpacity: 0.6,
      stateBoundaries: null,
      fillColor: "#e4ce7f",
      fillColorState: "#ff0000",
      icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
        iconUrl: "/geos/icon.png",
        iconSize: [16, 16],
        iconAnchor: [0, 0]
      })
    };
  },
  methods: {
    getRadius: function getRadius(radius) {
      var fRadius = 0;

      if (radius > 50) {
        fRadius = 50000;
      } else if (radius > 10 && radius < 50) {
        fRadius = 30000;
      } else {
        fRadius = 10000;
      }

      return fRadius;
    },
    zoomUpdated: function zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    launchModal: function launchModal() {
      jQuery('#myModal').modal('show');
    },
    centerUpdated: function centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated: function boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    initMap: function initMap() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://raw.githubusercontent.com/davetaz/nigeria-map/gh-pages/data/processed/nigeria_regions.json');

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                _this.geojson = _context.sent;

                _this.getState();

                _this.allCases();

                _this.getStats();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getState: function getState() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch('/api/states');

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                _this2.statesList = _context2.sent;
                _this2.stateLoader = false; // console.log(this.statesList);
                // this.loadStatePoly();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    loadStatePoly: function loadStatePoly() {
      var resultingArr = [];
      var i = 0;
      this.cases.data.map( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(res) {
          var resp, jo, gfg;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return fetch("https://geoserver.grid-nigeria.org/geoserver/GRIDMaster/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GRIDMaster:sv_boundary_lgas&outputFormat=application%2Fjson&authkey=fdfe9a37-d2d0-4210-9a15-25dab5d907fa&CQL_FILTER=state_code=%27".concat(res.code, "%27"));

                case 2:
                  resp = _context3.sent;
                  _context3.next = 5;
                  return resp.json();

                case 5:
                  jo = _context3.sent;
                  res.restpn = jo;
                  gfg = new Array(2);
                  gfg['id'] = res.id;
                  gfg['bound'] = jo;
                  resultingArr.push(gfg);

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      this.states = resultingArr; // console.log(resultingArr);
    },
    allCases: function allCases() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch('/api/active-cases');

              case 2:
                response = _context4.sent;
                _context4.next = 5;
                return response.json();

              case 5:
                _this3.cases = _context4.sent;
                _this3.caseLoader = false;

                _this3.loadStatePoly();

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getStats: function getStats() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return fetch('/api/stats');

              case 2:
                response = _context5.sent;
                _context5.next = 5;
                return response.json();

              case 5:
                _this4.stats = _context5.sent;
                console.log(_this4.stats);
                _this4.statsLoader = false;

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  },
  created: function created() {
    // const response = await fetch('https://raw.githubusercontent.com/davetaz/nigeria-map/gh-pages/data/processed/nigeria_regions.json');
    // this.geojson = await response.json();
    this.initMap();
  },
  computed: {
    styleFunction: function styleFunction() {
      var fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor

      return function () {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: '#065535',
          fillOpacity: 1
        };
      };
    },
    styleFunctionSatet: function styleFunctionSatet() {
      var fillColorState = this.fillColorState; // important! need touch fillColor in computed for re-calculate when change fillColor

      return function () {
        return {
          weight: 2,
          color: "#ff0000",
          opacity: 1,
          fillColor: '#ff0000',
          fillOpacity: 1
        };
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sidebar[data-v-299e239e]{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  max-height: 60vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-top: 20px;\n}\n.imgClass[data-v-299e239e]{\n    width: 50%;\n    height: 50%;\n    -o-object-fit: scale-down;\n    object-fit: scale-down;\n}\n.numbers[data-v-299e239e]{\n  font-weight: 900;\n  font-size: 18px;\n  color:red;\n  /* text-align:left !important ; */\n}\n.c_title[data-v-299e239e]{\n  font-size: 10px;\n  font-weight: 600;\n}\n.c_number[data-v-299e239e]{\n  font-size: 25px;\n  font-weight: 700;\n}\n.m_block[data-v-299e239e]{\n  padding: 10px;\n  border-radius: 15px;\n  margin: 5px;\n}\n.sidT[data-v-299e239e]{\n  padding-left:5px ;\n  padding-right:5px ;\n}\n.all_border[data-v-299e239e]{\n  border: 1px solid red;\n}\n#mapx[data-v-299e239e]{\n  height: 100vh\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-10", staticStyle: { padding: "0" } }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { attrs: { id: "mapx" } },
            [
              _c(
                "l-map",
                {
                  staticStyle: { height: "100%", width: "100%" },
                  attrs: { zoom: _vm.zoom, center: _vm.center },
                  on: {
                    "update:zoom": _vm.zoomUpdated,
                    "update:center": _vm.centerUpdated,
                    "update:bounds": _vm.boundsUpdated
                  }
                },
                [
                  _c("l-tile-layer", { attrs: { url: _vm.url } }),
                  _vm._v(" "),
                  _c("l-geo-json", {
                    attrs: {
                      geojson: _vm.geojson,
                      "options-style": _vm.styleFunction
                    }
                  }),
                  _vm._v(" "),
                  !_vm.caseLoader
                    ? _c(
                        "div",
                        _vm._l(_vm.cases.data, function(casx) {
                          return _c(
                            "div",
                            { key: casx.name },
                            [
                              _c("l-circle", {
                                attrs: {
                                  "lat-lng": [casx.longitude, casx.latitude],
                                  radius: _vm.getRadius(casx.total_case),
                                  color: "red",
                                  "fill-color": "#ff0000",
                                  opacity: _vm.circleOpacity,
                                  "fill-opacity": _vm.circleFillOpacity
                                }
                              })
                            ],
                            1
                          )
                        }),
                        0
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2", staticStyle: { padding: "0" } }, [
        _c("div", { staticClass: "card", staticStyle: { padding: "10px" } }, [
          !_vm.statsLoader
            ? _c(
                "div",
                {
                  staticClass: "row",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-lg-6 col-md-12 col-xs-12 text-center",
                      on: {
                        click: function($event) {
                          return _vm.launchModal()
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card m_block",
                          class: { all_border: _vm.mode == "all" }
                        },
                        [
                          _c("strong", { staticClass: "c_number" }, [
                            _vm._v(_vm._s(_vm.stats.data.total_cases))
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "c_title" }, [
                            _vm._v("Total Cases")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-xs-12 text-center" }, [
                    _c("div", { staticClass: "card m_block" }, [
                      _c("strong", { staticClass: "c_number" }, [
                        _vm._v(_vm._s(_vm.stats.data.total_active_cases))
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "c_title" }, [_vm._v("Active")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-xs-12 text-center" }, [
                    _c("div", { staticClass: "card m_block" }, [
                      _c("strong", { staticClass: "c_number" }, [
                        _vm._v(_vm._s(_vm.stats.data.total_deaths))
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "c_title" }, [_vm._v("Deaths")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-xs-12 text-center" }, [
                    _c("div", { staticClass: "card m_block" }, [
                      _c("strong", { staticClass: "c_number" }, [
                        _vm._v(_vm._s(_vm.stats.data.total_recoveries))
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "c_title" }, [
                        _vm._v("Discharged")
                      ])
                    ])
                  ])
                ]
              )
            : _c("div", { staticStyle: { "align-items": "center" } }, [
                _c("img", {
                  staticClass: "img-fluid ",
                  attrs: {
                    src:
                      "https://constructs.stampede-design.com/wp-content/uploads/2015/06/buffer-loading.gif"
                  }
                })
              ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "sidebar" }, [
            !_vm.stateLoader
              ? _c(
                  "div",
                  _vm._l(_vm.statesList.data, function(singleState) {
                    return _c(
                      "div",
                      {
                        key: singleState.id,
                        staticClass: "card",
                        staticStyle: {
                          padding: "5px",
                          "margin-top": "5px",
                          width: "100%"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "row",
                            staticStyle: { "align-items": "center" }
                          },
                          [
                            _c("div", { staticClass: "col-md-3 " }, [
                              _c("img", {
                                staticClass: "img-fluid imgClass",
                                attrs: { src: singleState.image }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6 " }, [
                              _c("h6", [_vm._v(_vm._s(singleState.name))])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 " }, [
                              _c("h6", { staticClass: "numbers" }, [
                                _vm._v(_vm._s(singleState.total_case))
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              : _c("div", { staticStyle: { "align-items": "center" } }, [
                  _c("img", {
                    staticClass: "img-fluid ",
                    attrs: {
                      src:
                        "https://constructs.stampede-design.com/wp-content/uploads/2015/06/buffer-loading.gif"
                    }
                  })
                ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { tabindex: "-1", role: "dialog", id: "myModal" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "modal-title" }, [
                  _vm._v("Modal title")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("p", [_vm._v("One fine body…")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "button" } },
                  [_vm._v("Save changes")]
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e&scoped=true& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&scoped=true&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExampleComponent_vue_vue_type_style_index_0_id_299e239e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css& */ "./resources/js/components/ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "299e239e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_id_299e239e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=style&index=0&id=299e239e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_id_299e239e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_id_299e239e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_id_299e239e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_id_299e239e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_id_299e239e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);