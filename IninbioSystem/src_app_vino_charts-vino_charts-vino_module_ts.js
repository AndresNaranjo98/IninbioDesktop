"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vino_charts-vino_charts-vino_module_ts"],{

/***/ 6120:
/*!****************************************************************!*\
  !*** ./src/app/vino/charts-vino/charts-vino-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsVinoPageRoutingModule": () => (/* binding */ ChartsVinoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _charts_vino_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-vino.page */ 4226);




const routes = [
    {
        path: '',
        component: _charts_vino_page__WEBPACK_IMPORTED_MODULE_0__.ChartsVinoPage
    }
];
let ChartsVinoPageRoutingModule = class ChartsVinoPageRoutingModule {
};
ChartsVinoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChartsVinoPageRoutingModule);



/***/ }),

/***/ 7923:
/*!********************************************************!*\
  !*** ./src/app/vino/charts-vino/charts-vino.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "ChartsVinoPageModule": () => (/* binding */ ChartsVinoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _charts_vino_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-vino-routing.module */ 6120);
/* harmony import */ var _charts_vino_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-vino.page */ 4226);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2003);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3981);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ChartsVinoPageModule = class ChartsVinoPageModule {
};
ChartsVinoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _charts_vino_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsVinoPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        ],
        declarations: [_charts_vino_page__WEBPACK_IMPORTED_MODULE_1__.ChartsVinoPage]
    })
], ChartsVinoPageModule);



/***/ }),

/***/ 4226:
/*!******************************************************!*\
  !*** ./src/app/vino/charts-vino/charts-vino.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsVinoPage": () => (/* binding */ ChartsVinoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charts_vino_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./charts-vino.page.html */ 5781);
/* harmony import */ var _charts_vino_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-vino.page.scss */ 8270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ 9193);
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ 3706);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ 4940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/charts.service */ 5296);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_descarga_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/descarga-excel.service */ 3364);













