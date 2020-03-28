(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{21:function(t,s,a){"use strict";var e=a(4);a.n(e).a},22:function(t,s,a){(t.exports=a(6)(!1)).push([t.i,"\n.sidebar[data-v-1cfa4fb1]{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: calc(100vh - 40vh);\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-top: 20px;\n}\n.imgClass[data-v-1cfa4fb1]{\n    width: 50%;\n    height: 50%;\n    -o-object-fit: scale-down;\n    object-fit: scale-down;\n}\n.numbers[data-v-1cfa4fb1]{\n  font-weight: 900;\n  font-size: 18px;\n  color:red;\n  /* text-align:left !important ; */\n}\n.c_title[data-v-1cfa4fb1]{\n  font-size: 10px;\n  font-weight: 600;\n}\n.c_number[data-v-1cfa4fb1]{\n  font-size: 25px;\n  font-weight: 700;\n}\n.m_block[data-v-1cfa4fb1]{\n  padding: 10px;\n  border-radius: 15px;\n  margin: 5px;\n}\n.sidT[data-v-1cfa4fb1]{\n  padding-left:5px ;\n  padding-right:5px ;\n}\n.all_border[data-v-1cfa4fb1]{\n  border: 1px solid red;\n}\n#mapx[data-v-1cfa4fb1]{\n  height: 100vh\n}\n",""])},4:function(t,s,a){var e=a(22);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(7)(e,n);e.locals&&(t.exports=e.locals)},63:function(t,s,a){"use strict";a.r(s);var e=a(2),n=a.n(e),i=a(64),o=a(65),c=a(59),r=a(66),l=a(60),d=a(61),u=a(62),v=a(0);function f(t,s,a,e,n,i,o){try{var c=t[i](o),r=c.value}catch(t){return void a(t)}c.done?s(r):Promise.resolve(r).then(e,n)}function p(t){return function(){var s=this,a=arguments;return new Promise((function(e,n){var i=t.apply(s,a);function o(t){f(i,e,n,o,c,"next",t)}function c(t){f(i,e,n,o,c,"throw",t)}o(void 0)}))}}var h={name:"example-component",components:{LMap:i.a,LTileLayer:o.a,LGeoJson:c.a,LMarker:r.a,LPopup:l.a,LIcon:d.a,LCircle:u.a},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:6.4,center:[9.082,8.6753],statesList:null,mode:"all",cases:null,bounds:null,geojson:null,states:null,stateBoundaries:null,fillColor:"#e4ce7f",fillColorState:"#ff0000",icon:Object(v.icon)({iconUrl:"/geos/icon.png",iconSize:[16,16],iconAnchor:[0,0]})}},methods:{zoomUpdated:function(t){this.zoom=t},launchModal:function(){jQuery("#myModal").modal("show")},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t},initMap:function(){var t=this;return p(n.a.mark((function s(){var a;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("https://raw.githubusercontent.com/davetaz/nigeria-map/gh-pages/data/processed/nigeria_regions.json");case 2:return a=s.sent,s.next=5,a.json();case 5:t.geojson=s.sent,t.getState(),t.allCases();case 8:case"end":return s.stop()}}),s)})))()},getState:function(){var t=this;return p(n.a.mark((function s(){var a;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("/api/states");case 2:return a=s.sent,s.next=5,a.json();case 5:t.statesList=s.sent,console.log(t.statesList);case 7:case"end":return s.stop()}}),s)})))()},loadStatePoly:function(){var t=[],s=0;this.cases.data.map(function(){var a=p(n.a.mark((function a(e){var i,o,c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://geoserver.grid-nigeria.org/geoserver/GRIDMaster/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GRIDMaster:sv_boundary_lgas&outputFormat=application%2Fjson&authkey=fdfe9a37-d2d0-4210-9a15-25dab5d907fa&CQL_FILTER=state_code=%27".concat(e.code,"%27"));case 2:return i=a.sent,a.next=5,i.json();case 5:o=a.sent,e.restpn=o,(c=new Array(2)).id=s++,c.bound=o,t.push(c);case 11:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()),this.states=t,console.log(t)},allCases:function(){var t=this;return p(n.a.mark((function s(){var a;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("/api/active-cases");case 2:return a=s.sent,s.next=5,a.json();case 5:t.cases=s.sent,t.loadStatePoly();case 7:case"end":return s.stop()}}),s)})))()}},created:function(){this.initMap()},computed:{styleFunction:function(){this.fillColor;return function(){return{weight:2,color:"#ECEFF1",opacity:1,fillColor:"#065535",fillOpacity:1}}},styleFunctionSatet:function(){this.fillColorState;return function(){return{weight:2,color:"#ff0000",opacity:1,fillColor:"#ff0000",fillOpacity:1}}}}},_=(a(21),a(9)),m=Object(_.a)(h,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10",staticStyle:{padding:"0"}},[a("div",{staticClass:"card"},[a("div",{attrs:{id:"mapx"}},[a("l-map",{staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[a("l-tile-layer",{attrs:{url:t.url}}),t._v(" "),a("l-geo-json",{attrs:{geojson:t.geojson,"options-style":t.styleFunction}}),t._v(" "),t._l(t.states,(function(s){return a("div",{key:s.id},[a("l-geo-json",{attrs:{geojson:s.bound,"options-style":t.styleFunctionSatet}})],1)})),t._v(" "),t._l(t.cases.data,(function(t){return a("div",{key:t.id})}))],2)],1)])]),t._v(" "),a("div",{staticClass:"col-md-2",staticStyle:{padding:"0"}},[a("div",{staticClass:"card",staticStyle:{padding:"10px"}},[a("div",{staticClass:"row",staticStyle:{"align-items":"center"}},[a("div",{staticClass:"col-lg-6 col-md-12 col-xs-12 text-center",on:{click:function(s){return t.launchModal()}}},[a("div",{staticClass:"card m_block",class:{all_border:"all"==t.mode}},[a("strong",{staticClass:"c_number"},[t._v("61")]),t._v(" "),a("span",{staticClass:"c_title"},[t._v("Total Cases")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"sidebar"},t._l(t.statesList.data,(function(s){return a("div",{key:s.id,staticClass:"card",staticStyle:{padding:"5px","margin-top":"5px",width:"100%"}},[a("div",{staticClass:"row",staticStyle:{"align-items":"center"}},[a("div",{staticClass:"col-md-3 "},[a("img",{staticClass:"img-fluid imgClass",attrs:{src:s.image}})]),t._v(" "),a("div",{staticClass:"col-md-6 "},[a("h6",[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"col-md-3 "},[a("h6",{staticClass:"numbers"},[t._v(t._s(s.total_case))])])])])})),0)])])]),t._v(" "),t._m(5)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6 col-xs-12 text-center"},[s("div",{staticClass:"card m_block"},[s("strong",{staticClass:"c_number"},[this._v("1")]),this._v(" "),s("span",{staticClass:"c_title"},[this._v("Deaths")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6 col-xs-12 text-center"},[s("div",{staticClass:"card m_block"},[s("strong",{staticClass:"c_number"},[this._v("3")]),this._v(" "),s("span",{staticClass:"c_title"},[this._v("Discharged")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6 col-xs-12 text-center"},[s("div",{staticClass:"card m_block"},[s("strong",{staticClass:"c_number"},[this._v("57")]),this._v(" "),s("span",{staticClass:"c_title"},[this._v("Active")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6 col-xs-12 text-center"},[s("div",{staticClass:"card m_block"},[s("strong",{staticClass:"c_number"},[this._v("X")]),this._v(" "),s("span",{staticClass:"c_title"},[this._v("Index Cases")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6 col-xs-12 text-center"},[s("div",{staticClass:"card m_block"},[s("strong",{staticClass:"c_number"},[this._v("X")]),this._v(" "),s("span",{staticClass:"c_title"},[this._v("Contact Cases")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"myModal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title"},[t._v("Modal title")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("p",[t._v("One fine body…")])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])])}],!1,null,"1cfa4fb1",null);s.default=m.exports}}]);