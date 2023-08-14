"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_rest-contrasena_rest-contrasena_module_ts"],{

/***/ 2328:
/*!**************************************!*\
  !*** ./src/app/models/contrasena.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contrasena": () => (/* binding */ Contrasena)
/* harmony export */ });
class Contrasena {
    constructor(nombre_usuario, contrasena, correo) {
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.correo = correo;
    }
}


/***/ }),

/***/ 1472:
/*!*******************************************************************!*\
  !*** ./src/app/rest-contrasena/rest-contrasena-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestContrasenaPageRoutingModule": () => (/* binding */ RestContrasenaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _rest_contrasena_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest-contrasena.page */ 3258);




const routes = [
    {
        path: '',
        component: _rest_contrasena_page__WEBPACK_IMPORTED_MODULE_0__.RestContrasenaPage
    }
];
let RestContrasenaPageRoutingModule = class RestContrasenaPageRoutingModule {
};
RestContrasenaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RestContrasenaPageRoutingModule);



/***/ }),

/***/ 3664:
/*!***********************************************************!*\
  !*** ./src/app/rest-contrasena/rest-contrasena.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestContrasenaPageModule": () => (/* binding */ RestContrasenaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _rest_contrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest-contrasena-routing.module */ 1472);
/* harmony import */ var _rest_contrasena_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest-contrasena.page */ 3258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);









let RestContrasenaPageModule = class RestContrasenaPageModule {
};
RestContrasenaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rest_contrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__.RestContrasenaPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_rest_contrasena_page__WEBPACK_IMPORTED_MODULE_1__.RestContrasenaPage]
    })
], RestContrasenaPageModule);



/***/ }),

/***/ 3258:
/*!*********************************************************!*\
  !*** ./src/app/rest-contrasena/rest-contrasena.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestContrasenaPage": () => (/* binding */ RestContrasenaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rest_contrasena_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rest-contrasena.page.html */ 3638);
/* harmony import */ var _rest_contrasena_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest-contrasena.page.scss */ 5100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_contrasena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contrasena.service */ 1794);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _models_contrasena__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/contrasena */ 2328);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);









let RestContrasenaPage = class RestContrasenaPage {
    constructor(usuarioService, router, formBuilder, alertController) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.isSubmitted = false;
        this.registros = {
            contrasena: null,
            nombre_usuario: null
        };
        this.submit = 'password';
        this.passwordIcon = 'eye-off';
        this.contrasena = new _models_contrasena__WEBPACK_IMPORTED_MODULE_3__.Contrasena("", "");
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            contrasena: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
            nombre_usuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]]
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
        this.registros = {
            contrasena: this.ionicForm.value['contrasena'],
            nombre_usuario: this.ionicForm.value['nombre_usuario']
        };
        this.isSubmitted = true;
        this.usuarioService.restContra(this.registros).subscribe((datos) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                cssClass: 'alerta',
                header: 'Confirmación',
                message: 'Su Contraseña Fué Restablecida Correctamente',
                buttons: [
                    {
                        cssClass: 'confirmacion',
                        text: 'Ok',
                    }
                ],
            });
            alert.present();
            this.router.navigate(['/login']);
        }), () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                cssClass: 'alerta',
                header: 'Error',
                message: 'El Usuario Es Incorrecto',
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
};
RestContrasenaPage.ctorParameters = () => [
    { type: _services_contrasena_service__WEBPACK_IMPORTED_MODULE_2__.ContrasenaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
RestContrasenaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-rest-contrasena',
        template: _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rest_contrasena_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rest_contrasena_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RestContrasenaPage);



/***/ }),

/***/ 3638:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rest-contrasena/rest-contrasena.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>    \n    <ion-title>Formulario</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <br>\n  <br>\n  <ion-icon name=\"lock-open-sharp\" id=\"icono\"></ion-icon>\n  <br>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title> Ingrese sus datos </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n  <form [formGroup]=\"ionicForm\" (ngSubmit) = \"onSubmit()\" novalidate>\n  \n    <ion-item lines=\"full\">\n      <ion-input placeholder = \"Nombre De Usuario\" type=\"text\" name = \"nombre_usuario\" formControlName=\"nombre_usuario\" required></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"full\"> \n      <ion-input placeholder = \"Nueva Contraseña\" [type]=\"submit\" name = \"contrasena\" formControlName=\"contrasena\" required></ion-input>\n      <ion-icon [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n    </ion-item>\n\n    <br>\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" class = \"registro\" expand=\"block\" [disabled]=\"!ionicForm.valid\">Restablecer Contraseña</ion-button>\n      </ion-col>\n    </ion-row> \n  </form>\n</ion-card-content>\n</ion-card> \n</ion-content>");

/***/ }),

/***/ 5100:
/*!***********************************************************!*\
  !*** ./src/app/rest-contrasena/rest-contrasena.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  text-align: center !important;\n}\n\nion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-button.registro {\n  --text-align: center;\n  --background: #02253d;\n}\n\n.transparente {\n  background: rgba(255, 255, 255, 0);\n  top: 35px;\n  box-shadow: none;\n}\n\nion-card {\n  width: 40%;\n  left: 28%;\n}\n\n#icono {\n  width: 98%;\n  height: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3QtY29udHJhc2VuYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQU9FO0VBQ0Usa0NBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBSko7O0FBT0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUpKIiwiZmlsZSI6InJlc3QtY29udHJhc2VuYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC10aXRsZSB7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOTRiOGQ3O1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbi5yZWdpc3Ryb3tcclxuICAgIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDIyNTNkO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZW5lcy9mb25kby5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIC8vLS1iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgfSAgXHJcblxyXG4gIC50cmFuc3BhcmVudGUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIHRvcCA6IDM1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6NDAlO1xyXG4gICAgbGVmdDoyOCU7XHJcbiAgfVxyXG5cclxuICAjaWNvbm8ge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_rest-contrasena_rest-contrasena_module_ts.js.map