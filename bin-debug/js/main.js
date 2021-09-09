

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/6.ts":
/***/ (function(module, exports) {

var age6 = /** @class */ (function (_super) {
    __extends(age6, _super);
    function age6() {
        var _this = _super.call(this) || this;
        _this.names = [];
        _this.showing = [];
        //加载组内容
        var items = RES.getGroupByName("6岁");
        items.forEach(function (item) {
            console.log(item);
            var texture = RES.getRes(item.name);
            var bitmap = new egret.Bitmap(texture);
            bitmap.x = bitmap.y = 0;
            bitmap.width = 720;
            bitmap.height = 1280;
            _this.names.push(item.name);
            _this.showing.push(bitmap);
        });
        _this.progress0();
        return _this;
    }
    age6.prototype.getBitMapByName = function (name) {
        return this.showing[this.names.indexOf(name)];
    };
    age6.prototype.progress0 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.1_jpg");
        this.addChild(show1);
        show1.alpha = 1;
        var tween = egret.Tween.get(show1);
        tween.to({ "alpha": 1 }, 200);
        var event;
        event = function (e) {
            console.log(e);
            if (e.stageX > 541 && e.stagey > 990 && e.stageX < 641 && e.stageY < 1090) {
                console.log("button pushed!");
                _this.progress1();
            }
            else {
                show1.once(egret.TouchEvent.TOUCH_TAP, event, _this);
            }
        };
        show1.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
    };
    age6.prototype.progress1 = function () { };
    return age6;
}(egret.DisplayObjectContainer));
window["age6"] = age6;
__reflect(age6.prototype,"age6",[]); 


/***/ }),

/***/ "./src/AssetAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = /** @class */ (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
window["AssetAdapter"] = AssetAdapter;
__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]); 


/***/ }),

/***/ "./src/Chapter/Chapter3.ts":
/***/ (function(module, exports) {

var Chapter3 = /** @class */ (function (_super) {
    __extends(Chapter3, _super);
    function Chapter3() {
        return _super.call(this, "/resource/assets/age8/3.1.jpg") || this;
    }
    Chapter3.prototype.main = function () {
        this.background = "/resource/assets/age8/3.8.jpg";
        // ----------------------------------------------------------
        var scene = new Scene(this, {
            main: function () {
                var _this = this;
                var clock = Size.preferedSizeImage("/resource/assets/age8/3.2.png");
                Size.preferedCenter(clock);
                var tw = egret.Tween.get(clock, {
                    loop: true,
                });
                tw.to({ rotation: 3 }, 40)
                    .to({ rotation: -3 }, 40)
                    .to({ rotation: 3 }, 40);
                // 将动画添加到控制列表
                this.tweenTime.time(clock);
                clock.once(egret.TouchEvent.TOUCH_TAP, function () {
                    tw.pause();
                    var tw2 = egret.Tween.get(clock);
                    tw2
                        .to({ rotation: 0 }, 100)
                        .wait(1000)
                        .call(function () {
                        _this.nextScene("hori");
                    });
                }, this);
                this.addChild(clock);
            },
        });
        var scene1 = new Scene(this, {
            main: function () {
                var _this = this;
                // 完整 无人物
                var bgi = Size.preferedSizeImage("/resource/assets/age8/3.3.jpg");
                // 完整 有人物
                var mirror = Size.preferedSizeImage("/resource/assets/age8/3.4.jpg");
                // 三个梳子
                var comb1 = Size.preferedSizeImage("/resource/assets/age8/comb.1.png");
                var comb2 = Size.preferedSizeImage("/resource/assets/age8/comb.2.png");
                var comb3 = Size.preferedSizeImage("/resource/assets/age8/comb.3.png");
                comb3.x = 65;
                // 有人物 人物
                var staticPart1 = Size.preferedSizeImage("/resource/assets/age8/3.5.jpg");
                // 有人物 杯子
                var staticPart2 = Size.preferedSizeImage("/resource/assets/age8/box.png");
                var tidyGirl = Size.preferedSizeImage("/resource/assets/age8/3.6.jpg");
                var tidyGirl2 = Size.preferedSizeImage("/resource/assets/age8/3.7.jpg");
                // 移动容器
                var movable = new Movable();
                var combEvent = {
                    move: function (e) {
                        trigger.trigger(e);
                    },
                };
                // 进度条
                var ProgressBar = new Progress({
                    stage: {
                        total: 8,
                    },
                    event: [
                        {
                            progress: 100,
                            func: function () {
                                _this.addChild(tidyGirl);
                                // 移除被遮住的部分;
                                _this.removeChild(movable);
                                _this.removeChild(ProgressBar);
                                var tw = Transition.in(_this, tidyGirl2, {
                                    before: 1000,
                                })
                                    .wait(2000)
                                    .call(function () {
                                    _this.removeChild(tidyGirl);
                                    _this.removeChild(tidyGirl2);
                                    _this.removeTween("girl");
                                })
                                    .wait(2000)
                                    .call(function () {
                                    _this.nextScene();
                                });
                                _this.addTween({
                                    name: "girl",
                                    tw: tw,
                                });
                            },
                        },
                    ],
                });
                var trigger = new TriggerArea({
                    area: new egret.Rectangle(0, 482, 500, 370),
                    event: function (e, option) {
                        if (option.time > 30) {
                            trigger.resetTime();
                            ProgressBar.nextStage();
                        }
                    },
                });
                movable.addStaticChild({
                    name: "bgi-mirror",
                    entity: staticPart1,
                });
                // 给三把梳子移动能力
                movable.addMovableChild({
                    name: "comb1",
                    entity: comb1,
                    event: combEvent,
                });
                movable.addMovableChild({
                    name: "comb2",
                    entity: comb2,
                    event: combEvent,
                });
                movable.addMovableChild({
                    name: "comb3",
                    entity: comb3,
                    event: combEvent,
                });
                movable.addStaticChild({
                    name: "cup-box",
                    entity: staticPart2,
                }, {
                    through: true,
                });
                var decide = false;
                [comb1, comb2, comb3].map(function (comb, index) {
                    comb.once(egret.TouchEvent.TOUCH_BEGIN, function () {
                        var d = ["comb1", "comb2", "comb3"].splice(index, 1);
                        if (!decide) {
                            movable.removeMovableChild(d);
                            decide = true;
                            _this.addChild(ProgressBar);
                        }
                    }, _this);
                });
                // comb1.once(
                //   egret.TouchEvent.TOUCH_BEGIN,
                //   () => {
                //     if (!decide) {
                //       movable.removeMovableChild(["comb2", "comb3"]);
                //       decide = true;
                //       this.addChild(ProgressBar);
                //     }
                //   },
                //   this
                // );
                // comb2.once(
                //   egret.TouchEvent.TOUCH_BEGIN,
                //   () => {
                //     if (!decide) {
                //       movable.removeMovableChild(["comb1", "comb3"]);
                //       decide = true;
                //       this.addChild(ProgressBar);
                //     }
                //   },
                //   this
                // );
                // comb3.once(
                //   egret.TouchEvent.TOUCH_BEGIN,
                //   () => {
                //     if (!decide) {
                //       movable.removeMovableChild(["comb1", "comb2"]);
                //       decide = true;
                //       this.addChild(ProgressBar);
                //     }
                //   },
                //   this
                // );
                // index 1
                this.addChild(movable);
                this.addChild(bgi);
                // start
                this.starter = function () {
                    var tw = Transition.out(_this, bgi, {
                        before: 1500,
                    }).call(function () {
                        _this.removeTween("out");
                    });
                    _this.addTween({
                        name: "out",
                        tw: tw,
                    });
                };
            },
        });
        // const scene4 = new Scene(this, {
        //   main() {
        //     const GirlAlone = Size.preferedSizeImage(
        //       "/resource/assets/age8/3.9.jpg"
        //     );
        //     const Girls = Size.preferedSizeImage("/resource/assets/age8/3.11.jpg");
        //     const boy = Size.preferedSizeImage("/resource/assets/age8/boy.png");
        //     const coloredGirl = Size.preferedSizeImage(
        //       "/resource/assets/age8/3.15.jpg"
        //     );
        //     const coloredGirl2 = Size.preferedSizeImage(
        //       "/resource/assets/age8/3.16.jpg"
        //     );
        //     const friendText = Size.preferedSizeImage(
        //       "/resource/assets/age8/3.17.jpg"
        //     );
        //     boy.x = -250;
        //     const lineBind = new LineBind({
        //       binder: boy,
        //       limit: {
        //         left: -250,
        //         right: 0,
        //         offset: 0,
        //       },
        //       event: [
        //         {
        //           progress: 98,
        //           func: () => {
        //             this.addChild(coloredGirl);
        //             const tw = Transition.in(this, coloredGirl2, {
        //               before: 1000,
        //             })
        //               .wait(1000)
        //               .call(() => {
        //                 this.removeChild(Girls);
        //                 this.removeChild(lineBind);
        //                 this.removeChild(coloredGirl);
        //               });
        //           },
        //         },
        //       ],
        //     });
        //     coloredGirl2.once(
        //       egret.TouchEvent.TOUCH_TAP,
        //       () => {
        //         this.addChild(friendText);
        //         Transition.out(this, coloredGirl2)
        //           .wait(1000)
        //           .call(() => {
        //             this.nextScene("hori");
        //           });
        //       },
        //       this
        //     );
        //     this.addChild(GirlAlone);
        //     this.starter = () => {
        //       const tw1 = Transition.in(this, Girls, {
        //         before: 1500,
        //       })
        //         .wait(1000)
        //         .call(() => {
        //           this.removeChild(GirlAlone);
        //           Transition.in(this, boy);
        //           Transition.in(this, lineBind);
        //         });
        //       this.addTween({
        //         name: "open",
        //         tw: tw1,
        //       });
        //     };
        //   },
        // });
        // const scene5 = new Scene(this, {
        //   main() {
        //     const hands = Size.preferedSizeImage("/resource/assets/age8/3.18.jpg");
        //     const hands2 = Size.preferedSizeImage("/resource/assets/age8/3.19.jpg");
        //     const hands3 = Size.preferedSizeImage("/resource/assets/age8/3.20.jpg");
        //     this.addChild(hands);
        //     hands.once(
        //       egret.TouchEvent.TOUCH_TAP,
        //       () => {
        //         Transition.in(this, hands2).call(() => {
        //           hands2.once(
        //             egret.TouchEvent.TOUCH_TAP,
        //             () => {
        //               Transition.in(this, hands3).call(() => {
        //                 hands3.once(
        //                   egret.TouchEvent.TOUCH_TAP,
        //                   () => {
        //                     console.log("chapter over");
        //                   },
        //                   this
        //                 );
        //               });
        //             },
        //             this
        //           );
        //         });
        //       },
        //       this
        //     );
        //   },
        // });
        // 实际由 chapter 自动管理
        this.addScene(scene);
        this.addScene(scene1);
        // this.addScene(scene4);
        // this.addScene(scene5);
    };
    return Chapter3;
}(Chapter));
window["Chapter3"] = Chapter3;
__reflect(Chapter3.prototype,"Chapter3",[]); 


/***/ }),

