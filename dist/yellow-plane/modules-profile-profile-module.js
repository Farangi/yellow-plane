(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-profile-profile-module"],{

/***/ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js ***!
  \************************************************************************/
/*! exports provided: SwiperComponent, SwiperDirective, SWIPER_CONFIG, SwiperConfig, SwiperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperComponent", function() { return SwiperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperDirective", function() { return SwiperDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWIPER_CONFIG", function() { return SWIPER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperConfig", function() { return SwiperConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperModule", function() { return SwiperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ SWIPER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SWIPER_CONFIG');
var /** @type {?} */ SwiperEvents = [
    'init',
    'beforeDestroy',
    'scroll',
    'progress',
    'keyPress',
    'beforeResize',
    'afterResize',
    'resize',
    'breakpoint',
    'beforeResize',
    'sliderMove',
    'slideChange',
    'setTranslate',
    'setTransition',
    'fromEdge',
    'reachEnd',
    'reachBeginning',
    'autoplay',
    'autoplayStop',
    'autoplayStart',
    'imagesReady',
    'lazyImageLoad',
    'lazyImageReady',
    'scrollDragEnd',
    'scrollDragMove',
    'scrollDragStart',
    'swiperTap',
    'swiperClick',
    'swiperDoubleTap',
    'swiperTouchEnd',
    'swiperTouchMove',
    'swiperTouchStart',
    'swiperTouchMoveOpposite',
    'swiperTransitionEnd',
    'swiperTransitionStart',
    'slideNextTransitionEnd',
    'slideNextTransitionStart',
    'slidePrevTransitionEnd',
    'slidePrevTransitionStart',
    'slideChangeTransitionEnd',
    'slideChangeTransitionStart'
];
var SwiperConfig = /** @class */ (function () {
    function SwiperConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @param {?=} target
     * @return {?}
     */
    SwiperConfig.prototype.assign = /**
     * @param {?=} config
     * @param {?=} target
     * @return {?}
     */
    function (config, target) {
        if (config === void 0) { config = {}; }
        target = target || this;
        for (var /** @type {?} */ key in config) {
            if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' &&
                (typeof HTMLElement === 'undefined' || !(config[key] instanceof HTMLElement))) {
                target[key] = {};
                this.assign(config[key], target[key]);
            }
            else {
                target[key] = config[key];
            }
        }
    };
    return SwiperConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SwiperDirective = /** @class */ (function () {
    function SwiperDirective(platformId, zone, elementRef, differs, defaults) {
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.initialIndex = null;
        this.configDiff = null;
        this.disabled = false;
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFOREDESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_RESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFORERESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_KEYPRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDERMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SETTRANSLATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SETTRANSITION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_FROMEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_REACHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_REACHBEGINNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAYSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAYSTOP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_IMAGESREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LAZYIMAGELOAD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LAZYIMAGEREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_CLICK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_DOUBLETAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHMOVEOPPOSITE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(SwiperDirective.prototype, "index", {
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index != null) {
                this.setIndex(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        var /** @type {?} */ params = new SwiperConfig(this.defaults);
        params.assign(this.config); // Custom configuration
        if (params.scrollbar === true) {
            params.scrollbar = {
                el: '.swiper-scrollbar'
            };
        }
        if (params.pagination === true) {
            params.pagination = {
                el: '.swiper-pagination'
            };
        }
        if (params.navigation === true) {
            params.navigation = {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            };
        }
        if (this.disabled) {
            params.allowSlidePrev = false;
            params.allowSlideNext = false;
        }
        if (this.initialIndex != null) {
            params.initialSlide = this.initialIndex;
            this.initialIndex = null;
        }
        params.on = {
            slideChange: function () {
                _this.zone.run(function () {
                    if (_this.instance) {
                        _this.indexChange.emit(_this.instance.realIndex);
                    }
                });
            }
        };
        this.zone.runOutsideAngular(function () {
            _this.instance = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__(_this.elementRef.nativeElement, params);
        });
        if (params.init !== false) {
            this.S_INIT.emit(this.instance);
        }
        // Add native Swiper event handling
        SwiperEvents.forEach(function (eventName) {
            var /** @type {?} */ swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
            _this.instance.on(swiperEvent, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args.length === 1) {
                    args = args[0];
                }
                var /** @type {?} */ output = "S_" + swiperEvent.toUpperCase();
                var /** @type {?} */ emitter = /** @type {?} */ (_this[/** @type {?} */ (output)]);
                if (emitter.observers.length > 0) {
                    _this.zone.run(function () {
                        emitter.emit(args);
                    });
                }
            });
        });
        if (!this.configDiff) {
            this.configDiff = this.differs.find(this.config || {}).create();
            this.configDiff.diff(this.config || {});
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.instance) {
            this.zone.runOutsideAngular(function () {
                _this.instance.destroy(true, _this.instance.initialized || false);
            });
            this.instance = null;
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.configDiff) {
            var /** @type {?} */ changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.initialIndex = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SwiperDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.instance && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular(function () {
                        _this.ngOnDestroy();
                        _this.ngAfterViewInit();
                    });
                }
                else if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular(function () {
                        _this.ngOnDestroy();
                        _this.ngAfterViewInit();
                    });
                }
            }
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.swiper = /**
     * @return {?}
     */
    function () {
        return this.instance;
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.instance) {
            this.zone.runOutsideAngular(function () {
                _this.instance.init();
            });
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.instance) {
                _this.zone.runOutsideAngular(function () {
                    _this.instance.update();
                });
            }
        }, 0);
    };
    /**
     * @param {?=} real
     * @return {?}
     */
    SwiperDirective.prototype.getIndex = /**
     * @param {?=} real
     * @return {?}
     */
    function (real) {
        if (!this.instance) {
            return this.initialIndex || 0;
        }
        else {
            return real ? this.instance.realIndex : this.instance.activeIndex;
        }
    };
    /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.setIndex = /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (index, speed, silent) {
        var _this = this;
        if (!this.instance) {
            this.initialIndex = index;
        }
        else {
            var /** @type {?} */ realIndex_1 = index * this.instance.params.slidesPerGroup;
            if (this.instance.params.loop) {
                realIndex_1 += this.instance.loopedSlides;
            }
            this.zone.runOutsideAngular(function () {
                _this.instance.slideTo(realIndex_1, speed, !silent);
            });
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.prevSlide = /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (speed, silent) {
        var _this = this;
        if (this.instance) {
            this.zone.runOutsideAngular(function () {
                _this.instance.slidePrev(speed, !silent);
            });
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.nextSlide = /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (speed, silent) {
        var _this = this;
        if (this.instance) {
            this.zone.runOutsideAngular(function () {
                _this.instance.slideNext(speed, !silent);
            });
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.stopAutoplay = /**
     * @param {?=} reset
     * @return {?}
     */
    function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.instance && this.instance.autoplay) {
            this.zone.runOutsideAngular(function () {
                _this.instance.autoplay.stop();
            });
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.startAutoplay = /**
     * @param {?=} reset
     * @return {?}
     */
    function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.instance && this.instance.autoplay) {
            this.zone.runOutsideAngular(function () {
                _this.instance.autoplay.start();
            });
        }
    };
    SwiperDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[swiper]',
                    exportAs: 'ngxSwiper'
                },] }
    ];
    /** @nocollapse */
    SwiperDirective.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SWIPER_CONFIG,] },] },
    ]; };
    SwiperDirective.propDecorators = {
        "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['swiper',] },],
        "indexChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "S_INIT": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['init',] },],
        "S_BEFOREDESTROY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeDestroy',] },],
        "S_SCROLL": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scroll',] },],
        "S_PROGRESS": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['progress',] },],
        "S_RESIZE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['resize',] },],
        "S_BREAKPOINT": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['breakpoint',] },],
        "S_BEFORERESIZE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeResize',] },],
        "S_KEYPRESS": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['keyPress',] },],
        "S_SLIDERMOVE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['sliderMove',] },],
        "S_SLIDECHANGE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChange',] },],
        "S_SETTRANSLATE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['setTranslate',] },],
        "S_SETTRANSITION": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['setTransition',] },],
        "S_FROMEDGE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['fromEdge',] },],
        "S_REACHEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['reachEnd',] },],
        "S_REACHBEGINNING": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['reachBeginning',] },],
        "S_AUTOPLAY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplay',] },],
        "S_AUTOPLAYSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplayStart',] },],
        "S_AUTOPLAYSTOP": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplayStop',] },],
        "S_IMAGESREADY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['imagesReady',] },],
        "S_LAZYIMAGELOAD": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['lazyImageLoad',] },],
        "S_LAZYIMAGEREADY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['lazyImageReady',] },],
        "S_SCROLLDRAGEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragEnd',] },],
        "S_SCROLLDRAGMOVE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragMove',] },],
        "S_SCROLLDRAGSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragStart',] },],
        "S_TAP": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTap',] },],
        "S_CLICK": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperClick',] },],
        "S_DOUBLETAP": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperDoubleTap',] },],
        "S_TOUCHEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchEnd',] },],
        "S_TOUCHMOVE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchMove',] },],
        "S_TOUCHSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchStart',] },],
        "S_TOUCHMOVEOPPOSITE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchMoveOpposite',] },],
        "S_TRANSITIONEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTransitionEnd',] },],
        "S_TRANSITIONSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTransitionStart',] },],
        "S_SLIDEPREVTRANSITIONEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slidePrevTransitionEnd',] },],
        "S_SLIDEPREVTRANSITIONSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slidePrevTransitionStart',] },],
        "S_SLIDENEXTTRANSITIONEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideNextTransitionEnd',] },],
        "S_SLIDENEXTTRANSITIONSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideNextTransitionStart',] },],
        "S_SLIDECHANGETRANSITIONEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChangeTransitionEnd',] },],
        "S_SLIDECHANGETRANSITIONSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChangeTransitionStart',] },],
    };
    return SwiperDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SwiperComponent = /** @class */ (function () {
    function SwiperComponent(zone, cdRef, platformId, defaults) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.mo = null;
        this.swiperConfig = null;
        this.paginationBackup = null;
        this.paginationConfig = null;
        this.index = null;
        this.disabled = false;
        this.useSwiperClass = true;
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFOREDESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_RESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFORERESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_KEYPRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDERMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SETTRANSLATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SETTRANSITION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_FROMEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_REACHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_REACHBEGINNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAYSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAYSTOP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_IMAGESREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LAZYIMAGELOAD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LAZYIMAGEREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_CLICK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_DOUBLETAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHMOVEOPPOSITE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(SwiperComponent.prototype, "isAtLast", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isEnd'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isAtFirst", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isBeginning'];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwiperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(function () {
            _this.updateClasses();
            if (_this.swiperSlides && typeof MutationObserver !== 'undefined') {
                _this.mo = new MutationObserver(function (mutations) {
                    _this.updateClasses();
                });
                _this.mo.observe(_this.swiperSlides.nativeElement, { childList: true });
            }
        });
        window.setTimeout(function () {
            if (_this.directiveRef) {
                _this.S_INIT.emit();
                _this.directiveRef.indexChange = _this.indexChange;
                SwiperEvents.forEach(function (eventName) {
                    if (_this.directiveRef) {
                        var /** @type {?} */ output = "S_" + eventName.replace('swiper', '').toUpperCase();
                        var /** @type {?} */ directiveOutput = /** @type {?} */ (output);
                        var /** @type {?} */ componentOutput = /** @type {?} */ (output);
                        _this.directiveRef[directiveOutput] = /** @type {?} */ (_this[componentOutput]);
                    }
                });
            }
        }, 0);
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.mo) {
            this.mo.disconnect();
        }
        if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
        }
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.swiperConfig = new SwiperConfig(this.defaults);
        this.swiperConfig.assign(this.config); // Custom configuration
        if (this.swiperConfig.pagination === true ||
            (this.swiperConfig.pagination && typeof this.swiperConfig.pagination === 'object' &&
                (!this.swiperConfig.pagination.type || this.swiperConfig.pagination.type === 'bullets') &&
                !this.swiperConfig.pagination.renderBullet && this.swiperConfig.pagination.el === '.swiper-pagination')) {
            this.config = this.config || {};
            if (!this.paginationConfig) {
                this.paginationBackup = this.config.pagination;
                this.paginationConfig = {
                    el: '.swiper-pagination',
                    renderBullet: function (index, className) {
                        var /** @type {?} */ children = _this.swiperSlides ? _this.swiperSlides.nativeElement.children : [];
                        var /** @type {?} */ bullet = "<span class=\"" + className + " " + className + "-middle\" index=\"" + index + "\"></span>";
                        if (index === 0) {
                            bullet = "<span class=\"" + className + " " + className + "-first\" index=\"" + index + "\"></span>";
                        }
                        else if (index === (children.length - 1)) {
                            bullet = "<span class=\"" + className + " " + className + "-last\" index=\"" + index + "\"></span>";
                        }
                        return "<span class=\"swiper-pagination-handle\" index=\"" + index + "\">" + bullet + "</span>";
                    }
                };
            }
            if (this.swiperConfig.pagination === true) {
                this.config.pagination = this.paginationConfig;
            }
            else {
                this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
            }
        }
        return /** @type {?} */ (this.config);
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.updateClasses = /**
     * @return {?}
     */
    function () {
        if (this.swiperSlides) {
            var /** @type {?} */ updateNeeded = false;
            var /** @type {?} */ children = this.swiperSlides.nativeElement.children;
            for (var /** @type {?} */ i = 0; i < children.length; i++) {
                if (!children[i].classList.contains('swiper-slide')) {
                    updateNeeded = true;
                    children[i].classList.add('swiper-slide');
                }
            }
            if (updateNeeded && this.directiveRef) {
                this.directiveRef.update();
            }
        }
        this.cdRef.detectChanges();
    };
    SwiperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'swiper',
                    exportAs: 'ngxSwiper',
                    template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\">\n  <div #swiperSlides class=\"swiper-wrapper\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"swiper-scrollbar\" [hidden]=\"swiperConfig?.scrollbar !== true && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar'\"></div>\n\n  <div class=\"swiper-button-prev\" [hidden]=\"swiperConfig?.navigation !== true && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev'\" [attr.disabled]=\"isAtFirst ||\u00A0null\"></div>\n  <div class=\"swiper-button-next\" [hidden]=\"swiperConfig?.navigation !== true && swiperConfig?.navigation?.nextEl !== '.swiper-button-next'\" [attr.disabled]=\"isAtLast || null\"></div>\n\n  <div class=\"swiper-pagination\" [hidden]=\"swiperConfig?.pagination !== true && swiperConfig?.pagination?.el !== '.swiper-pagination'\" (click)=\"directiveRef?.setIndex($event.target.getAttribute('index'))\"></div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["/**\n * Swiper 4.2.6\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: May 1, 2018\n */\n.swiper-container {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1; }\n\n.swiper-container-no-flexbox .swiper-slide {\n  float: left; }\n\n.swiper-container-vertical > .swiper-wrapper {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform,-webkit-transform;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\n.swiper-container-android .swiper-slide, .swiper-wrapper {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.swiper-container-multirow > .swiper-wrapper {\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.swiper-container-free-mode > .swiper-wrapper {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  margin: 0 auto; }\n\n.swiper-slide {\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform,-webkit-transform; }\n\n.swiper-invisible-blank-slide {\n  visibility: hidden; }\n\n.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {\n  height: auto; }\n\n.swiper-container-autoheight .swiper-wrapper {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-transition-property: height,-webkit-transform;\n  transition-property: height,-webkit-transform;\n  -o-transition-property: transform,height;\n  transition-property: transform,height;\n  transition-property: transform,height,-webkit-transform; }\n\n.swiper-container-3d {\n  -webkit-perspective: 1200px;\n  perspective: 1200px; }\n\n.swiper-container-3d .swiper-cube-shadow, .swiper-container-3d .swiper-slide, .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top, .swiper-container-3d .swiper-wrapper {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10; }\n\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); }\n\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); }\n\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); }\n\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); }\n\n.swiper-container-wp8-horizontal, .swiper-container-wp8-horizontal > .swiper-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y; }\n\n.swiper-container-wp8-vertical, .swiper-container-wp8-vertical > .swiper-wrapper {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x; }\n\n.swiper-button-next, .swiper-button-prev {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {\n  opacity: .35;\n  cursor: auto;\n  pointer-events: none; }\n\n.swiper-button-prev, .swiper-container-rtl .swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  left: 10px;\n  right: auto; }\n\n.swiper-button-next, .swiper-container-rtl .swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  right: 10px;\n  left: auto; }\n\n.swiper-button-prev.swiper-button-white, .swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-next.swiper-button-white, .swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-prev.swiper-button-black, .swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-next.swiper-button-black, .swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-lock {\n  display: none; }\n\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  -webkit-transition: .3s opacity;\n  -o-transition: .3s opacity;\n  transition: .3s opacity;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10; }\n\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {\n  bottom: 10px;\n  left: 0;\n  width: 100%; }\n\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0; }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n  position: relative; }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33); }\n\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: .2; }\n\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer; }\n\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #007aff; }\n\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n  transform: translate3d(0, -50%, 0); }\n\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block; }\n\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  width: 8px; }\n\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  -webkit-transition: .2s top,.2s -webkit-transform;\n  transition: .2s top,.2s -webkit-transform;\n  -o-transition: .2s transform,.2s top;\n  transition: .2s transform,.2s top;\n  transition: .2s transform,.2s top,.2s -webkit-transform; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  white-space: nowrap; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: .2s left,.2s -webkit-transform;\n  transition: .2s left,.2s -webkit-transform;\n  -o-transition: .2s transform,.2s left;\n  transition: .2s transform,.2s left;\n  transition: .2s transform,.2s left,.2s -webkit-transform; }\n\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: .2s right,.2s -webkit-transform;\n  transition: .2s right,.2s -webkit-transform;\n  -o-transition: .2s transform,.2s right;\n  transition: .2s transform,.2s right;\n  transition: .2s transform,.2s right,.2s -webkit-transform; }\n\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute; }\n\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: left top;\n  -ms-transform-origin: left top;\n  transform-origin: left top; }\n\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  -webkit-transform-origin: right top;\n  -ms-transform-origin: right top;\n  transform-origin: right top; }\n\n.swiper-container-horizontal > .swiper-pagination-progressbar, .swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0; }\n\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-container-vertical > .swiper-pagination-progressbar {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0; }\n\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #fff; }\n\n.swiper-pagination-progressbar.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.25); }\n\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {\n  background: #fff; }\n\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000; }\n\n.swiper-pagination-progressbar.swiper-pagination-black {\n  background: rgba(0, 0, 0, 0.25); }\n\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {\n  background: #000; }\n\n.swiper-pagination-lock {\n  display: none; }\n\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1); }\n\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%; }\n\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%; }\n\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0; }\n\n.swiper-scrollbar-cursor-drag {\n  cursor: move; }\n\n.swiper-scrollbar-lock {\n  display: none; }\n\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center; }\n\n.swiper-zoom-container > canvas, .swiper-zoom-container > img, .swiper-zoom-container > svg {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain; }\n\n.swiper-slide-zoomed {\n  cursor: move; }\n\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  -webkit-transform-origin: 50%;\n  -ms-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite; }\n\n.swiper-lazy-preloader:after {\n  display: block;\n  content: '';\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat; }\n\n.swiper-lazy-preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000; }\n\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out; }\n\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  -webkit-transition-property: opacity;\n  -o-transition-property: opacity;\n  transition-property: opacity; }\n\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none; }\n\n.swiper-container-fade .swiper-slide-active, .swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto; }\n\n.swiper-container-cube {\n  overflow: visible; }\n\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%; }\n\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none; }\n\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0;\n  -ms-transform-origin: 100% 0;\n  transform-origin: 100% 0; }\n\n.swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto; }\n\n.swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-next, .swiper-container-cube .swiper-slide-next + .swiper-slide, .swiper-container-cube .swiper-slide-prev {\n  pointer-events: auto;\n  visibility: visible; }\n\n.swiper-container-cube .swiper-slide-shadow-bottom, .swiper-container-cube .swiper-slide-shadow-left, .swiper-container-cube .swiper-slide-shadow-right, .swiper-container-cube .swiper-slide-shadow-top {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: .6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0; }\n\n.swiper-container-flip {\n  overflow: visible; }\n\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1; }\n\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none; }\n\n.swiper-container-flip .swiper-slide-active, .swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto; }\n\n.swiper-container-flip .swiper-slide-shadow-bottom, .swiper-container-flip .swiper-slide-shadow-left, .swiper-container-flip .swiper-slide-shadow-right, .swiper-container-flip .swiper-slide-shadow-top {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.swiper-container-coverflow .swiper-wrapper {\n  -ms-perspective: 1200px; }\n\nswiper {\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  swiper[fxflex] {\n    display: flex;\n    flex-direction: inherit;\n    -webkit-box-orient: inherit;\n    -webkit-box-direction: inherit;\n    min-width: 0;\n    min-height: 0; }\n    swiper[fxflex] > .swiper.s-wrapper {\n      flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      -webkit-box-flex: 1;\n      min-width: 0;\n      min-height: 0; }\n  swiper > .swiper.s-wrapper {\n    width: 100%;\n    height: 100%; }\n    swiper > .swiper.s-wrapper .swiper-wrapper .swiper-slide {\n      overflow: auto;\n      width: 100%;\n      height: 100%;\n      max-width: 100%;\n      max-height: 100%; }\n    swiper > .swiper.s-wrapper .swiper-pagination {\n      pointer-events: none; }\n      swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n        position: relative;\n        display: inline-block;\n        padding: 4px;\n        margin: 2px;\n        cursor: pointer;\n        pointer-events: all; }\n        swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet {\n          display: inline-block;\n          margin: 0;\n          pointer-events: none; }\n        swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet-last,\n        swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet-first {\n          border: 1px solid rgba(0, 0, 0, 0.5); }\n    swiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-button-prev {\n      top: 10px;\n      left: 50%;\n      margin-top: 0;\n      margin-left: -13px;\n      transform: rotate(90deg); }\n    swiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-button-next {\n      top: auto;\n      bottom: 10px;\n      left: 50%;\n      margin-top: 0;\n      margin-left: -13px;\n      transform: rotate(90deg); }\n    swiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-scrollbar {\n      width: 8px;\n      transition: width 250ms ease-in-out; }\n      swiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-scrollbar:hover {\n        width: 16px; }\n    swiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle {\n      display: block; }\n      swiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet {\n        display: inline-block; }\n        swiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last, swiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first {\n          margin: 0 -1px; }\n    swiper > .swiper.s-wrapper.swiper-container-horizontal > .swiper-scrollbar {\n      height: 8px;\n      transition: height 250ms ease-in-out; }\n      swiper > .swiper.s-wrapper.swiper-container-horizontal > .swiper-scrollbar:hover {\n        height: 16px; }\n    swiper > .swiper.s-wrapper.swiper-container-horizontal > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last, swiper > .swiper.s-wrapper.swiper-container-horizontal > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first {\n      margin: -1px 0; }\n\n/*# sourceMappingURL=swiper.component.css.map */"]
                }] }
    ];
    /** @nocollapse */
    SwiperComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SWIPER_CONFIG,] },] },
    ]; };
    SwiperComponent.propDecorators = {
        "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "useSwiperClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "indexChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "swiperSlides": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['swiperSlides',] },],
        "directiveRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [SwiperDirective,] },],
        "S_INIT": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['init',] },],
        "S_BEFOREDESTROY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeDestroy',] },],
        "S_SCROLL": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scroll',] },],
        "S_PROGRESS": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['progress',] },],
        "S_RESIZE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['resize',] },],
        "S_BREAKPOINT": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['breakpoint',] },],
        "S_BEFORERESIZE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeResize',] },],
        "S_KEYPRESS": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['keyPress',] },],
        "S_SLIDERMOVE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['sliderMove',] },],
        "S_SLIDECHANGE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChange',] },],
        "S_SETTRANSLATE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['setTranslate',] },],
        "S_SETTRANSITION": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['setTransition',] },],
        "S_FROMEDGE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['fromEdge',] },],
        "S_REACHEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['reachEnd',] },],
        "S_REACHBEGINNING": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['reachBeginning',] },],
        "S_AUTOPLAY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplay',] },],
        "S_AUTOPLAYSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplayStart',] },],
        "S_AUTOPLAYSTOP": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplayStop',] },],
        "S_IMAGESREADY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['imagesReady',] },],
        "S_LAZYIMAGELOAD": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['lazyImageLoad',] },],
        "S_LAZYIMAGEREADY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['lazyImageReady',] },],
        "S_SCROLLDRAGEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragEnd',] },],
        "S_SCROLLDRAGMOVE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragMove',] },],
        "S_SCROLLDRAGSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragStart',] },],
        "S_TAP": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTap',] },],
        "S_CLICK": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperClick',] },],
        "S_DOUBLETAP": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperDoubleTap',] },],
        "S_TOUCHEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchEnd',] },],
        "S_TOUCHMOVE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchMove',] },],
        "S_TOUCHSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchStart',] },],
        "S_TOUCHMOVEOPPOSITE": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchMoveOpposite',] },],
        "S_TRANSITIONEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTransitionEnd',] },],
        "S_TRANSITIONSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTransitionStart',] },],
        "S_SLIDEPREVTRANSITIONEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slidePrevTransitionEnd',] },],
        "S_SLIDEPREVTRANSITIONSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slidePrevTransitionStart',] },],
        "S_SLIDENEXTTRANSITIONEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideNextTransitionEnd',] },],
        "S_SLIDENEXTTRANSITIONSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideNextTransitionStart',] },],
        "S_SLIDECHANGETRANSITIONEND": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChangeTransitionEnd',] },],
        "S_SLIDECHANGETRANSITIONSTART": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChangeTransitionStart',] },],
    };
    return SwiperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SwiperModule = /** @class */ (function () {
    function SwiperModule() {
    }
    SwiperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [SwiperComponent, SwiperDirective],
                    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], SwiperComponent, SwiperDirective]
                },] }
    ];
    return SwiperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-swiper-wrapper.es5.js.map


