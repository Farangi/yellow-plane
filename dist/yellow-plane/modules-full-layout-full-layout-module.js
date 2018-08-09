(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-full-layout-full-layout-module"],{

/***/ "./src/app/modules/full-layout/components/full-layout/full-layout.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/full-layout/components/full-layout/full-layout.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\r\n<app-chat-sidebar></app-chat-sidebar>\r\n<app-header [username]=\"user.username\" [displayName]=\"displayName\"></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/components/full-layout/full-layout.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/full-layout/components/full-layout/full-layout.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/components/full-layout/full-layout.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/full-layout/components/full-layout/full-layout.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
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


var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(route) {
        this.route = route;
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            _this.user = routeData['data'];
            _this.displayName = _this.user.fname + ' ' + _this.user.lname;
        });
    };
    FullLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/modules/full-layout/components/full-layout/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/modules/full-layout/components/full-layout/full-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/full-layout-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/full-layout/full-layout-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FullLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutRoutingModule", function() { return FullLayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/full-layout/full-layout.component */ "./src/app/modules/full-layout/components/full-layout/full-layout.component.ts");
/* harmony import */ var _shared_resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/resolvers/user.resolver */ "./src/app/shared/resolvers/user.resolver.ts");
/* harmony import */ var _shared_guards_profile_gaurd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/guards/profile.gaurd */ "./src/app/shared/guards/profile.gaurd.ts");
/* harmony import */ var _shared_guards_page_gaurd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/guards/page.gaurd */ "./src/app/shared/guards/page.gaurd.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _components_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"],
        resolve: { data: _shared_resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] },
        children: [
            {
                path: 'home',
                loadChildren: './modules/home/home.module#HomeModule'
            },
            {
                path: 'profile',
                loadChildren: './modules/profile/profile.module#ProfileModule',
                canActivate: [_shared_guards_profile_gaurd__WEBPACK_IMPORTED_MODULE_4__["ProfileGuard"]]
            },
            {
                path: 'page',
                loadChildren: './modules/page/page.module#PageModule',
                canActivate: [_shared_guards_page_gaurd__WEBPACK_IMPORTED_MODULE_5__["PageGuard"]]
            },
            {
                path: 'account',
                loadChildren: './modules/account/account.module#AccountModule'
            },
            {
                path: 'circles',
                loadChildren: './modules/circle/circle.module#CircleModule'
            },
        ]
    }
];
var FullLayoutRoutingModule = /** @class */ (function () {
    function FullLayoutRoutingModule() {
    }
    FullLayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FullLayoutRoutingModule);
    return FullLayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/full-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/full-layout/full-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: FullLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutModule", function() { return FullLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _full_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-layout-routing.module */ "./src/app/modules/full-layout/full-layout-routing.module.ts");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/directives.module */ "./src/app/shared/directives/directives.module.ts");
/* harmony import */ var _shared_modules_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/modules/scrollbar */ "./src/app/shared/modules/scrollbar.ts");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_components_chat_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/chat-sidebar/chat-sidebar.component */ "./src/app/shared/components/chat-sidebar/chat-sidebar.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/full-layout/full-layout.component */ "./src/app/modules/full-layout/components/full-layout/full-layout.component.ts");
/* harmony import */ var _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/posts.service */ "./src/app/shared/services/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { PhotoPostViewerContentComponent } from '../../shared/components/photo-post-viewer-content/photo-post-viewer-content.component';
//import { PhotoPostViewerComponent } from '../../shared/components/photo-post-viewer/photo-post-viewer.component';
var FullLayoutModule = /** @class */ (function () {
    function FullLayoutModule() {
    }
    FullLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _full_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["FullLayoutRoutingModule"],
                _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"],
                _shared_modules_scrollbar__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"]
            ],
            declarations: [
                _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _shared_components_chat_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["ChatSidebarComponent"],
                _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_9__["FullLayoutComponent"],
            ],
            providers: [_shared_services_posts_service__WEBPACK_IMPORTED_MODULE_10__["PostService"]]
        })
    ], FullLayoutModule);
    return FullLayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/components/chat-sidebar/chat-sidebar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/chat-sidebar/chat-sidebar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed Sidebar Right -->\r\n\r\n<div class=\"fixed-sidebar right\">\r\n\t<div class=\"fixed-sidebar-right sidebar--small\" id=\"sidebar-right\">\r\n\r\n\t\t<perfect-scrollbar>\r\n\t\t\t<ul class=\"chat-users\">\r\n\t\t\t\t<li class=\"inline-items js-chat-open\" *ngFor=\"let chat of chats\">\r\n\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t<img alt=\"author\" [src]=\"chat.img\" class=\"avatar\">\r\n\t\t\t\t\t\t<span class=\"icon-status\" [ngClass]=\"chat.status\"></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</perfect-scrollbar>\r\n\r\n\t\t<div class=\"search-friend inline-items\">\r\n\t\t\t<a href clickStopPropagation class=\"js-sidebar-open\">\r\n\t\t\t\t<svg class=\"olymp-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-menu-icon\"></use></svg>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\r\n\t\t<a [routerLink]=\"['/account/profile/messages']\" class=\"olympus-chat inline-items\">\r\n\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t</a>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"fixed-sidebar-right sidebar--large\" id=\"sidebar-right-1\">\r\n\r\n\t\t<perfect-scrollbar>\r\n\r\n\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t<a href clickStopPropagation class=\"title\">Friends</a>\r\n\t\t\t\t<a [routerLink]=\"['/account/profile']\">Settings</a>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ul class=\"chat-users\">\r\n\t\t\t\t<li class=\"inline-items js-chat-open\" *ngFor=\"let chat of chats\">\r\n\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t<img alt=\"author\" [src]=\"chat.img\" class=\"avatar\">\r\n\t\t\t\t\t\t<span class=\"icon-status\" [ngClass]=\"chat.status\"></span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"author-status\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"h6 author-name\">{{chat.name}}</a>\r\n\t\t\t\t\t\t<span class=\"status\">{{chat.status | uppercase}}</span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\r\n\t\t\t\t\t\t<ul class=\"more-icons\">\r\n\t\t\t\t\t\t\t<li placement=\"auto\" ngbTooltip=\"START CONVERSATION\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\">\r\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\">\r\n\t\t\t\t\t\t\t\t\t</use>\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li placement=\"auto\" ngbTooltip=\"ADD TO CONVERSATION\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-add-to-conversation-icon\">\r\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"/assets/icons/icons.svg#olymp-add-to-conversation-icon\">\r\n\t\t\t\t\t\t\t\t\t</use>\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li placement=\"auto\" ngbTooltip=\"BLOCK FROM CHAT\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-block-from-chat-icon\">\r\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"/assets/icons/icons.svg#olymp-block-from-chat-icon\">\r\n\t\t\t\t\t\t\t\t\t</use>\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</li>\r\n\r\n\t\t\t</ul>\r\n\r\n\t\t</perfect-scrollbar>\r\n\r\n\t\t<div class=\"search-friend inline-items\">\r\n\t\t\t<form class=\"form-group\">\r\n\t\t\t\t<input class=\"form-control\" placeholder=\"Search Friends...\" value=\"\" type=\"text\">\r\n\t\t\t</form>\r\n\r\n\t\t\t<a [routerLink]=\"['/account/profile']\" class=\"settings\">\r\n\t\t\t\t<svg class=\"olymp-settings-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-settings-icon\"></use></svg>\r\n\t\t\t</a>\r\n\r\n\t\t\t<a href clickStopPropagation class=\"js-sidebar-open\">\r\n\t\t\t\t<svg class=\"olymp-close-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-close-icon\"></use></svg>\r\n\t\t\t</a>\r\n\r\n\r\n\t\t</div>\r\n\r\n\t\t<a [routerLink]=\"['/account/profile/messages']\" class=\"olympus-chat inline-items\">\r\n\r\n\t\t\t<h6 class=\"olympus-chat-title\">YELLOPLANE CHAT</h6>\r\n\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t</a>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Fixed Sidebar Right -->\r\n\r\n<!-- Fixed Sidebar Right -->\r\n\r\n<div class=\"fixed-sidebar right fixed-sidebar-responsive\">\r\n\r\n\t<div class=\"fixed-sidebar-right sidebar--small\" id=\"sidebar-right-responsive\">\r\n\r\n\t\t<a [routerLink]=\"['/account/profile/messages']\" class=\"olympus-chat inline-items\">\r\n\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t</a>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n<!-- ... end Fixed Sidebar Right -->"