/***/ "./src/Chapter/Chapter6.ts":
/***/ (function(module, exports) {

// class Chapter6 extends Chapter {
//   public main() {
//     const scene1 = new Scene(
//       "scene one",
//       {
//         last: 2000,
//         starter() {
//           const age16 = Size.preferedSizeImage(
//             "/resource/assets/age16/6.1.jpg"
//           );
//           this.addChild(age16);
//         },
//       },
//       this
//     );
//     const scene2 = new Scene(
//       "scene two",
//       {
//         main() {
//           // blank
//           const blank = Size.preferedSizeImage("/resource/assets/age8/3.8.jpg");
//           const girls = Size.preferedSizeImage(
//             "/resource/assets/age16/6.2.jpg"
//           );
//           const girls2 = Size.preferedSizeImage(
//             "/resource/assets/age16/6.3.jpg"
//           );
//           const girls3 = Size.preferedSizeImage(
//             "/resource/assets/age16/6.4.jpg"
//           );
//           girls2.alpha = 0;
//           girls3.alpha = 0;
//           const clock = new Clock({
//             init: {
//               hour: 4,
//               minute: 0,
//             },
//             event: {
//               toStop: (e: ClockEvent) => {
//                 if (e.now.hour < 3 || e.now.hour > 6) {
//                   return false;
//                 }
//                 return true;
//               },
//               onChange: (e: ClockEvent) => {
//                 switch (e.now.hour) {
//                   case 4: {
//                     if (e.now.minute > 8 && e.now.minute < 53) {
//                       girls.alpha = 1 - (e.now.minute - 8) / 45;
//                       girls2.alpha = (e.now.minute - 8) / 45;
//                     }
//                     break;
//                   }
//                   case 5: {
//                     if (e.now.minute > 8 && e.now.minute < 53) {
//                       girls2.alpha = 1 - (e.now.minute - 8) / 45;
//                       girls3.alpha = (e.now.minute - 8) / 45;
//                     }
//                     break;
//                   }
//                 }
//               },
//             },
//           });
//           const clockTap = () => {
//             if (girls3.alpha > 0.9) {
//               clock.end();
//               this.nextScene();
//             }
//           };
//           clock.addEventListener(egret.TouchEvent.TOUCH_TAP, clockTap, this);
//           this.addChild(blank);
//           this.addChild(girls);
//           this.addChild(girls2);
//           this.addChild(girls3);
//           this.addChild(clock);
//         },
//       },
//       this
//     );
//     const scene3 = new Scene(
//       "scene three",
//       {
//         main() {
//           const mirror = Size.preferedSizeImage(
//             "/resource/assets/age16/6.5.jpg"
//           );
//           const mirrorMask = Size.preferedSizeImage(
//             "/resource/assets/age16/6.6.png"
//           );
//           const girl = new eui.Image("/resource/assets/age16/6.7.png");
//           girl.x = 50;
//           girl.y = 430;
//           const drawArea = new DrawArea({
//             event: {
//               move: (e) => {
//                 trigger.trigger(e);
//               },
//             },
//           });
//           const trigger = new TriggerArea({
//             area: new egret.Rectangle(60, 430, 384, 558),
//             event: (e, op) => {
//               if (op.time > 250) {
//                 drawArea.end();
//                 girl.mask = null;
//                 girl.once(
//                   egret.TouchEvent.TOUCH_TAP,
//                   () => {
//                     this.nextScene();
//                   },
//                   this
//                 );
//               }
//             },
//           });
//           girl.mask = drawArea;
//           this.addChild(mirror);
//           this.addChild(mirrorMask);
//           this.addChild(girl);
//           this.addChild(drawArea);
//         },
//       },
//       this
//     );
//     const scene4 = new Scene(
//       "scene four",
//       {
//         main() {
//           const movable = new Movable();
//           const bgi = Size.preferedSizeImage("/resource/assets/age16/6.8.jpg");
//           const girl = Size.preferedSizeImage("/resource/assets/age16/6.9.png");
//           const girl2 = Size.preferedSizeImage(
//             "/resource/assets/age16/6.10.jpg"
//           );
//           const tear = Size.preferedSizeImage(
//             "/resource/assets/age16/tear.png"
//           );
//           const alone = Size.preferedSizeImage(
//             "/resource/assets/age16/6.12.jpg"
//           );
//           const mask = Size.preferedSizeImage(
//             "/resource/assets/age16/6.13.jpg"
//           );
//           const mask2 = Size.preferedSizeImage(
//             "/resource/assets/age16/6.14.jpg"
//           );
//           girl.x = 500;
//           movable.addStaticChild({
//             name: "bgi",
//             entity: bgi,
//           });
//           movable.addMovableChild({
//             name: "girl",
//             entity: girl,
//             special: {
//               direction: "hori",
//               pixelHitTest: false,
//               limit: {
//                 hori: [0, 500],
//               },
//             },
//             event: {
//               limit: (e, limitEvent) => {
//                 if (limitEvent.border === 0) {
//                   movable.removeMovableChild(["girl"]);
//                   Transition.in(this, girl2).call(() => {
//                     this.removeChild(movable);
//                   });
//                   Transition.in(this, tear).call(() => {
//                     egret.Tween.get(tear)
//                       .to(
//                         {
//                           y: 700,
//                         },
//                         3000
//                       )
//                       .call(() => {
//                         Transition.in(this, alone)
//                           .call(() => {
//                             this.removeChild(girl2);
//                             this.removeChild(tear);
//                           })
//                           .wait(500)
//                           .to(
//                             {
//                               scaleX: 1.4,
//                               scaleY: 1.4,
//                               y: -Size.height * 0.4,
//                             },
//                             500
//                           )
//                           .wait(1000)
//                           .call(() => {
//                             this.addChild(bgi);
//                             this.addChild(mask);
//                             Transition.out(this, mask, {
//                               before: 1000,
//                               during: 1500,
//                             })
//                               .wait(1000)
//                               .call(() => {
//                                 this.nextScene();
//                               });
//                           });
//                       });
//                   });
//                 }
//               },
//             },
//           });
//           this.addChild(movable);
//           // this.addChild(alone);
//         },
//       },
//       this
//     );
//     const scene5 = new Scene(
//       "scene five",
//       {
//         main() {
//           const girl = Size.preferedSizeImage(
//             "/resource/assets/age16/6.16.jpg"
//           );
//           const button = new eui.Image("/resource/assets/age16/6.17.png");
//           const add1 = new eui.Image("/resource/assets/age16/6.19.jpg");
//           button.x = 150;
//           button.pixelHitTest = true;
//           const chartBox = new ChartBox(() => {
//             this.addChild(add1);
//             this.removeChild(chartBox);
//           });
//           button.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             () => {
//               this.addChild(chartBox);
//               this.removeChild(girl);
//               this.removeChild(button);
//               setTimeout(() => {
//                 chartBox.start();
//               }, 1000);
//             },
//             this
//           );
//           this.addChild(girl);
//           this.addChild(button);
//           // 9
//         },
//       },
//       this
//     );
//     this.addScene(scene1);
//     this.addScene(scene2);
//     this.addScene(scene3);
//     this.addScene(scene4);
//     this.addScene(scene5);
//   }
// }
// /**
//  *
//  * 16 2-3s
//  *
//  * 向上滑动 钟表
//  *
//  * 钟表
//  *
//  * 擦镜子
//  */


/***/ }),

