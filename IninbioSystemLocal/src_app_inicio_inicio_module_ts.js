"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inicio_inicio_module_ts"],{

/***/ 1942:
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 7114);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 2276:
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 1942);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 7114);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2003);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.IonicStorageModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 7114:
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./inicio.page.html */ 639);
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss */ 6502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 3755);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 7897);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/charts.service */ 5296);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 9832);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ 7498);
/* harmony import */ var _services_descarga_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/descarga-excel.service */ 3364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! crypto-js */ 3706);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_8__);
















let InicioPage = class InicioPage {
    constructor(menu, servicio, navCtrl, alertController, storage, router, service, transfer, file, serv, translate, platform) {
        this.menu = menu;
        this.servicio = servicio;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.router = router;
        this.service = service;
        this.transfer = transfer;
        this.file = file;
        this.serv = serv;
        this.translate = translate;
        this.platform = platform;
        this.slideOpts = {
            initialSlide: 0,
            autoplay: 300,
            slidesPerView: 5
        };
        this.primerArreglo = [1, 2, 3, 4, 5, 6, 7];
        this.segundoArreglo = [8, 9, 10, 11, 12, 13, 14];
        this.tercerArreglo = [15, 16, 17, 18, 19, 20, 21];
        this.items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
            { id: 5, name: 'Item 5' }
        ];
        this.fecha = [];
        this.brix = [];
        this.alcvol = [];
        this.eficiencia = [];
        this.ph = [];
        this.temperatura = [];
        this.volumen = [];
        this.fileTransfer = this.transfer.create();
        this.translate.use(localStorage.getItem('idioma'));
        this.user = localStorage.getItem('empresa');
        const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_8__.AES.decrypt(this.user, src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.SECRET_KEY);
        const datoDesencriptado = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_8__.enc.Utf8);
        if (datoDesencriptado === '1') {
            this.numberOfCards = 7;
        }
        else if (datoDesencriptado === '2') {
            this.numberOfCards = 3;
        }
        else if (datoDesencriptado === '3') {
            this.numberOfCards = 21;
            this.alma = 3;
        }
        else if (datoDesencriptado === '4') {
            this.numberOfCards = 60;
        }
        console.log(this.platform);
        this.isMobile = this.platform.is('mobile');
    }
    opcionCatalogo(opcion) {
        if (opcion == "mezcal") {
            this.mezcalPDF();
        }
        else if (opcion == "tequila") {
            this.tequilaPDF();
        }
        else if (opcion == "vino") {
            this.vinoPDF();
        }
    }
    ionViewWillEnter() {
        //this.contador = true;
        this.alertaTemperatura();
        this.alertapH();
        this.alertaBrix();
        //this.cerrarSesion();
        //this.cargarDatos();
        //this.comprobarBrix();
    }
    mezcalPDF() {
        let nombre = "Catálogo Mezcal";
        let descarga = document.createElement('a');
        descarga.href = 'http://3.138.161.216:80/Catalogos/Catalogo_Mezcal.pdf';
        descarga.target = '_blank';
        descarga.download = nombre;
        document.body.appendChild(descarga);
        descarga.click();
        document.body.removeChild(descarga);
    }
    tequilaPDF() {
        let nombre = "Catálogo Tequila";
        let descarga = document.createElement('a');
        descarga.href = 'http://3.138.161.216:80/Catalogos/Catalogo_Tequila.pdf';
        descarga.target = '_blank';
        descarga.download = nombre;
        document.body.appendChild(descarga);
        descarga.click();
        document.body.removeChild(descarga);
    }
    vinoPDF() {
        let nombre = "Catálogo Vino";
        let descarga = document.createElement('a');
        descarga.href = 'http://3.138.161.216:80/Catalogos/Catalogo_Vino.pdf';
        descarga.target = '_blank';
        descarga.download = nombre;
        document.body.appendChild(descarga);
        descarga.click();
        document.body.removeChild(descarga);
    }
    openMenu1() {
        this.menu.enable(true, 'second');
        this.menu.open();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.usuario = localStorage.getItem('empresa');
            this.datosXTina();
        });
    }
    showConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const confirm = yield this.alertController.create({
                cssClass: 'alerta',
                header: this.translate.instant('CERRARSESION.HEADER'),
                message: this.translate.instant('CERRARSESION.MENSAJE'),
                buttons: [
                    {
                        cssClass: 'confirmacion',
                        text: this.translate.instant('CERRARSESION.NO'),
                        handler: () => {
                            this.router.navigate(['inicio']);
                        }
                    },
                    {
                        cssClass: 'confirmacion',
                        text: this.translate.instant('CERRARSESION.SI'),
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            localStorage.removeItem('tequilera');
                            localStorage.removeItem('token');
                            localStorage.removeItem('idTina');
                            {
                                this.router.navigate(['login']);
                            }
                        })
                    }
                ]
            });
            confirm.present();
        });
    }
    comprobarBrix() {
        this.service.getSensores().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            const ultimo = response[response.length - 1];
            const penultimo = response[response.length - 2];
            if (ultimo['w'] === penultimo['w']) {
                let alert = yield this.alertController.create({
                    cssClass: 'alerta',
                    header: 'El °Brix Actual Es De: ' + penultimo['w'] + '° Y No A Cambiado Hace 2 Horas',
                    message: 'Se Recomienda Verificar Su Fermentación',
                    buttons: [
                        {
                            cssClass: 'confirmacion',
                            text: 'Ok',
                        }
                    ],
                });
                alert.present();
            }
        }), err => {
            console.log(err);
        });
    }
    cargarDatos() {
        this.service.getUltimoSensor().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            let dato;
            for (dato of response)
                if (dato['z'] >= 4.6 || dato['z'] <= 4.1) {
                    let alert = yield this.alertController.create({
                        cssClass: 'alerta',
                        header: 'El pH Actual Es: ' + dato['z'],
                        message: 'Se Recomienda Verificar Sus Valores',
                        buttons: [
                            {
                                cssClass: 'confirmacion',
                                text: 'Ok',
                            }
                        ],
                    });
                    alert.present();
                }
            if (dato['y'] >= 37 || dato['y'] <= 30) {
                let alert = yield this.alertController.create({
                    cssClass: 'alerta',
                    header: 'La Temperatura Actual Es: ' + dato['y'] + '°C',
                    message: 'Se Recomienda Verificar Su Fermentación',
                    buttons: [
                        {
                            cssClass: 'confirmacion',
                            text: 'Ok',
                        }
                    ],
                });
                alert.present();
            }
        }), err => {
            console.log(err);
        });
    }
    alertaTemperatura() {
        this.service.alertaTemperatura().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            if (response != null) {
                let alert = yield this.alertController.create({
                    cssClass: 'alerta',
                    header: this.translate.instant('ALERTASVALORES.HEADERTEMP1') +
                        this.translate.instant('ESPACIO') +
                        response +
                        this.translate.instant('ESPACIO') +
                        this.translate.instant('ALERTASVALORES.HEADERTEMP2'),
                    message: this.translate.instant('ALERTASVALORES.MENSAJETEMP'),
                    buttons: [
                        {
                            cssClass: 'confirmacion',
                            text: 'Ok',
                        }
                    ],
                });
                alert.present();
            }
        }));
    }
    alertapH() {
        this.service.alertaPH().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            if (response != null) {
                let alert = yield this.alertController.create({
                    cssClass: 'alerta',
                    header: this.translate.instant('ALERTASVALORES.HEADERPH1') +
                        this.translate.instant('ESPACIO')
                        + response
                        + this.translate.instant('ESPACIO')
                        + this.translate.instant('ALERTASVALORES.HEADERPH2'),
                    message: this.translate.instant('ALERTASVALORES.MENSAJEPH'),
                    buttons: [
                        {
                            cssClass: 'confirmacion',
                            text: 'Ok',
                        }
                    ],
                });
                alert.present();
            }
        }));
    }
    alertaBrix() {
        this.service.alertaBrix().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            if (response != null) {
                let alert = yield this.alertController.create({
                    cssClass: 'alerta',
                    header: this.translate.instant('ALERTASVALORES.HEADERBRIX1')
                        + this.translate.instant('ESPACIO')
                        + response
                        + this.translate.instant('ESPACIO')
                        + this.translate.instant('ALERTASVALORES.HEADERBRIX2'),
                    message: this.translate.instant('ALERTASVALORES.MENSAJEBRIX'),
                    buttons: [
                        {
                            cssClass: 'confirmacion',
                            text: 'Ok',
                        }
                    ],
                });
                alert.present();
            }
        }));
    }
    idTina(i) {
        localStorage.setItem('idTina', i);
    }
    datosXTina() {
        this.service.datosGenerales().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            // var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
            response.forEach((iterador) => {
                this.fecha.push(iterador[0].fecha);
                this.brix.push(iterador[0].brix);
                this.alcvol.push(iterador[0].alcvol);
                this.eficiencia.push(iterador[0].eficiencia);
                this.temperatura.push(iterador[0].temperatura);
                this.ph.push(iterador[0].pH);
                this.volumen.push(iterador[0].volumen);
                // console.log(iterador[0]["fecha"]);
            });
            console.log(this.fecha);
            // console.log(response);
        }));
    }
};
InicioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _services_charts_service__WEBPACK_IMPORTED_MODULE_3__.ChartsService },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__.FileTransfer },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _services_descarga_excel_service__WEBPACK_IMPORTED_MODULE_6__.DescargaExcelService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform }
];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-inicio',
        template: _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioPage);



