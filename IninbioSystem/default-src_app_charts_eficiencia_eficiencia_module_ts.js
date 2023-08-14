"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_charts_eficiencia_eficiencia_module_ts"],{

/***/ 6746:
/*!****************************************************************!*\
  !*** ./src/app/charts/eficiencia/eficiencia-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EficienciaPageRoutingModule": () => (/* binding */ EficienciaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _eficiencia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eficiencia.page */ 4692);




const routes = [
    {
        path: '',
        component: _eficiencia_page__WEBPACK_IMPORTED_MODULE_0__.EficienciaPage
    }
];
let EficienciaPageRoutingModule = class EficienciaPageRoutingModule {
};
EficienciaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EficienciaPageRoutingModule);



/***/ }),

/***/ 8272:
/*!********************************************************!*\
  !*** ./src/app/charts/eficiencia/eficiencia.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EficienciaPageModule": () => (/* binding */ EficienciaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _eficiencia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eficiencia-routing.module */ 6746);
/* harmony import */ var _eficiencia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eficiencia.page */ 4692);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let EficienciaPageModule = class EficienciaPageModule {
};
EficienciaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _eficiencia_routing_module__WEBPACK_IMPORTED_MODULE_0__.EficienciaPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_eficiencia_page__WEBPACK_IMPORTED_MODULE_1__.EficienciaPage]
    })
], EficienciaPageModule);



/***/ }),

/***/ 4692:
/*!******************************************************!*\
  !*** ./src/app/charts/eficiencia/eficiencia.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EficienciaPage": () => (/* binding */ EficienciaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eficiencia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./eficiencia.page.html */ 7505);
/* harmony import */ var _eficiencia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eficiencia.page.scss */ 7474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 3109);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 466);







let EficienciaPage = class EficienciaPage {
    constructor(translate) {
        this.translate = translate;
        this.translate.use(localStorage.getItem('idioma'));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.graficaEficiencia();
    }
    ionViewDidLeave() {
    }
    graficaEficiencia() {
        var ultimox, ultimou;
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
                        ch.series[0].name = 'Efficiency';
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
                        ch.series[0].name = 'Wirkungsgrad';
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
                let eficiencia = [];
                jquery__WEBPACK_IMPORTED_MODULE_3__.each(datosGrafica, function (key, value) {
                    if (value.x) {
                        datosGrafica[key].x = parseInt(value.x);
                    }
                    if (value.u) {
                        datosGrafica[key].u = parseFloat(value.u);
                    }
                    eficiencia.push([value.x, value.u]);
                });
                chart = highcharts__WEBPACK_IMPORTED_MODULE_2__.chart('eficiencia', {
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
                                text: 'Valores %',
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
                            data: eficiencia,
                            color: '#1eff05'
                        }]
                });
            }
        });
        setInterval(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__.get("https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php?tinaIndividual=" + num_tina + "&tequilera=" + tequilera + "&Consultar=1", function (UltimosDatos) {
                var varlocalx = parseInt(UltimosDatos[0].x);
                var varlocalu = parseFloat(UltimosDatos[0].u);
                if ((getx() != varlocalx) && (getu() != varlocalu)) {
                    chart.series[0].addPoint([varlocalx, varlocalu]);
                }
            });
        }, 1000);
        function getx() { return ultimox; }
        function getu() { return ultimou; }
    }
    refrescar() {
        window.location.assign('/charts');
    }
};
EficienciaPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService }
];
EficienciaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-eficiencia',
        template: _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eficiencia_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_eficiencia_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EficienciaPage);



/***/ }),

/***/ 7505:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/charts/eficiencia/eficiencia.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button defaultHref=\"/charts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"PANTGRAF.GRAFICAEFI\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondo\"> \n    <ion-card class=\"graficas\">\n      <ion-card-header>\n      </ion-card-header> \n      <div id=\"eficiencia\" style=\"display: block;\"></div>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ 7474:
/*!********************************************************!*\
  !*** ./src/app/charts/eficiencia/eficiencia.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n#eficiencia {\n  width: auto !important;\n  height: 300px !important;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\n.graficas {\n  --background: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVmaWNpZW5jaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UscUJBQUE7QUFFSiIsImZpbGUiOiJlZmljaWVuY2lhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS10ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM5NGI4ZDc7XHJcbiAgfVxyXG5cclxuICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI2VmaWNpZW5jaWEge1xyXG4gICAgd2lkdGggOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQgOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvbmRvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmFmaWNhcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_charts_eficiencia_eficiencia_module_ts.js.map