/***/ "./src/Chapter/Chapter8.ts":
/***/ (function(module, exports) {

// class Chapter8 extends Chapter {
//   main() {
//     const scene1 = new Scene(
//       "scene one",
//       {
//         last: 2000,
//         starter() {
//           const age16 = Size.preferedSizeImage(
//             "/resource/assets/age19/8.1.jpg"
//           );
//           const test = Size.preferedSizeImage(
//             "/resource/assets/age19/8.76.jpg"
//           );
//           const tw = Transition.in(this, test);
//           tw.setPaused(true);
//           setTimeout(() => {
//             tw.setPaused(false);
//           }, 1000);
//           // this.addChild(age16);
//         },
//       },
//       this
//     );
//     const scene2 = new Scene(
//       "scene two",
//       {
//         main() {
//           const bgi = Size.preferedSizeImage(
//             "/resource/assets/age19/black.jpg"
//           );
//           const animate = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: [
//               "8.2.jpg",
//               {
//                 sourse: "8.3.jpg",
//                 trigger: "tap",
//               },
//               {
//                 sourse: "8.4.jpg",
//                 trigger: "tap",
//               },
//               {
//                 sourse: "8.5.jpg",
//                 trigger: "tap",
//               },
//               {
//                 sourse: "8.6.jpg",
//                 trigger: "tap",
//               },
//               "8.7.jpg",
//             ],
//             event: {
//               over: {
//                 before: 1500,
//                 func: () => {
//                   this.nextScene("hori");
//                   animate.end(this);
//                 },
//               },
//             },
//             common: {
//               during: 1500,
//               out: 1000,
//             },
//           });
//           this.addChild(bgi);
//           this.addChild(animate);
//         },
//       },
//       this
//     );
//     const scene3 = new Scene(
//       "scene three",
//       {
//         main() {
//           const bgi = Size.preferedSizeImage(
//             "/resource/assets/age19/black.jpg"
//           );
//           const tree = new eui.Image("/resource/assets/age19/8.13.png");
//           const movable = new Movable();
//           const animate = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: ["8.8.jpg", "8.9.jpg", "8.10.jpg", "8.11.jpg", "8.12.jpg"],
//             event: {
//               over: {
//                 before: 1500,
//                 func: () => {
//                   movable.setMoveAbility("move", true);
//                 },
//               },
//             },
//             common: {
//               during: 1000,
//               out: 500,
//             },
//           });
//           const animate2 = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: [
//               "8.14.png",
//               "8.15.png",
//               "8.16.png",
//               "8.17.png",
//               "8.18.png",
//               "8.18.png",
//               "8.20.png",
//             ],
//             common: {
//               during: 200,
//               out: 200,
//             },
//             loop: true,
//           });
//           animate2.y = 1806 - 1280;
//           movable.addMovableChild({
//             name: "move",
//             entity: tree,
//             special: {
//               direction: "veri",
//               limit: {
//                 veri: [1280 - 1806, 0],
//               },
//               pixelHitTest: false,
//             },
//             event: {
//               move: (e, p) => {
//                 animate.y = p.y;
//                 animate2.y = p.y - 1280 + 1806;
//               },
//               limit: (e, p) => {
//                 if (p.border === 0) {
//                   animate.end(this);
//                   this.setChildIndex(animate2, 5);
//                   animate2.play();
//                   movable.setMoveAbility("move", false);
//                 }
//               },
//             },
//           });
//           movable.setMoveAbility("move", false);
//           animate2.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             () => {
//               console.log("click");
//             },
//             this
//           );
//           this.addChild(bgi);
//           this.addChild(animate);
//           this.addChild(animate2);
//           this.addChild(movable);
//           animate.start();
//           animate2.start();
//           animate2.pause();
//         },
//       },
//       this
//     );
//     const scene4 = new Scene(
//       "scene four",
//       {
//         main() {
//           const bgi = Size.preferedSizeImage("/resource/assets/age19/8.21.jpg");
//           const prefix = "/resource/assets/age19/";
//           let sleep = false;
//           let page = 0;
//           const lines = [
//             "8.22.png",
//             "8.23.png",
//             "",
//             "8.24.png",
//             // girl
//             "8.25.png",
//             "8.26.png",
//             "",
//             "8.27.png",
//             //
//             "8.28.png",
//             "8.29.png",
//             "8.30.png",
//           ];
//           const listen = () => {
//             const nextFrameTween = egret.Tween.get(
//               Size.preferedSizeImage("/resource/assets/age19/8.21.jpg")
//             );
//             if (!sleep && page < lines.length) {
//               sleep = true;
//               if (lines[page] !== "") {
//                 const entity = Size.preferedSizeImage(prefix + lines[page]);
//                 entity.addEventListener(
//                   egret.TouchEvent.TOUCH_TAP,
//                   listen,
//                   this
//                 );
//                 const tw = Transition.in(this, entity, { during: 500 }).call(
//                   () => {
//                     this.removeTween(["page" + page]);
//                   }
//                 );
//                 this.addTween({
//                   name: "page" + page,
//                   tw,
//                 });
//               } else {
//                 return;
//               }
//               // 下一张是男生的
//               if (page < lines.length - 1 && lines[page + 1] === "") {
//                 const entity = Size.preferedSizeImage(prefix + lines[page + 2]);
//                 entity.addEventListener(
//                   egret.TouchEvent.TOUCH_TAP,
//                   listen,
//                   this
//                 );
//                 const tw = Transition.in(this, entity, {
//                   before: 1500,
//                   during: 500,
//                 }).call(() => {
//                   this.removeTween(["page" + (page + 2)]);
//                 });
//                 this.addTween({
//                   name: "page" + (page + 1),
//                   tw,
//                 });
//                 page += 3;
//                 this.addTween({
//                   name: "sleep" + (page + 2),
//                   tw: nextFrameTween,
//                 });
//                 nextFrameTween.wait(2500).call(() => {
//                   sleep = false;
//                   this.removeTween(["sleep" + (page + 2)]);
//                 });
//               } else {
//                 page++;
//                 this.addTween({
//                   name: "sleep" + page,
//                   tw: nextFrameTween,
//                 });
//                 nextFrameTween.wait(800).call(() => {
//                   sleep = false;
//                   this.removeTween(["sleep" + page]);
//                 });
//               }
//             }
//           };
//           this.addChild(bgi);
//           bgi.once(egret.TouchEvent.TOUCH_TAP, listen, this);
//           this.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             () => {
//               if (page === lines.length && !sleep) {
//                 console.log("over");
//               }
//             },
//             this
//           );
//         },
//       },
//       this
//     );
//     const scene5 = new Scene(
//       "scene five",
//       {
//         main() {
//           const bgi = Size.preferedSizeImage("/resource/assets/age19/8.31.jpg");
//           const black = Size.preferedSizeImage(
//             "/resource/assets/age19/black.jpg"
//           );
//           const tear = Size.preferedSizeImage(
//             "/resource/assets/age19/8.36.jpg"
//           );
//           const rain = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: ["rain.1.png", "rain.2.png"],
//             common: {
//               during: 10,
//               out: 0,
//             },
//             loop: true,
//           });
//           const animate = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: [
//               "black.jpg",
//               "8.36.jpg",
//               "black.jpg",
//               "8.37.jpg",
//               "black.jpg",
//             ],
//             event: {
//               over: {
//                 before: 0,
//                 func: () => {
//                   console.log("next scene");
//                   this.nextScene();
//                 },
//               },
//             },
//             common: {
//               in: 500,
//               out: 1000,
//             },
//           });
//           const water = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: ["8.33.png", "8.34.png", "8.35.png"],
//             event: {
//               over: {
//                 before: 800,
//                 func: () => {
//                   Transition.out(this, water);
//                   // 自行车
//                   const tw = egret.Tween.get(bike)
//                     .wait(500)
//                     .to({ x: (-Size.width * 2) / 3 }, 2000)
//                     .call(() => {
//                       this.removeTween("bike");
//                       // 变黑动画
//                       this.addChild(animate);
//                       animate.start();
//                     });
//                   this.addTween({
//                     name: "bike",
//                     tw,
//                   });
//                 },
//               },
//             },
//             common: {
//               during: 10,
//               out: 0,
//             },
//           });
//           const bike = Size.preferedSizeImage(
//             "/resource/assets/age19/8.32.png"
//           );
//           this.addChild(bgi);
//           this.addChild(rain);
//           this.addChild(water);
//           this.addChild(bike);
//           // rain.start();
//           // water.start();
//         },
//       },
//       this
//     );
//     const scene6 = new Scene(
//       "scene six",
//       {
//         main() {
//           const black = Size.preferedSizeImage(
//             "/resource/assets/age19/black.jpg"
//           );
//           const drug = Size.preferedSizeImage(
//             "/resource/assets/age19/8.38.jpg"
//           );
//           const drug2 = Size.preferedSizeImage(
//             "/resource/assets/age19/8.39.jpg"
//           );
//           const text = Size.preferedSizeImage(
//             "/resource/assets/age19/8.40.png"
//           );
//           const LongComputer = new eui.Image("/resource/assets/age19/8.58.jpg");
//           const animatePc = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: ["8.41.jpg", "8.42.jpg"],
//             loop: true,
//             common: {
//               in: 1000,
//               out: 1000,
//             },
//           });
//           const cupAnimate = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: [
//               "8.46.jpg",
//               "8.47.jpg",
//               "8.48.jpg",
//               "8.49.jpg",
//               "8.50.jpg",
//               "8.51.jpg",
//               "8.52.jpg",
//               "8.53.jpg",
//               "8.54.jpg",
//             ],
//             common: {
//               in: 500,
//               during: 500,
//               out: 1000,
//             },
//           });
//           const movable = new Movable();
//           const animateError = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: ["8.55.jpg", "8.56.jpg", "8.57.jpg", movable],
//             common: {
//               in: 500,
//               during: 500,
//               out: 1000,
//             },
//           });
//           movable.addMovableChild({
//             name: "pc",
//             entity: LongComputer,
//             special: {
//               direction: "veri",
//               limit: {
//                 veri: [1280 - 2231, 0],
//               },
//             },
//             event: {
//               limit: () => {},
//             },
//           });
//           animatePc.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             () => {
//               console.log(animatePc.getRunCircleTime());
//               if (animatePc.getRunCircleTime() > 2) {
//                 this.removeChild(animatePc);
//                 egret.ExternalInterface.call("zd", "5");
//               }
//             },
//             this
//           );
//           const trigger = new TriggerArea({
//             area: new egret.Rectangle(71, 335, 70, 110),
//             event: () => {
//               this.addChild(drug2);
//               this.addTween({
//                 name: "text",
//                 tw: Transition.in(this, text, {
//                   before: 1000,
//                 })
//                   .wait(1500)
//                   .call(() => {
//                     this.removeTween("text");
//                     this.removeChild(drug2);
//                     this.removeChild(text);
//                     // 文字出现之后的动画
//                     this.addChild(animatePc);
//                     animatePc.start();
//                   }),
//               });
//               this.removeChild(drug);
//             },
//           });
//           drug.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             (e) => {
//               trigger.trigger(e);
//             },
//             this
//           );
//           this.addChild(black);
//           // this.addChild(drug);
//           this.addChild(animateError);
//           animateError.start();
//         },
//       },
//       this
//     );
//     const scene7 = new Scene(
//       "scene seven",
//       {
//         main() {
//           const bgi = Size.preferedSizeImage("/resource/assets/age19/8.59.jpg");
//           const prefix = "/resource/assets/age19/";
//           const black = Size.preferedSizeImage(prefix + "black.jpg");
//           const li = Size.preferedSizeImage(prefix + "8.77.png");
//           const last = Size.preferedSizeImage(prefix + "8.78.png");
//           li.once(
//             egret.TouchEvent.TOUCH_TAP,
//             () => {
//               this.addChild(last);
//             },
//             this
//           );
//           last.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             () => {
//               this.nextScene();
//             },
//             this
//           );
//           let sleep = false;
//           let page = 0;
//           const lines = [
//             "8.60.png",
//             "8.61.png",
//             "8.62.png",
//             "8.63.png",
//             "",
//             "8.64.png",
//             // girl
//             "8.65.png",
//             "8.66.png",
//           ];
//           const listen = () => {
//             const nextFrameTween = egret.Tween.get(
//               Size.preferedSizeImage("/resource/assets/age19/8.21.jpg")
//             );
//             if (!sleep && page < lines.length) {
//               sleep = true;
//               if (lines[page] !== "") {
//                 const entity = Size.preferedSizeImage(prefix + lines[page]);
//                 entity.addEventListener(
//                   egret.TouchEvent.TOUCH_TAP,
//                   listen,
//                   this
//                 );
//                 const tw = Transition.in(this, entity, {
//                   during: 500,
//                 }).call(() => {
//                   this.removeTween(["page" + page]);
//                 });
//                 this.addTween({
//                   name: "page" + page,
//                   tw,
//                 });
//               } else {
//                 return;
//               }
//               // 下一张是男生的
//               if (page < lines.length - 1 && lines[page + 1] === "") {
//                 const entity = Size.preferedSizeImage(prefix + lines[page + 2]);
//                 entity.addEventListener(
//                   egret.TouchEvent.TOUCH_TAP,
//                   listen,
//                   this
//                 );
//                 const tw = Transition.in(this, black, {
//                   before: 1500,
//                   during: 500,
//                 }).call(() => {
//                   this.addChildAt(entity, 3);
//                   this.removeTween(["page" + (page + 1)]);
//                   this.addTween({
//                     name: "removeBlack",
//                     tw: Transition.out(this, black, { before: 1500 }).call(
//                       () => {
//                         this.removeTween("removeBlack");
//                       }
//                     ),
//                   });
//                 });
//                 this.addTween({
//                   name: "page" + (page + 1),
//                   tw,
//                 });
//                 page += 3;
//                 this.addTween({
//                   name: "sleep" + (page + 2),
//                   tw: nextFrameTween,
//                 });
//                 nextFrameTween.wait(3500).call(() => {
//                   sleep = false;
//                   this.removeTween(["sleep" + (page + 2)]);
//                 });
//               } else {
//                 page++;
//                 this.addTween({
//                   name: "sleep" + page,
//                   tw: nextFrameTween,
//                 });
//                 nextFrameTween.wait(800).call(() => {
//                   sleep = false;
//                   this.removeTween(["sleep" + page]);
//                 });
//               }
//             }
//           };
//           const animate = new Animate({
//             prefix: "/resource/assets/age19/",
//             frames: [
//               "8.67.1.jpg",
//               "8.67.jpg",
//               "8.68.jpg",
//               "8.69.jpg",
//               "8.70.jpg",
//               "8.71.jpg",
//               "8.72.jpg",
//               "8.73.jpg",
//               "8.74.jpg",
//               "8.75.jpg",
//               "8.76.jpg",
//               "black.jpg",
//             ],
//             event: {
//               over: {
//                 before: 0,
//                 func: () => {
//                   this.addChild(li);
//                   this.removeChild(black);
//                   this.removeChild(animate);
//                 },
//               },
//             },
//             common: {
//               in: 500,
//               during: 500,
//               out: 5000,
//             },
//           });
//           this.addChild(bgi);
//           bgi.once(egret.TouchEvent.TOUCH_TAP, listen, this);
//           this.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             () => {
//               if (page === lines.length && !sleep) {
//                 this.addChild(black);
//                 this.addChild(animate);
//                 animate.start();
//                 sleep = true;
//               }
//             },
//             this
//           );
//         },
//       },
//       this
//     );
//     const scene8 = new Scene(
//       "scene eight",
//       {
//         main() {
//           const eat = Size.preferedSizeImage("/resource/assets/age19/8.79.jpg");
//           const food = new eui.Image("/resource/assets/age19/8.80.jpg");
//           const text = new eui.Image("/resource/assets/age19/8.81.jpg");
//           const hand = new eui.Image("/resource/assets/age19/8.82.png");
//           hand.pixelHitTest = true;
//           const hand2 = new eui.Image("/resource/assets/age19/8.83.png");
//           const hand3 = new eui.Image("/resource/assets/age19/8.84.png");
//           const trigger = new TriggerArea({
//             area: new egret.Rectangle(128, 789, 400, 220),
//             event: (e) => {
//               console.log(e);
//             },
//           });
//           const trigger2 = new TriggerArea({
//             area: new egret.Rectangle(11, 475, 400, 800),
//             event: (e) => {
//               this.addChild(hand3);
//             },
//           });
//           const movavle = new Movable();
//           movavle.addMovableChild({
//             name: "food",
//             entity: food,
//             special: {
//               direction: "veri",
//               limit: {
//                 veri: [1280 - 1806, 0],
//               },
//             },
//             event: {
//               limit: () => {
//                 hand.x = 100;
//                 Transition.in(this, text).call(() => {
//                   Transition.in(this, hand, { before: 1000, index: 10 })
//                     .to({ x: 0 }, 1000)
//                     .call(() => {
//                       this.addChildAt(hand2, 1);
//                       console.log(this);
//                     });
//                 });
//                 movavle.end();
//                 this.removeChild(movavle);
//               },
//             },
//           });
//           eat.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             (e) => {
//               trigger.trigger(e);
//             },
//             this
//           );
//           hand2.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             (e) => {
//               trigger2.trigger(e);
//             },
//             this
//           );
//           this.addChild(movavle);
//         },
//       },
//       this
//     );
//     // this.addScene(scene1);
//     // this.addScene(scene2);
//     // this.addScene(scene3);
//     // this.addScene(scene4);
//     // this.addScene(scene5);
//     // this.addScene(scene6);
//     // this.addScene(scene7);
//     // this.addScene(scene8);
//   }
// }


/***/ }),

