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
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/landing/landing.page */ "./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/blank-layout/modules/auth/auth-routing.module.ts");
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/landing/landing.page */ "./src/app/modules/blank-layout/modules/auth/pages/landing/landing.page.ts");
/* harmony import */ var _shared_modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/modules/forms */ "./src/app/shared/modules/forms.ts");
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
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _shared_modules_forms__WEBPACK_IMPORTED_MODULE_5__["FormsSharedModules"]
            ],
            providers: [],
            declarations: [_pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]]
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

module.exports = "<div class=\"landing-page\">\r\n\r\n\t<div class=\"content-bg-wrap\">\r\n\t</div>\r\n\r\n\t<!-- Landing Header -->\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t<div id=\"site-header-landing\" class=\"header-landing\">\r\n\t\t\t\t\t<a href=\"\" class=\"logo\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/logo.png\" alt=\"YelloPlane\">\r\n\t\t\t\t\t\t<h5 class=\"logo-title\">yelloplane</h5>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- ... end Landing Header -->\r\n\r\n\t<!-- Login-Registration Form  -->\r\n\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row display-flex\">\r\n\t\t\t<div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"landing-content\">\r\n\t\t\t\t\t<h1>Connect, Expand, Share Ideas</h1>\r\n\t\t\t\t\t<p>We take your privacy very serious. We don’t sell your personal information and tell the whole world what brand of cereal you ate this morning or what type of car you just purchased. We use very basic data, geography, age range and gender just simply to give you a better customized experience. Not only that, but Yelloplane is unique in the fact that here you can only see your friends and what they’re talking about if you want, verses seeing a wide open news feed from persons and businesses that you don’t know nor care about. Your personal experience on our site is fully and easily customized to your choices. So welcome to Yelloplane and enjoy.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"registration-login-form\">\r\n\t\t\t\t\t<!-- Nav tabs -->\r\n\t\t\t\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n\t\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t\t<a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" placement=\"right\" ngbTooltip=\"Login\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-login-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-login-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" placement=\"right\" ngbTooltip=\"Signup\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-register-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-register-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t<!-- Tab panes -->\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\" data-mh=\"log-tab\">\r\n\t\t\t\t\t\t\t<div class=\"title h6\">Register to YelloPlane</div>\r\n\t\t\t\t\t\t\t<form class=\"content\" [formGroup]=\"registerForm\" (ngSubmit)=\"tryRegister(registerForm.value)\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\" [ngClass]=\"{'has-danger': !registerForm.controls.firstName.valid && registerForm.controls.firstName.touched,'has-success': registerForm.controls.firstName.valid && registerForm.controls.firstName.touched}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">First Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"firstName\" type=\"text\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.firstName.hasError('required') && registerForm.controls.firstName.touched\">This field is required!</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.firstName.hasError('pattern') && registerForm.controls.firstName.touched\">Only Alphabets are allowed!</p>\r\n\t\t\t  \t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.firstName.hasError('minlength') && registerForm.controls.firstName.touched\">Must have minimum 3 characters!</p>\r\n\t\t\t  \t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.firstName.hasError('maxlength') && registerForm.controls.firstName.touched\">Maximum characters can be 50!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\" [ngClass]=\"{'has-danger': !registerForm.controls.lastName.valid && registerForm.controls.lastName.touched, 'has-success': registerForm.controls.lastName.valid && registerForm.controls.lastName.touched}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Last Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"lastName\" placeholder=\"\" type=\"text\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.lastName.hasError('required') && registerForm.controls.lastName.touched\">This field is required!</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.lastName.hasError('pattern') && registerForm.controls.lastName.touched\">Only Alphabets are allowed!</p>\r\n\t\t\t  \t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.lastName.hasError('minlength') && registerForm.controls.lastName.touched\">Must have minimum 3 characters!</p>\r\n\t\t\t  \t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.lastName.hasError('maxlength') && registerForm.controls.lastName.touched\">Maximum characters can be 50!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\" [ngClass]=\"{'has-danger': !registerForm.controls.email.valid && registerForm.controls.email.touched, 'has-success': registerForm.controls.email.valid && registerForm.controls.email.touched}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Email</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"email\" placeholder=\"\" type=\"text\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.email.hasError('required') && registerForm.controls.email.touched\">This field is required!</p>\r\n\t\t\t  \t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.email.hasError('pattern') && registerForm.controls.email.touched\">Email is not valid!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n                  </div>\r\n\r\n                  <div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\" [ngClass]=\"{'has-danger': !registerForm.controls.username.valid && registerForm.controls.username.touched, 'has-success': registerForm.controls.username.valid && registerForm.controls.username.touched}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Username</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"username\" placeholder=\"\" type=\"text\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.username.hasError('required') && registerForm.controls.username.touched\">This field is required!</p>\r\n\t\t\t  \t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.username.hasError('pattern') && registerForm.controls.username.touched\">Username is not valid!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\" [ngClass]=\"{'has-danger': !registerForm.controls.password.valid && registerForm.controls.password.touched, 'has-success': registerForm.controls.password.valid && registerForm.controls.password.touched}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Password</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"password\" placeholder=\"\" type=\"password\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.password.hasError('required') && registerForm.controls.password.touched\">This field is required!</p>\r\n\t\t\t\t\t\t\t\t\t\t  \t<p class=\"error-text\" *ngIf=\"registerForm.controls.password.hasError('pattern') && registerForm.controls.password.touched\">Must have at least 1 character and 1 number!</p>\r\n\t\t\t\t\t\t\t\t\t\t  \t<p class=\"error-text\" *ngIf=\"registerForm.controls.password.hasError('minlength') && registerForm.controls.password.touched\">Must have minimum 6 characters!</p>\r\n\t\t\t\t\t\t\t\t\t\t  \t<p class=\"error-text\" *ngIf=\"registerForm.controls.password.hasError('maxlength') && registerForm.controls.password.touched\">Maximum characters can be 100!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\" [ngClass]=\"{'has-danger': !registerForm.controls.age.valid && registerForm.controls.age.touched, 'has-success': registerForm.controls.age.valid && registerForm.controls.age.touched}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Age</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"age\" placeholder=\"\" type=\"text\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.age.hasError('required') && registerForm.controls.age.touched\">This field is required!</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.age.hasError('pattern') && registerForm.controls.age.touched\">Only numbers are alllowed!</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.age.hasError('ageLimit') && registerForm.controls.age.touched\">You must be over 13 years of age!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\" [ngClass]=\"{'has-danger': !registerForm.controls.gender.valid && registerForm.controls.gender.touched, 'has-success': registerForm.controls.gender.valid && registerForm.controls.gender.touched}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Gender</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"gender\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"MA\">Male</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"FE\">Female</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.gender.hasError('required') && registerForm.controls.gender.touched\">This field is required!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\" [ngClass]=\"{'has-danger': !registerForm.controls.accountType.valid && registerForm.controls.accountType.touched, 'has-success': registerForm.controls.accountType.valid && registerForm.controls.accountType.touched}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Account Type</label>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"accountType\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Personal\">Personal</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Business\">Business</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.accountType.hasError('required') && registerForm.controls.accountType.touched\">This field is required!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"remember\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input formControlName=\"acceptTerms\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-material\"><span class=\"check\"></span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tI accept the <a href=\"#\">Terms and Conditions</a> of the website\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"registerForm.controls.acceptTerms.hasError('required') && registerForm.controls.acceptTerms.touched\">This field is required!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-purple btn-lg full-width\">Complete Registration!</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\" data-mh=\"log-tab\">\r\n\t\t\t\t\t\t\t<div class=\"title h6\">Login to your Account</div>\r\n\t\t\t\t\t\t\t<form class=\"content\" [formGroup]=\"loginForm\" (ngSubmit)=\"tryLogin(loginForm.value)\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\" [ngClass]=\"{'has-danger': !loginForm.controls.email.valid && loginForm.controls.email.touched, 'has-success': loginForm.controls.email.valid && loginForm.controls.email.touched}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Email</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"email\" placeholder=\"\" type=\"email\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"loginForm.controls.email.hasError('required') && loginForm.controls.email.touched\">This field is required!</p>\r\n\t\t\t  \t\t\t\t\t\t\t<p class=\"error-text\" *ngIf=\"loginForm.controls.email.hasError('pattern') && loginForm.controls.email.touched\">Email is not valid!</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Password</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"password\" placeholder=\"\" type=\"password\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"remember\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"rememberCheckbox\" formControlName=\"rememberMe\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-material\"><span class=\"check\"></span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tRemember Me\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"forgot\">Forgot my Password</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-lg btn-primary full-width\">Login</button>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"or\"></div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"tryGoogleLogin()\" class=\"btn btn-lg bg-google full-width btn-icon-left btn-social\"><i class=\"fa fa-google\" aria-hidden=\"true\"></i>Login with Google</button>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t<p>Don’t you have an account? <a href=\"#\">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

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
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rememberMe: ['']
        });
        this.registerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([1-9]\d*|0)$/), this.validateAge])],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            accountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            acceptTerms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    };
    LandingComponent.prototype.validateAge = function (control) {
        var age = control.value;
        if (!isNaN(age)) {
            var ageNum = parseInt(age);
            if (ageNum < 13 || ageNum > 110) {
                return {
                    ageLimit: {
                        ageError: true
                    }
                };
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    LandingComponent.prototype.validateForm = function (form) {
        Object.keys(form.controls).forEach(function (field) {
            var control = form.get(field);
            control.markAsTouched({ onlySelf: true });
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
        if (this.loginForm.valid) {
            this.authService.doLogin(value)
                .then(function (res) {
                _this.router.navigate(['/home']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.validateForm(this.loginForm);
        }
    };
    LandingComponent.prototype.tryRegister = function (value) {
        var _this = this;
        console.log(value);
        if (this.registerForm.valid) {
            this.authService.doRegister(value)
                .then(function (res) {
                _this.router.navigate(['/home']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.validateForm(this.registerForm);
        }
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



/***/ }),

/***/ "./src/app/shared/modules/forms.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/forms.ts ***!
  \*****************************************/
/*! exports provided: FormsSharedModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsSharedModules", function() { return FormsSharedModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormsSharedModules = /** @class */ (function () {
    function FormsSharedModules() {
    }
    FormsSharedModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            ],
        })
    ], FormsSharedModules);
    return FormsSharedModules;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map