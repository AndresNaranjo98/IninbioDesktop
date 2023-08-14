"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_charts_ph_ph_module_ts"],{

/***/ 1055:
/*!************************************************!*\
  !*** ./src/app/charts/ph/ph-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhPageRoutingModule": () => (/* binding */ PhPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ph_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ph.page */ 9328);




const routes = [
    {
        path: '',
        component: _ph_page__WEBPACK_IMPORTED_MODULE_0__.PhPage
    }
];
let PhPageRoutingModule = class PhPageRoutingModule {
};
PhPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PhPageRoutingModule);



/***/ }),

/***/ 2958:
/*!****************************************!*\
  !*** ./src/app/charts/ph/ph.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhPageModule": () => (/* binding */ PhPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ph_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ph-routing.module */ 1055);
/* harmony import */ var _ph_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ph.page */ 9328);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let PhPageModule = class PhPageModule {
};
PhPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ph_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_ph_page__WEBPACK_IMPORTED_MODULE_1__.PhPage]
    })
], PhPageModule);



/***/ }),

/***/ 9328:
/*!**************************************!*\
  !*** ./src/app/charts/ph/ph.page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhPage": () => (/* binding */ PhPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ph_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ph.page.html */ 4554);
/* harmony import */ var _ph_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ph.page.scss */ 3603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 3109);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 466);







let PhPage = class PhPage {
    constructor(translate) {
        this.translate = translate;
        this.translate.use(localStorage.getItem('idioma'));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.graficapH();
    }
    ionViewDidLeave() {
    }
    graficapH() {
        var ultimox, ultimoz;
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
                                text: 'Values pH',
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
                                text: 'Werte pH',
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
                let pH = [];
                jquery__WEBPACK_IMPORTED_MODULE_3__.each(datosGrafica, function (key, value) {
                    if (value.x) {
                        datosGrafica[key].x = parseInt(value.x);
                    }
                    if (value.z) {
                        datosGrafica[key].z = parseFloat(value.z);
                    }
                    pH.push([value.x, value.z]);
                });
                chart = highcharts__WEBPACK_IMPORTED_MODULE_2__.chart('pH', {
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
                                text: 'Valores pH',
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
                            name: 'pH',
                            type: "spline",
                            yAxis: 0,
                            data: pH,
                            color: '#14faff'
                        }]
                });
            }
        });
        setInterval(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__.get("https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php?tinaIndividual=" + num_tina + "&tequilera=" + tequilera + "&Consultar=1", function (UltimosDatos) {
                var varlocalx = parseInt(UltimosDatos[0].x);
                var varlocalz = parseFloat(UltimosDatos[0].z);
                if ((getx() != varlocalx) && (getz() != varlocalz)) {
                    chart.series[0].addPoint([varlocalx, varlocalz]);
                }
            });
        }, 1000);
        function getx() { return ultimox; }
        function getz() { return ultimoz; }
    }
    refrescar() {
        window.location.assign('/charts');
    }
};
PhPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService }
];
PhPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-ph',
        template: _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ph_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ph_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhPage);



/***/ }),

/***/ 4554:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/charts/ph/ph.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button defaultHref=\"/charts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"PANTGRAF.GRAFICAPH\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondo\"> \n    <ion-card class=\"graficas\">\n      <ion-card-header>\n      </ion-card-header> \n      <div id=\"pH\" style=\"display: block;\"></div>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ 3603:
/*!****************************************!*\
  !*** ./src/app/charts/ph/ph.page.scss ***!
  \****************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n#pH {\n  width: auto !important;\n  height: 300px !important;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\n.graficas {\n  --background: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFDRTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFFSjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFLHFCQUFBO0FBRUoiLCJmaWxlIjoicGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLXRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogIzk0YjhkNztcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAjcEgge1xyXG4gICAgd2lkdGggOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQgOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvbmRvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3IgOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLmdyYWZpY2FzIHtcclxuICAgIC0tYmFja2dyb3VuZCA6ICNmZmZmZmY7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_charts_ph_ph_module_ts.js.map