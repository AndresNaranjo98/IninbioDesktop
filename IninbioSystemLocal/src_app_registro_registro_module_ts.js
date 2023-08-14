"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 6651:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 1142);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 8163:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 6651);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 1142);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2003);











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 1142:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./registro.page.html */ 1913);
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss */ 3329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_registros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/registros.service */ 1004);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);









let RegistroPage = class RegistroPage {
    constructor(usuarioService, router, formBuilder, alertController, translate) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.translate = translate;
        this.isSubmitted = false;
        this.registros = {
            nombre: null,
            apellidos: null,
            correo: null,
            contrasena: null,
            nombre_usuario: null,
            id_tequilera: null
        };
        this.tequileras = ['Ininbio System', 'La Joya', 'Alma de Mexico'];
        this.submit = 'password';
        this.passwordIcon = 'eye-off';
        this.translate.use(localStorage.getItem('idioma'));
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
            apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
            contrasena: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            nombre_usuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
            id_tequilera: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]]
        });
    }
    hideShowPassword() {
        this.submit = this.submit === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var nombreTequileraSP = this.ionicForm.value['id_tequilera'];
            const removeAccents = (str) => {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            };
            var nombreTequileraP = removeAccents(nombreTequileraSP);
            if (nombreTequileraP.toLowerCase() == this.tequileras[3].toLowerCase()) {
                this.registros = {
                    nombre: this.ionicForm.value['nombre'],
                    apellidos: this.ionicForm.value['apellidos'],
                    correo: this.ionicForm.value['correo'],
                    contrasena: this.ionicForm.value['contrasena'],
                    nombre_usuario: this.ionicForm.value['nombre_usuario'],
                    id_tequilera: '1'
                };
                this.isSubmitted = true;
                this.usuarioService.addUsuario(this.registros).subscribe((datos) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    let alert = yield this.alertController.create({
                        cssClass: 'alerta',
                        header: this.translate.instant('ALERTAREGISTRO.HEADER'),
                        message: this.translate.instant('ALERTAREGISTRO.MESSAGE'),
                        buttons: [
                            {
                                cssClass: 'confirmacion',
                                text: 'Ok',
                            }
                        ],
                    });
                    alert.present();
                    this.router.navigate(['/login']);
                }), () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    let alert = yield this.alertController.create({
                        cssClass: 'alerta',
                        header: this.translate.instant('ALERTAREGISTRO.HEADER1'),
                        message: this.translate.instant('ALERTAREGISTRO.MESSAGE1'),
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
            else if (nombreTequileraP.toLowerCase() == this.tequileras[1].toLowerCase()) {
                this.registros = {
                    nombre: this.ionicForm.value['nombre'],
                    apellidos: this.ionicForm.value['apellidos'],
                    correo: this.ionicForm.value['correo'],
                    contrasena: this.ionicForm.value['contrasena'],
                    nombre_usuario: this.ionicForm.value['nombre_usuario'],
                    id_tequilera: '2'
                };
                this.isSubmitted = true;
                this.usuarioService.addUsuario(this.registros).subscribe((datos) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    let alert = yield this.alertController.create({
                        cssClass: 'alerta',
                        header: this.translate.instant('ALERTAREGISTRO.HEADER'),
                        message: this.translate.instant('ALERTAREGISTRO.MESSAGE'),
                        buttons: [
                            {
                                cssClass: 'confirmacion',
                                text: 'Ok',
                            }
                        ],
                    });
                    alert.present();
                    this.router.navigate(['/login']);
                }), () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    let alert = yield this.alertController.create({
                        cssClass: 'alerta',
                        header: this.translate.instant('ALERTAREGISTRO.HEADER1'),
                        message: this.translate.instant('ALERTAREGISTRO.MESSAGE1'),
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
                let alert = yield this.alertController.create({
                    cssClass: 'alerta',
                    header: this.translate.instant('ALERTATEQUILERA.HEADER'),
                    message: this.translate.instant('ALERTATEQUILERA.MESSAGE'),
                    buttons: [
                        {
                            cssClass: 'confirmacion',
                            text: 'Ok',
                        }
                    ],
                });
                alert.present();
                console.log('ERROR');
            }
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _services_registros_service__WEBPACK_IMPORTED_MODULE_2__.RegistrosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-registro',
        template: _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registro_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroPage);



/***/ }),

/***/ 1004:
/*!***********************************************!*\
  !*** ./src/app/services/registros.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrosService": () => (/* binding */ RegistrosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let RegistrosService = class RegistrosService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUsuarios;
    }
    addUsuario(registros) {
        return this.http.post(`${this.baseUrl}/principal.php`, registros);
    }
    getUsuarios() {
        return this.http.get(`${this.baseUrl}/getAll.php`);
    }
};
RegistrosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RegistrosService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RegistrosService);



/***/ }),

