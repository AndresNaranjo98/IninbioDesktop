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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ph_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ph.page.html */ 4554);
/* harmony import */ var _ph_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ph.page.scss */ 3603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 3109);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ 3706);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 8260);









let PhPage = class PhPage {
    constructor(translate) {
        this.translate = translate;
        this.showSpinner = true;
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
        var ultimox, ultimoz, ultimophMayor, ultimophMenor;
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
                let pH = [];
                let phMayor = [];
                let phMenor = [];
                jquery__WEBPACK_IMPORTED_MODULE_3__.each(datosGrafica, function (key, value) {
                    var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
                    var newTimestamp = datosGrafica[key].x - sixHoursInMilliseconds;
                    datosGrafica[key].x = newTimestamp;
                    if (value.x) {
                        datosGrafica[key].x = parseInt(value.x);
                    }
                    if (value.z) {
                        datosGrafica[key].z = parseFloat(value.z);
                    }
                    if (value.phMayor) {
                        datosGrafica[key].phMayor = parseFloat(value.phMayor);
                    }
                    if (value.phMenor) {
                        datosGrafica[key].phMenor = parseFloat(value.phMenor);
                    }
                    pH.push([value.x, value.z]);
                    phMayor.push([value.x, value.phMayor]);
                    phMenor.push([value.x, value.phMenor]);
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
                        verticalAlign: 'bottom',
                        layout: 'horizontal',
                        alignColumns: false,
                        align: 'center',
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
                        },
                        {
                            name: 'MaxpH',
                            type: 'spline',
                            data: phMayor,
                            color: '#D35400'
                        },
                        {
                            name: 'MinpH',
                            type: 'spline',
                            data: phMenor,
                            color: '#F08080'
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
                        var varlocalz = parseFloat(UltimosDatos[0].z);
                        var varlocalphMayor = parseFloat(UltimosDatos[0].phMayor);
                        var varlocalphMenor = parseFloat(UltimosDatos[0].phMenor);
                        if ((getx() != varlocalx) && (getz() != varlocalz) && (getphMayor() != varlocalphMayor) && (getphMenor() != varlocalphMenor)) {
                            chart.series[0].addPoint([varlocalx, varlocalz]);
                            chart.series[1].addPoint([varlocalx, varlocalphMayor]);
                            chart.series[2].addPoint([varlocalx, varlocalphMenor]);
                        }
                    }
                }
            });
        }, 60000);
        function getx() { return ultimox; }
        function getz() { return ultimoz; }
        function getphMayor() { return ultimophMayor; }
        function getphMenor() { return ultimophMenor; }
    }
    refrescar() {
        window.location.assign('/charts');
    }
};
PhPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
PhPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-ph',
        template: _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ph_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button defaultHref=\"/charts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"PANTGRAF.GRAFICAPH\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondo\"> \n    <ion-card class=\"graficas\">\n      <ion-card-header>\n      </ion-card-header>\n      <ion-spinner *ngIf=\"showSpinner\" id=\"cargador\" name=\"circles\"></ion-spinner>\n      <div id=\"pH\" style=\"display: block;\"></div>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ 3603:
/*!****************************************!*\
  !*** ./src/app/charts/ph/ph.page.scss ***!
  \****************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n#pH {\n  width: auto !important;\n  height: 300px !important;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\n.graficas {\n  --background: #ffffff;\n}\n\n#cargador {\n  color: #0833a2;\n  top: 25vh;\n  left: 50%;\n  transform: scale(1.5);\n}\n\n@media screen and (max-width: 480px) {\n  #cargador {\n    top: 17vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFDRTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFFSjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFLHFCQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUNFO0VBQ0U7SUFDRSxTQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJwaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOTRiOGQ3O1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gICNwSCB7XHJcbiAgICB3aWR0aCA6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodCA6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9uZG8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvciA6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAuZ3JhZmljYXMge1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gICNjYXJnYWRvciB7XHJcbiAgICBjb2xvcjogIzA4MzNhMjtcclxuICAgIHRvcDogMjV2aDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAjY2FyZ2Fkb3Ige1xyXG4gICAgICB0b3A6IDE3dmg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_charts_ph_ph_module_ts.js.map