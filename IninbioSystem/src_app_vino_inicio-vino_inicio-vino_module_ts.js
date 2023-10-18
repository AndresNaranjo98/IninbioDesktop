"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vino_inicio-vino_inicio-vino_module_ts"],{

/***/ 573:
/*!****************************************************************!*\
  !*** ./src/app/vino/inicio-vino/inicio-vino-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioVinoPageRoutingModule": () => (/* binding */ InicioVinoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _inicio_vino_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-vino.page */ 8667);




const routes = [
    {
        path: '',
        component: _inicio_vino_page__WEBPACK_IMPORTED_MODULE_0__.InicioVinoPage
    }
];
let InicioVinoPageRoutingModule = class InicioVinoPageRoutingModule {
};
InicioVinoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioVinoPageRoutingModule);



/***/ }),

/***/ 5358:
/*!********************************************************!*\
  !*** ./src/app/vino/inicio-vino/inicio-vino.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "InicioVinoPageModule": () => (/* binding */ InicioVinoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _inicio_vino_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-vino-routing.module */ 573);
/* harmony import */ var _inicio_vino_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-vino.page */ 8667);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2003);









function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let InicioVinoPageModule = class InicioVinoPageModule {
};
InicioVinoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _inicio_vino_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioVinoPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ],
        declarations: [_inicio_vino_page__WEBPACK_IMPORTED_MODULE_1__.InicioVinoPage]
    })
], InicioVinoPageModule);



/***/ }),

/***/ 8667:
/*!******************************************************!*\
  !*** ./src/app/vino/inicio-vino/inicio-vino.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioVinoPage": () => (/* binding */ InicioVinoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inicio_vino_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./inicio-vino.page.html */ 1358);
/* harmony import */ var _inicio_vino_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-vino.page.scss */ 2509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ 3706);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);









let InicioVinoPage = class InicioVinoPage {
    constructor(menu, translate, alertController, router) {
        this.menu = menu;
        this.translate = translate;
        this.alertController = alertController;
        this.router = router;
        this.translate.use(localStorage.getItem('idioma'));
        this.user = localStorage.getItem('empresa');
        const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.decrypt(this.user, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.SECRET_KEY);
        const datoDesencriptado = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__.enc.Utf8);
        if (datoDesencriptado === '5') {
            this.numberOfCards = 4;
        }
    }
    ngOnInit() {
    }
    openMenu1() {
        this.menu.enable(true, 'second');
        this.menu.open();
    }
    showConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            localStorage.removeItem('idTina');
                            localStorage.removeItem('empresa');
                            localStorage.removeItem('token');
                            localStorage.removeItem('categoria');
                            localStorage.setItem('routLast', '/login');
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
    idTina(i) {
        localStorage.setItem('idTina', i);
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
};
InicioVinoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
InicioVinoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-inicio-vino',
        template: _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inicio_vino_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inicio_vino_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioVinoPage);



/***/ }),