/***/ "./src/Component/Chapter.ts":
/***/ (function(module, exports) {

/**
 * 章节
 */
var Chapter = /** @class */ (function (_super) {
    __extends(Chapter, _super);
    function Chapter(age) {
        var _this = _super.call(this) || this;
        // 背景
        _this.background = "";
        _this.scenesList = [];
        _this.age = age;
        _this.tweenTime = new TweenTime();
        _this.timeTick = new TimeTick();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddedToStage, _this);
        return _this;
    }
    Chapter.prototype.onAddedToStage = function () {
        egret.startTick(this.timeTick.update, this.timeTick);
        var age = Size.preferedSizeImage(this.age);
        this.addScene(new Scene(this, {
            last: 2000,
            starter: function () {
                this.addChild(age);
            },
        }));
        this.main();
        if (this.background !== "") {
            var bgi = new eui.Image();
            Size.preferedSize(bgi);
            bgi.source = this.background;
            this.addChildAt(bgi, 0);
        }
        this.play();
    };
    /**
     * 场景
     *
     * 在画面发生 大幅度变化的时候 将 画面元素分为两个场景
     *
     * 方便对 暂停元素进行管理， 方便进行转场转换
     *
     */
    Chapter.prototype.addScene = function (scene) {
        this.scenesList.push(scene);
    };
    /**
     * 暂停
     */
    Chapter.prototype.pause = function () {
        this.timeTick.stop();
        if (this.scenesList.length) {
            this.scenesList[0].pause();
        }
        this.tweenTime.pause();
    };
    /**
     * 播放
     */
    Chapter.prototype.play = function () {
        this.timeTick.start();
        if (this.scenesList.length) {
            this.scenesList[0].start();
        }
        this.tweenTime.play();
    };
    Chapter.prototype.main = function () { };
    Chapter.prototype.nextScene = function (the_scene, transition) {
        this.scenesList.shift();
        if (this.scenesList.length) {
            switch (transition) {
                case undefined: {
                    this.scenesList[0].start();
                    the_scene.end();
                    break;
                }
                case "hori": {
                    var tw = Transition.sceneHori(the_scene, this.scenesList[0]);
                    break;
                }
                case "veri": {
                    var tw = Transition.sceneVeri(the_scene, this.scenesList[0]);
                    break;
                }
            }
        }
        else {
            console.log("Chapter is over");
        }
    };
    return Chapter;
}(egret.DisplayObjectContainer));
window["Chapter"] = Chapter;
__reflect(Chapter.prototype,"Chapter",[]); 


/***/ }),

/***/ "./src/Component/Movable.ts":
/***/ (function(module, exports) {

var Movable = /** @class */ (function (_super) {
    __extends(Movable, _super);
    function Movable() {
        var _this = _super.call(this) || this;
        _this.movableChildren = [];
        _this.upperLayer = [];
        _this._distance = new egret.Point();
        Size.preferedSize(_this);
        return _this;
    }
    Movable.prototype.addMovableChild = function (movableChild) {
        var _a;
        this.addChild(movableChild.entity);
        if (movableChild.entity instanceof eui.Image) {
            if (((_a = movableChild === null || movableChild === void 0 ? void 0 : movableChild.special) === null || _a === void 0 ? void 0 : _a.pixelHitTest) === false) {
                movableChild.entity.pixelHitTest = false;
            }
            else {
                movableChild.entity.pixelHitTest = true;
            }
        }
        movableChild.entity.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        movableChild.entity.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this.movableChildren.push(__assign(__assign({}, movableChild), { code: movableChild.entity.hashCode }));
    };
    Movable.prototype.removeMovableChild = function (removename) {
        var _this = this;
        var names = [];
        if (typeof removename === "string") {
            names.push(removename);
        }
        else if (typeof removename === "object") {
            names = removename;
        }
        names.map(function (name) {
            var removeChild = _this.movableChildren.filter(function (c) { return c.name === name; })[0];
            if (removeChild === undefined) {
                return;
            }
            // 移除监听
            removeChild.entity.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.mouseDown, _this);
            removeChild.entity.removeEventListener(egret.TouchEvent.TOUCH_END, _this.mouseUp, _this);
        });
        this.movableChildren = this.movableChildren.filter(function (c) { return names.indexOf(c.name) === -1; });
    };
    Movable.prototype.setMoveAbility = function (name, able) {
        var _this = this;
        var names = [];
        if (typeof name === "string") {
            names.push(name);
        }
        else if (typeof name === "object") {
            names = name;
        }
        names.map(function (name) {
            var child = _this.movableChildren.filter(function (c) { return c.name === name; })[0];
            if (child === undefined) {
                return;
            }
            child.able = able;
        });
    };
    Movable.prototype.addStaticChild = function (staticChild, options) {
        this.upperLayer.push(staticChild);
        if (options === null || options === void 0 ? void 0 : options.through) {
            staticChild.entity.pixelHitTest = options.through;
        }
        if (options === null || options === void 0 ? void 0 : options.index) {
            this.addChildAt(staticChild.entity, options.index);
        }
        else {
            this.addChild(staticChild.entity);
        }
    };
    Movable.prototype.limitPosition = function (p, limit) {
        if (limit === undefined || (p >= limit[0] && p <= limit[1])) {
            return {
                p: p,
                limit: 0,
            };
        }
        else if (p < limit[0]) {
            return {
                p: limit[0],
                limit: 1,
            };
        }
        else if (p > limit[1]) {
            return {
                p: limit[1],
                limit: 2,
            };
        }
    };
    Movable.prototype.mouseUp = function (event) {
        var _this = this;
        var _a;
        var movableChild = this.movableChildren.filter(function (c) { return c.code === _this.moveCode; })[0];
        if ((_a = movableChild === null || movableChild === void 0 ? void 0 : movableChild.event) === null || _a === void 0 ? void 0 : _a.up) {
            movableChild.event.up(event);
        }
        this.moveCode = 0;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Movable.prototype.mouseMove = function (event) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var movableChild = this.movableChildren.filter(function (c) { return c.code === _this.moveCode; })[0];
        if (movableChild === undefined || movableChild.able === false) {
            return;
        }
        var Px = this.limitPosition(event.stageX - this._distance.x, (_b = (_a = movableChild === null || movableChild === void 0 ? void 0 : movableChild.special) === null || _a === void 0 ? void 0 : _a.limit) === null || _b === void 0 ? void 0 : _b.hori);
        var Py = this.limitPosition(event.stageY - this._distance.y, (_d = (_c = movableChild === null || movableChild === void 0 ? void 0 : movableChild.special) === null || _c === void 0 ? void 0 : _c.limit) === null || _d === void 0 ? void 0 : _d.veri);
        if ((_e = movableChild === null || movableChild === void 0 ? void 0 : movableChild.event) === null || _e === void 0 ? void 0 : _e.move) {
            // 执行额外事件， 如果事件返回 false 终止后续事件;
            var flag = movableChild.event.move(event, {
                x: Px.p,
                y: Py.p,
            });
            if (flag === false) {
                return;
            }
        }
        if (Px.limit && ((_f = movableChild === null || movableChild === void 0 ? void 0 : movableChild.event) === null || _f === void 0 ? void 0 : _f.limit)) {
            (_g = movableChild === null || movableChild === void 0 ? void 0 : movableChild.event) === null || _g === void 0 ? void 0 : _g.limit(event, {
                limit: (_j = (_h = movableChild === null || movableChild === void 0 ? void 0 : movableChild.special) === null || _h === void 0 ? void 0 : _h.limit) === null || _j === void 0 ? void 0 : _j.hori,
                direction: "x",
                border: Px.limit - 1,
            });
        }
        if (Py.limit && ((_k = movableChild === null || movableChild === void 0 ? void 0 : movableChild.event) === null || _k === void 0 ? void 0 : _k.limit)) {
            (_l = movableChild === null || movableChild === void 0 ? void 0 : movableChild.event) === null || _l === void 0 ? void 0 : _l.limit(event, {
                limit: (_o = (_m = movableChild === null || movableChild === void 0 ? void 0 : movableChild.special) === null || _m === void 0 ? void 0 : _m.limit) === null || _o === void 0 ? void 0 : _o.veri,
                direction: "y",
                border: Py.limit - 1,
            });
        }
        if (this.moveCode >= 1) {
            if (movableChild === null || movableChild === void 0 ? void 0 : movableChild.special) {
                if (((_p = movableChild === null || movableChild === void 0 ? void 0 : movableChild.special) === null || _p === void 0 ? void 0 : _p.direction) === "hori") {
                    movableChild.entity.x = Px.p;
                }
                else if (((_q = movableChild === null || movableChild === void 0 ? void 0 : movableChild.special) === null || _q === void 0 ? void 0 : _q.direction) === "veri") {
                    movableChild.entity.y = Py.p;
                }
            }
            else {
                movableChild.entity.x = Px.p;
                movableChild.entity.y = Py.p;
            }
        }
    };
    Movable.prototype.mouseDown = function (event) {
        var _a;
        var movableChild = this.movableChildren.filter(function (c) { return c.code === event.target.hashCode; })[0];
        if (movableChild === undefined || movableChild.able === false) {
            return;
        }
        // 事件存在
        if ((_a = movableChild === null || movableChild === void 0 ? void 0 : movableChild.event) === null || _a === void 0 ? void 0 : _a.down) {
            // 执行额外事件， 如果事件返回 false 终止后续事件;
            var flag = movableChild.event.down(event);
            if (flag === false) {
                return;
            }
        }
        this.moveCode = event.target.hashCode;
        // stage X Y 整个画布
        this._distance.x = event.stageX - movableChild.entity.x;
        this._distance.y = event.stageY - movableChild.entity.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Movable.prototype.end = function () {
        this.moveCode = 0;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        this.removeChildren();
    };
    return Movable;
}(egret.DisplayObjectContainer));
window["Movable"] = Movable;
__reflect(Movable.prototype,"Movable",[]); 


/***/ }),

/***/ "./src/Component/Progress.ts":
/***/ (function(module, exports) {

var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress(options) {
        var _this = _super.call(this) || this;
        _this.progress = 0;
        _this.event = [];
        var progressBar1 = new eui.Image("/resource/assets/component/Progress/progress bar.png");
        var progressBar2 = new eui.Image("/resource/assets/component/Progress/progress bar.4.png");
        var op = __assign({ position: {
                x: Size.centerX(464),
                y: 1050,
            }, stage: {
                total: 0,
                current: 0,
                progress: 0,
            } }, options);
        _this.width = 464;
        _this.height = 51;
        _this.x = op.position.x;
        _this.y = op.position.y;
        _this.totalStage = op.stage.total || 0;
        _this.currentStage = op.stage.current || 0;
        _this.progressEntity = progressBar2;
        _this.event = options.event || [];
        if (op.stage.progress !== undefined) {
            _this.progress = op.stage.progress;
            _this.updateProgress(_this.progress, true);
        }
        else if (_this.currentStage !== 0) {
            _this.updateProgress((_this.currentStage / _this.totalStage) * 100, true);
        }
        else {
            _this.updateProgress(0, true);
        }
        // 内置进度条的遮罩层 不知道为啥就一个 rectangle 没用
        var square = new egret.Shape();
        square.graphics.beginFill(0xff0000);
        square.graphics.drawRect(10, 8, 440, 32);
        square.graphics.endFill();
        progressBar2.mask = square;
        _this.addChild(progressBar1);
        _this.addChild(progressBar2);
        _this.addChild(square);
        return _this;
    }
    Progress.prototype.updateProgress = function (now, imme) {
        this.progress = now;
        this.EventAction(now);
        if (imme) {
            this.progressEntity.x = (now / 100 - 1) * this.width;
        }
        else {
            var tw = egret.Tween.get(this.progressEntity);
            tw.to({
                x: (now / 100 - 1) * this.width,
            }, 500);
        }
    };
    Progress.prototype.nextStage = function () {
        if (this.currentStage < this.totalStage) {
            this.currentStage++;
            // 触发事件
            this.updateProgress((100 * this.currentStage) / this.totalStage);
        }
    };
    Progress.prototype.EventAction = function (progress) {
        var todoEvent = this.event.filter(function (event) {
            // 触发了的过滤
            if (event.hasTriggerd) {
                return false;
            }
            // 进度不够过滤
            if (event.progress > progress) {
                return false;
            }
            return true;
        });
        todoEvent.map(function (e) {
            e.hasTriggerd = true;
            e.func();
        });
    };
    Progress.prototype.resetStage = function () {
        this.currentStage = 0;
        this.updateProgress(0);
    };
    return Progress;
}(egret.DisplayObjectContainer));
window["Progress"] = Progress;
__reflect(Progress.prototype,"Progress",[]); 


/***/ }),

