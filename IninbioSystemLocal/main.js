(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _rutas_no_login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rutas-no-login.guard */ 414);
/* harmony import */ var _guards_vino_acceso_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/vino-acceso.guard */ 2341);
/* harmony import */ var _guards_tequila_acceso_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/tequila-acceso.guard */ 7097);






const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 9549)).then(m => m.LoginPageModule),
        canActivate: [_rutas_no_login_guard__WEBPACK_IMPORTED_MODULE_0__.RutasNoLoginGuard]
    },
    {
        path: 'registro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registro_registro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registro/registro.module */ 8163)).then(m => m.RegistroPageModule),
        canActivate: [_rutas_no_login_guard__WEBPACK_IMPORTED_MODULE_0__.RutasNoLoginGuard]
    },
    {
        path: 'charts',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-src_app_services_charts_service_ts-src_app_services_descarga-excel_service_ts"), __webpack_require__.e("src_app_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/charts.module */ 6028)).then(m => m.ChartsPageModule),
        canActivate: [_guards_tequila_acceso_guard__WEBPACK_IMPORTED_MODULE_2__.TequilaAccesoGuard]
    },
    {
        path: 'inicio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-src_app_services_charts_service_ts-src_app_services_descarga-excel_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_inicio_inicio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inicio/inicio.module */ 2276)).then(m => m.InicioPageModule),
        canActivate: [_guards_tequila_acceso_guard__WEBPACK_IMPORTED_MODULE_2__.TequilaAccesoGuard]
    },
    {
        path: 'principal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_principal_principal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./principal/principal.module */ 9774)).then(m => m.PrincipalPageModule),
        canActivate: [_guards_tequila_acceso_guard__WEBPACK_IMPORTED_MODULE_2__.TequilaAccesoGuard]
    },
    {
        path: 'temperatura',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-src_app_charts_temperatura_temperatura_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/temperatura/temperatura.module */ 1824)).then(m => m.TemperaturaPageModule),
        canActivate: [_guards_tequila_acceso_guard__WEBPACK_IMPORTED_MODULE_2__.TequilaAccesoGuard]
    },
    {
        path: 'ph',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-src_app_charts_ph_ph_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/ph/ph.module */ 2958)).then(m => m.PhPageModule),
        canActivate: [_guards_tequila_acceso_guard__WEBPACK_IMPORTED_MODULE_2__.TequilaAccesoGuard]
    },
    {
        path: 'brix',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-src_app_charts_brix_brix_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/brix/brix.module */ 2593)).then(m => m.BrixPageModule),
        canActivate: [_guards_tequila_acceso_guard__WEBPACK_IMPORTED_MODULE_2__.TequilaAccesoGuard]
    },
    {
        path: 'eficiencia',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-src_app_charts_eficiencia_eficiencia_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/eficiencia/eficiencia.module */ 8272)).then(m => m.EficienciaPageModule),
        canActivate: [_guards_tequila_acceso_guard__WEBPACK_IMPORTED_MODULE_2__.TequilaAccesoGuard]
    },
    {
        path: 'alcvol',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-src_app_charts_alcvol_alcvol_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/alcvol/alcvol.module */ 9078)).then(m => m.AlcvolPageModule),
        canActivate: [_guards_tequila_acceso_guard__WEBPACK_IMPORTED_MODULE_2__.TequilaAccesoGuard]
    },
    {
        path: 'rest-contrasena',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_rest-contrasena_rest-contrasena_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./rest-contrasena/rest-contrasena.module */ 3664)).then(m => m.RestContrasenaPageModule),
        canActivate: [_rutas_no_login_guard__WEBPACK_IMPORTED_MODULE_0__.RutasNoLoginGuard]
    },
    {
        path: 'inicio-vino',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("src_app_vino_inicio-vino_inicio-vino_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vino/inicio-vino/inicio-vino.module */ 5358)).then(m => m.InicioVinoPageModule),
        canActivate: [_guards_vino_acceso_guard__WEBPACK_IMPORTED_MODULE_1__.VinoAccesoGuard]
    },
    {
        path: 'charts-vino',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-src_app_services_charts_service_ts-src_app_services_descarga-excel_service_ts"), __webpack_require__.e("src_app_vino_charts-vino_charts-vino_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vino/charts-vino/charts-vino.module */ 7923)).then(m => m.ChartsVinoPageModule),
        canActivate: [_guards_vino_acceso_guard__WEBPACK_IMPORTED_MODULE_1__.VinoAccesoGuard]
    },
    {
        path: 'densidad-vino',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("src_app_vino_densidad-vino_densidad-vino_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vino/densidad-vino/densidad-vino.module */ 7769)).then(m => m.DensidadVinoPageModule),
        canActivate: [_guards_vino_acceso_guard__WEBPACK_IMPORTED_MODULE_1__.VinoAccesoGuard]
    },
    {
        path: 'acidez-vino',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("src_app_vino_acidez-vino_acidez-vino_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vino/acidez-vino/acidez-vino.module */ 9040)).then(m => m.AcidezVinoPageModule),
        canActivate: [_guards_vino_acceso_guard__WEBPACK_IMPORTED_MODULE_1__.VinoAccesoGuard]
    },
    {
        path: 'temperatura-vino',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("src_app_vino_temperatura-vino_temperatura-vino_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vino/temperatura-vino/temperatura-vino.module */ 2363)).then(m => m.TemperaturaVinoPageModule),
        canActivate: [_guards_vino_acceso_guard__WEBPACK_IMPORTED_MODULE_1__.VinoAccesoGuard]
    },
    {
        path: 'volumen-vino',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_crypto-js_index_js"), __webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("src_app_vino_volumen-vino_volumen-vino_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vino/volumen-vino/volumen-vino.module */ 231)).then(m => m.VolumenVinoPageModule),
        canActivate: [_guards_vino_acceso_guard__WEBPACK_IMPORTED_MODULE_1__.VinoAccesoGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 466);






let AppComponent = class AppComponent {
    constructor(platform, translate) {
        this.platform = platform;
        this.translate = translate;
        this.InitializeApp();
    }
    InitializeApp() {
        this.platform.ready().then(() => {
            this.translate.addLangs(['English, Español, Aleman']);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _C_Users_tics_Documents_BACKUP_APP_ESCRITORIO_FULL_IninbioSystemExpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-highcharts */ 6321);
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ 3857);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);
/* harmony import */ var _awesome_cordova_plugins_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/onesignal/ngx */ 7490);
/* harmony import */ var _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/firebase-x/ngx */ 1906);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 9832);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ 7498);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2003);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 8267);


















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            angular_highcharts__WEBPACK_IMPORTED_MODULE_12__.ChartModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__.IonicStorageModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
                }
            })
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy },
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File,
            _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_2__.Downloader,
            _awesome_cordova_plugins_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__.OneSignal,
            _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_4__.FirebaseX,
            _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer,
            _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransferObject,
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__.HashLocationStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 7097:
/*!************************************************!*\
  !*** ./src/app/guards/tequila-acceso.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TequilaAccesoGuard": () => (/* binding */ TequilaAccesoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _last_path_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../last-path.service */ 1686);






