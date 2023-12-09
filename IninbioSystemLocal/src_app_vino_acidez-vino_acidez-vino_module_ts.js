"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vino_acidez-vino_acidez-vino_module_ts"],{

/***/ 1795:
/*!****************************************************************!*\
  !*** ./src/app/vino/acidez-vino/acidez-vino-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcidezVinoPageRoutingModule": () => (/* binding */ AcidezVinoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _acidez_vino_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acidez-vino.page */ 4977);




const routes = [
    {
        path: '',
        component: _acidez_vino_page__WEBPACK_IMPORTED_MODULE_0__.AcidezVinoPage
    }
];
let AcidezVinoPageRoutingModule = class AcidezVinoPageRoutingModule {
};
AcidezVinoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AcidezVinoPageRoutingModule);



/***/ }),

/***/ 9040:
/*!********************************************************!*\
  !*** ./src/app/vino/acidez-vino/acidez-vino.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcidezVinoPageModule": () => (/* binding */ AcidezVinoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _acidez_vino_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acidez-vino-routing.module */ 1795);
/* harmony import */ var _acidez_vino_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acidez-vino.page */ 4977);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let AcidezVinoPageModule = class AcidezVinoPageModule {
};
AcidezVinoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _acidez_vino_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcidezVinoPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_acidez_vino_page__WEBPACK_IMPORTED_MODULE_1__.AcidezVinoPage]
    })
], AcidezVinoPageModule);



/***/ }),

/***/ 4977:
/*!******************************************************!*\
  !*** ./src/app/vino/acidez-vino/acidez-vino.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcidezVinoPage": () => (/* binding */ AcidezVinoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_acidez_vino_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./acidez-vino.page.html */ 5753);
/* harmony import */ var _acidez_vino_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acidez-vino.page.scss */ 3768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 3109);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ 3706);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 8260);










let AcidezVinoPage = class AcidezVinoPage {
    constructor(navegacion, translate) {
        this.navegacion = navegacion;
        this.translate = translate;
        this.showSpinner = true;
        this.translate.use(localStorage.getItem('idioma'));
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.graficAcidez();
    }
    ionViewDidLeave() {
        clearInterval(this.intervalFunction);
    }
    graficAcidez() {
        var ultimox, ultimoy;
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
                let acidez = [];
                jquery__WEBPACK_IMPORTED_MODULE_3__.each(datosGrafica, function (key, value) {
                    var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
                    var newTimestamp = datosGrafica[key].fecha - sixHoursInMilliseconds;
                    datosGrafica[key].fecha = newTimestamp;
                    if (value.fecha) {
                        datosGrafica[key].fecha = parseInt(value.fecha);
                    }
                    if (value.acidez) {
                        datosGrafica[key].acidez = parseFloat(value.acidez);
                    }
                    acidez.push([value.fecha, value.acidez]);
                });
                chart = highcharts__WEBPACK_IMPORTED_MODULE_2__.chart('acidez', {
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
                                text: 'Valores',
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
                            name: 'Acidez',
                            type: "spline",
                            yAxis: 0,
                            data: acidez,
                            color: '#14faff'
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
                        jquery__WEBPACK_IMPORTED_MODULE_3__.each(UltimosDatos, function (key, value) {
                            var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
                            var newTimestamp = UltimosDatos[key].fecha - sixHoursInMilliseconds;
                            UltimosDatos[key].fecha = newTimestamp;
                            var updateFecha = parseInt(UltimosDatos[0].fecha);
                            var updateAcidez = parseFloat(UltimosDatos[0].acidez);
                            if ((getx() != updateFecha) && (gety() != updateAcidez)) {
                                chart.series[0].addPoint([updateFecha, updateAcidez]);
                            }
                        });
                    }
                }
            });
        }, 60000);
        function getx() { return ultimox; }
        function gety() { return ultimoy; }
    }
};
AcidezVinoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
AcidezVinoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-acidez-vino',
        template: _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_acidez_vino_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_acidez_vino_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AcidezVinoPage);



/***/ }),

/***/ 5753:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/vino/acidez-vino/acidez-vino.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button defaultHref=\"/charts-vino\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"PANTGRAF.GRAFICATEMP\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondo\"> \n    <ion-card class=\"graficas\">\n      <ion-spinner *ngIf=\"showSpinner\" id=\"cargador\" name=\"circles\"></ion-spinner>\n      <div id=\"acidez\" style=\"display: block;\"></div>\n    </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 3768:
/*!********************************************************!*\
  !*** ./src/app/vino/acidez-vino/acidez-vino.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n#acidez {\n  width: auto !important;\n  height: 300px !important;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\n.graficas {\n  --background: #ffffff;\n}\n\n#cargador {\n  color: #0833a2;\n  top: 25vh;\n  left: 50%;\n  transform: scale(1.5);\n}\n\n@media screen and (max-width: 480px) {\n  #cargador {\n    top: 17vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjaWRlei12aW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0U7SUFDRSxTQUFBO0VBQ0o7QUFDRiIsImZpbGUiOiJhY2lkZXotdmluby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOTRiOGQ3O1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAjYWNpZGV6IHtcclxuICAgIHdpZHRoIDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0IDogMzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb25kbyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yIDogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5ncmFmaWNhcyB7XHJcbiAgICAtLWJhY2tncm91bmQgOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgI2NhcmdhZG9yIHtcclxuICAgIGNvbG9yOiAjMDgzM2EyO1xyXG4gICAgdG9wOiAyNXZoO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICNjYXJnYWRvciB7XHJcbiAgICAgIHRvcDogMTd2aDtcclxuICAgIH1cclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_vino_acidez-vino_acidez-vino_module_ts.js.map