/***/ "./src/LayerInterface.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/6.ts");
__webpack_require__("./src/AssetAdapter.ts");
__webpack_require__("./src/Component/Chapter.ts");
__webpack_require__("./src/Chapter/Chapter3.ts");
__webpack_require__("./src/Chapter/Chapter6.ts");
__webpack_require__("./src/Chapter/Chapter8.ts");
__webpack_require__("./src/Component/Movable.ts");
__webpack_require__("./src/Component/Progress.ts");
__webpack_require__("./src/LayerInterface.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/ThemeAdapter.ts");
__webpack_require__("./src/basicClass/Animate.ts");
__webpack_require__("./src/basicClass/ChartBox.ts");
__webpack_require__("./src/basicClass/Clock.ts");
__webpack_require__("./src/basicClass/DrawArea.ts");
__webpack_require__("./src/basicClass/LineBind.ts");
__webpack_require__("./src/basicClass/Scene.ts");
__webpack_require__("./src/basicClass/Size.ts");
__webpack_require__("./src/basicClass/TimeTick.ts");
__webpack_require__("./src/basicClass/Transition.ts");
__webpack_require__("./src/basicClass/TriggerArea.ts");
__webpack_require__("./src/basicClass/TweenTime.ts");
__webpack_require__("./src/basicClass/interface.ts");
__webpack_require__("./src/config.ts");
__webpack_require__("./src/layers/Layers.ts");
__webpack_require__("./src/layers/TestPause.ts");
__webpack_require__("./src/layers/VideoTest.ts");
__webpack_require__("./src/layers/age6.ts");
// //////////////////////////////////////////////////////////////////////////////////////
// //
// //  Copyright (c) 2014-present, Egret Technology.
// //  All rights reserved.
// //  Redistribution and use in source and binary forms, with or without
// //  modification, are permitted provided that the following conditions are met:
// //
// //     * Redistributions of source code must retain the above copyright
// //       notice, this list of conditions and the following disclaimer.
// //     * Redistributions in binary form must reproduce the above copyright
// //       notice, this list of conditions and the following disclaimer in the
// //       documentation and/or other materials provided with the distribution.
// //     * Neither the name of the Egret nor the
// //       names of its contributors may be used to endorse or promote products
// //       derived from this software without specific prior written permission.
// //
// //  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
// //  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
// //  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// //  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// //  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// //  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
// //  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
// //  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// //  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// //  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// //////////////////////////////////////////////////////////////////////////////////////
var Main2 = /** @class */ (function (_super) {
    __extends(Main2, _super);
    function Main2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        _this.chapternow = 0;
        return _this;
    }
    Main2.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    // 运行游戏
    Main2.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //加载资源
                    return [4 /*yield*/, this.loadResource()];
                    case 1:
                        //加载资源
                        _a.sent();
                        this.loadChapters();
                        //从资源中加载场景
                        //this.createGameScene();
                        this.showChapter();
                        //开始动画
                        // const result = await RES.getResAsync("description_json")
                        // this.startAnimation(result);
                        //登录
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        //开始动画
                        // const result = await RES.getResAsync("description_json")
                        // this.startAnimation(result);
                        //登录
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main2.prototype.loadChapters = function () {
        var _this = this;
        [new age6(), new age6()].forEach(function (layer) {
            _this.children.push(layer);
        });
    };
    Main2.prototype.nextChapter = function () {
        console.log("End of The" + this, this.chapternow + " Chapter!");
        this.chapternow++;
        console.log("Now is opening the " +
            this.chapternow +
            "th layer, and the length of the layers is " +
            this.children.length);
        if (this.chapternow < this.children.length) {
            this.showChapter();
        }
        else {
            console.log("the end of the game!");
        }
    };
    // 按章节显示
    Main2.prototype.showChapter = function () {
        console.log("showing the " + this.chapternow + "th layer!");
        //清空
        this.removeChildren();
        var pause = new TestPause();
        this.addChild(pause);
        pause.show(null);
        this.addChildAt(this.children[this.chapternow], 0);
        this.children[this.chapternow].show(this.nextChapter, this);
    };
    //加载资源
    Main2.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        //加载数据
                        //加载config文件
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        //加载数据
                        //加载config文件
                        _a.sent();
                        //加载皮肤主题配置文件，不太重要后期考虑删掉
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        //加载皮肤主题配置文件，不太重要后期考虑删掉
                        _a.sent();
                        //等待加载完成，在LoadingView中进行显示
                        return [4 /*yield*/, RES.loadGroup("暂停", 0, loadingView)];
                    case 3:
                        //等待加载完成，在LoadingView中进行显示
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("全局", 0, loadingView)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("6岁", 0, loadingView)];
                    case 5:
                        _a.sent();
                        //加载完成则去除loadingView，准备进入
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Main2.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main2.prototype.createGameScene = function () {
        var sky = this.createBitmapByName("bg_jpg");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);
        var icon = this.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;
        var line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);
        var colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret 你好啊白鹭引擎";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        this.addChild(colorLabel);
        var textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;
        var button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main2.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main2.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ alpha: 1 }, 200);
            tw.wait(2000);
            tw.to({ alpha: 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main2.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return Main2;
}(eui.UILayer));
window["Main2"] = Main2;
__reflect(Main2.prototype,"Main2",[]); 
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.main();
        return _this;
    }
    Main.prototype.main = function () {
        var c9 = new Chapter3();
        this.addChild(c9);
    };
    return Main;
}(eui.UILayer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/ThemeAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = /** @class */ (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dirPath = url.replace(".exml", "_EUI.json");
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
window["ThemeAdapter"] = ThemeAdapter;
__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]); 


/***/ }),

/***/ "./src/basicClass/Animate.ts":
/***/ (function(module, exports) {

var Animate = /** @class */ (function (_super) {
    __extends(Animate, _super);
    function Animate(props) {
        var _this = _super.call(this) || this;
        _this.frames = [];
        /** 动画播放次数 */
        _this.runCircleTime = 0;
        _this.toRun = [];
        _this.event = {};
        _this.currentFrame = {
            index: -1,
            entity: null,
        };
        _this.frames = props.frames;
        _this.timeTick = new TimeTick();
        _this.prefix = props.prefix;
        _this.common = __assign({ before: 0, in: 500, during: 1500, out: 500, after: 0 }, props === null || props === void 0 ? void 0 : props.common);
        _this.loop = props.loop;
        _this.event = props === null || props === void 0 ? void 0 : props.event;
        return _this;
    }
    /** 获取动画播放次数 */
    Animate.prototype.getRunCircleTime = function () {
        return this.runCircleTime;
    };
    Animate.prototype.setFrames = function (frames) {
        this.frames = frames;
    };
    Animate.prototype.everTick = function (timeStemp) {
        var _this = this;
        this.timeTick.update(timeStemp);
        var run = this.toRun.filter(function (run) { return run.timeStemp <= _this.timeTick.getPass(); });
        this.toRun = this.toRun.filter(function (run) { return run.timeStemp > _this.timeTick.getPass(); });
        run.map(function (r) {
            r.func();
        });
        return false;
    };
    Animate.prototype.nextFrame = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        if (this.currentFrame.index === this.frames.length) {
            return;
        }
        if (this.currentFrame.index !== -1 ||
            (this.loop === true && this.currentFrame.entity !== null)) {
            var nowFrame_1 = this.frames[this.currentFrame.index];
            var entity_1 = this.currentFrame.entity;
            // 上一帧淡出
            this.addToRun({
                frame: nowFrame_1,
                entity: entity_1,
                func: function () {
                    var _a, _b, _c, _d, _e, _f;
                    Transition.out(_this, entity_1, {
                        during: typeof nowFrame_1 === "string" ||
                            nowFrame_1 instanceof egret.DisplayObject ||
                            ((_a = nowFrame_1 === null || nowFrame_1 === void 0 ? void 0 : nowFrame_1.common) === null || _a === void 0 ? void 0 : _a.during) === undefined
                            ? (_b = _this.common) === null || _b === void 0 ? void 0 : _b.out : (_c = nowFrame_1 === null || nowFrame_1 === void 0 ? void 0 : nowFrame_1.common) === null || _c === void 0 ? void 0 : _c.out,
                        after: typeof nowFrame_1 === "string" ||
                            nowFrame_1 instanceof egret.DisplayObject ||
                            ((_d = nowFrame_1 === null || nowFrame_1 === void 0 ? void 0 : nowFrame_1.common) === null || _d === void 0 ? void 0 : _d.after) === undefined
                            ? (_e = _this.common) === null || _e === void 0 ? void 0 : _e.after : (_f = nowFrame_1 === null || nowFrame_1 === void 0 ? void 0 : nowFrame_1.common) === null || _f === void 0 ? void 0 : _f.after,
                    });
                },
                timeStemp: this.timeTick.getPass(),
            });
        }
        var nextFrame = this.frames[this.currentFrame.index + 1];
        var entity = null;
        if (typeof nextFrame === "string" ||
            nextFrame instanceof egret.DisplayObject) {
            entity =
                typeof nextFrame === "string"
                    ? new eui.Image(this.prefix === undefined ? nextFrame : this.prefix + nextFrame)
                    : nextFrame;
            if (this.loop) {
                this.frames[this.currentFrame.index + 1] = entity;
            }
        }
        else {
            entity =
                typeof nextFrame.sourse === "string"
                    ? new eui.Image(nextFrame.usePrefix === false
                        ? nextFrame.sourse
                        : this.prefix + nextFrame.sourse)
                    : nextFrame.sourse;
            if (this.loop) {
                nextFrame.sourse = entity;
            }
        }
        // 这一帧的淡入
        this.addToRun({
            frame: nextFrame,
            entity: entity,
            func: function () {
                var _a, _b, _c, _d, _e, _f;
                Transition.in(_this, entity, {
                    during: typeof nextFrame === "string" ||
                        nextFrame instanceof egret.DisplayObject ||
                        ((_a = nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common) === null || _a === void 0 ? void 0 : _a.in) === undefined
                        ? (_b = _this.common) === null || _b === void 0 ? void 0 : _b.in : (_c = nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common) === null || _c === void 0 ? void 0 : _c.in,
                    before: typeof nextFrame === "string" ||
                        nextFrame instanceof egret.DisplayObject ||
                        ((_d = nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common) === null || _d === void 0 ? void 0 : _d.before) === undefined
                        ? (_e = _this.common) === null || _e === void 0 ? void 0 : _e.before : (_f = nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common) === null || _f === void 0 ? void 0 : _f.before,
                });
            },
            timeStemp: this.timeTick.getPass(),
        });
        // 调用下一帧
        if (this.currentFrame.index < this.frames.length - 2 || this.loop) {
            if (typeof nextFrame === "string" ||
                nextFrame instanceof egret.DisplayObject ||
                nextFrame.trigger === undefined) {
                // 决定下一个next的调用时机
                this.addToRun({
                    frame: null,
                    entity: null,
                    func: function () {
                        _this.nextFrame();
                    },
                    timeStemp: this.timeTick.getPass() +
                        (typeof nextFrame === "string" ||
                            nextFrame instanceof egret.DisplayObject ||
                            (nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common.before) === undefined
                            ? this.common.before
                            : nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common.before) +
                        (typeof nextFrame === "string" ||
                            nextFrame instanceof egret.DisplayObject ||
                            (nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common.in) === undefined
                            ? this.common.in
                            : nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common.in) +
                        (typeof nextFrame === "string" ||
                            nextFrame instanceof egret.DisplayObject ||
                            (nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common.during) === undefined
                            ? this.common.during
                            : nextFrame === null || nextFrame === void 0 ? void 0 : nextFrame.common.during) +
                        500,
                });
            }
            else {
                // 根据事件产生监听
                entity.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    if (entity.alpha === 1) {
                        _this.nextFrame();
                    }
                }, this);
            }
        }
        // 整个动画结束 不循环
        if (this.currentFrame.index === this.frames.length - 2) {
            if (!this.loop) {
                if (typeof ((_a = this.event) === null || _a === void 0 ? void 0 : _a.over) === "function") {
                    (_b = this.event) === null || _b === void 0 ? void 0 : _b.over();
                }
                else if (typeof ((_c = this.event) === null || _c === void 0 ? void 0 : _c.over) === "object") {
                    this.addToRun({
                        frame: null,
                        entity: null,
                        func: (_d = this.event) === null || _d === void 0 ? void 0 : _d.over.func,
                        timeStemp: this.timeTick.getPass() + ((_e = this.event) === null || _e === void 0 ? void 0 : _e.over.before),
                    });
                }
            }
            this.runCircleTime++;
        }
        this.currentFrame = {
            index: this.currentFrame.index + 1,
            entity: entity,
        };
        if (this.loop && this.currentFrame.index + 1 === this.frames.length) {
            this.currentFrame.index = -1;
        }
    };
    Animate.prototype.addToRun = function (run) {
        this.toRun.push(run);
    };
    Animate.prototype.pause = function () {
        this.timeTick.stop();
    };
    Animate.prototype.play = function () {
        this.timeTick.start();
    };
    Animate.prototype.start = function () {
        egret.startTick(this.everTick, this);
        this.nextFrame();
    };
    Animate.prototype.end = function (that) {
        this.removeChildren();
        this.toRun = [];
        this.pause();
        egret.stopTick(this.everTick, this);
        that.removeChild(this);
    };
    return Animate;
}(egret.DisplayObjectContainer));
window["Animate"] = Animate;
__reflect(Animate.prototype,"Animate",[]); 


