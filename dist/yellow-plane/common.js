(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/photos.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/photos.service.ts ***!
  \***************************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhotoService = /** @class */ (function () {
    function PhotoService(db, storage, userService) {
        this.db = db;
        this.storage = storage;
        this.userService = userService;
        // For time error
        db.firestore.settings({ timestampsInSnapshots: true });
    }
    PhotoService.prototype.executeUpload = function (photosWithDetail, user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var PHOTOS = [];
            photosWithDetail.photos.forEach(function (photo) {
                var file = photo.underlyingFile;
                var path = "photos/" + user.uid + "/" + new Date().getTime() + "_" + photo.underlyingFile.name;
                var customMetadata = { app: "Yellow Plane" };
                // start upload
                _this.storage
                    .upload(path, file, { customMetadata: customMetadata })
                    .then(function (resp) {
                    resp.ref
                        .getDownloadURL()
                        .then(function (url) {
                        PHOTOS.push({
                            name: photo.underlyingFile.name,
                            photoUrl: url,
                            uploadedAt: new Date().toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                        });
                        if (PHOTOS.length === photosWithDetail.photos.length) {
                            _this.db
                                .collection("uploads")
                                .add({
                                userId: user.uid,
                                privacy: photosWithDetail.privacy,
                                description: photosWithDetail.description,
                                createdAt: new Date().toLocaleTimeString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                }),
                                photos: PHOTOS
                            })
                                .then(function (resp) {
                                resolve(resp.id);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        }
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        });
    };
    PhotoService.prototype.uploadPhotos = function (photosWithDetail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService
                .getCurrentUser()
                .then(function (user) {
                _this.executeUpload(photosWithDetail, user)
                    .then(function (resp) {
                    //console.log(resp);
                    resolve("Photos Successfuly Uploaded!");
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    PhotoService.prototype.uploadPhotosStatus = function (photosWithDetail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService
                .getCurrentUser()
                .then(function (user) {
                _this.executeUpload(photosWithDetail, user)
                    .then(function (resp) {
                    resolve(resp);
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    PhotoService.prototype.getUpload = function (id) {
        return this.db.doc("uploads/" + id).valueChanges();
    };
    PhotoService.prototype.getUploads = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var UPLOADS = [];
            var queryResponse = _this.db
                .collection("uploads", function (ref) { return ref.where("userId", "==", user.uid); })
                .valueChanges();
            queryResponse.subscribe(function (data) {
                data.forEach(function (upload) {
                    UPLOADS.push(upload);
                    if (data.length === UPLOADS.length) {
                        resolve(UPLOADS);
                    }
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    PhotoService.prototype.getCurrentUserPhotos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService
                .getCurrentUser()
                .then(function (user) {
                _this.getUploads(user)
                    .then(function (resp) {
                    resolve(resp);
                })
                    .catch(function (err) {
                    reject(err);
                });
                //resolve();
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    PhotoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "./src/app/shared/services/posts.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/posts.service.ts ***!
  \**************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(db, userService) {
        this.db = db;
        this.userService = userService;
        // For time error
        db.firestore.settings({ timestampsInSnapshots: true });
    }
    PostService.prototype.submitPost = function (post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService
                .getCurrentUserData()
                .then(function (user) {
                post.user = user.username;
                _this.db
                    .collection("posts")
                    .add(post)
                    .then(function (res) { resolve('Submitted Succesfuly'); })
                    .catch(function (err) { return reject(err); });
            })
                .catch(function (err) { return reject(err); });
        });
    };
    PostService.prototype.getUserPostsByUsername = function (username) {
        return this.db.collection('posts', function (ref) { return ref.where("user", "==", username); })
            .valueChanges();
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PostService);
    return PostService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map