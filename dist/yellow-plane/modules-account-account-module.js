(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-account-account-module"],{

/***/ "./node_modules/ng-emoji-picker/emoji-picker.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng-emoji-picker/emoji-picker.module.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var emoji_input_component_1 = __webpack_require__(/*! ./src/emoji-input/emoji-input.component */ "./node_modules/ng-emoji-picker/src/emoji-input/emoji-input.component.js");
var emoji_service_1 = __webpack_require__(/*! ./src/emoji.service */ "./node_modules/ng-emoji-picker/src/emoji.service.js");
var EmojiPickerModule = /** @class */ (function () {
    function EmojiPickerModule() {
    }
    EmojiPickerModule.forRoot = function () {
        return {
            ngModule: EmojiPickerModule,
            providers: [
                emoji_service_1.EmojiService
            ]
        };
    };
    EmojiPickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule
                    ],
                    declarations: [
                        emoji_input_component_1.EmojiInputComponent
                    ],
                    providers: [
                        emoji_service_1.EmojiService
                    ],
                    exports: [
                        emoji_input_component_1.EmojiInputComponent
                    ],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    return EmojiPickerModule;
}());
exports.EmojiPickerModule = EmojiPickerModule;
//# sourceMappingURL=emoji-picker.module.js.map

/***/ }),

/***/ "./node_modules/ng-emoji-picker/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng-emoji-picker/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var emoji_service_1 = __webpack_require__(/*! ./src/emoji.service */ "./node_modules/ng-emoji-picker/src/emoji.service.js");
exports.EmojiService = emoji_service_1.EmojiService;
var emoji_input_component_1 = __webpack_require__(/*! ./src/emoji-input/emoji-input.component */ "./node_modules/ng-emoji-picker/src/emoji-input/emoji-input.component.js");
exports.EmojiInputComponent = emoji_input_component_1.EmojiInputComponent;
var emoji_picker_module_1 = __webpack_require__(/*! ./emoji-picker.module */ "./node_modules/ng-emoji-picker/emoji-picker.module.js");
exports.EmojiPickerModule = emoji_picker_module_1.EmojiPickerModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-emoji-picker/src/emoji-input/emoji-input.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-emoji-picker/src/emoji-input/emoji-input.component.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var emoji_service_1 = __webpack_require__(/*! ../emoji.service */ "./node_modules/ng-emoji-picker/src/emoji.service.js");
var EmojiInputComponent = /** @class */ (function () {
    function EmojiInputComponent(emojiService) {
        this.emojiService = emojiService;
        this.popupAnchor = 'top';
        this.inputClass = '';
        this.searchClass = '';
        this.onEnter = function () { };
        this.autofocus = false;
        this.closeAfterSelection = true;
        this.modelChange = new core_1.EventEmitter();
        this.setPopupAction = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this.keyup = new core_1.EventEmitter();
        this.emojiClick = new core_1.EventEmitter();
        this.input = '';
        this.filterEmojis = '';
        this.popupOpen = false;
        this.lastCursorPosition = 0;
    }
    EmojiInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.setPopupAction) {
            this.setPopupAction.emit(function (status) { _this.openPopup(status); });
        }
        this.allEmojis = this.emojiService.getAll();
        this.clean();
    };
    EmojiInputComponent.prototype.ngAfterViewInit = function () {
        if (this.autofocus) {
            if (this.textArea) {
                this.textareaEl.nativeElement.focus();
            }
            else {
                this.inputEl.nativeElement.focus();
            }
        }
    };
    EmojiInputComponent.prototype.ngOnChanges = function () {
        if (this.model !== this.input) {
            this.input = this.model;
        }
    };
    EmojiInputComponent.prototype.onKeyup = function (event) {
        this.updateCursor();
        if (this.keyup) {
            this.keyup.emit(event);
        }
    };
    EmojiInputComponent.prototype.onBlur = function (event) {
        this.updateCursor();
        if (this.blur) {
            this.blur.emit(event);
        }
    };
    EmojiInputComponent.prototype.onFocus = function (event) {
        this.updateCursor();
        if (this.focus) {
            this.focus.emit(event);
        }
    };
    EmojiInputComponent.prototype.clean = function () {
        this.filterEmojis = '';
        this.filteredEmojis = this.getFilteredEmojis();
    };
    EmojiInputComponent.prototype.openPopup = function (status) {
        if (status === void 0) { status = null; }
        if (status === null) {
            this.popupOpen = !this.popupOpen;
        }
        else {
            this.popupOpen = status;
        }
    };
    EmojiInputComponent.prototype.updateFilteredEmojis = function () {
        this.filteredEmojis = this.getFilteredEmojis();
    };
    EmojiInputComponent.prototype.getFilteredEmojis = function () {
        var _this = this;
        return this.allEmojis.filter(function (e) {
            if (_this.filterEmojis === '') {
                return true;
            }
            else {
                for (var _i = 0, _a = e.aliases; _i < _a.length; _i++) {
                    var alias = _a[_i];
                    if (alias.includes(_this.filterEmojis)) {
                        return true;
                    }
                }
            }
            return false;
        });
    };
    EmojiInputComponent.prototype.onEmojiClick = function (e) {
        this.input = this.input.substr(0, this.lastCursorPosition) + e + this.input.substr(this.lastCursorPosition);
        this.modelChange.emit(this.input);
        this.emojiClick.emit(e);
        if (this.closeAfterSelection) {
            this.popupOpen = false;
            this.clean();
        }
    };
    EmojiInputComponent.prototype.onChange = function (newValue) {
        this.input = this.emojiService.emojify(newValue);
        this.model = this.input;
        this.modelChange.emit(this.input);
    };
    EmojiInputComponent.prototype.updateCursor = function () {
        if (this.textArea) {
            this.lastCursorPosition = this.textareaEl.nativeElement.selectionStart;
        }
        else {
            this.lastCursorPosition = this.inputEl.nativeElement.selectionStart;
        }
    };
    EmojiInputComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'emoji-input',
                    template: "\n    <ng-template [ngIf]=\"textArea\">\n      <textarea #textareaEl name=\"text\"\n        [ngClass]=\"[inputClass]\"\n        [attr.cols]=\"textArea.cols\"\n        [attr.rows]=\"textArea.rows\"\n        (keyup)=\"onKeyup($event)\"\n        (keyup.enter)=\"onEnter()\"\n        (blur)=\"onBlur($event)\"\n        (focus)=\"onFocus($event)\"\n        (ngModelChange)=\"onChange($event)\"\n        [(ngModel)]=\"input\">\n      </textarea>\n    </ng-template>\n    <ng-template [ngIf]=\"!textArea\">\n      <input #inputEl type=\"text\"\n        [ngClass]=\"[inputClass]\"\n        (keyup)=\"onKeyup($event)\"\n        (keyup.enter)=\"onEnter()\"\n        (blur)=\"onBlur($event)\"\n        (focus)=\"onFocus($event)\"\n        (ngModelChange)=\"onChange($event)\"\n        [(ngModel)]=\"input\"/>\n    </ng-template>\n    <div class=\"emoji-search\"\n      [ngClass]=\"[popupAnchor, searchClass]\"\n      [hidden]=\"!popupOpen\"\n      [style.display]=\"popupOpen ? 'flex' : 'none'\"\n      (click)=\"$event.stopPropagation()\">\n      <div class=\"search-header\">\n        <input type=\"search\" placeholder=\"Search...\"\n          [(ngModel)]=\"filterEmojis\"\n          (ngModelChange)=\"updateFilteredEmojis()\"/>\n      </div>\n      <div class=\"emojis-container\">\n        <span *ngFor=\"let emoji of filteredEmojis\"\n              (click)=\"onEmojiClick(emoji.emoji)\"\n               title=\"{{emoji.aliases[0]}}\">\n          {{emoji.emoji}}\n        </span>\n      </div>\n    </div>\n  ",
                    styles: ["\n      :host {\n        display: block;\n        position: relative;\n      }\n      :host .emoji-search {\n        background-color: #fff;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\n        height: auto;\n        line-height: 1.5;\n        position: absolute;\n        right: 0;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        z-index: 100;\n      }\n      :host .emoji-search[hidden] {\n        display: none;\n      }\n      :host .emoji-search.bottom {\n        top: -202px;\n      }\n      :host .emoji-search input {\n        border-radius: 4px;\n        font-size: 10px;\n        padding: 4px 8px;\n        margin: 0;\n        height: 30px;\n      }\n      :host .emoji-search .search-header {\n        background-color: #eee;\n        border-bottom: 1px solid #ccc;\n        border-radius: 4px 4px 0 0;\n        padding: 4px 8px;\n        width: 100%;\n      }\n      :host .emoji-search .emojis-container {\n        border-radius: 0 0 4px 4px;\n        max-height: 160px;\n        padding: 5px 12px;\n        overflow: auto;\n        overflow-x: hidden;\n        flex: 1;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n      :host .emoji-search span {\n        cursor: pointer;\n        padding: 4px 3px 2px 4px;\n        font-size: 24px;\n      }\n      :host .emoji-search span:hover {\n        background-color: #ccc;\n      }\n\n  "]
                },] },
    ];
    /** @nocollapse */
    EmojiInputComponent.ctorParameters = function () { return [
        { type: emoji_service_1.EmojiService, },
    ]; };
    EmojiInputComponent.propDecorators = {
        "textArea": [{ type: core_1.Input },],
        "popupAnchor": [{ type: core_1.Input },],
        "inputClass": [{ type: core_1.Input },],
        "searchClass": [{ type: core_1.Input },],
        "onEnter": [{ type: core_1.Input },],
        "model": [{ type: core_1.Input },],
        "autofocus": [{ type: core_1.Input },],
        "closeAfterSelection": [{ type: core_1.Input },],
        "modelChange": [{ type: core_1.Output },],
        "setPopupAction": [{ type: core_1.Output },],
        "blur": [{ type: core_1.Output },],
        "focus": [{ type: core_1.Output },],
        "keyup": [{ type: core_1.Output },],
        "emojiClick": [{ type: core_1.Output },],
        "textareaEl": [{ type: core_1.ViewChild, args: ['textareaEl',] },],
        "inputEl": [{ type: core_1.ViewChild, args: ['inputEl',] },],
    };
    return EmojiInputComponent;
}());
exports.EmojiInputComponent = EmojiInputComponent;
//# sourceMappingURL=emoji-input.component.js.map

/***/ }),

