"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 3755);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2003);












function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule
        ],
        providers: [
            _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 3755);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 7897);
/* harmony import */ var _services_contrasena_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contrasena.service */ 1794);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/translate-config.service */ 6429);












let LoginPage = class LoginPage {
    constructor(servicio, alertCtrl, loadingCtrl, router, formBuilder, navCtrl, storage, contra, translate, translateConfigService) {
        this.servicio = servicio;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.contra = contra;
        this.translate = translate;
        this.translateConfigService = translateConfigService;
        this.registros = {
            contrasena: null,
            nombre_usuario: null,
            correo: null
        };
        this.langs = ['English, Español, Aleman'];
        this.language = this.translate.currentLang;
        this.submit = 'password';
        this.passwordIcon = 'eye-off';
        this.storage.create();
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        this.translate.use(localStorage.getItem('idioma'));
    }
    languageChanged() {
        this.translateConfigService.setLanguage(this.selectedLanguage);
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            nombre_usuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
            contrasena: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
        });
    }
    hideShowPassword() {
        this.submit = this.submit === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: this.translate.instant('MENSAJEINICIO'),
                spinner: 'dots',
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.servicio.login(this.loginForm.value).subscribe((tequilera) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                localStorage.setItem('tequilera', tequilera);
                loading.dismiss();
                this.router.navigateByUrl('/inicio');
                this.servicio.obtenerUsuarios(this.loginForm.value).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    let json = JSON.stringify(data);
                    let response = JSON.parse(json);
                    const alert = yield this.alertCtrl.create({
                        cssClass: 'alerta',
                        header: '¡' + this.translate.instant('BIENVENIDA') + this.translate.instant('ESPACIO') + response + '!',
                        buttons: [
                            {
                                cssClass: 'confirmacion',
                                text: 'Ok',
                            }
                        ],
                    });
                    yield alert.present();
                    loading.dismiss();
                }), (err) => {
                    console.log(err);
                });
            }), () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    message: this.translate.instant('FALLOINICIO'),
                    buttons: [
                        {
                            cssClass: 'confirmacion',
                            text: 'Ok',
                        }
                    ],
                });
                yield alert.present();
                loading.dismiss();
            }));
        });
    }
    restContra() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            const alert = yield this.alertCtrl.create({
                cssClass: 'alerta',
                header: this.translate.instant('ALERTAOLVIDOCONTRA.HEADERALERT'),
                inputs: [
                    {
                        placeholder: this.translate.instant('ALERTAOLVIDOCONTRA.PLACEHOLDER'),
                        type: 'email',
                        name: 'correo',
                        attributes: {
                            autocomplete: "nope"
                        },
                        cssClass: 'alertDanger'
                    },
                ],
                buttons: [
                    {
                        cssClass: 'confirmacion',
                        text: this.translate.instant('ALERTAOLVIDOCONTRA.BUTONENVIAR'),
                        handler: data => {
                            if (data.correo !== null && data.correo !== '' && data.correo.match(EMAIL_REGEX)) {
                                this.contra.restPassword(this.registros.correo = data).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                    this.confirmacion();
                                }), () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                    let alert = yield this.alertCtrl.create({
                                        cssClass: 'alerta',
                                        header: this.translate.instant('ALERTAENVIOCORREO.HEADER'),
                                        subHeader: this.translate.instant('ALERTAENVIOCORREO.SUBHEADER'),
                                        message: this.translate.instant('ALERTAENVIOCORREO.MESSAGE'),
                                        buttons: [
                                            {
                                                cssClass: 'confirmacion',
                                                text: 'Ok',
                                            }
                                        ],
                                    });
                                    alert.present();
                                }));
                            }
                            else {
                                this.validacion();
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    confirmacion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'alerta',
                header: this.translate.instant('ALERTAENVIOCORREO.HEADER1'),
                subHeader: this.translate.instant('ALERTAENVIOCORREO.SUBHEADER1'),
                buttons: [
                    {
                        cssClass: 'confirmacion',
                        text: 'Ok',
                    }
                ],
            });
            yield alert.present();
        });
    }
    validacion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.translate.instant('VALIDACIONCORREO.HEADER'),
                cssClass: 'alerta',
                subHeader: this.translate.instant('VALIDACIONCORREO.SUBHEADER'),
                buttons: [
                    {
                        cssClass: 'confirmacion',
                        text: 'Ok',
                    }
                ],
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _services_contrasena_service__WEBPACK_IMPORTED_MODULE_4__.ContrasenaService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _services_translate_config_service__WEBPACK_IMPORTED_MODULE_5__.TranslateConfigService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-login',
        template: _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 6429:
