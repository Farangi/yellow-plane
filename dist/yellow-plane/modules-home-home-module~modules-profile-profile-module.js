(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module~modules-profile-profile-module"],{

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
                    .then(function (res) {
                    resolve("Submitted Succesfuly");
                })
                    .catch(function (err) { return reject(err); });
            })
                .catch(function (err) { return reject(err); });
        });
    };
    PostService.prototype.commentPost = function (postId, comment) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUserData().then(function (user) {
                _this.db.collection("comments").add({
                    message: comment,
                    postId: postId,
                    user: user.username
                })
                    .then(function (res) {
                    resolve('Comment posted successfuly');
                })
                    .catch(function (err) { return reject(err); });
            })
                .catch(function (err) { return reject(err); });
        });
    };
    PostService.prototype.replyComment = function (commentId, reply) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUserData().then(function (user) {
                _this.db.collection("replies").add({
                    message: reply,
                    commentId: commentId,
                    user: user.username
                })
                    .then(function (res) {
                    resolve('Reply posted successfuly');
                })
                    .catch(function (err) { return reject(err); });
            })
                .catch(function (err) { return reject(err); });
        });
    };
    PostService.prototype.getUserPostsByUsername = function (username) {
        // return this.db.collection('posts', ref => ref.where("user", "==", username))
        //   .valueChanges();
        return this.db
            .collection("posts", function (ref) { return ref.where("user", "==", username); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    PostService.prototype.getCommentsByPostId = function (postId) {
        return this.db.collection("comments", function (ref) { return ref.where("postId", "==", postId); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    PostService.prototype.getRepliesByCommentId = function (commentId) {
        return this.db.collection("replies", function (ref) { return ref.where("commentId", "==", commentId); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    PostService.prototype.likePost = function (post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUserData().then(function (user) {
                if (post.likes) {
                    if (!post.likes.find(function (like) { return like.username == user.username; })) {
                        post.likes.push({
                            username: user.username
                        });
                        _this.db.doc("posts/" + post.id)
                            .update({ likes: post.likes })
                            .then(function (res) {
                            resolve();
                        })
                            .catch(function (err) { return reject(err); });
                    }
                }
                else {
                    post.likes = [{ username: user.username }];
                    _this.db.doc("posts/" + post.id)
                        .update({ likes: post.likes })
                        .then(function (res) {
                        resolve();
                    })
                        .catch(function (err) { return reject(err); });
                }
            }).catch(function (err) { return reject(err); });
        });
    };
    PostService.prototype.likeComment = function (comment) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUserData().then(function (user) {
                if (comment.likes) {
                    if (!comment.likes.find(function (like) { return like.username == user.username; })) {
                        comment.likes.push({
                            username: user.username
                        });
                        _this.db.doc("comments/" + comment.id)
                            .update({ likes: comment.likes })
                            .then(function (res) {
                            resolve();
                        })
                            .catch(function (err) { return reject(err); });
                    }
                }
                else {
                    comment.likes = [{ username: user.username }];
                    _this.db.doc("comments/" + comment.id)
                        .update({ likes: comment.likes })
                        .then(function (res) {
                        resolve();
                    })
                        .catch(function (err) { return reject(err); });
                }
            }).catch(function (err) { return reject(err); });
        });
    };
    PostService.prototype.likeReply = function (reply) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUserData().then(function (user) {
                if (reply.likes) {
                    if (!reply.likes.find(function (like) { return like.username == user.username; })) {
                        reply.likes.push({
                            username: user.username
                        });
                        _this.db.doc("replies/" + reply.id)
                            .update({ likes: reply.likes })
                            .then(function (res) {
                            resolve();
                        })
                            .catch(function (err) { return reject(err); });
                    }
                }
                else {
                    reply.likes = [{ username: user.username }];
                    _this.db.doc("replies/" + reply.id)
                        .update({ likes: reply.likes })
                        .then(function (res) {
                        resolve();
                    })
                        .catch(function (err) { return reject(err); });
                }
            }).catch(function (err) { return reject(err); });
        });
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], PostService);
    return PostService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module~modules-profile-profile-module.js.map