/***/ "./node_modules/ng-emoji-picker/src/emoji.db.js":
/*!******************************************************!*\
  !*** ./node_modules/ng-emoji-picker/src/emoji.db.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EMOJI_DB = [{
        "emoji": "😄",
        "description": "smiling face with open mouth and smiling eyes",
        "aliases": [
            "smile"
        ],
        "tags": [
            "happy", "joy", "pleased"
        ]
    }, {
        "emoji": "😃",
        "description": "smiling face with open mouth",
        "aliases": [
            "smiley"
        ],
        "tags": [
            "happy", "joy", "haha"
        ]
    }, {
        "emoji": "😀",
        "description": "grinning face",
        "aliases": [
            "grinning"
        ],
        "tags": [
            "smile", "happy"
        ]
    }, {
        "emoji": "😊",
        "description": "smiling face with smiling eyes",
        "aliases": [
            "blush"
        ],
        "tags": [
            "proud"
        ]
    }, {
        "emoji": "☺️",
        "description": "white smiling face",
        "aliases": [
            "relaxed"
        ],
        "tags": [
            "blush", "pleased"
        ]
    }, {
        "emoji": "😉",
        "description": "winking face",
        "aliases": [
            "wink"
        ],
        "tags": [
            "flirt"
        ]
    }, {
        "emoji": "😍",
        "description": "smiling face with heart-shaped eyes",
        "aliases": [
            "heart_eyes"
        ],
        "tags": [
            "love", "crush"
        ]
    }, {
        "emoji": "😘",
        "description": "face throwing a kiss",
        "aliases": [
            "kissing_heart"
        ],
        "tags": [
            "flirt"
        ]
    }, {
        "emoji": "😚",
        "description": "kissing face with closed eyes",
        "aliases": [
            "kissing_closed_eyes"
        ],
        "tags": []
    }, {
        "emoji": "😗",
        "description": "kissing face",
        "aliases": [
            "kissing"
        ],
        "tags": []
    }, {
        "emoji": "😙",
        "description": "kissing face with smiling eyes",
        "aliases": [
            "kissing_smiling_eyes"
        ],
        "tags": []
    }, {
        "emoji": "😜",
        "description": "face with stuck-out tongue and winking eye",
        "aliases": [
            "stuck_out_tongue_winking_eye"
        ],
        "tags": [
            "prank", "silly"
        ]
    }, {
        "emoji": "😝",
        "description": "face with stuck-out tongue and tightly-closed eyes",
        "aliases": [
            "stuck_out_tongue_closed_eyes"
        ],
        "tags": [
            "prank"
        ]
    }, {
        "emoji": "😛",
        "description": "face with stuck-out tongue",
        "aliases": [
            "stuck_out_tongue"
        ],
        "tags": []
    }, {
        "emoji": "😳",
        "description": "flushed face",
        "aliases": [
            "flushed"
        ],
        "tags": []
    }, {
        "emoji": "😁",
        "description": "grinning face with smiling eyes",
        "aliases": [
            "grin"
        ],
        "tags": []
    }, {
        "emoji": "😔",
        "description": "pensive face",
        "aliases": [
            "pensive"
        ],
        "tags": []
    }, {
        "emoji": "😌",
        "description": "relieved face",
        "aliases": [
            "relieved"
        ],
        "tags": [
            "whew"
        ]
    }, {
        "emoji": "😒",
        "description": "unamused face",
        "aliases": [
            "unamused"
        ],
        "tags": [
            "meh"
        ]
    }, {
        "emoji": "😞",
        "description": "disappointed face",
        "aliases": [
            "disappointed"
        ],
        "tags": [
            "sad"
        ]
    }, {
        "emoji": "😣",
        "description": "persevering face",
        "aliases": [
            "persevere"
        ],
        "tags": [
            "struggling"
        ]
    }, {
        "emoji": "😢",
        "description": "crying face",
        "aliases": [
            "cry"
        ],
        "tags": [
            "sad", "tear"
        ]
    }, {
        "emoji": "😂",
        "description": "face with tears of joy",
        "aliases": [
            "joy"
        ],
        "tags": [
            "tears"
        ]
    }, {
        "emoji": "😭",
        "description": "loudly crying face",
        "aliases": [
            "sob"
        ],
        "tags": [
            "sad", "cry", "bawling"
        ]
    }, {
        "emoji": "😪",
        "description": "sleepy face",
        "aliases": [
            "sleepy"
        ],
        "tags": [
            "tired"
        ]
    }, {
        "emoji": "😥",
        "description": "disappointed but relieved face",
        "aliases": [
            "disappointed_relieved"
        ],
        "tags": [
            "phew", "sweat", "nervous"
        ]
    }, {
        "emoji": "😰",
        "description": "face with open mouth and cold sweat",
        "aliases": [
            "cold_sweat"
        ],
        "tags": [
            "nervous"
        ]
    }, {
        "emoji": "😅",
        "description": "smiling face with open mouth and cold sweat",
        "aliases": [
            "sweat_smile"
        ],
        "tags": [
            "hot"
        ]
    }, {
        "emoji": "😓",
        "description": "face with cold sweat",
        "aliases": [
            "sweat"
        ],
        "tags": []
    }, {
        "emoji": "😩",
        "description": "weary face",
        "aliases": [
            "weary"
        ],
        "tags": [
            "tired"
        ]
    }, {
        "emoji": "😫",
        "description": "tired face",
        "aliases": [
            "tired_face"
        ],
        "tags": [
            "upset", "whine"
        ]
    }, {
        "emoji": "😨",
        "description": "fearful face",
        "aliases": [
            "fearful"
        ],
        "tags": [
            "scared", "shocked", "oops"
        ]
    }, {
        "emoji": "😱",
        "description": "face screaming in fear",
        "aliases": [
            "scream"
        ],
        "tags": [
            "horror", "shocked"
        ]
    }, {
        "emoji": "😠",
        "description": "angry face",
        "aliases": [
            "angry"
        ],
        "tags": [
            "mad", "annoyed"
        ]
    }, {
        "emoji": "😡",
        "description": "pouting face",
        "aliases": [
            "rage", "pout"
        ],
        "tags": [
            "angry"
        ]
    }, {
        "emoji": "😤",
        "description": "face with look of triumph",
        "aliases": [
            "triumph"
        ],
        "tags": [
            "smug"
        ]
    }, {
        "emoji": "😖",
        "description": "confounded face",
        "aliases": [
            "confounded"
        ],
        "tags": []
    }, {
        "emoji": "😆",
        "description": "smiling face with open mouth and tightly-closed eyes",
        "aliases": [
            "laughing", "satisfied"
        ],
        "tags": [
            "happy", "haha"
        ]
    }, {
        "emoji": "😋",
        "description": "face savouring delicious food",
        "aliases": [
            "yum"
        ],
        "tags": [
            "tongue", "lick"
        ]
    }, {
        "emoji": "😷",
        "description": "face with medical mask",
        "aliases": [
            "mask"
        ],
        "tags": [
            "sick", "ill"
        ]
    }, {
        "emoji": "😎",
        "description": "smiling face with sunglasses",
        "aliases": [
            "sunglasses"
        ],
        "tags": [
            "cool"
        ]
    }, {
        "emoji": "😴",
        "description": "sleeping face",
        "aliases": [
            "sleeping"
        ],
        "tags": [
            "zzz"
        ]
    }, {
        "emoji": "😵",
        "description": "dizzy face",
        "aliases": [
            "dizzy_face"
        ],
        "tags": []
    }, {
        "emoji": "😲",
        "description": "astonished face",
        "aliases": [
            "astonished"
        ],
        "tags": [
            "amazed", "gasp"
        ]
    }, {
        "emoji": "😟",
        "description": "worried face",
        "aliases": [
            "worried"
        ],
        "tags": [
            "nervous"
        ]
    }, {
        "emoji": "😦",
        "description": "frowning face with open mouth",
        "aliases": [
            "frowning"
        ],
        "tags": []
    }, {
        "emoji": "😧",
        "description": "anguished face",
        "aliases": [
            "anguished"
        ],
        "tags": [
            "stunned"
        ]
    }, {
        "emoji": "😈",
        "description": "smiling face with horns",
        "aliases": [
            "smiling_imp"
        ],
        "tags": [
            "devil", "evil", "horns"
        ]
    }, {
        "emoji": "👿",
        "description": "imp",
        "aliases": [
            "imp"
        ],
        "tags": [
            "angry", "devil", "evil", "horns"
        ]
    }, {
        "emoji": "😮",
        "description": "face with open mouth",
        "aliases": [
            "open_mouth"
        ],
        "tags": [
            "surprise", "impressed", "wow"
        ]
    }, {
        "emoji": "😬",
        "description": "grimacing face",
        "aliases": [
            "grimacing"
        ],
        "tags": []
    }, {
        "emoji": "😐",
        "description": "neutral face",
        "aliases": [
            "neutral_face"
        ],
        "tags": [
            "meh"
        ]
    }, {
        "emoji": "😕",
        "description": "confused face",
        "aliases": [
            "confused"
        ],
        "tags": []
    }, {
        "emoji": "😯",
        "description": "hushed face",
        "aliases": [
            "hushed"
        ],
        "tags": [
            "silence", "speechless"
        ]
    }, {
        "emoji": "😶",
        "description": "face without mouth",
        "aliases": [
            "no_mouth"
        ],
        "tags": [
            "mute", "silence"
        ]
    }, {
        "emoji": "😇",
        "description": "smiling face with halo",
        "aliases": [
            "innocent"
        ],
        "tags": [
            "angel"
        ]
    }, {
        "emoji": "😏",
        "description": "smirking face",
        "aliases": [
            "smirk"
        ],
        "tags": [
            "smug"
        ]
    }, {
        "emoji": "😑",
        "description": "expressionless face",
        "aliases": [
            "expressionless"
        ],
        "tags": []
    }, {
        "emoji": "👲",
        "description": "man with gua pi mao",
        "aliases": [
            "man_with_gua_pi_mao"
        ],
        "tags": []
    }, {
        "emoji": "👳",
        "description": "man with turban",
        "aliases": [
            "man_with_turban"
        ],
        "tags": []
    }, {
        "emoji": "👮",
        "description": "police officer",
        "aliases": [
            "cop"
        ],
        "tags": [
            "police", "law"
        ]
    }, {
        "emoji": "👷",
        "description": "construction worker",
        "aliases": [
            "construction_worker"
        ],
        "tags": [
            "helmet"
        ]
    }, {
        "emoji": "💂",
        "description": "guardsman",
        "aliases": [
            "guardsman"
        ],
        "tags": []
    }, {
        "emoji": "👶",
        "description": "baby",
        "aliases": [
            "baby"
        ],
        "tags": [
            "child", "newborn"
        ]
    }, {
        "emoji": "👦",
        "description": "boy",
        "aliases": [
            "boy"
        ],
        "tags": [
            "child"
        ]
    }, {
        "emoji": "👧",
        "description": "girl",
        "aliases": [
            "girl"
        ],
        "tags": [
            "child"
        ]
    }, {
        "emoji": "👨",
        "description": "man",
        "aliases": [
            "man"
        ],
        "tags": [
            "mustache", "father", "dad"
        ]
    }, {
        "emoji": "👩",
        "description": "woman",
        "aliases": [
            "woman"
        ],
        "tags": [
            "girls"
        ]
    }, {
        "emoji": "👴",
        "description": "older man",
        "aliases": [
            "older_man"
        ],
        "tags": []
    }, {
        "emoji": "👵",
        "description": "older woman",
        "aliases": [
            "older_woman"
        ],
        "tags": []
    }, {
        "emoji": "👱",
        "description": "person with blond hair",
        "aliases": [
            "person_with_blond_hair"
        ],
        "tags": [
            "boy"
        ]
    }, {
        "emoji": "👼",
        "description": "baby angel",
        "aliases": [
            "angel"
        ],
        "tags": []
    }, {
        "emoji": "👸",
        "description": "princess",
        "aliases": [
            "princess"
        ],
        "tags": [
            "blonde", "crown", "royal"
        ]
    }, {
        "emoji": "😺",
        "description": "smiling cat face with open mouth",
        "aliases": [
            "smiley_cat"
        ],
        "tags": []
    }, {
        "emoji": "😸",
        "description": "grinning cat face with smiling eyes",
        "aliases": [
            "smile_cat"
        ],
        "tags": []
    }, {
        "emoji": "😻",
        "description": "smiling cat face with heart-shaped eyes",
        "aliases": [
            "heart_eyes_cat"
        ],
        "tags": []
    }, {
        "emoji": "😽",
        "description": "kissing cat face with closed eyes",
        "aliases": [
            "kissing_cat"
        ],
        "tags": []
    }, {
        "emoji": "😼",
        "description": "cat face with wry smile",
        "aliases": [
            "smirk_cat"
        ],
        "tags": []
    }, {
        "emoji": "🙀",
        "description": "weary cat face",
        "aliases": [
            "scream_cat"
        ],
        "tags": [
            "horror"
        ]
    }, {
        "emoji": "😿",
        "description": "crying cat face",
        "aliases": [
            "crying_cat_face"
        ],
        "tags": [
            "sad", "tear"
        ]
    }, {
        "emoji": "😹",
        "description": "cat face with tears of joy",
        "aliases": [
            "joy_cat"
        ],
        "tags": []
    }, {
        "emoji": "😾",
        "description": "pouting cat face",
        "aliases": [
            "pouting_cat"
        ],
        "tags": []
    }, {
        "emoji": "👹",
        "description": "japanese ogre",
        "aliases": [
            "japanese_ogre"
        ],
        "tags": [
            "monster"
        ]
    }, {
        "emoji": "👺",
        "description": "japanese goblin",
        "aliases": [
            "japanese_goblin"
        ],
        "tags": []
    }, {
        "emoji": "🙈",
        "description": "see-no-evil monkey",
        "aliases": [
            "see_no_evil"
        ],
        "tags": [
            "monkey", "blind", "ignore"
        ]
    }, {
        "emoji": "🙉",
        "description": "hear-no-evil monkey",
        "aliases": [
            "hear_no_evil"
        ],
        "tags": [
            "monkey", "deaf"
        ]
    }, {
        "emoji": "🙊",
        "description": "speak-no-evil monkey",
        "aliases": [
            "speak_no_evil"
        ],
        "tags": [
            "monkey", "mute", "hush"
        ]
    }, {
        "emoji": "💀",
        "description": "skull",
        "aliases": [
            "skull"
        ],
        "tags": [
            "dead", "danger", "poison"
        ]
    }, {
        "emoji": "👽",
        "description": "extraterrestrial alien",
        "aliases": [
            "alien"
        ],
        "tags": [
            "ufo"
        ]
    }, {
        "emoji": "💩",
        "description": "pile of poo",
        "aliases": [
            "hankey", "poop", "shit"
        ],
        "tags": [
            "crap"
        ]
    }, {
        "emoji": "🔥",
        "description": "fire",
        "aliases": [
            "fire"
        ],
        "tags": [
            "burn"
        ]
    }, {
        "emoji": "✨",
        "description": "sparkles",
        "aliases": [
            "sparkles"
        ],
        "tags": [
            "shiny"
        ]
    }, {
        "emoji": "🌟",
        "description": "glowing star",
        "aliases": [
            "star2"
        ],
        "tags": []
    }, {
        "emoji": "💫",
        "description": "dizzy symbol",
        "aliases": [
            "dizzy"
        ],
        "tags": [
            "star"
        ]
    }, {
        "emoji": "💥",
        "description": "collision symbol",
        "aliases": [
            "boom", "collision"
        ],
        "tags": [
            "explode"
        ]
    }, {
        "emoji": "💢",
        "description": "anger symbol",
        "aliases": [
            "anger"
        ],
        "tags": [
            "angry"
        ]
    }, {
        "emoji": "💦",
        "description": "splashing sweat symbol",
        "aliases": [
            "sweat_drops"
        ],
        "tags": [
            "water", "workout"
        ]
    }, {
        "emoji": "💧",
        "description": "droplet",
        "aliases": [
            "droplet"
        ],
        "tags": [
            "water"
        ]
    }, {
        "emoji": "💤",
        "description": "sleeping symbol",
        "aliases": [
            "zzz"
        ],
        "tags": [
            "sleeping"
        ]
    }, {
        "emoji": "💨",
        "description": "dash symbol",
        "aliases": [
            "dash"
        ],
        "tags": [
            "wind", "blow", "fast"
        ]
    }, {
        "emoji": "👂",
        "description": "ear",
        "aliases": [
            "ear"
        ],
        "tags": [
            "hear", "sound", "listen"
        ]
    }, {
        "emoji": "👀",
        "description": "eyes",
        "aliases": [
            "eyes"
        ],
        "tags": [
            "look", "see", "watch"
        ]
    }, {
        "emoji": "👃",
        "description": "nose",
        "aliases": [
            "nose"
        ],
        "tags": [
            "smell"
        ]
    }, {
        "emoji": "👅",
        "description": "tongue",
        "aliases": [
            "tongue"
        ],
        "tags": [
            "taste"
        ]
    }, {
        "emoji": "👄",
        "description": "mouth",
        "aliases": [
            "lips"
        ],
        "tags": [
            "kiss"
        ]
    }, {
        "emoji": "👍",
        "description": "thumbs up sign",
        "aliases": [
            "+1", "thumbsup"
        ],
        "tags": [
            "approve", "ok"
        ]
    }, {
        "emoji": "👎",
        "description": "thumbs down sign",
        "aliases": [
            "-1", "thumbsdown"
        ],
        "tags": [
            "disapprove", "bury"
        ]
    }, {
        "emoji": "👌",
        "description": "ok hand sign",
        "aliases": [
            "ok_hand"
        ],
        "tags": []
    }, {
        "emoji": "👊",
        "description": "fisted hand sign",
        "aliases": [
            "facepunch", "punch"
        ],
        "tags": [
            "attack"
        ]
    }, {
        "emoji": "✊",
        "description": "raised fist",
        "aliases": [
            "fist"
        ],
        "tags": [
            "power"
        ]
    }, {
        "emoji": "✌️",
        "description": "victory hand",
        "aliases": [
            "v"
        ],
        "tags": [
            "victory", "peace"
        ]
    }, {
        "emoji": "👋",
        "description": "waving hand sign",
        "aliases": [
            "wave"
        ],
        "tags": [
            "goodbye"
        ]
    }, {
        "emoji": "✋",
        "description": "raised hand",
        "aliases": [
            "hand", "raised_hand"
        ],
        "tags": [
            "highfive", "stop"
        ]
    }, {
        "emoji": "👐",
        "description": "open hands sign",
        "aliases": [
            "open_hands"
        ],
        "tags": []
    }, {
        "emoji": "👆",
        "description": "white up pointing backhand index",
        "aliases": [
            "point_up_2"
        ],
        "tags": []
    }, {
        "emoji": "👇",
        "description": "white down pointing backhand index",
        "aliases": [
            "point_down"
        ],
        "tags": []
    }, {
        "emoji": "👉",
        "description": "white right pointing backhand index",
        "aliases": [
            "point_right"
        ],
        "tags": []
    }, {
        "emoji": "👈",
        "description": "white left pointing backhand index",
        "aliases": [
            "point_left"
        ],
        "tags": []
    }, {
        "emoji": "🙌",
        "description": "person raising both hands in celebration",
        "aliases": [
            "raised_hands"
        ],
        "tags": [
            "hooray"
        ]
    }, {
        "emoji": "🙏",
        "description": "person with folded hands",
        "aliases": [
            "pray"
        ],
        "tags": [
            "please", "hope", "wish"
        ]
    }, {
        "emoji": "☝️",
        "description": "white up pointing index",
        "aliases": [
            "point_up"
        ],
        "tags": []
    }, {
        "emoji": "👏",
        "description": "clapping hands sign",
        "aliases": [
            "clap"
        ],
        "tags": [
            "praise", "applause"
        ]
    }, {
        "emoji": "💪",
        "description": "flexed biceps",
        "aliases": [
            "muscle"
        ],
        "tags": [
            "flex", "bicep", "strong", "workout"
        ]
    }, {
        "emoji": "🚶",
        "description": "pedestrian",
        "aliases": [
            "walking"
        ],
        "tags": []
    }, {
        "emoji": "🏃",
        "description": "runner",
        "aliases": [
            "runner", "running"
        ],
        "tags": [
            "exercise", "workout", "marathon"
        ]
    }, {
        "emoji": "💃",
        "description": "dancer",
        "aliases": [
            "dancer"
        ],
        "tags": [
            "dress"
        ]
    }, {
        "emoji": "👫",
        "description": "man and woman holding hands",
        "aliases": [
            "couple"
        ],
        "tags": [
            "date"
        ]
    }, {
        "emoji": "👪",
        "description": "family",
        "aliases": [
            "family"
        ],
        "tags": [
            "home", "parents", "child"
        ]
    }, {
        "emoji": "👬",
        "description": "two men holding hands",
        "aliases": [
            "two_men_holding_hands"
        ],
        "tags": [
            "couple", "date"
        ]
    }, {
        "emoji": "👭",
        "description": "two women holding hands",
        "aliases": [
            "two_women_holding_hands"
        ],
        "tags": [
            "couple", "date"
        ]
    }, {
        "emoji": "💏",
        "description": "kiss",
        "aliases": [
            "couplekiss"
        ],
        "tags": []
    }, {
        "emoji": "💑",
        "description": "couple with heart",
        "aliases": [
            "couple_with_heart"
        ],
        "tags": []
    }, {
        "emoji": "👯",
        "description": "woman with bunny ears",
        "aliases": [
            "dancers"
        ],
        "tags": [
            "bunny"
        ]
    }, {
        "emoji": "🙆",
        "description": "face with ok gesture",
        "aliases": [
            "ok_woman"
        ],
        "tags": []
    }, {
        "emoji": "🙅",
        "description": "face with no good gesture",
        "aliases": [
            "no_good", "ng_woman"
        ],
        "tags": [
            "stop", "halt"
        ]
    }, {
        "emoji": "💁",
        "description": "information desk person",
        "aliases": [
            "information_desk_person"
        ],
        "tags": []
    }, {
        "emoji": "🙋",
        "description": "happy person raising one hand",
        "aliases": [
            "raising_hand"
        ],
        "tags": []
    }, {
        "emoji": "💆",
        "description": "face massage",
        "aliases": [
            "massage"
        ],
        "tags": [
            "spa"
        ]
    }, {
        "emoji": "💇",
        "description": "haircut",
        "aliases": [
            "haircut"
        ],
        "tags": [
            "beauty"
        ]
    }, {
        "emoji": "💅",
        "description": "nail polish",
        "aliases": [
            "nail_care"
        ],
        "tags": [
            "beauty", "manicure"
        ]
    }, {
        "emoji": "👰",
        "description": "bride with veil",
        "aliases": [
            "bride_with_veil"
        ],
        "tags": [
            "marriage", "wedding"
        ]
    }, {
        "emoji": "🙎",
        "description": "person with pouting face",
        "aliases": [
            "person_with_pouting_face"
        ],
        "tags": []
    }, {
        "emoji": "🙍",
        "description": "person frowning",
        "aliases": [
            "person_frowning"
        ],
        "tags": [
            "sad"
        ]
    }, {
        "emoji": "🙇",
        "description": "person bowing deeply",
        "aliases": [
            "bow"
        ],
        "tags": [
            "respect", "thanks"
        ]
    }, {
        "emoji": "🎩",
        "description": "top hat",
        "aliases": [
            "tophat"
        ],
        "tags": [
            "hat", "classy"
        ]
    }, {
        "emoji": "👑",
        "description": "crown",
        "aliases": [
            "crown"
        ],
        "tags": [
            "king", "queen", "royal"
        ]
    }, {
        "emoji": "👒",
        "description": "womans hat",
        "aliases": [
            "womans_hat"
        ],
        "tags": []
    }, {
        "emoji": "👟",
        "description": "athletic shoe",
        "aliases": [
            "athletic_shoe"
        ],
        "tags": [
            "sneaker", "sport", "running"
        ]
    }, {
        "emoji": "👞",
        "description": "mans shoe",
        "aliases": [
            "mans_shoe", "shoe"
        ],
        "tags": []
    }, {
        "emoji": "👡",
        "description": "womans sandal",
        "aliases": [
            "sandal"
        ],
        "tags": [
            "shoe"
        ]
    }, {
        "emoji": "👠",
        "description": "high-heeled shoe",
        "aliases": [
            "high_heel"
        ],
        "tags": [
            "shoe"
        ]
    }, {
        "emoji": "👢",
        "description": "womans boots",
        "aliases": [
            "boot"
        ],
        "tags": []
    }, {
        "emoji": "👕",
        "description": "t-shirt",
        "aliases": [
            "shirt", "tshirt"
        ],
        "tags": []
    }, {
        "emoji": "👔",
        "description": "necktie",
        "aliases": [
            "necktie"
        ],
        "tags": [
            "shirt", "formal"
        ]
    }, {
        "emoji": "👚",
        "description": "womans clothes",
        "aliases": [
            "womans_clothes"
        ],
        "tags": []
    }, {
        "emoji": "👗",
        "description": "dress",
        "aliases": [
            "dress"
        ],
        "tags": []
    }, {
        "emoji": "🎽",
        "description": "running shirt with sash",
        "aliases": [
            "running_shirt_with_sash"
        ],
        "tags": [
            "marathon"
        ]
    }, {
        "emoji": "👖",
        "description": "jeans",
        "aliases": [
            "jeans"
        ],
        "tags": [
            "pants"
        ]
    }, {
        "emoji": "👘",
        "description": "kimono",
        "aliases": [
            "kimono"
        ],
        "tags": []
    }, {
        "emoji": "👙",
        "description": "bikini",
        "aliases": [
            "bikini"
        ],
        "tags": [
            "beach"
        ]
    }, {
        "emoji": "💼",
        "description": "briefcase",
        "aliases": [
            "briefcase"
        ],
        "tags": [
            "business"
        ]
    }, {
        "emoji": "👜",
        "description": "handbag",
        "aliases": [
            "handbag"
        ],
        "tags": [
            "bag"
        ]
    }, {
        "emoji": "👝",
        "description": "pouch",
        "aliases": [
            "pouch"
        ],
        "tags": [
            "bag"
        ]
    }, {
        "emoji": "👛",
        "description": "purse",
        "aliases": [
            "purse"
        ],
        "tags": []
    }, {
        "emoji": "👓",
        "description": "eyeglasses",
        "aliases": [
            "eyeglasses"
        ],
        "tags": [
            "glasses"
        ]
    }, {
        "emoji": "🎀",
        "description": "ribbon",
        "aliases": [
            "ribbon"
        ],
        "tags": []
    }, {
        "emoji": "🌂",
        "description": "closed umbrella",
        "aliases": [
            "closed_umbrella"
        ],
        "tags": [
            "weather", "rain"
        ]
    }, {
        "emoji": "💄",
        "description": "lipstick",
        "aliases": [
            "lipstick"
        ],
        "tags": [
            "makeup"
        ]
    }, {
        "emoji": "💛",
        "description": "yellow heart",
        "aliases": [
            "yellow_heart"
        ],
        "tags": []
    }, {
        "emoji": "💙",
        "description": "blue heart",
        "aliases": [
            "blue_heart"
        ],
        "tags": []
    }, {
        "emoji": "💜",
        "description": "purple heart",
        "aliases": [
            "purple_heart"
        ],
        "tags": []
    }, {
        "emoji": "💚",
        "description": "green heart",
        "aliases": [
            "green_heart"
        ],
        "tags": []
    }, {
        "emoji": "❤️",
        "description": "heavy black heart",
        "aliases": [
            "heart"
        ],
        "tags": [
            "love"
        ]
    }, {
        "emoji": "💔",
        "description": "broken heart",
        "aliases": [
            "broken_heart"
        ],
        "tags": []
    }, {
        "emoji": "💗",
        "description": "growing heart",
        "aliases": [
            "heartpulse"
        ],
        "tags": []
    }, {
        "emoji": "💓",
        "description": "beating heart",
        "aliases": [
            "heartbeat"
        ],
        "tags": []
    }, {
        "emoji": "💕",
        "description": "two hearts",
        "aliases": [
            "two_hearts"
        ],
        "tags": []
    }, {
        "emoji": "💖",
        "description": "sparkling heart",
        "aliases": [
            "sparkling_heart"
        ],
        "tags": []
    }, {
        "emoji": "💞",
        "description": "revolving hearts",
        "aliases": [
            "revolving_hearts"
        ],
        "tags": []
    }, {
        "emoji": "💘",
        "description": "heart with arrow",
        "aliases": [
            "cupid"
        ],
        "tags": [
            "love", "heart"
        ]
    }, {
        "emoji": "💌",
        "description": "love letter",
        "aliases": [
            "love_letter"
        ],
        "tags": [
            "email", "envelope"
        ]
    }, {
        "emoji": "💋",
        "description": "kiss mark",
        "aliases": [
            "kiss"
        ],
        "tags": [
            "lipstick"
        ]
    }, {
        "emoji": "💍",
        "description": "ring",
        "aliases": [
            "ring"
        ],
        "tags": [
            "wedding", "marriage", "engaged"
        ]
    }, {
        "emoji": "💎",
        "description": "gem stone",
        "aliases": [
            "gem"
        ],
        "tags": [
            "diamond"
        ]
    }, {
        "emoji": "👤",
        "description": "bust in silhouette",
        "aliases": [
            "bust_in_silhouette"
        ],
        "tags": [
            "user"
        ]
    }, {
        "emoji": "👥",
        "description": "busts in silhouette",
        "aliases": [
            "busts_in_silhouette"
        ],
        "tags": [
            "users", "group", "team"
        ]
    }, {
        "emoji": "💬",
        "description": "speech balloon",
        "aliases": [
            "speech_balloon"
        ],
        "tags": [
            "comment"
        ]
    }, {
        "emoji": "👣",
        "description": "footprints",
        "aliases": [
            "footprints"
        ],
        "tags": [
            "feet", "tracks"
        ]
    }, {
        "emoji": "💭",
        "description": "thought balloon",
        "aliases": [
            "thought_balloon"
        ],
        "tags": [
            "thinking"
        ]
    }, {
        "emoji": "🐶",
        "description": "dog face",
        "aliases": [
            "dog"
        ],
        "tags": [
            "pet"
        ]
    }, {
        "emoji": "🐺",
        "description": "wolf face",
        "aliases": [
            "wolf"
        ],
        "tags": []
    }, {
        "emoji": "🐱",
        "description": "cat face",
        "aliases": [
            "cat"
        ],
        "tags": [
            "pet"
        ]
    }, {
        "emoji": "🐭",
        "description": "mouse face",
        "aliases": [
            "mouse"
        ],
        "tags": []
    }, {
        "emoji": "🐹",
        "description": "hamster face",
        "aliases": [
            "hamster"
        ],
        "tags": [
            "pet"
        ]
    }, {
        "emoji": "🐰",
        "description": "rabbit face",
        "aliases": [
            "rabbit"
        ],
        "tags": [
            "bunny"
        ]
    }, {
        "emoji": "🐸",
        "description": "frog face",
        "aliases": [
            "frog"
        ],
        "tags": []
    }, {
        "emoji": "🐯",
        "description": "tiger face",
        "aliases": [
            "tiger"
        ],
        "tags": []
    }, {
        "emoji": "🐨",
        "description": "koala",
        "aliases": [
            "koala"
        ],
        "tags": []
    }, {
        "emoji": "🐻",
        "description": "bear face",
        "aliases": [
            "bear"
        ],
        "tags": []
    }, {
        "emoji": "🐷",
        "description": "pig face",
        "aliases": [
            "pig"
        ],
        "tags": []
    }, {
        "emoji": "🐽",
        "description": "pig nose",
        "aliases": [
            "pig_nose"
        ],
        "tags": []
    }, {
        "emoji": "🐮",
        "description": "cow face",
        "aliases": [
            "cow"
        ],
        "tags": []
    }, {
        "emoji": "🐗",
        "description": "boar",
        "aliases": [
            "boar"
        ],
        "tags": []
    }, {
        "emoji": "🐵",
        "description": "monkey face",
        "aliases": [
            "monkey_face"
        ],
        "tags": []
    }, {
        "emoji": "🐒",
        "description": "monkey",
        "aliases": [
            "monkey"
        ],
        "tags": []
    }, {
        "emoji": "🐴",
        "description": "horse face",
        "aliases": [
            "horse"
        ],
        "tags": []
    }, {
        "emoji": "🐑",
        "description": "sheep",
        "aliases": [
            "sheep"
        ],
        "tags": []
    }, {
        "emoji": "🐘",
        "description": "elephant",
        "aliases": [
            "elephant"
        ],
        "tags": []
    }, {
        "emoji": "🐼",
        "description": "panda face",
        "aliases": [
            "panda_face"
        ],
        "tags": []
    }, {
        "emoji": "🐧",
        "description": "penguin",
        "aliases": [
            "penguin"
        ],
        "tags": []
    }, {
        "emoji": "🐦",
        "description": "bird",
        "aliases": [
            "bird"
        ],
        "tags": []
    }, {
        "emoji": "🐤",
        "description": "baby chick",
        "aliases": [
            "baby_chick"
        ],
        "tags": []
    }, {
        "emoji": "🐥",
        "description": "front-facing baby chick",
        "aliases": [
            "hatched_chick"
        ],
        "tags": []
    }, {
        "emoji": "🐣",
        "description": "hatching chick",
        "aliases": [
            "hatching_chick"
        ],
        "tags": []
    }, {
        "emoji": "🐔",
        "description": "chicken",
        "aliases": [
            "chicken"
        ],
        "tags": []
    }, {
        "emoji": "🐍",
        "description": "snake",
        "aliases": [
            "snake"
        ],
        "tags": []
    }, {
        "emoji": "🐢",
        "description": "turtle",
        "aliases": [
            "turtle"
        ],
        "tags": [
            "slow"
        ]
    }, {
        "emoji": "🐛",
        "description": "bug",
        "aliases": [
            "bug"
        ],
        "tags": []
    }, {
        "emoji": "🐝",
        "description": "honeybee",
        "aliases": [
            "bee", "honeybee"
        ],
        "tags": []
    }, {
        "emoji": "🐜",
        "description": "ant",
        "aliases": [
            "ant"
        ],
        "tags": []
    }, {
        "emoji": "🐞",
        "description": "lady beetle",
        "aliases": [
            "beetle"
        ],
        "tags": [
            "bug"
        ]
    }, {
        "emoji": "🐌",
        "description": "snail",
        "aliases": [
            "snail"
        ],
        "tags": [
            "slow"
        ]
    }, {
        "emoji": "🐙",
        "description": "octopus",
        "aliases": [
            "octopus"
        ],
        "tags": []
    }, {
        "emoji": "🐚",
        "description": "spiral shell",
        "aliases": [
            "shell"
        ],
        "tags": [
            "sea", "beach"
        ]
    }, {
        "emoji": "🐠",
        "description": "tropical fish",
        "aliases": [
            "tropical_fish"
        ],
        "tags": []
    }, {
        "emoji": "🐟",
        "description": "fish",
        "aliases": [
            "fish"
        ],
        "tags": []
    }, {
        "emoji": "🐬",
        "description": "dolphin",
        "aliases": [
            "dolphin", "flipper"
        ],
        "tags": []
    }, {
        "emoji": "🐳",
        "description": "spouting whale",
        "aliases": [
            "whale"
        ],
        "tags": [
            "sea"
        ]
    }, {
        "emoji": "🐋",
        "description": "whale",
        "aliases": [
            "whale2"
        ],
        "tags": []
    }, {
        "emoji": "🐄",
        "description": "cow",
        "aliases": [
            "cow2"
        ],
        "tags": []
    }, {
        "emoji": "🐏",
        "description": "ram",
        "aliases": [
            "ram"
        ],
        "tags": []
    }, {
        "emoji": "🐀",
        "description": "rat",
        "aliases": [
            "rat"
        ],
        "tags": []
    }, {
        "emoji": "🐃",
        "description": "water buffalo",
        "aliases": [
            "water_buffalo"
        ],
        "tags": []
    }, {
        "emoji": "🐅",
        "description": "tiger",
        "aliases": [
            "tiger2"
        ],
        "tags": []
    }, {
        "emoji": "🐇",
        "description": "rabbit",
        "aliases": [
            "rabbit2"
        ],
        "tags": []
    }, {
        "emoji": "🐉",
        "description": "dragon",
        "aliases": [
            "dragon"
        ],
        "tags": []
    }, {
        "emoji": "🐎",
        "description": "horse",
        "aliases": [
            "racehorse"
        ],
        "tags": [
            "speed"
        ]
    }, {
        "emoji": "🐐",
        "description": "goat",
        "aliases": [
            "goat"
        ],
        "tags": []
    }, {
        "emoji": "🐓",
        "description": "rooster",
        "aliases": [
            "rooster"
        ],
        "tags": []
    }, {
        "emoji": "🐕",
        "description": "dog",
        "aliases": [
            "dog2"
        ],
        "tags": []
    }, {
        "emoji": "🐖",
        "description": "pig",
        "aliases": [
            "pig2"
        ],
        "tags": []
    }, {
        "emoji": "🐁",
        "description": "mouse",
        "aliases": [
            "mouse2"
        ],
        "tags": []
    }, {
        "emoji": "🐂",
        "description": "ox",
        "aliases": [
            "ox"
        ],
        "tags": []
    }, {
        "emoji": "🐲",
        "description": "dragon face",
        "aliases": [
            "dragon_face"
        ],
        "tags": []
    }, {
        "emoji": "🐡",
        "description": "blowfish",
        "aliases": [
            "blowfish"
        ],
        "tags": []
    }, {
        "emoji": "🐊",
        "description": "crocodile",
        "aliases": [
            "crocodile"
        ],
        "tags": []
    }, {
        "emoji": "🐫",
        "description": "bactrian camel",
        "aliases": [
            "camel"
        ],
        "tags": []
    }, {
        "emoji": "🐪",
        "description": "dromedary camel",
        "aliases": [
            "dromedary_camel"
        ],
        "tags": [
            "desert"
        ]
    }, {
        "emoji": "🐆",
        "description": "leopard",
        "aliases": [
            "leopard"
        ],
        "tags": []
    }, {
        "emoji": "🐈",
        "description": "cat",
        "aliases": [
            "cat2"
        ],
        "tags": []
    }, {
        "emoji": "🐩",
        "description": "poodle",
        "aliases": [
            "poodle"
        ],
        "tags": [
            "dog"
        ]
    }, {
        "emoji": "🐾",
        "description": "paw prints",
        "aliases": [
            "feet", "paw_prints"
        ],
        "tags": []
    }, {
        "emoji": "💐",
        "description": "bouquet",
        "aliases": [
            "bouquet"
        ],
        "tags": [
            "flowers"
        ]
    }, {
        "emoji": "🌸",
        "description": "cherry blossom",
        "aliases": [
            "cherry_blossom"
        ],
        "tags": [
            "flower", "spring"
        ]
    }, {
        "emoji": "🌷",
        "description": "tulip",
        "aliases": [
            "tulip"
        ],
        "tags": [
            "flower"
        ]
    }, {
        "emoji": "🍀",
        "description": "four leaf clover",
        "aliases": [
            "four_leaf_clover"
        ],
        "tags": [
            "luck"
        ]
    }, {
        "emoji": "🌹",
        "description": "rose",
        "aliases": [
            "rose"
        ],
        "tags": [
            "flower"
        ]
    }, {
        "emoji": "🌻",
        "description": "sunflower",
        "aliases": [
            "sunflower"
        ],
        "tags": []
    }, {
        "emoji": "🌺",
        "description": "hibiscus",
        "aliases": [
            "hibiscus"
        ],
        "tags": []
    }, {
        "emoji": "🍁",
        "description": "maple leaf",
        "aliases": [
            "maple_leaf"
        ],
        "tags": [
            "canada"
        ]
    }, {
        "emoji": "🍃",
        "description": "leaf fluttering in wind",
        "aliases": [
            "leaves"
        ],
        "tags": [
            "leaf"
        ]
    }, {
        "emoji": "🍂",
        "description": "fallen leaf",
        "aliases": [
            "fallen_leaf"
        ],
        "tags": [
            "autumn"
        ]
    }, {
        "emoji": "🌿",
        "description": "herb",
        "aliases": [
            "herb"
        ],
        "tags": []
    }, {
        "emoji": "🌾",
        "description": "ear of rice",
        "aliases": [
            "ear_of_rice"
        ],
        "tags": []
    }, {
        "emoji": "🍄",
        "description": "mushroom",
        "aliases": [
            "mushroom"
        ],
        "tags": []
    }, {
        "emoji": "🌵",
        "description": "cactus",
        "aliases": [
            "cactus"
        ],
        "tags": []
    }, {
        "emoji": "🌴",
        "description": "palm tree",
        "aliases": [
            "palm_tree"
        ],
        "tags": []
    }, {
        "emoji": "🌲",
        "description": "evergreen tree",
        "aliases": [
            "evergreen_tree"
        ],
        "tags": [
            "wood"
        ]
    }, {
        "emoji": "🌳",
        "description": "deciduous tree",
        "aliases": [
            "deciduous_tree"
        ],
        "tags": [
            "wood"
        ]
    }, {
        "emoji": "🌰",
        "description": "chestnut",
        "aliases": [
            "chestnut"
        ],
        "tags": []
    }, {
        "emoji": "🌱",
        "description": "seedling",
        "aliases": [
            "seedling"
        ],
        "tags": [
            "plant"
        ]
    }, {
        "emoji": "🌼",
        "description": "blossom",
        "aliases": [
            "blossom"
        ],
        "tags": []
    }, {
        "emoji": "🌐",
        "description": "globe with meridians",
        "aliases": [
            "globe_with_meridians"
        ],
        "tags": [
            "world", "global", "international"
        ]
    }, {
        "emoji": "🌞",
        "description": "sun with face",
        "aliases": [
            "sun_with_face"
        ],
        "tags": [
            "summer"
        ]
    }, {
        "emoji": "🌝",
        "description": "full moon with face",
        "aliases": [
            "full_moon_with_face"
        ],
        "tags": []
    }, {
        "emoji": "🌚",
        "description": "new moon with face",
        "aliases": [
            "new_moon_with_face"
        ],
        "tags": []
    }, {
        "emoji": "🌑",
        "description": "new moon symbol",
        "aliases": [
            "new_moon"
        ],
        "tags": []
    }, {
        "emoji": "🌒",
        "description": "waxing crescent moon symbol",
        "aliases": [
            "waxing_crescent_moon"
        ],
        "tags": []
    }, {
        "emoji": "🌓",
        "description": "first quarter moon symbol",
        "aliases": [
            "first_quarter_moon"
        ],
        "tags": []
    }, {
        "emoji": "🌔",
        "description": "waxing gibbous moon symbol",
        "aliases": [
            "moon", "waxing_gibbous_moon"
        ],
        "tags": []
    }, {
        "emoji": "🌕",
        "description": "full moon symbol",
        "aliases": [
            "full_moon"
        ],
        "tags": []
    }, {
        "emoji": "🌖",
        "description": "waning gibbous moon symbol",
        "aliases": [
            "waning_gibbous_moon"
        ],
        "tags": []
    }, {
        "emoji": "🌗",
        "description": "last quarter moon symbol",
        "aliases": [
            "last_quarter_moon"
        ],
        "tags": []
    }, {
        "emoji": "🌘",
        "description": "waning crescent moon symbol",
        "aliases": [
            "waning_crescent_moon"
        ],
        "tags": []
    }, {
        "emoji": "🌜",
        "description": "last quarter moon with face",
        "aliases": [
            "last_quarter_moon_with_face"
        ],
        "tags": []
    }, {
        "emoji": "🌛",
        "description": "first quarter moon with face",
        "aliases": [
            "first_quarter_moon_with_face"
        ],
        "tags": []
    }, {
        "emoji": "🌙",
        "description": "crescent moon",
        "aliases": [
            "crescent_moon"
        ],
        "tags": [
            "night"
        ]
    }, {
        "emoji": "🌍",
        "description": "earth globe europe-africa",
        "aliases": [
            "earth_africa"
        ],
        "tags": [
            "globe", "world", "international"
        ]
    }, {
        "emoji": "🌎",
        "description": "earth globe americas",
        "aliases": [
            "earth_americas"
        ],
        "tags": [
            "globe", "world", "international"
        ]
    }, {
        "emoji": "🌏",
        "description": "earth globe asia-australia",
        "aliases": [
            "earth_asia"
        ],
        "tags": [
            "globe", "world", "international"
        ]
    }, {
        "emoji": "🌋",
        "description": "volcano",
        "aliases": [
            "volcano"
        ],
        "tags": []
    }, {
        "emoji": "🌌",
        "description": "milky way",
        "aliases": [
            "milky_way"
        ],
        "tags": []
    }, {
        "emoji": "🌠",
        "description": "shooting star",
        "aliases": [
            "stars"
        ],
        "tags": []
    }, {
        "emoji": "⭐",
        "description": "white medium star",
        "aliases": [
            "star"
        ],
        "tags": []
    }, {
        "emoji": "☀️",
        "description": "black sun with rays",
        "aliases": [
            "sunny"
        ],
        "tags": [
            "weather"
        ]
    }, {
        "emoji": "⛅",
        "description": "sun behind cloud",
        "aliases": [
            "partly_sunny"
        ],
        "tags": [
            "weather", "cloud"
        ]
    }, {
        "emoji": "☁️",
        "description": "cloud",
        "aliases": [
            "cloud"
        ],
        "tags": []
    }, {
        "emoji": "⚡",
        "description": "high voltage sign",
        "aliases": [
            "zap"
        ],
        "tags": [
            "lightning", "thunder"
        ]
    }, {
        "emoji": "☔",
        "description": "umbrella with rain drops",
        "aliases": [
            "umbrella"
        ],
        "tags": [
            "rain", "weather"
        ]
    }, {
        "emoji": "❄️",
        "description": "snowflake",
        "aliases": [
            "snowflake"
        ],
        "tags": [
            "winter", "cold", "weather"
        ]
    }, {
        "emoji": "⛄",
        "description": "snowman without snow",
        "aliases": [
            "snowman"
        ],
        "tags": [
            "winter", "christmas"
        ]
    }, {
        "emoji": "🌀",
        "description": "cyclone",
        "aliases": [
            "cyclone"
        ],
        "tags": [
            "swirl"
        ]
    }, {
        "emoji": "🌁",
        "description": "foggy",
        "aliases": [
            "foggy"
        ],
        "tags": [
            "karl"
        ]
    }, {
        "emoji": "🌈",
        "description": "rainbow",
        "aliases": [
            "rainbow"
        ],
        "tags": [
            "pride"
        ]
    }, {
        "emoji": "🌊",
        "description": "water wave",
        "aliases": [
            "ocean"
        ],
        "tags": [
            "sea"
        ]
    }, {
        "emoji": "🎍",
        "description": "pine decoration",
        "aliases": [
            "bamboo"
        ],
        "tags": []
    }, {
        "emoji": "💝",
        "description": "heart with ribbon",
        "aliases": [
            "gift_heart"
        ],
        "tags": [
            "chocolates"
        ]
    }, {
        "emoji": "🎎",
        "description": "japanese dolls",
        "aliases": [
            "dolls"
        ],
        "tags": []
    }, {
        "emoji": "🎒",
        "description": "school satchel",
        "aliases": [
            "school_satchel"
        ],
        "tags": []
    }, {
        "emoji": "🎓",
        "description": "graduation cap",
        "aliases": [
            "mortar_board"
        ],
        "tags": [
            "education", "college", "university", "graduation"
        ]
    }, {
        "emoji": "🎏",
        "description": "carp streamer",
        "aliases": [
            "flags"
        ],
        "tags": []
    }, {
        "emoji": "🎆",
        "description": "fireworks",
        "aliases": [
            "fireworks"
        ],
        "tags": [
            "festival", "celebration"
        ]
    }, {
        "emoji": "🎇",
        "description": "firework sparkler",
        "aliases": [
            "sparkler"
        ],
        "tags": []
    }, {
        "emoji": "🎐",
        "description": "wind chime",
        "aliases": [
            "wind_chime"
        ],
        "tags": []
    }, {
        "emoji": "🎑",
        "description": "moon viewing ceremony",
        "aliases": [
            "rice_scene"
        ],
        "tags": []
    }, {
        "emoji": "🎃",
        "description": "jack-o-lantern",
        "aliases": [
            "jack_o_lantern"
        ],
        "tags": [
            "halloween"
        ]
    }, {
        "emoji": "👻",
        "description": "ghost",
        "aliases": [
            "ghost"
        ],
        "tags": [
            "halloween"
        ]
    }, {
        "emoji": "🎅",
        "description": "father christmas",
        "aliases": [
            "santa"
        ],
        "tags": [
            "christmas"
        ]
    }, {
        "emoji": "🎄",
        "description": "christmas tree",
        "aliases": [
            "christmas_tree"
        ],
        "tags": []
    }, {
        "emoji": "🎁",
        "description": "wrapped present",
        "aliases": [
            "gift"
        ],
        "tags": [
            "present", "birthday", "christmas"
        ]
    }, {
        "emoji": "🎋",
        "description": "tanabata tree",
        "aliases": [
            "tanabata_tree"
        ],
        "tags": []
    }, {
        "emoji": "🎉",
        "description": "party popper",
        "aliases": [
            "tada"
        ],
        "tags": [
            "party"
        ]
    }, {
        "emoji": "🎊",
        "description": "confetti ball",
        "aliases": [
            "confetti_ball"
        ],
        "tags": []
    }, {
        "emoji": "🎈",
        "description": "balloon",
        "aliases": [
            "balloon"
        ],
        "tags": [
            "party", "birthday"
        ]
    }, {
        "emoji": "🎌",
        "description": "crossed flags",
        "aliases": [
            "crossed_flags"
        ],
        "tags": []
    }, {
        "emoji": "🔮",
        "description": "crystal ball",
        "aliases": [
            "crystal_ball"
        ],
        "tags": [
            "fortune"
        ]
    }, {
        "emoji": "🎥",
        "description": "movie camera",
        "aliases": [
            "movie_camera"
        ],
        "tags": [
            "film", "video"
        ]
    }, {
        "emoji": "📷",
        "description": "camera",
        "aliases": [
            "camera"
        ],
        "tags": [
            "photo"
        ]
    }, {
        "emoji": "📹",
        "description": "video camera",
        "aliases": [
            "video_camera"
        ],
        "tags": []
    }, {
        "emoji": "📼",
        "description": "videocassette",
        "aliases": [
            "vhs"
        ],
        "tags": []
    }, {
        "emoji": "💿",
        "description": "optical disc",
        "aliases": [
            "cd"
        ],
        "tags": []
    }, {
        "emoji": "📀",
        "description": "dvd",
        "aliases": [
            "dvd"
        ],
        "tags": []
    }, {
        "emoji": "💽",
        "description": "minidisc",
        "aliases": [
            "minidisc"
        ],
        "tags": []
    }, {
        "emoji": "💾",
        "description": "floppy disk",
        "aliases": [
            "floppy_disk"
        ],
        "tags": [
            "save"
        ]
    }, {
        "emoji": "💻",
        "description": "personal computer",
        "aliases": [
            "computer"
        ],
        "tags": [
            "desktop", "screen"
        ]
    }, {
        "emoji": "📱",
        "description": "mobile phone",
        "aliases": [
            "iphone"
        ],
        "tags": [
            "smartphone", "mobile"
        ]
    }, {
        "emoji": "☎️",
        "description": "black telephone",
        "aliases": [
            "phone", "telephone"
        ],
        "tags": []
    }, {
        "emoji": "📞",
        "description": "telephone receiver",
        "aliases": [
            "telephone_receiver"
        ],
        "tags": [
            "phone", "call"
        ]
    }, {
        "emoji": "📟",
        "description": "pager",
        "aliases": [
            "pager"
        ],
        "tags": []
    }, {
        "emoji": "📠",
        "description": "fax machine",
        "aliases": [
            "fax"
        ],
        "tags": []
    }, {
        "emoji": "📡",
        "description": "satellite antenna",
        "aliases": [
            "satellite"
        ],
        "tags": [
            "signal"
        ]
    }, {
        "emoji": "📺",
        "description": "television",
        "aliases": [
            "tv"
        ],
        "tags": []
    }, {
        "emoji": "📻",
        "description": "radio",
        "aliases": [
            "radio"
        ],
        "tags": [
            "podcast"
        ]
    }, {
        "emoji": "🔊",
        "description": "speaker with three sound waves",
        "aliases": [
            "loud_sound"
        ],
        "tags": [
            "volume"
        ]
    }, {
        "emoji": "🔉",
        "description": "speaker with one sound wave",
        "aliases": [
            "sound"
        ],
        "tags": [
            "volume"
        ]
    }, {
        "emoji": "🔈",
        "description": "speaker",
        "aliases": [
            "speaker"
        ],
        "tags": []
    }, {
        "emoji": "🔇",
        "description": "speaker with cancellation stroke",
        "aliases": [
            "mute"
        ],
        "tags": [
            "sound", "volume"
        ]
    }, {
        "emoji": "🔔",
        "description": "bell",
        "aliases": [
            "bell"
        ],
        "tags": [
            "sound", "notification"
        ]
    }, {
        "emoji": "🔕",
        "description": "bell with cancellation stroke",
        "aliases": [
            "no_bell"
        ],
        "tags": [
            "volume", "off"
        ]
    }, {
        "emoji": "📢",
        "description": "public address loudspeaker",
        "aliases": [
            "loudspeaker"
        ],
        "tags": [
            "announcement"
        ]
    }, {
        "emoji": "📣",
        "description": "cheering megaphone",
        "aliases": [
            "mega"
        ],
        "tags": []
    }, {
        "emoji": "⏳",
        "description": "hourglass with flowing sand",
        "aliases": [
            "hourglass_flowing_sand"
        ],
        "tags": [
            "time"
        ]
    }, {
        "emoji": "⌛",
        "description": "hourglass",
        "aliases": [
            "hourglass"
        ],
        "tags": [
            "time"
        ]
    }, {
        "emoji": "⏰",
        "description": "alarm clock",
        "aliases": [
            "alarm_clock"
        ],
        "tags": [
            "morning"
        ]
    }, {
        "emoji": "⌚",
        "description": "watch",
        "aliases": [
            "watch"
        ],
        "tags": [
            "time"
        ]
    }, {
        "emoji": "🔓",
        "description": "open lock",
        "aliases": [
            "unlock"
        ],
        "tags": [
            "security"
        ]
    }, {
        "emoji": "🔒",
        "description": "lock",
        "aliases": [
            "lock"
        ],
        "tags": [
            "security", "private"
        ]
    }, {
        "emoji": "🔏",
        "description": "lock with ink pen",
        "aliases": [
            "lock_with_ink_pen"
        ],
        "tags": []
    }, {
        "emoji": "🔐",
        "description": "closed lock with key",
        "aliases": [
            "closed_lock_with_key"
        ],
        "tags": [
            "security"
        ]
    }, {
        "emoji": "🔑",
        "description": "key",
        "aliases": [
            "key"
        ],
        "tags": [
            "lock", "password"
        ]
    }, {
        "emoji": "🔎",
        "description": "right-pointing magnifying glass",
        "aliases": [
            "mag_right"
        ],
        "tags": []
    }, {
        "emoji": "💡",
        "description": "electric light bulb",
        "aliases": [
            "bulb"
        ],
        "tags": [
            "idea", "light"
        ]
    }, {
        "emoji": "🔦",
        "description": "electric torch",
        "aliases": [
            "flashlight"
        ],
        "tags": []
    }, {
        "emoji": "🔆",
        "description": "high brightness symbol",
        "aliases": [
            "high_brightness"
        ],
        "tags": []
    }, {
        "emoji": "🔅",
        "description": "low brightness symbol",
        "aliases": [
            "low_brightness"
        ],
        "tags": []
    }, {
        "emoji": "🔌",
        "description": "electric plug",
        "aliases": [
            "electric_plug"
        ],
        "tags": []
    }, {
        "emoji": "🔋",
        "description": "battery",
        "aliases": [
            "battery"
        ],
        "tags": [
            "power"
        ]
    }, {
        "emoji": "🔍",
        "description": "left-pointing magnifying glass",
        "aliases": [
            "mag"
        ],
        "tags": [
            "search", "zoom"
        ]
    }, {
        "emoji": "🛁",
        "description": "bathtub",
        "aliases": [
            "bathtub"
        ],
        "tags": []
    }, {
        "emoji": "🛀",
        "description": "bath",
        "aliases": [
            "bath"
        ],
        "tags": [
            "shower"
        ]
    }, {
        "emoji": "🚿",
        "description": "shower",
        "aliases": [
            "shower"
        ],
        "tags": [
            "bath"
        ]
    }, {
        "emoji": "🚽",
        "description": "toilet",
        "aliases": [
            "toilet"
        ],
        "tags": [
            "wc"
        ]
    }, {
        "emoji": "🔧",
        "description": "wrench",
        "aliases": [
            "wrench"
        ],
        "tags": [
            "tool"
        ]
    }, {
        "emoji": "🔩",
        "description": "nut and bolt",
        "aliases": [
            "nut_and_bolt"
        ],
        "tags": []
    }, {
        "emoji": "🔨",
        "description": "hammer",
        "aliases": [
            "hammer"
        ],
        "tags": [
            "tool"
        ]
    }, {
        "emoji": "🚪",
        "description": "door",
        "aliases": [
            "door"
        ],
        "tags": []
    }, {
        "emoji": "🚬",
        "description": "smoking symbol",
        "aliases": [
            "smoking"
        ],
        "tags": [
            "cigarette"
        ]
    }, {
        "emoji": "💣",
        "description": "bomb",
        "aliases": [
            "bomb"
        ],
        "tags": [
            "boom"
        ]
    }, {
        "emoji": "🔫",
        "description": "pistol",
        "aliases": [
            "gun"
        ],
        "tags": [
            "shoot", "weapon"
        ]
    }, {
        "emoji": "🔪",
        "description": "hocho",
        "aliases": [
            "hocho", "knife"
        ],
        "tags": [
            "cut", "chop"
        ]
    }, {
        "emoji": "💊",
        "description": "pill",
        "aliases": [
            "pill"
        ],
        "tags": [
            "health", "medicine"
        ]
    }, {
        "emoji": "💉",
        "description": "syringe",
        "aliases": [
            "syringe"
        ],
        "tags": [
            "health", "hospital", "needle"
        ]
    }, {
        "emoji": "💰",
        "description": "money bag",
        "aliases": [
            "moneybag"
        ],
        "tags": [
            "dollar", "cream"
        ]
    }, {
        "emoji": "💴",
        "description": "banknote with yen sign",
        "aliases": [
            "yen"
        ],
        "tags": []
    }, {
        "emoji": "💵",
        "description": "banknote with dollar sign",
        "aliases": [
            "dollar"
        ],
        "tags": [
            "money"
        ]
    }, {
        "emoji": "💷",
        "description": "banknote with pound sign",
        "aliases": [
            "pound"
        ],
        "tags": []
    }, {
        "emoji": "💶",
        "description": "banknote with euro sign",
        "aliases": [
            "euro"
        ],
        "tags": []
    }, {
        "emoji": "💳",
        "description": "credit card",
        "aliases": [
            "credit_card"
        ],
        "tags": [
            "subscription"
        ]
    }, {
        "emoji": "💸",
        "description": "money with wings",
        "aliases": [
            "money_with_wings"
        ],
        "tags": [
            "dollar"
        ]
    }, {
        "emoji": "📲",
        "description": "mobile phone with rightwards arrow at left",
        "aliases": [
            "calling"
        ],
        "tags": [
            "call", "incoming"
        ]
    }, {
        "emoji": "📧",
        "description": "e-mail symbol",
        "aliases": [
            "e-mail"
        ],
        "tags": []
    }, {
        "emoji": "📥",
        "description": "inbox tray",
        "aliases": [
            "inbox_tray"
        ],
        "tags": []
    }, {
        "emoji": "📤",
        "description": "outbox tray",
        "aliases": [
            "outbox_tray"
        ],
        "tags": []
    }, {
        "emoji": "✉️",
        "description": "envelope",
        "aliases": [
            "email", "envelope"
        ],
        "tags": [
            "letter"
        ]
    }, {
        "emoji": "📩",
        "description": "envelope with downwards arrow above",
        "aliases": [
            "envelope_with_arrow"
        ],
        "tags": []
    }, {
        "emoji": "📨",
        "description": "incoming envelope",
        "aliases": [
            "incoming_envelope"
        ],
        "tags": []
    }, {
        "emoji": "📯",
        "description": "postal horn",
        "aliases": [
            "postal_horn"
        ],
        "tags": []
    }, {
        "emoji": "📫",
        "description": "closed mailbox with raised flag",
        "aliases": [
            "mailbox"
        ],
        "tags": []
    }, {
        "emoji": "📪",
        "description": "closed mailbox with lowered flag",
        "aliases": [
            "mailbox_closed"
        ],
        "tags": []
    }, {
        "emoji": "📬",
        "description": "open mailbox with raised flag",
        "aliases": [
            "mailbox_with_mail"
        ],
        "tags": []
    }, {
        "emoji": "📭",
        "description": "open mailbox with lowered flag",
        "aliases": [
            "mailbox_with_no_mail"
        ],
        "tags": []
    }, {
        "emoji": "📮",
        "description": "postbox",
        "aliases": [
            "postbox"
        ],
        "tags": []
    }, {
        "emoji": "📦",
        "description": "package",
        "aliases": [
            "package"
        ],
        "tags": [
            "shipping"
        ]
    }, {
        "emoji": "📝",
        "description": "memo",
        "aliases": [
            "memo", "pencil"
        ],
        "tags": [
            "document", "note"
        ]
    }, {
        "emoji": "📄",
        "description": "page facing up",
        "aliases": [
            "page_facing_up"
        ],
        "tags": [
            "document"
        ]
    }, {
        "emoji": "📃",
        "description": "page with curl",
        "aliases": [
            "page_with_curl"
        ],
        "tags": []
    }, {
        "emoji": "📑",
        "description": "bookmark tabs",
        "aliases": [
            "bookmark_tabs"
        ],
        "tags": []
    }, {
        "emoji": "📊",
        "description": "bar chart",
        "aliases": [
            "bar_chart"
        ],
        "tags": [
            "stats", "metrics"
        ]
    }, {
        "emoji": "📈",
        "description": "chart with upwards trend",
        "aliases": [
            "chart_with_upwards_trend"
        ],
        "tags": [
            "graph", "metrics"
        ]
    }, {
        "emoji": "📉",
        "description": "chart with downwards trend",
        "aliases": [
            "chart_with_downwards_trend"
        ],
        "tags": [
            "graph", "metrics"
        ]
    }, {
        "emoji": "📜",
        "description": "scroll",
        "aliases": [
            "scroll"
        ],
        "tags": [
            "document"
        ]
    }, {
        "emoji": "📋",
        "description": "clipboard",
        "aliases": [
            "clipboard"
        ],
        "tags": []
    }, {
        "emoji": "📅",
        "description": "calendar",
        "aliases": [
            "date"
        ],
        "tags": [
            "calendar", "schedule"
        ]
    }, {
        "emoji": "📆",
        "description": "tear-off calendar",
        "aliases": [
            "calendar"
        ],
        "tags": [
            "schedule"
        ]
    }, {
        "emoji": "📇",
        "description": "card index",
        "aliases": [
            "card_index"
        ],
        "tags": []
    }, {
        "emoji": "📁",
        "description": "file folder",
        "aliases": [
            "file_folder"
        ],
        "tags": [
            "directory"
        ]
    }, {
        "emoji": "📂",
        "description": "open file folder",
        "aliases": [
            "open_file_folder"
        ],
        "tags": []
    }, {
        "emoji": "✂️",
        "description": "black scissors",
        "aliases": [
            "scissors"
        ],
        "tags": [
            "cut"
        ]
    }, {
        "emoji": "📌",
        "description": "pushpin",
        "aliases": [
            "pushpin"
        ],
        "tags": [
            "location"
        ]
    }, {
        "emoji": "📎",
        "description": "paperclip",
        "aliases": [
            "paperclip"
        ],
        "tags": []
    }, {
        "emoji": "✒️",
        "description": "black nib",
        "aliases": [
            "black_nib"
        ],
        "tags": []
    }, {
        "emoji": "✏️",
        "description": "pencil",
        "aliases": [
            "pencil2"
        ],
        "tags": []
    }, {
        "emoji": "📏",
        "description": "straight ruler",
        "aliases": [
            "straight_ruler"
        ],
        "tags": []
    }, {
        "emoji": "📐",
        "description": "triangular ruler",
        "aliases": [
            "triangular_ruler"
        ],
        "tags": []
    }, {
        "emoji": "📕",
        "description": "closed book",
        "aliases": [
            "closed_book"
        ],
        "tags": []
    }, {
        "emoji": "📗",
        "description": "green book",
        "aliases": [
            "green_book"
        ],
        "tags": []
    }, {
        "emoji": "📘",
        "description": "blue book",
        "aliases": [
            "blue_book"
        ],
        "tags": []
    }, {
        "emoji": "📙",
        "description": "orange book",
        "aliases": [
            "orange_book"
        ],
        "tags": []
    }, {
        "emoji": "📓",
        "description": "notebook",
        "aliases": [
            "notebook"
        ],
        "tags": []
    }, {
        "emoji": "📔",
        "description": "notebook with decorative cover",
        "aliases": [
            "notebook_with_decorative_cover"
        ],
        "tags": []
    }, {
        "emoji": "📒",
        "description": "ledger",
        "aliases": [
            "ledger"
        ],
        "tags": []
    }, {
        "emoji": "📚",
        "description": "books",
        "aliases": [
            "books"
        ],
        "tags": [
            "library"
        ]
    }, {
        "emoji": "📖",
        "description": "open book",
        "aliases": [
            "book", "open_book"
        ],
        "tags": []
    }, {
        "emoji": "🔖",
        "description": "bookmark",
        "aliases": [
            "bookmark"
        ],
        "tags": []
    }, {
        "emoji": "📛",
        "description": "name badge",
        "aliases": [
            "name_badge"
        ],
        "tags": []
    }, {
        "emoji": "🔬",
        "description": "microscope",
        "aliases": [
            "microscope"
        ],
        "tags": [
            "science", "laboratory", "investigate"
        ]
    }, {
        "emoji": "🔭",
        "description": "telescope",
        "aliases": [
            "telescope"
        ],
        "tags": []
    }, {
        "emoji": "📰",
        "description": "newspaper",
        "aliases": [
            "newspaper"
        ],
        "tags": [
            "press"
        ]
    }, {
        "emoji": "🎨",
        "description": "artist palette",
        "aliases": [
            "art"
        ],
        "tags": [
            "design", "paint"
        ]
    }, {
        "emoji": "🎬",
        "description": "clapper board",
        "aliases": [
            "clapper"
        ],
        "tags": [
            "film"
        ]
    }, {
        "emoji": "🎤",
        "description": "microphone",
        "aliases": [
            "microphone"
        ],
        "tags": [
            "sing"
        ]
    }, {
        "emoji": "🎧",
        "description": "headphone",
        "aliases": [
            "headphones"
        ],
        "tags": [
            "music", "earphones"
        ]
    }, {
        "emoji": "🎼",
        "description": "musical score",
        "aliases": [
            "musical_score"
        ],
        "tags": []
    }, {
        "emoji": "🎵",
        "description": "musical note",
        "aliases": [
            "musical_note"
        ],
        "tags": []
    }, {
        "emoji": "🎶",
        "description": "multiple musical notes",
        "aliases": [
            "notes"
        ],
        "tags": [
            "music"
        ]
    }, {
        "emoji": "🎹",
        "description": "musical keyboard",
        "aliases": [
            "musical_keyboard"
        ],
        "tags": [
            "piano"
        ]
    }, {
        "emoji": "🎻",
        "description": "violin",
        "aliases": [
            "violin"
        ],
        "tags": []
    }, {
        "emoji": "🎺",
        "description": "trumpet",
        "aliases": [
            "trumpet"
        ],
        "tags": []
    }, {
        "emoji": "🎷",
        "description": "saxophone",
        "aliases": [
            "saxophone"
        ],
        "tags": []
    }, {
        "emoji": "🎸",
        "description": "guitar",
        "aliases": [
            "guitar"
        ],
        "tags": [
            "rock"
        ]
    }, {
        "emoji": "👾",
        "description": "alien monster",
        "aliases": [
            "space_invader"
        ],
        "tags": [
            "game", "retro"
        ]
    }, {
        "emoji": "🎮",
        "description": "video game",
        "aliases": [
            "video_game"
        ],
        "tags": [
            "play", "controller", "console"
        ]
    }, {
        "emoji": "🃏",
        "description": "playing card black joker",
        "aliases": [
            "black_joker"
        ],
        "tags": []
    }, {
        "emoji": "🎴",
        "description": "flower playing cards",
        "aliases": [
            "flower_playing_cards"
        ],
        "tags": []
    }, {
        "emoji": "🀄",
        "description": "mahjong tile red dragon",
        "aliases": [
            "mahjong"
        ],
        "tags": []
    }, {
        "emoji": "🎲",
        "description": "game die",
        "aliases": [
            "game_die"
        ],
        "tags": [
            "dice", "gambling"
        ]
    }, {
        "emoji": "🎯",
        "description": "direct hit",
        "aliases": [
            "dart"
        ],
        "tags": [
            "target"
        ]
    }, {
        "emoji": "🏈",
        "description": "american football",
        "aliases": [
            "football"
        ],
        "tags": [
            "sports"
        ]
    }, {
        "emoji": "🏀",
        "description": "basketball and hoop",
        "aliases": [
            "basketball"
        ],
        "tags": [
            "sports"
        ]
    }, {
        "emoji": "⚽",
        "description": "soccer ball",
        "aliases": [
            "soccer"
        ],
        "tags": [
            "sports"
        ]
    }, {
        "emoji": "⚾️",
        "description": "baseball",
        "aliases": [
            "baseball"
        ],
        "tags": [
            "sports"
        ]
    }, {
        "emoji": "🎾",
        "description": "tennis racquet and ball",
        "aliases": [
            "tennis"
        ],
        "tags": [
            "sports"
        ]
    }, {
        "emoji": "🎱",
        "description": "billiards",
        "aliases": [
            "8ball"
        ],
        "tags": [
            "pool", "billiards"
        ]
    }, {
        "emoji": "🏉",
        "description": "rugby football",
        "aliases": [
            "rugby_football"
        ],
        "tags": []
    }, {
        "emoji": "🎳",
        "description": "bowling",
        "aliases": [
            "bowling"
        ],
        "tags": []
    }, {
        "emoji": "⛳",
        "description": "flag in hole",
        "aliases": [
            "golf"
        ],
        "tags": []
    }, {
        "emoji": "🚵",
        "description": "mountain bicyclist",
        "aliases": [
            "mountain_bicyclist"
        ],
        "tags": []
    }, {
        "emoji": "🚴",
        "description": "bicyclist",
        "aliases": [
            "bicyclist"
        ],
        "tags": []
    }, {
        "emoji": "🏁",
        "description": "chequered flag",
        "aliases": [
            "checkered_flag"
        ],
        "tags": [
            "milestone", "finish"
        ]
    }, {
        "emoji": "🏇",
        "description": "horse racing",
        "aliases": [
            "horse_racing"
        ],
        "tags": []
    }, {
        "emoji": "🏆",
        "description": "trophy",
        "aliases": [
            "trophy"
        ],
        "tags": [
            "award", "contest", "winner"
        ]
    }, {
        "emoji": "🎿",
        "description": "ski and ski boot",
        "aliases": [
            "ski"
        ],
        "tags": []
    }, {
        "emoji": "🏂",
        "description": "snowboarder",
        "aliases": [
            "snowboarder"
        ],
        "tags": []
    }, {
        "emoji": "🏊",
        "description": "swimmer",
        "aliases": [
            "swimmer"
        ],
        "tags": []
    }, {
        "emoji": "🏄",
        "description": "surfer",
        "aliases": [
            "surfer"
        ],
        "tags": []
    }, {
        "emoji": "🎣",
        "description": "fishing pole and fish",
        "aliases": [
            "fishing_pole_and_fish"
        ],
        "tags": []
    }, {
        "emoji": "☕",
        "description": "hot beverage",
        "aliases": [
            "coffee"
        ],
        "tags": [
            "cafe", "espresso"
        ]
    }, {
        "emoji": "🍵",
        "description": "teacup without handle",
        "aliases": [
            "tea"
        ],
        "tags": [
            "green", "breakfast"
        ]
    }, {
        "emoji": "🍶",
        "description": "sake bottle and cup",
        "aliases": [
            "sake"
        ],
        "tags": []
    }, {
        "emoji": "🍼",
        "description": "baby bottle",
        "aliases": [
            "baby_bottle"
        ],
        "tags": [
            "milk"
        ]
    }, {
        "emoji": "🍺",
        "description": "beer mug",
        "aliases": [
            "beer"
        ],
        "tags": [
            "drink"
        ]
    }, {
        "emoji": "🍻",
        "description": "clinking beer mugs",
        "aliases": [
            "beers"
        ],
        "tags": [
            "drinks"
        ]
    }, {
        "emoji": "🍸",
        "description": "cocktail glass",
        "aliases": [
            "cocktail"
        ],
        "tags": [
            "drink"
        ]
    }, {
        "emoji": "🍹",
        "description": "tropical drink",
        "aliases": [
            "tropical_drink"
        ],
        "tags": [
            "summer", "vacation"
        ]
    }, {
        "emoji": "🍷",
        "description": "wine glass",
        "aliases": [
            "wine_glass"
        ],
        "tags": []
    }, {
        "emoji": "🍴",
        "description": "fork and knife",
        "aliases": [
            "fork_and_knife"
        ],
        "tags": [
            "cutlery"
        ]
    }, {
        "emoji": "🍕",
        "description": "slice of pizza",
        "aliases": [
            "pizza"
        ],
        "tags": []
    }, {
        "emoji": "🍔",
        "description": "hamburger",
        "aliases": [
            "hamburger"
        ],
        "tags": [
            "burger"
        ]
    }, {
        "emoji": "🍟",
        "description": "french fries",
        "aliases": [
            "fries"
        ],
        "tags": []
    }, {
        "emoji": "🍗",
        "description": "poultry leg",
        "aliases": [
            "poultry_leg"
        ],
        "tags": [
            "meat", "chicken"
        ]
    }, {
        "emoji": "🍖",
        "description": "meat on bone",
        "aliases": [
            "meat_on_bone"
        ],
        "tags": []
    }, {
        "emoji": "🍝",
        "description": "spaghetti",
        "aliases": [
            "spaghetti"
        ],
        "tags": [
            "pasta"
        ]
    }, {
        "emoji": "🍛",
        "description": "curry and rice",
        "aliases": [
            "curry"
        ],
        "tags": []
    }, {
        "emoji": "🍤",
        "description": "fried shrimp",
        "aliases": [
            "fried_shrimp"
        ],
        "tags": [
            "tempura"
        ]
    }, {
        "emoji": "🍱",
        "description": "bento box",
        "aliases": [
            "bento"
        ],
        "tags": []
    }, {
        "emoji": "🍣",
        "description": "sushi",
        "aliases": [
            "sushi"
        ],
        "tags": []
    }, {
        "emoji": "🍥",
        "description": "fish cake with swirl design",
        "aliases": [
            "fish_cake"
        ],
        "tags": []
    }, {
        "emoji": "🍙",
        "description": "rice ball",
        "aliases": [
            "rice_ball"
        ],
        "tags": []
    }, {
        "emoji": "🍘",
        "description": "rice cracker",
        "aliases": [
            "rice_cracker"
        ],
        "tags": []
    }, {
        "emoji": "🍚",
        "description": "cooked rice",
        "aliases": [
            "rice"
        ],
        "tags": []
    }, {
        "emoji": "🍜",
        "description": "steaming bowl",
        "aliases": [
            "ramen"
        ],
        "tags": [
            "noodle"
        ]
    }, {
        "emoji": "🍲",
        "description": "pot of food",
        "aliases": [
            "stew"
        ],
        "tags": []
    }, {
        "emoji": "🍢",
        "description": "oden",
        "aliases": [
            "oden"
        ],
        "tags": []
    }, {
        "emoji": "🍡",
        "description": "dango",
        "aliases": [
            "dango"
        ],
        "tags": []
    }, {
        "emoji": "🍳",
        "description": "cooking",
        "aliases": [
            "egg"
        ],
        "tags": [
            "breakfast"
        ]
    }, {
        "emoji": "🍞",
        "description": "bread",
        "aliases": [
            "bread"
        ],
        "tags": [
            "toast"
        ]
    }, {
        "emoji": "🍩",
        "description": "doughnut",
        "aliases": [
            "doughnut"
        ],
        "tags": []
    }, {
        "emoji": "🍮",
        "description": "custard",
        "aliases": [
            "custard"
        ],
        "tags": []
    }, {
        "emoji": "🍦",
        "description": "soft ice cream",
        "aliases": [
            "icecream"
        ],
        "tags": []
    }, {
        "emoji": "🍨",
        "description": "ice cream",
        "aliases": [
            "ice_cream"
        ],
        "tags": []
    }, {
        "emoji": "🍧",
        "description": "shaved ice",
        "aliases": [
            "shaved_ice"
        ],
        "tags": []
    }, {
        "emoji": "🎂",
        "description": "birthday cake",
        "aliases": [
            "birthday"
        ],
        "tags": [
            "party"
        ]
    }, {
        "emoji": "🍰",
        "description": "shortcake",
        "aliases": [
            "cake"
        ],
        "tags": [
            "dessert"
        ]
    }, {
        "emoji": "🍪",
        "description": "cookie",
        "aliases": [
            "cookie"
        ],
        "tags": []
    }, {
        "emoji": "🍫",
        "description": "chocolate bar",
        "aliases": [
            "chocolate_bar"
        ],
        "tags": []
    }, {
        "emoji": "🍬",
        "description": "candy",
        "aliases": [
            "candy"
        ],
        "tags": [
            "sweet"
        ]
    }, {
        "emoji": "🍭",
        "description": "lollipop",
        "aliases": [
            "lollipop"
        ],
        "tags": []
    }, {
        "emoji": "🍯",
        "description": "honey pot",
        "aliases": [
            "honey_pot"
        ],
        "tags": []
    }, {
        "emoji": "🍎",
        "description": "red apple",
        "aliases": [
            "apple"
        ],
        "tags": []
    }, {
        "emoji": "🍏",
        "description": "green apple",
        "aliases": [
            "green_apple"
        ],
        "tags": [
            "fruit"
        ]
    }, {
        "emoji": "🍊",
        "description": "tangerine",
        "aliases": [
            "tangerine", "orange", "mandarin"
        ],
        "tags": []
    }, {
        "emoji": "🍋",
        "description": "lemon",
        "aliases": [
            "lemon"
        ],
        "tags": []
    }, {
        "emoji": "🍒",
        "description": "cherries",
        "aliases": [
            "cherries"
        ],
        "tags": [
            "fruit"
        ]
    }, {
        "emoji": "🍇",
        "description": "grapes",
        "aliases": [
            "grapes"
        ],
        "tags": []
    }, {
        "emoji": "🍉",
        "description": "watermelon",
        "aliases": [
            "watermelon"
        ],
        "tags": []
    }, {
        "emoji": "🍓",
        "description": "strawberry",
        "aliases": [
            "strawberry"
        ],
        "tags": [
            "fruit"
        ]
    }, {
        "emoji": "🍑",
        "description": "peach",
        "aliases": [
            "peach"
        ],
        "tags": []
    }, {
        "emoji": "🍈",
        "description": "melon",
        "aliases": [
            "melon"
        ],
        "tags": []
    }, {
        "emoji": "🍌",
        "description": "banana",
        "aliases": [
            "banana"
        ],
        "tags": [
            "fruit"
        ]
    }, {
        "emoji": "🍐",
        "description": "pear",
        "aliases": [
            "pear"
        ],
        "tags": []
    }, {
        "emoji": "🍍",
        "description": "pineapple",
        "aliases": [
            "pineapple"
        ],
        "tags": []
    }, {
        "emoji": "🍠",
        "description": "roasted sweet potato",
        "aliases": [
            "sweet_potato"
        ],
        "tags": []
    }, {
        "emoji": "🍆",
        "description": "aubergine",
        "aliases": [
            "eggplant"
        ],
        "tags": [
            "aubergine"
        ]
    }, {
        "emoji": "🍅",
        "description": "tomato",
        "aliases": [
            "tomato"
        ],
        "tags": []
    }, {
        "emoji": "🌽",
        "description": "ear of maize",
        "aliases": [
            "corn"
        ],
        "tags": []
    }, {
        "emoji": "🏠",
        "description": "house building",
        "aliases": [
            "house"
        ],
        "tags": []
    }, {
        "emoji": "🏡",
        "description": "house with garden",
        "aliases": [
            "house_with_garden"
        ],
        "tags": []
    }, {
        "emoji": "🏫",
        "description": "school",
        "aliases": [
            "school"
        ],
        "tags": []
    }, {
        "emoji": "🏢",
        "description": "office building",
        "aliases": [
            "office"
        ],
        "tags": []
    }, {
        "emoji": "🏣",
        "description": "japanese post office",
        "aliases": [
            "post_office"
        ],
        "tags": []
    }, {
        "emoji": "🏥",
        "description": "hospital",
        "aliases": [
            "hospital"
        ],
        "tags": []
    }, {
        "emoji": "🏦",
        "description": "bank",
        "aliases": [
            "bank"
        ],
        "tags": []
    }, {
        "emoji": "🏪",
        "description": "convenience store",
        "aliases": [
            "convenience_store"
        ],
        "tags": []
    }, {
        "emoji": "🏩",
        "description": "love hotel",
        "aliases": [
            "love_hotel"
        ],
        "tags": []
    }, {
        "emoji": "🏨",
        "description": "hotel",
        "aliases": [
            "hotel"
        ],
        "tags": []
    }, {
        "emoji": "💒",
        "description": "wedding",
        "aliases": [
            "wedding"
        ],
        "tags": [
            "marriage"
        ]
    }, {
        "emoji": "⛪",
        "description": "church",
        "aliases": [
            "church"
        ],
        "tags": []
    }, {
        "emoji": "🏬",
        "description": "department store",
        "aliases": [
            "department_store"
        ],
        "tags": []
    }, {
        "emoji": "🏤",
        "description": "european post office",
        "aliases": [
            "european_post_office"
        ],
        "tags": []
    }, {
        "emoji": "🌇",
        "description": "sunset over buildings",
        "aliases": [
            "city_sunrise"
        ],
        "tags": []
    }, {
        "emoji": "🌆",
        "description": "cityscape at dusk",
        "aliases": [
            "city_sunset"
        ],
        "tags": []
    }, {
        "emoji": "🏯",
        "description": "japanese castle",
        "aliases": [
            "japanese_castle"
        ],
        "tags": []
    }, {
        "emoji": "🏰",
        "description": "european castle",
        "aliases": [
            "european_castle"
        ],
        "tags": []
    }, {
        "emoji": "⛺",
        "description": "tent",
        "aliases": [
            "tent"
        ],
        "tags": [
            "camping"
        ]
    }, {
        "emoji": "🏭",
        "description": "factory",
        "aliases": [
            "factory"
        ],
        "tags": []
    }, {
        "emoji": "🗼",
        "description": "tokyo tower",
        "aliases": [
            "tokyo_tower"
        ],
        "tags": []
    }, {
        "emoji": "🗾",
        "description": "silhouette of japan",
        "aliases": [
            "japan"
        ],
        "tags": []
    }, {
        "emoji": "🗻",
        "description": "mount fuji",
        "aliases": [
            "mount_fuji"
        ],
        "tags": []
    }, {
        "emoji": "🌄",
        "description": "sunrise over mountains",
        "aliases": [
            "sunrise_over_mountains"
        ],
        "tags": []
    }, {
        "emoji": "🌅",
        "description": "sunrise",
        "aliases": [
            "sunrise"
        ],
        "tags": []
    }, {
        "emoji": "🌃",
        "description": "night with stars",
        "aliases": [
            "night_with_stars"
        ],
        "tags": []
    }, {
        "emoji": "🗽",
        "description": "statue of liberty",
        "aliases": [
            "statue_of_liberty"
        ],
        "tags": []
    }, {
        "emoji": "🌉",
        "description": "bridge at night",
        "aliases": [
            "bridge_at_night"
        ],
        "tags": []
    }, {
        "emoji": "🎠",
        "description": "carousel horse",
        "aliases": [
            "carousel_horse"
        ],
        "tags": []
    }, {
        "emoji": "🎡",
        "description": "ferris wheel",
        "aliases": [
            "ferris_wheel"
        ],
        "tags": []
    }, {
        "emoji": "⛲",
        "description": "fountain",
        "aliases": [
            "fountain"
        ],
        "tags": []
    }, {
        "emoji": "🎢",
        "description": "roller coaster",
        "aliases": [
            "roller_coaster"
        ],
        "tags": []
    }, {
        "emoji": "🚢",
        "description": "ship",
        "aliases": [
            "ship"
        ],
        "tags": []
    }, {
        "emoji": "⛵",
        "description": "sailboat",
        "aliases": [
            "boat", "sailboat"
        ],
        "tags": []
    }, {
        "emoji": "🚤",
        "description": "speedboat",
        "aliases": [
            "speedboat"
        ],
        "tags": [
            "ship"
        ]
    }, {
        "emoji": "🚣",
        "description": "rowboat",
        "aliases": [
            "rowboat"
        ],
        "tags": []
    }, {
        "emoji": "⚓",
        "description": "anchor",
        "aliases": [
            "anchor"
        ],
        "tags": [
            "ship"
        ]
    }, {
        "emoji": "🚀",
        "description": "rocket",
        "aliases": [
            "rocket"
        ],
        "tags": [
            "ship", "launch"
        ]
    }, {
        "emoji": "✈️",
        "description": "airplane",
        "aliases": [
            "airplane"
        ],
        "tags": [
            "flight"
        ]
    }, {
        "emoji": "💺",
        "description": "seat",
        "aliases": [
            "seat"
        ],
        "tags": []
    }, {
        "emoji": "🚁",
        "description": "helicopter",
        "aliases": [
            "helicopter"
        ],
        "tags": []
    }, {
        "emoji": "🚂",
        "description": "steam locomotive",
        "aliases": [
            "steam_locomotive"
        ],
        "tags": [
            "train"
        ]
    }, {
        "emoji": "🚊",
        "description": "tram",
        "aliases": [
            "tram"
        ],
        "tags": []
    }, {
        "emoji": "🚉",
        "description": "station",
        "aliases": [
            "station"
        ],
        "tags": []
    }, {
        "emoji": "🚞",
        "description": "mountain railway",
        "aliases": [
            "mountain_railway"
        ],
        "tags": []
    }, {
        "emoji": "🚆",
        "description": "train",
        "aliases": [
            "train2"
        ],
        "tags": []
    }, {
        "emoji": "🚄",
        "description": "high-speed train",
        "aliases": [
            "bullettrain_side"
        ],
        "tags": [
            "train"
        ]
    }, {
        "emoji": "🚅",
        "description": "high-speed train with bullet nose",
        "aliases": [
            "bullettrain_front"
        ],
        "tags": [
            "train"
        ]
    }, {
        "emoji": "🚈",
        "description": "light rail",
        "aliases": [
            "light_rail"
        ],
        "tags": []
    }, {
        "emoji": "🚇",
        "description": "metro",
        "aliases": [
            "metro"
        ],
        "tags": []
    }, {
        "emoji": "🚝",
        "description": "monorail",
        "aliases": [
            "monorail"
        ],
        "tags": []
    }, {
        "emoji": "🚋",
        "description": "tram car",
        "aliases": [
            "train"
        ],
        "tags": []
    }, {
        "emoji": "🚃",
        "description": "railway car",
        "aliases": [
            "railway_car"
        ],
        "tags": []
    }, {
        "emoji": "🚎",
        "description": "trolleybus",
        "aliases": [
            "trolleybus"
        ],
        "tags": []
    }, {
        "emoji": "🚌",
        "description": "bus",
        "aliases": [
            "bus"
        ],
        "tags": []
    }, {
        "emoji": "🚍",
        "description": "oncoming bus",
        "aliases": [
            "oncoming_bus"
        ],
        "tags": []
    }, {
        "emoji": "🚙",
        "description": "recreational vehicle",
        "aliases": [
            "blue_car"
        ],
        "tags": []
    }, {
        "emoji": "🚘",
        "description": "oncoming automobile",
        "aliases": [
            "oncoming_automobile"
        ],
        "tags": []
    }, {
        "emoji": "🚗",
        "description": "automobile",
        "aliases": [
            "car", "red_car"
        ],
        "tags": []
    }, {
        "emoji": "🚕",
        "description": "taxi",
        "aliases": [
            "taxi"
        ],
        "tags": []
    }, {
        "emoji": "🚖",
        "description": "oncoming taxi",
        "aliases": [
            "oncoming_taxi"
        ],
        "tags": []
    }, {
        "emoji": "🚛",
        "description": "articulated lorry",
        "aliases": [
            "articulated_lorry"
        ],
        "tags": []
    }, {
        "emoji": "🚚",
        "description": "delivery truck",
        "aliases": [
            "truck"
        ],
        "tags": []
    }, {
        "emoji": "🚨",
        "description": "police cars revolving light",
        "aliases": [
            "rotating_light"
        ],
        "tags": [
            "911", "emergency"
        ]
    }, {
        "emoji": "🚓",
        "description": "police car",
        "aliases": [
            "police_car"
        ],
        "tags": []
    }, {
        "emoji": "🚔",
        "description": "oncoming police car",
        "aliases": [
            "oncoming_police_car"
        ],
        "tags": []
    }, {
        "emoji": "🚒",
        "description": "fire engine",
        "aliases": [
            "fire_engine"
        ],
        "tags": []
    }, {
        "emoji": "🚑",
        "description": "ambulance",
        "aliases": [
            "ambulance"
        ],
        "tags": []
    }, {
        "emoji": "🚐",
        "description": "minibus",
        "aliases": [
            "minibus"
        ],
        "tags": []
    }, {
        "emoji": "🚲",
        "description": "bicycle",
        "aliases": [
            "bike"
        ],
        "tags": [
            "bicycle"
        ]
    }, {
        "emoji": "🚡",
        "description": "aerial tramway",
        "aliases": [
            "aerial_tramway"
        ],
        "tags": []
    }, {
        "emoji": "🚟",
        "description": "suspension railway",
        "aliases": [
            "suspension_railway"
        ],
        "tags": []
    }, {
        "emoji": "🚠",
        "description": "mountain cableway",
        "aliases": [
            "mountain_cableway"
        ],
        "tags": []
    }, {
        "emoji": "🚜",
        "description": "tractor",
        "aliases": [
            "tractor"
        ],
        "tags": []
    }, {
        "emoji": "💈",
        "description": "barber pole",
        "aliases": [
            "barber"
        ],
        "tags": []
    }, {
        "emoji": "🚏",
        "description": "bus stop",
        "aliases": [
            "busstop"
        ],
        "tags": []
    }, {
        "emoji": "🎫",
        "description": "ticket",
        "aliases": [
            "ticket"
        ],
        "tags": []
    }, {
        "emoji": "🚦",
        "description": "vertical traffic light",
        "aliases": [
            "vertical_traffic_light"
        ],
        "tags": [
            "semaphore"
        ]
    }, {
        "emoji": "🚥",
        "description": "horizontal traffic light",
        "aliases": [
            "traffic_light"
        ],
        "tags": []
    }, {
        "emoji": "⚠️",
        "description": "warning sign",
        "aliases": [
            "warning"
        ],
        "tags": [
            "wip"
        ]
    }, {
        "emoji": "🚧",
        "description": "construction sign",
        "aliases": [
            "construction"
        ],
        "tags": [
            "wip"
        ]
    }, {
        "emoji": "🔰",
        "description": "japanese symbol for beginner",
        "aliases": [
            "beginner"
        ],
        "tags": []
    }, {
        "emoji": "⛽",
        "description": "fuel pump",
        "aliases": [
            "fuelpump"
        ],
        "tags": []
    }, {
        "emoji": "🏮",
        "description": "izakaya lantern",
        "aliases": [
            "izakaya_lantern", "lantern"
        ],
        "tags": []
    }, {
        "emoji": "🎰",
        "description": "slot machine",
        "aliases": [
            "slot_machine"
        ],
        "tags": []
    }, {
        "emoji": "♨️",
        "description": "hot springs",
        "aliases": [
            "hotsprings"
        ],
        "tags": []
    }, {
        "emoji": "🗿",
        "description": "moyai",
        "aliases": [
            "moyai"
        ],
        "tags": [
            "stone"
        ]
    }, {
        "emoji": "🎪",
        "description": "circus tent",
        "aliases": [
            "circus_tent"
        ],
        "tags": []
    }, {
        "emoji": "🎭",
        "description": "performing arts",
        "aliases": [
            "performing_arts"
        ],
        "tags": [
            "theater", "drama"
        ]
    }, {
        "emoji": "📍",
        "description": "round pushpin",
        "aliases": [
            "round_pushpin"
        ],
        "tags": [
            "location"
        ]
    }, {
        "emoji": "🚩",
        "description": "triangular flag on post",
        "aliases": [
            "triangular_flag_on_post"
        ],
        "tags": []
    }, {
        "emoji": "🇯🇵",
        "description": "regional indicator symbol letter j + regional indicator symbol letter p",
        "aliases": [
            "jp"
        ],
        "tags": [
            "japan"
        ]
    }, {
        "emoji": "🇰🇷",
        "description": "regional indicator symbol letter k + regional indicator symbol letter r",
        "aliases": [
            "kr"
        ],
        "tags": [
            "korea"
        ]
    }, {
        "emoji": "🇩🇪",
        "description": "regional indicator symbol letter d + regional indicator symbol letter e",
        "aliases": [
            "de"
        ],
        "tags": [
            "flag", "germany"
        ]
    }, {
        "emoji": "🇨🇳",
        "description": "regional indicator symbol letter c + regional indicator symbol letter n",
        "aliases": [
            "cn"
        ],
        "tags": [
            "china"
        ]
    }, {
        "emoji": "🇺🇸",
        "description": "regional indicator symbol letter u + regional indicator symbol letter s",
        "aliases": [
            "us"
        ],
        "tags": [
            "flag", "united", "america"
        ]
    }, {
        "emoji": "🇫🇷",
        "description": "regional indicator symbol letter f + regional indicator symbol letter r",
        "aliases": [
            "fr"
        ],
        "tags": [
            "france", "french"
        ]
    }, {
        "emoji": "🇪🇸",
        "description": "regional indicator symbol letter e + regional indicator symbol letter s",
        "aliases": [
            "es"
        ],
        "tags": [
            "spain"
        ]
    }, {
        "emoji": "🇮🇹",
        "description": "regional indicator symbol letter i + regional indicator symbol letter t",
        "aliases": [
            "it"
        ],
        "tags": [
            "italy"
        ]
    }, {
        "emoji": "🇷🇺",
        "description": "regional indicator symbol letter r + regional indicator symbol letter u",
        "aliases": [
            "ru"
        ],
        "tags": [
            "russia"
        ]
    }, {
        "emoji": "🇬🇧",
        "description": "regional indicator symbol letter g + regional indicator symbol letter b",
        "aliases": [
            "gb", "uk"
        ],
        "tags": [
            "flag", "british"
        ]
    }, {
        "emoji": "1️⃣",
        "description": "digit one + combining enclosing keycap",
        "aliases": [
            "one"
        ],
        "tags": []
    }, {
        "emoji": "2️⃣",
        "description": "digit two + combining enclosing keycap",
        "aliases": [
            "two"
        ],
        "tags": []
    }, {
        "emoji": "3️⃣",
        "description": "digit three + combining enclosing keycap",
        "aliases": [
            "three"
        ],
        "tags": []
    }, {
        "emoji": "4️⃣",
        "description": "digit four + combining enclosing keycap",
        "aliases": [
            "four"
        ],
        "tags": []
    }, {
        "emoji": "5️⃣",
        "description": "digit five + combining enclosing keycap",
        "aliases": [
            "five"
        ],
        "tags": []
    }, {
        "emoji": "6️⃣",
        "description": "digit six + combining enclosing keycap",
        "aliases": [
            "six"
        ],
        "tags": []
    }, {
        "emoji": "7️⃣",
        "description": "digit seven + combining enclosing keycap",
        "aliases": [
            "seven"
        ],
        "tags": []
    }, {
        "emoji": "8️⃣",
        "description": "digit eight + combining enclosing keycap",
        "aliases": [
            "eight"
        ],
        "tags": []
    }, {
        "emoji": "9️⃣",
        "description": "digit nine + combining enclosing keycap",
        "aliases": [
            "nine"
        ],
        "tags": []
    }, {
        "emoji": "0️⃣",
        "description": "digit zero + combining enclosing keycap",
        "aliases": [
            "zero"
        ],
        "tags": []
    }, {
        "emoji": "🔟",
        "description": "keycap ten",
        "aliases": [
            "keycap_ten"
        ],
        "tags": []
    }, {
        "emoji": "🔢",
        "description": "input symbol for numbers",
        "aliases": [
            "1234"
        ],
        "tags": [
            "numbers"
        ]
    }, {
        "emoji": "#️⃣",
        "description": "number sign + combining enclosing keycap",
        "aliases": [
            "hash"
        ],
        "tags": [
            "number"
        ]
    }, {
        "emoji": "🔣",
        "description": "input symbol for symbols",
        "aliases": [
            "symbols"
        ],
        "tags": []
    }, {
        "emoji": "⬆️",
        "description": "upwards black arrow",
        "aliases": [
            "arrow_up"
        ],
        "tags": []
    }, {
        "emoji": "⬇️",
        "description": "downwards black arrow",
        "aliases": [
            "arrow_down"
        ],
        "tags": []
    }, {
        "emoji": "⬅️",
        "description": "leftwards black arrow",
        "aliases": [
            "arrow_left"
        ],
        "tags": []
    }, {
        "emoji": "➡️",
        "description": "black rightwards arrow",
        "aliases": [
            "arrow_right"
        ],
        "tags": []
    }, {
        "emoji": "🔠",
        "description": "input symbol for latin capital letters",
        "aliases": [
            "capital_abcd"
        ],
        "tags": [
            "letters"
        ]
    }, {
        "emoji": "🔡",
        "description": "input symbol for latin small letters",
        "aliases": [
            "abcd"
        ],
        "tags": []
    }, {
        "emoji": "🔤",
        "description": "input symbol for latin letters",
        "aliases": [
            "abc"
        ],
        "tags": [
            "alphabet"
        ]
    }, {
        "emoji": "↗️",
        "description": "north east arrow",
        "aliases": [
            "arrow_upper_right"
        ],
        "tags": []
    }, {
        "emoji": "↖️",
        "description": "north west arrow",
        "aliases": [
            "arrow_upper_left"
        ],
        "tags": []
    }, {
        "emoji": "↘️",
        "description": "south east arrow",
        "aliases": [
            "arrow_lower_right"
        ],
        "tags": []
    }, {
        "emoji": "↙️",
        "description": "south west arrow",
        "aliases": [
            "arrow_lower_left"
        ],
        "tags": []
    }, {
        "emoji": "↔️",
        "description": "left right arrow",
        "aliases": [
            "left_right_arrow"
        ],
        "tags": []
    }, {
        "emoji": "↕️",
        "description": "up down arrow",
        "aliases": [
            "arrow_up_down"
        ],
        "tags": []
    }, {
        "emoji": "🔄",
        "description": "anticlockwise downwards and upwards open circle arrows",
        "aliases": [
            "arrows_counterclockwise"
        ],
        "tags": [
            "sync"
        ]
    }, {
        "emoji": "◀️",
        "description": "black left-pointing triangle",
        "aliases": [
            "arrow_backward"
        ],
        "tags": []
    }, {
        "emoji": "▶️",
        "description": "black right-pointing triangle",
        "aliases": [
            "arrow_forward"
        ],
        "tags": []
    }, {
        "emoji": "🔼",
        "description": "up-pointing small red triangle",
        "aliases": [
            "arrow_up_small"
        ],
        "tags": []
    }, {
        "emoji": "🔽",
        "description": "down-pointing small red triangle",
        "aliases": [
            "arrow_down_small"
        ],
        "tags": []
    }, {
        "emoji": "↩️",
        "description": "leftwards arrow with hook",
        "aliases": [
            "leftwards_arrow_with_hook"
        ],
        "tags": [
            "return"
        ]
    }, {
        "emoji": "↪️",
        "description": "rightwards arrow with hook",
        "aliases": [
            "arrow_right_hook"
        ],
        "tags": []
    }, {
        "emoji": "ℹ️",
        "description": "information source",
        "aliases": [
            "information_source"
        ],
        "tags": []
    }, {
        "emoji": "⏪",
        "description": "black left-pointing double triangle",
        "aliases": [
            "rewind"
        ],
        "tags": []
    }, {
        "emoji": "⏩",
        "description": "black right-pointing double triangle",
        "aliases": [
            "fast_forward"
        ],
        "tags": []
    }, {
        "emoji": "⏫",
        "description": "black up-pointing double triangle",
        "aliases": [
            "arrow_double_up"
        ],
        "tags": []
    }, {
        "emoji": "⏬",
        "description": "black down-pointing double triangle",
        "aliases": [
            "arrow_double_down"
        ],
        "tags": []
    }, {
        "emoji": "⤵️",
        "description": "arrow pointing rightwards then curving downwards",
        "aliases": [
            "arrow_heading_down"
        ],
        "tags": []
    }, {
        "emoji": "⤴️",
        "description": "arrow pointing rightwards then curving upwards",
        "aliases": [
            "arrow_heading_up"
        ],
        "tags": []
    }, {
        "emoji": "🆗",
        "description": "squared ok",
        "aliases": [
            "ok"
        ],
        "tags": [
            "yes"
        ]
    }, {
        "emoji": "🔀",
        "description": "twisted rightwards arrows",
        "aliases": [
            "twisted_rightwards_arrows"
        ],
        "tags": [
            "shuffle"
        ]
    }, {
        "emoji": "🔁",
        "description": "clockwise rightwards and leftwards open circle arrows",
        "aliases": [
            "repeat"
        ],
        "tags": [
            "loop"
        ]
    }, {
        "emoji": "🔂",
        "description": "clockwise rightwards and leftwards open circle arrows with circled one overlay",
        "aliases": [
            "repeat_one"
        ],
        "tags": []
    }, {
        "emoji": "🆕",
        "description": "squared new",
        "aliases": [
            "new"
        ],
        "tags": [
            "fresh"
        ]
    }, {
        "emoji": "🆙",
        "description": "squared up with exclamation mark",
        "aliases": [
            "up"
        ],
        "tags": []
    }, {
        "emoji": "🆒",
        "description": "squared cool",
        "aliases": [
            "cool"
        ],
        "tags": []
    }, {
        "emoji": "🆓",
        "description": "squared free",
        "aliases": [
            "free"
        ],
        "tags": []
    }, {
        "emoji": "🆖",
        "description": "squared ng",
        "aliases": [
            "ng"
        ],
        "tags": []
    }, {
        "emoji": "📶",
        "description": "antenna with bars",
        "aliases": [
            "signal_strength"
        ],
        "tags": [
            "wifi"
        ]
    }, {
        "emoji": "🎦",
        "description": "cinema",
        "aliases": [
            "cinema"
        ],
        "tags": [
            "film", "movie"
        ]
    }, {
        "emoji": "🈁",
        "description": "squared katakana koko",
        "aliases": [
            "koko"
        ],
        "tags": []
    }, {
        "emoji": "🈯",
        "description": "squared cjk unified ideograph-6307",
        "aliases": [
            "u6307"
        ],
        "tags": []
    }, {
        "emoji": "🈳",
        "description": "squared cjk unified ideograph-7a7a",
        "aliases": [
            "u7a7a"
        ],
        "tags": []
    }, {
        "emoji": "🈵",
        "description": "squared cjk unified ideograph-6e80",
        "aliases": [
            "u6e80"
        ],
        "tags": []
    }, {
        "emoji": "🈴",
        "description": "squared cjk unified ideograph-5408",
        "aliases": [
            "u5408"
        ],
        "tags": []
    }, {
        "emoji": "🈲",
        "description": "squared cjk unified ideograph-7981",
        "aliases": [
            "u7981"
        ],
        "tags": []
    }, {
        "emoji": "🉐",
        "description": "circled ideograph advantage",
        "aliases": [
            "ideograph_advantage"
        ],
        "tags": []
    }, {
        "emoji": "🈹",
        "description": "squared cjk unified ideograph-5272",
        "aliases": [
            "u5272"
        ],
        "tags": []
    }, {
        "emoji": "🈺",
        "description": "squared cjk unified ideograph-55b6",
        "aliases": [
            "u55b6"
        ],
        "tags": []
    }, {
        "emoji": "🈶",
        "description": "squared cjk unified ideograph-6709",
        "aliases": [
            "u6709"
        ],
        "tags": []
    }, {
        "emoji": "🈚",
        "description": "squared cjk unified ideograph-7121",
        "aliases": [
            "u7121"
        ],
        "tags": []
    }, {
        "emoji": "🚻",
        "description": "restroom",
        "aliases": [
            "restroom"
        ],
        "tags": [
            "toilet"
        ]
    }, {
        "emoji": "🚹",
        "description": "mens symbol",
        "aliases": [
            "mens"
        ],
        "tags": []
    }, {
        "emoji": "🚺",
        "description": "womens symbol",
        "aliases": [
            "womens"
        ],
        "tags": []
    }, {
        "emoji": "🚼",
        "description": "baby symbol",
        "aliases": [
            "baby_symbol"
        ],
        "tags": []
    }, {
        "emoji": "🚾",
        "description": "water closet",
        "aliases": [
            "wc"
        ],
        "tags": [
            "toilet", "restroom"
        ]
    }, {
        "emoji": "🚰",
        "description": "potable water symbol",
        "aliases": [
            "potable_water"
        ],
        "tags": []
    }, {
        "emoji": "🚮",
        "description": "put litter in its place symbol",
        "aliases": [
            "put_litter_in_its_place"
        ],
        "tags": []
    }, {
        "emoji": "🅿️",
        "description": "negative squared latin capital letter p",
        "aliases": [
            "parking"
        ],
        "tags": []
    }, {
        "emoji": "♿",
        "description": "wheelchair symbol",
        "aliases": [
            "wheelchair"
        ],
        "tags": [
            "accessibility"
        ]
    }, {
        "emoji": "🚭",
        "description": "no smoking symbol",
        "aliases": [
            "no_smoking"
        ],
        "tags": []
    }, {
        "emoji": "🈷️",
        "description": "squared cjk unified ideograph-6708",
        "aliases": [
            "u6708"
        ],
        "tags": []
    }, {
        "emoji": "🈸",
        "description": "squared cjk unified ideograph-7533",
        "aliases": [
            "u7533"
        ],
        "tags": []
    }, {
        "emoji": "🈂️",
        "description": "squared katakana sa",
        "aliases": [
            "sa"
        ],
        "tags": []
    }, {
        "emoji": "Ⓜ️",
        "description": "circled latin capital letter m",
        "aliases": [
            "m"
        ],
        "tags": []
    }, {
        "emoji": "🛂",
        "description": "passport control",
        "aliases": [
            "passport_control"
        ],
        "tags": []
    }, {
        "emoji": "🛄",
        "description": "baggage claim",
        "aliases": [
            "baggage_claim"
        ],
        "tags": [
            "airport"
        ]
    }, {
        "emoji": "🛅",
        "description": "left luggage",
        "aliases": [
            "left_luggage"
        ],
        "tags": []
    }, {
        "emoji": "🛃",
        "description": "customs",
        "aliases": [
            "customs"
        ],
        "tags": []
    }, {
        "emoji": "🉑",
        "description": "circled ideograph accept",
        "aliases": [
            "accept"
        ],
        "tags": []
    }, {
        "emoji": "㊙️",
        "description": "circled ideograph secret",
        "aliases": [
            "secret"
        ],
        "tags": []
    }, {
        "emoji": "㊗️",
        "description": "circled ideograph congratulation",
        "aliases": [
            "congratulations"
        ],
        "tags": []
    }, {
        "emoji": "🆑",
        "description": "squared cl",
        "aliases": [
            "cl"
        ],
        "tags": []
    }, {
        "emoji": "🆘",
        "description": "squared sos",
        "aliases": [
            "sos"
        ],
        "tags": [
            "help", "emergency"
        ]
    }, {
        "emoji": "🆔",
        "description": "squared id",
        "aliases": [
            "id"
        ],
        "tags": []
    }, {
        "emoji": "🚫",
        "description": "no entry sign",
        "aliases": [
            "no_entry_sign"
        ],
        "tags": [
            "block", "forbidden"
        ]
    }, {
        "emoji": "🔞",
        "description": "no one under eighteen symbol",
        "aliases": [
            "underage"
        ],
        "tags": []
    }, {
        "emoji": "📵",
        "description": "no mobile phones",
        "aliases": [
            "no_mobile_phones"
        ],
        "tags": []
    }, {
        "emoji": "🚯",
        "description": "do not litter symbol",
        "aliases": [
            "do_not_litter"
        ],
        "tags": []
    }, {
        "emoji": "🚱",
        "description": "non-potable water symbol",
        "aliases": [
            "non-potable_water"
        ],
        "tags": []
    }, {
        "emoji": "🚳",
        "description": "no bicycles",
        "aliases": [
            "no_bicycles"
        ],
        "tags": []
    }, {
        "emoji": "🚷",
        "description": "no pedestrians",
        "aliases": [
            "no_pedestrians"
        ],
        "tags": []
    }, {
        "emoji": "🚸",
        "description": "children crossing",
        "aliases": [
            "children_crossing"
        ],
        "tags": []
    }, {
        "emoji": "⛔",
        "description": "no entry",
        "aliases": [
            "no_entry"
        ],
        "tags": [
            "limit"
        ]
    }, {
        "emoji": "✳️",
        "description": "eight spoked asterisk",
        "aliases": [
            "eight_spoked_asterisk"
        ],
        "tags": []
    }, {
        "emoji": "❇️",
        "description": "sparkle",
        "aliases": [
            "sparkle"
        ],
        "tags": []
    }, {
        "emoji": "❎",
        "description": "negative squared cross mark",
        "aliases": [
            "negative_squared_cross_mark"
        ],
        "tags": []
    }, {
        "emoji": "✅",
        "description": "white heavy check mark",
        "aliases": [
            "white_check_mark"
        ],
        "tags": []
    }, {
        "emoji": "✴️",
        "description": "eight pointed black star",
        "aliases": [
            "eight_pointed_black_star"
        ],
        "tags": []
    }, {
        "emoji": "💟",
        "description": "heart decoration",
        "aliases": [
            "heart_decoration"
        ],
        "tags": []
    }, {
        "emoji": "🆚",
        "description": "squared vs",
        "aliases": [
            "vs"
        ],
        "tags": []
    }, {
        "emoji": "📳",
        "description": "vibration mode",
        "aliases": [
            "vibration_mode"
        ],
        "tags": []
    }, {
        "emoji": "📴",
        "description": "mobile phone off",
        "aliases": [
            "mobile_phone_off"
        ],
        "tags": [
            "mute", "off"
        ]
    }, {
        "emoji": "🅰️",
        "description": "negative squared latin capital letter a",
        "aliases": [
            "a"
        ],
        "tags": []
    }, {
        "emoji": "🅱️",
        "description": "negative squared latin capital letter b",
        "aliases": [
            "b"
        ],
        "tags": []
    }, {
        "emoji": "🆎",
        "description": "negative squared ab",
        "aliases": [
            "ab"
        ],
        "tags": []
    }, {
        "emoji": "🅾️",
        "description": "negative squared latin capital letter o",
        "aliases": [
            "o2"
        ],
        "tags": []
    }, {
        "emoji": "💠",
        "description": "diamond shape with a dot inside",
        "aliases": [
            "diamond_shape_with_a_dot_inside"
        ],
        "tags": []
    }, {
        "emoji": "➿",
        "description": "double curly loop",
        "aliases": [
            "loop"
        ],
        "tags": []
    }, {
        "emoji": "♻️",
        "description": "black universal recycling symbol",
        "aliases": [
            "recycle"
        ],
        "tags": [
            "environment", "green"
        ]
    }, {
        "emoji": "♈",
        "description": "aries",
        "aliases": [
            "aries"
        ],
        "tags": []
    }, {
        "emoji": "♉",
        "description": "taurus",
        "aliases": [
            "taurus"
        ],
        "tags": []
    }, {
        "emoji": "♊",
        "description": "gemini",
        "aliases": [
            "gemini"
        ],
        "tags": []
    }, {
        "emoji": "♋",
        "description": "cancer",
        "aliases": [
            "cancer"
        ],
        "tags": []
    }, {
        "emoji": "♌",
        "description": "leo",
        "aliases": [
            "leo"
        ],
        "tags": []
    }, {
        "emoji": "♍",
        "description": "virgo",
        "aliases": [
            "virgo"
        ],
        "tags": []
    }, {
        "emoji": "♎",
        "description": "libra",
        "aliases": [
            "libra"
        ],
        "tags": []
    }, {
        "emoji": "♏",
        "description": "scorpius",
        "aliases": [
            "scorpius"
        ],
        "tags": []
    }, {
        "emoji": "♐",
        "description": "sagittarius",
        "aliases": [
            "sagittarius"
        ],
        "tags": []
    }, {
        "emoji": "♑",
        "description": "capricorn",
        "aliases": [
            "capricorn"
        ],
        "tags": []
    }, {
        "emoji": "♒",
        "description": "aquarius",
        "aliases": [
            "aquarius"
        ],
        "tags": []
    }, {
        "emoji": "♓",
        "description": "pisces",
        "aliases": [
            "pisces"
        ],
        "tags": []
    }, {
        "emoji": "⛎",
        "description": "ophiuchus",
        "aliases": [
            "ophiuchus"
        ],
        "tags": []
    }, {
        "emoji": "🔯",
        "description": "six pointed star with middle dot",
        "aliases": [
            "six_pointed_star"
        ],
        "tags": []
    }, {
        "emoji": "🏧",
        "description": "automated teller machine",
        "aliases": [
            "atm"
        ],
        "tags": []
    }, {
        "emoji": "💹",
        "description": "chart with upwards trend and yen sign",
        "aliases": [
            "chart"
        ],
        "tags": []
    }, {
        "emoji": "💲",
        "description": "heavy dollar sign",
        "aliases": [
            "heavy_dollar_sign"
        ],
        "tags": []
    }, {
        "emoji": "💱",
        "description": "currency exchange",
        "aliases": [
            "currency_exchange"
        ],
        "tags": []
    }, {
        "emoji": "©️",
        "description": "copyright sign",
        "aliases": [
            "copyright"
        ],
        "tags": []
    }, {
        "emoji": "®️",
        "description": "registered sign",
        "aliases": [
            "registered"
        ],
        "tags": []
    }, {
        "emoji": "™️",
        "description": "trade mark sign",
        "aliases": [
            "tm"
        ],
        "tags": [
            "trademark"
        ]
    }, {
        "emoji": "❌",
        "description": "cross mark",
        "aliases": [
            "x"
        ],
        "tags": []
    }, {
        "emoji": "‼️",
        "description": "double exclamation mark",
        "aliases": [
            "bangbang"
        ],
        "tags": []
    }, {
        "emoji": "⁉️",
        "description": "exclamation question mark",
        "aliases": [
            "interrobang"
        ],
        "tags": []
    }, {
        "emoji": "❗",
        "description": "heavy exclamation mark symbol",
        "aliases": [
            "exclamation", "heavy_exclamation_mark"
        ],
        "tags": [
            "bang"
        ]
    }, {
        "emoji": "❓",
        "description": "black question mark ornament",
        "aliases": [
            "question"
        ],
        "tags": [
            "confused"
        ]
    }, {
        "emoji": "❕",
        "description": "white exclamation mark ornament",
        "aliases": [
            "grey_exclamation"
        ],
        "tags": []
    }, {
        "emoji": "❔",
        "description": "white question mark ornament",
        "aliases": [
            "grey_question"
        ],
        "tags": []
    }, {
        "emoji": "⭕",
        "description": "heavy large circle",
        "aliases": [
            "o"
        ],
        "tags": []
    }, {
        "emoji": "🔝",
        "description": "top with upwards arrow above",
        "aliases": [
            "top"
        ],
        "tags": []
    }, {
        "emoji": "🔚",
        "description": "end with leftwards arrow above",
        "aliases": [
            "end"
        ],
        "tags": []
    }, {
        "emoji": "🔙",
        "description": "back with leftwards arrow above",
        "aliases": [
            "back"
        ],
        "tags": []
    }, {
        "emoji": "🔛",
        "description": "on with exclamation mark with left right arrow above",
        "aliases": [
            "on"
        ],
        "tags": []
    }, {
        "emoji": "🔜",
        "description": "soon with rightwards arrow above",
        "aliases": [
            "soon"
        ],
        "tags": []
    }, {
        "emoji": "🔃",
        "description": "clockwise downwards and upwards open circle arrows",
        "aliases": [
            "arrows_clockwise"
        ],
        "tags": []
    }, {
        "emoji": "🕛",
        "description": "clock face twelve oclock",
        "aliases": [
            "clock12"
        ],
        "tags": []
    }, {
        "emoji": "🕧",
        "description": "clock face twelve-thirty",
        "aliases": [
            "clock1230"
        ],
        "tags": []
    }, {
        "emoji": "🕐",
        "description": "clock face one oclock",
        "aliases": [
            "clock1"
        ],
        "tags": []
    }, {
        "emoji": "🕜",
        "description": "clock face one-thirty",
        "aliases": [
            "clock130"
        ],
        "tags": []
    }, {
        "emoji": "🕑",
        "description": "clock face two oclock",
        "aliases": [
            "clock2"
        ],
        "tags": []
    }, {
        "emoji": "🕝",
        "description": "clock face two-thirty",
        "aliases": [
            "clock230"
        ],
        "tags": []
    }, {
        "emoji": "🕒",
        "description": "clock face three oclock",
        "aliases": [
            "clock3"
        ],
        "tags": []
    }, {
        "emoji": "🕞",
        "description": "clock face three-thirty",
        "aliases": [
            "clock330"
        ],
        "tags": []
    }, {
        "emoji": "🕓",
        "description": "clock face four oclock",
        "aliases": [
            "clock4"
        ],
        "tags": []
    }, {
        "emoji": "🕟",
        "description": "clock face four-thirty",
        "aliases": [
            "clock430"
        ],
        "tags": []
    }, {
        "emoji": "🕔",
        "description": "clock face five oclock",
        "aliases": [
            "clock5"
        ],
        "tags": []
    }, {
        "emoji": "🕠",
        "description": "clock face five-thirty",
        "aliases": [
            "clock530"
        ],
        "tags": []
    }, {
        "emoji": "🕕",
        "description": "clock face six oclock",
        "aliases": [
            "clock6"
        ],
        "tags": []
    }, {
        "emoji": "🕖",
        "description": "clock face seven oclock",
        "aliases": [
            "clock7"
        ],
        "tags": []
    }, {
        "emoji": "🕗",
        "description": "clock face eight oclock",
        "aliases": [
            "clock8"
        ],
        "tags": []
    }, {
        "emoji": "🕘",
        "description": "clock face nine oclock",
        "aliases": [
            "clock9"
        ],
        "tags": []
    }, {
        "emoji": "🕙",
        "description": "clock face ten oclock",
        "aliases": [
            "clock10"
        ],
        "tags": []
    }, {
        "emoji": "🕚",
        "description": "clock face eleven oclock",
        "aliases": [
            "clock11"
        ],
        "tags": []
    }, {
        "emoji": "🕡",
        "description": "clock face six-thirty",
        "aliases": [
            "clock630"
        ],
        "tags": []
    }, {
        "emoji": "🕢",
        "description": "clock face seven-thirty",
        "aliases": [
            "clock730"
        ],
        "tags": []
    }, {
        "emoji": "🕣",
        "description": "clock face eight-thirty",
        "aliases": [
            "clock830"
        ],
        "tags": []
    }, {
        "emoji": "🕤",
        "description": "clock face nine-thirty",
        "aliases": [
            "clock930"
        ],
        "tags": []
    }, {
        "emoji": "🕥",
        "description": "clock face ten-thirty",
        "aliases": [
            "clock1030"
        ],
        "tags": []
    }, {
        "emoji": "🕦",
        "description": "clock face eleven-thirty",
        "aliases": [
            "clock1130"
        ],
        "tags": []
    }, {
        "emoji": "✖️",
        "description": "heavy multiplication x",
        "aliases": [
            "heavy_multiplication_x"
        ],
        "tags": []
    }, {
        "emoji": "➕",
        "description": "heavy plus sign",
        "aliases": [
            "heavy_plus_sign"
        ],
        "tags": []
    }, {
        "emoji": "➖",
        "description": "heavy minus sign",
        "aliases": [
            "heavy_minus_sign"
        ],
        "tags": []
    }, {
        "emoji": "➗",
        "description": "heavy division sign",
        "aliases": [
            "heavy_division_sign"
        ],
        "tags": []
    }, {
        "emoji": "♠️",
        "description": "black spade suit",
        "aliases": [
            "spades"
        ],
        "tags": []
    }, {
        "emoji": "♥️",
        "description": "black heart suit",
        "aliases": [
            "hearts"
        ],
        "tags": []
    }, {
        "emoji": "♣️",
        "description": "black club suit",
        "aliases": [
            "clubs"
        ],
        "tags": []
    }, {
        "emoji": "♦️",
        "description": "black diamond suit",
        "aliases": [
            "diamonds"
        ],
        "tags": []
    }, {
        "emoji": "💮",
        "description": "white flower",
        "aliases": [
            "white_flower"
        ],
        "tags": []
    }, {
        "emoji": "💯",
        "description": "hundred points symbol",
        "aliases": [
            "100"
        ],
        "tags": [
            "score", "perfect"
        ]
    }, {
        "emoji": "✔️",
        "description": "heavy check mark",
        "aliases": [
            "heavy_check_mark"
        ],
        "tags": []
    }, {
        "emoji": "☑️",
        "description": "ballot box with check",
        "aliases": [
            "ballot_box_with_check"
        ],
        "tags": []
    }, {
        "emoji": "🔘",
        "description": "radio button",
        "aliases": [
            "radio_button"
        ],
        "tags": []
    }, {
        "emoji": "🔗",
        "description": "link symbol",
        "aliases": [
            "link"
        ],
        "tags": []
    }, {
        "emoji": "➰",
        "description": "curly loop",
        "aliases": [
            "curly_loop"
        ],
        "tags": []
    }, {
        "emoji": "〰️",
        "description": "wavy dash",
        "aliases": [
            "wavy_dash"
        ],
        "tags": []
    }, {
        "emoji": "〽️",
        "description": "part alternation mark",
        "aliases": [
            "part_alternation_mark"
        ],
        "tags": []
    }, {
        "emoji": "🔱",
        "description": "trident emblem",
        "aliases": [
            "trident"
        ],
        "tags": []
    }, {
        "emoji": "◼️",
        "description": "black medium square",
        "aliases": [
            "black_medium_square"
        ],
        "tags": []
    }, {
        "emoji": "◻️",
        "description": "white medium square",
        "aliases": [
            "white_medium_square"
        ],
        "tags": []
    }, {
        "emoji": "◾",
        "description": "black medium small square",
        "aliases": [
            "black_medium_small_square"
        ],
        "tags": []
    }, {
        "emoji": "◽",
        "description": "white medium small square",
        "aliases": [
            "white_medium_small_square"
        ],
        "tags": []
    }, {
        "emoji": "▪️",
        "description": "black small square",
        "aliases": [
            "black_small_square"
        ],
        "tags": []
    }, {
        "emoji": "▫️",
        "description": "white small square",
        "aliases": [
            "white_small_square"
        ],
        "tags": []
    }, {
        "emoji": "🔺",
        "description": "up-pointing red triangle",
        "aliases": [
            "small_red_triangle"
        ],
        "tags": []
    }, {
        "emoji": "🔲",
        "description": "black square button",
        "aliases": [
            "black_square_button"
        ],
        "tags": []
    }, {
        "emoji": "🔳",
        "description": "white square button",
        "aliases": [
            "white_square_button"
        ],
        "tags": []
    }, {
        "emoji": "⚫",
        "description": "medium black circle",
        "aliases": [
            "black_circle"
        ],
        "tags": []
    }, {
        "emoji": "⚪",
        "description": "medium white circle",
        "aliases": [
            "white_circle"
        ],
        "tags": []
    }, {
        "emoji": "🔴",
        "description": "large red circle",
        "aliases": [
            "red_circle"
        ],
        "tags": []
    }, {
        "emoji": "🔵",
        "description": "large blue circle",
        "aliases": [
            "large_blue_circle"
        ],
        "tags": []
    }, {
        "emoji": "🔻",
        "description": "down-pointing red triangle",
        "aliases": [
            "small_red_triangle_down"
        ],
        "tags": []
    }, {
        "emoji": "⬜",
        "description": "white large square",
        "aliases": [
            "white_large_square"
        ],
        "tags": []
    }, {
        "emoji": "⬛",
        "description": "black large square",
        "aliases": [
            "black_large_square"
        ],
        "tags": []
    }, {
        "emoji": "🔶",
        "description": "large orange diamond",
        "aliases": [
            "large_orange_diamond"
        ],
        "tags": []
    }, {
        "emoji": "🔷",
        "description": "large blue diamond",
        "aliases": [
            "large_blue_diamond"
        ],
        "tags": []
    }, {
        "emoji": "🔸",
        "description": "small orange diamond",
        "aliases": [
            "small_orange_diamond"
        ],
        "tags": []
    }, {
        "emoji": "🔹",
        "description": "small blue diamond",
        "aliases": [
            "small_blue_diamond"
        ],
        "tags": []
    }, {
        "aliases": [
            "basecamp"
        ],
        "tags": []
    }, {
        "aliases": [
            "basecampy"
        ],
        "tags": []
    }, {
        "aliases": [
            "bowtie"
        ],
        "tags": []
    }, {
        "aliases": [
            "feelsgood"
        ],
        "tags": []
    }, {
        "aliases": [
            "finnadie"
        ],
        "tags": []
    }, {
        "aliases": [
            "fu"
        ],
        "tags": []
    }, {
        "aliases": [
            "goberserk"
        ],
        "tags": []
    }, {
        "aliases": [
            "godmode"
        ],
        "tags": []
    }, {
        "aliases": [
            "hurtrealbad"
        ],
        "tags": []
    }, {
        "aliases": [
            "metal"
        ],
        "tags": []
    }, {
        "aliases": [
            "neckbeard"
        ],
        "tags": []
    }, {
        "aliases": [
            "octocat"
        ],
        "tags": []
    }, {
        "aliases": [
            "rage1"
        ],
        "tags": []
    }, {
        "aliases": [
            "rage2"
        ],
        "tags": []
    }, {
        "aliases": [
            "rage3"
        ],
        "tags": []
    }, {
        "aliases": [
            "rage4"
        ],
        "tags": []
    }, {
        "aliases": [
            "shipit", "squirrel"
        ],
        "tags": []
    }, {
        "aliases": [
            "suspect"
        ],
        "tags": []
    }, {
        "aliases": [
            "taco"
        ],
        "tags": []
    }, {
        "aliases": [
            "trollface"
        ],
        "tags": []
    }];
//# sourceMappingURL=emoji.db.js.map

/***/ }),