let ChartsVinoPage = class ChartsVinoPage {
    constructor(servicio, translate, navegacion, alertController, service) {
        this.servicio = servicio;
        this.translate = translate;
        this.navegacion = navegacion;
        this.alertController = alertController;
        this.service = service;
        this.showSpinner = true;
        this.datoSensores = ['densidad', 'acidez', 'temperatura, volumen'];
        this.num_tina = localStorage.getItem('idTina');
        this.translate.use(localStorage.getItem('idioma'));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.graficaTinas();
        this.cargarDatos();
        this.cargarDatosFull();
        this.intervalUpdate = setInterval(function () {
            this.cargarDatos();
            this.cargarDatosFull();
        }.bind(this), 60000);
    }
    ionViewDidLeave() {
        clearInterval(this.intervalUpdate);
        clearInterval(this.intervalFunction);
    }
    cargarDatos() {
        this.servicio.getUltimoSensor().subscribe((data) => {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            this.datoSensores = response;
        }, (err) => {
            console.log(err);
        });
    }
    cargarDatosFull() {
        this.servicio.getSensores().subscribe((data) => {
            if (Object.entries(data).length != 0) {
                let json = JSON.stringify(data);
                let response = JSON.parse(json);
                this.datosExcel = response;
                console.log(this.datosExcel);
            }
        }, (err) => {
            console.log(err);
        });
    }
    graficaTinas() {
        var ultimox, ultimoy, ultimoz, ultimov, ultimow, chart;
        let idTina = localStorage.getItem('idTina');
        let tinaIndividual = localStorage.getItem('idTina');
        let empresa = localStorage.getItem('empresa');
        let idiomas = localStorage.getItem('idioma');
        let Consultar = 1;
        let token = localStorage.getItem('token');
        let categoria = localStorage.getItem('categoria');
        const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_3__.AES.decrypt(empresa, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.SECRET_KEY);
        const datoDesencriptado = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_3__.enc.Utf8);
        var parseo = { 'idTina': idTina, 'empresa': datoDesencriptado, 'categoria': categoria };
        var parseo2 = { 'tinaIndividual': tinaIndividual, 'empresa': datoDesencriptado, 'Consultar': Consultar, 'categoria': categoria };
        jquery__WEBPACK_IMPORTED_MODULE_5__.ajax({
            url: 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
            headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(parseo),
            success: function (datosGrafica) {
                document.getElementById('spinner').style.display = 'none';
                let acidez = [];
                let densidad = [];
                let temperatura = [];
                let volumen = [];
                jquery__WEBPACK_IMPORTED_MODULE_5__.each(datosGrafica, function (key, value) {
                    var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
                    var newTimestamp = datosGrafica[key].fecha - sixHoursInMilliseconds;
                    datosGrafica[key].fecha = newTimestamp;
                    if (value.fecha) {
                        datosGrafica[key].fecha = parseInt(value.fecha);
                        // datosGrafica[key].x -= 6*3600;
                    }
                    if (value.densidad) {
                        datosGrafica[key].densidad = parseFloat(value.densidad);
                    }
                    if (value.acidez) {
                        datosGrafica[key].acidez = parseFloat(value.acidez);
                    }
                    if (value.temperatura) {
                        datosGrafica[key].temperatura = parseFloat(value.temperatura);
                    }
                    if (value.volumen) {
                        datosGrafica[key].volumen = parseFloat(value.volumen);
                    }
                    densidad.push([value.fecha, value.densidad]);
                    acidez.push([value.fecha, value.acidez]);
                    temperatura.push([value.fecha, value.temperatura]);
                    volumen.push([value.fecha, value.volumen]);
                });
                var container = document.createElement('div');
                document.body.appendChild(container);
                chart = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__.chart('container', {
                    chart: {
                        type: 'spline',
                        zoomType: 'xy',
                        renderTo: container,
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
                            min: 0,
                            max: 90,
                            title: {
                                text: 'Valores',
                                style: {
                                    color: 'black',
                                },
                            },
                            visible: false,
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
                        {
                            min: 0,
                            max: 90,
                            visible: false,
                        },
                        {
                            min: 0,
                            max: 90,
                            visible: false,
                        },
                        {
                            min: 0,
                            max: 90,
                            visible: false,
                        },
                        {
                            min: 0,
                            max: 100,
                            alignTicks: false,
                            tickInterval: 10,
                            title: {
                                text: 'Valores',
                                style: {
                                    color: 'black',
                                },
                            },
                            visible: true,
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
                                highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__.dateFormat('%H:%M:%S %P', this.x) +
                                '<br/>' +
                                highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__.numberFormat(this.y, 2));
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
                                        enabled: true,
                                    },
                                },
                            },
                        },
                        fallbackToExportServer: false,
                    },
                    series: [
                        {
                            name: 'Densidad',
                            type: 'spline',
                            // yAxis: 0,
                            data: densidad,
                            color: '#0833a2',
                        },
                        {
                            name: 'Acidez',
                            type: 'spline',
                            // yAxis: 1,
                            data: acidez,
                            color: '#14faff',
                        },
                        {
                            name: 'Temperatura',
                            type: 'spline',
                            // yAxis: 2,
                            data: temperatura,
                            color: '#edff14',
                        },
                        {
                            name: 'Volumen',
                            type: 'spline',
                            // yAxis: 3,
                            data: volumen,
                            color: '#ff14ff',
                        }
                    ],
                });
            },
        });
        this.intervalFunction = setInterval(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__.post({
                url: 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
                headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
                type: 'POST',
                data: JSON.stringify(parseo2),
                dataType: 'json',
                success: function (UltimosDatos) {
                    if (UltimosDatos.length != 0) {
                        var updateFecha = parseInt(UltimosDatos[0].fecha);
                        var updateDensidad = parseFloat(UltimosDatos[0].densidad);
                        var updateAcidez = parseFloat(UltimosDatos[0].acidez);
                        var updateTemperatura = parseFloat(UltimosDatos[0].temperatura);
                        var updateVolumen = parseFloat(UltimosDatos[0].volumen);
                        if (getx() != updateFecha &&
                            gety() != updateDensidad &&
                            getz() != updateAcidez &&
                            getw() != updateTemperatura &&
                            getv() != updateVolumen) {
                            chart.series[0].addPoint([updateFecha, updateDensidad]);
                            chart.series[1].addPoint([updateFecha, updateAcidez]);
                            chart.series[2].addPoint([updateFecha, updateTemperatura]);
                            chart.series[3].addPoint([updateFecha, updateVolumen]);
                            //chart.series[0].addPoint([varlocalx, varlocaly - 1], false, true);
                            //chart.series[1].addPoint([varlocalx,varlocalz - 1], false, true);
                            //chart.series[2].addPoint([varlocalx,varlocalw - 1], false, true);
                            //chart.series[3].addPoint([varlocalx,varlocalv - 1], false, true);
                            //chart.series[4].addPoint([varlocalx,varlocalu - 1], false, true);
                            chart.redraw();
                        }
                    }
                }
            });
        }, 60000);
        function getx() {
            return ultimox;
        }
        function gety() {
            return ultimoy;
        }
        function getz() {
            return ultimoz;
        }
        function getw() {
            return ultimow;
        }
        function getv() {
            return ultimov;
        }
    }
    graficaDensidad() {
        this.navegacion.navigate(['/densidad-vino']);
    }
    graficAcidez() {
        this.navegacion.navigate(['/acidez-vino']);
    }
    graficaTemperatura() {
        this.navegacion.navigate(['temperatura-vino']);
    }
    graficaVolumen() {
        this.navegacion.navigate(['/volumen-vino']);
    }
    generarExcel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let num_tina = localStorage.getItem('idTina');
            let tina = num_tina.toString();
            const alert = yield this.alertController.create({
                cssClass: 'alerta',
                header: this.translate.instant('FECHASEXCEL.PERIODO'),
                message: this.translate.instant('FECHASEXCEL.INGRESARFECHAS'),
                inputs: [
                    {
                        name: 'primer',
                        type: 'date',
                        id: 'fecha1',
                    },
                    {
                        name: 'segunda',
                        type: 'date',
                        id: 'fecha2'
                    }
                ],
                buttons: [{
                        cssClass: 'confirmacion',
                        text: this.translate.instant("FECHASEXCEL.GENERAR"),
                        handler: (datosAlerta) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            let primerFecha = datosAlerta.primer;
                            let segundaFecha = datosAlerta.segunda;
                            if (primerFecha != "" && segundaFecha != "") {
                                this.service.generarExcel(primerFecha, segundaFecha).subscribe((response) => {
                                    let nombre = this.translate.instant('INFOREXCEL.TITULO') + ' ' + tina + '.xlsx';
                                    let blob = response.body;
                                    let a = document.createElement('a');
                                    a.download = nombre;
                                    a.href = window.URL.createObjectURL(blob);
                                    a.click();
                                });
                            }
                            else {
                                let alert = yield this.alertController.create({
                                    cssClass: 'alerta',
                                    header: this.translate.instant('FECHASEXCEL.ERROR'),
                                    message: this.translate.instant('FECHASEXCEL.FECHAS'),
                                    buttons: [
                                        {
                                            cssClass: 'confirmacion',
                                            text: 'Ok'
                                        }
                                    ],
                                });
                                alert.present();
                            }
                        })
                    }]
            });
            yield alert.present();
        });
    }
};
ChartsVinoPage.ctorParameters = () => [
    { type: src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_6__.ChartsService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: src_app_services_descarga_excel_service__WEBPACK_IMPORTED_MODULE_7__.DescargaExcelService }
];
ChartsVinoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-charts-vino',
        template: _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_charts_vino_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_charts_vino_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChartsVinoPage);



