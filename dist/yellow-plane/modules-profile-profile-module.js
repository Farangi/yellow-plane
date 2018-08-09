(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-profile-profile-module"],{

/***/ "./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Header -->\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"top-header\">\r\n\t\t\t\t\t<div class=\"top-header-thumb\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/top-header1.jpg\" alt=\"nature\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"profile-section\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-5 col-md-5 \">\r\n\t\t\t\t\t\t\t\t<ul class=\"profile-menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile', username]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Timeline</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile', username, 'about']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">About</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile', username, 'friends']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Friends</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-5 ml-auto col-md-5\">\r\n\t\t\t\t\t\t\t\t<ul class=\"profile-menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile', username, 'photos']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Photos</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile', username, 'videos']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Videos</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"more-dropdown more-with-triangle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Report Profile</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Block Profile</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"control-block-button\">\r\n\t\t\t\t\t\t\t<a class=\"btn btn-control bg-blue\" *ngIf=\"!this.showProfileControls && this.showFriendRequestControls\" (click)=\"sendFriendRequest()\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control bg-purple\" *ngIf=\"!this.showProfileControls\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<div class=\"btn btn-control bg-primary more\" *ngIf=\"this.showProfileControls\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-settings-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-settings-icon\"></use></svg>\r\n\r\n\t\t\t\t\t\t\t\t<ul class=\"more-dropdown more-with-triangle triangle-bottom-right\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#update-header-photo\">Update Profile Photo</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#update-header-photo\">Update Header Photo</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Account Settings</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"top-header-author\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img [src]=\"image\" alt=\"author\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<div class=\"author-content\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h4 author-name\">{{displayName}}</a>\r\n\t\t\t\t\t\t\t<div class=\"country\">Islamabad, Pakistan</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Top Header -->\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProfileHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHeaderComponent", function() { return ProfileHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileHeaderComponent = /** @class */ (function () {
    function ProfileHeaderComponent(userService) {
        this.userService = userService;
        this.showFriendRequestControls = true;
    }
    ProfileHeaderComponent.prototype.ngOnInit = function () {
    };
    ProfileHeaderComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.userService.getCurrentUserData().then(function (user) {
            _this.usernameCurrent = user.username;
            if (_this.usernameCurrent == _this.username) {
                _this.showProfileControls = true;
            }
            else {
                _this.showProfileControls = false;
            }
            _this.userService.checkRelation(_this.usernameCurrent, _this.username).subscribe(function (relations) {
                if (relations.length) {
                    if (relations[0].status == 'pending' || relations[0].status == 'accepted') {
                        _this.showFriendRequestControls = false;
                    }
                    if (relations[0].status == 'rejected') {
                        _this.showFriendRequestControls = true;
                    }
                }
            });
        }).catch(function (err) { return console.log(err); });
    };
    ProfileHeaderComponent.prototype.sendFriendRequest = function () {
        if (this.username) {
            this.userService.sendFriendRequest(this.username)
                .then(function (res) { return console.log(res); })
                .catch(function (err) { return console.log(err); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('username'),
        __metadata("design:type", Object)
    ], ProfileHeaderComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('displayName'),
        __metadata("design:type", Object)
    ], ProfileHeaderComponent.prototype, "displayName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image'),
        __metadata("design:type", Object)
    ], ProfileHeaderComponent.prototype, "image", void 0);
    ProfileHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-header',
            template: __webpack_require__(/*! ./profile-header.component.html */ "./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.html"),
            styles: [__webpack_require__(/*! ./profile-header.component.scss */ "./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ProfileHeaderComponent);
    return ProfileHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/about/about.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Hobbies and Interests</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<div class=\"row\" *ngIf=\"this.hobbiesAndInterests\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Hobbies:</span>\r\n                  <span class=\"text\">{{this.hobbiesAndInterests.hobbies}}</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite TV Shows:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{this.hobbiesAndInterests.favTV}}</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Movies:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{this.hobbiesAndInterests.favMovies}} </span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Games:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{this.hobbiesAndInterests.favGames}} </span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Music Bands / Artists:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{this.hobbiesAndInterests.favMusic}}</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Books:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{this.hobbiesAndInterests.favBooks}}</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Writers:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{this.hobbiesAndInterests.favWriters}} </span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Other Interests:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{this.hobbiesAndInterests.otherInterests}}</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Education and Employement</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\" *ngIf=\"this.educations\">\r\n\t\t\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t\t\t<li *ngFor=\"let edu of this.educations\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">{{edu.title}}</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"date\">{{edu.time}}</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{edu.description}}</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\" *ngIf=\"this.employments\">\r\n\t\t\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t\t\t<li *ngFor=\"let emp of this.employments\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">{{emp.title}}</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"date\">{{emp.time}}</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{emp.description}}</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Personal Info</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-personal-info\" *ngIf=\"this.personalInfo\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">About Me:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">{{this.personalInfo.description}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Birthday:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\" *ngIf=\"this.personalInfo.birthday\">{{this.personalInfo.birthday.day}}/{{this.personalInfo.birthday.month}}/{{this.personalInfo.birthday.year}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Birthplace:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">{{this.personalInfo.birthplace}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Lives in:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">{{this.personalInfo.city}}, {{this.personalInfo.country}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Occupation:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">{{this.personalInfo.occupation}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Joined:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\" *ngIf=\"this.userData\">{{this.userData.joinedAt}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Gender:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\" *ngIf=\"this.userData\">{{this.userData.gender}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Status:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">{{this.personalInfo.status}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Website:</span>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"text\">{{this.personalInfo.website}}</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Phone Number:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">{{this.personalInfo.phone}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Religious Beliefs:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">{{this.personalInfo.religion}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Political Incline:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">{{this.personalInfo.politicalincline}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/about/about.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/about/about.page.ts ***!
  \*******************************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../../shared/services/profile/personalInfo.service */ "./src/app/shared/services/profile/personalInfo.service.ts");
/* harmony import */ var _shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../shared/services/profile/hobbiesAndInterests.service */ "./src/app/shared/services/profile/hobbiesAndInterests.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_profile_educationsAndEmployments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/profile/educationsAndEmployments.service */ "./src/app/shared/services/profile/educationsAndEmployments.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutComponent = /** @class */ (function () {
    function AboutComponent(userService, hobbiesAndInterestsService, personalInfoService, educationsAndEmploymentsService, route) {
        this.userService = userService;
        this.hobbiesAndInterestsService = hobbiesAndInterestsService;
        this.personalInfoService = personalInfoService;
        this.educationsAndEmploymentsService = educationsAndEmploymentsService;
        this.route = route;
        this.educations = [];
        this.employments = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = this.route.snapshot.parent.params['username'];
        this.hobbiesAndInterests = {};
        this.personalInfo = {};
        this.hobbiesAndInterestsService.getHobbiesAndInterestsByUserName(username)
            .then(function (data) { return _this.hobbiesAndInterests = data; })
            .catch(function (err) { return console.log(err); });
        this.personalInfoService.getPersonalInfoByUserName(username)
            .then(function (data) { return _this.personalInfo = data; })
            .catch(function (err) { return console.log(err); });
        this.educationsAndEmploymentsService.getEducationsAndEmploymentsByUserName(username)
            .then(function (resp) {
            if (resp) {
                if (resp.educations) {
                    _this.educations = resp.educations;
                }
                if (resp.employments) {
                    _this.employments = resp.employments;
                }
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_3__["HobbiesAndInterestsService"],
            _shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_2__["PersonalInfoService"],
            _shared_services_profile_educationsAndEmployments_service__WEBPACK_IMPORTED_MODULE_5__["EducationsAndEmploymentsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Friends -->\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6\" *ngFor=\"let friend of friends\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"friend-item\">\r\n\t\t\t\t\t<div class=\"friend-header-thumb\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/friend1.jpg\" alt=\"friend\">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"friend-item-content\">\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Report Profile</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Block Profile</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Turn Off Notifications</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"friend-avatar\">\r\n\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar1.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"author-content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h5 author-name\">{{friend.name}}</a>\r\n\t\t\t\t\t\t\t\t<div class=\"country\">{{friend.location}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"swiper-container\" swiper>\r\n\t\t\t\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"friend-count\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{friend.counts.friends}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Friends</div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{friend.counts.photos}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Photos</div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{friend.counts.videos}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Videos</div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"control-block-button\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control bg-blue\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control bg-purple\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"friend-about\">\r\n\t\t\t\t\t\t\t\t\t\t{{friend.bio}}\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"friend-since\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Friends Since:</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{friend.friendsSince}}</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<!-- If we need pagination -->\r\n\t\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Friends -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.ts ***!
  \***********************************************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
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

var FriendsComponent = /** @class */ (function () {
    function FriendsComponent() {
        this.friends = [];
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.friends.push({ name: 'Wakas Ali', location: 'Lahore', counts: { friends: 52, photos: 240, videos: 16 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
        this.friends.push({ name: 'Maya Ahmad', location: 'Satgodha', counts: { friends: 52, photos: 240, videos: 16 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
        this.friends.push({ name: 'Hassan Murtaza', location: 'Islamabad', counts: { friends: 49, photos: 132, videos: 5 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
        this.friends.push({ name: 'Maryam khan', location: 'Karachi', counts: { friends: 65, photos: 104, videos: 12 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
        this.friends.push({ name: 'Najeeb Ahmad', location: 'Mianwali', counts: { friends: 49, photos: 132, videos: 5 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
        this.friends.push({ name: 'Ahsan Rokhri', location: 'Islamabad', counts: { friends: 82, photos: 204, videos: 27 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
        this.friends.push({ name: 'Murtaza Bhutto', location: 'Faisalabad', counts: { friends: 73, photos: 380, videos: 11 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
        this.friends.push({ name: 'Shamil khan', location: 'Quetta', counts: { friends: 58, photos: 304, videos: 19 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
    };
    FriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.page.html */ "./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.html"),
            styles: [__webpack_require__(/*! ./friends.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Photo Post viewer component -->\r\n<app-photo-post-viewer #photoPostVewerComp></app-photo-post-viewer>\r\n\r\n<!-- Upload Photo Dialogue -->\r\n<ng-template #addPhoto let-c=\"close\" let-d=\"dismiss\">\r\n  \t<div class=\"modal-header\">\r\n    \t<h4 class=\"modal-title\">Upload Photos</h4>\r\n    \t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      \t<span aria-hidden=\"true\">&times;</span>\r\n    \t</button>\r\n  \t</div>\r\n\r\n  \t<form>\r\n\t  \t<div class=\"modal-body\">\r\n\t  \t\t<div class=\"news-feed-form\">\r\n\t\t    \t<div class=\"author-thumb\">\r\n\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group with-icon label-floating is-empty\">\r\n\t\t\t\t\t<label class=\"control-label\">Write something about this photo...</label>\r\n\t\t\t\t\t<textarea class=\"form-control\" style=\"min-height:80px\" name=\"description\" [(ngModel)]=\"addPhotoModalForm.description\"></textarea>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"photo-upload-dialogue-nav\">\r\n\t\t\t\t\t<div class=\"photo-upload-dialogue-item img-item\" *ngFor=\"let photo of pickedPhotos let idx = index\">\r\n\t\t\t\t    \t<img [src]=\"photo.content\">\r\n\t\t\t\t    \t<div class=\"overlay overlay-dark-light\"></div>\r\n\t\t\t\t    \t<a (click)=\"removePhoto(idx)\" class=\"remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"photo-upload-dialogue-item add-photo\">\r\n\t\t\t\t\t\t<a class=\"full-block\" ngxFilePicker accept=\"image/*\" (filePick)=\"onFilePicked($event)\"></a>\r\n\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t<a class=\"btn btn-control bg-primary\" ngxFilePicker accept=\"image/*\" (filePick)=\"onFilePicked($event)\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-plus-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-plus-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<span class=\"title\" ngxFilePicker accept=\"image/*\" (filePick)=\"onFilePicked($event)\">Add Photo</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t  \t</div>\r\n\r\n\t  \t<div class=\"modal-footer\">\r\n\t  \t\t<ng-select style=\"min-width: 120px;\" [items]=\"privacyOptions\" [(ngModel)]=\"addPhotoModalForm.privacy\" name=\"privacy\" bindLabel=\"name\" bindValue=\"value\" [clearable]=\"false\">\r\n\t  \t\t\t<ng-template ng-label-tmp let-item=\"item\">\r\n\t\t\t        <i class=\"fa {{item.icon}}\"></i>\r\n\t\t\t        {{item.name}}\r\n\t\t\t    </ng-template>\r\n\t\t\t    <ng-template ng-option-tmp let-item=\"item\">\r\n\t\t\t        <i class=\"fa {{item.icon}}\"></i>\r\n\t\t\t        {{item.name}}\r\n\t\t\t    </ng-template>\r\n\t\t\t</ng-select>\r\n\t  \t\t<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"postPhotos()\">Post</button>\r\n\t  \t</div>\r\n\t</form>\r\n</ng-template>\r\n\r\n<!-- Create Album Dialogue -->\r\n<ng-template #addAlbum let-c=\"close\" let-d=\"dismiss\">\r\n  \t<div class=\"modal-header\">\r\n    \t<h4 class=\"modal-title\">Upload Photos</h4>\r\n    \t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      \t<span aria-hidden=\"true\">&times;</span>\r\n    \t</button>\r\n  \t</div>\r\n\r\n  \t<form>\r\n\t  \t<div class=\"modal-body\">\r\n\t\t\t<div class=\"ui-block-content\">\r\n\r\n\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t<label class=\"control-label\">Album Name</label>\r\n\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" name=\"name\" [(ngModel)]=\"addAlbumModalForm.name\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t<label class=\"control-label\">Album Description</label>\r\n\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"\" name=\"description\" [(ngModel)]=\"addAlbumModalForm.description\"></textarea>>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"photo-album-wrapper\">\r\n\t\t\t\t\t<div class=\"photo-album-item-wrap col-3-width\" >\r\n\t\t\t\t\t\t<div class=\"photo-album-item create-album\">\r\n\t\t\t\t\t\t\t<a class=\"full-block\" ngxFilePicker accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\"></a>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"btn btn-control bg-primary\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-plus-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-plus-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<span ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"title h5\">Add More Photos...</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"photo-album-item-wrap col-3-width\" *ngFor=\"let photo of pickedAlbumPhotos let idx = index\">\r\n\t\t\t\t\t\t<div class=\"photo-album-item\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<img [src]=\"photo.content\" alt=\"photo\" style=\"height: 159px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"overlay overlay-dark-light\"></div>\r\n\t\t\t    \t\t\t\t<a href clickStopPropagation (click)=\"removeAlbumPhoto(idx)\" class=\"remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Write something about this photo...\"></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t  \t</div>\r\n\r\n\t\t </div>\r\n\r\n\t  \t<div class=\"modal-footer\">\r\n\t  \t\t<ng-select style=\"min-width: 120px;\" [items]=\"privacyOptions\" [(ngModel)]=\"addAlbumModalForm.privacy\" name=\"privacy\" bindLabel=\"name\" bindValue=\"value\" [clearable]=\"false\">\r\n\t  \t\t\t<ng-template ng-label-tmp let-item=\"item\">\r\n\t\t\t        <i class=\"fa {{item.icon}}\"></i>\r\n\t\t\t        {{item.name}}\r\n\t\t\t    </ng-template>\r\n\t\t\t    <ng-template ng-option-tmp let-item=\"item\">\r\n\t\t\t        <i class=\"fa {{item.icon}}\"></i>\r\n\t\t\t        {{item.name}}\r\n\t\t\t    </ng-template>\r\n\t\t\t</ng-select>\r\n\t  \t\t<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"postAlbum()\">Post</button>\r\n\t  \t</div>\r\n\t</form>>\r\n</ng-template>\r\n\r\n<!-- Photos Top Bar -->\r\n<div class=\"container\" id=\"albumTop\" #albumTop>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block responsive-flex\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<div class=\"h6 title\">Hassan’s Photo Gallery</div>\r\n\r\n\t\t\t\t\t<div class=\"block-btn align-right\" *ngIf=\"showPhotoControls\">\r\n\t\t\t\t\t\t<button ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"btn btn-primary btn-md-2\">Create Album  +</button>\r\n\r\n\t\t\t\t\t\t<button ngxFilePicker accept=\"image/*\" (filePick)=\"onFilePicked($event)\" class=\"btn btn-md-2 btn-border-think custom-color c-grey\">Add Photos</button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Photos Tab -->\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<!-- Tab panes -->\r\n\t\t\t<ngb-tabset type=\"pills\">\r\n\t\t\t  \t<ngb-tab title=\"Photos\">\r\n\t\t\t    \t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"photo-album-wrapper\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"photo-item col-4-width\" *ngFor=\"let photo of photos\">\r\n\t\t\t\t\t\t\t\t<img src=\"{{photo.img}}\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>{{photo.likes}}</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a (click)=\"showPhotoPost(photo.id)\" class=\"full-block\"></a>\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">{{photo.albumName}}</a>\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">{{photo.time}}</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<a (click)=\"getMorePhotos()\" class=\"btn btn-control btn-more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\r\n\t\t\t\t<ngb-tab title=\"Albums\">\r\n    \t\t\t\t<ng-template ngbTabContent>\r\n    \t\t\t\t\t<div>\r\n\t    \t\t\t\t\t<div class=\"photo-album-wrapper\" *ngIf=\"selectedAlbumPhotos.length > 0\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"photo-item col-4-width\" *ngFor=\"let photo of selectedAlbumPhotos\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"{{photo.img}}\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t<span>{{photo.likes}}</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#open-photo-popup-v2\" class=\"  full-block\"></a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">{{photo.albumName}}</a>\r\n\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">{{photo.time}}</time>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a (click)=\"getMoreAlbumPhotos()\" class=\"btn btn-control btn-more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"photo-album-wrapper\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"photo-album-item-wrap col-4-width\" >\r\n\t\t\t\t\t\t\t\t\t<div class=\"photo-album-item create-album\" style=\"height: 417.547px;\">\r\n\t\t\t\t\t\t\t\t\t\t<a ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"full-block\"></a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"btn btn-control bg-primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-plus-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-plus-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"title h5\" ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\">Create an Album</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sub-title\">It only takes a few minutes!</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"photo-album-item-wrap col-4-width\" *ngFor=\"let album of albums\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"photo-album-item\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"photo-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"album.coverImg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{album.likes}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"showAlbum(album.id)\" class=\"  full-block\"></a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"title h5\">{{album.name}}</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sub-title\">{{album.lastAdded}}</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-container\" swiper>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"friends-harmonic\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let likedBy of album.likedBy\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" placement=\"right\" ngbTooltip=\"{{likedBy.name}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"likedBy.img\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"friend-count\" data-swiper-parallax=\"-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{album.counts.photos}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Photos</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{album.counts.comments}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Comments</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{album.counts.share}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Share</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- If we need pagination -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a (click)=\"getMoreAlbums()\" class=\"btn btn-control btn-more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n  \t\t\t\t</ngb-tab>\r\n  \t\t\t</ngb-tabset>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.ts ***!
  \*********************************************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_photos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../shared/services/photos.service */ "./src/app/shared/services/photos.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/scroll.service */ "./src/app/shared/services/scroll.service.ts");
/* harmony import */ var ngx_file_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-file-helpers */ "./node_modules/ngx-file-helpers/esm5/ngx-file-helpers.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(modalService, scrollService, photoServ, userService, route) {
        this.modalService = modalService;
        this.scrollService = scrollService;
        this.photoServ = photoServ;
        this.userService = userService;
        this.route = route;
        this.privacyOptions = [
            { name: "Everyone", value: "EVERYONE", icon: "fa-globe" },
            { name: "Friends", value: "FRIENDS", icon: "fa-users" },
            { name: "Only me", value: "ONLYME", icon: "fa-lock" }
        ];
        //Photos Tab
        this.photos = [];
        //Albums Tab
        this.albums = [];
        this.selectedAlbumId = 0;
        this.selectedAlbumPhotos = [];
        this.addPhotoModalRefOpen = false;
        this.addPhotoModalForm = {};
        this.pickedPhotos = [];
        this.addAlbumModalRefOpen = false;
        this.addAlbumModalForm = {};
        this.pickedAlbumPhotos = [];
        this.addPhotoModalForm.privacy = this.privacyOptions[0].value;
        this.addAlbumModalForm.privacy = this.privacyOptions[0].value;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = this.route.snapshot.parent.params["username"];
        this.userService
            .getCurrentUserData()
            .then(function (user) {
            if (user.username == username) {
                _this.showPhotoControls = true;
            }
            else {
                _this.showPhotoControls = false;
            }
        })
            .catch(function (err) { return console.log(err); });
        this.getPhotos();
        this.getAlbums();
    };
    //Photos Tab
    PhotosComponent.prototype.getPhotos = function () {
        var _this = this;
        this.photos = [];
        this.photoServ
            .getCurrentUserPhotos()
            .then(function (uploads) {
            if (uploads === void 0) { uploads = []; }
            uploads.forEach(function (upload) {
                var photoId = 1;
                upload.photos.forEach(function (photo) {
                    _this.photos.push({
                        id: photoId,
                        img: photo.photoUrl,
                        likes: 15,
                        albumName: upload.description,
                        time: photo.uploadedAt
                    });
                    photoId++;
                });
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    PhotosComponent.prototype.getMorePhotos = function () {
        this.getPhotos();
    };
    //Albums Tab
    PhotosComponent.prototype.getAlbums = function () {
        this.albums.push({
            id: 1,
            name: "South America Vacations",
            lastAdded: "2 hours ago",
            coverImg: "/assets/img/photo-item2.jpg",
            likes: 324,
            counts: { photos: 240, comments: 52, share: 16 },
            likedBy: [
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic10.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic8.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
            ]
        });
        this.albums.push({
            id: 2,
            name: "Photoshoot Summer",
            lastAdded: "5 weeks ago",
            coverImg: "/assets/img/photo-album1.jpg",
            likes: 324,
            counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic10.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic8.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
            ]
        });
        this.albums.push({
            id: 3,
            name: "Amazing Street Food",
            lastAdded: "6 mins ago",
            coverImg: "/assets/img/photo-album2.jpg",
            likes: 324,
            counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [{ name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" }]
        });
        this.albums.push({
            id: 4,
            name: "Graffiti and Street Art",
            lastAdded: "6 hours ago",
            coverImg: "/assets/img/photo-album3.jpg",
            likes: 324,
            counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic10.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
            ]
        });
        this.albums.push({
            id: 5,
            name: "Amazing Landscapes",
            lastAdded: "13 mins ago",
            coverImg: "/assets/img/photo-album4.jpg",
            likes: 324,
            counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic10.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
            ]
        });
        this.albums.push({
            id: 6,
            name: "The Majstic Canyon",
            lastAdded: "57 mins ago",
            coverImg: "/assets/img/photo-item6.jpg",
            likes: 324,
            counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [{ name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }]
        });
        this.albums.push({
            id: 7,
            name: "Winter 2015 Portraits",
            lastAdded: "1 year ago",
            coverImg: "/assets/img/photo-album5.jpg",
            likes: 324,
            counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
                { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
            ]
        });
    };
    PhotosComponent.prototype.getMoreAlbums = function () {
        this.getAlbums();
    };
    PhotosComponent.prototype.getAlbumPhotos = function (id) {
        this.selectedAlbumPhotos.push({
            id: 9,
            img: "/assets/img/photo-item7.jpg",
            likes: 15,
            albumName: "Header Photos",
            time: "1 week ago"
        });
        this.selectedAlbumPhotos.push({
            id: 10,
            img: "/assets/img/photo-item9.jpg",
            likes: 15,
            albumName: "Header Photos",
            time: "1 week ago"
        });
        this.selectedAlbumPhotos.push({
            id: 11,
            img: "/assets/img/photo-item3.jpg",
            likes: 15,
            albumName: "Header Photos",
            time: "1 week ago"
        });
        this.selectedAlbumPhotos.push({
            id: 12,
            img: "/assets/img/photo-item10.jpg",
            likes: 15,
            albumName: "Header Photos",
            time: "1 week ago"
        });
        this.selectedAlbumPhotos.push({
            id: 13,
            img: "/assets/img/photo-item5.jpg",
            likes: 15,
            albumName: "Header Photos",
            time: "1 week ago"
        });
        this.selectedAlbumPhotos.push({
            id: 14,
            img: "/assets/img/photo-item11.jpg",
            likes: 15,
            albumName: "Header Photos",
            time: "1 week ago"
        });
        this.selectedAlbumPhotos.push({
            id: 15,
            img: "/assets/img/photo-item7.jpg",
            likes: 15,
            albumName: "Header Photos",
            time: "1 week ago"
        });
        this.selectedAlbumPhotos.push({
            id: 16,
            img: "/assets/img/photo-item8.jpg",
            likes: 15,
            albumName: "Header Photos",
            time: "1 week ago"
        });
    };
    PhotosComponent.prototype.getMoreAlbumPhotos = function () {
        this.getAlbumPhotos(this.selectedAlbumId);
    };
    PhotosComponent.prototype.showAlbum = function (id) {
        this.selectedAlbumPhotos = [];
        this.selectedAlbumId = id;
        this.getAlbumPhotos(id);
        this.scrollService.triggerScrollTo(this.albumTop.nativeElement.id, 0);
    };
    //View Post Modal
    PhotosComponent.prototype.showPhotoPost = function (id) {
        this.photoPostVewerComp.openPhotoPostModal(id);
    };
    //Upload Photo Modal
    PhotosComponent.prototype.onFilePicked = function (file) {
        this.pickedPhotos.push(file);
        if (this.pickedPhotos.length == 1 && !this.addPhotoModalRefOpen) {
            this.openPhotoUploadModal();
        }
    };
    PhotosComponent.prototype.openPhotoUploadModal = function () {
        var _this = this;
        this.addPhotoModalRef = this.modalService.open(this.addPhotoModal, {
            backdrop: "static",
            centered: true
        });
        this.addPhotoModalRefOpen = true;
        this.addPhotoModalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.pickedPhotos = [];
            _this.addPhotoModalRefOpen = false;
            _this.filePicker.reset();
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.pickedPhotos = [];
            _this.addPhotoModalRefOpen = false;
            _this.filePicker.reset();
        });
    };
    PhotosComponent.prototype.removePhoto = function (index) {
        this.pickedPhotos.splice(index, 1);
    };
    PhotosComponent.prototype.postPhotos = function () {
        var _this = this;
        this.addPhotoModalRef.close();
        this.photoServ
            .uploadPhotos({
            description: this.addPhotoModalForm.description,
            privacy: this.addPhotoModalForm.privacy,
            photos: this.pickedPhotos
        })
            .then(function (resp) {
            //console.log(resp);
            _this.getPhotos();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    //Create Album Modal
    PhotosComponent.prototype.onAlbumFilePicked = function (file) {
        this.pickedAlbumPhotos.push(file);
        if (this.pickedAlbumPhotos.length == 1 && !this.addAlbumModalRefOpen) {
            this.openAlbumUploadModal();
        }
    };
    PhotosComponent.prototype.openAlbumUploadModal = function () {
        var _this = this;
        this.addAlbumModalRef = this.modalService.open(this.addAlbumModal, {
            backdrop: "static",
            size: "lg",
            windowClass: "create-album-modal",
            centered: true
        });
        this.addAlbumModalRefOpen = true;
        this.addAlbumModalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.pickedAlbumPhotos = [];
            _this.addAlbumModalRefOpen = false;
            _this.filePicker.reset();
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.pickedAlbumPhotos = [];
            _this.addAlbumModalRefOpen = false;
            _this.filePicker.reset();
        });
    };
    PhotosComponent.prototype.removeAlbumPhoto = function (index) {
        this.pickedAlbumPhotos.splice(index, 1);
    };
    PhotosComponent.prototype.postAlbum = function () {
        console.log(this.addAlbumModalForm);
        console.log(this.pickedAlbumPhotos);
        this.addAlbumModalRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("photoPostVewerComp"),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "photoPostVewerComp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("addPhoto"),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "addPhotoModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("addAlbum"),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "addAlbumModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("albumTop"),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "albumTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ngx_file_helpers__WEBPACK_IMPORTED_MODULE_5__["FilePickerDirective"]),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "filePicker", void 0);
    PhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-photos",
            template: __webpack_require__(/*! ./photos.page.html */ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.html"),
            styles: [__webpack_require__(/*! ./photos.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__["ScrollService"],
            _shared_services_photos_service__WEBPACK_IMPORTED_MODULE_1__["PhotoService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-spacer\"></div>\r\n\r\n<app-profile-header [username]=\"user.username\" [displayName]=\"displayName\"></app-profile-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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


//import { UserService } from '../../../../../../shared/services/user.service';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(
    //public userService: UserService,
    route) {
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            _this.user = routeData['data'];
            _this.displayName = _this.user.fname + ' ' + _this.user.lname;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<!-- Main Content -->\r\n\r\n\t\t<div class=\"col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div id=\"newsfeed-items-grid\">\r\n\r\n\t\t\t\t<div class=\"ui-block\" *ngFor=\"let post of this.posts\">\r\n\t\t\t\t\t<article class=\"hentry post\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">{{post.user}}</a>\r\n\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t{{post.time}}\r\n\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Edit Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Delete Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Turn Off Notifications</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Select as Featured</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n            <p>{{post.caption}}</p>\r\n\r\n            <div class=\"post-thumb\" *ngIf=\"post.type === 'PHOTO'\" >\r\n\t\t\t\t\t\t\t<img src=\"{{post.photoUrl}}\" alt=\"photo\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"post-additional-info inline-items\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>8</span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"friends-harmonic\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic7.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic8.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic9.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic10.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic11.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"names-people-likes\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Waqar</a>, <a href=\"#\">Asfar</a> and\r\n\t\t\t\t\t\t\t\t<br>6 more liked this\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"comments-shared\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-speech-balloon-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-speech-balloon-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>17</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>24</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"control-block-button post-control-button\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control featured-post\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-trophy-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-trophy-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-like-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-like-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</article>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t\t<article class=\"hentry post video\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Hasan Ahmed</a> shared a <a href=\"#\">link</a>\r\n\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t7 hours ago\r\n\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Edit Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Delete Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Turn Off Notifications</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Select as Featured</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<p>If someone missed it, check out the new song by System of a Revenge! I thinks they are going back to their roots...</p>\r\n\r\n\t\t\t\t\t\t<div class=\"post-video\">\r\n\t\t\t\t\t\t\t<div class=\"video-thumb\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/video5.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"video-content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h4 title\">System of a Revenge - Nothing Else Matters (LIVE)</a>\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempo incididunt ut labore..</p>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"link-site\">YOUTUBE.COM</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"post-additional-info inline-items\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>15</span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"friends-harmonic\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic9.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic10.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic7.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic8.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic11.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"names-people-likes\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Jenny</a>, <a href=\"#\">Robert</a> and\r\n\t\t\t\t\t\t\t\t<br>13 more liked this\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"comments-shared\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-speech-balloon-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-speech-balloon-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>1</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>16</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"control-block-button post-control-button\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-like-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-like-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</article>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t\t<article class=\"hentry post\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">James Spiegel</a>\r\n\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t2 hours ago\r\n\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Edit Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Delete Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Turn Off Notifications</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Select as Featured</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et\r\n\t\t\t\t\t\t\tdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.\r\n\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t<div class=\"post-additional-info inline-items\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>36</span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"friends-harmonic\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic7.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic8.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic9.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic10.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic11.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"names-people-likes\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">You</a>, <a href=\"#\">Elaine</a> and\r\n\t\t\t\t\t\t\t\t<br>34 more liked this\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"comments-shared\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-speech-balloon-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-speech-balloon-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>17</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>24</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"control-block-button post-control-button\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-like-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-like-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</article>\r\n\r\n\t\t\t\t\t<ul class=\"comments-list\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Elaine Dreyfuss</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t5 mins ago\r\n\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>8</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"has-children\">\r\n\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar5-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Green Goo Rock</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t1 hour ago\r\n\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiten, sed quia\r\n\t\t\t\t\t\t\t\tconsequuntur magni dolores eos qui ratione voluptatem sequi en lod nesciunt. Neque porro\r\n\t\t\t\t\t\t\t\tquisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem ipsum der.\r\n\t\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>5</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"children\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar8-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Diana Jameson</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t39 mins ago\r\n\t\t\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\r\n\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t<span>2</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar2-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Nicholas Grisom</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t24 mins ago\r\n\t\t\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<p>Excepteur sint occaecat cupidatat non proident.</p>\r\n\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t<span>0</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t</li>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar4-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Chris Greyson</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t1 hour ago\r\n\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>7</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"more-comments\">View more comments <span>+</span></a>\r\n\t\t\t\t\t<form class=\"comment-form inline-items\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group with-icon-right \">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"\"  ></textarea>\r\n\t\t\t\t\t\t\t\t<div class=\"add-options-message\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"options-message\" data-toggle=\"modal\" data-target=\"#update-header-photo\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-camera-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-camera-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- data-load-link=\"items-to-load.html\" data-container=\"newsfeed-items-grid\" -->\r\n\t\t\t<a id=\"load-more-button\" href=\"#\" class=\"btn btn-control btn-more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t</div>\r\n\r\n\t\t<!-- ... end Main Content -->\r\n\r\n\t\t<!-- Left Sidebar -->\r\n\r\n\t\t<div class=\"col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Profile Intro</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">About Me:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\" *ngIf=\"this.personalInfo\">{{this.personalInfo.description}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Favourite TV Shows:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\" *ngIf=\"this.hobbiesAndInterests\">{{this.hobbiesAndInterests.favTV}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Favourite Music Bands / Artists:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\" *ngIf=\"this.hobbiesAndInterests\">{{this.hobbiesAndInterests.favMusic}}</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Last Videos</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-last-video\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href clickStopPropagation class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/video8.jpg\" alt=\"video\">\r\n\t\t\t\t\t\t\t<div class=\"video-content\">\r\n\t\t\t\t\t\t\t\t<div class=\"title\">System of a Revenge - Hypnotize...</div>\r\n\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">3:25</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href clickStopPropagation class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/video7.jpg\" alt=\"video\">\r\n\t\t\t\t\t\t\t<div class=\"video-content\">\r\n\t\t\t\t\t\t\t\t<div class=\"title\">Green Goo - Live at Dan’s Arena</div>\r\n\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">5:48</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<!-- ... end Left Sidebar -->\r\n\r\n\t\t<!-- Right Sidebar -->\r\n\r\n\t\t<div class=\"col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Last Photos</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-last-photo js-zoom-gallery\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot10.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot10.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot11-large.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot11-large.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot12.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot12.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot13-large.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot13-large.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot14.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot14.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot15-large.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot15-large.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot16.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot16.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot17-large.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot17-large.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot18.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot18.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Friends (86)</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-faved-page js-zoom-gallery\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar38-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar24-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar36-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar35-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar34-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar33-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar32-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar31-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar30-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar29-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar28-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar27-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar26-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar25-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"all-users\">\r\n\t\t\t\t\t\t\t<a href=\"#\">+74</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- ... end Right Sidebar -->\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.ts ***!
  \*************************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _shared_services_photos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../shared/services/photos.service */ "./src/app/shared/services/photos.service.ts");
/* harmony import */ var _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../shared/services/posts.service */ "./src/app/shared/services/posts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/profile/hobbiesAndInterests.service */ "./src/app/shared/services/profile/hobbiesAndInterests.service.ts");
/* harmony import */ var src_app_shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/profile/personalInfo.service */ "./src/app/shared/services/profile/personalInfo.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(hobbiesAndInterestsService, personalInfoService, route, postService, photoService) {
        this.hobbiesAndInterestsService = hobbiesAndInterestsService;
        this.personalInfoService = personalInfoService;
        this.route = route;
        this.postService = postService;
        this.photoService = photoService;
        this.posts = [];
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = this.route.snapshot.parent.params['username'];
        this.hobbiesAndInterests = {};
        this.personalInfo = {};
        this.hobbiesAndInterestsService.getHobbiesAndInterestsByUserName(username)
            .then(function (data) { return _this.hobbiesAndInterests = data; })
            .catch(function (err) { return console.log(err); });
        this.personalInfoService.getPersonalInfoByUserName(username)
            .then(function (data) { return _this.personalInfo = data; })
            .catch(function (err) { return console.log(err); });
        this.postService.getUserPostsByUsername(username).subscribe(function (posts) {
            _this.posts = posts;
            _this.posts.forEach(function (post, index, postsArray) {
                if (post.type === 'PHOTO') {
                    _this.photoService.getUpload(post.uploadId).subscribe(function (upload) {
                        // works for single photo only
                        postsArray[index].photoUrl = upload.photos[0].photoUrl;
                    });
                }
            });
        });
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.page.html */ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.html"),
            styles: [__webpack_require__(/*! ./timeline.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_3__["HobbiesAndInterestsService"],
            src_app_shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_4__["PersonalInfoService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostService"],
            _shared_services_photos_service__WEBPACK_IMPORTED_MODULE_0__["PhotoService"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title inline-items\">\r\n\t\t\t\t\t<div class=\"btn btn-control btn-control-small bg-yellow\">\r\n\t\t\t\t\t\t<svg class=\"olymp-trophy-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-trophy-icon\"></use></svg>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h6 class=\"title\">Hassan’s Featured Video</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block features-video\">\r\n\t\t\t\t<div class=\"video-player\">\r\n\t\t\t\t\t<img src=\"/assets/img/video9.jpg\" alt=\"photo\">\r\n\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video\">\r\n\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t<div class=\"video-content\">\r\n\t\t\t\t\t\t<div class=\"h4 title\">Rock Garden Festival - Day 3</div>\r\n\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">12:06</time>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"features-video-content\">\r\n\r\n\t\t\t\t\t<article class=\"hentry post\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"02-ProfilePage.html\">Hassan Ahmad</a>\r\n\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t2 hours ago\r\n\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Edit Post</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Delete Post</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Turn Off Notifications</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Select as Featured</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<p>Last Saturday we went with <a href=\"#\"> Mathilda Brinker</a> to the “Rock Garden Festival” and had a blast! Here’s a small video of one of us in the crowd.</p>\r\n\r\n\t\t\t\t\t\t<div class=\"post-additional-info inline-items\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>14</span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<div class=\"comments-shared\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-speech-balloon-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-speech-balloon-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>19</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>27</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"control-block-button post-control-button\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-like-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-like-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</article>\r\n\r\n\t\t\t\t\t<div class=\"mCustomScrollbar\" data-mcs-theme=\"dark\">\r\n\r\n\t\t\t\t\t\t<ul class=\"comments-list\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar48-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Wakas Ali</a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t46 mins ago\r\n\t\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<p>I had a great time too!! We should do it again!</p>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>8</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar4-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Chris Greyson</a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t1 hour ago\r\n\t\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>7</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<form class=\"comment-form inline-items\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar74-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group with-icon-right \">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Press Enter to post...\"></textarea>\r\n\t\t\t\t\t\t\t\t<div class=\"add-options-message\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"options-message\" data-toggle=\"modal\" data-target=\"#update-header-photo\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-camera-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-camera-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<div class=\"h6 title\">James’s Videos</div>\r\n\r\n\t\t\t\t\t<div class=\"align-right\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-md-2\" data-toggle=\"modal\" data-target=\"#update-header-photo\">Upload Video  +</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block video-item\">\r\n\t\t\t\t<div class=\"video-player\">\r\n\t\t\t\t\t<img src=\"/assets/img/video10.jpg\" alt=\"photo\">\r\n\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video\">\r\n\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block-content video-content\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Rock Garden Festival - Day 3</a>\r\n\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">18:44</time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block video-item\">\r\n\t\t\t\t<div class=\"video-player\">\r\n\t\t\t\t\t<img src=\"/assets/img/video11.jpg\" alt=\"photo\">\r\n\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block-content video-content\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Rock Garden Festival - Day 2</a>\r\n\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">13:19</time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block video-item\">\r\n\t\t\t\t<div class=\"video-player\">\r\n\t\t\t\t\t<img src=\"/assets/img/video12.jpg\" alt=\"photo\">\r\n\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video\">\r\n\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block-content video-content\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Rock Garden Festival - Day 1</a>\r\n\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">15:47</time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block video-item\">\r\n\t\t\t\t<div class=\"video-player\">\r\n\t\t\t\t\t<img src=\"/assets/img/video13.jpg\" alt=\"photo\">\r\n\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block-content video-content\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">The Best Burgers in the State!</a>\r\n\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">0:23</time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block video-item\">\r\n\t\t\t\t<div class=\"video-player\">\r\n\t\t\t\t\t<img src=\"/assets/img/video14.jpg\" alt=\"photo\">\r\n\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block-content video-content\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Touring Manhattan Parks</a>\r\n\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">12:08</time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block video-item\">\r\n\t\t\t\t<div class=\"video-player\">\r\n\t\t\t\t\t<img src=\"/assets/img/video15.jpg\" alt=\"photo\">\r\n\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block-content video-content\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Sandwich from Mario’s</a>\r\n\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">5:54</time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block video-item\">\r\n\t\t\t\t<div class=\"video-player\">\r\n\t\t\t\t\t<img src=\"/assets/img/video16.jpg\" alt=\"photo\">\r\n\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block-content video-content\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Into the Amazon Jungle</a>\r\n\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">24:36</time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block video-item\">\r\n\t\t\t\t<div class=\"video-player\">\r\n\t\t\t\t\t<img src=\"/assets/img/video17.jpg\" alt=\"photo\">\r\n\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block-content video-content\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Record Store Day 2016</a>\r\n\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">7:52</time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.ts ***!
  \*********************************************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
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

var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.page.html */ "./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.html"),
            styles: [__webpack_require__(/*! ./videos.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/profile-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/profile-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/profile/profile.page */ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.ts");
/* harmony import */ var _pages_timeline_timeline_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/timeline/timeline.page */ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.ts");
/* harmony import */ var _pages_about_about_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.page */ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.ts");
/* harmony import */ var _pages_friends_friends_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/friends/friends.page */ "./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.ts");
/* harmony import */ var _pages_photos_photos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/photos/photos.page */ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.ts");
/* harmony import */ var _pages_videos_videos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/videos/videos.page */ "./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.ts");
/* harmony import */ var _shared_resolvers_profile_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/resolvers/profile.resolver */ "./src/app/shared/resolvers/profile.resolver.ts");
/* harmony import */ var _shared_guards_viewProfile_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/guards/viewProfile.guard */ "./src/app/shared/guards/viewProfile.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: ':username',
        component: _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
        resolve: { data: _shared_resolvers_profile_resolver__WEBPACK_IMPORTED_MODULE_8__["ProfileResolver"] },
        children: [
            {
                path: '',
                component: _pages_timeline_timeline_page__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"],
                canActivate: [_shared_guards_viewProfile_guard__WEBPACK_IMPORTED_MODULE_9__["ViewProfileGuard"]]
            },
            {
                path: 'about',
                component: _pages_about_about_page__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
            },
            {
                path: 'friends',
                component: _pages_friends_friends_page__WEBPACK_IMPORTED_MODULE_5__["FriendsComponent"],
                canActivate: [_shared_guards_viewProfile_guard__WEBPACK_IMPORTED_MODULE_9__["ViewProfileGuard"]]
            },
            {
                path: 'photos',
                component: _pages_photos_photos_page__WEBPACK_IMPORTED_MODULE_6__["PhotosComponent"],
                canActivate: [_shared_guards_viewProfile_guard__WEBPACK_IMPORTED_MODULE_9__["ViewProfileGuard"]]
            },
            {
                path: 'videos',
                component: _pages_videos_videos_page__WEBPACK_IMPORTED_MODULE_7__["VideosComponent"],
                canActivate: [_shared_guards_viewProfile_guard__WEBPACK_IMPORTED_MODULE_9__["ViewProfileGuard"]]
            }
        ],
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/profile.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/profile.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../shared/services/profile/hobbiesAndInterests.service */ "./src/app/shared/services/profile/hobbiesAndInterests.service.ts");
/* harmony import */ var _shared_services_photos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/services/photos.service */ "./src/app/shared/services/photos.service.ts");
/* harmony import */ var _shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/services/profile/personalInfo.service */ "./src/app/shared/services/profile/personalInfo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var _shared_modules_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modules/forms */ "./src/app/shared/modules/forms.ts");
/* harmony import */ var _shared_modules_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/modules/select */ "./src/app/shared/modules/select.ts");
/* harmony import */ var _shared_modules_file_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/modules/file-picker */ "./src/app/shared/modules/file-picker.ts");
/* harmony import */ var _shared_modules_swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/modules/swiper */ "./src/app/shared/modules/swiper.ts");
/* harmony import */ var _shared_modules_photo_post_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/modules/photo-post-viewer */ "./src/app/shared/modules/photo-post-viewer.ts");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/directives/directives.module */ "./src/app/shared/directives/directives.module.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/modules/full-layout/modules/profile/profile-routing.module.ts");
/* harmony import */ var _components_profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile-header/profile-header.component */ "./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.ts");
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/profile/profile.page */ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.ts");
/* harmony import */ var _pages_timeline_timeline_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/timeline/timeline.page */ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.ts");
/* harmony import */ var _pages_about_about_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/about/about.page */ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.ts");
/* harmony import */ var _pages_friends_friends_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/friends/friends.page */ "./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.ts");
/* harmony import */ var _pages_photos_photos_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/photos/photos.page */ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.ts");
/* harmony import */ var _pages_videos_videos_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/videos/videos.page */ "./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.ts");
/* harmony import */ var _shared_services_profile_educationsAndEmployments_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/services/profile/educationsAndEmployments.service */ "./src/app/shared/services/profile/educationsAndEmployments.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToModule"],
                _shared_modules_forms__WEBPACK_IMPORTED_MODULE_7__["FormsSharedModules"],
                _shared_modules_select__WEBPACK_IMPORTED_MODULE_8__["SelectSharedModules"],
                _shared_modules_file_picker__WEBPACK_IMPORTED_MODULE_9__["FilePickerModules"],
                _shared_modules_swiper__WEBPACK_IMPORTED_MODULE_10__["SwiperSharedModules"],
                _shared_modules_photo_post_viewer__WEBPACK_IMPORTED_MODULE_11__["PhotoPostViewerSharedModules"],
                _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_12__["DirectivesModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_13__["ProfileRoutingModule"]
            ],
            declarations: [
                _components_profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_14__["ProfileHeaderComponent"],
                _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _pages_timeline_timeline_page__WEBPACK_IMPORTED_MODULE_16__["TimelineComponent"],
                _pages_about_about_page__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
                _pages_friends_friends_page__WEBPACK_IMPORTED_MODULE_18__["FriendsComponent"],
                _pages_photos_photos_page__WEBPACK_IMPORTED_MODULE_19__["PhotosComponent"],
                _pages_videos_videos_page__WEBPACK_IMPORTED_MODULE_20__["VideosComponent"]
            ],
            providers: [
                _shared_services_photos_service__WEBPACK_IMPORTED_MODULE_1__["PhotoService"],
                _shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_0__["HobbiesAndInterestsService"],
                _shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_2__["PersonalInfoService"],
                _shared_services_profile_educationsAndEmployments_service__WEBPACK_IMPORTED_MODULE_21__["EducationsAndEmploymentsService"]
            ]
            //entryComponents: [PhotoPostViewerContentComponent]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-profile-profile-module.js.map