/***/ 1358:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/vino/inicio-vino/inicio-vino.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fondo\">\n  <ion-toolbar class=\"fondo\">\n    <ion-buttons>\n      <ion-button class=\"fondo\" (click)=\"openMenu1()\" fill=\"outline\">\n        <ion-icon name=\"menu-sharp\" slot=\"icon-only\" style=\"color: black;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-menu side=\"start\" menuId=\"second\" contentId=\"main1\" class=\"menu\">\n    <ion-header>\n      <ion-toolbar class=\"color\">\n        <ion-title>{{\"OPCIONESMENU.OPCIONES\" | translate}}</ion-title>\n      </ion-toolbar> \n    </ion-header>\n    <ion-content class=\"menu\">\n      <ion-list>\n        <ion-item><ion-icon src=\"assets/imagenes/vino.svg\" slot=\"start\"></ion-icon> {{\"OPCIONESMENU.FERUVA\" | translate}} </ion-item>\n        <ion-item button (click)=\"showConfirm()\"><ion-icon src=\"assets/imagenes/cerrar-sesion.svg\" slot=\"start\"></ion-icon> {{\"OPCIONESMENU.CERRARSESION\" | translate}} </ion-item>\n      </ion-list>\n    </ion-content>  \n    <ion-item class=\"color\">\n      <ion-icon src=\"assets/imagenes/catalogo.svg\" slot=\"start\"></ion-icon>\n      <ion-label>{{\"OPCIONESMENU.CATALOGO\" | translate}}</ion-label>\n        <ion-select interface=\"action-sheet\" [(ngModel)]=\"opcion\" (ionChange)=\"opcionCatalogo(opcion)\">\n          <ion-select-option value=\"mezcal\">{{\"PDFCATALOGO.MEZCAL\" | translate}}</ion-select-option>\n          <ion-select-option value=\"tequila\">{{\"PDFCATALOGO.TEQUILA\" | translate}}</ion-select-option>\n          <ion-select-option value=\"vino\">{{\"PDFCATALOGO.VINO\" | translate}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n  </ion-menu>\n  <ion-router-outlet id=\"main1\"></ion-router-outlet>\n\n  <ion-grid>\n    <ion-row style=\"display: flex; justify-content: center;\">\n      <ion-col size=\"4\" size-md=\"2\" size-lg=\"2\" class=\"padding\" style=\"color: black; text-align: center;\" *ngFor=\"let card of [].constructor(numberOfCards); let i = index;\">\n        {{i+1}}\n        <ion-card [routerLink]=\"['/charts-vino']\" (click)=\"idTina(i+1)\">\n          <img src=\"assets\\imagenes\\tina.png\" alt=\"ion\" class=\"tina\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ 2509:
/*!********************************************************!*\
  !*** ./src/app/vino/inicio-vino/inicio-vino.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content.fondo {\n  --ion-background-color: #CECECE;\n}\n\nion-content {\n  background-color: #CECECE;\n}\n\nion-content.fondo {\n  --ion-background-color: #CECECE;\n}\n\nion-content.menu {\n  --ion-background-color: #1f1f1f;\n}\n\nion-menu.menu {\n  --background: #1f1f1f;\n}\n\n.color {\n  --background: #1f1f1f;\n}\n\nion-icon {\n  color: white;\n}\n\nion-button.fondo {\n  --background: #CECECE;\n  --border-color: none;\n  --border-width: 0px !important;\n  --color: #000000;\n}\n\nion-card {\n  display: flex;\n  flex-direction: column !important;\n  margin: 0 !important;\n  background-color: #CECECE;\n  box-shadow: none;\n}\n\n#tina {\n  width: 20%;\n  height: 17%;\n  left: 7.5%;\n  text-align: center;\n  --ion-item-background:#CECECE;\n}\n\n.tina {\n  width: 30%;\n}\n\n@media screen and (max-width: 480px) {\n  .tina {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby12aW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFHQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0UsV0FBQTtFQURKO0FBQ0YiLCJmaWxlIjoiaW5pY2lvLXZpbm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuZm9uZG8geyBcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNDRUNFQ0U7IFxyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRUNFQ0U7IFxyXG59XHJcblxyXG5pb24tY29udGVudC5mb25kbyB7IFxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0NFQ0VDRTsgXHJcbn1cclxuXHJcbmlvbi1jb250ZW50Lm1lbnUgeyBcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1lbnV7XHJcbiAgICAtLWJhY2tncm91bmQgOiAjMWYxZjFmO1xyXG59XHJcblxyXG4uY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxZjFmMWY7O1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5mb25kbyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNDRUNFQ0U7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogbm9uZTsgXHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yIDogIzAwMDAwMDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgLy8gd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xyXG4gICAgLy8gaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFQ0VDRTsgXHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4jdGluYXtcclxuICAgIHdpZHRoOiAyMCU7IFxyXG4gICAgaGVpZ2h0OiAxNyU7IFxyXG4gICAgbGVmdDogNy41JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojQ0VDRUNFO1xyXG59XHJcblxyXG4udGluYSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnRpbmEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_vino_inicio-vino_inicio-vino_module_ts.js.map