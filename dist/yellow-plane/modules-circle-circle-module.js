(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-circle-circle-module"],{

/***/ "./src/app/modules/full-layout/modules/circle/circle-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/circle-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CircleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleRoutingModule", function() { return CircleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_circle_circle_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/circle/circle.page */ "./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.ts");
/* harmony import */ var _pages_circles_circles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/circles/circles.page */ "./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.ts");
/* harmony import */ var _pages_circle_categories_circle_categories_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/circle-categories/circle-categories.page */ "./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.ts");
/* harmony import */ var _pages_circle_open_circle_circle_open_circle_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/circle-open-circle/circle-open-circle.page */ "./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.ts");
/* harmony import */ var _pages_circle_open_topic_circle_open_topic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/circle-open-topic/circle-open-topic.page */ "./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.ts");
/* harmony import */ var _pages_circle_create_topic_circle_create_topic_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/circle-create-topic/circle-create-topic.page */ "./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _pages_circle_circle_page__WEBPACK_IMPORTED_MODULE_2__["CircleComponent"],
        children: [
            {
                path: '',
                component: _pages_circles_circles_page__WEBPACK_IMPORTED_MODULE_3__["CirclesComponent"]
            },
            {
                path: 'categories',
                component: _pages_circle_categories_circle_categories_page__WEBPACK_IMPORTED_MODULE_4__["CircleCategoriesComponent"]
            },
            {
                path: 'circle',
                component: _pages_circle_open_circle_circle_open_circle_page__WEBPACK_IMPORTED_MODULE_5__["CircleOpenCircleComponent"]
            },
            {
                path: 'topic',
                children: [
                    {
                        path: '',
                        component: _pages_circle_open_topic_circle_open_topic_page__WEBPACK_IMPORTED_MODULE_6__["CircleOpenTopicComponent"]
                    },
                    {
                        path: 'create',
                        component: _pages_circle_create_topic_circle_create_topic_page__WEBPACK_IMPORTED_MODULE_7__["CircleCreateTopicComponent"]
                    }
                ]
            },
        ],
    }
];
var CircleRoutingModule = /** @class */ (function () {
    function CircleRoutingModule() {
    }
    CircleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CircleRoutingModule);
    return CircleRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/circle.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/circle.module.ts ***!
  \*********************************************************************/
/*! exports provided: CircleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleModule", function() { return CircleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/modules/forms */ "./src/app/shared/modules/forms.ts");
/* harmony import */ var _circle_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circle-routing.module */ "./src/app/modules/full-layout/modules/circle/circle-routing.module.ts");
/* harmony import */ var _components_circle_header_circle_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/circle-header/circle-header.component */ "./src/app/modules/full-layout/modules/circle/components/circle-header/circle-header.component.ts");
/* harmony import */ var _pages_circle_circle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/circle/circle.page */ "./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.ts");
/* harmony import */ var _pages_circles_circles_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/circles/circles.page */ "./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.ts");
/* harmony import */ var _pages_circle_categories_circle_categories_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/circle-categories/circle-categories.page */ "./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.ts");
/* harmony import */ var _pages_circle_open_circle_circle_open_circle_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/circle-open-circle/circle-open-circle.page */ "./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.ts");
/* harmony import */ var _pages_circle_open_topic_circle_open_topic_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/circle-open-topic/circle-open-topic.page */ "./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.ts");
/* harmony import */ var _pages_circle_create_topic_circle_create_topic_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/circle-create-topic/circle-create-topic.page */ "./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { AccountSidebarComponent } from './components/account-sidebar/account-sidebar.component';
// import { AccountHeaderPageComponent } from './components/account-header-page/account-header-page.component';
// import { AccountSidebarPageComponent } from './components/account-sidebar-page/account-sidebar-page.component';