/***/ }),

/***/ "./src/app/shared/components/chat-sidebar/chat-sidebar.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/chat-sidebar/chat-sidebar.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/chat-sidebar/chat-sidebar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/chat-sidebar/chat-sidebar.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChatSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSidebarComponent", function() { return ChatSidebarComponent; });
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

var ChatSidebarComponent = /** @class */ (function () {
    function ChatSidebarComponent() {
        this.chats = [];
    }
    ChatSidebarComponent.prototype.ngOnInit = function () {
        this.getChats();
    };
    ChatSidebarComponent.prototype.getChats = function () {
        this.chats.push({ img: '/assets/img/avatar67-sm.jpg', name: 'Maryam Ali', status: 'online' });
        this.chats.push({ img: '/assets/img/avatar62-sm.jpg', name: 'Neelam Muneer', status: 'status-invisible' });
        this.chats.push({ img: '/assets/img/avatar68-sm.jpg', name: 'Haider Ali', status: 'online' });
        this.chats.push({ img: '/assets/img/avatar69-sm.jpg', name: 'Neem Akram', status: 'away' });
        this.chats.push({ img: '/assets/img/avatar70-sm.jpg', name: 'Huma Khan', status: 'online' });
        this.chats.push({ img: '/assets/img/avatar71-sm.jpg', name: 'Ikhlaq Ahmad', status: 'away' });
        this.chats.push({ img: '/assets/img/avatar72-sm.jpg', name: 'Zeeshan Khan', status: 'status-invisible' });
        this.chats.push({ img: '/assets/img/avatar63-sm.jpg', name: 'Mustafa Ali', status: 'away' });
        this.chats.push({ img: '/assets/img/avatar60-sm.jpg', name: 'Waqar Ahsan', status: 'online' });
        this.chats.push({ img: '/assets/img/avatar56-sm.jpg', name: 'Umar Kamboh', status: 'disconnected' });
    };
    ChatSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-sidebar',
            template: __webpack_require__(/*! ./chat-sidebar.component.html */ "./src/app/shared/components/chat-sidebar/chat-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./chat-sidebar.component.scss */ "./src/app/shared/components/chat-sidebar/chat-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatSidebarComponent);
    return ChatSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n\r\n<header class=\"header\" id=\"site-header\">\r\n\r\n\t<div class=\"page-title\">\r\n\t\t<h6>YELLOPLANE</h6>\r\n\t</div>\r\n\r\n\t<div class=\"header-content-wrapper\">\r\n\t\t<form class=\"search-bar w-search notification-list friend-requests\">\r\n\t\t\t<div class=\"form-group with-button\">\r\n\t\t\t\t<input class=\"form-control js-user-search\" placeholder=\"Search here people or pages...\" type=\"text\">\r\n\t\t\t\t<button>\r\n\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\r\n\t\t<a href=\"#\" class=\"link-find-friend\">Find Friends</a>\r\n\r\n\t\t<div class=\"control-block\">\r\n\r\n\t\t\t<div class=\"control-icon more has-items\">\r\n\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t<div class=\"label-avatar bg-blue\">4</div>\r\n\r\n\t\t\t\t<div class=\"more-dropdown more-with-triangle triangle-top-center\">\r\n\t\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t\t<h6 class=\"title\">FRIEND REQUESTS</h6>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/account/profile']\">Settings</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<perfect-scrollbar>\r\n\t\t\t\t\t\t<ul class=\"notification-list friend-requests\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar55-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Maya Ali</a>\r\n\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Mutual Friend: Maryam Khan</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-add without-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request request-del\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-minus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar56-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Naeem Akram</a>\r\n\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">4 Friends in Common</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-add without-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request request-del\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-minus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li class=\"accepted\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar57-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\tYou and <a href=\"#\" class=\"h6 notification-friend\">Huma Ahmad</a> just became friends. Write on <a href=\"#\" class=\"notification-link\">her wall</a>.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar58-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Stagg Clothing</a>\r\n\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">9 Friends in Common</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-add without-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request request-del\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-minus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</perfect-scrollbar>\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"view-all bg-blue\">Check all your Friend Requests</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"control-icon more has-items\">\r\n\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t<div class=\"label-avatar bg-purple\">4</div>\r\n\r\n\t\t\t\t<div class=\"more-dropdown more-with-triangle triangle-top-center\">\r\n\t\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t\t<h6 class=\"title\">Chat / Messages</h6>\r\n\t\t\t\t\t\t<a href clickStopPropagation>Mark all as read</a>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/account/profile']\">Settings</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<perfect-scrollbar>\r\n\t\t\t\t\t\t<ul class=\"notification-list chat-message\">\r\n\t\t\t\t\t\t\t<li class=\"message-unread\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar59-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Maya Ali</a>\r\n\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hi Hassan! It’s Maya, I just wanted to let you know that we have to reschedule...</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar60-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Haider Ali</a>\r\n\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Great, I’ll see you tomorrow!.</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar61-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Maryam Khan</a>\r\n\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">We’ll have to check that at the office and see if the client is on board with...</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 9:56pm</time></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li class=\"chat-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar11-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar12-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar13-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">You, Ali, khan &amp; Jet +3</a>\r\n\t\t\t\t\t\t\t\t\t<span class=\"last-message-author\">Ali:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Yeah! Seems fine by me!</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 16th at 10:23am</time></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</perfect-scrollbar>\r\n\r\n\t\t\t\t\t<a [routerLink]=\"['/account/profile/messages']\" class=\"view-all bg-purple\">View All Messages</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"control-icon more has-items\">\r\n\t\t\t\t<svg class=\"olymp-thunder-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-thunder-icon\"></use></svg>\r\n\t\t\t\t<div class=\"label-avatar bg-primary\">5</div>\r\n\r\n\t\t\t\t<div class=\"more-dropdown more-with-triangle triangle-top-center\">\r\n\t\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t\t<h6 class=\"title\">Notifications</h6>\r\n\t\t\t\t\t\t<a href=\"#\">Mark all as read</a>\r\n\t\t\t\t\t\t<a href=\"#\">Settings</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<perfect-scrollbar>\r\n\t\t\t\t\t\t<ul class=\"notification-list\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar62-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<div><a href=\"#\" class=\"h6 notification-friend\">Mahira Khan</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li class=\"un-read\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar63-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<div>You and <a href=\"#\" class=\"h6 notification-friend\">Jahanzaib Ahmad</a> just became friends. Write on <a href=\"#\" class=\"notification-link\">his wall</a>.</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">9 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li class=\"with-comment-photo\">\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar64-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<div><a href=\"#\" class=\"h6 notification-friend\">Huma Khan</a> commented on your <a href=\"#\" class=\"notification-link\">photo</a>.</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 5:32am</time></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"comment-photo\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/comment-photo1.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t\t<span>“She looks incredible in that outfit! We should see each...”</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar65-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<div><a href=\"#\" class=\"h6 notification-friend\">Rock Band</a> invited you to attend to his event Goo in <a href=\"#\" class=\"notification-link\">Gotham Bar</a>.</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 5th at 6:43pm</time></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar66-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t<div><a href=\"#\" class=\"h6 notification-friend\">Ahmad Nouman</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 2nd at 8:29pm</time></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</perfect-scrollbar>\r\n\r\n\t\t\t\t\t<a [routerLink]=\"['/account/profile/notifications']\" class=\"view-all bg-primary\">View All Notifications</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"author-page author vcard inline-items more\">\r\n\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t<img alt=\"author\" src=\"/assets/img/author-page.jpg\" class=\"avatar\">\r\n\t\t\t\t\t<span class=\"icon-status online\"></span>\r\n\t\t\t\t\t<div class=\"more-dropdown more-with-triangle\">\r\n\t\t\t\t\t\t<perfect-scrollbar>\r\n\t\t\t\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t\t\t\t<h6 class=\"title\">Your Account</h6>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"account-settings\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile',username]\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-star-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-star-icon\"></use></svg>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span>Profile</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/profile']\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-menu-icon\"></use></svg>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span>Profile Settings</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/page']\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-star-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-star-icon\"></use></svg>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span>Page</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/page']\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-menu-icon\"></use></svg>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span>Page Settings</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/circles']\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-badge-icon\"></use></svg>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span>Circles</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"logout()\" href>\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-logout-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-logout-icon\"></use></svg>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span>Log Out</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t\t\t\t<h6 class=\"title\">Chat Settings</h6>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"chat-settings\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-status online\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span>Online</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-status away\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span>Away</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-status disconected\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span>Disconnected</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-status status-invisible\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span>Invisible</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t\t\t\t<h6 class=\"title\">About YelloPost</h6>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Terms and Conditions</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<span>FAQs</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Careers</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Contact</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</perfect-scrollbar>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<a [routerLink]=\"['/profile', username]\" class=\"author-name fn\">\r\n\t\t\t\t\t<div class=\"author-title\">\r\n\t\t\t\t\t\t{{username}} <svg class=\"olymp-dropdown-arrow-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-dropdown-arrow-icon\"></use></svg>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"author-subtitle\">{{displayName}}</span>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n</header>\r\n\r\n<!-- ... end Header -->\r\n\r\n\r\n<!-- Responsive Header -->\r\n\r\n<header class=\"header header-responsive\" id=\"site-header-responsive\">\r\n\r\n\t<div class=\"header-content-wrapper\">\r\n\t\t<ul class=\"nav nav-tabs mobile-app-tabs\" role=\"tablist\">\r\n\r\n\t\t\t<!-- <li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link hidden-tab\" data-toggle=\"tab\" role=\"tab\">\r\n\t\t\t\t\tabc\r\n\t\t\t\t</a>\r\n\t\t\t</li> -->\r\n\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link mobile-tab\" data-toggle=\"tab\" data-target=\"#request\" role=\"tab\" (click)=\"selectTab('request')\">\r\n\t\t\t\t\t<div class=\"control-icon has-items\">\r\n\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t<div class=\"label-avatar bg-blue\">4</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#chat\" role=\"tab\" (click)=\"selectTab('chat')\">\r\n\t\t\t\t\t<div class=\"control-icon has-items\">\r\n\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t<div class=\"label-avatar bg-purple\">4</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#notification\" (click)=\"selectTab('notification')\">\r\n\t\t\t\t\t<div class=\"control-icon has-items\">\r\n\t\t\t\t\t\t<svg class=\"olymp-thunder-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-thunder-icon\"></use></svg>\r\n\t\t\t\t\t\t<div class=\"label-avatar bg-primary\">5</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" href=\"#search\" (click)=\"selectTab('search')\">\r\n\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t<svg class=\"olymp-close-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-close-icon\"></use></svg>\r\n\t\t\t\t</a>\r\n\t\t\t\t<!-- <a class=\"nav-link collapsed\" data-toggle=\"collapse\" data-target=\"#search\" aria-expanded=\"false\">\r\n\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t<svg class=\"olymp-close-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-close-icon\"></use></svg>\r\n\t\t\t\t</a> -->\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\r\n\t<!-- Tab panes -->\r\n\t<div class=\"tab-content tab-content-responsive\">\r\n\t\t<div class=\"tab-pane\" id=\"request\" role=\"tabpanel\" [ngClass]=\"{'active': selectedTab === 'request'}\">\r\n\r\n\t\t\t<div class=\"mCustomScrollbar\" data-mcs-theme=\"dark\">\r\n\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t<h6 class=\"title\">FRIEND REQUESTS</h6>\r\n\t\t\t\t\t<a [routerLink]=\"['/account/profile']\">Settings</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"notification-list friend-requests\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar55-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Tamara Romanoff</a>\r\n\t\t\t\t\t\t\t<span class=\"chat-message-item\">Mutual Friend: Sarah Hetfield</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-add without-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request request-del\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-minus\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar56-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Tony Stevens</a>\r\n\t\t\t\t\t\t\t<span class=\"chat-message-item\">4 Friends in Common</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-add without-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request request-del\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-minus\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"accepted\">\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar57-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\tYou and <a href=\"#\" class=\"h6 notification-friend\">Mary Jane Stark</a> just became friends. Write on <a href=\"#\" class=\"notification-link\">her wall</a>.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar58-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Stagg Clothing</a>\r\n\t\t\t\t\t\t\t<span class=\"chat-message-item\">9 Friends in Common</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-add without-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request request-del\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-minus\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<a href=\"#\" class=\"view-all bg-blue\">Check all your Friend Requests</a>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"tab-pane \" id=\"chat\" role=\"tabpanel\" [ngClass]=\"{'active': selectedTab === 'chat'}\">\r\n\r\n\t\t\t<div class=\"mCustomScrollbar\" data-mcs-theme=\"dark\">\r\n\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t<h6 class=\"title\">Chat / Messages</h6>\r\n\t\t\t\t\t<a href clickStopPropagation>Mark all as read</a>\r\n\t\t\t\t\t<a [routerLink]=\"['/account/profile']\">Settings</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<ul class=\"notification-list chat-message\">\r\n\t\t\t\t\t<li class=\"message-unread\">\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar59-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Diana Jameson</a>\r\n\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar60-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Jake Parker</a>\r\n\t\t\t\t\t\t\t<span class=\"chat-message-item\">Great, I’ll see you tomorrow!.</span>\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar61-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Elaine Dreyfuss</a>\r\n\t\t\t\t\t\t\t<span class=\"chat-message-item\">We’ll have to check that at the office and see if the client is on board with...</span>\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 9:56pm</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"chat-group\">\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar11-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar12-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar13-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">You, Faye, Ed &amp; Jet +3</a>\r\n\t\t\t\t\t\t\t<span class=\"last-message-author\">Ed:</span>\r\n\t\t\t\t\t\t\t<span class=\"chat-message-item\">Yeah! Seems fine by me!</span>\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 16th at 10:23am</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<a [routerLink]=\"['/account/profile/messages']\" class=\"view-all bg-purple\">View All Messages</a>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"tab-pane \" id=\"notification\" role=\"tabpanel\" [ngClass]=\"{'active': selectedTab === 'notification'}\">\r\n\r\n\t\t\t<div class=\"mCustomScrollbar\" data-mcs-theme=\"dark\">\r\n\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t<h6 class=\"title\">Notifications</h6>\r\n\t\t\t\t\t<a href=\"#\">Mark all as read</a>\r\n\t\t\t\t\t<a href=\"#\">Settings</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<ul class=\"notification-list\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar62-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<div><a href=\"#\" class=\"h6 notification-friend\">Mahira khan</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"un-read\">\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar63-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<div>You and <a href=\"#\" class=\"h6 notification-friend\">Jahanzaib Ahmad</a> just became friends. Write on <a href=\"#\" class=\"notification-link\">his wall</a>.</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">9 hours ago</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"with-comment-photo\">\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar64-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<div><a href=\"#\" class=\"h6 notification-friend\">Huma Khan</a> commented on your <a href=\"#\" class=\"notification-link\">photo</a>.</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 5:32am</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"comment-photo\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/comment-photo1.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t<span>“She looks incredible in that outfit! We should see each...”</span>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar65-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<div><a href=\"#\" class=\"h6 notification-friend\">Rock Band</a> invited you to attend to his event Goo in <a href=\"#\" class=\"notification-link\">Gotham Bar</a>.</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 5th at 6:43pm</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar66-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<div><a href=\"#\" class=\"h6 notification-friend\">Ahmad Nouman</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 2nd at 8:29pm</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<a [routerLink]=\"['/account/profile/notifications']\" class=\"view-all bg-primary\">View All Notifications</a>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"tab-pane\" id=\"search\" role=\"tabpanel\" [ngClass]=\"{'active': selectedTab === 'search'}\">\r\n\t\t\t<form class=\"search-bar w-search notification-list friend-requests\">\r\n\t\t\t\t<div class=\"form-group with-button\">\r\n\t\t\t\t\t<input class=\"form-control js-user-search\" placeholder=\"Search here people or pages...\" type=\"text\">\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<!-- <div class=\"tab-pane \" id=\"search\" class=\"collapse\">\r\n\t\t\t<form class=\"search-bar w-search notification-list friend-requests\">\r\n\t\t\t\t<div class=\"form-group with-button\">\r\n\t\t\t\t\t<input class=\"form-control js-user-search\" placeholder=\"Search here people or pages...\" type=\"text\">\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div> -->\r\n\r\n\t</div>\r\n\r\n</header>\r\n\r\n<!-- ... end Responsive Header -->\r\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.selectedTab = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.selectTab = function (tab) {
        if (tab === this.selectedTab) {
            this.selectedTab = '';
        }
        else {
            this.selectedTab = tab;
        }
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.router.navigate(['/auth']);
        }, function (error) {
            console.log('Logout error', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('username'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('displayName'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "displayName", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed Sidebar Left -->\r\n\r\n<div class=\"fixed-sidebar\">\r\n\t<div class=\"fixed-sidebar-left sidebar--small\" id=\"sidebar-left\">\r\n\t\t<a href clickStopPropagation class=\"logo\">\r\n\t\t\t<img src=\"/assets/img/logo.png\" alt=\"YelloPlane\">\r\n\t\t</a>\r\n\r\n\t\t<perfect-scrollbar>\r\n\t\t\t<ul class=\"left-menu\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href clickStopPropagation class=\"js-sidebar-open\" placement=\"auto\" ngbTooltip=\"OPEN MENU\">\r\n\t\t\t\t\t\t<svg class=\"olymp-menu-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-menu-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/home']\" placement=\"auto\" ngbTooltip=\"NEWSFEED\">\r\n\t\t\t\t\t\t<svg class=\"olymp-newsfeed-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-newsfeed-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/page']\" placement=\"auto\" ngbTooltip=\"PAGES\">\r\n\t\t\t\t\t\t<svg class=\"olymp-star-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-star-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a placement=\"auto\" ngbTooltip=\"EVENTS\">\r\n\t\t\t\t\t\t<svg class=\"olymp-calendar-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-calendar-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a placement=\"auto\" ngbTooltip=\"CHAT\">\r\n\t\t\t\t\t\t<svg class=\"olymp-happy-faces-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-faces-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/circles']\" placement=\"auto\" ngbTooltip=\"CIRCLES\">\r\n\t\t\t\t\t\t<svg class=\"olymp-badge-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-badge-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a placement=\"auto\" ngbTooltip=\"SHOP\">\r\n\t\t\t\t\t\t<svg class=\"olymp-shopping-bag-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-shopping-bag-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a placement=\"auto\" ngbTooltip=\"AUTOS\">\r\n\t\t\t\t\t\t<svg class=\"olymp-settings-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-settings-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a placement=\"auto\" ngbTooltip=\"HIRING\">\r\n\t\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a placement=\"auto\" ngbTooltip=\"AD MANAGER\">\r\n\t\t\t\t\t\t<svg class=\"olymp-stats-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-stats-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</perfect-scrollbar>\r\n\t</div>\r\n\r\n\t<div class=\"fixed-sidebar-left sidebar--large\" id=\"sidebar-left-1\">\r\n\t\t<a href clickStopPropagation class=\"logo\">\r\n\t\t\t<img src=\"/assets/img/logo.png\" alt=\"YelloPlane\">\r\n\t\t\t<h6 class=\"logo-title\">yelloplane</h6>\r\n\t\t</a>\r\n\r\n\t\t<perfect-scrollbar>\r\n\t\t\t<ul class=\"left-menu\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href clickStopPropagation class=\"js-sidebar-open\">\r\n\t\t\t\t\t\t<svg class=\"olymp-close-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-close-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Close Menu</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/home']\">\r\n\t\t\t\t\t\t<svg class=\"olymp-newsfeed-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-newsfeed-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Newsfeed</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/page']\">\r\n\t\t\t\t\t\t<svg class=\"olymp-star-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-star-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Pages</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-calendar-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-calendar-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Events</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-happy-faces-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-faces-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Chat</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/circles']\">\r\n\t\t\t\t\t\t<svg class=\"olymp-badge-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-badge-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Circles</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-shopping-bag-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-shopping-bag-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Shop</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-settings-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-settings-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Autos</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Hiring</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-stats-icon left-menu-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-stats-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Ad Manager</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\r\n\t\t</perfect-scrollbar>\r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Fixed Sidebar Left -->\r\n\r\n<!-- Fixed Sidebar Left -->\r\n\r\n<div class=\"fixed-sidebar fixed-sidebar-responsive\">\r\n\r\n\t<div class=\"fixed-sidebar-left sidebar--small\" id=\"sidebar-left-responsive\">\r\n\t\t<a href clickStopPropagation class=\"logo js-sidebar-open\">\r\n\t\t\t<img src=\"/assets/img/logo.png\" alt=\"YelloPlane\">\r\n\t\t</a>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"fixed-sidebar-left sidebar--large\" id=\"sidebar-left-1-responsive\">\r\n\t\t<a href clickStopPropagation class=\"logo\">\r\n\t\t\t<img src=\"/assets/img/logo.png\" alt=\"YelloPlane\">\r\n\t\t\t<h6 class=\"logo-title\">yelloplane</h6>\r\n\t\t</a>\r\n\r\n\t\t<perfect-scrollbar>\r\n\t\t\t<ul class=\"left-menu\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href clickStopPropagation class=\"js-sidebar-open\">\r\n\t\t\t\t\t\t<svg class=\"olymp-close-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"OPEN MENU\"><use xlink:href=\"/assets/icons/icons.svg#olymp-close-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Close Menu</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/home']\">\r\n\t\t\t\t\t\t<svg class=\"olymp-newsfeed-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"NEWSFEED\"><use xlink:href=\"/assets/icons/icons.svg#olymp-newsfeed-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Newsfeed</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/page']\">\r\n\t\t\t\t\t\t<svg class=\"olymp-newsfeed-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"PAGES\"><use xlink:href=\"/assets/icons/icons.svg#olymp-newsfeed-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Pages</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-calendar-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"EVENTS\"><use xlink:href=\"/assets/icons/icons.svg#olymp-calendar-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Events</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-happy-faces-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"CHAT\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-faces-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Chat</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/circles']\">\r\n\t\t\t\t\t\t<svg class=\"olymp-badge-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"CIRCLES\"><use xlink:href=\"/assets/icons/icons.svg#olymp-badge-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Circles</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-shopping-bag-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"SHOP\"><use xlink:href=\"/assets/icons/icons.svg#olymp-shopping-bag-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Shop</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-settings-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"AUTOS\"><use xlink:href=\"/assets/icons/icons.svg#olymp-settings-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Autos</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-magnifying-glass-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"HIRING\"><use xlink:href=\"/assets/icons/icons.svg#olymp-magnifying-glass-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Hiring</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<svg class=\"olymp-stats-icon left-menu-icon\" placement=\"auto\" ngbTooltip=\"AD MANAGER\"><use xlink:href=\"/assets/icons/icons.svg#olymp-stats-icon\"></use></svg>\r\n\t\t\t\t\t\t<span class=\"left-menu-title\">Ad Manager</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</perfect-scrollbar>\r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Fixed Sidebar Left -->"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-full-layout-full-layout-module.js.map