let TequilaAccesoGuard = class TequilaAccesoGuard {
    constructor(navControl, router, location, last) {
        this.navControl = navControl;
        this.router = router;
        this.location = location;
        this.last = last;
    }
    canActivate(route, state) {
        if (localStorage.getItem('categoria') == '1') {
            return true;
        }
        else {
            this.router.navigateByUrl(localStorage.getItem('routLast'));
            return false;
        }
    }
};
TequilaAccesoGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _last_path_service__WEBPACK_IMPORTED_MODULE_0__.LastPathService }
];
TequilaAccesoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], TequilaAccesoGuard);



/***/ }),

/***/ 2341:
/*!*********************************************!*\
  !*** ./src/app/guards/vino-acceso.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VinoAccesoGuard": () => (/* binding */ VinoAccesoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _last_path_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../last-path.service */ 1686);






let VinoAccesoGuard = class VinoAccesoGuard {
    constructor(router, location, navControl, last) {
        this.router = router;
        this.location = location;
        this.navControl = navControl;
        this.last = last;
    }
    canActivate(route, state) {
        if (localStorage.getItem('categoria') == '2') {
            return true;
        }
        else {
            this.router.navigateByUrl(localStorage.getItem('routLast'));
            return false;
        }
    }
};
VinoAccesoGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _last_path_service__WEBPACK_IMPORTED_MODULE_0__.LastPathService }
];
VinoAccesoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], VinoAccesoGuard);



/***/ }),

/***/ 1686:
/*!**************************************!*\
  !*** ./src/app/last-path.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastPathService": () => (/* binding */ LastPathService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3252);



let LastPathService = class LastPathService {
    constructor(router) {
        this.router = router;
        this.previousUrl = '';
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                this.previousUrl = this.router.url;
                localStorage.setItem('routLast', this.previousUrl);
            }
        });
    }
};
LastPathService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
LastPathService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LastPathService);



/***/ }),

/***/ 414:
/*!*****************************************!*\
  !*** ./src/app/rutas-no-login.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RutasNoLoginGuard": () => (/* binding */ RutasNoLoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 8099);



let RutasNoLoginGuard = class RutasNoLoginGuard {
    constructor(navControl) {
        this.navControl = navControl;
    }
    canActivate(route, state) {
        localStorage.removeItem('idTina');
        localStorage.removeItem('empresa');
        localStorage.removeItem('token');
        localStorage.removeItem('categoria');
        localStorage.removeItem('routLast');
        return true;
    }
};
RutasNoLoginGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.NavController }
];
RutasNoLoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RutasNoLoginGuard);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ 8170);
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUsuarios: 'https://www.ininbio.com//pruebasLocalesFull/principal_.php',
    apiSensores: 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
    apiLogin: 'https://www.ininbio.com//pruebasLocalesFull/obtener_Usuarios.php',
    apiExcel: 'https://www.ininbio.com//pruebasLocalesFull/generar_Excel.php',
    apiRestContrasena: 'https://www.ininbio.com//pruebasLocalesFull/new_Contra.php',
    apiMezcalPDF: 'http://3.138.161.216:80/Catalogos/Catalogo_Vino.pdf',
    apiAlertas: 'https://www.ininbio.com//pruebasLocalesFull/alertas_App.php',
    apiDatosGenerales: 'https://www.ininbio.com/pruebasLocalesFull/datosXTina.php',
    SECRET_KEY: 'Ininbio.TI2022?'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		9442,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map