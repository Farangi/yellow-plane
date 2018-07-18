(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/profile/hobbiesAndInterests.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/profile/hobbiesAndInterests.service.ts ***!
  \************************************************************************/
/*! exports provided: HobbiesAndInterestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesAndInterestsService", function() { return HobbiesAndInterestsService; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HobbiesAndInterestsService = /** @class */ (function () {
    function HobbiesAndInterestsService(db, userService) {
        this.db = db;
        this.userService = userService;
        // For time error
        db.firestore.settings({ timestampsInSnapshots: true });
    }
    HobbiesAndInterestsService.prototype.getHobbiesAndInterests = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser().then(function (user) {
                _this.db.doc("hobbies_and_interests/" + user.uid).ref.get()
                    .then(function (response) {
                    resolve(response.data());
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    HobbiesAndInterestsService.prototype.updateHobbiesAndInterests = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser().then(function (user) {
                var hobbiesAndInterestsRef = _this.db.doc("hobbies_and_interests/" + user.uid);
                hobbiesAndInterestsRef.set(data, { merge: true })
                    .then(function (res) {
                    resolve('Hobbies & Interests successfully updated');
                })
                    .catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    HobbiesAndInterestsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], HobbiesAndInterestsService);
    return HobbiesAndInterestsService;
}());



/***/ }),

/***/ "./src/app/shared/services/profile/personalInfo.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/profile/personalInfo.service.ts ***!
  \*****************************************************************/
/*! exports provided: PersonalInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoService", function() { return PersonalInfoService; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalInfoService = /** @class */ (function () {
    function PersonalInfoService(db, userService) {
        this.db = db;
        this.userService = userService;
        // For time error
        db.firestore.settings({ timestampsInSnapshots: true });
    }
    PersonalInfoService.prototype.getPersonalInfo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser().then(function (user) {
                _this.db.doc("personal_info/" + user.uid).ref.get()
                    .then(function (response) {
                    resolve(response.data());
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    PersonalInfoService.prototype.updatePersonalInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser().then(function (user) {
                var personalInfoRef = _this.db.doc("personal_info/" + user.uid);
                personalInfoRef.set(data, { merge: true })
                    .then(function (res) {
                    resolve('Info successfully updated');
                })
                    .catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    PersonalInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], PersonalInfoService);
    return PersonalInfoService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map