var CircleModule = /** @class */ (function () {
    function CircleModule() {
    }
    CircleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _shared_modules_forms__WEBPACK_IMPORTED_MODULE_3__["FormsSharedModules"],
                _circle_routing_module__WEBPACK_IMPORTED_MODULE_4__["CircleRoutingModule"]
            ],
            declarations: [
                _components_circle_header_circle_header_component__WEBPACK_IMPORTED_MODULE_5__["CircleHeaderComponent"],
                // AccountSidebarComponent, 
                // AccountHeaderPageComponent, 
                // AccountSidebarPageComponent, 
                _pages_circle_circle_page__WEBPACK_IMPORTED_MODULE_6__["CircleComponent"],
                _pages_circles_circles_page__WEBPACK_IMPORTED_MODULE_7__["CirclesComponent"],
                _pages_circle_categories_circle_categories_page__WEBPACK_IMPORTED_MODULE_8__["CircleCategoriesComponent"],
                _pages_circle_open_circle_circle_open_circle_page__WEBPACK_IMPORTED_MODULE_9__["CircleOpenCircleComponent"],
                _pages_circle_open_topic_circle_open_topic_page__WEBPACK_IMPORTED_MODULE_10__["CircleOpenTopicComponent"],
                _pages_circle_create_topic_circle_create_topic_page__WEBPACK_IMPORTED_MODULE_11__["CircleCreateTopicComponent"]
            ]
        })
    ], CircleModule);
    return CircleModule;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/components/circle-header/circle-header.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/components/circle-header/circle-header.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\r\n\t<div class=\"content-bg-wrap bg-group\">\r\n\t\t<!-- <div class=\"content-bg bg-group\"></div> -->\r\n\t</div>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-8 m-auto col-md-8 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"main-header-content\">\r\n\t\t\t\t\t<h1>Welcome to the Forums!</h1>\r\n\t\t\t\t\t<p>Here in the forums you’ll be able to easily create and manage categories and topics to share with the community!\r\n\t\t\t\t\t\tWe included some of the most used topics, like music, comics, movies, and community, each one with a cool\r\n\t\t\t\t\t\tand customizable illustration so you can have fun with them!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<img class=\"img-bottom\" src=\"/assets/img/forums-bottom.png\" alt=\"friends\">\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/components/circle-header/circle-header.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/components/circle-header/circle-header.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/components/circle-header/circle-header.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/components/circle-header/circle-header.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CircleHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleHeaderComponent", function() { return CircleHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircleHeaderComponent = /** @class */ (function () {
    function CircleHeaderComponent() {
    }
    CircleHeaderComponent.prototype.ngOnInit = function () {
    };
    CircleHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circle-header',
            template: __webpack_require__(/*! ./circle-header.component.html */ "./src/app/modules/full-layout/modules/circle/components/circle-header/circle-header.component.html"),
            styles: [__webpack_require__(/*! ./circle-header.component.scss */ "./src/app/modules/full-layout/modules/circle/components/circle-header/circle-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CircleHeaderComponent);
    return CircleHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block responsive-flex\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<div class=\"h6 title\">YelloPlane Circles</div>\r\n\t\t\t\t\t<div class=\"align-right\">\r\n\t\t\t\t\t\t<form class=\"w-search\">\r\n\t\t\t\t\t\t\t<div class=\"form-group with-button\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Search the circles...\">\r\n\t\t\t\t\t\t\t\t<button>\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<button [routerLink]=\"['/circles/topic/create']\" class=\"btn btn-blue btn-md\">Create New Topic</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12\">\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<table class=\"forums-table\">\r\n\r\n\t\t\t\t\t<thead>\r\n\r\n\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t<th class=\"forum\">\r\n\t\t\t\t\t\t\tForum\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<th class=\"topics\">\r\n\t\t\t\t\t\t\tTopics\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<th class=\"posts\">\r\n\t\t\t\t\t\t\tPosts\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<th class=\"freshness\">\r\n\t\t\t\t\t\t\tFreshness\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t</thead>\r\n\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum7.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Comics</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">Talk about dinner parties, reunions and more!</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">11</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">36</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar40-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Mathilda Brinker</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">13 hours, 58 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum8.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Anime and Manga</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">All related to your favourite movies and tv shows!</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">25</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">74</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar76-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Dave Marinara</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">12 hours, 0 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr class=\"bg-smoke-light\">\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">This year’s ComixCon will have the best presentations</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar48-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Marina Valentine</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">24</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar72-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Nicholas Grissom</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">6 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">What do you think it’s the most powerfull character of all universes?</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar70-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Rachel Howlett</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<nav aria-label=\"Page navigation example\">\r\n\t\t\t\t\t\t\t\t<ul class=\"pagination pagination--small\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">196</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar79-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Jake Stevens</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">47 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr class=\"bg-smoke-light\">\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Cowboy Champloo will have a live action adaptation, yay or nay?</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar80-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Fred Summers</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">1</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar80-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Fred Summers</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">58 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">The Wonder cinematic universe keeps expanding!</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar53-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Bruce Peterson</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">15</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar52-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Green Goo Rock</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">1 hour, 49 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr class=\"bg-smoke-light\">\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">The Masked Crusader #56 will be released in August 2018</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar81-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Marc Roberts</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">27</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar59-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Diana Jameson</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 7 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Benjamin Nolan is the new Masked Crusader</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar64-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Sarah Hetfield</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">20</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar82-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Jenny Carter</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 33 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr class=\"bg-smoke-light\">\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Do you think there should be a cinematic universe reboot? [Poll]</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar52-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Green Goo Rock</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">46</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar51-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Nicholas Grissom</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">4 hours, 26 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Iron Alchemist japanese live action has mixed reviews</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/faved-page5.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Carol Summers</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">33</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/faved-page10.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Matt Simpson</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">5 hours, 58 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\r\n\t\t\t<nav aria-label=\"Page navigation example\">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\">\r\n\t\t\t\t\t<li class=\"page-item disabled\">\r\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\r\n\t\t\t\t\t<li class=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Featured Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">The new Goddess of War trailer was launched at E3!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 16 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">This year’s ComixCon will have the best presentations</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">14 hours, 36 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Here are the behind-the-scenes photos of “Vilords”</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">9 hours, 8 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Recent Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Summer is Coming! Picnic in the east boulevard park</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">26 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Kung Fighters released a new video, check it out here!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">44 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Boombox</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">What’s your favourite season?</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">59 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Who had the best presentation at this year’s E3? Rate them!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">1 hour, 3 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">Arcade Planet</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: CircleCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleCategoriesComponent", function() { return CircleCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircleCategoriesComponent = /** @class */ (function () {
    function CircleCategoriesComponent() {
    }
    CircleCategoriesComponent.prototype.ngOnInit = function () {
    };
    CircleCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circle-categories',
            template: __webpack_require__(/*! ./circle-categories.page.html */ "./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.html"),
            styles: [__webpack_require__(/*! ./circle-categories.page.scss */ "./src/app/modules/full-layout/modules/circle/pages/circle-categories/circle-categories.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CircleCategoriesComponent);
    return CircleCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n\t\t\t<div class=\"ui-block responsive-flex\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<div class=\"h6 title\">YelloPlane Circles</div>\r\n\t\t\t\t\t<form class=\"w-search\">\r\n\t\t\t\t\t\t<div class=\"form-group with-button\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Search the circles...\">\r\n\t\t\t\t\t\t\t<button>\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12\">\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title bg-blue\">\r\n\t\t\t\t\t<h6 class=\"title c-white\">Create a New Topic</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<form [formGroup]=\"createForm\" (ngSubmit)=\"create(createForm.value)\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Topic Title</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"title\" type=\"text\" placeholder=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Select Category</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"category\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"COMICS\">Comics</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"HORRORS\">Horrors</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Select Subcategory</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"category\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"ANIME&MANGA\">Anime & Manga</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"DEATHNOTE\">Death Note</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Topic Description</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"description\" rows=\"8\"></textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-secondary btn-lg full-width\">Cancel</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-blue btn-lg full-width\">Post Topic</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Featured Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Widget Featured Topics -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">The new Goddess of War trailer was launched at E3!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 16 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">This year’s ComixCon will have the best presentations</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">14 hours, 36 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Here are the behind-the-scenes photos of “Vilords”</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">9 hours, 8 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- ... end Widget Featured Topics -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Recent Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Widget Recent Topics -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Summer is Coming! Picnic in the east boulevard park</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">26 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Kung Fighters released a new video, check it out here!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">44 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Boombox</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">What’s your favourite season?</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">59 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Who had the best presentation at this year’s E3? Rate them!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">1 hour, 3 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">Arcade Planet</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- ... end Widget Recent Topics -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CircleCreateTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleCreateTopicComponent", function() { return CircleCreateTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CircleCreateTopicComponent = /** @class */ (function () {
    function CircleCreateTopicComponent(fb) {
        this.fb = fb;
    }
    CircleCreateTopicComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    CircleCreateTopicComponent.prototype.initForm = function () {
        this.createForm = this.fb.group({
            title: ['New York Comix Con is having the best panels this year!', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            subCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
        });
    };
    CircleCreateTopicComponent.prototype.create = function (value) {
    };
    CircleCreateTopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circle-create-topic',
            template: __webpack_require__(/*! ./circle-create-topic.page.html */ "./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.html"),
            styles: [__webpack_require__(/*! ./circle-create-topic.page.scss */ "./src/app/modules/full-layout/modules/circle/pages/circle-create-topic/circle-create-topic.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CircleCreateTopicComponent);
    return CircleCreateTopicComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block responsive-flex\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<div class=\"h6 title\">YelloPlane Circles</div>\r\n\t\t\t\t\t<div class=\"align-right\">\r\n\t\t\t\t\t\t<form class=\"w-search\">\r\n\t\t\t\t\t\t\t<div class=\"form-group with-button\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Search the circles...\">\r\n\t\t\t\t\t\t\t\t<button>\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<button [routerLink]=\"['/circles/topic/create']\" class=\"btn btn-blue btn-md\">Create New Topic</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12\">\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<table class=\"forums-table\">\r\n\r\n\t\t\t\t\t<thead>\r\n\r\n\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t<th class=\"forum\">\r\n\t\t\t\t\t\t\tForum\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<th class=\"topics\">\r\n\t\t\t\t\t\t\tTopics\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<th class=\"posts\">\r\n\t\t\t\t\t\t\tPosts\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<th class=\"freshness\">\r\n\t\t\t\t\t\t\tFreshness\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t</thead>\r\n\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum7.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Comics</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">Talk about dinner parties, reunions and more!</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">11</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">36</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar40-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Sadia Khan</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">13 hours, 58 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum8.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Anime and Manga</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">All related to your favourite movies and tv shows!</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">25</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">74</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar76-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Maryam Ahamd</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">12 hours, 0 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr class=\"bg-smoke-light\">\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/topic']\" class=\"h6 title\">This year’s ComixCon will have the best presentations</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar48-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Mahira Khan</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">24</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar72-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Haider Ali</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">6 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/topic']\" class=\"h6 title\">What do you think it’s the most powerfull character of all universes?</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar70-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Maryam Ahamd</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">196</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar79-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Waqas Ali</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">47 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr class=\"bg-smoke-light\">\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/topic']\" class=\"h6 title\">Cowboy Champloo will have a live action adaptation, yay or nay?</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar80-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Noor Ali</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">1</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar80-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Noor Ali</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">58 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/topic']\" class=\"h6 title\">The Wonder cinematic universe keeps expanding!</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar53-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Naeem Khan</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">15</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar52-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Rock Band</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">1 hour, 49 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr class=\"bg-smoke-light\">\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/topic']\" class=\"h6 title\">The Masked Crusader #56 will be released in August 2018</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar81-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Nadeem Akram</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">27</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar59-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Humaira Chana</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 7 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/topic']\" class=\"h6 title\">Benjamin Nolan is the new Masked Crusader</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar64-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Neelam Muneer</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">20</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar82-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Fawad Ahmad</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 33 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr class=\"bg-smoke-light\">\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/topic']\" class=\"h6 title\">Do you think there should be a cinematic universe reboot? [Poll]</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar52-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Rock Band</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">46</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar51-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Shadab Khan</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">4 hours, 26 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/topic']\" class=\"h6 title\">Iron Alchemist japanese live action has mixed reviews</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"author-started\">\r\n\t\t\t\t\t\t\t\t\t<span>Started by:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/faved-page5.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Zainab Abbas</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">33</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/faved-page10.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Ikhlaq Hassan</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">5 hours, 58 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\r\n\t\t\t<nav aria-label=\"Page navigation example\">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\">\r\n\t\t\t\t\t<li class=\"page-item disabled\">\r\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\r\n\t\t\t\t\t<li class=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Featured Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">The new Goddess of War trailer was launched at E3!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 16 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">This year’s ComixCon will have the best presentations</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">14 hours, 36 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Here are the behind-the-scenes photos of “Vilords”</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">9 hours, 8 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Recent Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Summer is Coming! Picnic in the east boulevard park</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">26 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Kung Fighters released a new video, check it out here!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">44 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Boombox</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">What’s your favourite season?</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">59 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Who had the best presentation at this year’s E3? Rate them!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">1 hour, 3 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">Arcade Planet</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.ts ***!
  \********************************************************************************************************/
/*! exports provided: CircleOpenCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleOpenCircleComponent", function() { return CircleOpenCircleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircleOpenCircleComponent = /** @class */ (function () {
    function CircleOpenCircleComponent() {
    }
    CircleOpenCircleComponent.prototype.ngOnInit = function () {
    };
    CircleOpenCircleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circle-open-circle',
            template: __webpack_require__(/*! ./circle-open-circle.page.html */ "./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.html"),
            styles: [__webpack_require__(/*! ./circle-open-circle.page.scss */ "./src/app/modules/full-layout/modules/circle/pages/circle-open-circle/circle-open-circle.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CircleOpenCircleComponent);
    return CircleOpenCircleComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block responsive-flex\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<div class=\"h6 title\">The Robot’s Dungeon</div>\r\n\t\t\t\t\t<div class=\"align-right\">\r\n\t\t\t\t\t\t<form class=\"w-search\">\r\n\t\t\t\t\t\t\t<div class=\"form-group with-button\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Search the circles...\">\r\n\t\t\t\t\t\t\t\t<button>\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<button [routerLink]=\"['/circles/topic/create']\" class=\"btn btn-blue btn-md\">Create New Topic</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12\">\r\n\r\n\t\t\t<div class=\"ui-block responsive-flex\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<i class=\"icon fa fa-star c-yellow\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t<div class=\"h6 title\">This year’s ComixCon will have the best presentations</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<table class=\"open-topic-table\">\r\n\r\n\t\t\t\t\t<thead>\r\n\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th class=\"author\">\r\n\t\t\t\t\t\t\t\tAuthor\r\n\t\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t\t<th class=\"posts\">\r\n\t\t\t\t\t\t\t\tPost\r\n\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t</thead>\r\n\r\n\t\t\t\t\t<tbody>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"topic-date\" colspan=\"2\">\r\n\t\t\t\t\t\t\tMarch 24th, 2016 at 6:42 pm\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply-topic\">Reply</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"author\">\r\n\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar2.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"author-content\">\r\n\t\t\t\t\t\t\t\t<a href=\"02-ProfilePage.html\" class=\"h6 author-name\">Mahira Khan</a>\r\n\t\t\t\t\t\t\t\t<div class=\"country\">Long Island, NY</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>Duis aute irure dolor in reprehenderit.</p>\r\n\t\t\t\t\t\t\t<p>Thanks!</p>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"topic-date\" colspan=\"2\">\r\n\t\t\t\t\t\t\tMarch 24th, 2016 at 8:05 pm\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply-topic\">Reply</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"author\">\r\n\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar3.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"author-content\">\r\n\t\t\t\t\t\t\t\t<a href=\"02-ProfilePage.html\" class=\"h6 author-name\">Maryam Ahmad</a>\r\n\t\t\t\t\t\t\t\t<div class=\"country\">Los Angeles, CA</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<p>Sed ut perspiciatis unde omnis iste natus error.</p>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"topic-date\" colspan=\"2\">\r\n\t\t\t\t\t\t\tMarch 24th, 2016 at 8:23 pm\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply-topic\">Reply</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"author\">\r\n\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar1.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"author-content\">\r\n\t\t\t\t\t\t\t\t<a href=\"02-ProfilePage.html\" class=\"h6 author-name\">Nadeem Akram</a>\r\n\t\t\t\t\t\t\t\t<div class=\"country\">San Francisco, CA</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>\r\n\t\t\t\t\t\t\t<p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"topic-date\" colspan=\"2\">\r\n\t\t\t\t\t\t\tMarch 24th, 2016 at 9:29 pm\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply-topic\">Reply</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"author\">\r\n\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar7.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"author-content\">\r\n\t\t\t\t\t\t\t\t<a href=\"02-ProfilePage.html\" class=\"h6 author-name\">Neelam Muneer</a>\r\n\t\t\t\t\t\t\t\t<div class=\"country\">Los Angeles, CA</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t\t\t\t\t\t\t<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"topic-date\" colspan=\"2\">\r\n\t\t\t\t\t\t\tMarch 24th, 2016 at 10:57 pm\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply-topic\">Reply</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"author\">\r\n\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar4.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"author-content\">\r\n\t\t\t\t\t\t\t\t<a href=\"02-ProfilePage.html\" class=\"h6 author-name\">Haider Ali</a>\r\n\t\t\t\t\t\t\t\t<div class=\"country\">Austin, TX</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<p>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>\r\n\t\t\t\t\t\t\t<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\r\n\t\t\t<nav aria-label=\"Page navigation example\">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\">\r\n\t\t\t\t\t<li class=\"page-item disabled\">\r\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\r\n\t\t\t\t\t<li class=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Featured Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">The new Goddess of War trailer was launched at E3!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 16 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">This year’s ComixCon will have the best presentations</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">14 hours, 36 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Here are the behind-the-scenes photos of “Vilords”</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">9 hours, 8 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Recent Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Summer is Coming! Picnic in the east boulevard park</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">26 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Kung Fighters released a new video, check it out here!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">44 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Boombox</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">What’s your favourite season?</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">59 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Who had the best presentation at this year’s E3? Rate them!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">1 hour, 3 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">Arcade Planet</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: CircleOpenTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleOpenTopicComponent", function() { return CircleOpenTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircleOpenTopicComponent = /** @class */ (function () {
    function CircleOpenTopicComponent() {
    }
    CircleOpenTopicComponent.prototype.ngOnInit = function () {
    };
    CircleOpenTopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circle-open-topic',
            template: __webpack_require__(/*! ./circle-open-topic.page.html */ "./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.html"),
            styles: [__webpack_require__(/*! ./circle-open-topic.page.scss */ "./src/app/modules/full-layout/modules/circle/pages/circle-open-topic/circle-open-topic.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CircleOpenTopicComponent);
    return CircleOpenTopicComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-spacer header-spacer-small\"></div>\r\n\r\n<app-circle-header></app-circle-header>\r\n<!-- <app-account-sidebar></app-account-sidebar> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.ts ***!
  \********************************************************************************/
/*! exports provided: CircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleComponent", function() { return CircleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircleComponent = /** @class */ (function () {
    function CircleComponent() {
    }
    CircleComponent.prototype.ngOnInit = function () {
    };
    CircleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circle',
            template: __webpack_require__(/*! ./circle.page.html */ "./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.html"),
            styles: [__webpack_require__(/*! ./circle.page.scss */ "./src/app/modules/full-layout/modules/circle/pages/circle/circle.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CircleComponent);
    return CircleComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block responsive-flex\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<div class=\"h6 title\">YelloPlane Circles</div>\r\n\t\t\t\t\t<form class=\"w-search\">\r\n\t\t\t\t\t\t<div class=\"form-group with-button\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Search the circles...\">\r\n\t\t\t\t\t\t\t<button>\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12\">\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<table class=\"forums-table\">\r\n\r\n\t\t\t\t\t<thead>\r\n\r\n\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t<th class=\"forum\">\r\n\t\t\t\t\t\t\tForum\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<th class=\"topics\">\r\n\t\t\t\t\t\t\tTopics\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<th class=\"posts\">\r\n\t\t\t\t\t\t\tPosts\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<th class=\"freshness\">\r\n\t\t\t\t\t\t\tFreshness\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t</thead>\r\n\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum1.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/circle']\" class=\"h6 title\">The Community</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">Talk about dinner parties, reunions and more!</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">3</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">10</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Maryam Ahmad</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">13 hours, 58 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum2.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/circle']\" class=\"h6 title\">Video Shack</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">All related to your favourite movies and tv shows!</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">14</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">68</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar51-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Wakas Ali</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 7 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum3.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/circle']\" class=\"h6 title\">The Robot’s Dungeon</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">Comics, Anime and all your geeky needs!</p>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"sub-forums\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6\">Comics</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6\">Anime & Manga</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">58</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">107</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar48-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">mahira Khan</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">42 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum4.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/circle']\" class=\"h6 title\">Arcade Planet</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">The latest about all gaming news and events!</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">32</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">49</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar39-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Haider Ali</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">1 hour, 20 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum5.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/circle']\" class=\"h6 title\">The Boombox</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">Talk about the best music in the world!</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">60</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">129</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar52-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Rock Band</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">5 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"forum\">\r\n\t\t\t\t\t\t\t<div class=\"forum-item\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/forum6.png\" alt=\"forum\">\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles/circle']\" class=\"h6 title\">Around the World</a>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text\">Start topics in your native language and have fun!</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"topics\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">12</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"posts\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 count\">18</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"freshness\">\r\n\t\t\t\t\t\t\t<div class=\"author-freshness\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar40-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Sadia Khan</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">4 months, 12 hours ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Featured Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">The new Goddess of War trailer was launched at E3!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">2 hours, 16 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">This year’s ComixCon will have the best presentations</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">14 hours, 36 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"icon fa fa-star\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Here are the behind-the-scenes photos of “Vilords”</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">9 hours, 8 minutes ago</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Recent Topics</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-featured-topics\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Summer is Coming! Picnic in the east boulevard park</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">26 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Kung Fighters released a new video, check it out here!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">44 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Boombox</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">What’s your favourite season?</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">59 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">The Community</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Who had the best presentation at this year’s E3? Rate them!</a>\r\n\t\t\t\t\t\t\t\t<time class=\"entry-date updated\" datetime=\"2017-06-24T18:18\">1 hour, 3 minutes ago</time>\r\n\t\t\t\t\t\t\t\t<div class=\"forums\">Arcade Planet</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.ts ***!
  \**********************************************************************************/
/*! exports provided: CirclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirclesComponent", function() { return CirclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CirclesComponent = /** @class */ (function () {
    function CirclesComponent() {
    }
    CirclesComponent.prototype.ngOnInit = function () {
    };
    CirclesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circles-page',
            template: __webpack_require__(/*! ./circles.page.html */ "./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.html"),
            styles: [__webpack_require__(/*! ./circles.page.scss */ "./src/app/modules/full-layout/modules/circle/pages/circles/circles.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CirclesComponent);
    return CirclesComponent;
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
//# sourceMappingURL=modules-circle-circle-module.js.map