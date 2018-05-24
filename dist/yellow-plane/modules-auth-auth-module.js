(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./src/app/modules/blank-layout/modules/auth/auth-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/blank-layout/modules/auth/auth-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landing/landing.page */ "./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/blank-layout/modules/auth/auth.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/blank-layout/modules/auth/auth.module.ts ***!
  \******************************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/blank-layout/modules/auth/auth-routing.module.ts");
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landing/landing.page */ "./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.ts");
/* harmony import */ var _shared_modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/modules/forms */ "./src/app/shared/modules/forms.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
                _shared_modules_forms__WEBPACK_IMPORTED_MODULE_4__["FormsSharedModules"]
            ],
            providers: [],
            declarations: [_pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-page\">\r\n\r\n\t<div class=\"content-bg-wrap\">\r\n\t</div>\r\n\r\n\t<!-- Landing Header -->\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t<div id=\"site-header-landing\" class=\"header-landing\">\r\n\t\t\t\t\t<a href=\"\" class=\"logo\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/logo.png\" alt=\"Yellow Post\">\r\n\t\t\t\t\t\t<h5 class=\"logo-title\">yellow post</h5>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- ... end Landing Header -->\r\n\r\n\t<!-- Login-Registration Form  -->\r\n\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row display-flex\">\r\n\t\t\t<div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"landing-content\">\r\n\t\t\t\t\t<h1>Welcome to the Biggest Social Network in the World</h1>\r\n\t\t\t\t\t<p>We are the best and biggest social network with 5 billion active users all around the world. Share you\r\n\t\t\t\t\t\tthoughts, write blog posts, show your favourite music and much more!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-md btn-border c-white\">Register Now!</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"registration-login-form\">\r\n\t\t\t\t\t<!-- Nav tabs -->\r\n\t\t\t\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n\t\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t\t<a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\" role=\"tab\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-login-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-login-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-register-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-register-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t<!-- Tab panes -->\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\" data-mh=\"log-tab\">\r\n\t\t\t\t\t\t\t<div class=\"title h6\">Register to YellowPlane</div>\r\n\t\t\t\t\t\t\t<form class=\"content\" [formGroup]=\"registerForm\" (ngSubmit)=\"tryRegister(registerForm.value)\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">First Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"firstName\" placeholder=\"\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Last Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"lastName\" placeholder=\"\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Email</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"email\" placeholder=\"\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Password</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"password\" placeholder=\"\" type=\"password\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Age</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"age\" placeholder=\"\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Gender</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"gender\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"MA\">Male</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"FE\">Female</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"remember\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"termsCheckbox\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-material\"><span class=\"check\"></span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tI accept the <a href=\"#\">Terms and Conditions</a> of the website\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-purple btn-lg full-width\">Complete Registration!</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\" data-mh=\"log-tab\">\r\n\t\t\t\t\t\t\t<div class=\"title h6\">Login to your Account</div>\r\n\t\t\t\t\t\t\t<form class=\"content\" [formGroup]=\"loginForm\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Email</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"email\" placeholder=\"\" type=\"email\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Password</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"password\" placeholder=\"\" type=\"password\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"remember\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"rememberCheckbox\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-material\"><span class=\"check\"></span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tRemember Me\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"forgot\">Forgot my Password</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"tryLogin(loginForm.value)\" class=\"btn btn-lg btn-primary full-width\">Login</button>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"or\"></div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"tryGoogleLogin()\" class=\"btn btn-lg bg-google full-width btn-icon-left btn-social\"><i class=\"fa fa-google\" aria-hidden=\"true\"></i>Login with Google</button>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t<p>Don’t you have an account? <a href=\"#\">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.ts ***!
  \*********************************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = /** @class */ (function () {
    function LandingComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.createForm();
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.registerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    LandingComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/home']);
        });
    };
    LandingComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    LandingComponent.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.page.html */ "./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.html"),
            styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map