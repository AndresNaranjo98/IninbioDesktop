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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eficiencia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./eficiencia.page.html */ 7505);
/* harmony import */ var _eficiencia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eficiencia.page.scss */ 7474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 3109);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ 3706);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 8260);









let EficienciaPage = class EficienciaPage {
    constructor(translate) {
        this.translate = translate;
        this.showSpinner = true;
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
        let idTina = localStorage.getItem('idTina');
        let tinaIndividual = localStorage.getItem('idTina');
        let empresa = localStorage.getItem('empresa');
        let categoria = localStorage.getItem('categoria');
        let idiomas = localStorage.getItem('idioma');
        let Consultar = 1;
        let token = localStorage.getItem('token');
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
        const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_4__.AES.decrypt(empresa, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.SECRET_KEY);
        const datoDesencriptado = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__.enc.Utf8);
        var parseo = { 'idTina': idTina, 'empresa': datoDesencriptado, 'categoria': categoria };
        var parseo2 = { 'tinaIndividual': tinaIndividual, 'empresa': datoDesencriptado, 'Consultar': Consultar, 'categoria': categoria };
        jquery__WEBPACK_IMPORTED_MODULE_3__.ajax({
            url: 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
            headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
            type: "POST",
            dataType: "json",
            data: JSON.stringify(parseo),
            success: function (datosGrafica) {
                document.getElementById('cargador').style.display = 'none';
                let eficiencia = [];
                jquery__WEBPACK_IMPORTED_MODULE_3__.each(datosGrafica, function (key, value) {
                    var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
                    var newTimestamp = datosGrafica[key].x - sixHoursInMilliseconds;
                    datosGrafica[key].x = newTimestamp;
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
            jquery__WEBPACK_IMPORTED_MODULE_3__.post({
                url: 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
                headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
                type: 'POST',
                data: JSON.stringify(parseo2),
                dataType: 'json',
                success: function (UltimosDatos) {
                    if (UltimosDatos.length != 0) {
                        var varlocalx = parseInt(UltimosDatos[0].x);
                        var varlocalu = parseFloat(UltimosDatos[0].u);
                        if ((getx() != varlocalx) && (getu() != varlocalu)) {
                            chart.series[0].addPoint([varlocalx, varlocalu]);
                        }
                    }
                }
            });
        }, 60000);
        function getx() { return ultimox; }
        function getu() { return ultimou; }
    }
    refrescar() {
        window.location.assign('/charts');
    }
};
EficienciaPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
EficienciaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-eficiencia',
        template: _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eficiencia_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button defaultHref=\"/charts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"PANTGRAF.GRAFICAEFI\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondo\"> \n    <ion-card class=\"graficas\">\n      <ion-spinner *ngIf=\"showSpinner\" id=\"cargador\" name=\"circles\"></ion-spinner>\n      <div id=\"eficiencia\" style=\"display: block;\"></div>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ 7474:
/*!********************************************************!*\
  !*** ./src/app/charts/eficiencia/eficiencia.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n#eficiencia {\n  width: auto !important;\n  height: 300px !important;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\n.graficas {\n  --background: #ffffff;\n}\n\n#cargador {\n  color: #0833a2;\n  top: 25vh;\n  left: 50%;\n  transform: scale(1.5);\n}\n\n@media screen and (max-width: 480px) {\n  #cargador {\n    top: 17vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVmaWNpZW5jaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UscUJBQUE7QUFFSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0U7RUFDRTtJQUNFLFNBQUE7RUFFSjtBQUNGIiwiZmlsZSI6ImVmaWNpZW5jaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLXRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogIzk0YjhkNztcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAjZWZpY2llbmNpYSB7XHJcbiAgICB3aWR0aCA6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodCA6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9uZG8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmdyYWZpY2FzIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gICNjYXJnYWRvciB7XHJcbiAgICBjb2xvcjogIzA4MzNhMjtcclxuICAgIHRvcDogMjV2aDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAjY2FyZ2Fkb3Ige1xyXG4gICAgICB0b3A6IDE3dmg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_charts_eficiencia_eficiencia_module_ts.js.map