/***/ }),

/***/ 5781:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/vino/charts-vino/charts-vino.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button defaultHref=\"/inicio-vino\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"PANTGRAF.GRAFICOS\" | translate}}</ion-title>\n  </ion-toolbar>\n  <ion-item class=\"contenido\">\n    <ion-label class=\"letras\" slot=\"end\">°F</ion-label>\n    <ion-toggle class=\"toggle\" slot=\"end\" [ngModel]=\"grados\" (ionChange)=\"cambiarGrados()\" checked=\"false\"></ion-toggle>\n    <ion-label class=\"letras\">{{\"IDTINA.ID\" | translate}} {{num_tina}}</ion-label>\n  </ion-item>\n</ion-header>\n\n<ion-content class=\"fondo\">\n  <ion-card id=\"grafica\">\n    <!-- <button (click)='clearInputText($event)' style=\"margin-left: 98%; background-color: transparent;\">\n      <ion-icon name=\"contrast\" style=\"color: black;\" size=\"large\">\n      </ion-icon>\n    </button> -->\n    <ion-spinner *ngIf=\"showSpinner\" id=\"spinner\" name=\"circles\"></ion-spinner>\n    <div id=\"container\"></div>\n  </ion-card>\n\n  <ion-grid>\n    <ion-row *ngFor = \"let dato of datoSensores\">\n\n      <ion-col class=\"ion-text-center\" size=\"6\">\n        <ion-card class=\"fondoBlanco\" (click)=\"graficaDensidad()\" id=\"btnRojo\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"letras\" *ngIf=\"!grados\">Densidad</ion-card-subtitle>\n            <ion-card-subtitle class=\"letras\" *ngIf=\"grados\">°F</ion-card-subtitle>\n            <ion-card-title class = \"color1\" *ngIf=\"!grados\">{{((dato.densidad * 1)+0).toFixed(1)}}</ion-card-title> \n            <ion-card-title *ngIf=\"grados\" class = \"color1\">{{((dato.densidad * 1.8)+32).toFixed(1)}}</ion-card-title> \n          </ion-card-header>            \n        </ion-card>\n        <ng-container *ngIf=\"dato['y'] >= this.tempMayor || dato['y'] <= this.tempMenor; else datosNormales\">\n        <div id=\"circuloRojo\" class=\"parpadea\"></div>\n        <div id=\"circuloAmarillo\"></div>\n        <div id=\"circuloVerde\"></div>  \n        </ng-container> \n        <ng-template #datosNormales>\n          <ng-container *ngIf=\"dato['y'] == this.naranja1 || dato['y'] == this.naranja2; else datosNormales3\">    \n            <div id=\"circuloRojo\"></div>\n            <div id=\"circuloAmarillo\" class=\"parpadea\"></div>\n            <div id=\"circuloVerde\"></div>\n          </ng-container>\n      </ng-template>\n      <ng-template #datosNormales3>\n        <div id=\"circuloRojo\"></div>\n        <div id=\"circuloAmarillo\"></div>\n        <div id=\"circuloVerde\" class=\"parpadea\"></div>\n      </ng-template>\n      </ion-col>\n  \n      <ion-col class=\"ion-text-center\" size=\"6\">\n        <ion-card class=\"fondoBlanco\" (click)=\"graficAcidez()\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"letras\">Acidez</ion-card-subtitle>\n            <ion-card-title class = \"color2\">{{((dato.acidez * 1)+0).toFixed(1)}}</ion-card-title>\n          </ion-card-header>         \n        </ion-card>\n        <ng-container *ngIf=\"dato['z'] >= this.phMayor || dato['z'] <= this.phMenor; else datosNormales1\">\n          <div id=\"circuloRojo\" class=\"parpadea\"></div>\n          <div id=\"circuloAmarillo\"></div>\n          <div id=\"circuloVerde\"></div>    \n        </ng-container>\n        <ng-template #datosNormales1>\n          <ng-container *ngIf=\"dato['z'] == this.naranja3 || dato['z'] == this.naranja4; else datosNormales4\">    \n            <div id=\"circuloRojo\"></div>\n            <div id=\"circuloAmarillo\" class=\"parpadea\"></div>\n            <div id=\"circuloVerde\"></div>\n          </ng-container>\n          </ng-template>\n          <ng-template #datosNormales4>\n            <div id=\"circuloRojo\"></div>\n            <div id=\"circuloAmarillo\"></div>\n            <div id=\"circuloVerde\" class=\"parpadea\"></div>\n          </ng-template>\n      </ion-col>\n  \n    </ion-row>\n  \n      <ion-row *ngFor = \"let dato of datoSensores\">\n\n      <ion-col class=\"ion-text-center\" size=\"6\">\n        <ion-card class=\"fondoBlanco\" (click)=\"graficaTemperatura()\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"letras\">Temperatura</ion-card-subtitle>\n            <ion-card-title class = \"color3\">{{((dato.temperatura * 1)+0).toFixed(1)}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col class=\"ion-text-center\" size=\"6\">\n        <ion-card class=\"fondoBlanco\" (click)=\"graficaVolumen()\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"letras\">Volumen</ion-card-subtitle>\n            <ion-card-title class=\"color4\">{{((dato.volumen * 1)+0).toFixed(1)}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-card class=\"no-scroll\" style=\"background-color: white; color: black; width: 100%; max-height: 50%; overflow-y: auto;\">\n    <!-- <ion-card-content class=\"card-content\"> -->\n    <ion-grid>\n      <table class=\"tablaExcel\" style=\"text-align: center; width: 100%; border-collapse: separate;border-spacing: 20px;\">\n        <caption style=\"font-weight: bold; font-size: 15px;\">{{\"TABLAEXCEL.TITULO\" | translate}}</caption>\n        <thead>\n          <tr>\n            <th style=\"color: #ff0505;\">{{\"TABLAEXCELVINO.FECHA\" | translate}}</th>\n            <th style=\"color: #0833a2\">{{\"TABLAEXCELVINO.DENSIDAD\" | translate}}</th>\n            <th style=\"color: #14faff;\">{{\"TABLAEXCELVINO.ACIDEZ\" | translate}}</th>\n            <th style=\"color: #edff14;\">{{\"TABLAEXCELVINO.TEMPERATURA\" | translate}}</th>\n            <th style=\"color: #ff14ff;\">{{\"TABLAEXCELVINO.VOLUMEN\" | translate}}</th>\n            <!-- <th style=\"color: #5B2C6F;\">MaxTemp</th>\n            <th style=\"color: #FF0087;\">MinTemp</th>\n            <th style=\"color: #D35400;\">MaxpH</th>\n            <th style=\"color: #F08080;\">MinpH</th> -->\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let excel of datosExcel\">\n            <td>{{excel['fecha'] | date:'yyyy-MM-dd HH:mm:ss'}}</td>\n            <td>{{excel['densidad']}}</td>\n            <td>{{excel['acidez']}}</td>\n            <td>{{excel['temperatura']}}</td>\n            <td>{{excel['volumen']}}</td>\n            <!-- <td>{{excel['tempMayor']}}</td>\n            <td>{{excel['tempMenor']}}</td>\n            <td>{{excel['phMayor']}}</td>\n            <td>{{excel['phMenor']}}</td> -->\n          </tr>\n        </tbody>\n      </table>\n    </ion-grid>\n  <!-- </ion-card-content> -->\n  </ion-card>\n  <ion-button id=\"boton\" expand=\"block\" class = \"registro\" (click)=\"generarExcel()\"> {{\"PANTGRAF.DESCARGARXLSX\" | translate}} </ion-button>\n\n</ion-content>");