/***/ "./node_modules/ng-emoji-picker/src/emoji.service.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng-emoji-picker/src/emoji.service.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var emoji_db_1 = __webpack_require__(/*! ./emoji.db */ "./node_modules/ng-emoji-picker/src/emoji.db.js");
var EmojiService = /** @class */ (function () {
    function EmojiService() {
        this.PARSE_REGEX = /:([a-zA-Z0-9_\-\+]+):/g;
    }
    EmojiService.prototype.get = function (emoji) {
        // TODO Fix performance
        for (var _i = 0, EMOJI_DB_1 = emoji_db_1.EMOJI_DB; _i < EMOJI_DB_1.length; _i++) {
            var data = EMOJI_DB_1[_i];
            for (var _a = 0, _b = data.aliases; _a < _b.length; _a++) {
                var e = _b[_a];
                if (emoji === e) {
                    return data.emoji;
                }
            }
        }
        return emoji;
    };
    EmojiService.prototype.getAll = function () {
        return emoji_db_1.EMOJI_DB;
    };
    EmojiService.prototype.emojify = function (str) {
        var _this = this;
        return str.split(this.PARSE_REGEX).map(function (emoji, index) {
            // Return every second element as an emoji
            if (index % 2 === 0) {
                return emoji;
            }
            return _this.get(emoji);
        }).join('');
    };
    EmojiService.decorators = [
        { type: core_1.Injectable },
    ];
    return EmojiService;
}());
exports.EmojiService = EmojiService;
//# sourceMappingURL=emoji.service.js.map

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/account-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/account-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_account_account_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/account/account.page */ "./src/app/modules/full-layout/modules/account/pages/account/account.page.ts");
/* harmony import */ var _pages_account_personal_info_account_personal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/account-personal-info/account-personal-info.page */ "./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.ts");
/* harmony import */ var _pages_account_messages_account_messages_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/account-messages/account-messages.page */ "./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.ts");
/* harmony import */ var _pages_account_notifications_account_notifications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/account-notifications/account-notifications.page */ "./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.ts");
/* harmony import */ var _pages_account_friend_requests_account_friend_requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/account-friend-requests/account-friend-requests.page */ "./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.ts");
/* harmony import */ var _pages_account_settings_account_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/account-settings/account-settings.page */ "./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.ts");
/* harmony import */ var _pages_account_change_password_account_change_password_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/account-change-password/account-change-password.page */ "./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.ts");
/* harmony import */ var _pages_account_hobbies_account_hobbies_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/account-hobbies/account-hobbies.page */ "./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.ts");
/* harmony import */ var _pages_account_education_account_education_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/account-education/account-education.page */ "./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.ts");
/* harmony import */ var _pages_account_page_account_page_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/account-page/account-page.page */ "./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.ts");
/* harmony import */ var _pages_account_page_personal_info_account_page_personal_info_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/account-page-personal-info/account-page-personal-info.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.ts");
/* harmony import */ var _pages_account_page_settings_account_page_settings_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/account-page-settings/account-page-settings.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.ts");
/* harmony import */ var _pages_account_page_messages_account_page_messages_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/account-page-messages/account-page-messages.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.ts");
/* harmony import */ var _pages_account_page_change_password_account_page_change_password_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/account-page-change-password/account-page-change-password.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.ts");
/* harmony import */ var _pages_account_page_notifications_account_page_notifications_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/account-page-notifications/account-page-notifications.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.ts");
/* harmony import */ var _pages_account_page_ad_manager_account_page_ad_manager_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/account-page-ad-manager/account-page-ad-manager.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.ts");
/* harmony import */ var _shared_guards_profile_gaurd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/guards/profile.gaurd */ "./src/app/shared/guards/profile.gaurd.ts");
/* harmony import */ var _shared_guards_page_gaurd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/guards/page.gaurd */ "./src/app/shared/guards/page.gaurd.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: 'profile',
        component: _pages_account_account_page__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"],
        canActivate: [_shared_guards_profile_gaurd__WEBPACK_IMPORTED_MODULE_18__["ProfileGuard"]],
        children: [
            {
                path: '',
                component: _pages_account_personal_info_account_personal_info_page__WEBPACK_IMPORTED_MODULE_3__["AccountPersonalInfoComponent"],
            },
            {
                path: 'settings',
                component: _pages_account_settings_account_settings_page__WEBPACK_IMPORTED_MODULE_7__["AccountSettingsComponent"],
            },
            {
                path: 'passwordchange',
                component: _pages_account_change_password_account_change_password_page__WEBPACK_IMPORTED_MODULE_8__["AccountChangePasswordComponent"],
            },
            {
                path: 'hobbies',
                component: _pages_account_hobbies_account_hobbies_page__WEBPACK_IMPORTED_MODULE_9__["AccountHobbiesComponent"],
            },
            {
                path: 'education',
                component: _pages_account_education_account_education_page__WEBPACK_IMPORTED_MODULE_10__["AccountEducationComponent"],
            },
            {
                path: 'messages',
                component: _pages_account_messages_account_messages_page__WEBPACK_IMPORTED_MODULE_4__["AccountMessagesComponent"],
            },
            {
                path: 'notifications',
                component: _pages_account_notifications_account_notifications_page__WEBPACK_IMPORTED_MODULE_5__["AccountNotificationsComponent"],
            },
            {
                path: 'requests',
                component: _pages_account_friend_requests_account_friend_requests_page__WEBPACK_IMPORTED_MODULE_6__["AccountFriendRequestsComponent"],
            }
        ],
    },
    {
        path: 'page',
        component: _pages_account_page_account_page_page__WEBPACK_IMPORTED_MODULE_11__["AccountPageComponent"],
        canActivate: [_shared_guards_page_gaurd__WEBPACK_IMPORTED_MODULE_19__["PageGuard"]],
        children: [
            {
                path: '',
                component: _pages_account_page_personal_info_account_page_personal_info_page__WEBPACK_IMPORTED_MODULE_12__["AccountPagePersonalInfoComponent"],
            },
            {
                path: 'settings',
                component: _pages_account_page_settings_account_page_settings_page__WEBPACK_IMPORTED_MODULE_13__["AccountPageSettingsComponent"],
            },
            {
                path: 'passwordchange',
                component: _pages_account_page_change_password_account_page_change_password_page__WEBPACK_IMPORTED_MODULE_15__["AccountPageChangePasswordComponent"],
            },
            {
                path: 'messages',
                component: _pages_account_page_messages_account_page_messages_page__WEBPACK_IMPORTED_MODULE_14__["AccountPageMessagesComponent"],
            },
            {
                path: 'notifications',
                component: _pages_account_page_notifications_account_page_notifications_page__WEBPACK_IMPORTED_MODULE_16__["AccountPageNotificationsComponent"],
            },
            {
                path: 'ad-manager',
                component: _pages_account_page_ad_manager_account_page_ad_manager_page__WEBPACK_IMPORTED_MODULE_17__["AccountPageAdManagerComponent"],
            }
        ],
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/account.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/account.module.ts ***!
  \***********************************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _shared_services_profile_educationsAndEmployments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/profile/educationsAndEmployments.service */ "./src/app/shared/services/profile/educationsAndEmployments.service.ts");
