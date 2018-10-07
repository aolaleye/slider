(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nav_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/router.animations */ "./src/app/nav/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    // retrieves the data state from the route, noted in routes.ts
    // matches the retrieved state to the corresponding state in routerTransition in order to apply its specified animation
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            animations: [_nav_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]],
            template: "\n    <main [@routerTransition]=\"getState(outlet)\">\n      <router-outlet #outlet=\"outlet\"></router-outlet>\n    </main>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/index */ "./src/app/pages/index.ts");
/* harmony import */ var _nav_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/routes */ "./src/app/nav/routes.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _nav_routes__WEBPACK_IMPORTED_MODULE_5__["AppRouting"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_index__WEBPACK_IMPORTED_MODULE_4__["GradientsComponent"],
                _pages_index__WEBPACK_IMPORTED_MODULE_4__["PresetsComponent"],
                _pages_index__WEBPACK_IMPORTED_MODULE_4__["ColorsComponent"],
                _pages_index__WEBPACK_IMPORTED_MODULE_4__["Error404Component"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/nav/router.animations.ts":
/*!******************************************!*\
  !*** ./src/app/nav/router.animations.ts ***!
  \******************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// slideIn is a transition animation to allow a page or element to "slide in" from a side of the screen
// direction is a placeholder for which side of the screen the page will slide in from (either left or right)
// placeholders are defined for each path in routeTransition
var slideIn = function (direction) { return [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(" + (direction === 'left' ? '-' : '') + "100%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(" + (direction === 'left' ? '' : '-') + "100%)" }))
        ], { optional: true }),
        // stagger allows the elements with the class .delay to slide in with a bit of a delay from the page
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .delay', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(1, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(" + (direction === 'left' ? '-' : '') + "100%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', opacity: 1 })),
        ]), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave .delay', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(1, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(" + (direction === 'left' ? '' : '-') + "100%)", opacity: 1 })),
        ]), { optional: true })
    ])
]; };
// specifies the direction each page will slide in from depending on the path
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('gradients => presets', slideIn('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('presets => colors', slideIn('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('colors => presets', slideIn('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('presets => gradients', slideIn('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => gradients', slideIn('right'))
]);


/***/ }),

/***/ "./src/app/nav/routes.ts":
/*!*******************************!*\
  !*** ./src/app/nav/routes.ts ***!
  \*******************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/index */ "./src/app/pages/index.ts");
/* harmony import */ var _pages_404_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/404/404.component */ "./src/app/pages/404/404.component.ts");



var routes = [
    { path: 'gradients', component: _pages_index__WEBPACK_IMPORTED_MODULE_1__["GradientsComponent"], data: { state: 'gradients' } },
    { path: 'presets', component: _pages_index__WEBPACK_IMPORTED_MODULE_1__["PresetsComponent"], data: { state: 'presets' } },
    { path: 'colors', component: _pages_index__WEBPACK_IMPORTED_MODULE_1__["ColorsComponent"], data: { state: 'colors' } },
    { path: '404', component: _pages_404_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"] },
    { path: '', redirectTo: '/gradients', pathMatch: 'full' },
    { path: '**', redirectTo: '/404' },
];
var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
    useHash: true
});


/***/ }),