/***/ }),

/***/ 8270:
/*!********************************************************!*\
  !*** ./src/app/vino/charts-vino/charts-vino.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\n.contenido {\n  --background: #ffffff;\n  --border-color: transparent;\n}\n\nion-item {\n  left: auto;\n}\n\n.letras {\n  --color: #000000;\n}\n\n.toggle {\n  --background: #000000;\n}\n\n.fondo {\n  --background: #ffffff;\n  --color: #ffffff;\n}\n\nion-content {\n  height: 70%;\n  width: 100%;\n  background-color: #ffffff;\n}\n\nion-card-title.color1 {\n  --color:\t#0833a2;\n  --text-align: \"center\";\n}\n\nion-card-title.color2 {\n  --color: #14faff;\n  --text-align: \"center\";\n}\n\nion-card-title.color3 {\n  --color: #edff14;\n  --text-align: \"center\";\n}\n\nion-card-title.color4 {\n  --color: #ff14ff;\n  --text-align: \"center\";\n}\n\nion-card-title.color5 {\n  --color: #1eff05;\n  --text-align: \"center\";\n}\n\nion-card-subtitle {\n  --color: #ffffff;\n}\n\n#grafica {\n  height: 70%;\n  --background: #ffffff;\n}\n\n#spinner {\n  color: #0833a2;\n  top: 30vh;\n  left: 50%;\n  transform: scale(1.5);\n}\n\n#container {\n  height: 100%;\n}\n\nion-card-title.color1 {\n  --color:\t#0833a2;\n  --text-align: \"center\";\n}\n\nion-card-title.color2 {\n  --color: #14faff;\n  --text-align: \"center\";\n}\n\nion-card-title.color3 {\n  --color: #edff14;\n  --text-align: \"center\";\n}\n\nion-card-title.color4 {\n  --color: #ff14ff;\n  --text-align: \"center\";\n}\n\nion-card-title.color5 {\n  --color: #1eff05;\n  --text-align: \"center\";\n}\n\nion-button {\n  --background: #94b8d7;\n}\n\nion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 20px;\n  height: 30px;\n}\n\n#boton {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#spinner {\n  color: #0833a2;\n  top: 30vh;\n  left: 50%;\n  transform: scale(1.5);\n}\n\n.fondoBlanco {\n  --background: #ffffff;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 480px) {\n  #grafica {\n    max-width: 100%;\n    max-height: 100%;\n  }\n\n  #spinner {\n    top: 25vh;\n    left: 50%;\n  }\n\n  .tablaExcel {\n    border-collapse: separate;\n    border-spacing: 15px;\n  }\n\n  #boton {\n    margin-top: 0%;\n    width: 70%;\n  }\n\n  #spinner {\n    top: 25vh;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy12aW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7RUFDRixxQkFBQTtBQUtGOztBQURBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFPSjs7QUFMQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFRSjs7QUFMQTtFQUNJLHFCQUFBO0FBUUo7O0FBTEE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUUo7O0FBSkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFPSjs7QUFKQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUFBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUFHTjs7RUFBRTtJQUNJLFNBQUE7SUFDQSxTQUFBO0VBR047O0VBQUU7SUFDSSx5QkFBQTtJQUNBLG9CQUFBO0VBR047O0VBQUU7SUFDSSxjQUFBO0lBQ0EsVUFBQTtFQUdOOztFQUFFO0lBQ0ksU0FBQTtJQUNBLFNBQUE7RUFHTjtBQUNGIiwiZmlsZSI6ImNoYXJ0cy12aW5vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS10ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM5NGI4ZDc7XHJcbn1cclxuXHJcbi5jb250ZW5pZG8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1ib3JkZXItY29sb3IgOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubGV0cmFzIHtcclxuICAgIC0tY29sb3IgOiAjMDAwMDAwO1xyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAgIC0tYmFja2dyb3VuZCA6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5mb25kbyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yIDogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlLmNvbG9yMXtcclxuICAgIC0tY29sb3IgOlx0IzA4MzNhMjsgXHJcbiAgICAtLXRleHQtYWxpZ24gOiAnY2VudGVyJztcclxufVxyXG5pb24tY2FyZC10aXRsZS5jb2xvcjJ7XHJcbiAgICAtLWNvbG9yIDogIzE0ZmFmZjsgXHJcbiAgICAtLXRleHQtYWxpZ24gOiAnY2VudGVyJztcclxufVxyXG5pb24tY2FyZC10aXRsZS5jb2xvcjN7XHJcbiAgICAtLWNvbG9yIDogI2VkZmYxNDsgXHJcbiAgICAtLXRleHQtYWxpZ24gOiAnY2VudGVyJztcclxufVxyXG5pb24tY2FyZC10aXRsZS5jb2xvcjR7XHJcbiAgICAtLWNvbG9yIDogI2ZmMTRmZjsgXHJcbiAgICAtLXRleHQtYWxpZ24gOiAnY2VudGVyJztcclxufVxyXG5pb24tY2FyZC10aXRsZS5jb2xvcjV7XHJcbiAgICAtLWNvbG9yIDogIzFlZmYwNTsgXHJcbiAgICAtLXRleHQtYWxpZ24gOiAnY2VudGVyJztcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgLS1jb2xvciA6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiNncmFmaWNhIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gIC0tYmFja2dyb3VuZCA6ICNmZmZmZmY7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbiNzcGlubmVyIHtcclxuICAgIGNvbG9yOiAjMDgzM2EyO1xyXG4gICAgdG9wOiAzMHZoO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUuY29sb3Ixe1xyXG4gICAgLS1jb2xvciA6XHQjMDgzM2EyOyBcclxuICAgIC0tdGV4dC1hbGlnbiA6ICdjZW50ZXInO1xyXG59XHJcbmlvbi1jYXJkLXRpdGxlLmNvbG9yMntcclxuICAgIC0tY29sb3IgOiAjMTRmYWZmOyBcclxuICAgIC0tdGV4dC1hbGlnbiA6ICdjZW50ZXInO1xyXG59XHJcbmlvbi1jYXJkLXRpdGxlLmNvbG9yM3tcclxuICAgIC0tY29sb3IgOiAjZWRmZjE0OyBcclxuICAgIC0tdGV4dC1hbGlnbiA6ICdjZW50ZXInO1xyXG59XHJcbmlvbi1jYXJkLXRpdGxlLmNvbG9yNHtcclxuICAgIC0tY29sb3IgOiAjZmYxNGZmOyBcclxuICAgIC0tdGV4dC1hbGlnbiA6ICdjZW50ZXInO1xyXG59XHJcbmlvbi1jYXJkLXRpdGxlLmNvbG9yNXtcclxuICAgIC0tY29sb3IgOiAjMWVmZjA1OyBcclxuICAgIC0tdGV4dC1hbGlnbiA6ICdjZW50ZXInO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOTRiOGQ3O1xyXG59XHJcblxyXG5pb24tYnV0dG9uW3NoYXBlPWNpcmNsZV0ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgLy8gLS1iYWNrZ3JvdW5kIDogI2ZmZmZmZjtcclxufVxyXG5cclxuI2JvdG9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuI3NwaW5uZXIge1xyXG4gICAgY29sb3I6ICMwODMzYTI7XHJcbiAgICB0b3A6IDMwdmg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbi5mb25kb0JsYW5jbyB7XHJcbiAgICAtLWJhY2tncm91bmQgOiAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICNncmFmaWNhIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjc3Bpbm5lciB7XHJcbiAgICAgICAgdG9wOiAyNXZoO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGFFeGNlbCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYm90b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3NwaW5uZXIge1xyXG4gICAgICAgIHRvcDogMjV2aDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_vino_charts-vino_charts-vino_module_ts.js.map