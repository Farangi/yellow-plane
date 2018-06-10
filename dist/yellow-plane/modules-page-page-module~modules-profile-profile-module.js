(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-page-page-module~modules-profile-profile-module"],{

/***/ "./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n\t\r\n\t<div *ngFor=\"let post of posts\">\r\n\t\t<div class=\"open-photo-thumb\">\r\n\t\t\t<div #photoSwiper=\"ngxSwiper\" class=\"swiper-container\" [swiper]=\"swiperConfig\">\r\n\t\t\t\t<!-- Additional required wrapper -->\r\n\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t<!-- Slides -->\r\n\t\t\t\t\t<div class=\"swiper-slide\">\r\n\r\n\t\t\t\t\t\t<div class=\"photo-item\" data-swiper-parallax=\"-300\" data-swiper-parallax-duration=\"500\">\r\n\t\t\t\t\t\t\t<img [src]=\"post.content\" alt=\"photo\">\r\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"tag-friends\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a> -->\r\n\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">{{post.postAlbumName}}</a>\r\n\t\t\t\t\t\t\t\t<time class=\"published\">{{post.postAlbumTime}}</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<!--Prev Next Arrows-->\r\n\t\t\t\t\t\t<!-- <a (click)=\"getNextPost(post.nextPostId)\">\r\n\t\t\t\t\t\t\t<svg class=\"btn-next-without olymp-popup-right-arrow\"><use xlink:href=\"/assets/icons/icons.svg#olymp-popup-right-arrow\"></use></svg>\r\n\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t<svg class=\"btn-prev-without olymp-popup-left-arrow\"><use xlink:href=\"/assets/icons/icons.svg#olymp-popup-left-arrow\"></use></svg>\r\n\t\t\t\t\t\t</a> -->\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"open-photo-content\">\r\n\r\n\t\t\t<article class=\"hentry post\">\r\n\r\n\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"02-ProfilePage.html\">{{post.by}}</a>\r\n\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t{{post.time}}\r\n\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Edit Post</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Delete Post</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<p>{{post.text}}</p>\r\n\r\n\t\t\t\t<div class=\"post-additional-info inline-items\">\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t<span>{{post.counts.likes}}</span>\r\n\t\t\t\t\t</a>\r\n\r\n\r\n\t\t\t\t\t<div class=\"comments-shared\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-speech-balloon-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-speech-balloon-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<span>{{post.counts.comments}}</span>\r\n\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<span>{{post.counts.shares}}</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"control-block-button post-control-button\">\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t<svg class=\"olymp-like-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-like-post-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</article>\r\n\r\n\t\t\t<div class=\"mCustomScrollbar\" data-mcs-theme=\"dark\">\r\n\r\n\t\t\t\t<ul class=\"comments-list\">\r\n\t\t\t\t\t<li *ngFor=\"let comment of post.comments\">\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img [src]=\"comment.userImg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">{{comment.by}}</a>\r\n\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t{{comment.time}}\r\n\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<p>{{comment.text}}</p>\r\n\r\n\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<span>{{comment.likes}}</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<form class=\"comment-form inline-items\">\r\n\r\n\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t<img src=\"/assets/img/avatar73-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t<div class=\"form-group with-icon-right \">\r\n\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Press Enter to post...\" ></textarea>\r\n\t\t\t\t\t\t<div class=\"add-options-message\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"options-message\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-camera-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-camera-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</form>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PhotoPostViewerContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPostViewerContentComponent", function() { return PhotoPostViewerContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoPostViewerContentComponent = /** @class */ (function () {
    function PhotoPostViewerContentComponent() {
        this.swiperConfig = { pagination: false };
        this.posts = [];
    }
    PhotoPostViewerContentComponent.prototype.ngOnInit = function () {
        this.posts.push(this.getPostData(this.id));
    };
    PhotoPostViewerContentComponent.prototype.getPostData = function (id) {
        var post = { id: this.posts.length, by: 'Hassan Ahmad', time: '2 hours ago', type: 'PHOTO', postAlbumName: 'Photoshoot Summer',
            postAlbumTime: '3 weeks ago', content: '/assets/img/open-photo2.jpg',
            text: 'Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.',
            counts: { likes: 125, comments: 61, shares: 25 },
            comments: [{ by: 'Maria Ahmad', userImg: '/assets/img/avatar48-sm.jpg', text: 'I had a great time too!! We should do it again!', likes: 8, time: '46 mins ago' },
                { by: 'Wakas Ali', userImg: '/assets/img/avatar4-sm.jpg', text: 'Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.', likes: 4, time: '1 hour ago' }],
            nextPostId: 5
        };
        return post;
    };
    //  	private openPostModal(){
    //  		this.photoPostModalRef = this.modalService.open(PhotoPostViewerContentComponent, { windowClass:'open-post-modal', centered: true });
    //     this.photoPostModalRef.result.then((result) => {
    //       console.log(`Closed with: ${result}`);
    //     }, 
    //     (reason) => {
    //       console.log(`Dismissed ${reason}`);
    //     });
    //  	}
    //  	public openPhotoPostModal(id) {
    // 	this.posts.push(this.getPostData(id));
    // 	this.openPostModal();
    // }
    PhotoPostViewerContentComponent.prototype.getNextPost = function (id) {
        var post = this.getPostData(id);
        post.by = 'Ahsan Ali';
        this.posts.push(post);
        console.log(this.directiveRef);
        this.directiveRef.nextSlide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('photoSwiper'),
        __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"])
    ], PhotoPostViewerContentComponent.prototype, "directiveRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PhotoPostViewerContentComponent.prototype, "id", void 0);
    PhotoPostViewerContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-post-viewer-content',
            template: __webpack_require__(/*! ./photo-post-viewer-content.component.html */ "./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.html"),
            styles: [__webpack_require__(/*! ./photo-post-viewer-content.component.scss */ "./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoPostViewerContentComponent);
    return PhotoPostViewerContentComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.ts ***!
  \************************************************************************************/
/*! exports provided: PhotoPostViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPostViewerComponent", function() { return PhotoPostViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _photo_post_viewer_content_photo_post_viewer_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo-post-viewer-content/photo-post-viewer-content.component */ "./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoPostViewerComponent = /** @class */ (function () {
    function PhotoPostViewerComponent(modalService) {
        this.modalService = modalService;
    }
    PhotoPostViewerComponent.prototype.ngOnInit = function () {
    };
    PhotoPostViewerComponent.prototype.openPhotoPostModal = function (id) {
        console.log(id);
        //this.modal.openPhotoPostModal(id);
        this.photoPostModalRef = this.modalService.open(_photo_post_viewer_content_photo_post_viewer_content_component__WEBPACK_IMPORTED_MODULE_2__["PhotoPostViewerContentComponent"], { windowClass: 'open-post-modal', centered: true });
        this.photoPostModalRef.componentInstance.name = id;
    };
    PhotoPostViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-post-viewer',
            template: __webpack_require__(/*! ./photo-post-viewer.component.html */ "./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.html"),
            styles: [__webpack_require__(/*! ./photo-post-viewer.component.scss */ "./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], PhotoPostViewerComponent);
    return PhotoPostViewerComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/photo-post-viewer.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/modules/photo-post-viewer.ts ***!
  \*****************************************************/
/*! exports provided: PhotoPostViewerSharedModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPostViewerSharedModules", function() { return PhotoPostViewerSharedModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper */ "./src/app/shared/modules/swiper.ts");
/* harmony import */ var _components_photo_post_viewer_content_photo_post_viewer_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/photo-post-viewer-content/photo-post-viewer-content.component */ "./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.ts");
/* harmony import */ var _components_photo_post_viewer_photo_post_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/photo-post-viewer/photo-post-viewer.component */ "./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PhotoPostViewerSharedModules = /** @class */ (function () {
    function PhotoPostViewerSharedModules() {
    }
    PhotoPostViewerSharedModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _swiper__WEBPACK_IMPORTED_MODULE_1__["SwiperSharedModules"]
            ],
            declarations: [
                _components_photo_post_viewer_photo_post_viewer_component__WEBPACK_IMPORTED_MODULE_3__["PhotoPostViewerComponent"],
                _components_photo_post_viewer_content_photo_post_viewer_content_component__WEBPACK_IMPORTED_MODULE_2__["PhotoPostViewerContentComponent"]
            ],
            exports: [
                _components_photo_post_viewer_photo_post_viewer_component__WEBPACK_IMPORTED_MODULE_3__["PhotoPostViewerComponent"],
            ],
            entryComponents: [_components_photo_post_viewer_content_photo_post_viewer_content_component__WEBPACK_IMPORTED_MODULE_2__["PhotoPostViewerContentComponent"]]
        })
    ], PhotoPostViewerSharedModules);
    return PhotoPostViewerSharedModules;
}());



/***/ })

}]);
//# sourceMappingURL=modules-page-page-module~modules-profile-profile-module.js.map