/***/ "./src/app/pages/404/404.component.css":
/*!*********************************************!*\
  !*** ./src/app/pages/404/404.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\nh1 {\n    font-size: 6em;\n\tbackground: linear-gradient(to right, #30CFD0 0%, #330867 100%);\n\t-webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\nbutton {\n    margin-top: 20px;\n    padding: 10px 15px;\n    background: lightgray;\n    color: white;\n    font-size: 1em;\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/pages/404/404.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/404/404.component.ts ***!
  \********************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Error404Component = /** @class */ (function () {
    function Error404Component(router) {
        this.router = router;
    }
    Error404Component.prototype.goBack = function () {
        this.router.navigate(['/gradients']);
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <div class=\"message\">\n        <h1>404'd</h1>\n    <div>\n    <button (click)=\"goBack()\">Go Back</button>\n    ",
            styles: [__webpack_require__(/*! ./404.component.css */ "./src/app/pages/404/404.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/pages/colors/colors.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/colors/colors.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".number-colors {\n    background-image: linear-gradient(230deg,#ff4592 , yellow);\n}\n\n.bg-colors {\n    background-image: linear-gradient(to left,#ff4592 , yellow);\n}\n"

/***/ }),

/***/ "./src/app/pages/colors/colors.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/colors/colors.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (swiperight)=\"goBack()\">\n\n    <div class=\"info\">\n        <div class=\"number number-colors delay\">3</div>\n        <h1 class=\"main-header delay\">Colors</h1>\n        <h5 class=\"sub-header delay\">Pick any color</h5>\n    </div>\n\n\n    <div class=\"bg bg-colors\" (swiperight)=\"goBack()\">\n        <img src=\"assets/pipette.svg\" class=\"delay\">\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/colors/colors.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/colors/colors.component.ts ***!
  \**************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorsComponent = /** @class */ (function () {
    function ColorsComponent(router) {
        this.router = router;
    }
    ColorsComponent.prototype.goBack = function () {
        this.router.navigate(['/presets']);
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/pages/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ../../shared/shared.style.css */ "./src/app/shared/shared.style.css"), __webpack_require__(/*! ./colors.component.css */ "./src/app/pages/colors/colors.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/pages/gradients/gradients.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/gradients/gradients.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".number-gradients {\n    background-image: linear-gradient(40deg, #8a47f5 , #24eae1);\n}\n\n.bg-gradients {\n    background-image: linear-gradient(to right, #8a47f5 , #24eae1);\n}\n"

/***/ }),

/***/ "./src/app/pages/gradients/gradients.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/gradients/gradients.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (swipeleft)=\"goForward()\">\n\n    <div class=\"info\">\n        <div class=\"number number-gradients delay\">1</div>\n        <h1 class=\"main-header delay\">Gradients</h1>\n        <h5 class=\"sub-header delay\">Start, end, angle</h5>\n    </div>\n\n\n    <div class=\"bg bg-gradients\">\n        <img src=\"assets/drop.svg\" class=\"delay\">\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/gradients/gradients.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/gradients/gradients.component.ts ***!
  \********************************************************/
/*! exports provided: GradientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientsComponent", function() { return GradientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GradientsComponent = /** @class */ (function () {
    function GradientsComponent(router) {
        this.router = router;
    }
    GradientsComponent.prototype.goForward = function () {
        this.router.navigate(['/presets']);
    };
    GradientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./gradients.component.html */ "./src/app/pages/gradients/gradients.component.html"),
            styles: [__webpack_require__(/*! ../../shared/shared.style.css */ "./src/app/shared/shared.style.css"), __webpack_require__(/*! ./gradients.component.css */ "./src/app/pages/gradients/gradients.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GradientsComponent);
    return GradientsComponent;
}());



/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: GradientsComponent, PresetsComponent, ColorsComponent, Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gradients_gradients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradients/gradients.component */ "./src/app/pages/gradients/gradients.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GradientsComponent", function() { return _gradients_gradients_component__WEBPACK_IMPORTED_MODULE_0__["GradientsComponent"]; });

/* harmony import */ var _presets_presets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presets/presets.component */ "./src/app/pages/presets/presets.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresetsComponent", function() { return _presets_presets_component__WEBPACK_IMPORTED_MODULE_1__["PresetsComponent"]; });

/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/pages/colors/colors.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return _colors_colors_component__WEBPACK_IMPORTED_MODULE_2__["ColorsComponent"]; });

/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./404/404.component */ "./src/app/pages/404/404.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return _404_404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"]; });







/***/ }),

/***/ "./src/app/pages/presets/presets.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/presets/presets.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".number-presets {\n    background-image: linear-gradient(20deg, #24eae1 , yellow);\n}\n\n.bg-presets {\n    background-image: linear-gradient(to right, #24eae1 , yellow);\n}\n"

/***/ }),

/***/ "./src/app/pages/presets/presets.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/presets/presets.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (swiperight)=\"goBack()\" (swipeleft)=\"goForward()\">\n\n    <div class=\"info\">\n        <div class=\"number number-presets delay\">2</div>\n        <h1 class=\"main-header delay\">Presets</h1>\n        <h5 class=\"sub-header delay\">Manage presets</h5>\n    </div>\n\n\n    <div class=\"bg bg-presets\">\n        <img src=\"assets/painter-palette.svg\" class=\"delay\">\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/presets/presets.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/presets/presets.component.ts ***!
  \****************************************************/
/*! exports provided: PresetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetsComponent", function() { return PresetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PresetsComponent = /** @class */ (function () {
    function PresetsComponent(router) {
        this.router = router;
    }
    PresetsComponent.prototype.goForward = function () {
        this.router.navigate(['/colors']);
    };
    PresetsComponent.prototype.goBack = function () {
        this.router.navigate(['/gradients']);
    };
    PresetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./presets.component.html */ "./src/app/pages/presets/presets.component.html"),
            styles: [__webpack_require__(/*! ../../shared/shared.style.css */ "./src/app/shared/shared.style.css"), __webpack_require__(/*! ./presets.component.css */ "./src/app/pages/presets/presets.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PresetsComponent);
    return PresetsComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.style.css":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mobile-first */\n.container {\n    text-align: center;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n}\n.info {\n    min-height: 50vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.number {\n    border-radius: 100%;\n    padding: 8px 12px;\n    color: #fff;\n}\n.main-header {\n    font-size: 2.8em;\n    font-weight: bold;\n    letter-spacing: .5px;\n    margin: 15px auto 5px auto;\n}\n.sub-header {\n    color: lightgray;\n    font-size: 1.3em;\n    font-weight: lighter;\n    letter-spacing: .5px;\n}\n.bg {\n    min-height: 50vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nimg {\n    width: 20%;\n}\n/* tablet-portrait */\n@media only screen and (min-width: 760px) {\n\n    .main-header {\n        font-size: 3.5em;\n        margin: 20px auto 10px auto;\n    }\n\n    .sub-header {\n        font-size: 1.4em;\n    }\n\n    img {\n        width: 15%;\n    }\n}\n/* tablet-landscape and larger */\n@media only screen and (min-width: 1020px) {\n\n    img {\n        width: 10%;\n    }\n}\n/* laptops and larger */\n@media only screen and (min-width: 1220px) {\n\n    img {\n        width: 7%;\n    }\n}\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/iolaleye/Documents/slider/slider-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map