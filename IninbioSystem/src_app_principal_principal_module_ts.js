"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_principal_principal_module_ts"],{

/***/ 5558:
/*!*******************************************************!*\
  !*** ./src/app/principal/principal-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPageRoutingModule": () => (/* binding */ PrincipalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal.page */ 2017);




const routes = [
    {
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_0__.PrincipalPage
    }
];
let PrincipalPageRoutingModule = class PrincipalPageRoutingModule {
};
PrincipalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrincipalPageRoutingModule);



/***/ }),

/***/ 9774:
/*!***********************************************!*\
  !*** ./src/app/principal/principal.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPageModule": () => (/* binding */ PrincipalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal-routing.module */ 5558);
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal.page */ 2017);







let PrincipalPageModule = class PrincipalPageModule {
};
PrincipalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrincipalPageRoutingModule
        ],
        declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_1__.PrincipalPage]
    })
], PrincipalPageModule);



/***/ }),

/***/ 2017:
/*!*********************************************!*\
  !*** ./src/app/principal/principal.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPage": () => (/* binding */ PrincipalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_principal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./principal.page.html */ 4529);
/* harmony import */ var _principal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal.page.scss */ 9012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 7897);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 3755);








let PrincipalPage = class PrincipalPage {
    constructor(menu, alertController, storage, router, servicio) {
        this.menu = menu;
        this.alertController = alertController;
        this.storage = storage;
        this.router = router;
        this.servicio = servicio;
    }
    openMenu() {
        this.menu.enable(true, 'first');
        this.menu.open();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
    showConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const confirm = yield this.alertController.create({
                header: 'Cerrar Sesión',
                message: '¿Desea Salir De La Aplicación?',
                buttons: [
                    {
                        cssClass: 'confirmacion',
                        text: 'No',
                        handler: () => {
                            this.router.navigate(['principal']);
                        }
                    },
                    {
                        text: 'Sí',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            localStorage.clear();
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
};
PrincipalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
PrincipalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-principal',
        template: _C_Users_tics_Desktop_IninbioApp_Ininbio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_principal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_principal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrincipalPage);



/***/ }),

/***/ 4529:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/principal/principal.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-buttons slot=\"start\">\r\n  <ion-button (click)=\"openMenu()\">\r\n    <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n  </ion-button>\r\n</ion-buttons>\r\n\r\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Opciones</ion-title>\r\n    </ion-toolbar> \r\n  </ion-header>\r\n  <ion-content class=\"menu\">\r\n    <ion-list>\r\n      <ion-item [routerLink] = \"['/inicio']\"><ion-icon name=\"flask-outline\"></ion-icon> Fermentación Melaza </ion-item>\r\n      <ion-item><ion-icon name=\"beer-outline\"></ion-icon> Fermentación Jugo de Agave </ion-item>\r\n      <ion-item button (click)=\"showConfirm()\"><ion-icon name=\"log-in-outline\"></ion-icon> Cerrar Sesión </ion-item>\r\n    </ion-list>\r\n  </ion-content>  \r\n</ion-menu>\r\n<ion-router-outlet id=\"main\"></ion-router-outlet>\r\n<ion-content class=\"background\"></ion-content>\r\n");

/***/ }),

/***/ 9012:
/*!***********************************************!*\
  !*** ./src/app/principal/principal.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url(\"/assets/imagenes/fondo.png\") 0 0/100% 100% no-repeat;\n}\n\nion-toolbar {\n  --text-align: center;\n  --background: #94b8d7;\n}\n\nion-content.menu {\n  --ion-background-color: #1f1f1f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1RUFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsK0JBQUE7QUFDSiIsImZpbGUiOiJwcmluY2lwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZW5lcy9mb25kby5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICB9ICBcclxuXHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLXRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogIzk0YjhkNztcclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50Lm1lbnUgeyBcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_principal_principal_module_ts.js.map