/***/ }),

/***/ "./src/basicClass/ChartBox.ts":
/***/ (function(module, exports) {

var ChartBox = /** @class */ (function (_super) {
    __extends(ChartBox, _super);
    function ChartBox(e) {
        var _this = _super.call(this) || this;
        _this.resources = {
            boy: [
                "/resource/assets/component/ChartBox/boy.1.png",
                "/resource/assets/component/ChartBox/boy.2.png",
                "/resource/assets/component/ChartBox/boy.3.png",
                "/resource/assets/component/ChartBox/boy.4.png",
                "/resource/assets/component/ChartBox/boy.5.png",
            ],
            girl: [
                "/resource/assets/component/ChartBox/girl.1.png",
                "/resource/assets/component/ChartBox/girl.2.png",
                "/resource/assets/component/ChartBox/girl.3.png",
                "/resource/assets/component/ChartBox/girl.4.png",
            ],
        };
        // 指示现在的台词数
        _this.line = 0;
        _this.waiting = false;
        _this.main();
        _this.e = e;
        return _this;
    }
    ChartBox.prototype.start = function () {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    ChartBox.prototype.end = function () {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    ChartBox.prototype.main = function () {
        var bgi = new eui.Image("/resource/assets/component/ChartBox/6.18.jpg");
        var boy = new eui.Image(this.resources.boy.pop());
        boy.y = this.line * 120 + 100;
        this.line++;
        this.addChild(bgi);
        this.addChild(boy);
    };
    ChartBox.prototype.onTap = function () {
        var _this = this;
        if (this.waiting)
            return;
        if (this.line < 9) {
            var count = Math.floor(Math.random() * 2);
            for (var i = 0; i <= count; i++) {
                var girl = new eui.Image(this.resources.girl.pop());
                girl.y = this.line * 120 + 100;
                this.line++;
                this.addChild(girl);
            }
            this.waiting = true;
            setTimeout(function () {
                var count = Math.floor(Math.random() * 2);
                for (var i = 0; i <= count; i++) {
                    var boy = new eui.Image(_this.resources.boy.pop());
                    boy.y = _this.line * 120 + 100;
                    _this.line++;
                    _this.addChild(boy);
                }
                _this.waiting = false;
            }, 500);
        }
        else {
            this.e();
        }
    };
    return ChartBox;
}(egret.DisplayObjectContainer));
window["ChartBox"] = ChartBox;
__reflect(ChartBox.prototype,"ChartBox",[]); 


/***/ }),

/***/ "./src/basicClass/Clock.ts":
/***/ (function(module, exports) {

var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    function Clock(props) {
        var _this = _super.call(this) || this;
        _this.event = {};
        _this.touching = false;
        _this.clockCenter = { x: 360, y: 984 };
        _this.enable = true;
        var clock = new eui.Image("/resource/assets/component/Clock/clock.1.png");
        var clock2 = new eui.Image("/resource/assets/component/Clock/clock.2.png");
        var clock3 = new eui.Image("/resource/assets/component/Clock/clock.3.png");
        _this.addChild(clock);
        // h
        _this.addChild(clock2);
        // min
        _this.addChild(clock3);
        Size.setCenter(clock2, _this.clockCenter);
        Size.setCenter(clock3, _this.clockCenter);
        clock3.pixelHitTest = true;
        clock2.rotation = -75;
        _this.hour = {
            entity: clock2,
            time: 0,
        };
        _this.minute = {
            entity: clock3,
            time: 0,
            last: 0,
        };
        clock3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onMouseDown, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            _this.stage.addEventListener(egret.TouchEvent.TOUCH_END, _this.onMouseUp, _this);
        }, _this);
        if (props === null || props === void 0 ? void 0 : props.event) {
            _this.event = props.event;
        }
        if (props === null || props === void 0 ? void 0 : props.init) {
            _this.setTime(props.init.hour, props.init.minute);
        }
        return _this;
    }
    Clock.prototype.onMouseDown = function (e) {
        if (!this.enable) {
            return;
        }
        this.touching = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseMove, this);
    };
    Clock.prototype.onMouseMove = function (e) {
        if (!this.touching || !this.enable) {
            return;
        }
        // 计算部分
        var angle = 0;
        var quadrant = this.getQuadrant({
            x: e.stageX,
            y: e.stageY,
        });
        if (e.stageY - this.clockCenter.y !== 0) {
            angle =
                (Math.atan(-(e.stageX - this.clockCenter.x) / (e.stageY - this.clockCenter.y)) /
                    Math.PI) *
                    180;
        }
        switch (quadrant) {
            case 1:
            case 7: {
                angle = angle;
                break;
            }
            case 2:
            case 3:
            case 8: {
                angle = angle + 180;
                break;
            }
            case 4: {
                angle = angle + 360;
                break;
            }
            // x
            case 5: {
                angle = 90;
                break;
            }
            case 6: {
                angle = 270;
                break;
            }
            default: {
                angle = undefined;
            }
        }
        if (angle === undefined) {
            return;
        }
        var nowMinute = Math.floor(this.in360(angle / 6));
        var offsetMin = this.minute.time - nowMinute;
        // 靠角度会产生偏差 依靠分针变化计算
        var nowHour = this.hour.time + (offsetMin > 50 ? 1 : offsetMin < -50 ? -1 : 0);
        var clockEvent = {
            now: {
                hour: nowHour,
                minute: nowMinute,
            },
            last: {
                hour: this.hour.time,
                minute: this.minute.time,
            },
            changed: {
                hour: nowHour - this.hour.time,
                minute: nowMinute - this.minute.time,
            },
        };
        // 事件部分
        // 简陋的 prevent
        if (this.event.toStop) {
            if (!this.event.toStop(clockEvent)) {
                this.onMouseUp(e);
                return;
            }
        }
        if (this.event.onChange) {
            // 事件处理
            this.event.onChange(clockEvent);
        }
        if (nowHour !== this.hour.time) {
            // 小时变化处理
            if (this.event.onHour) {
                this.event.onHour(nowHour * (nowHour - this.hour.time > 0 ? 1 : -1));
            }
            this.hour.time = nowHour;
        }
        // 更新部分
        if (Math.abs(angle - this.minute.last) < 180) {
            this.hour.entity.rotation = this.in360(this.hour.entity.rotation + (angle - this.minute.last) / 12);
        }
        else if (angle - this.minute.last > 180) {
            this.hour.entity.rotation = this.in360(this.hour.entity.rotation + (angle - this.minute.last - 360) / 12);
        }
        else {
            this.hour.entity.rotation = this.in360(this.hour.entity.rotation - (angle - this.minute.last + 360) / 12);
        }
        this.minute.last = angle;
        this.minute.time = nowMinute;
        this.minute.entity.rotation = angle;
    };
    Clock.prototype.in360 = function (angle) {
        return ((angle % 360) + 360) % 360;
    };
    Clock.prototype.getQuadrant = function (p, base) {
        if (base === void 0) { base = this.clockCenter; }
        // 相对于一般坐标系
        if (p.x > base.x) {
            if (p.y > base.y) {
                // 第二象限
                return 2;
            }
            else if (p.y < base.y) {
                // 第一象限
                return 1;
            }
            else {
                // x +
                return 5;
            }
        }
        else if (p.x < base.x) {
            if (p.y > base.y) {
                // 第三象限
                return 3;
            }
            else if (p.y < base.y) {
                // 第四象限
                return 4;
            }
            else {
                // x -
                return 6;
            }
        }
        else {
            if (p.y > base.y) {
                // y -
                return 8;
            }
            else if (p.y < base.y) {
                // y +
                return 7;
            }
            else {
                // O
                return 9;
            }
        }
    };
    Clock.prototype.onMouseUp = function (e) {
        this.touching = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseMove, this);
    };
    Clock.prototype.setTime = function (hour, minute) {
        this.hour.entity.rotation = -75 + (hour + minute / 60) * 30;
        this.hour.time = hour;
        this.minute.entity.rotation = minute * 60;
        this.minute.last = minute * 6;
        this.minute.time = minute;
    };
    Clock.prototype.end = function () {
        this.minute.entity.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDown, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onMouseUp, this);
    };
    return Clock;
}(egret.DisplayObjectContainer));
window["Clock"] = Clock;
__reflect(Clock.prototype,"Clock",[]); 


/***/ }),

/***/ "./src/basicClass/DrawArea.ts":
/***/ (function(module, exports) {

var DrawArea = /** @class */ (function (_super) {
    __extends(DrawArea, _super);
    function DrawArea(props) {
        var _this = _super.call(this) || this;
        _this.event = {};
        var size = __assign({ width: 720, height: 1280 }, props === null || props === void 0 ? void 0 : props.size);
        var position = __assign({ x: 0, y: 0 }, props === null || props === void 0 ? void 0 : props.position);
        var shape = new egret.Shape();
        _this.size = size;
        _this.shape = shape;
        _this.position = position;
        _this.width = size.width;
        _this.height = size.height;
        _this.x = position.x;
        _this.y = position.y;
        shape.width = size.width;
        shape.height = size.height;
        if (props === null || props === void 0 ? void 0 : props.event) {
            _this.event = props.event;
        }
        _this.addChild(shape);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            _this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onDraw, _this);
            _this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onMoueMove, _this);
        }, _this);
        return _this;
    }
    DrawArea.prototype.onDraw = function (e) {
        this.shape.graphics.beginFill(0xff0000, 1);
        this.shape.graphics.drawCircle(e.stageX - this.position.x, e.stageY - this.position.y, 30);
        this.shape.graphics.endFill();
    };
    DrawArea.prototype.onMoueMove = function (e) {
        if (this.event.move) {
            this.event.move(e);
        }
        this.onDraw(e);
    };
    DrawArea.prototype.end = function () {
        if (this.parent) {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onDraw, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoueMove, this);
            this.parent.removeChild(this);
        }
    };
    return DrawArea;
}(egret.DisplayObjectContainer));
window["DrawArea"] = DrawArea;
__reflect(DrawArea.prototype,"DrawArea",[]); 


/***/ }),

/***/ "./src/basicClass/LineBind.ts":
/***/ (function(module, exports) {

var LineBind = /** @class */ (function (_super) {
    __extends(LineBind, _super);
    function LineBind(props) {
        var _this = _super.call(this) || this;
        _this._distance = new egret.Point();
        _this.event = [];
        _this.binder = props.binder;
        _this.limit = props.limit;
        _this.event = props.event;
        var line = Size.preferedSizeImage("/resource/assets/component/LineBind/button.1.png");
        var ball = Size.preferedSizeImage("/resource/assets/component/LineBind/button2.png");
        _this.addChild(line);
        _this.addChild(ball);
        ball.pixelHitTest = true;
        ball.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.mouseDown, _this);
        ball.addEventListener(egret.TouchEvent.TOUCH_END, _this.mouseUp, _this);
        ball.x = -20;
        _this.ball = ball;
        return _this;
    }
    LineBind.prototype.EventAction = function (progress) {
        var todoEvent = this.event.filter(function (event) {
            // 触发了的过滤
            if (event.hasTriggerd) {
                return false;
            }
            // 进度不够过滤
            if (event.progress > progress) {
                return false;
            }
            return true;
        });
        todoEvent.map(function (e) {
            e.hasTriggerd = true;
            e.func();
        });
    };
    LineBind.prototype.mouseUp = function (event) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    LineBind.prototype.mouseMove = function (event) {
        var ballLimit = {
            left: -20,
            right: 240,
        };
        if (event.stageX - this._distance.x > ballLimit.left &&
            event.stageX - this._distance.x < ballLimit.right) {
            this.ball.x = event.stageX - this._distance.x;
            // 移动绑定
            var percent = (event.stageX - this._distance.x - ballLimit.left) /
                (ballLimit.right - ballLimit.left);
            this.binder.x =
                percent * (this.limit.right - this.limit.left) +
                    this.limit.left +
                    this.limit.offset;
            this.EventAction(percent * 100);
        }
    };
    LineBind.prototype.mouseDown = function (event) {
        this._distance.x = event.stageX - this.ball.x;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    return LineBind;
}(egret.DisplayObjectContainer));
window["LineBind"] = LineBind;
__reflect(LineBind.prototype,"LineBind",[]); 


/***/ }),