/***/ }),

/***/ "./node_modules/swiper/dist/js/swiper.js":
/*!***********************************************!*\
  !*** ./node_modules/swiper/dist/js/swiper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 4.3.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 27, 2018
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  /**
   * SSR Window 1.0.0
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: February 10, 2018
   */
  var d;
  if (typeof document === 'undefined') {
    d = {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: '',
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {},
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          },
        };
      },
      location: { hash: '' },
    };
  } else {
    // eslint-disable-next-line
    d = document;
  }

  var doc = d;

  var w;
  if (typeof window === 'undefined') {
    w = {
      document: doc,
      navigator: {
        userAgent: '',
      },
      location: {},
      history: {},
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return '';
          },
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {},
    };
  } else {
    // eslint-disable-next-line
    w = window;
  }

  var win = w;

  /**
   * Dom7 2.0.6
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2018, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: May 27, 2018
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) { arr.push(els[i]); }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    var this$1 = this;

    if (typeof className === 'undefined') {
      return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.add(classes[i]); }
      }
    }
    return this;
  }
  function removeClass(className) {
    var this$1 = this;

    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.remove(classes[i]); }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) { return false; }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var this$1 = this;

    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.toggle(classes[i]); }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;
    var this$1 = this;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) { return this[0].getAttribute(attrs); }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this$1[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this$1[i][attrName] = attrs[attrName];
          this$1[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    var this$1 = this;

    for (var i = 0; i < this.length; i += 1) {
      this$1[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var this$1 = this;

    var el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute(("data-" + key));
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this$1[i];
      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    var this$1 = this;

    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this$1[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    var this$1 = this;

    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this$1[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var this$1 = this;
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) { return; }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
      else {
        var parents = $(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this$1[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var this$1 = this;
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this$1[j];
        var handlers = (void 0);
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var this$1 = this;
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this$1[j];
        var evt = (void 0);
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) { return; }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) { return win.getComputedStyle(this[0], null); }
    return {};
  }
  function css(props, value) {
    var this$1 = this;

    var i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this$1[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this$1[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    var this$1 = this;

    // Don't bother continuing without a callback
    if (!callback) { return this; }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this$1[i], i, this$1[i]) === false) {
        // End the loop early
        return this$1;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  // eslint-disable-next-line
  function html(html) {
    var this$1 = this;

    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this$1[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    var this$1 = this;

    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this$1[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') { return false; }
    if (typeof selector === 'string') {
      if (el.matches) { return el.matches(selector); }
      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    } else if (selector === doc) { return el === doc; }
    else if (selector === win) { return el === win; }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) { i += 1; }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') { return this; }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) { return new Dom7([]); }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var this$1 = this;
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this$1[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this$1[i].appendChild(newChild[j]);
          }
        } else {
          this$1[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var this$1 = this;

    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this$1[i].insertBefore(tempDiv.childNodes[j], this$1[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this$1[i].insertBefore(newChild[j], this$1[i].childNodes[0]);
        }
      } else {
        this$1[i].insertBefore(newChild, this$1[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) { nextEls.push(next); }
      } else { nextEls.push(next); }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) { prevEls.push(prev); }
      } else { prevEls.push(prev); }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var this$1 = this;

    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this$1[i].parentNode !== null) {
        if (selector) {
          if ($(this$1[i].parentNode).is(selector)) { parents.push(this$1[i].parentNode); }
        } else {
          parents.push(this$1[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var this$1 = this;

    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this$1[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) { parents.push(parent); }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var this$1 = this;

    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this$1[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var this$1 = this;

    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this$1[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    var this$1 = this;

    for (var i = 0; i < this.length; i += 1) {
      if (this$1[i].parentNode) { this$1[i].parentNode.removeChild(this$1[i]); }
    }
    return this;
  }
  function add() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if ( delay === void 0 ) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if ( axis === void 0 ) axis = 'x';

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[4]); }
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[5]); }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [], len$1 = arguments.length;
      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    var testDiv = doc.createElement('div');
    return {
      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
        return !!(('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
      }()),

      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,

      transition: (function checkTransition() {
        var style = testDiv.style;
        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
      }()),
      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
        var style = testDiv.style;
        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
      }()),

      flexbox: (function checkFlexbox() {
        var style = testDiv.style;
        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) { return true; }
        }
        return false;
      }()),

      observer: (function checkObserver() {
        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
      }()),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),

      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());

  var SwiperClass = function SwiperClass(params) {
    if ( params === void 0 ) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };
  SwiperClass.prototype.on = function on (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };
  SwiperClass.prototype.once = function once (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    function onceHandler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      handler.apply(self, args);
      self.off(events, onceHandler);
    }
    return self.on(events, onceHandler, priority);
  };
  SwiperClass.prototype.off = function off (events, handler) {
    var self = this;
    if (!self.eventsListeners) { return self; }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };
  SwiperClass.prototype.emit = function emit () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;
    if (!self.eventsListeners) { return self; }
    var events;
    var data;
    var context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };
  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };
  SwiperClass.prototype.useModules = function useModules (modulesParams) {
      if ( modulesParams === void 0 ) modulesParams = {};

    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };
  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) { return; }
    Class.use(components);
  };
  SwiperClass.installModule = function installModule (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };
  SwiperClass.use = function use (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) { return Class.installModule(m); });
      return Class;
    }
    return Class.installModule.apply(Class, [ module ].concat( params ));
  };

  Object.defineProperties( SwiperClass, staticAccessors );

  function updateSize () {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }

    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides () {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSlidesLength = slidesLength;
    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
    else { slides.css({ marginRight: '', marginBottom: '' }); }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = slidesPerRow - ((params.slidesPerColumn * slidesPerRow) - slidesLength);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = (void 0);
        var column = (void 0);
        var row = (void 0);
        if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide
          .css(
            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
          )
          .attr('data-swiper-column', column)
          .attr('data-swiper-row', row);
      }
      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (swiper.isHorizontal()) {
          slideSize = slide[0].getBoundingClientRect().width +
            parseFloat(slideStyles.getPropertyValue('margin-left')) +
            parseFloat(slideStyles.getPropertyValue('margin-right'));
        } else {
          slideSize = slide[0].getBoundingClientRect().height +
            parseFloat(slideStyles.getPropertyValue('margin-top')) +
            parseFloat(slideStyles.getPropertyValue('margin-bottom'));
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);


      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
      } else {
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
    }
    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(snapGrid[i$1]); }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(snapGrid[i$2]);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) { snapGrid = [0]; }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
        else { slides.css({ marginRight: (spaceBetween + "px") }); }
      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight (speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) { break; }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
  }

  function updateSlidesOffset () {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) { return; }
    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

    var offsetCenter = -translate;
    if (rtl) { offsetCenter = translate; }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress =
        (
          (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
        ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible =
                  (slideBefore >= 0 && slideBefore < swiper.size) ||
                  (slideAfter > 0 && slideAfter <= swiper.size) ||
                  (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
  }

  function updateProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses () {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex (newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }

  function updateClickedSlide (e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) { slideFound = true; }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate (axis) {
    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) { currentTranslate = -currentTranslate; }

    return currentTranslate || 0;
  }

  function setTranslate (translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (!params.virtualTranslate) {
      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
    }

    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate () {
    return (-this.snapGrid[0]);
  }

  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
  };

  function setTransition (duration, byController) {
    var swiper = this;

    swiper.$wrapperEl.transition(duration);

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1 (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) { slideIndex = 0; }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventIntercationOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) { return false; }
      }
    }

    var direction;
    if (slideIndex > activeIndex) { direction = 'next'; }
    else if (slideIndex < activeIndex) { direction = 'prev'; }
    else { direction = 'reset'; }


    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }

    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;

    var normalizedTranslate = translate < 0 ? -Math.floor(Math.abs(translate)) : Math.floor(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return Math.floor(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return Math.floor(val); });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) { return; }
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2)) ||
          (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

    var slides = $wrapperEl.children(("." + (params.slideClass)));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(("." + (params.slideClass)));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) { appendSlides.push(el); }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
      slide.attr('data-swiper-slide-index', index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix () {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();


    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex > slides.length - (params.slidesPerView * 2))) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy () {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor (moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor () {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide (slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.append(slides[i]); }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide (slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function removeSlide (slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var newActiveIndex = activeIndex;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides () {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap,
    };

    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


    // Windows
    if (windows) {
      device.os = 'windows';
      device.osVersion = windows[2];
      device.windows = true;
    }
    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }

    // Desktop
    device.desktop = !(device.os || device.android || device.webView);

    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

    // Minimal UI
    if (device.os && device.os === 'ios') {
      var osVersionArr = device.osVersion.split('.');
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi =
        !device.webView &&
        (ipod || iphone) &&
        (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
        metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  }());

  function onTouchStart (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    if (swiper.animating && params.preventIntercationOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
    if (data.isTouched && data.isMoved) { return; }
    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$(e).closest(params.swipeHandler)[0]) { return; }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    if (
      Device.ios &&
      !Device.cordova &&
      params.iOSEdgeSwipeDetection &&
      ((startX <= params.iOSEdgeSwipeThreshold) ||
      (startX >= win.screen.width - params.iOSEdgeSwipeThreshold))
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) { data.allowThresholdMove = false; }
    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($(e.target).is(data.formElements)) { preventDefault = false; }
      if (
        doc.activeElement &&
        $(doc.activeElement).is(data.formElements) &&
        doc.activeElement !== e.target
      ) {
        doc.activeElement.blur();
      }
      if (preventDefault && swiper.allowTouchMove) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') { return; }
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) ||
          (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
        (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) { return; }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) { diff = -diff; }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }


    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger) { return; }

    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd (event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) { return; }
          swiper.emit('click', e);
        }, 300);
      }
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        swiper.emit('doubleTap', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) { swiper.allowClick = true; }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      } else if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) { newPosition = -newPosition; }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
            swiper.emit('momentumBounce');

            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize () {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) { return; }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    if (params.freeMode) {
      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick (e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) { e.preventDefault(); }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }
    // Set breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);
    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakPointsParams = breakpoint in breakpoints ? breakpoints[breakpoint] : swiper.originalParams;
      var needsReLoop = params.loop && (breakPointsParams.slidesPerView !== params.slidesPerView);

      Utils.extend(swiper.params, breakPointsParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }
      swiper.emit('breakpoint', breakPointsParams);
    }
  }

  function getBreakpoint (breakpoints) {
    // Get breakpoint for window width
    if (!breakpoints) { return undefined; }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());

  function addClasses () {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (!Support.flexbox) {
      suffixes.push('no-flexbox');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
    // WP8 Touch Events Fix
    if (Browser.isIE && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      suffixes.push(("wp8-" + (params.direction)));
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(' '));
  }

  function removeClasses () {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(' '));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) { callback(); }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages () {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) { swiper.update(); }
        swiper.emit('imagesReady');
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;

    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventIntercationOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    iOSEdgeSwipeDetection: false,
    iOSEdgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',

    // Callbacks
    runCallbacksOnInit: true,
  };

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = (function (SwiperClass$$1) {
    function Swiper() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var el;
      var params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        (assign = args, el = assign[0], params = assign[1]);
      }
      if (!params) { params = {}; }

      params = Utils.extend({}, params);
      if (el && !params.el) { params.el = el; }

      SwiperClass$$1.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object') { return; }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object' &&
            !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper);

      // Find Wrapper
      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          } else if (Support.prefixedPointerEvents) {
            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,

      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if ( SwiperClass$$1 ) Swiper.__proto__ = SwiperClass$$1;
    Swiper.prototype = Object.create( SwiperClass$$1 && SwiperClass$$1.prototype );
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };
    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };
    Swiper.prototype.update = function update$$1 () {
      var swiper = this;
      if (!swiper || swiper.destroyed) { return; }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };
    Swiper.prototype.init = function init () {
      var swiper = this;
      if (swiper.initialized) { return; }

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    };
    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
      if ( deleteInstance === void 0 ) deleteInstance = true;
      if ( cleanStyles === void 0 ) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index')
            .removeAttr('data-swiper-column')
            .removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };
    Swiper.extendDefaults = function extendDefaults (newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };
    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };
    staticAccessors.defaults.get = function () {
      return defaults;
    };
    staticAccessors.Class.get = function () {
      return SwiperClass$$1;
    };
    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties( Swiper, staticAccessors );

    return Swiper;
  }(SwiperClass));

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener('resize', swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if ( options === void 0 ) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        mutations.forEach(function (mutation) {
          swiper.emit('observerUpdate', mutation);
        });
      });

      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) { return; }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: false });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.virtual;
      var previousFrom = ref$1.from;
      var previousTo = ref$1.to;
      var slides = ref$1.slides;
      var previousSlidesGrid = ref$1.slidesGrid;
      var renderSlide = ref$1.renderSlide;
      var previousOffset = ref$1.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) { offsetProp = 'right'; }
      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1);
        slidesBefore = slidesPerGroup;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, (offset + "px"));
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) { appendIndexes.push(i$1); }
            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) { return a < b; }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
      return $slideEl;
    },
    appendSlide: function appendSlide(slide) {
      var swiper = this;
      swiper.virtual.slides.push(slide);
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slide) {
      var swiper = this;
      swiper.virtual.slides.unshift(slide);
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[cachedIndex + 1] = cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideNext(0);
    },
  };

  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        swiper.virtual.update();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth &&
            point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) { return undefined; }
      }
      if (swiper.isHorizontal()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
        if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (kc === 40) { swiper.slideNext(); }
        if (kc === 38) { swiper.slidePrev(); }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) { return; }
      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) { return; }
      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported &&
      doc.implementation &&
      doc.implementation.hasFeature &&
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      doc.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    }()),
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
          else { return true; }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
        else { return true; }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) { return true; }

      if (params.invert) { delta = -delta; }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) { return true; }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        }
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
      } else {
        // Freemode or scrollContainer:
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + (delta * params.sensitivity);
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        }
        // Emit event
        swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.stopAutoplay(); }
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
      }

      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (!swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) { return; }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements &&
          typeof params.nextEl === 'string' &&
          $nextEl.length > 1 &&
          swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements &&
          typeof params.prevEl === 'string' &&
          $prevEl.length > 1 &&
          swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', function (e) {
          e.preventDefault();
          if (swiper.isEnd && !swiper.params.loop) { return; }
          swiper.slideNext();
        });
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', function (e) {
          e.preventDefault();
          if (swiper.isBeginning && !swiper.params.loop) { return; }
          swiper.slidePrev();
        });
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click');
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click');
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick &&
          !$(e.target).is($prevEl) &&
          !$(e.target).is($nextEl)
        ) {
          if ($nextEl) { $nextEl.toggleClass(swiper.params.navigation.hiddenClass); }
          if ($prevEl) { $prevEl.toggleClass(swiper.params.navigation.hiddenClass); }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) { current -= total; }
        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(((params.bulletActiveClass) + "-main"));
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
            }
            $firstDisplayedBullet
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev"))
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev-prev"));
            $lastDisplayedBullet
              .next()
              .addClass(((params.bulletActiveClass) + "-next"))
              .next()
              .addClass(((params.bulletActiveClass) + "-next-next"));
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(("." + (params.currentClass))).text(current + 1);
        $el.find(("." + (params.totalClass))).text(total);
      }
      if (params.type === 'progressbar') {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML =
          "<span class=\"" + (params.currentClass) + "\"></span>" +
          ' / ' +
          "<span class=\"" + (params.totalClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) { return; }

      var $el = $(params.el);
      if ($el.length === 0) { return; }

      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === 'string' &&
        $el.length > 1 &&
        swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) { index += swiper.loopedSlides; }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
      if (params.clickable) {
        $el.off('click', ("." + (params.bulletClass)));
      }
    },
  };

  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el &&
          swiper.params.pagination.hideOnClick &&
          swiper.pagination.$el.length > 0 &&
          !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
        } else {
          $dragEl.transform(("translateX(" + newPos + "px)"));
        }
        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
        } else {
          $dragEl.transform(("translateY(" + newPos + "px)"));
        }
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbarHide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;

      var pointerPosition;
      if (swiper.isHorizontal()) {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
      } else {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
      }
      var positionRatio;
      positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) { return; }
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) { return; }
      swiper.scrollbar.isTouched = false;
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEvents = swiper.touchEvents;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListener ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListener ? { passive: true, capture: false } : false;
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        if (Support.touch) {
          target.addEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
          target.addEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
          target.addEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.addEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
          doc.addEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
          doc.addEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
        }
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEvents = swiper.touchEvents;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListener ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListener ? { passive: true, capture: false } : false;
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        if (Support.touch) {
          target.removeEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
          target.removeEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
          target.removeEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.removeEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
          doc.removeEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
          doc.removeEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
        }
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
      if ($dragEl.length === 0) {
        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if ((x).indexOf('%') >= 0) {
        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
      } else {
        x = (x * progress * rtlFactor) + "px";
      }
      if ((y).indexOf('%') >= 0) {
        y = (parseInt(y, 10) * progress) + "%";
      } else {
        y = (y * progress) + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
      } else {
        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if ( duration === void 0 ) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) { parallaxDuration = 0; }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.params.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax) { return; }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax) { return; }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax) { return; }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) { return 1; }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (Support.gestures) {
        swiper.zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
      }
      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (image.isTouched) { return; }
      if (Device.android) { e.preventDefault(); }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) { return; }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal() &&
          (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) ||
            (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } else if (
          !swiper.isHorizontal() &&
          (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) ||
            (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();

      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
      }

      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
      }

      // Velocity
      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;

        zoom.scale = 1;
        zoom.currentScale = 1;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) { return; }
      zoom.enabled = true;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) { return; }

      swiper.zoom.enabled = false;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
  };

  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };
      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom,
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') { return; }
      if (swiper.slides.length === 0) { return; }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
        : swiper.slides.eq(index);

      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) { return; }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');

        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
          if (background) {
            $imageEl.css('background-image', ("url(\"" + background + "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(("." + (params.preloaderClass))).remove();
          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });

        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
            return true;
          }
        } else if (slides[index]) { return true; }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
          }
        } else {
          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
        }
      }
    },
  };

  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) { return 0; }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop ?
          new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) :
          new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) { return; }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) { return; }
      var $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) { return; }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) { return; }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) { return; }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        swiper.slideTo(swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index());
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
      if (swiper.autoplay.running) { return false; }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) { return false; }
      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) { return; }
      if (swiper.autoplay.paused) { return; }
      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };

  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade ?
          Math.max(1 - Math.abs($slideEl[0].progress), 0) :
          1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: (swiperWidth + "px") });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          var multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2) +
            (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
        }
      }
      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };

  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
        $slideEl
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) { translateX = 0; }
        if (Math.abs(translateY) < 0.001) { translateY = 0; }
        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }

        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow
  ];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);

  return Swiper;

})));


/***/ }),