/***/ }),

/***/ 639:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inicio/inicio.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fondo\">\r\n  <ion-toolbar class=\"fondo\">\r\n  <ion-buttons>\r\n  <ion-button class=\"fondo\" (click)=\"openMenu1()\" fill=\"outline\">\r\n    <ion-icon name=\"menu-sharp\" slot=\"icon-only\" style=\"color: black;\"></ion-icon>\r\n  </ion-button>\r\n</ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-menu side=\"start\" menuId=\"second\" contentId=\"main1\" class=\"menu\">\r\n  <ion-header>\r\n    <ion-toolbar class=\"color\">\r\n      <ion-title>{{\"OPCIONESMENU.OPCIONES\" | translate}}</ion-title>\r\n    </ion-toolbar> \r\n  </ion-header>\r\n  <ion-content class=\"menu\">\r\n    <ion-list>\r\n      <ion-item><ion-icon src=\"assets/imagenes/agave.svg\" slot=\"start\"></ion-icon> {{\"OPCIONESMENU.FERJUAGAVE\" | translate}} </ion-item>\r\n      <ion-item button (click)=\"showConfirm()\"><ion-icon src=\"assets/imagenes/cerrar-sesion.svg\" slot=\"start\"></ion-icon> {{\"OPCIONESMENU.CERRARSESION\" | translate}} </ion-item>\r\n    </ion-list>\r\n  </ion-content>  \r\n  <ion-item class=\"color\">\r\n    <ion-icon src=\"assets/imagenes/catalogo.svg\" slot=\"start\"></ion-icon>\r\n    <ion-label class=\"letraBlanca\">{{\"OPCIONESMENU.CATALOGO\" | translate}}</ion-label> \r\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"opcion\" (ionChange)=\"opcionCatalogo(opcion)\">\r\n        <ion-select-option value=\"mezcal\">{{\"PDFCATALOGO.MEZCAL\" | translate}}</ion-select-option>\r\n        <ion-select-option value=\"tequila\">{{\"PDFCATALOGO.TEQUILA\" | translate}}</ion-select-option>\r\n        <ion-select-option value=\"vino\">{{\"PDFCATALOGO.VINO\" | translate}}</ion-select-option>\r\n      </ion-select>\r\n  </ion-item>\r\n</ion-menu>\r\n<ion-router-outlet id=\"main1\"></ion-router-outlet>\r\n<ng-container *ngIf=\"alma != 3; else templateAlma\">\r\n  <ion-grid>\r\n    <ion-row style=\"display: flex; justify-content: center;\">\r\n      <ion-col [size]=\"isMobile ? '6' : ''\" class=\"padding\" style=\"color: black; text-align: center;\"\r\n        *ngFor=\"let card of [].constructor(numberOfCards); let i = index;\">\r\n        {{i+1}}\r\n        <ion-card [routerLink]=\"['/charts']\" (click)=\"idTina(i+1)\">\r\n          <img src=\"assets\\imagenes\\p3.png\" alt=\"ion\" class=\"tina\">\r\n          <ion-list lines=\"none\" style=\"background-color: #CECECE;\">\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{fecha[i]}}</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{volumen[i]}} L</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{temperatura[i]}}°C</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{ph[i]}} pH</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{brix[i]}} °Brix</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{alcvol[i]}}% Alc.Vol</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{eficiencia[i]}}% Efic</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ng-container>\r\n<ng-template #templateAlma>\r\n  <ion-grid>\r\n    <ion-row style=\"display: flex; justify-content: center;\">\r\n      <ion-col class=\"padding columnas columnaTop\" [size]=\"isMobile ? '6' : ''\" *ngFor=\"let card of [].constructor(numberOfCards).slice(0, 7); let j = index;\">{{j+1}}\r\n        <ion-card [routerLink]=\"['/charts']\" (click)=\"idTina(j+1)\">\r\n          <img src=\"assets\\imagenes\\p3.png\" alt=\"ion\" class=\"tina\">\r\n          <ion-list lines=\"none\" style=\"background-color: #CECECE;\">\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{fecha[j]}}</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{volumen[j]}} L</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{temperatura[j]}}°C</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{ph[j]}} pH</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{brix[j]}} °Brix</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{alcvol[j]}}% Alc.Vol</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{eficiencia[j]}}% Efic</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"display: flex; justify-content: center;\">\r\n      <ion-col class=\"padding columnas\" [size]=\"isMobile ? '6' : ''\" *ngFor=\"let card of [].constructor(numberOfCards).slice(7, 14); let j = index;\">{{j+1 + 7}}\r\n        <ion-card [routerLink]=\"['/charts']\" (click)=\"idTina(j+1 + 7)\">\r\n          <img src=\"assets\\imagenes\\p3.png\" alt=\"ion\" class=\"tina\">\r\n          <ion-list lines=\"none\">\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{fecha[j+7]}}</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{volumen[j+7]}} L</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{temperatura[j+7]}}°C</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{ph[j+7]}} pH</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{brix[j+7]}} °Brix</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{alcvol[j+7]}}% Alc.Vol</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{eficiencia[j+7]}}% Efic</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"display: flex; justify-content: center;\">\r\n      <ion-col class=\"padding columnas\" [size]=\"isMobile ? '6' : ''\" *ngFor=\"let card of [].constructor(numberOfCards).slice(14, 21); let j = index;\">{{j+1 + 14}}\r\n        <ion-card [routerLink]=\"['/charts']\" (click)=\"idTina(j+1 + 14)\">\r\n          <img src=\"assets\\imagenes\\p3.png\" alt=\"ion\" class=\"tina\">\r\n          <ion-list lines=\"none\">\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{fecha[j+14]}}</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{volumen[j+14]}} L</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{temperatura[j+14]}}°C</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{ph[j+14]}} pH</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{brix[j+14]}} °Brix</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{alcvol[j+14]}}% Alc.Vol</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item class=\"espacioItems\">\r\n                  <ion-label>{{eficiencia[j+14]}}% Efic</ion-label>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ng-template>\r\n<!-- <img src=\"assets\\imagenes\\logo_sistema.png\" alt=\"ion\" class=\"logoIninbio\"> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ 6502:
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  display: flex;\n  flex-direction: column !important;\n  margin: 0 !important;\n  background-color: #CECECE;\n  box-shadow: none;\n}\n\n#tina {\n  width: 20%;\n  height: 17%;\n  left: 7.5%;\n  text-align: center;\n  --ion-item-background:#CECECE;\n}\n\nion-label.numeros {\n  color: #000000 !important;\n  font-weight: bold;\n}\n\nion-label {\n  color: #000000 !important;\n  font-size: small !important;\n  white-space: normal !important;\n  overflow: visible !important;\n  text-overflow: clip !important;\n  max-width: 100% !important;\n}\n\n.logoIninbio {\n  position: absolute;\n  width: 15%;\n  height: 15%;\n  top: 79%;\n  left: 42%;\n}\n\nion-content {\n  background-color: #CECECE;\n}\n\nion-content.background {\n  --background-color: #000000 !important;\n}\n\n.button-transparent {\n  --background: transparentize(100);\n  --background-hover: #FFFFFF;\n}\n\nion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-content.fondo {\n  --ion-background-color: #CECECE;\n}\n\nion-button.fondo {\n  --background: #CECECE;\n  --border-color: none;\n  --border-width: 0px !important;\n  --color: #000000;\n}\n\nion-toolbar {\n  --background:#CECECE;\n  --border-width:0px !important;\n}\n\nion-content.menu {\n  --ion-background-color: #1f1f1f;\n}\n\nion-menu.menu {\n  --background: #1f1f1f;\n}\n\nion-label {\n  color: default !important;\n}\n\nion-icon {\n  color: white;\n}\n\n.color {\n  --background: #1f1f1f;\n}\n\n.tina {\n  width: 30%;\n}\n\n.columnas {\n  color: black;\n  text-align: center;\n  margin-bottom: 2%;\n}\n\n.espacioItems {\n  margin-top: -8%;\n  text-align: center;\n  --ion-item-background:#CECECE;\n}\n\n.letraBlanca {\n  color: white !important;\n}\n\n@media screen and (max-width: 480px) {\n  .tina {\n    width: 100%;\n  }\n\n  .columnas {\n    margin-bottom: 10%;\n  }\n\n  .columnaTop {\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFHQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFESjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtBQURKOztBQUlFO0VBQ0Usc0NBQUE7QUFESjs7QUFJRTtFQUNFLGlDQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJRTtFQUNFLCtCQUFBO0FBREo7O0FBSUU7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQURKOztBQUlFO0VBQ0UsK0JBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtBQURKOztBQUlHO0VBQ0MsWUFBQTtBQURKOztBQUlHO0VBQ0MscUJBQUE7QUFESjs7QUFJRztFQUNDLFVBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQURKOztBQUlFO0VBQ0UsdUJBQUE7QUFESjs7QUFRRztFQUNDO0lBQ0UsV0FBQTtFQUxKOztFQVFFO0lBQ0Usa0JBQUE7RUFMSjs7RUFRRTtJQUNFLGVBQUE7RUFMSjtBQUNGIiwiZmlsZSI6ImluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0VDRUNFOyBcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAjdGluYXtcclxuICAgIHdpZHRoOiAyMCU7IFxyXG4gICAgaGVpZ2h0OiAxNyU7IFxyXG4gICAgbGVmdDogNy41JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojQ0VDRUNFO1xyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsLm51bWVyb3N7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4ubG9nb0luaW5iaW97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxNSU7XHJcbiAgICBoZWlnaHQ6MTUlO1xyXG4gICAgdG9wOiA3OSU7XHJcbiAgICBsZWZ0OiA0MiU7IFxyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0VDRUNFOyBcclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50LmJhY2tncm91bmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yIDogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIH0gIFxyXG5cclxuICAuYnV0dG9uLXRyYW5zcGFyZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMTAwKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI0ZGRkZGRjtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOTRiOGQ3O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnQuZm9uZG8geyBcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNDRUNFQ0U7IFxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbi5mb25kbyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNDRUNFQ0U7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogbm9uZTsgXHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yIDogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDojQ0VDRUNFO1xyXG4gICAgLS1ib3JkZXItd2lkdGggOjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudC5tZW51IHsgXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWVudXtcclxuICAgIC0tYmFja2dyb3VuZCA6ICMxZjFmMWY7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xyXG4gICB9XHJcblxyXG4gICBpb24taWNvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgfVxyXG5cclxuICAgLmNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmOztcclxuICAgfVxyXG5cclxuICAgLnRpbmEge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcblxyXG4gIC5jb2x1bW5hcyB7XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxuXHJcbiAgLmVzcGFjaW9JdGVtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I0NFQ0VDRTtcclxuICB9XHJcblxyXG4gIC5sZXRyYUJsYW5jYSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8vIC5mb25kb0dyaXMge1xyXG4gIC8vICAgLS1pb24tbGlzdC1iYWNrZ3JvdW5kOiAjQ0VDRUNFO1xyXG4gIC8vIH1cclxuXHJcbiAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAudGluYSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sdW1uYXMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbmFUb3Age1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbiAgIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_inicio_inicio_module_ts.js.map