/***/ "./src/basicClass/Scene.ts":
/***/ (function(module, exports) {

var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    /**
     * @param name 名字
     *
     * @param options 可选参数
     *
     * @param that 所属章节
     */
    function Scene(that, options) {
        var _this = _super.call(this) || this;
        // 掌控现在正在执行的 缓动
        _this.tweenTime = new TweenTime();
        _this.frameChildren = [];
        _this.timeTick = new TimeTick();
        _this.chapter = that;
        _this.option = options;
        _this.tweenTime;
        if (options.main) {
            _this.main = options.main;
            _this.main();
        }
        if (options.starter)
            _this.starter = options.starter;
        return _this;
    }
    /**
     * @intro 把自身加入到chapter中
     */
    Scene.prototype.start = function () {
        var _this = this;
        egret.startTick(this.timeTick.update, this.timeTick);
        this.starter();
        // last 时间之后 自动下一场景
        if (this.option.last) {
            this.timeTick.registerEvent(2000, function () {
                _this.nextScene();
            });
        }
        this.play();
        this.chapter.addChild(this);
    };
    Scene.prototype.starter = function () { };
    Scene.prototype.play = function () {
        this.frameChildren.map(function (c) {
            c.play();
        });
        this.tweenTime.play();
    };
    Scene.prototype.pause = function () {
        this.frameChildren.map(function (c) {
            c.pause();
        });
        this.tweenTime.pause();
    };
    Scene.prototype.addFrameChild = function (frameChild) {
        this.frameChildren.push(frameChild);
    };
    // 这里面直接写， 该干啥干啥
    Scene.prototype.main = function () { };
    Scene.prototype.nextScene = function (transition) {
        console.log("runed");
        this.chapter.nextScene(this, transition);
        this.pause();
    };
    Scene.prototype.end = function () {
        if (this.parent === this.chapter) {
            this.removeChildren();
            this.chapter.removeChild(this);
        }
    };
    return Scene;
}(egret.DisplayObjectContainer));
window["Scene"] = Scene;
__reflect(Scene.prototype,"Scene",[]); 


/***/ }),

/***/ "./src/basicClass/Size.ts":
/***/ (function(module, exports) {

// 改变大小的函数
var Size = /** @class */ (function () {
    function Size() {
    }
    Size.centerX = function (width) {
        return (this.width - width) / 2;
    };
    Size.preferedSize = function (entity) {
        entity.width = this.width;
        entity.height = this.height;
    };
    Size.preferedCenter = function (entity) {
        entity.anchorOffsetX = this.width / 2;
        entity.anchorOffsetY = this.height / 2;
        entity.x = this.width / 2;
        entity.y = this.height / 2;
    };
    Size.setCenter = function (entity, position) {
        entity.x = position.x;
        entity.y = position.y;
        entity.anchorOffsetX = position.x;
        entity.anchorOffsetY = position.y;
    };
    Size.preferedSizeImage = function (sourse) {
        var image = new eui.Image(sourse);
        this.preferedSize(image);
        return image;
    };
    // 提供图片真正的像素， 按比例计算出真实高
    Size.widthDecideHeight = function (entity, realWidth) {
        entity.width = this.width;
        entity.height = (this.width / realWidth) * this.height;
    };
    // static width = 640;
    // static height = 1138;
    Size.width = 720;
    Size.height = 1280;
    return Size;
}());
window["Size"] = Size;
__reflect(Size.prototype,"Size",[]); 


/***/ }),

/***/ "./src/basicClass/TimeTick.ts":
/***/ (function(module, exports) {

var TimeTick = /** @class */ (function () {
    function TimeTick() {
        this.state = 0;
        this.pass = 0;
        this.last = 0;
        this.eventList = [];
    }
    TimeTick.prototype.start = function () {
        this.state = 1;
    };
    TimeTick.prototype.stop = function () {
        this.state = 2;
    };
    TimeTick.prototype.runEvents = function () {
        var _this = this;
        var events = this.eventList.filter(function (e) { return e.time <= _this.pass; });
        this.eventList = this.eventList.filter(function (e) { return e.time > _this.pass; });
        events.map(function (e) {
            if (e.argus) {
                e.callback.apply(e, e.argus);
            }
            else {
                e.callback();
            }
        });
    };
    TimeTick.prototype.update = function (timeStemp) {
        if (this.state === 0) {
            this.pass = this.pass + timeStemp - this.last;
            this.last = timeStemp;
        }
        else if (this.state === 1) {
            this.last = timeStemp;
            this.state = 0;
        }
        this.runEvents();
        return false;
    };
    TimeTick.prototype.getPass = function () {
        return this.pass;
    };
    TimeTick.prototype.registerEvent = function (time, callback, argus) {
        this.eventList.push({
            time: time + this.pass,
            callback: callback,
            argus: argus,
        });
        this.eventList.sort(function (x, y) { return x.time - y.time; });
    };
    return TimeTick;
}());
window["TimeTick"] = TimeTick;
__reflect(TimeTick.prototype,"TimeTick",[]); 


/***/ }),

/***/ "./src/basicClass/Transition.ts":
/***/ (function(module, exports) {

var Transition = /** @class */ (function () {
    function Transition() {
    }
    Transition.in = function (that, item, options) {
        item.alpha = 0;
        var tween = egret.Tween.get(item);
        if (options === null || options === void 0 ? void 0 : options.before) {
            tween.wait(options.before);
        }
        tween.to({ alpha: 1 }, (options === null || options === void 0 ? void 0 : options.during) || 500);
        if (options === null || options === void 0 ? void 0 : options.after) {
            tween.wait(options.after);
        }
        if (options === null || options === void 0 ? void 0 : options.index) {
            that.addChildAt(item, options.index);
        }
        else {
            that.addChild(item);
        }
        return tween;
    };
    Transition.out = function (that, item, options) {
        var tween = egret.Tween.get(item);
        if (options === null || options === void 0 ? void 0 : options.before) {
            tween.wait(options.before);
        }
        tween.to({ alpha: 0 }, (options === null || options === void 0 ? void 0 : options.during) || 500);
        if (options === null || options === void 0 ? void 0 : options.after) {
            tween.wait(options.after);
        }
        tween.call(function () {
            that.removeChild(item);
        });
        return tween;
    };
    Transition.in2 = function (that, name, item, options) {
        item.alpha = 0;
        var auto = {
            name: name,
            tw: egret.Tween.get(item),
            call: function (func) {
                func(auto.tw);
                return auto;
            },
            end: function () {
                that.removeTween(name);
            },
        };
        that.addTween({
            name: name,
            tw: auto.tw,
        });
        if (options === null || options === void 0 ? void 0 : options.before) {
            auto.tw.wait(options.before);
        }
        auto.tw.to({ alpha: 1 }, (options === null || options === void 0 ? void 0 : options.during) || 500);
        if (options === null || options === void 0 ? void 0 : options.after) {
            auto.tw.wait(options.after);
        }
        if (options === null || options === void 0 ? void 0 : options.index) {
            that.addChildAt(item, options.index);
        }
        else {
            that.addChild(item);
        }
        return auto;
    };
    Transition.sceneHori = function (preScene, aftScene, time) {
        if (time === void 0) { time = 1000; }
        var tw1 = egret.Tween.get(preScene);
        var tw2 = egret.Tween.get(aftScene);
        aftScene.x = Size.width;
        aftScene.start();
        tw1.to({ x: -Size.width }, time);
        tw2
            .to({ x: 0 }, time)
            .wait(100)
            .call(function () {
            preScene.end();
        });
        return [tw1, tw2];
    };
    Transition.sceneVeri = function (preScene, aftScene, time) {
        if (time === void 0) { time = 1000; }
        var tw1 = egret.Tween.get(preScene);
        var tw2 = egret.Tween.get(aftScene);
        aftScene.y = -Size.height;
        aftScene.start();
        tw1.to({ y: Size.height }, time);
        tw2
            .to({ y: 0 }, time)
            .wait(100)
            .call(function () {
            preScene.end();
        });
        return [tw1, tw2];
    };
    return Transition;
}());
window["Transition"] = Transition;
__reflect(Transition.prototype,"Transition",[]); 


/***/ }),

/***/ "./src/basicClass/TriggerArea.ts":
/***/ (function(module, exports) {

// 触发区域
var TriggerArea = /** @class */ (function () {
    /**
     * 触发的范围
     * 触发的条件
     * 触发后执行的事件
     */
    function TriggerArea(props) {
        this.triggered_time = 0;
        this.triggered_area = props.area;
        this.triggered_event = props.event;
        this.point = new egret.Point();
    }
    TriggerArea.prototype.trigger = function (event) {
        if (this.triggered_area.contains(event.stageX, event.stageY)) {
            this.triggered_event(event, {
                time: this.triggered_time,
            });
            this.triggered_time++;
            this.point.x = event.stageX;
            this.point.y = event.stageY;
        }
    };
    TriggerArea.prototype.resetTime = function () {
        this.triggered_time = 0;
    };
    return TriggerArea;
}());
window["TriggerArea"] = TriggerArea;
__reflect(TriggerArea.prototype,"TriggerArea",[]); 


/***/ }),

/***/ "./src/basicClass/TweenTime.ts":
/***/ (function(module, exports) {

var TweenTime = /** @class */ (function () {
    function TweenTime() {
        this.tweenList = [];
        this.t = {};
        this.code = 0;
    }
    TweenTime.prototype.getCode = function () {
        return this.code + 1;
    };
    TweenTime.prototype.removeTween = function (code) {
        this.tweenList = this.tweenList.filter(function (tw) { return tw.code !== code; });
    };
    TweenTime.prototype.time = function (target) {
        var _this = this;
        var code = this.getCode();
        // const time = {
        //   // code,
        //   // tw,
        //   // call: (func: (t: egret.Tween) => void) => {
        //   //   if (tw instanceof egret.Tween) {
        //   //     func(tw);
        //   //   } else {
        //   //     func(tw[tw.length - 1]);
        //   //   }
        //   //   return time;
        //   // },
        //   end: () => {
        //     if (tw instanceof egret.Tween) {
        //       tw.wait(1000).call(() => {
        //         this.removeTween(code);
        //       });
        //     } else {
        //       tw[tw.length - 1].wait(1000).call(() => {
        //         this.removeTween(code);
        //       });
        //     }
        //   },
        // };
        this.tweenList.push({
            target: target,
            code: code,
        });
        // return time;
        return function () {
            egret.Tween.removeTweens(target);
            _this.removeTween(code);
        };
    };
    TweenTime.prototype.pause = function () {
        this.tweenList.map(function (tw) {
            if (tw.target instanceof egret.DisplayObject) {
                egret.Tween.pauseTweens(tw.target);
            }
            else {
                tw.target.map(function (t) {
                    egret.Tween.pauseTweens(t);
                });
            }
            // if (tw.tw instanceof egret.Tween) {
            //   tw.tw.pause();
            //   tw.tw.setPaused(true);
            // } else {
            //   tw.tw.map((t) => {
            //     t.pause();
            //     t.setPaused(true);
            //   });
            // }
        });
    };
    TweenTime.prototype.play = function () {
        this.tweenList.map(function (tw) {
            if (tw.target instanceof egret.DisplayObject) {
                egret.Tween.resumeTweens(tw.target);
            }
            else {
                tw.target.map(function (t) {
                    egret.Tween.resumeTweens(t);
                });
            }
            // if (tw.tw instanceof egret.Tween) {
            //   tw.tw.pause();
            //   tw.tw.setPaused(true);
            // } else {
            //   tw.tw.map((t) => {
            //     t.pause();
            //     t.setPaused(true);
            //   });
            // }
        });
    };
    return TweenTime;
}());
window["TweenTime"] = TweenTime;
__reflect(TweenTime.prototype,"TweenTime",[]); 


/***/ }),

/***/ "./src/basicClass/interface.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/config.ts":
/***/ (function(module, exports) {

var config = /** @class */ (function () {
    function config() {
    }
    return config;
}());
window["config"] = config;
__reflect(config.prototype,"config",[]); 


/***/ }),