/***/ "./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Header -->\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"top-header\">\r\n\t\t\t\t\t<div class=\"top-header-thumb\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/top-header1.jpg\" alt=\"nature\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"profile-section\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-5 col-md-5 \">\r\n\t\t\t\t\t\t\t\t<ul class=\"profile-menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Timeline</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile/about']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">About</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile/friends']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Friends</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-5 ml-auto col-md-5\">\r\n\t\t\t\t\t\t\t\t<ul class=\"profile-menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile/photos']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Photos</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile/videos']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Videos</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"more-dropdown more-with-triangle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Report Profile</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Block Profile</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"control-block-button\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control bg-blue\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control bg-purple\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<div class=\"btn btn-control bg-primary more\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-settings-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-settings-icon\"></use></svg>\r\n\r\n\t\t\t\t\t\t\t\t<ul class=\"more-dropdown more-with-triangle triangle-bottom-right\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#update-header-photo\">Update Profile Photo</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#update-header-photo\">Update Header Photo</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Account Settings</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"top-header-author\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img [src]=\"image\" alt=\"author\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<div class=\"author-content\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h4 author-name\">{{username}}</a>\r\n\t\t\t\t\t\t\t<div class=\"country\">Islamabad, Pakistan</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Top Header -->"

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
    function ProfileHeaderComponent() {
    }
    ProfileHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('username'),
        __metadata("design:type", Object)
    ], ProfileHeaderComponent.prototype, "username", void 0);
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
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Hobbies and Interests</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Hobbies:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">I like to ride the bike to work, swimming, and working out. I also like\r\n\t\t\t\t\t\t\t\treading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite TV Shows:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Movies:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Idiocratic, The Scarred Wizard and the Fire Crown,  Crime Squad, Ferrum Man. </span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Games:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto. </span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Music Bands / Artists:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Books:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Favourite Writers:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandria Platt, Marcus Roth. </span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Other Interests:</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Education and Employement</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">The New College of Design</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"date\">2001 - 2006</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Remrad Institute</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"date\">2008</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Five months Digital Illustration course. Professor: Ahmad Ali.</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">The Digital College </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"date\">2010</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">6 months intensive Motion Graphics course. After Effects and Premire. Professor: Naeem Rehman. </span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Digital Design Intern</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"date\">2006-2008</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Digital Design Intern for the “xyz” agency. Was in charge of the communication with the clients.</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">UI/UX Designer</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"date\">2008-2013</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">UI/UX Designer for the abc agency. </span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"title\">Senior UI/UX Designer</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"date\">2013-Now</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Senior UI/UX Designer for the “abc” agency. I’m in charge of a ten person group, overseeing all the proyects and talking to potential clients.</span>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Personal Info</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-personal-info\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">About Me:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">Hi, I’m Hassan, I’m 36 and I work as a Digital Designer for the\r\n\t\t\t\t\t\t\t\tabc Agency in Pier 56\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Birthday:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">December 14th, 1980</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Birthplace:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">Lahore, Pakistan</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Lives in:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">Islamabad, Pakistan</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Occupation:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">UI/UX Designer</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Joined:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">April 31st, 2014</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Gender:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">Male</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Status:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">Married</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Email:</span>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"text\">abc@yourmail.com</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Website:</span>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"text\">abc.com</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Phone Number:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">(+93) 555 - 4369 - 8957</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Religious Belifs:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">-</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Political Incline:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">Democrat</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<!-- Photo Post viewer component -->\r\n<app-photo-post-viewer #photoPostVewerComp></app-photo-post-viewer>\r\n\r\n<!-- Upload Photo Dialogue -->\r\n<ng-template #addPhoto let-c=\"close\" let-d=\"dismiss\">\r\n  \t<div class=\"modal-header\">\r\n    \t<h4 class=\"modal-title\">Upload Photos</h4>\r\n    \t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      \t<span aria-hidden=\"true\">&times;</span>\r\n    \t</button>\r\n  \t</div>\r\n\r\n  \t<form>\r\n\t  \t<div class=\"modal-body\">\r\n\t  \t\t<div class=\"news-feed-form\">\r\n\t\t    \t<div class=\"author-thumb\">\r\n\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group with-icon label-floating is-empty\">\r\n\t\t\t\t\t<label class=\"control-label\">Write something about this photo...</label>\r\n\t\t\t\t\t<textarea class=\"form-control\" style=\"min-height:80px\" name=\"description\" [(ngModel)]=\"addPhotoModalForm.description\"></textarea>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"photo-upload-dialogue-nav\">\r\n\t\t\t\t\t<div class=\"photo-upload-dialogue-item img-item\" *ngFor=\"let photo of pickedPhotos let idx = index\">\r\n\t\t\t\t    \t<img [src]=\"photo.content\">\r\n\t\t\t\t    \t<div class=\"overlay overlay-dark-light\"></div>\r\n\t\t\t\t    \t<a (click)=\"removePhoto(idx)\" class=\"remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"photo-upload-dialogue-item add-photo\">\r\n\t\t\t\t\t\t<a class=\"full-block\" ngxFilePicker accept=\"image/*\" (filePick)=\"onFilePicked($event)\"></a>\r\n\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t<a class=\"btn btn-control bg-primary\" ngxFilePicker accept=\"image/*\" (filePick)=\"onFilePicked($event)\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-plus-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-plus-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<span class=\"title\" ngxFilePicker accept=\"image/*\" (filePick)=\"onFilePicked($event)\">Add Photo</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t  \t</div>\r\n\r\n\t  \t<div class=\"modal-footer\">\r\n\t  \t\t<ng-select style=\"min-width: 120px;\" [items]=\"privacyOptions\" [(ngModel)]=\"addPhotoModalForm.privacy\" name=\"privacy\" bindLabel=\"name\" bindValue=\"value\" [clearable]=\"false\">\r\n\t  \t\t\t<ng-template ng-label-tmp let-item=\"item\">\r\n\t\t\t        <i class=\"fa {{item.icon}}\"></i>\r\n\t\t\t        {{item.name}}\r\n\t\t\t    </ng-template>\r\n\t\t\t    <ng-template ng-option-tmp let-item=\"item\">\r\n\t\t\t        <i class=\"fa {{item.icon}}\"></i>\r\n\t\t\t        {{item.name}}\r\n\t\t\t    </ng-template>\r\n\t\t\t</ng-select>\r\n\t  \t\t<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"postPhotos()\">Post</button>\r\n\t  \t</div>\r\n\t</form>\r\n</ng-template>\r\n\r\n<!-- Create Album Dialogue -->\r\n<ng-template #addAlbum let-c=\"close\" let-d=\"dismiss\">\r\n  \t<div class=\"modal-header\">\r\n    \t<h4 class=\"modal-title\">Upload Photos</h4>\r\n    \t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      \t<span aria-hidden=\"true\">&times;</span>\r\n    \t</button>\r\n  \t</div>\r\n\r\n  \t<form>\r\n\t  \t<div class=\"modal-body\">\r\n\t\t\t<div class=\"ui-block-content\">\r\n\r\n\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t<label class=\"control-label\">Album Name</label>\r\n\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" name=\"name\" [(ngModel)]=\"addAlbumModalForm.name\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t<label class=\"control-label\">Album Description</label>\r\n\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"\" name=\"description\" [(ngModel)]=\"addAlbumModalForm.description\"></textarea>>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"photo-album-wrapper\">\r\n\t\t\t\t\t<div class=\"photo-album-item-wrap col-3-width\" >\r\n\t\t\t\t\t\t<div class=\"photo-album-item create-album\">\r\n\t\t\t\t\t\t\t<a class=\"full-block\" ngxFilePicker accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\"></a>\r\n\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t<a ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"btn btn-control bg-primary\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-plus-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-plus-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<span ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"title h5\">Add More Photos...</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"photo-album-item-wrap col-3-width\" *ngFor=\"let photo of pickedAlbumPhotos let idx = index\">\r\n\t\t\t\t\t\t<div class=\"photo-album-item\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<img [src]=\"photo.content\" alt=\"photo\" style=\"height: 159px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"overlay overlay-dark-light\"></div>\r\n\t\t\t    \t\t\t\t<a href clickStopPropagation (click)=\"removeAlbumPhoto(idx)\" class=\"remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Write something about this photo...\"></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t  \t</div>\r\n\t\t  \t\r\n\t\t </div>\r\n\r\n\t  \t<div class=\"modal-footer\">\r\n\t  \t\t<ng-select style=\"min-width: 120px;\" [items]=\"privacyOptions\" [(ngModel)]=\"addAlbumModalForm.privacy\" name=\"privacy\" bindLabel=\"name\" bindValue=\"value\" [clearable]=\"false\">\r\n\t  \t\t\t<ng-template ng-label-tmp let-item=\"item\">\r\n\t\t\t        <i class=\"fa {{item.icon}}\"></i>\r\n\t\t\t        {{item.name}}\r\n\t\t\t    </ng-template>\r\n\t\t\t    <ng-template ng-option-tmp let-item=\"item\">\r\n\t\t\t        <i class=\"fa {{item.icon}}\"></i>\r\n\t\t\t        {{item.name}}\r\n\t\t\t    </ng-template>\r\n\t\t\t</ng-select>\r\n\t  \t\t<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"postAlbum()\">Post</button>\r\n\t  \t</div>\r\n\t</form>>\r\n</ng-template>\r\n\r\n<!-- Photos Top Bar -->\r\n<div class=\"container\" id=\"albumTop\" #albumTop>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block responsive-flex\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<div class=\"h6 title\">Hassan’s Photo Gallery</div>\r\n\r\n\t\t\t\t\t<div class=\"block-btn align-right\">\r\n\t\t\t\t\t\t<button ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"btn btn-primary btn-md-2\">Create Album  +</button>\r\n\r\n\t\t\t\t\t\t<button ngxFilePicker accept=\"image/*\" (filePick)=\"onFilePicked($event)\" class=\"btn btn-md-2 btn-border-think custom-color c-grey\">Add Photos</button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Photos Tab -->\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<!-- Tab panes -->\r\n\t\t\t<ngb-tabset type=\"pills\">\r\n\t\t\t  \t<ngb-tab title=\"Photos\">\r\n\t\t\t    \t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"photo-album-wrapper\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"photo-item col-4-width\" *ngFor=\"let photo of photos\">\r\n\t\t\t\t\t\t\t\t<img src=\"{{photo.img}}\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>{{photo.likes}}</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a (click)=\"showPhotoPost(photo.id)\" class=\"full-block\"></a>\r\n\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">{{photo.albumName}}</a>\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">{{photo.time}}</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<a (click)=\"getMorePhotos()\" class=\"btn btn-control btn-more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\r\n\t\t\t\t<ngb-tab title=\"Albums\">\r\n    \t\t\t\t<ng-template ngbTabContent>\r\n    \t\t\t\t\t<div>\r\n\t    \t\t\t\t\t<div class=\"photo-album-wrapper\" *ngIf=\"selectedAlbumPhotos.length > 0\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"photo-item col-4-width\" *ngFor=\"let photo of selectedAlbumPhotos\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"{{photo.img}}\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t<span>{{photo.likes}}</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#open-photo-popup-v2\" class=\"  full-block\"></a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 title\">{{photo.albumName}}</a>\r\n\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">{{photo.time}}</time>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a (click)=\"getMoreAlbumPhotos()\" class=\"btn btn-control btn-more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"photo-album-wrapper\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"photo-album-item-wrap col-4-width\" >\r\n\t\t\t\t\t\t\t\t\t<div class=\"photo-album-item create-album\" style=\"height: 417.547px;\">\r\n\t\t\t\t\t\t\t\t\t\t<a ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"full-block\"></a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\" class=\"btn btn-control bg-primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-plus-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-plus-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"title h5\" ngxFilePicker multiple accept=\"image/*\" (filePick)=\"onAlbumFilePicked($event)\">Create an Album</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sub-title\">It only takes a few minutes!</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"photo-album-item-wrap col-4-width\" *ngFor=\"let album of albums\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"photo-album-item\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"photo-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"album.coverImg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay overlay-dark\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{album.likes}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"showAlbum(album.id)\" class=\"  full-block\"></a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"title h5\">{{album.name}}</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sub-title\">{{album.lastAdded}}</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-container\" swiper>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"friends-harmonic\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let likedBy of album.likedBy\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" placement=\"right\" ngbTooltip=\"{{likedBy.name}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"likedBy.img\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"friend-count\" data-swiper-parallax=\"-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{album.counts.photos}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Photos</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{album.counts.comments}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Comments</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{album.counts.share}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Share</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- If we need pagination -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a (click)=\"getMoreAlbums()\" class=\"btn btn-control btn-more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n  \t\t\t\t</ngb-tab>\r\n  \t\t\t</ngb-tabset>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/scroll.service */ "./src/app/shared/services/scroll.service.ts");
/* harmony import */ var ngx_file_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-file-helpers */ "./node_modules/ngx-file-helpers/esm5/ngx-file-helpers.js");
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
    function PhotosComponent(modalService, scrollService) {
        this.modalService = modalService;
        this.scrollService = scrollService;
        this.privacyOptions = [{ name: 'Everyone', value: 'EVERYONE', icon: 'fa-globe' },
            { name: 'Friends', value: 'FRIENDS', icon: 'fa-users' },
            { name: 'Only me', value: 'ONLYME', icon: 'fa-lock' }];
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
        this.getPhotos();
        this.getAlbums();
    };
    //Photos Tab
    PhotosComponent.prototype.getPhotos = function () {
        this.photos.push({ id: 1, img: '/assets/img/photo-item7.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.photos.push({ id: 2, img: '/assets/img/photo-item9.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.photos.push({ id: 3, img: '/assets/img/photo-item3.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.photos.push({ id: 4, img: '/assets/img/photo-item10.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.photos.push({ id: 5, img: '/assets/img/photo-item5.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.photos.push({ id: 6, img: '/assets/img/photo-item11.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.photos.push({ id: 7, img: '/assets/img/photo-item7.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.photos.push({ id: 8, img: '/assets/img/photo-item8.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
    };
    PhotosComponent.prototype.getMorePhotos = function () {
        this.getPhotos();
    };
    //Albums Tab
    PhotosComponent.prototype.getAlbums = function () {
        this.albums.push({ id: 1, name: 'South America Vacations', lastAdded: '2 hours ago', coverImg: '/assets/img/photo-album1.jpg', likes: 324, counts: { photos: 240, comments: 52, share: 16 },
            likedBy: [{ name: 'Wakas Ali', img: '/assets/img/friend-harmonic5.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic10.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic7.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic8.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic2.jpg' }] });
        this.albums.push({ id: 2, name: 'Photoshoot Summer', lastAdded: '5 weeks ago', coverImg: '/assets/img/photo-album1.jpg', likes: 324, counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [{ name: 'Wakas Ali', img: '/assets/img/friend-harmonic5.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic10.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic7.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic8.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic2.jpg' }] });
        this.albums.push({ id: 3, name: 'Amazing Street Food', lastAdded: '6 mins ago', coverImg: '/assets/img/photo-album1.jpg',
            likes: 324, counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [{ name: 'Wakas Ali', img: '/assets/img/friend-harmonic7.jpg' }] });
        this.albums.push({ id: 4, name: 'Graffiti and Street Art', lastAdded: '6 hours ago', coverImg: '/assets/img/photo-album1.jpg', likes: 324, counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [{ name: 'Wakas Ali', img: '/assets/img/friend-harmonic5.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic10.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic7.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic2.jpg' }] });
        this.albums.push({ id: 5, name: 'Amazing Landscapes', lastAdded: '13 mins ago', coverImg: '/assets/img/photo-album1.jpg', likes: 324, counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [{ name: 'Wakas Ali', img: '/assets/img/friend-harmonic5.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic10.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic7.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic2.jpg' }] });
        this.albums.push({ id: 6, name: 'The Majstic Canyon', lastAdded: '57 mins ago', coverImg: '/assets/img/photo-album1.jpg', likes: 324, counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [{ name: 'Wakas Ali', img: '/assets/img/friend-harmonic2.jpg' }] });
        this.albums.push({ id: 7, name: 'Winter 2015 Portraits', lastAdded: '1 year ago', coverImg: '/assets/img/photo-album1.jpg', likes: 324, counts: { photos: 24, comments: 86, share: 16 },
            likedBy: [{ name: 'Wakas Ali', img: '/assets/img/friend-harmonic5.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic7.jpg' },
                { name: 'Wakas Ali', img: '/assets/img/friend-harmonic2.jpg' }] });
    };
    PhotosComponent.prototype.getMoreAlbums = function () {
        this.getAlbums();
    };
    PhotosComponent.prototype.getAlbumPhotos = function (id) {
        this.selectedAlbumPhotos.push({ id: 9, img: '/assets/img/photo-item7.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.selectedAlbumPhotos.push({ id: 10, img: '/assets/img/photo-item9.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.selectedAlbumPhotos.push({ id: 11, img: '/assets/img/photo-item3.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.selectedAlbumPhotos.push({ id: 12, img: '/assets/img/photo-item10.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.selectedAlbumPhotos.push({ id: 13, img: '/assets/img/photo-item5.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.selectedAlbumPhotos.push({ id: 14, img: '/assets/img/photo-item11.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.selectedAlbumPhotos.push({ id: 15, img: '/assets/img/photo-item7.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
        this.selectedAlbumPhotos.push({ id: 16, img: '/assets/img/photo-item8.jpg', likes: 15, albumName: 'Header Photos', time: '1 week ago' });
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
        this.addPhotoModalRef = this.modalService.open(this.addPhotoModal, { backdrop: 'static', centered: true });
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
        console.log(this.addPhotoModalForm);
        console.log(this.pickedPhotos);
        this.addPhotoModalRef.close();
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
        this.addAlbumModalRef = this.modalService.open(this.addAlbumModal, { backdrop: 'static', size: 'lg', windowClass: 'create-album-modal', centered: true });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('photoPostVewerComp'),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "photoPostVewerComp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addPhoto'),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "addPhotoModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addAlbum'),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "addAlbumModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('albumTop'),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "albumTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_file_helpers__WEBPACK_IMPORTED_MODULE_3__["FilePickerDirective"]),
        __metadata("design:type", Object)
    ], PhotosComponent.prototype, "filePicker", void 0);
    PhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.page.html */ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.html"),
            styles: [__webpack_require__(/*! ./photos.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"]])
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

module.exports = "<div class=\"header-spacer\"></div>\r\n\r\n<app-profile-header [username]=\"user.name\" [image]=\"user.image\"></app-profile-header>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
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
    route, fb) {
        this.route = route;
        this.fb = fb;
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_3__["FirebaseUserModel"]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.user = data;
                _this.createForm(_this.user.name);
            }
        });
    };
    ProfileComponent.prototype.createForm = function (name) {
        this.profileForm = this.fb.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProfileComponent.prototype.save = function (value) {
        // this.userService.updateCurrentUser(value)
        //   .then(res => {
        //     console.log(res);
        //   }, err => console.log(err));
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
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

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<!-- Main Content -->\r\n\r\n\t\t<div class=\"col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t<div id=\"newsfeed-items-grid\">\r\n\r\n\t\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t\t<article class=\"hentry post\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Hassan Ahmad</a>\r\n\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t19 hours ago\r\n\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Edit Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Delete Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Turn Off Notifications</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Select as Featured</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n\t\t\t\t\t\t\tpariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\r\n\t\t\t\t\t\t\tmollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem\r\n\t\t\t\t\t\t\taccusantium doloremque.\r\n\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t<div class=\"post-additional-info inline-items\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>8</span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"friends-harmonic\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic7.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic8.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic9.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic10.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic11.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"names-people-likes\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Waqar</a>, <a href=\"#\">Asfar</a> and\r\n\t\t\t\t\t\t\t\t<br>6 more liked this\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"comments-shared\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-speech-balloon-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-speech-balloon-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>17</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>24</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"control-block-button post-control-button\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control featured-post\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-trophy-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-trophy-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-like-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-like-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</article>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t\t<article class=\"hentry post video\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Hasan Ahmed</a> shared a <a href=\"#\">link</a>\r\n\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t7 hours ago\r\n\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Edit Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Delete Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Turn Off Notifications</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Select as Featured</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<p>If someone missed it, check out the new song by System of a Revenge! I thinks they are going back to their roots...</p>\r\n\r\n\t\t\t\t\t\t<div class=\"post-video\">\r\n\t\t\t\t\t\t\t<div class=\"video-thumb\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/video5.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t<a href=\"https://youtube.com/watch?v=excVFQ2TWig\" class=\"play-video\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"video-content\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h4 title\">System of a Revenge - Nothing Else Matters (LIVE)</a>\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempo incididunt ut labore..</p>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"link-site\">YOUTUBE.COM</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"post-additional-info inline-items\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>15</span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"friends-harmonic\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic9.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic10.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic7.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic8.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic11.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"names-people-likes\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Jenny</a>, <a href=\"#\">Robert</a> and\r\n\t\t\t\t\t\t\t\t<br>13 more liked this\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"comments-shared\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-speech-balloon-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-speech-balloon-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>1</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>16</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"control-block-button post-control-button\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-like-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-like-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</article>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t\t<article class=\"hentry post\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">James Spiegel</a>\r\n\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t2 hours ago\r\n\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Edit Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Delete Post</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Turn Off Notifications</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Select as Featured</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et\r\n\t\t\t\t\t\t\tdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.\r\n\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t<div class=\"post-additional-info inline-items\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>36</span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"friends-harmonic\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic7.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic8.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic9.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic10.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/friend-harmonic11.jpg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"names-people-likes\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">You</a>, <a href=\"#\">Elaine</a> and\r\n\t\t\t\t\t\t\t\t<br>34 more liked this\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"comments-shared\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-speech-balloon-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-speech-balloon-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>17</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>24</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"control-block-button post-control-button\">\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-like-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-like-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-share-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-share-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</article>\r\n\r\n\t\t\t\t\t<ul class=\"comments-list\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Elaine Dreyfuss</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t5 mins ago\r\n\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>8</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"has-children\">\r\n\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar5-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Green Goo Rock</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t1 hour ago\r\n\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiten, sed quia\r\n\t\t\t\t\t\t\t\tconsequuntur magni dolores eos qui ratione voluptatem sequi en lod nesciunt. Neque porro\r\n\t\t\t\t\t\t\t\tquisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem ipsum der.\r\n\t\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>5</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\r\n\t\t\t\t\t\t\t<ul class=\"children\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar8-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Diana Jameson</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t39 mins ago\r\n\t\t\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\r\n\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t<span>2</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar2-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Nicholas Grisom</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t24 mins ago\r\n\t\t\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<p>Excepteur sint occaecat cupidatat non proident.</p>\r\n\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t<span>0</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t</li>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar4-sm.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"author-date\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"h6 post__author-name fn\" href=\"#\">Chris Greyson</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"post__date\">\r\n\t\t\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">\r\n\t\t\t\t\t\t\t\t\t\t\t1 hour ago\r\n\t\t\t\t\t\t\t\t\t\t</time>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"post-add-icon inline-items\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t<span>7</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"reply\">Reply</a>\r\n\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t<a href=\"#\" class=\"more-comments\">View more comments <span>+</span></a>\r\n\t\t\t\t\t<form class=\"comment-form inline-items\">\r\n\r\n\t\t\t\t\t\t<div class=\"post__author author vcard inline-items\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group with-icon-right \">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"\"  ></textarea>\r\n\t\t\t\t\t\t\t\t<div class=\"add-options-message\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"options-message\" data-toggle=\"modal\" data-target=\"#update-header-photo\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-camera-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-camera-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- data-load-link=\"items-to-load.html\" data-container=\"newsfeed-items-grid\" -->\r\n\t\t\t<a id=\"load-more-button\" href=\"#\" class=\"btn btn-control btn-more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t</div>\r\n\r\n\t\t<!-- ... end Main Content -->\r\n\r\n\t\t<!-- Left Sidebar -->\r\n\r\n\t\t<div class=\"col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Profile Intro</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-personal-info item-block\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">About Me:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">Hi, I’m Hasan, I’m 25 and I work as a Digital Designer for the  “Pyramids” Agency in Islamabad.</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Favourite TV Shows:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<span class=\"title\">Favourite Music Bands / Artists:</span>\r\n\t\t\t\t\t\t\t<span class=\"text\">Iron Maid, DC/AC, Vital signs, Jal, System of a Revenge.</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Last Videos</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-last-video\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href clickStopPropagation class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/video8.jpg\" alt=\"video\">\r\n\t\t\t\t\t\t\t<div class=\"video-content\">\r\n\t\t\t\t\t\t\t\t<div class=\"title\">System of a Revenge - Hypnotize...</div>\r\n\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">3:25</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href clickStopPropagation class=\"play-video play-video--small\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-play-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-play-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/video7.jpg\" alt=\"video\">\r\n\t\t\t\t\t\t\t<div class=\"video-content\">\r\n\t\t\t\t\t\t\t\t<div class=\"title\">Green Goo - Live at Dan’s Arena</div>\r\n\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2017-03-24T18:18\">5:48</time>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<!-- ... end Left Sidebar -->\r\n\r\n\t\t<!-- Right Sidebar -->\r\n\r\n\t\t<div class=\"col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Last Photos</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-last-photo js-zoom-gallery\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot10.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot10.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot11-large.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot11-large.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot12.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot12.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot13-large.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot13-large.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot14.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot14.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot15-large.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot15-large.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot16.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot16.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot17-large.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot17-large.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/assets/img/last-phot18.jpg\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/last-phot18.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Friends (86)</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<ul class=\"widget w-faved-page js-zoom-gallery\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar38-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar24-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar36-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar35-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar34-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar33-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar32-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar31-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar30-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar29-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar28-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar27-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar26-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar25-sm.jpg\" alt=\"user\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"all-users\">\r\n\t\t\t\t\t\t\t<a href=\"#\">+74</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- ... end Right Sidebar -->\r\n\r\n\t</div>\r\n</div>"

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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.page.html */ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.html"),
            styles: [__webpack_require__(/*! ./timeline.page.scss */ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _shared_resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/resolvers/user.resolver */ "./src/app/shared/resolvers/user.resolver.ts");
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile/profile.page */ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.ts");
/* harmony import */ var _pages_timeline_timeline_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/timeline/timeline.page */ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.ts");
/* harmony import */ var _pages_about_about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about/about.page */ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.ts");
/* harmony import */ var _pages_friends_friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/friends/friends.page */ "./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.ts");
/* harmony import */ var _pages_photos_photos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/photos/photos.page */ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.ts");
/* harmony import */ var _pages_videos_videos_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/videos/videos.page */ "./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        resolve: { data: _shared_resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_2__["UserResolver"] },
        children: [
            {
                path: '',
                component: _pages_timeline_timeline_page__WEBPACK_IMPORTED_MODULE_4__["TimelineComponent"],
            },
            {
                path: 'about',
                component: _pages_about_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
            },
            {
                path: 'friends',
                component: _pages_friends_friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsComponent"],
            },
            {
                path: 'photos',
                component: _pages_photos_photos_page__WEBPACK_IMPORTED_MODULE_7__["PhotosComponent"],
            },
            {
                path: 'videos',
                component: _pages_videos_videos_page__WEBPACK_IMPORTED_MODULE_8__["VideosComponent"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var _shared_modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/modules/forms */ "./src/app/shared/modules/forms.ts");
/* harmony import */ var _shared_modules_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/modules/select */ "./src/app/shared/modules/select.ts");
/* harmony import */ var _shared_modules_file_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/modules/file-picker */ "./src/app/shared/modules/file-picker.ts");
/* harmony import */ var _shared_modules_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modules/swiper */ "./src/app/shared/modules/swiper.ts");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/directives/directives.module */ "./src/app/shared/directives/directives.module.ts");
/* harmony import */ var _shared_components_photo_post_viewer_content_photo_post_viewer_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/photo-post-viewer-content/photo-post-viewer-content.component */ "./src/app/shared/components/photo-post-viewer-content/photo-post-viewer-content.component.ts");
/* harmony import */ var _shared_components_photo_post_viewer_photo_post_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/photo-post-viewer/photo-post-viewer.component */ "./src/app/shared/components/photo-post-viewer/photo-post-viewer.component.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/modules/full-layout/modules/profile/profile-routing.module.ts");
/* harmony import */ var _components_profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile-header/profile-header.component */ "./src/app/modules/full-layout/modules/profile/components/profile-header/profile-header.component.ts");
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/profile/profile.page */ "./src/app/modules/full-layout/modules/profile/pages/profile/profile.page.ts");
/* harmony import */ var _pages_timeline_timeline_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/timeline/timeline.page */ "./src/app/modules/full-layout/modules/profile/pages/timeline/timeline.page.ts");
/* harmony import */ var _pages_about_about_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/about/about.page */ "./src/app/modules/full-layout/modules/profile/pages/about/about.page.ts");
/* harmony import */ var _pages_friends_friends_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/friends/friends.page */ "./src/app/modules/full-layout/modules/profile/pages/friends/friends.page.ts");
/* harmony import */ var _pages_photos_photos_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/photos/photos.page */ "./src/app/modules/full-layout/modules/profile/pages/photos/photos.page.ts");
/* harmony import */ var _pages_videos_videos_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/videos/videos.page */ "./src/app/modules/full-layout/modules/profile/pages/videos/videos.page.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"],
                _shared_modules_forms__WEBPACK_IMPORTED_MODULE_4__["FormsSharedModules"],
                _shared_modules_select__WEBPACK_IMPORTED_MODULE_5__["SelectSharedModules"],
                _shared_modules_file_picker__WEBPACK_IMPORTED_MODULE_6__["FilePickerModules"],
                _shared_modules_swiper__WEBPACK_IMPORTED_MODULE_7__["SwiperSharedModules"],
                _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_11__["ProfileRoutingModule"]
            ],
            declarations: [
                _shared_components_photo_post_viewer_photo_post_viewer_component__WEBPACK_IMPORTED_MODULE_10__["PhotoPostViewerComponent"],
                _shared_components_photo_post_viewer_content_photo_post_viewer_content_component__WEBPACK_IMPORTED_MODULE_9__["PhotoPostViewerContentComponent"],
                _components_profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_12__["ProfileHeaderComponent"],
                _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _pages_timeline_timeline_page__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"],
                _pages_about_about_page__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _pages_friends_friends_page__WEBPACK_IMPORTED_MODULE_16__["FriendsComponent"],
                _pages_photos_photos_page__WEBPACK_IMPORTED_MODULE_17__["PhotosComponent"],
                _pages_videos_videos_page__WEBPACK_IMPORTED_MODULE_18__["VideosComponent"]
            ],
            entryComponents: [_shared_components_photo_post_viewer_content_photo_post_viewer_content_component__WEBPACK_IMPORTED_MODULE_9__["PhotoPostViewerContentComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

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

/***/ "./src/app/shared/modules/swiper.ts":
/*!******************************************!*\
  !*** ./src/app/shared/modules/swiper.ts ***!
  \******************************************/
/*! exports provided: SwiperSharedModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperSharedModules", function() { return SwiperSharedModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DEFAULT_SWIPER_CONFIG = {
    observer: true,
    direction: 'horizontal',
    threshold: 15,
    slidesPerView: 1,
    pagination: true
};
var SwiperSharedModules = /** @class */ (function () {
    function SwiperSharedModules() {
    }
    SwiperSharedModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            exports: [
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperModule"]
            ],
            providers: [
                {
                    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG
                }
            ]
        })
    ], SwiperSharedModules);
    return SwiperSharedModules;
}());



/***/ })

}]);
//# sourceMappingURL=modules-profile-profile-module.js.map