/* harmony import */ var _shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/profile/hobbiesAndInterests.service */ "./src/app/shared/services/profile/hobbiesAndInterests.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/directives/directives.module */ "./src/app/shared/directives/directives.module.ts");
/* harmony import */ var _shared_modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/modules/forms */ "./src/app/shared/modules/forms.ts");
/* harmony import */ var _shared_modules_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modules/swiper */ "./src/app/shared/modules/swiper.ts");
/* harmony import */ var _shared_modules_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/modules/scrollbar */ "./src/app/shared/modules/scrollbar.ts");
/* harmony import */ var _shared_modules_emoji__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/modules/emoji */ "./src/app/shared/modules/emoji.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/modules/full-layout/modules/account/account-routing.module.ts");
/* harmony import */ var _components_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/account-header/account-header.component */ "./src/app/modules/full-layout/modules/account/components/account-header/account-header.component.ts");
/* harmony import */ var _components_account_sidebar_account_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/account-sidebar/account-sidebar.component */ "./src/app/modules/full-layout/modules/account/components/account-sidebar/account-sidebar.component.ts");
/* harmony import */ var _components_account_sidebar_large_account_sidebar_large_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/account-sidebar-large/account-sidebar-large.component */ "./src/app/modules/full-layout/modules/account/components/account-sidebar-large/account-sidebar-large.component.ts");
/* harmony import */ var _pages_account_account_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/account/account.page */ "./src/app/modules/full-layout/modules/account/pages/account/account.page.ts");
/* harmony import */ var _pages_account_personal_info_account_personal_info_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/account-personal-info/account-personal-info.page */ "./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.ts");
/* harmony import */ var _pages_account_messages_account_messages_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/account-messages/account-messages.page */ "./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.ts");
/* harmony import */ var _pages_account_notifications_account_notifications_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/account-notifications/account-notifications.page */ "./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.ts");
/* harmony import */ var _pages_account_friend_requests_account_friend_requests_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/account-friend-requests/account-friend-requests.page */ "./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.ts");
/* harmony import */ var _pages_account_settings_account_settings_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/account-settings/account-settings.page */ "./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.ts");
/* harmony import */ var _pages_account_change_password_account_change_password_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/account-change-password/account-change-password.page */ "./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.ts");
/* harmony import */ var _pages_account_hobbies_account_hobbies_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/account-hobbies/account-hobbies.page */ "./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.ts");
/* harmony import */ var _pages_account_education_account_education_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/account-education/account-education.page */ "./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.ts");
/* harmony import */ var _components_account_header_page_account_header_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/account-header-page/account-header-page.component */ "./src/app/modules/full-layout/modules/account/components/account-header-page/account-header-page.component.ts");
/* harmony import */ var _components_account_sidebar_page_account_sidebar_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/account-sidebar-page/account-sidebar-page.component */ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page/account-sidebar-page.component.ts");
/* harmony import */ var _components_account_sidebar_page_large_account_sidebar_page_large_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/account-sidebar-page-large/account-sidebar-page-large.component */ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page-large/account-sidebar-page-large.component.ts");
/* harmony import */ var _pages_account_page_account_page_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/account-page/account-page.page */ "./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.ts");
/* harmony import */ var _pages_account_page_personal_info_account_page_personal_info_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/account-page-personal-info/account-page-personal-info.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.ts");
/* harmony import */ var _pages_account_page_settings_account_page_settings_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/account-page-settings/account-page-settings.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.ts");
/* harmony import */ var _pages_account_page_messages_account_page_messages_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/account-page-messages/account-page-messages.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.ts");
/* harmony import */ var _pages_account_page_change_password_account_page_change_password_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/account-page-change-password/account-page-change-password.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.ts");
/* harmony import */ var _pages_account_page_notifications_account_page_notifications_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/account-page-notifications/account-page-notifications.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.ts");
/* harmony import */ var _pages_account_page_ad_manager_account_page_ad_manager_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/account-page-ad-manager/account-page-ad-manager.page */ "./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.ts");
/* harmony import */ var _shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../shared/services/profile/personalInfo.service */ "./src/app/shared/services/profile/personalInfo.service.ts");
/* harmony import */ var _shared_services_profile_accountSettings_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../shared/services/profile/accountSettings.service */ "./src/app/shared/services/profile/accountSettings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_5__["DirectivesModule"],
                _shared_modules_forms__WEBPACK_IMPORTED_MODULE_6__["FormsSharedModules"],
                _shared_modules_swiper__WEBPACK_IMPORTED_MODULE_7__["SwiperSharedModules"],
                _shared_modules_scrollbar__WEBPACK_IMPORTED_MODULE_8__["ScrollbarModule"],
                _shared_modules_emoji__WEBPACK_IMPORTED_MODULE_9__["EmojiModules"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_10__["AccountRoutingModule"]
            ],
            declarations: [
                _components_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_11__["AccountHeaderComponent"],
                _components_account_sidebar_account_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["AccountSidebarComponent"],
                _components_account_sidebar_large_account_sidebar_large_component__WEBPACK_IMPORTED_MODULE_13__["AccountSidebarLargeComponent"],
                _pages_account_account_page__WEBPACK_IMPORTED_MODULE_14__["AccountComponent"],
                _pages_account_personal_info_account_personal_info_page__WEBPACK_IMPORTED_MODULE_15__["AccountPersonalInfoComponent"],
                _pages_account_messages_account_messages_page__WEBPACK_IMPORTED_MODULE_16__["AccountMessagesComponent"],
                _pages_account_notifications_account_notifications_page__WEBPACK_IMPORTED_MODULE_17__["AccountNotificationsComponent"],
                _pages_account_friend_requests_account_friend_requests_page__WEBPACK_IMPORTED_MODULE_18__["AccountFriendRequestsComponent"],
                _pages_account_settings_account_settings_page__WEBPACK_IMPORTED_MODULE_19__["AccountSettingsComponent"],
                _pages_account_change_password_account_change_password_page__WEBPACK_IMPORTED_MODULE_20__["AccountChangePasswordComponent"],
                _pages_account_hobbies_account_hobbies_page__WEBPACK_IMPORTED_MODULE_21__["AccountHobbiesComponent"],
                _pages_account_education_account_education_page__WEBPACK_IMPORTED_MODULE_22__["AccountEducationComponent"],
                _components_account_header_page_account_header_page_component__WEBPACK_IMPORTED_MODULE_23__["AccountHeaderPageComponent"],
                _components_account_sidebar_page_account_sidebar_page_component__WEBPACK_IMPORTED_MODULE_24__["AccountSidebarPageComponent"],
                _components_account_sidebar_page_large_account_sidebar_page_large_component__WEBPACK_IMPORTED_MODULE_25__["AccountSidebarPageLargeComponent"],
                _pages_account_page_messages_account_page_messages_page__WEBPACK_IMPORTED_MODULE_29__["AccountPageMessagesComponent"],
                _pages_account_page_account_page_page__WEBPACK_IMPORTED_MODULE_26__["AccountPageComponent"],
                _pages_account_page_personal_info_account_page_personal_info_page__WEBPACK_IMPORTED_MODULE_27__["AccountPagePersonalInfoComponent"],
                _pages_account_page_settings_account_page_settings_page__WEBPACK_IMPORTED_MODULE_28__["AccountPageSettingsComponent"],
                _pages_account_page_change_password_account_page_change_password_page__WEBPACK_IMPORTED_MODULE_30__["AccountPageChangePasswordComponent"],
                _pages_account_page_notifications_account_page_notifications_page__WEBPACK_IMPORTED_MODULE_31__["AccountPageNotificationsComponent"],
                _pages_account_page_ad_manager_account_page_ad_manager_page__WEBPACK_IMPORTED_MODULE_32__["AccountPageAdManagerComponent"],
            ],
            providers: [_shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_33__["PersonalInfoService"], _shared_services_profile_accountSettings_service__WEBPACK_IMPORTED_MODULE_34__["AccountSettingsService"], _shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_1__["HobbiesAndInterestsService"], _shared_services_profile_educationsAndEmployments_service__WEBPACK_IMPORTED_MODULE_0__["EducationsAndEmploymentsService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-header-page/account-header-page.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-header-page/account-header-page.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Header Page Your Account -->\r\n\r\n<div class=\"main-header\">\r\n\t<div class=\"content-bg-wrap bg-account\">\r\n\t\t<!-- <div class=\"content-bg bg-account\"></div> -->\r\n\t</div>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-8 m-auto col-md-8 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"main-header-content\">\r\n\t\t\t\t\t<h1>Your Account Dashboard</h1>\r\n\t\t\t\t\t<p>Welcome to your account dashboard! Here you’ll find everything you need to change your\r\n\t\t\t\t\t\tprofile information, settings, read notifications and requests, view your latest messages,\r\n\t\t\t\t\t\tchange your pasword and much more! Also you can create or manage your own favourite page, have fun!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<img class=\"img-bottom\" src=\"/assets/img/account-bottom.png\" alt=\"friends\">\r\n</div>\r\n\r\n<!-- ... end Main Header Page Your Account -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-header-page/account-header-page.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-header-page/account-header-page.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-header-page/account-header-page.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-header-page/account-header-page.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AccountHeaderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountHeaderPageComponent", function() { return AccountHeaderPageComponent; });
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

var AccountHeaderPageComponent = /** @class */ (function () {
    function AccountHeaderPageComponent() {
    }
    AccountHeaderPageComponent.prototype.ngOnInit = function () {
    };
    AccountHeaderPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-header-page',
            template: __webpack_require__(/*! ./account-header-page.component.html */ "./src/app/modules/full-layout/modules/account/components/account-header-page/account-header-page.component.html"),
            styles: [__webpack_require__(/*! ./account-header-page.component.scss */ "./src/app/modules/full-layout/modules/account/components/account-header-page/account-header-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountHeaderPageComponent);
    return AccountHeaderPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-header/account-header.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-header/account-header.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Header Your Account -->\r\n\r\n<div class=\"main-header\">\r\n\t<div class=\"content-bg-wrap bg-account\">\r\n\t\t<!-- <div class=\"content-bg bg-account\"></div> -->\r\n\t</div>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-8 m-auto col-md-8 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"main-header-content\">\r\n\t\t\t\t\t<h1>Your Account Dashboard</h1>\r\n\t\t\t\t\t<p>Welcome to your account dashboard! Here you’ll find everything you need to change your\r\n\t\t\t\t\t\tprofile information, settings, read notifications and requests, view your latest messages,\r\n\t\t\t\t\t\tchange your pasword and much more! Also you can create or manage your own favourite page, have fun!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<img class=\"img-bottom\" src=\"/assets/img/account-bottom.png\" alt=\"friends\">\r\n</div>\r\n\r\n<!-- ... end Main Header Your Account -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-header/account-header.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-header/account-header.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-header/account-header.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-header/account-header.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AccountHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountHeaderComponent", function() { return AccountHeaderComponent; });
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

var AccountHeaderComponent = /** @class */ (function () {
    function AccountHeaderComponent() {
    }
    AccountHeaderComponent.prototype.ngOnInit = function () {
    };
    AccountHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-header',
            template: __webpack_require__(/*! ./account-header.component.html */ "./src/app/modules/full-layout/modules/account/components/account-header/account-header.component.html"),
            styles: [__webpack_require__(/*! ./account-header.component.scss */ "./src/app/modules/full-layout/modules/account/components/account-header/account-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountHeaderComponent);
    return AccountHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar-large/account-sidebar-large.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar-large/account-sidebar-large.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-block\">\r\n  <div class=\"your-profile\">\r\n    <div class=\"ui-block-title ui-block-title-small\">\r\n      <h6 class=\"title\">Your PROFILE</h6>\r\n    </div>\r\n\r\n    <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n          <h6 class=\"mb-0\">\r\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n              Profile Settings\r\n              <svg class=\"olymp-dropdown-arrow-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-dropdown-arrow-icon\"></use></svg>\r\n            </a>\r\n          </h6>\r\n        </div>\r\n\r\n        <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n          <ul class=\"your-profile-menu\">\r\n            <li>\r\n              <a [routerLink]=\"['/account/profile']\">Personal Information</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/account/profile/settings']\">Account Settings</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/account/profile/passwordchange']\">Change Password</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/account/profile/hobbies']\">Hobbies and Interests</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/account/profile/education']\">Education and Employement</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-block-title\">\r\n      <a [routerLink]=\"['/account/profile/notifications']\" class=\"h6 title\">Notifications</a>\r\n      <a href=\"#\" class=\"items-round-little bg-primary\">8</a>\r\n    </div>\r\n    <div class=\"ui-block-title\">\r\n      <a [routerLink]=\"['/account/profile/messages']\" class=\"h6 title\">Chat / Messages</a>\r\n    </div>\r\n    <div class=\"ui-block-title\">\r\n      <a [routerLink]=\"['/account/profile/requests']\" class=\"h6 title\">Friend Requests</a>\r\n      <a href=\"#\" class=\"items-round-little bg-blue\">4</a>\r\n    </div>\r\n    <div class=\"ui-block-title\">\r\n      <a href=\"#\" class=\"h6 title\">Delete Account</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar-large/account-sidebar-large.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar-large/account-sidebar-large.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar-large/account-sidebar-large.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar-large/account-sidebar-large.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AccountSidebarLargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSidebarLargeComponent", function() { return AccountSidebarLargeComponent; });
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

var AccountSidebarLargeComponent = /** @class */ (function () {
    function AccountSidebarLargeComponent() {
    }
    AccountSidebarLargeComponent.prototype.ngOnInit = function () {
    };
    AccountSidebarLargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-sidebar-large',
            template: __webpack_require__(/*! ./account-sidebar-large.component.html */ "./src/app/modules/full-layout/modules/account/components/account-sidebar-large/account-sidebar-large.component.html"),
            styles: [__webpack_require__(/*! ./account-sidebar-large.component.scss */ "./src/app/modules/full-layout/modules/account/components/account-sidebar-large/account-sidebar-large.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountSidebarLargeComponent);
    return AccountSidebarLargeComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page-large/account-sidebar-page-large.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar-page-large/account-sidebar-page-large.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-block\">\r\n    <div class=\"your-profile\">\r\n      <div class=\"ui-block-title ui-block-title-small\">\r\n        <h6 class=\"title\">Your Settings</h6>\r\n      </div>\r\n\r\n      <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n            <h6 class=\"mb-0\">\r\n              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                Settings\r\n                <svg class=\"olymp-dropdown-arrow-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-dropdown-arrow-icon\"></use></svg>\r\n              </a>\r\n            </h6>\r\n          </div>\r\n\r\n          <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n            <ul class=\"your-profile-menu\">\r\n              <li>\r\n                <a [routerLink]=\"['/account/page']\">Personal Information</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['/account/page/settings']\">Account Settings</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['/account/page/passwordchange']\">Change Password</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['/account/page/ad-manager']\">Ads Manager</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-block-title\">\r\n        <a [routerLink]=\"['/account/page/notifications']\" class=\"h6 title\">Notifications</a>\r\n        <a [routerLink]=\"['/account/page/notifications']\" class=\"items-round-little bg-primary\">8</a>\r\n      </div>\r\n      <div class=\"ui-block-title\">\r\n        <a [routerLink]=\"['/account/page/messages']\" class=\"h6 title\">Chat / Messages</a>\r\n      </div>\r\n      <div class=\"ui-block-title\">\r\n        <a href=\"#\" class=\"h6 title\">Delete Account</a>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page-large/account-sidebar-page-large.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar-page-large/account-sidebar-page-large.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page-large/account-sidebar-page-large.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar-page-large/account-sidebar-page-large.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: AccountSidebarPageLargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSidebarPageLargeComponent", function() { return AccountSidebarPageLargeComponent; });
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

var AccountSidebarPageLargeComponent = /** @class */ (function () {
    function AccountSidebarPageLargeComponent() {
    }
    AccountSidebarPageLargeComponent.prototype.ngOnInit = function () {
    };
    AccountSidebarPageLargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-sidebar-page-large',
            template: __webpack_require__(/*! ./account-sidebar-page-large.component.html */ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page-large/account-sidebar-page-large.component.html"),
            styles: [__webpack_require__(/*! ./account-sidebar-page-large.component.scss */ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page-large/account-sidebar-page-large.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountSidebarPageLargeComponent);
    return AccountSidebarPageLargeComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page/account-sidebar-page.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar-page/account-sidebar-page.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Account Settings Page Sidebar Responsive -->\r\n\r\n<div class=\"profile-settings-responsive\">\r\n\r\n\t<a clickStopPropagation class=\"js-profile-settings-open profile-settings-open\">\r\n\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n\t</a>\r\n\t<perfect-scrollbar>\r\n\t\t<div class=\"ui-block\">\r\n\t\t\t<div class=\"your-profile\">\r\n\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t<h6 class=\"title\">Your PROFILE</h6>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div id=\"accordion1\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-header\" role=\"tab\" id=\"headingOne-1\">\r\n\t\t\t\t\t\t\t<h6 class=\"mb-0\">\r\n\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne-1\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n\t\t\t\t\t\t\t\t\tProfile Settings\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-dropdown-arrow-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-dropdown-arrow-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div id=\"collapseOne-1\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n\t\t\t\t\t\t\t<ul class=\"your-profile-menu\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/page']\">Personal Information</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/page/settings']\">Account Settings</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/page/passwordchange']\">Change Password</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/page/ad-manager']\">Ads Manager</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<a [routerLink]=\"['/account/page/notifications']\" class=\"h6 title\">Notifications</a>\r\n\t\t\t\t\t<a [routerLink]=\"['/account/page/notifications']\" class=\"items-round-little bg-primary\">8</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<a [routerLink]=\"['/account/page/messages']\" class=\"h6 title\">Chat / Messages</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Delete Account</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</perfect-scrollbar>\r\n</div>\r\n\r\n<!-- ... end Account Settings Page Sidebar Responsive -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page/account-sidebar-page.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar-page/account-sidebar-page.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page/account-sidebar-page.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar-page/account-sidebar-page.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AccountSidebarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSidebarPageComponent", function() { return AccountSidebarPageComponent; });
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

var AccountSidebarPageComponent = /** @class */ (function () {
    function AccountSidebarPageComponent() {
    }
    AccountSidebarPageComponent.prototype.ngOnInit = function () {
    };
    AccountSidebarPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-sidebar-page',
            template: __webpack_require__(/*! ./account-sidebar-page.component.html */ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page/account-sidebar-page.component.html"),
            styles: [__webpack_require__(/*! ./account-sidebar-page.component.scss */ "./src/app/modules/full-layout/modules/account/components/account-sidebar-page/account-sidebar-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountSidebarPageComponent);
    return AccountSidebarPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar/account-sidebar.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar/account-sidebar.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Account Settings Sidebar Responsive -->\r\n\r\n<div class=\"profile-settings-responsive\">\r\n\r\n\t<a clickStopPropagation class=\"js-profile-settings-open profile-settings-open\">\r\n\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n\t</a>\r\n\t<perfect-scrollbar>\r\n\t\t<div class=\"ui-block\">\r\n\t\t\t<div class=\"your-profile\">\r\n\t\t\t\t<div class=\"ui-block-title ui-block-title-small\">\r\n\t\t\t\t\t<h6 class=\"title\">Your PROFILE</h6>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div id=\"accordion1\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-header\" role=\"tab\" id=\"headingOne-1\">\r\n\t\t\t\t\t\t\t<h6 class=\"mb-0\">\r\n\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne-1\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n\t\t\t\t\t\t\t\t\tProfile Settings\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-dropdown-arrow-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-dropdown-arrow-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div id=\"collapseOne-1\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n\t\t\t\t\t\t\t<ul class=\"your-profile-menu\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/profile']\">Personal Information</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/profile/settings']\">Account Settings</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/profile/passwordchange']\">Change Password</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/profile/hobbies']\">Hobbies and Interests</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/account/profile/education']\">Education and Employement</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<a [routerLink]=\"['/account/profile/notifications']\" class=\"h6 title\">Notifications</a>\r\n\t\t\t\t\t<a href=\"#\" class=\"items-round-little bg-primary\">8</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<a [routerLink]=\"['/account/messages']\" class=\"h6 title\">Chat / Messages</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<a [routerLink]=\"['/account/profile/requests']\" class=\"h6 title\">Friend Requests</a>\r\n\t\t\t\t\t<a href=\"#\" class=\"items-round-little bg-blue\">4</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<a href=\"#\" class=\"h6 title\">Delete Account</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</perfect-scrollbar>\r\n</div>\r\n\r\n<!-- ... end Account Sidebar Responsive -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar/account-sidebar.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar/account-sidebar.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/components/account-sidebar/account-sidebar.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/components/account-sidebar/account-sidebar.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AccountSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSidebarComponent", function() { return AccountSidebarComponent; });
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

var AccountSidebarComponent = /** @class */ (function () {
    function AccountSidebarComponent() {
    }
    AccountSidebarComponent.prototype.ngOnInit = function () {
    };
    AccountSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-sidebar',
            template: __webpack_require__(/*! ./account-sidebar.component.html */ "./src/app/modules/full-layout/modules/account/components/account-sidebar/account-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./account-sidebar.component.scss */ "./src/app/modules/full-layout/modules/account/components/account-sidebar/account-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountSidebarComponent);
    return AccountSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Change Password</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Confirm Current Password</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"password\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your New Password</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"password\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Confirm New Password</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"password\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"remember\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"forgot\">Forgot your Password?</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg full-width\">Change Password Now!</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- Account Profile Sidebar -->\r\n    <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n      <app-account-sidebar-large></app-account-sidebar-large>\r\n    </div>\r\n    \r\n    <!-- ... end Account Profile Sidebar -->\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AccountChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountChangePasswordComponent", function() { return AccountChangePasswordComponent; });
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

var AccountChangePasswordComponent = /** @class */ (function () {
    function AccountChangePasswordComponent() {
    }
    AccountChangePasswordComponent.prototype.ngOnInit = function () {
    };
    AccountChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-change-password',
            template: __webpack_require__(/*! ./account-change-password.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.html"),
            styles: [__webpack_require__(/*! ./account-change-password.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-change-password/account-change-password.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountChangePasswordComponent);
    return AccountChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Your Education History</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"row\" *ngFor=\"let education of educations let index = index;\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [ngClass]=\"{'is-empty' :education.title === ''}\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Title or Place</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" name=\"title-{{index}}\" [(ngModel)]=\"educations[index].title\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [ngClass]=\"{'is-empty' :education.time === ''}\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Period of Time</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" name=\"time-{{index}}\" [(ngModel)]=\"educations[index].time\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [ngClass]=\"{'is-empty' :education.description === ''}\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Description</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"\" name=\"description-{{index}}\" [(ngModel)]=\"educations[index].description\">\r\n\t\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<a href clickStopPropagation (click)=\"addEducation()\" class=\"add-field\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-plus-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-plus-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>Add Education Field</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Your Employment History</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"row\" *ngFor=\"let employment of employments let index = index;\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [ngClass]=\"{'is-empty' :employment.title === ''}\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Title or Place</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" name=\"title-{{index}}\" [(ngModel)]=\"employments[index].title\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [ngClass]=\"{'is-empty' :employment.time === ''}\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Period of Time</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" name=\"time-{{index}}\" [(ngModel)]=\"employments[index].time\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [ngClass]=\"{'is-empty' :employment.description === ''}\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Description</label>\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"\" name=\"description-{{index}}\" [(ngModel)]=\"employments[index].description\">\r\n\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<a href clickStopPropagation (click)=\"addEmployment()\" class=\"add-field\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-plus-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-plus-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<span>Add Employment Field</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary btn-lg full-width\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg full-width\" (click)=\"updateEducationsAndEmployments()\">Save all Changes</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- Account Profile Sidebar -->\r\n    <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n      <app-account-sidebar-large></app-account-sidebar-large>\r\n    </div>\r\n    \r\n    <!-- ... end Account Profile Sidebar -->\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AccountEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEducationComponent", function() { return AccountEducationComponent; });
/* harmony import */ var _shared_services_profile_educationsAndEmployments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/services/profile/educationsAndEmployments.service */ "./src/app/shared/services/profile/educationsAndEmployments.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountEducationComponent = /** @class */ (function () {
    function AccountEducationComponent(educationsAndEmploymentsService) {
        this.educationsAndEmploymentsService = educationsAndEmploymentsService;
        this.educations = [];
        this.employments = [];
    }
    AccountEducationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.educationsAndEmploymentsService.getEducationsAndEmployments()
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
    AccountEducationComponent.prototype.addEducation = function () {
        this.educations.push({ title: '', time: '', description: '' });
    };
    AccountEducationComponent.prototype.addEmployment = function () {
        this.employments.push({ title: '', time: '', description: '' });
    };
    AccountEducationComponent.prototype.updateEducationsAndEmployments = function () {
        this.educationsAndEmploymentsService.updateEducationsAndEmployments({
            educations: this.educations,
            employments: this.employments
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AccountEducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-education',
            template: __webpack_require__(/*! ./account-education.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.html"),
            styles: [__webpack_require__(/*! ./account-education.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-education/account-education.page.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_profile_educationsAndEmployments_service__WEBPACK_IMPORTED_MODULE_0__["EducationsAndEmploymentsService"]])
    ], AccountEducationComponent);
    return AccountEducationComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Friend Requests</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<ul class=\"notification-list friend-requests\">\r\n\t\t\t\t\t<li *ngFor=\"let request of friendRequests\">\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar15-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/profile', request.sender, 'about']\" class=\"h6 notification-friend\">{{request.sender}}</a>\r\n\t\t\t\t\t\t\t<!-- <span class=\"chat-message-item\">Mutual Friend: Huma Ali</span> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t<a class=\"accept-request\" *ngIf=\"request.status === 'pending'\" (click)=\"acceptFriendRequest(request)\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon-add\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tAccept Friend Request\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a class=\"accept-request request-del\" *ngIf=\"request.status === 'pending'\" (click)=\"declineFriendRequest(request)\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon-minus\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n              <svg class=\"olymp-happy-face-icon\" *ngIf=\"request.status === 'accepted'\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n            </span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<!-- <li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar16-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Haider Ali</a>\r\n\t\t\t\t\t\t\t<span class=\"chat-message-item\">4 Friends in Common</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon-add\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tAccept Friend Request\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request request-del\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon-minus\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"accepted\">\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar17-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\tYou and <a href=\"#\" class=\"h6 notification-friend\">Mahira Khan</a> just became friends. Write on <a href=\"#\" class=\"notification-link\">his wall</a>.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/avatar18-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Stagg Clothing</a>\r\n\t\t\t\t\t\t\t<span class=\"chat-message-item\">9 Friends in Common</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon-add\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tAccept Friend Request\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"accept-request request-del\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon-minus\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li> -->\r\n\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<!-- Account Profile Sidebar -->\r\n    <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n      <app-account-sidebar-large></app-account-sidebar-large>\r\n    </div>\r\n\r\n    <!-- ... end Account Profile Sidebar -->\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AccountFriendRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFriendRequestsComponent", function() { return AccountFriendRequestsComponent; });
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountFriendRequestsComponent = /** @class */ (function () {
    function AccountFriendRequestsComponent(userService) {
        this.userService = userService;
    }
    AccountFriendRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUserData().then(function (user) {
            _this.userService.getFriendRequests(user.username).subscribe(function (data) {
                _this.friendRequests = data;
            }, function (err) { return console.log(err); });
        }).catch(function (err) { return console.log(err); });
    };
    AccountFriendRequestsComponent.prototype.acceptFriendRequest = function (request) {
        this.userService.acceptFriendRequest(request)
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.log(err); });
    };
    AccountFriendRequestsComponent.prototype.declineFriendRequest = function (request) {
        this.userService.declineFriendRequest(request)
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.log(err); });
    };
    AccountFriendRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-friend-requests',
            template: __webpack_require__(/*! ./account-friend-requests.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.html"),
            styles: [__webpack_require__(/*! ./account-friend-requests.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-friend-requests/account-friend-requests.page.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], AccountFriendRequestsComponent);
    return AccountFriendRequestsComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Hobbies and Interests</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Hobbies</label>\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"hobbies\" [(ngModel)]=\"this.hobbiesAndInterests.hobbies\" placeholder=\"\"  >I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.\r\n\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Favourite TV Shows</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"favTV\" [(ngModel)]=\"this.hobbiesAndInterests.favTV\" placeholder=\"\"  >Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Favourite Movies</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"favMovies\" [(ngModel)]=\"this.hobbiesAndInterests.favMovies\" placeholder=\"\"  >Idiocratic, The Scarred Wizard and the Fire Crown,  Crime Squad, Ferrum Man. </textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Favourite Games</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"favGames\" [(ngModel)]=\"this.hobbiesAndInterests.favGames\" placeholder=\"\"  >The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto. </textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary btn-lg full-width\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Favourite Music Bands / Artists</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"favMusic\" [(ngModel)]=\"this.hobbiesAndInterests.favMusic\" placeholder=\"\"  >Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Favourite Books</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"favBooks\" [(ngModel)]=\"this.hobbiesAndInterests.favBooks\" placeholder=\"\"  >The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Favourite Writers</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"favWriters\" [(ngModel)]=\"this.hobbiesAndInterests.favWriters\" placeholder=\"\"  >Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandria Platt, Marcus Roth. </textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Other Interests</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"otherInterests\" [(ngModel)]=\"this.hobbiesAndInterests.otherInterests\" placeholder=\"\"  >Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg full-width\" (click)=\"updateHobbiesAndInterests()\">Save all Changes</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- Account Profile Sidebar -->\r\n    <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n      <app-account-sidebar-large></app-account-sidebar-large>\r\n    </div>\r\n    \r\n    <!-- ... end Account Profile Sidebar -->\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: AccountHobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountHobbiesComponent", function() { return AccountHobbiesComponent; });
/* harmony import */ var _shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/services/profile/hobbiesAndInterests.service */ "./src/app/shared/services/profile/hobbiesAndInterests.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountHobbiesComponent = /** @class */ (function () {
    function AccountHobbiesComponent(hobbiesAndInterestsService) {
        this.hobbiesAndInterestsService = hobbiesAndInterestsService;
    }
    AccountHobbiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hobbiesAndInterests = {};
        this.hobbiesAndInterestsService.getHobbiesAndInterests()
            .then(function (hobbies) {
            if (hobbies) {
                _this.hobbiesAndInterests = hobbies;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AccountHobbiesComponent.prototype.updateHobbiesAndInterests = function () {
        this.hobbiesAndInterestsService.updateHobbiesAndInterests(this.hobbiesAndInterests)
            .then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AccountHobbiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-hobbies',
            template: __webpack_require__(/*! ./account-hobbies.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.html"),
            styles: [__webpack_require__(/*! ./account-hobbies.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-hobbies/account-hobbies.page.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_profile_hobbiesAndInterests_service__WEBPACK_IMPORTED_MODULE_0__["HobbiesAndInterestsService"]])
    ], AccountHobbiesComponent);
    return AccountHobbiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Your Account Personal Information -->\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Chat / Messages</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12 padding-r-0\">\r\n\t\t\t\t\t\t<div class=\"chats\">\r\n\t\t\t\t\t\t\t<perfect-scrollbar>\r\n\t\t\t\t\t\t\t\t<ul class=\"notification-list chat-message\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar8-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Mahira Khan</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hi Hassan! It’s Mahira, I just wanted to let you know that we have to reschedule...</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar9-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Jake Parker</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Great, I’ll see you tomorrow!.</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar39-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Naeem Khan</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hello did you get my message tomorrow, i am waiting for your reply!.</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar40-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Ahmad Ali</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Did you really went to that coldplay concert, it must have been great!.</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Maya Ali</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">We’ll have to check that at the office and see if the client is on board with...</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 9:56pm</time></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t<li class=\"chat-group\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar11-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar12-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar13-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">You, Ali, Haider & Maryam +3</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"last-message-author\">ALi:</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Yeah! Seems fine by me!</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 16th at 10:23am</time></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</perfect-scrollbar>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 padding-l-0\">\r\n\t\t\t\t\t\t<div class=\"chat-field\">\r\n\t\t\t\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t\t\t\t<h6 class=\"title\">Maya Ali</h6>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<perfect-scrollbar>\r\n\t\t\t\t\t\t\t\t<ul class=\"notification-list chat-message chat-message-field\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Maya Ali</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 8:10pm</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hi hassan, How are your doing? Please remember that next week we are going to Gotham Bar to celebrate Marina’s Birthday.</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Hassan Ahmad</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 8:30pm</time></span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hi Maya! I have a question, do you think that tomorrow we could talk to\r\n\t\t\t\t\t\t\t\t\t\t\tthe client to iron out some details before the presentation? I already finished the first screen but\r\n\t\t\t\t\t\t\t\t\t\t\tI need to ask him something before moving on. Anyway, here’s a preview!\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"added-photos\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/photo-message1.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/photo-message2.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"photos-name\">icons.jpeg; bunny.jpeg</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Maya Ali</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 9:56pm</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">We’ll have to check that at the office and see if the client is on board with it. I think That looks really good!</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</perfect-scrollbar>\r\n\r\n\t\t\t\t\t\t\t<form>\r\n\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Write your reply here...</label>\r\n\t\t\t\t\t\t\t\t\t<textarea emoji-input [(ngModel)]=\"message\" name=\"message\" (setPopupAction)=\"setPopupAction($event)\" class=\"form-control\" placeholder=\"\"  ></textarea>\r\n\t\t\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [ngClass]=\"{'is-empty': message === ''}\">\r\n\t\t\t\t\t\t\t\t\t<emoji-input [(model)]=\"message\" [textArea]=\"{}\" \r\n\t\t\t\t\t\t\t\t\t[inputClass]=\"'form-control'\" [searchClass]=\"'yello-emoji-search'\"\r\n\t\t\t\t\t\t\t\t\t[popupAnchor]=\"'bottom'\" (setPopupAction)=\"setPopupAction($event)\">\r\n\t\t\t\t\t\t\t\t\t</emoji-input>\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Write your reply here...</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"add-options-message\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"options-message\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-computer-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-computer-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a class=\"options-message smile-block\" (click)=\"openPopup(true)\">\r\n\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-sticker-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-sticker-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\">Post Reply</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n    </div>\r\n\r\n    <!-- Account Profile Sidebar -->\r\n\t<div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n      <app-account-sidebar-large></app-account-sidebar-large>\r\n    </div>\r\n    \r\n    <!-- ... end Account Profile Sidebar -->\r\n    \r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Your Account Messages -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AccountMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountMessagesComponent", function() { return AccountMessagesComponent; });
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

var AccountMessagesComponent = /** @class */ (function () {
    function AccountMessagesComponent() {
        this.message = '';
    }
    AccountMessagesComponent.prototype.ngOnInit = function () {
    };
    AccountMessagesComponent.prototype.setPopupAction = function (fn) {
        this.openPopup = fn;
    };
    AccountMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-messages',
            template: __webpack_require__(/*! ./account-messages.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.html"),
            styles: [__webpack_require__(/*! ./account-messages.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-messages/account-messages.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountMessagesComponent);
    return AccountMessagesComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Notifications</h6>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<ul class=\"notification-list\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/avatar1-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Misbah Khokhar</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"un-read\">\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/avatar2-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\tYou and <a href=\"#\" class=\"h6 notification-friend\">Mian Umer</a> just became friends. Write on <a href=\"#\" class=\"notification-link\">his wall</a>.\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">9 hours ago</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"with-comment-photo\">\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/avatar3-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Humaima Khan</a> commented on your <a href=\"#\" class=\"notification-link\">photo</a>.\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 5:32am</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"comment-photo\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/comment-photo.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t<span>“She looks incredible in that outfit! We should see each...”</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/avatar4-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Ahmad Ansari</a> liked your <a href=\"#\" class=\"notification-link\">profile status</a>.\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 18th at 8:22pm</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/avatar5-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Rock Band</a> invited you to attend to his event Goo in <a href=\"#\" class=\"notification-link\">Gotham Bar</a>.\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 5th at 6:43pm</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-calendar-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-calendar-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/avatar9-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Nabeel Ahmad</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 2nd at 8:29pm</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t<img src=\"assets/img/avatar7-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Sadia Khan</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.\r\n\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 2nd at 10:07am</time></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t<svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t<svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t</div>\r\n\t\t\t<nav aria-label=\"Page navigation example\">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\">\r\n\t\t\t\t\t<li class=\"page-item disabled\">\r\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">1<div class=\"ripple-container\"><div class=\"ripple ripple-on ripple-out\" style=\"left: -10.3833px; top: -16.8333px; background-color: rgb(255, 255, 255); transform: scale(16.7857);\"></div></div></a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\r\n\t\t\t\t\t<li class=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\r\n\t\t<!-- Account Profile Sidebar -->\r\n    <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n      <app-account-sidebar-large></app-account-sidebar-large>\r\n    </div>\r\n    \r\n    <!-- ... end Account Profile Sidebar -->\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AccountNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNotificationsComponent", function() { return AccountNotificationsComponent; });
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

var AccountNotificationsComponent = /** @class */ (function () {
    function AccountNotificationsComponent() {
    }
    AccountNotificationsComponent.prototype.ngOnInit = function () {
    };
    AccountNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-notifications',
            template: __webpack_require__(/*! ./account-notifications.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.html"),
            styles: [__webpack_require__(/*! ./account-notifications.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-notifications/account-notifications.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountNotificationsComponent);
    return AccountNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n        <div class=\"ui-block\">\r\n          <div class=\"ui-block-title\">\r\n            <h6 class=\"title\">Ads Manager</h6>\r\n          </div>\r\n          <div class=\"ui-block-content\">\r\n            <p>This is Ads Manager.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- Account Page Profile Sidebar -->\r\n      <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n        <app-account-sidebar-page-large></app-account-sidebar-page-large>\r\n      </div>\r\n      \r\n      <!-- ... end Account Page Profile Sidebar -->\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AccountPageAdManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageAdManagerComponent", function() { return AccountPageAdManagerComponent; });
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

var AccountPageAdManagerComponent = /** @class */ (function () {
    function AccountPageAdManagerComponent() {
    }
    AccountPageAdManagerComponent.prototype.ngOnInit = function () {
    };
    AccountPageAdManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-page-ad-manager',
            template: __webpack_require__(/*! ./account-page-ad-manager.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.html"),
            styles: [__webpack_require__(/*! ./account-page-ad-manager.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-page-ad-manager/account-page-ad-manager.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountPageAdManagerComponent);
    return AccountPageAdManagerComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n      <div class=\"ui-block\">\r\n        <div class=\"ui-block-title\">\r\n          <h6 class=\"title\">Change Password</h6>\r\n        </div>\r\n        <div class=\"ui-block-content\">\r\n          <form>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"form-group label-floating is-empty\">\r\n                  <label class=\"control-label\">Confirm Current Password</label>\r\n                  <input class=\"form-control\" placeholder=\"\" type=\"password\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <div class=\"form-group label-floating is-empty\">\r\n                  <label class=\"control-label\">Your New Password</label>\r\n                  <input class=\"form-control\" placeholder=\"\" type=\"password\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <div class=\"form-group label-floating is-empty\">\r\n                  <label class=\"control-label\">Confirm New Password</label>\r\n                  <input class=\"form-control\" placeholder=\"\" type=\"password\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-12 col-sm-12 col-sm-12 col-xs-12\">\r\n                <div class=\"remember\">\r\n                  <a href=\"#\" class=\"forgot\">Forgot your Password?</a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <button class=\"btn btn-primary btn-lg full-width\">Change Password Now!</button>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Account Page Profile Sidebar -->\r\n\t  <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n      <app-account-sidebar-page-large></app-account-sidebar-page-large>\r\n    </div>\r\n    \r\n    <!-- ... end Account Page Profile Sidebar -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AccountPageChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageChangePasswordComponent", function() { return AccountPageChangePasswordComponent; });
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

var AccountPageChangePasswordComponent = /** @class */ (function () {
    function AccountPageChangePasswordComponent() {
    }
    AccountPageChangePasswordComponent.prototype.ngOnInit = function () {
    };
    AccountPageChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-page-change-password',
            template: __webpack_require__(/*! ./account-page-change-password.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.html"),
            styles: [__webpack_require__(/*! ./account-page-change-password.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-page-change-password/account-page-change-password.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountPageChangePasswordComponent);
    return AccountPageChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Your Account Personal Information -->\r\n\r\n<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t\t<h6 class=\"title\">Chat / Messages</h6>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12 padding-r-0\">\r\n\t\t\t\t\t\t\t<div class=\"chats\">\r\n\t\t\t\t\t\t\t\t<perfect-scrollbar>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"notification-list chat-message\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar8-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Mahira Khan</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hi Hassan! It’s Mahira, I just wanted to let you know that we have to reschedule...</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar9-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Jake Parker</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Great, I’ll see you tomorrow!.</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar39-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Naeem Khan</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hello did you get my message tomorrow, i am waiting for your reply!.</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar40-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Ahmad Ali</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Did you really went to that coldplay concert, it must have been great!.</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Maya Ali</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">We’ll have to check that at the office and see if the client is on board with...</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 9:56pm</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"chat-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar11-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar12-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar13-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">You, Ali, Haider & Maryam +3</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"last-message-author\">ALi:</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Yeah! Seems fine by me!</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 16th at 10:23am</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</perfect-scrollbar>\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t<div class=\"col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 padding-l-0\">\r\n\t\t\t\t\t\t\t<div class=\"chat-field\">\r\n\t\t\t\t\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"title\">Maya Ali</h6>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<perfect-scrollbar>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"notification-list chat-message chat-message-field\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Maya Ali</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 8:10pm</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hi hassan, How are your doing? Please remember that next week we are going to Gotham Bar to celebrate Marina’s Birthday.</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/author-page.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Hassan Ahmad</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 8:30pm</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">Hi Maya! I have a question, do you think that tomorrow we could talk to\r\n\t\t\t\t\t\t\t\t\t\t\t\tthe client to iron out some details before the presentation? I already finished the first screen but\r\n\t\t\t\t\t\t\t\t\t\t\t\tI need to ask him something before moving on. Anyway, here’s a preview!\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"added-photos\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/photo-message1.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/photo-message2.jpg\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"photos-name\">icons.jpeg; bunny.jpeg</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/avatar10-sm.jpg\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notification-event\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h6 notification-friend\">Maya Ali</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 9:56pm</time></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"chat-message-item\">We’ll have to check that at the office and see if the client is on board with it. I think That looks really good!</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</perfect-scrollbar>\r\n\t\r\n\t\t\t\t\t\t\t\t<form>\r\n\t\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Write your reply here...</label>\r\n\t\t\t\t\t\t\t\t\t\t<textarea emoji-input [(ngModel)]=\"message\" name=\"message\" (setPopupAction)=\"setPopupAction($event)\" class=\"form-control\" placeholder=\"\"  ></textarea>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [ngClass]=\"{'is-empty': message === ''}\">\r\n\t\t\t\t\t\t\t\t\t\t<emoji-input [(model)]=\"message\" [textArea]=\"{}\" \r\n\t\t\t\t\t\t\t\t\t\t[inputClass]=\"'form-control'\" [searchClass]=\"'yello-emoji-search'\"\r\n\t\t\t\t\t\t\t\t\t\t[popupAnchor]=\"'bottom'\" (setPopupAction)=\"setPopupAction($event)\">\r\n\t\t\t\t\t\t\t\t\t\t</emoji-input>\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Write your reply here...</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"add-options-message\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"options-message\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-computer-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-computer-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"options-message smile-block\" (click)=\"openPopup(true)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-sticker-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-sticker-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\">Post Reply</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t\t<!-- Account Page Profile Sidebar -->\r\n\t    <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n\t\t\t<app-account-sidebar-page-large></app-account-sidebar-page-large>\r\n\t\t</div>\r\n\t\t\t\r\n\t\t<!-- ... end Account Page Profile Sidebar -->\r\n\t\t\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<!-- ... end Your Account Messages -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AccountPageMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageMessagesComponent", function() { return AccountPageMessagesComponent; });
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

var AccountPageMessagesComponent = /** @class */ (function () {
    function AccountPageMessagesComponent() {
        this.message = '';
    }
    AccountPageMessagesComponent.prototype.ngOnInit = function () {
    };
    AccountPageMessagesComponent.prototype.setPopupAction = function (fn) {
        this.openPopup = fn;
    };
    AccountPageMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-messages',
            template: __webpack_require__(/*! ./account-page-messages.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.html"),
            styles: [__webpack_require__(/*! ./account-page-messages.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-page-messages/account-page-messages.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountPageMessagesComponent);
    return AccountPageMessagesComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n        <div class=\"ui-block\">\r\n          <div class=\"ui-block-title\">\r\n            <h6 class=\"title\">Notifications</h6>\r\n            <a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n          </div>\r\n  \r\n          <ul class=\"notification-list\">\r\n            <li>\r\n              <div class=\"author-thumb\">\r\n                <img src=\"assets/img/avatar1-sm.jpg\" alt=\"author\">\r\n              </div>\r\n              <div class=\"notification-event\">\r\n                <a href=\"#\" class=\"h6 notification-friend\">Misbah Khokhar</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.\r\n                <span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">4 hours ago</time></span>\r\n              </div>\r\n                <span class=\"notification-icon\">\r\n                  <svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n                </span>\r\n  \r\n              <div class=\"more\">\r\n                <svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n                <svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n              </div>\r\n            </li>\r\n  \r\n            <li class=\"un-read\">\r\n              <div class=\"author-thumb\">\r\n                <img src=\"assets/img/avatar2-sm.jpg\" alt=\"author\">\r\n              </div>\r\n              <div class=\"notification-event\">\r\n                You and <a href=\"#\" class=\"h6 notification-friend\">Mian Umer</a> just became friends. Write on <a href=\"#\" class=\"notification-link\">his wall</a>.\r\n                <span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">9 hours ago</time></span>\r\n              </div>\r\n                <span class=\"notification-icon\">\r\n                  <svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n                </span>\r\n  \r\n              <div class=\"more\">\r\n                <svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n                <svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n              </div>\r\n            </li>\r\n  \r\n            <li class=\"with-comment-photo\">\r\n              <div class=\"author-thumb\">\r\n                <img src=\"assets/img/avatar3-sm.jpg\" alt=\"author\">\r\n              </div>\r\n              <div class=\"notification-event\">\r\n                <a href=\"#\" class=\"h6 notification-friend\">Humaima Khan</a> commented on your <a href=\"#\" class=\"notification-link\">photo</a>.\r\n                <span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">Yesterday at 5:32am</time></span>\r\n              </div>\r\n                <span class=\"notification-icon\">\r\n                  <svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n                </span>\r\n  \r\n              <div class=\"comment-photo\">\r\n                <img src=\"assets/img/comment-photo.jpg\" alt=\"photo\">\r\n                <span>“She looks incredible in that outfit! We should see each...”</span>\r\n              </div>\r\n              <div class=\"more\">\r\n                <svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n                <svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n              </div>\r\n            </li>\r\n  \r\n            <li>\r\n              <div class=\"author-thumb\">\r\n                <img src=\"assets/img/avatar4-sm.jpg\" alt=\"author\">\r\n              </div>\r\n              <div class=\"notification-event\">\r\n                <a href=\"#\" class=\"h6 notification-friend\">Ahmad Ansari</a> liked your <a href=\"#\" class=\"notification-link\">profile status</a>.\r\n                <span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 18th at 8:22pm</time></span>\r\n              </div>\r\n              <span class=\"notification-icon\">\r\n                <svg class=\"olymp-heart-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-heart-icon\"></use></svg>\r\n              </span>\r\n              <div class=\"more\">\r\n                <svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n                <svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n              </div>\r\n            </li>\r\n  \r\n            <li>\r\n              <div class=\"author-thumb\">\r\n                <img src=\"assets/img/avatar5-sm.jpg\" alt=\"author\">\r\n              </div>\r\n              <div class=\"notification-event\">\r\n                <a href=\"#\" class=\"h6 notification-friend\">Rock Band</a> invited you to attend to his event Goo in <a href=\"#\" class=\"notification-link\">Gotham Bar</a>.\r\n                <span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 5th at 6:43pm</time></span>\r\n              </div>\r\n                <span class=\"notification-icon\">\r\n                  <svg class=\"olymp-calendar-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-calendar-icon\"></use></svg>\r\n                </span>\r\n  \r\n              <div class=\"more\">\r\n                <svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n                <svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n              </div>\r\n            </li>\r\n  \r\n            <li>\r\n              <div class=\"author-thumb\">\r\n                <img src=\"assets/img/avatar9-sm.jpg\" alt=\"author\">\r\n              </div>\r\n              <div class=\"notification-event\">\r\n                <a href=\"#\" class=\"h6 notification-friend\">Nabeel Ahmad</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.\r\n                <span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 2nd at 8:29pm</time></span>\r\n              </div>\r\n                <span class=\"notification-icon\">\r\n                  <svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n                </span>\r\n  \r\n              <div class=\"more\">\r\n                <svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n                <svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n              </div>\r\n            </li>\r\n  \r\n            <li>\r\n              <div class=\"author-thumb\">\r\n                <img src=\"assets/img/avatar7-sm.jpg\" alt=\"author\">\r\n              </div>\r\n              <div class=\"notification-event\">\r\n                <a href=\"#\" class=\"h6 notification-friend\">Sadia Khan</a> commented on your new <a href=\"#\" class=\"notification-link\">profile status</a>.\r\n                <span class=\"notification-date\"><time class=\"entry-date updated\" datetime=\"2004-07-24T18:18\">March 2nd at 10:07am</time></span>\r\n              </div>\r\n                <span class=\"notification-icon\">\r\n                  <svg class=\"olymp-comments-post-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-comments-post-icon\"></use></svg>\r\n                </span>\r\n  \r\n              <div class=\"more\">\r\n                <svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n                <svg class=\"olymp-little-delete\"><use xlink:href=\"/assets/icons/icons.svg#olymp-little-delete\"></use></svg>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n  \r\n        </div>\r\n        <nav aria-label=\"Page navigation example\">\r\n          <ul class=\"pagination justify-content-center\">\r\n            <li class=\"page-item disabled\">\r\n              <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n            </li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1<div class=\"ripple-container\"><div class=\"ripple ripple-on ripple-out\" style=\"left: -10.3833px; top: -16.8333px; background-color: rgb(255, 255, 255); transform: scale(16.7857);\"></div></div></a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Next</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n  \r\n      <!-- Account Page Profile Sidebar -->\r\n\t    <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n        <app-account-sidebar-page-large></app-account-sidebar-page-large>\r\n      </div>\r\n      \r\n      <!-- ... end Account Page Profile Sidebar -->\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AccountPageNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageNotificationsComponent", function() { return AccountPageNotificationsComponent; });
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

var AccountPageNotificationsComponent = /** @class */ (function () {
    function AccountPageNotificationsComponent() {
    }
    AccountPageNotificationsComponent.prototype.ngOnInit = function () {
    };
    AccountPageNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-page-notifications',
            template: __webpack_require__(/*! ./account-page-notifications.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.html"),
            styles: [__webpack_require__(/*! ./account-page-notifications.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-page-notifications/account-page-notifications.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountPageNotificationsComponent);
    return AccountPageNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Your Account Personal Information -->\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Personal Information</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Business Name</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" value=\"Rock Band\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Email</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"email\" value=\"rockband@yourmail.com\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Since</label>\r\n\t\t\t\t\t\t\t\t\t<input name=\"birthday\" [(ngModel)]=\"model\" ngbDatepicker #birthdaypicker=\"ngbDatepicker\" [datepickerToggle]=\"birthdaypicker\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Website</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" value=\"rockband.com\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Phone Number</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Address</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" value=\"house 32, street 31, block X\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Country</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"PK\">Pakistan</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"AU\">Australia</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your State / Province</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"CA\">Capital</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"PU\">Punjab</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your City</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"IS\">Islamabad</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"LH\">Lahore</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Description</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"\">We are Rock Band from Lahore, now based in SIslamabad, come and listen to us play!</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Additional info</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"\">We are open for gigs all over the country. If you are interested, please contact us via our website or send us an email to rockaband@yourmail.com</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary btn-lg full-width\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg full-width\">Save all Changes</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- Account Page Sidebar -->\r\n\t\t<div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n\t\t\t<app-account-sidebar-page-large></app-account-sidebar-page-large>\r\n\t\t</div>\r\n\r\n\t\t<!-- ... end Account Page Sidebar -->\r\n\t\t\t\r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Your Account Personal Information -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AccountPagePersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPagePersonalInfoComponent", function() { return AccountPagePersonalInfoComponent; });
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

var AccountPagePersonalInfoComponent = /** @class */ (function () {
    function AccountPagePersonalInfoComponent() {
    }
    AccountPagePersonalInfoComponent.prototype.ngOnInit = function () {
        this.model = {
            "year": 1984,
            "month": 10,
            "day": 24
        };
    };
    AccountPagePersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-page-personal-info',
            template: __webpack_require__(/*! ./account-page-personal-info.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.html"),
            styles: [__webpack_require__(/*! ./account-page-personal-info.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-page-personal-info/account-page-personal-info.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountPagePersonalInfoComponent);
    return AccountPagePersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Your Account Personal Information -->\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block responsive-flex\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<div class=\"h6 title\">Raock Band’s Admins (3)</div>\r\n\t\t\t\t\t<form class=\"w-search\">\r\n\t\t\t\t\t\t<div class=\"form-group with-button\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Add Admin...\">\r\n\t\t\t\t\t\t\t<button>\r\n\t\t\t\t\t\t\t\tAdd\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<a href=\"#\" class=\"more\"><svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\" *ngFor=\"let admin of admins\">\r\n\t\t\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t\t\t<div class=\"friend-item\">\r\n\t\t\t\t\t\t\t<div class=\"friend-header-thumb\">\r\n\t\t\t\t\t\t\t\t<img [src]=\"admin.coverImg\" alt=\"friend\">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"friend-item-content\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"more\">\r\n\t\t\t\t\t\t\t\t\t<svg class=\"olymp-three-dots-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-three-dots-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"more-dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Remove Admin</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"friend-avatar\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"admin.img\" alt=\"author\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"author-content\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"h5 author-name\">{{admin.name}}</a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"country\">{{admin.location}}</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"swiper-container\" swiper>\r\n\t\t\t\t\t\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"friend-count\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{admin.counts.friends}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Friends</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{admin.counts.photos}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Photos</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"friend-count-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{admin.counts.videos}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">Videos</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control-block-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control bg-blue\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-happy-face-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-happy-face-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-control bg-purple\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"olymp-chat---messages-icon\"><use xlink:href=\"/assets/icons/icons.svg#olymp-chat---messages-icon\"></use></svg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"friend-about\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{admin.bio}}\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"friend-since\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Friends Since:</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">{{admin.friendsSince}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<!-- If we need pagination -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Settings</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Who Can Follow You?</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"selectpicker form-control\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"EO\">Everyone</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"NO\">No One</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Who Can View Your Posts</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"selectpicker form-control\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"US\">Followers Only</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"EO\">Everyone</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"description-toggle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"description-toggle-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">Notifications Sound</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>A sound will be played each time you receive a new activity notification</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"togglebutton\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"toggle\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description-toggle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"description-toggle-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">Notifications Email</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>We’ll send you an email to your account each time you receive a new activity notification</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"togglebutton\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"toggle\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description-toggle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"description-toggle-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">Chat Message Sound</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>A sound will be played each time you receive a new message on an inactive chat window</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"togglebutton\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"toggle\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-secondary btn-lg full-width\">Restore all Attributes</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-lg full-width\">Save all Changes</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- Account Page Sidebar -->\r\n\t\t<div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n\t\t\t<app-account-sidebar-page-large></app-account-sidebar-page-large>\r\n\t\t</div>\r\n\r\n\t\t<!-- ... end Account Page Sidebar -->\r\n\t\t\t\r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Your Account Personal Information -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AccountPageSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageSettingsComponent", function() { return AccountPageSettingsComponent; });
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

var AccountPageSettingsComponent = /** @class */ (function () {
    function AccountPageSettingsComponent() {
        this.admins = [];
    }
    AccountPageSettingsComponent.prototype.ngOnInit = function () {
        this.admins.push({ name: 'Wakas Ali', location: 'Lahore', img: '/assets/img/avatar16.jpg', coverImg: '/assets/img/friend9.jpg', counts: { friends: 52, photos: 240, videos: 16 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
        this.admins.push({ name: 'Maya Ahmad', location: 'Satgodha', img: '/assets/img/avatar17.jpg', coverImg: '/assets/img/friend10.jpg', counts: { friends: 52, photos: 240, videos: 16 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
        this.admins.push({ name: 'Noor Waqar', location: 'Islamabad', img: '/assets/img/avatar3.jpg', coverImg: '/assets/img/friend11.jpg', counts: { friends: 49, photos: 132, videos: 5 }, bio: 'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince: 'December 2014' });
    };
    AccountPageSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-page-settings',
            template: __webpack_require__(/*! ./account-page-settings.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.html"),
            styles: [__webpack_require__(/*! ./account-page-settings.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-page-settings/account-page-settings.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountPageSettingsComponent);
    return AccountPageSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-spacer header-spacer-small\"></div>\r\n\r\n<app-account-header></app-account-header>\r\n<app-account-sidebar-page></app-account-sidebar-page>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: AccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageComponent", function() { return AccountPageComponent; });
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

var AccountPageComponent = /** @class */ (function () {
    function AccountPageComponent() {
    }
    AccountPageComponent.prototype.ngOnInit = function () {
    };
    AccountPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-page',
            template: __webpack_require__(/*! ./account-page.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.html"),
            styles: [__webpack_require__(/*! ./account-page.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-page/account-page.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountPageComponent);
    return AccountPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Your Account Personal Information -->\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Personal Information</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">First Name</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" value=\"Hassan\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Email</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"email\" value=\"hassan@yourmail.com\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Birthday</label>\r\n\t\t\t\t\t\t\t\t\t<input name=\"birthday\" [(ngModel)]=\"model\" ngbDatepicker #birthdaypicker=\"ngbDatepicker\" [datepickerToggle]=\"birthdaypicker\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Last Name</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" type=\"text\" value=\"Ahmad\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Website</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"website\" [(ngModel)]=\"this.personalInfo.website\" placeholder=\"\" type=\"text\" value=\"abcagency.com\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Phone Number</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"phone\" [(ngModel)]=\"this.personalInfo.phone\" placeholder=\"\" type=\"text\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Country</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"country\" [(ngModel)]=\"this.personalInfo.country\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"PK\">Pakistan</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"AU\">Australia</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your State / Province</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"province\" [(ngModel)]=\"this.personalInfo.province\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"CA\">Cspital</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"PU\">Punjab</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your City</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"city\" [(ngModel)]=\"this.personalInfo.city\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"IS\">Islamabad</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"LH\">Lahore</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Write a little description about you</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"this.personalInfo.description\" placeholder=\"\">Hi, I’m Hassan, I’m 25 and I work as a Digital Designer for the  “abc” Agency in Pier 56</textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Gender</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"MA\">Male</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"FE\">Female</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Religious Preference</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"religion\" [(ngModel)]=\"this.personalInfo.religion\" placeholder=\"\" type=\"text\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Birthplace</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"birthplace\" [(ngModel)]=\"this.personalInfo.birthplace\" placeholder=\"\" type=\"text\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Your Occupation</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"occupation\" [(ngModel)]=\"this.personalInfo.occupation\" placeholder=\"\" type=\"text\" value=\"UI/UX Designer\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Status</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"status\" [(ngModel)]=\"this.personalInfo.status\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"MA\">Married</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"FE\">Not Married</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Political Preference</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"politicalincline\" [(ngModel)]=\"this.personalInfo.politicalincline\" placeholder=\"\" type=\"text\" value=\"Democrat\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary btn-lg full-width\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg full-width\" (click)=\"updatePersonalInfo()\">Save all Changes</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- Account Profile Sidebar -->\r\n\t\t<div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n\t\t\t<app-account-sidebar-large></app-account-sidebar-large>\r\n\t\t</div>\r\n\t\t\r\n\t\t<!-- ... end Account Profile Sidebar -->\r\n\t\t\t\r\n\t</div>\r\n</div>\r\n\r\n<!-- ... end Your Account Personal Information -->"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AccountPersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPersonalInfoComponent", function() { return AccountPersonalInfoComponent; });
/* harmony import */ var _shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/services/profile/personalInfo.service */ "./src/app/shared/services/profile/personalInfo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountPersonalInfoComponent = /** @class */ (function () {
    function AccountPersonalInfoComponent(personalInfoService) {
        this.personalInfoService = personalInfoService;
    }
    AccountPersonalInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personalInfo = {};
        this.model = {
            "year": 1984,
            "month": 10,
            "day": 24
        };
        this.personalInfoService.getPersonalInfo()
            .then(function (info) {
            if (info) {
                _this.personalInfo = info;
                _this.model = _this.personalInfo.birthday;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AccountPersonalInfoComponent.prototype.updatePersonalInfo = function () {
        this.personalInfo.birthday = this.model;
        this.personalInfoService.updatePersonalInfo(this.personalInfo)
            .then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AccountPersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-personal-info',
            template: __webpack_require__(/*! ./account-personal-info.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.html"),
            styles: [__webpack_require__(/*! ./account-personal-info.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-personal-info/account-personal-info.page.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_profile_personalInfo_service__WEBPACK_IMPORTED_MODULE_0__["PersonalInfoService"]])
    ], AccountPersonalInfoComponent);
    return AccountPersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12\">\r\n\t\t\t<div class=\"ui-block\">\r\n\t\t\t\t<div class=\"ui-block-title\">\r\n\t\t\t\t\t<h6 class=\"title\">Account Settings</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-block-content\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Who Can Friend You?</label>\r\n\t\t\t\t\t\t\t\t\t<select name=\"whoCanFriendYou\" [(ngModel)]=\"this.accountSettings.whoCanFriendYou\" class=\"selectpicker form-control\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"EO\">Everyone</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"NO\">No One</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-select\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Who Can View Your Posts</label>\r\n\t\t\t\t\t\t\t\t\t<select name=\"whoCanViewYourPosts\" [(ngModel)]=\"this.accountSettings.whoCanViewYourPosts\" class=\"selectpicker form-control\" size=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"US\">Friends Only</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"EO\">Everyone</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"description-toggle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"description-toggle-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">Notifications Sound</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>A sound will be played each time you receive a new activity notification</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"togglebutton\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"notificationSound\" [(ngModel)]=\"this.accountSettings.notificationSound\" checked=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"toggle\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description-toggle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"description-toggle-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">Notifications Email</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>We’ll send you an email to your account each time you receive a new activity notification</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"togglebutton\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"notificationEmail\" [(ngModel)]=\"this.accountSettings.notificationEmail\" checked=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"toggle\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"description-toggle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"description-toggle-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"h6\">Chat Message Sound</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>A sound will be played each time you receive a new message on an inactive chat window</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"togglebutton\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"chatSound\" [(ngModel)]=\"this.accountSettings.chatSound\" checked=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"toggle\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary btn-lg full-width\">Restore all Attributes</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg full-width\" (click)=\"updateAccountSettings()\">Save all Changes</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n    <!-- Account Profile Sidebar -->\r\n    <div class=\"col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none\">\r\n      <app-account-sidebar-large></app-account-sidebar-large>\r\n    </div>\r\n    \r\n    <!-- ... end Account Profile Sidebar -->\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AccountSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function() { return AccountSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_profile_accountSettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/services/profile/accountSettings.service */ "./src/app/shared/services/profile/accountSettings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent(accountSettingsService) {
        this.accountSettingsService = accountSettingsService;
        this.accountSettings = {
            whoCanViewYourPosts: "US",
            whoCanFriendYou: "EO",
            chatSound: true,
            notificationEmail: false,
            notificationSound: true
        };
    }
    AccountSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountSettingsService.getAccountSettings()
            .then(function (settings) {
            if (settings) {
                _this.accountSettings = settings;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AccountSettingsComponent.prototype.updateAccountSettings = function () {
        this.accountSettingsService.updateAccountSettings(this.accountSettings)
            .then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AccountSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__(/*! ./account-settings.page.html */ "./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.html"),
            styles: [__webpack_require__(/*! ./account-settings.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account-settings/account-settings.page.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_profile_accountSettings_service__WEBPACK_IMPORTED_MODULE_1__["AccountSettingsService"]])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account/account.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account/account.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-spacer header-spacer-small\"></div>\r\n\r\n<app-account-header></app-account-header>\r\n<app-account-sidebar></app-account-sidebar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account/account.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account/account.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/full-layout/modules/account/pages/account/account.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/full-layout/modules/account/pages/account/account.page.ts ***!
  \***********************************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
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

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/modules/full-layout/modules/account/pages/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/modules/full-layout/modules/account/pages/account/account.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/emoji.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/emoji.ts ***!
  \*****************************************/
/*! exports provided: EmojiModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiModules", function() { return EmojiModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_emoji_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-emoji-picker */ "./node_modules/ng-emoji-picker/index.js");
/* harmony import */ var ng_emoji_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_emoji_picker__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EmojiModules = /** @class */ (function () {
    function EmojiModules() {
    }
    EmojiModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            exports: [
                ng_emoji_picker__WEBPACK_IMPORTED_MODULE_1__["EmojiPickerModule"],
            ],
        })
    ], EmojiModules);
    return EmojiModules;
}());



/***/ }),

/***/ "./src/app/shared/services/profile/accountSettings.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/profile/accountSettings.service.ts ***!
  \********************************************************************/
/*! exports provided: AccountSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsService", function() { return AccountSettingsService; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.service */ "./src/app/shared/services/user.service.ts");
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




var AccountSettingsService = /** @class */ (function () {
    function AccountSettingsService(db, userService) {
        this.db = db;
        this.userService = userService;
        // For time error
        db.firestore.settings({ timestampsInSnapshots: true });
    }
    AccountSettingsService.prototype.getAccountSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser().then(function (user) {
                _this.db.doc("account_settings/" + user.uid).ref.get()
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
    AccountSettingsService.prototype.updateAccountSettings = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser().then(function (user) {
                var accountSettingsRef = _this.db.doc("account_settings/" + user.uid);
                accountSettingsRef.set(data, { merge: true })
                    .then(function (res) {
                    resolve('Settings successfully updated');
                })
                    .catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AccountSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], AccountSettingsService);
    return AccountSettingsService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-account-account-module.js.map