/***/ "./src/layers/Layers.ts":
/***/ (function(module, exports) {

var Layers = /** @class */ (function (_super) {
    __extends(Layers, _super);
    function Layers() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showing = [];
        _this.names = [];
        _this.callback = null;
        _this.parentObject = null;
        return _this;
    }
    Layers.prototype.inRect = function (x, y, bx, by, bwidth, bheight) {
        if (x > bx && x < bx + bwidth && y > by && y < by + bheight) {
            return true;
        }
        else {
            return false;
        }
    };
    Layers.prototype.getBitMapByName = function (name) {
        return this.showing[this.names.indexOf(name)];
    };
    return Layers;
}(egret.DisplayObjectContainer));
window["Layers"] = Layers;
__reflect(Layers.prototype,"Layers",["LayerInterface"]); 


/***/ }),

/***/ "./src/layers/TestPause.ts":
/***/ (function(module, exports) {

var TestPause = /** @class */ (function (_super) {
    __extends(TestPause, _super);
    function TestPause() {
        var _this = _super.call(this) || this;
        ["暂停"].forEach(function (group_name) {
            RES.getGroupByName(group_name).forEach(function (item) {
                console.log(item);
                var texture = RES.getRes(item.name);
                var bitmap = new egret.Bitmap(texture);
                if (item.name == "pause_jpg") {
                    bitmap.x = 300;
                    bitmap.y = 10;
                    bitmap.height = bitmap.width = 70;
                }
                else {
                    bitmap.x = bitmap.y = 0;
                    bitmap.width = 720;
                    bitmap.height = 1280;
                }
                _this.names.push(item.name);
                _this.showing.push(bitmap);
            });
        });
        return _this;
    }
    TestPause.prototype.show = function (callback) {
        this.progress0();
    };
    TestPause.prototype.progress0 = function () {
        var _this = this;
        var show = this.getBitMapByName("pause_jpg");
        show.touchEnabled = true;
        this.addChild(show);
        var event;
        event = function (e) {
            if (_this.inRect(e.stageX, e.stageY, show.x, show.y, show.width, show.height)) {
                _this.removeChild(show);
                show.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, _this);
                _this.progress1();
            }
        };
        show.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
    };
    TestPause.prototype.progress1 = function () {
        var _this = this;
        var show = this.getBitMapByName("pause_2_png");
        show.touchEnabled = true;
        console.log(show);
        this.addChild(show);
        var event;
        event = function (e) {
            _this.removeChild(show);
            show.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, _this);
            _this.progress0();
        };
        show.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
    };
    return TestPause;
}(Layers));
window["TestPause"] = TestPause;
__reflect(TestPause.prototype,"TestPause",[]); 


/***/ }),

/***/ "./src/layers/VideoTest.ts":
/***/ (function(module, exports) {

var VideoExample = /** @class */ (function (_super) {
    __extends(VideoExample, _super);
    function VideoExample() {
        var _this = _super.call(this) || this;
        _this.text = new egret.TextField();
        _this.video = new egret.Video();
        // [0,1].forEach(i=>{
        _this.video.x = 0;
        _this.video.y = 0;
        _this.video.width = 960;
        _this.video.height = 1280;
        _this.video.fullscreen = false;
        egret.log(_this.video.fullscreen);
        // video.poster = video.fullscreen ? "resource/posterfullscreen.jpg" : "resource/posterinline.jpg";
        _this.video.touchEnabled = true;
        _this.video.once(egret.TouchEvent.TOUCH_TAP, function (e) { _this.removeChild(_this.text); _this.playVideo(e); }, _this);
        _this.video.load("resource/L0/begin.mp4");
        _this.addChild(_this.video);
        _this.text.text = "Loading";
        _this.text.x = 50;
        _this.text.y = 280 - 20;
        _this.video.addEventListener(egret.Event.COMPLETE, function (e) { return _this.text.text = "Loaded, click video to play"; }, _this);
        _this.addChild(_this.text);
        return _this;
        // });
    }
    VideoExample.prototype.playVideo = function (e) {
        egret.log(this);
        var video = e.target;
        video.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.playVideo, this);
        video.play();
        video.once(egret.TouchEvent.TOUCH_TAP, this.stopVideo, this);
        video.once(egret.Event.ENDED, this.endVideo, this);
    };
    VideoExample.prototype.stopVideo = function (e) {
        var video = e.target;
        video.removeEventListener(egret.Event.ENDED, this.stopVideo, this);
        video.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.stopVideo, this);
        video.pause();
        video.once(egret.TouchEvent.TOUCH_TAP, this.playVideo, this);
    };
    VideoExample.prototype.endVideo = function (e) {
        this.removeChild(this.video);
        this.text.alpha = 0;
        this.addChild(this.text);
        var tw = egret.Tween.get(this.text);
        tw.to({ "alpha": 1 }, 200);
        tw.wait(2000);
        tw.to({ "alpha": 0 }, 200);
    };
    return VideoExample;
}(egret.DisplayObjectContainer));
window["VideoExample"] = VideoExample;
__reflect(VideoExample.prototype,"VideoExample",[]); 


/***/ }),

/***/ "./src/layers/age6.ts":
/***/ (function(module, exports) {

var age6 = /** @class */ (function (_super) {
    __extends(age6, _super);
    function age6() {
        var _this = _super.call(this) || this;
        //加载组内容
        ["6岁", "全局"].forEach(function (group_name) {
            RES.getGroupByName(group_name).forEach(function (item) {
                console.log(item);
                var texture = RES.getRes(item.name);
                var bitmap = new egret.Bitmap(texture);
                bitmap.x = bitmap.y = 0;
                bitmap.width = 720;
                bitmap.height = 1280;
                _this.names.push(item.name);
                _this.showing.push(bitmap);
            });
        });
        return _this;
    }
    age6.prototype.show = function (callback, thisObject) {
        this.callback = callback;
        this.parentObject = thisObject;
        this.progress0();
    };
    age6.prototype.progress0 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.1_jpg");
        this.addChild(show1);
        show1.alpha = 0;
        var tween = egret.Tween.get(show1);
        tween.to({ "alpha": 1 }, 200);
        var event;
        event = function (e) {
            console.log(e.stageX, e.stageY);
            if (_this.inRect(e.stageX, e.stageY, 542, 991, 88, 97)) {
                _this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, _this);
                _this.progress1();
            }
        };
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
    };
    age6.prototype.progress1 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.1_jpg");
        var show2 = this.getBitMapByName("2.2_jpg");
        this.addChildAt(show2, 0);
        show2.alpha = 1;
        var tween1 = egret.Tween.get(show1);
        tween1.to({ "alpha": 0 }, 1000);
        setTimeout(function () {
            _this.removeChild(show1);
        }, 1000);
        setTimeout(function () {
            _this.progress2();
        }, 3000);
    };
    age6.prototype.progress2 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.2_jpg");
        var show2 = this.getBitMapByName("2.3_jpg");
        show2.x = show2.width;
        this.addChild(show2);
        var tween1 = egret.Tween.get(show1);
        var tween2 = egret.Tween.get(show2);
        var movetime = 500;
        tween1.to({ "x": -show2.width }, movetime);
        tween2.to({ "x": 0 }, movetime);
        setTimeout(function () {
            _this.removeChild(show1);
        }, movetime);
        var event;
        event = function (e) {
            if (_this.inRect(e.stageX, e.stageY, 80, 350, 340, 455)) {
                _this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, _this);
                _this.progress3();
            }
        };
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
    };
    age6.prototype.progress3 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.3_jpg");
        var show2 = this.getBitMapByName("2.4_jpg");
        this.addChildAt(show2, 0);
        show2.alpha = 1;
        var tween1 = egret.Tween.get(show1);
        tween1.to({ "alpha": 0 }, 1000);
        setTimeout(function () {
            _this.removeChild(show1);
            setTimeout(function () {
                _this.progress4();
            }, 1000);
        }, 1000);
    };
    age6.prototype.progress4 = function () {
        var _this = this;
        console.log("activated");
        var show1 = this.getBitMapByName("2.4_jpg");
        var show2 = this.getBitMapByName("2.5_jpg");
        this.addChildAt(show2, 0);
        show1.alpha = 1;
        var tween1 = egret.Tween.get(show1);
        tween1.to({ "alpha": 0 }, 1000);
        setTimeout(function () {
            _this.removeChild(show1);
            setTimeout(function () {
                _this.progress5();
            }, 1000);
        }, 1000);
    };
    age6.prototype.progress5 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.5_jpg");
        var show2 = this.getBitMapByName("2.2_jpg");
        this.addChildAt(show2, 0);
        show1.alpha = 1;
        show2.x = 0;
        var tween1 = egret.Tween.get(show1);
        tween1.to({ "alpha": 0 }, 1000);
        setTimeout(function () {
            _this.removeChild(show1);
            setTimeout(function () {
                _this.progress6();
            }, 1000);
        }, 1000);
    };
    age6.prototype.progress6 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.2_jpg");
        var show2 = this.getBitMapByName("2.7_jpg");
        this.addChildAt(show2, 0);
        show1.alpha = 1;
        var tween1 = egret.Tween.get(show1);
        tween1.to({ "y": -92 }, 1000);
        tween1.to({ "alpha": 0 }, 1000);
        setTimeout(function () {
            _this.removeChild(show1);
            setTimeout(function () {
                _this.progress7();
            }, 1000);
        }, 2000);
    };
    age6.prototype.progress7 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.7_jpg");
        var show2 = this.getBitMapByName("2.8_jpg");
        var left = this.getBitMapByName("ice_cream.2_png");
        var right = this.getBitMapByName("ice_cream.1_png");
        show2.x = show2.width;
        left.alpha = right.alpha = 0;
        this.addChild(show2);
        var tween1 = egret.Tween.get(show1);
        var tween2 = egret.Tween.get(show2);
        var tweenl = egret.Tween.get(left);
        var tweenr = egret.Tween.get(right);
        var movetime = 500;
        var visible = [false, false];
        tween1.to({ "x": -show2.width }, movetime);
        tween2.to({ "x": 0 }, movetime);
        setTimeout(function () {
            _this.removeChild(show1);
            _this.addChild(left);
            _this.addChild(right);
        }, movetime);
        var show_icecream = function (tween) {
            tween.to({ "alpha": 1 }, 500);
        };
        var event;
        event = function (e) {
            if (!visible[0] && _this.inRect(e.stageX, e.stageY, 634, 479, 78, 89)) {
                console.log("left activated");
                show_icecream(tweenl);
                visible[0] = true;
            }
            else if (!visible[1] && _this.inRect(e.stageX, e.stageY, 106, 620, 92, 87)) {
                console.log("left activated");
                right.alpha = 1;
                // tweenr.to({ "alpha": 1 }, 500);
                visible[1] = true;
            }
            if (visible[0] && visible[1]) {
                _this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, _this);
                _this.progress8();
            }
        };
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);
    };
    age6.prototype.progress8 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.8_jpg");
        var show2 = this.getBitMapByName("2.11_jpg");
        var left = this.getBitMapByName("ice_cream.2_png");
        var right = this.getBitMapByName("ice_cream.1_png");
        this.addChildAt(show2, 0);
        show1.alpha = 1;
        var tween1 = egret.Tween.get(show1);
        tween1.to({ "alpha": 0 }, 1000);
        setTimeout(function () {
            _this.removeChild(show1);
            _this.removeChild(left);
            _this.removeChild(right);
            setTimeout(function () {
                _this.progress9();
            }, 1000);
        }, 1000);
    };
    age6.prototype.progress9 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.11_jpg");
        var show2 = this.getBitMapByName("2.12_jpg");
        this.addChildAt(show2, 0);
        show1.alpha = 1;
        var tween1 = egret.Tween.get(show1);
        tween1.to({ "alpha": 0 }, 1000);
        setTimeout(function () {
            _this.removeChild(show1);
            setTimeout(function () {
                _this.progress10();
            }, 1000);
        }, 1000);
    };
    age6.prototype.progress10 = function () {
        var _this = this;
        var show1 = this.getBitMapByName("2.12_jpg");
        var show2 = this.getBitMapByName("2.13_jpg");
        this.addChildAt(show2, 0);
        show1.alpha = 1;
        var tween1 = egret.Tween.get(show1);
        tween1.to({ "alpha": 0 }, 1000);
        setTimeout(function () {
            _this.removeChild(show1);
            setTimeout(function () {
                _this.callback.call(_this.parentObject);
            }, 1000);
        }, 1000);
    };
    return age6;
}(Layers));
window["age6"] = age6;
__reflect(age6.prototype,"age6",[]); 


/***/ })

/******/ });