/***/ 1913:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/registro/registro.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot = \"start\">\r\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n    </ion-buttons>    \r\n    <ion-title>{{\"FORMULARIOREGISTRO.FORMULARIO\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <br>\r\n  <ion-icon name=\"person-circle-outline\" id=\"icono\"></ion-icon>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title> {{\"FORMULARIOREGISTRO.INGRESEDATOS\" | translate}} </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n  <form [formGroup]=\"ionicForm\" (ngSubmit) = \"onSubmit()\" novalidate>\r\n    <ion-item lines=\"full\">\r\n      <ion-input class=\"letras\" placeholder = \"{{'FORMULARIOREGISTRO.NOMBRE' | translate}}\" type=\"text\" name = \"nombre\" formControlName=\"nombre\" required></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"ionicForm.controls.nombre.errors?.minlength && (ionicForm.touched || ionicForm.dirty)\">{{\"VALIDACIONCAMPOSREGISTRO.TEXTOS\" | translate}}</ion-label>\r\n    \r\n    <ion-item lines=\"full\">\r\n      <ion-input class=\"letras\" placeholder = \"{{'FORMULARIOREGISTRO.APELLIDOS' | translate}}\" type=\"text\" name = \"apellidos\" formControlName=\"apellidos\" required></ion-input>\r\n    </ion-item> \r\n    <ion-label color=\"danger\" *ngIf=\"ionicForm.controls.apellidos.errors?.minlength && (ionicForm.touched || ionicForm.dirty)\">{{\"VALIDACIONCAMPOSREGISTRO.TEXTOS\" | translate}}</ion-label>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-input class=\"letras\" placeholder = \"{{'FORMULARIOREGISTRO.CORREO' | translate}}\" type=\"email\" name = \"correo\" formControlName=\"correo\" required></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"ionicForm.controls.correo.errors?.pattern && (ionicForm.touched || ionicForm.dirty)\">{{\"VALIDACIONCAMPOSREGISTRO.CORREO\" | translate}}</ion-label>\r\n\r\n    <ion-item lines=\"full\"> \r\n      <ion-input class=\"letras\" placeholder = \"{{'FORMULARIOREGISTRO.CONTRASEÑA' | translate}}\" [type]=\"submit\" name = \"contrasena\" formControlName=\"contrasena\" required></ion-input>\r\n      <ion-icon [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"ionicForm.controls.contrasena.errors?.minlength && (ionicForm.touched || ionicForm.dirty)\">{{\"VALIDACIONCAMPOSREGISTRO.CONTRASEÑA\" | translate}}</ion-label>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-input class=\"letras\" placeholder = \"{{'FORMULARIOREGISTRO.USUARIO' | translate}}\" type=\"text\" name = \"nombre_usuario\" formControlName=\"nombre_usuario\" required></ion-input>\r\n    </ion-item> \r\n    <ion-label color=\"danger\" *ngIf=\"ionicForm.controls.nombre_usuario.errors?.minlength && (ionicForm.touched || ionicForm.dirty)\">{{\"VALIDACIONCAMPOSREGISTRO.TEXTOS\" | translate}}</ion-label>\r\n    \r\n    <ion-item lines=\"full\">\r\n      <ion-input class=\"letras\" placeholder = \"{{'FORMULARIOREGISTRO.TEQUILERA' | translate}}\" type=\"text\" name = \"id_tequilera\" formControlName=\"id_tequilera\" required></ion-input>\r\n    </ion-item> \r\n    <ion-label color=\"danger\" *ngIf=\"ionicForm.controls.id_tequilera.errors?.minlength && (ionicForm.touched || ionicForm.dirty)\">{{\"VALIDACIONCAMPOSREGISTRO.TEXTOS\" | translate}}</ion-label> \r\n\r\n    <br>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" class = \"registro\" expand=\"block\" [disabled]=\"!ionicForm.valid\">{{\"FORMULARIOREGISTRO.REGISTRARSE\" | translate}}</ion-button>\r\n      </ion-col>\r\n    </ion-row> \r\n  </form>\r\n</ion-card-content>\r\n</ion-card> \r\n</ion-content>");

/***/ }),

/***/ 3329:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  text-align: center !important;\n  --color: #ffffff;\n}\n\nion-card {\n  width: 40%;\n  left: 28%;\n}\n\nion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-button.registro {\n  --text-align: center;\n  --background: #02253d;\n}\n\n.transparente {\n  background: rgba(255, 255, 255, 0);\n  top: 35px;\n  box-shadow: none;\n}\n\n#icono {\n  width: 98%;\n  height: 25%;\n  color: white;\n}\n\n.letras {\n  color: white;\n}\n\nion-title {\n  color: white;\n}\n\nion-back-button {\n  --color: #ffffff ;\n}\n\n@media screen and (max-width: 480px) {\n  #icono {\n    width: 100%;\n    height: 15%;\n    color: white;\n  }\n\n  .tarjeta {\n    width: 90%;\n    left: 2%;\n  }\n\n  ion-card {\n    width: 85%;\n    left: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBRUU7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFBSjs7RUFHRTtJQUNFLFVBQUE7SUFDQSxRQUFBO0VBQUo7O0VBR0U7SUFDRSxVQUFBO0lBQ0EsUUFBQTtFQUFKO0FBQ0YiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGUgeyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyBcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICB3aWR0aDo0MCU7XHJcbiAgbGVmdDoyOCU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS10ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM5NGI4ZDc7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uLnJlZ2lzdHJve1xyXG4gICAgLS10ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjI1M2Q7XHJcbiAgfVxyXG5cclxuICAudHJhbnNwYXJlbnRlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICB0b3AgOiAzNXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gICNpY29ubyB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubGV0cmFzIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IFxyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgLS1jb2xvciA6ICNmZmZmZmZcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgI2ljb25vIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhcmpldGEge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBsZWZ0OiAyJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICB3aWR0aCA6IDg1JTtcclxuICAgICAgbGVmdCA6IDUlO1xyXG4gICAgfVxyXG5cclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map