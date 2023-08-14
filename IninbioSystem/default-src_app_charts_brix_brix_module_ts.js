"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_charts_brix_brix_module_ts"],{

/***/ 9010:
/*!****************************************************!*\
  !*** ./src/app/charts/brix/brix-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrixPageRoutingModule": () => (/* binding */ BrixPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _brix_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brix.page */ 8434);




const routes = [
    {
        path: '',
        component: _brix_page__WEBPACK_IMPORTED_MODULE_0__.BrixPage
    }
];
let BrixPageRoutingModule = class BrixPageRoutingModule {
};
BrixPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BrixPageRoutingModule);



/***/ }),

/***/ 2593:
/*!********************************************!*\
  !*** ./src/app/charts/brix/brix.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrixPageModule": () => (/* binding */ BrixPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _brix_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brix-routing.module */ 9010);
/* harmony import */ var _brix_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brix.page */ 8434);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let BrixPageModule = class BrixPageModule {
};
BrixPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _brix_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrixPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_brix_page__WEBPACK_IMPORTED_MODULE_1__.BrixPage]
    })
], BrixPageModule);



/***/ }),

/***/ 8434:
/*!******************************************!*\
  !*** ./src/app/charts/brix/brix.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrixPage": () => (/* binding */ BrixPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_brix_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./brix.page.html */ 2905);
/* harmony import */ var _brix_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brix.page.scss */ 8945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 3109);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 466);







let BrixPage = class BrixPage {
    constructor(translate) {
        this.translate = translate;
        this.translate.use(localStorage.getItem('idioma'));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.graficaBrix();
    }
    ionViewDidLeave() {
    }
    graficaBrix() {
        var ultimox, ultimow;
        var chart;
        let num_tina = localStorage.getItem('idTina');
        let tequilera = localStorage.getItem('tequilera');
        let idiomas = localStorage.getItem('idioma');
        setTimeout(function () {
            if (idiomas === 'en') {
                highcharts__WEBPACK_IMPORTED_MODULE_2__.charts.forEach(function (ch) {
                    if (ch.options.title.text === 'Mediciones en Tiempo Real') {
                        ch.setTitle({ text: 'Real-Time Measurements' });
                        ch.xAxis[0].update({
                            title: {
                                text: 'Measurement Time',
                            },
                        });
                        ch.yAxis[0].update({
                            title: {
                                text: 'Values °Brix',
                            },
                        });
                    }
                    ch.redraw();
                });
            }
            else if (idiomas === 'de') {
                highcharts__WEBPACK_IMPORTED_MODULE_2__.charts.forEach(function (ch) {
                    if (ch.options.title.text === 'Mediciones en Tiempo Real') {
                        ch.setTitle({ text: 'Echtzeit-Messungen' });
                        ch.xAxis[0].update({
                            title: {
                                text: 'Zeitpunkt der Messung',
                            },
                        });
                        ch.yAxis[0].update({
                            title: {
                                text: 'Werte °Brix',
                            },
                        });
                    }
                    ch.redraw();
                });
            }
        }, 1000);
        jquery__WEBPACK_IMPORTED_MODULE_3__.ajax({
            url: 'https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php?idTina=' + num_tina + '&tequilera=' + tequilera,
            type: "GET",
            dataType: "json",
            success: function (datosGrafica) {
                let brix = [];
                jquery__WEBPACK_IMPORTED_MODULE_3__.each(datosGrafica, function (key, value) {
                    if (value.x) {
                        datosGrafica[key].x = parseInt(value.x);
                    }
                    if (value.w) {
                        datosGrafica[key].w = parseFloat(value.w);
                    }
                    brix.push([value.x, value.w]);
                });
                chart = highcharts__WEBPACK_IMPORTED_MODULE_2__.chart('brix', {
                    chart: {
                        type: 'spline',
                        backgroundColor: 'transparent',
                    },
                    title: {
                        text: 'Mediciones en Tiempo Real',
                        align: 'center',
                        style: {
                            color: 'black'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            second: '%H:%M:%S %P',
                        },
                        title: {
                            text: 'Hora de Medición',
                            style: {
                                color: 'black'
                            }
                        },
                        labels: {
                            style: {
                                color: 'black'
                            }
                        },
                        gridLineColor: '#000000'
                    },
                    yAxis: [{
                            title: {
                                text: 'Valores °Brix',
                                style: {
                                    color: 'black'
                                }
                            },
                            visible: true,
                            plotLines: [{
                                    value: 0,
                                    width: 1
                                }],
                            labels: {
                                style: {
                                    color: 'black'
                                }
                            },
                            gridLineColor: 'black'
                        }],
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + '</b><br/>' +
                                highcharts__WEBPACK_IMPORTED_MODULE_2__.dateFormat('%H:%M:%S %P', this.x) + '<br/>' +
                                highcharts__WEBPACK_IMPORTED_MODULE_2__.numberFormat(this.y, 2);
                        }
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    exporting: {
                        enabled: false,
                        chartOptions: {
                            plotOptions: {
                                series: {
                                    dataLabels: {
                                        enabled: true
                                    }
                                }
                            }
                        },
                        fallbackToExportServer: false
                    },
                    series: [{
                            name: '°Brix',
                            type: "spline",
                            yAxis: 0,
                            data: brix,
                            color: '#edff14'
                        }]
                });
            }
        });
        setInterval(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__.get("https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php?tinaIndividual=" + num_tina + "&tequilera=" + tequilera + "&Consultar=1", function (UltimosDatos) {
                var varlocalx = parseInt(UltimosDatos[0].x);
                var varlocalw = parseFloat(UltimosDatos[0].w);
                if ((getx() != varlocalx) && (getw() != varlocalw)) {
                    chart.series[0].addPoint([varlocalx, varlocalw]);
                }
            });
        }, 1000);
        function getx() { return ultimox; }
        function getw() { return ultimow; }
    }
    refrescar() {
        window.location.assign('/charts');
    }
};
BrixPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService }
];
BrixPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-brix',
        template: _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_brix_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_brix_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BrixPage);



/***/ }),

/***/ 2905:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/charts/brix/brix.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button defaultHref=\"/charts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"PANTGRAF.GRAFICABRIX\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondo\"> \n    <ion-card class=\"graficas\">\n      <ion-card-header>\n      </ion-card-header> \n      <div id=\"brix\" style=\"display: block;\"></div>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ 8945:
/*!********************************************!*\
  !*** ./src/app/charts/brix/brix.page.scss ***!
  \********************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n#brix {\n  width: auto !important;\n  height: 300px !important;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\n.graficas {\n  --background: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyaXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UscUJBQUE7QUFFSiIsImZpbGUiOiJicml4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS10ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM5NGI4ZDc7XHJcbiAgfVxyXG5cclxuICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI2JyaXgge1xyXG4gICAgd2lkdGggOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQgOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvbmRvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmFmaWNhcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_charts_brix_brix_module_ts.js.map