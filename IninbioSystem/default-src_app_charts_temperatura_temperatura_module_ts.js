"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_charts_temperatura_temperatura_module_ts"],{

/***/ 9045:
/*!******************************************************************!*\
  !*** ./src/app/charts/temperatura/temperatura-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemperaturaPageRoutingModule": () => (/* binding */ TemperaturaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _temperatura_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperatura.page */ 1703);




const routes = [
    {
        path: '',
        component: _temperatura_page__WEBPACK_IMPORTED_MODULE_0__.TemperaturaPage
    }
];
let TemperaturaPageRoutingModule = class TemperaturaPageRoutingModule {
};
TemperaturaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TemperaturaPageRoutingModule);



/***/ }),

/***/ 1824:
/*!**********************************************************!*\
  !*** ./src/app/charts/temperatura/temperatura.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemperaturaPageModule": () => (/* binding */ TemperaturaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _temperatura_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperatura-routing.module */ 9045);
/* harmony import */ var _temperatura_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temperatura.page */ 1703);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let TemperaturaPageModule = class TemperaturaPageModule {
};
TemperaturaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _temperatura_routing_module__WEBPACK_IMPORTED_MODULE_0__.TemperaturaPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_temperatura_page__WEBPACK_IMPORTED_MODULE_1__.TemperaturaPage],
    })
], TemperaturaPageModule);



/***/ }),

/***/ 1703:
/*!********************************************************!*\
  !*** ./src/app/charts/temperatura/temperatura.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemperaturaPage": () => (/* binding */ TemperaturaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_temperatura_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./temperatura.page.html */ 4560);
/* harmony import */ var _temperatura_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temperatura.page.scss */ 3830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 3109);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let TemperaturaPage = class TemperaturaPage {
    constructor(navegacion, translate) {
        this.navegacion = navegacion;
        this.translate = translate;
        this.translate.use(localStorage.getItem('idioma'));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.graficaTemperatura();
    }
    ionViewDidLeave() {
    }
    onClick() {
        this.navegacion.navigate(['/charts']);
    }
    graficaTemperatura() {
        var ultimox, ultimoy;
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
                                text: 'Values °C',
                            },
                        });
                        ch.series[0].name = 'Temperature';
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
                                text: 'Werte °C',
                            },
                        });
                        ch.series[0].name = 'Temperatur';
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
                let temp = [];
                jquery__WEBPACK_IMPORTED_MODULE_3__.each(datosGrafica, function (key, value) {
                    if (value.x) {
                        datosGrafica[key].x = parseInt(value.x);
                    }
                    if (value.y) {
                        datosGrafica[key].y = parseFloat(value.y);
                    }
                    temp.push([value.x, value.y]);
                });
                chart = highcharts__WEBPACK_IMPORTED_MODULE_2__.chart('temperatura', {
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
                                text: 'Valores °C',
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
                            name: 'Temperatura',
                            type: "spline",
                            yAxis: 0,
                            data: temp,
                            color: '#0833a2'
                        }]
                });
            }
        });
        setInterval(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__.get("https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php?tinaIndividual=" + num_tina + "&tequilera=" + tequilera + "&Consultar=1", function (UltimosDatos) {
                var varlocalx = parseInt(UltimosDatos[0].x);
                var varlocaly = parseFloat(UltimosDatos[0].y);
                if ((getx() != varlocalx) && (gety() != varlocaly)) {
                    chart.series[0].addPoint([varlocalx, varlocaly]);
                }
            });
        }, 1000);
        function getx() { return ultimox; }
        function gety() { return ultimoy; }
    }
    refrescar() {
        window.location.assign('/charts');
    }
};
TemperaturaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
TemperaturaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-temperatura',
        template: _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_temperatura_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_temperatura_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TemperaturaPage);



/***/ }),

/***/ 4560:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/charts/temperatura/temperatura.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button defaultHref=\"/charts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"PANTGRAF.GRAFICATEMP\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondo\"> \n    <ion-card class=\"graficas\">\n      <ion-card-header>\n      </ion-card-header> \n      <div id=\"temperatura\" style=\"display: block;\"></div>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ 3830:
/*!**********************************************************!*\
  !*** ./src/app/charts/temperatura/temperatura.page.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n#temperatura {\n  width: auto !important;\n  height: 300px !important;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\n.graficas {\n  --background: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBlcmF0dXJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFDRTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFFSjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFLHFCQUFBO0FBRUoiLCJmaWxlIjoidGVtcGVyYXR1cmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLXRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogIzk0YjhkNztcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAjdGVtcGVyYXR1cmEge1xyXG4gICAgd2lkdGggOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQgOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvbmRvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3IgOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLmdyYWZpY2FzIHtcclxuICAgIC0tYmFja2dyb3VuZCA6ICNmZmZmZmY7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_charts_temperatura_temperatura_module_ts.js.map