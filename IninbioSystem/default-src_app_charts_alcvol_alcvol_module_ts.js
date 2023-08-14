"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_charts_alcvol_alcvol_module_ts"],{

/***/ 4805:
/*!********************************************************!*\
  !*** ./src/app/charts/alcvol/alcvol-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlcvolPageRoutingModule": () => (/* binding */ AlcvolPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _alcvol_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alcvol.page */ 8738);




const routes = [
    {
        path: '',
        component: _alcvol_page__WEBPACK_IMPORTED_MODULE_0__.AlcvolPage
    }
];
let AlcvolPageRoutingModule = class AlcvolPageRoutingModule {
};
AlcvolPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlcvolPageRoutingModule);



/***/ }),

/***/ 9078:
/*!************************************************!*\
  !*** ./src/app/charts/alcvol/alcvol.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlcvolPageModule": () => (/* binding */ AlcvolPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _alcvol_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alcvol-routing.module */ 4805);
/* harmony import */ var _alcvol_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alcvol.page */ 8738);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let AlcvolPageModule = class AlcvolPageModule {
};
AlcvolPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _alcvol_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlcvolPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_alcvol_page__WEBPACK_IMPORTED_MODULE_1__.AlcvolPage]
    })
], AlcvolPageModule);



/***/ }),

/***/ 8738:
/*!**********************************************!*\
  !*** ./src/app/charts/alcvol/alcvol.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlcvolPage": () => (/* binding */ AlcvolPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alcvol_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./alcvol.page.html */ 1330);
/* harmony import */ var _alcvol_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alcvol.page.scss */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 3109);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 466);







let AlcvolPage = class AlcvolPage {
    constructor(translate) {
        this.translate = translate;
        this.translate.use(localStorage.getItem('idioma'));
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.graficaAlcVol();
    }
    ionViewDidLeave() { }
    graficaAlcVol() {
        var ultimox, ultimov;
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
                                text: 'Values %',
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
                                text: 'Werte %',
                            },
                        });
                    }
                    ch.redraw();
                });
            }
        }, 1000);
        jquery__WEBPACK_IMPORTED_MODULE_3__.ajax({
            url: 'https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php?idTina=' + num_tina + '&tequilera=' + tequilera,
            type: 'GET',
            dataType: 'json',
            success: function (datosGrafica) {
                let alcvol = [];
                jquery__WEBPACK_IMPORTED_MODULE_3__.each(datosGrafica, function (key, value) {
                    if (value.x) {
                        datosGrafica[key].x = parseInt(value.x);
                    }
                    if (value.v) {
                        datosGrafica[key].v = parseFloat(value.v);
                    }
                    alcvol.push([value.x, value.v]);
                });
                chart = highcharts__WEBPACK_IMPORTED_MODULE_2__.chart('alcvol', {
                    chart: {
                        type: 'spline',
                        backgroundColor: 'transparent',
                    },
                    title: {
                        text: 'Mediciones en Tiempo Real',
                        align: 'center',
                        style: {
                            color: 'black',
                        },
                    },
                    credits: {
                        enabled: false,
                    },
                    xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            second: '%H:%M:%S %P',
                        },
                        title: {
                            text: 'Hora de Medición',
                            style: {
                                color: 'black',
                            },
                        },
                        labels: {
                            style: {
                                color: 'black',
                            },
                        },
                        gridLineColor: '#000000',
                    },
                    yAxis: [
                        {
                            title: {
                                text: 'Valores %',
                                style: {
                                    color: 'black',
                                },
                            },
                            visible: true,
                            plotLines: [
                                {
                                    value: 0,
                                    width: 1,
                                },
                            ],
                            labels: {
                                style: {
                                    color: 'black',
                                },
                            },
                            gridLineColor: 'black',
                        },
                    ],
                    tooltip: {
                        formatter: function () {
                            return ('<b>' +
                                this.series.name +
                                '</b><br/>' +
                                highcharts__WEBPACK_IMPORTED_MODULE_2__.dateFormat('%H:%M:%S %P', this.x) +
                                '<br/>' +
                                highcharts__WEBPACK_IMPORTED_MODULE_2__.numberFormat(this.y, 2));
                        },
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                enabled: true,
                            },
                        },
                    },
                    legend: {
                        enabled: false,
                    },
                    exporting: {
                        enabled: false,
                        chartOptions: {
                            plotOptions: {
                                series: {
                                    dataLabels: {
                                        enabled: true,
                                    },
                                },
                            },
                        },
                        fallbackToExportServer: false,
                    },
                    series: [
                        {
                            name: '%Alc.Vol',
                            type: 'spline',
                            yAxis: 0,
                            data: alcvol,
                            color: '#ff14ff',
                        }
                    ],
                });
            },
        });
        setInterval(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__.get('https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php?tinaIndividual=' +
                num_tina +
                '&tequilera=' +
                tequilera +
                '&Consultar=1', function (UltimosDatos) {
                var varlocalx = parseInt(UltimosDatos[0].x);
                var varlocalv = parseFloat(UltimosDatos[0].v);
                if ((getx() != varlocalx) && (getv() != varlocalv)) {
                    chart.series[0].addPoint([varlocalx, varlocalv]);
                    // chart.series[0].addPoint([varlocalx, varlocalv]);
                    // chart.series[0].addPoint([varlocalx, varlocalv]);
                    // this.chart.series[0].addPoint([varlocalx, varlocalv]);
                }
            });
        }, 1000);
        function getx() {
            return ultimox;
        }
        function getv() {
            return ultimov;
        }
    }
    refrescar() {
        window.location.assign('/charts');
    }
};
AlcvolPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService }
];
AlcvolPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-alcvol',
        template: _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alcvol_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_alcvol_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlcvolPage);



/***/ }),

/***/ 1330:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/charts/alcvol/alcvol.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button defaultHref=\"/charts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"PANTGRAF.GRAFICALCVOL\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondo\"> \n    <ion-card class=\"graficas\">\n      <ion-card-header>\n      </ion-card-header> \n      <div id=\"alcvol\" style=\"display: block;\"></div>\n    </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 436:
/*!************************************************!*\
  !*** ./src/app/charts/alcvol/alcvol.page.scss ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n#alcvol {\n  width: auto !important;\n  height: 300px !important;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\n.graficas {\n  --background: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsY3ZvbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtBQUNKIiwiZmlsZSI6ImFsY3ZvbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOTRiOGQ3O1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAjYWxjdm9sIHtcclxuICAgIHdpZHRoIDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0IDogMzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb25kbyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICAuZ3JhZmljYXMge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_charts_alcvol_alcvol_module_ts.js.map