/*!******************************************************!*\
  !*** ./src/app/services/translate-config.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateConfigService": () => (/* binding */ TranslateConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 466);



let TranslateConfigService = class TranslateConfigService {
    constructor(translate) {
        this.translate = translate;
    }
    getDefaultLanguage() {
        let language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
        localStorage.setItem('idioma', language);
        return language;
    }
    setLanguage(setLang) {
        localStorage.setItem('idioma', setLang);
        this.translate.use(localStorage.getItem('idioma'));
    }
};
TranslateConfigService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService }
];
TranslateConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], TranslateConfigService);



/***/ }),

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"pantalla-dividida\">\r\n  <div id=\"izquierda\">\r\n    <img src='assets\\imagenes\\fondoadn.png' id=\"imagen\">\r\n    <div class=\"fondo2\">\r\n    </div>\r\n  </div>\r\n  <div id=\"derecha\">\r\n    <ion-content>\r\n      <ion-card class=\"transparente\">\r\n        <ion-card-content>\r\n          <form #form=\"ngForm\" [formGroup]=\"loginForm\" (submit)=\"onSubmit(form)\">\r\n            <div *ngIf=\"showError\">{{\"VALIDACION\" | translate}}</div>\r\n          <ion-item class = \"transparencia\">\r\n            <ion-input class=\"transparencia\" type=\"text\" placeholder = \"{{'USUARIO' | translate}}\" formControlName=\"nombre_usuario\" name = \"nombre_usuario\" required></ion-input>\r\n          </ion-item>\r\n          <ion-item class = \"transparencia\">\r\n              <ion-input class=\"transparencia\" placeholder = \"{{'CONTRASEÑA' | translate}}\" formControlName=\"contrasena\" [type]=\"submit\" name = \"contrasena\" required></ion-input>\r\n              <ion-icon [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\r\n          </ion-item>\r\n          <br>\r\n            <ion-button expand=\"block\" class = \"sesion\" [type]=\"submit\" [disabled]=\"!loginForm.valid\"> {{\"INICIARSESION\" | translate}} </ion-button>\r\n            <ion-button expand=\"block\" class = \"registro\" [routerLink]=\"['../registro']\"> {{\"REGISTRARSE\" | translate}} </ion-button>\r\n            <ion-item class=\"transparencia\">\r\n            <ion-label id=\"boton\" (click)=\"restContra()\"><p class=\"textoFont\">{{\"RECUPERARCONTRASENA\" | translate}}</p></ion-label>\r\n          </ion-item>\r\n                  <ion-item class=\"traductor\" lines=\"none\">\r\n                    <ion-icon name=\"language\"></ion-icon>\r\n                    <ion-select interface=\"popover\" [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged()\" [ngModelOptions]=\"{standalone: true}\">\r\n                      <ion-select-option value=\"en\">English</ion-select-option>\r\n                      <ion-select-option value=\"de\">Deutsch</ion-select-option>\r\n                      <ion-select-option value=\"es\">Español</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n          </form>\r\n          </ion-card-content> \r\n      </ion-card>\r\n      </ion-content> \r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "#pantalla-dividida {\n  display: flex;\n}\n\n#izquierda {\n  position: relative;\n  background-color: #000000;\n  width: 50%;\n  height: 100vh;\n}\n\n#derecha {\n  height: 100vh;\n  width: 50%;\n}\n\n.transparente {\n  background: rgba(255, 0, 0, 0);\n  margin-top: 5%;\n  box-shadow: none;\n  width: 70%;\n  left: 15%;\n}\n\nion-button.registro {\n  --text-align: center;\n  --background: #02253d;\n  text-transform: none;\n}\n\nion-button.sesion {\n  --text-align: center;\n  --background: #94b8d7;\n  text-transform: none;\n}\n\nion-item.transparencia-ion {\n  --border-color: transparent;\n  --background-color: transparent;\n  --color: white;\n}\n\nion-item.invisible {\n  --background: transparent;\n  font-size: 1em;\n  left: 62%;\n}\n\nion-content {\n  top: 25%;\n}\n\n.fondo2 {\n  position: absolute;\n  margin-top: 10%;\n  margin-left: 10%;\n  background-image: url(\"/dist/assets/imagenes/fondotinascel.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 40%;\n  width: 100%;\n}\n\n.transparencia {\n  --background: transparent;\n  --border-color: transparent;\n}\n\n#boton {\n  text-align: right;\n  text-transform: none;\n}\n\n.textoFont {\n  font-size: 0.8em;\n  color: white;\n}\n\n#imagen {\n  height: 45%;\n  width: 100%;\n}\n\n.traductor {\n  --background: transparent;\n  font-size: 0.8em;\n  width: 27%;\n  color: white;\n  bottom: 46px;\n}\n\n.select {\n  margin-bottom: 20%;\n}\n\nion-icon {\n  color: white;\n}\n\nion-alert:not(.select-alert) {\n  --background: #ffffff;\n  --ion-text-color: white;\n}\n\nion-alert:not(.select-alert) button {\n  color: white !important;\n  font-size: 20px !important;\n}\n\nion-alert:not(.select-alert) .alert-message {\n  color: #ddd;\n}\n\n#color {\n  color: white;\n}\n\n/*ion-content {\n  --background: url('/assets/imagenes/fondo.png') 0 0/100% 100% no-repeat;\n  --background-attachment: fixed !important;\n}  \n\n.logoIninbio{\n  position: absolute;\n  width:250px;\n  height:200px;\n  top: 650px;\n  left: 80px; \n}\n\n\n.ios.imagenADN {\n  position:absolute;\n  height:300px;\n  width:300px;\n  z-index: -1;\n}\n.ios.imagenIninbio {\n  position:absolute;\n  height:100px;\n  width:100px;\n  top: 358px;\n  left : 10px;\n  z-index: 1;\n}\n\n.md.imagenADN {\n  position:absolute;\n  height:669px;\n  width:600px;\n  top: 175px;\n  left : -104px;\n  z-index: -1;\n}\n.md.imagenIninbio {\n  position:absolute;\n  height:100px;\n  width:100px;\n  top: 280px;\n  left : 15px; \n  z-index: 1;\n}\n.input-group {\n  background: rgba(255, 255, 255, 0);\n    border-radius: 10px;\n    overflow: hidden;\n    margin-bottom: 15px;\n}\n\n.transparente {\n  background: rgba(255, 255, 255, 0);\n  top : 35px;\n  box-shadow: none;\n}\nion-button.registro{\n  --text-align: center;\n  --background: #02253d;\n}\nion-button.sesion{\n  --text-align: center;\n  --background: #94b8d7;\n}\n/*\nion-item.transparencia-ion {\n\t--border-color: rgba(0, 0, 0, 0);\n\t--background-color: rgba(0, 0, 0, 0);\n\t--color: white; \n}\n\nion-item.transparencia-ion {\n\t--background: transparent !important; \n}\nion-icon.password {\n  --right: 10px !important;\n}\n\nion-input{\n  font-size: large;\n}\n\n.derecha {\n  text-align: right;\n}\n\nion-item.invisible{\n  --background: transparent;\n  font-size: 1em;\n  left : 33px;\n}\n\nion-label{\n  color: #ffffff;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7QUFBRjs7QUFJQTtFQUVFLGtCQUFBO0VBS0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVVBO0VBRUEsYUFBQTtFQUNBLFVBQUE7QUFSQTs7QUFZQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFURjs7QUFZQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVRGOztBQVlBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBVEY7O0FBWUE7RUFDQywyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQVREOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQVRGOztBQVlBO0VBQ0UsUUFBQTtBQVRGOztBQVlBO0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVZGOztBQWNBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQVhGOztBQWNBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVhGOztBQWNBO0VBQ0Usa0JBQUE7QUFYRjs7QUFjQTtFQUNFLFlBQUE7QUFYRjs7QUFjQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFYRjs7QUFhRTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7QUFYTjs7QUFjRTtFQUNJLFdBQUE7QUFaTjs7QUFnQkE7RUFDRSxZQUFBO0FBYkY7O0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFudGFsbGEtZGl2aWRpZGF7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4jaXpxdWllcmRhe1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy9iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VuZXMvZm9uZG8ucG5nJyluby1yZXBlYXQ7XHJcbiAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIC8vYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyBcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG59XHJcblxyXG4jZGVyZWNoYXtcclxuIFxyXG5oZWlnaHQ6IDEwMHZoO1xyXG53aWR0aDogNTAlO1xyXG5cclxufVxyXG5cclxuLnRyYW5zcGFyZW50ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDApO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBsZWZ0OiAxNSU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ucmVnaXN0cm8ge1xyXG4gIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogIzAyMjUzZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5zZXNpb24ge1xyXG4gIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogIzk0YjhkNztcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuaW9uLWl0ZW0udHJhbnNwYXJlbmNpYS1pb24ge1xyXG5cdC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHQtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdC0tY29sb3I6IHdoaXRlOyBcclxufVxyXG5cclxuaW9uLWl0ZW0uaW52aXNpYmxle1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGVmdCA6IDYyJTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgdG9wOiAyNSU7XHJcbn1cclxuXHJcbi5mb25kbzJ7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9kaXN0L2Fzc2V0cy9pbWFnZW5lcy9mb25kb3RpbmFzY2VsLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gXHJcbn1cclxuXHJcbi50cmFuc3BhcmVuY2lhe1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI2JvdG9uIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnRleHRvRm9udHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2ltYWdlbiB7XHJcbiAgaGVpZ2h0OiA0NSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gXHJcblxyXG4udHJhZHVjdG9ye1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgd2lkdGg6IDI3JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm90dG9tOiA0NnB4O1xyXG59XHJcblxyXG4uc2VsZWN0e1xyXG4gIG1hcmdpbi1ib3R0b206IDIwJTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWFsZXJ0Om5vdCguc2VsZWN0LWFsZXJ0KSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC0taW9uLXRleHQtY29sb3I6IHdoaXRlO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQtbWVzc2FnZSB7XHJcbiAgICAgIGNvbG9yOiAjZGRkO1xyXG4gIH1cclxufVxyXG5cclxuI2NvbG9yIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlbmVzL2ZvbmRvLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIC0tYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCAhaW1wb3J0YW50O1xyXG59ICBcclxuXHJcbi5sb2dvSW5pbmJpb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6MjUwcHg7XHJcbiAgaGVpZ2h0OjIwMHB4O1xyXG4gIHRvcDogNjUwcHg7XHJcbiAgbGVmdDogODBweDsgXHJcbn1cclxuXHJcblxyXG4uaW9zLmltYWdlbkFETiB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjMwMHB4O1xyXG4gIHdpZHRoOjMwMHB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi5pb3MuaW1hZ2VuSW5pbmJpbyB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjEwMHB4O1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIHRvcDogMzU4cHg7XHJcbiAgbGVmdCA6IDEwcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1kLmltYWdlbkFETiB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjY2OXB4O1xyXG4gIHdpZHRoOjYwMHB4O1xyXG4gIHRvcDogMTc1cHg7XHJcbiAgbGVmdCA6IC0xMDRweDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4ubWQuaW1hZ2VuSW5pbmJpbyB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjEwMHB4O1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIHRvcDogMjgwcHg7XHJcbiAgbGVmdCA6IDE1cHg7IFxyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnRlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIHRvcCA6IDM1cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5pb24tYnV0dG9uLnJlZ2lzdHJve1xyXG4gIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogIzAyMjUzZDtcclxufVxyXG5pb24tYnV0dG9uLnNlc2lvbntcclxuICAtLXRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtLWJhY2tncm91bmQ6ICM5NGI4ZDc7XHJcbn1cclxuLypcclxuaW9uLWl0ZW0udHJhbnNwYXJlbmNpYS1pb24ge1xyXG5cdC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdC0tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuXHQtLWNvbG9yOiB3aGl0ZTsgXHJcbn1cclxuXHJcbmlvbi1pdGVtLnRyYW5zcGFyZW5jaWEtaW9uIHtcclxuXHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxyXG59XHJcbmlvbi1pY29uLnBhc3N3b3JkIHtcclxuICAtLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZGVyZWNoYSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtLmludmlzaWJsZXtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGxlZnQgOiAzM3B4O1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuKi9cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map