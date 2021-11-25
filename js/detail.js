/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"detail": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/wp-content/themes/korindo/resources/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/detail.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/common.js":
/*!**********************!*\
  !*** ./js/common.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Common; });\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match */ \"./node_modules/core-js/modules/es.string.match.js\");\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _vendor_gaTracking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor/gaTracking */ \"./js/vendor/gaTracking.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n__webpack_require__(/*! slick-carousel/slick/slick.scss */ \"./node_modules/slick-carousel/slick/slick.scss\");\n\n__webpack_require__(/*! slick-carousel/slick/slick-theme.scss */ \"./node_modules/slick-carousel/slick/slick-theme.scss\");\n\nvar Common = /*#__PURE__*/function () {\n  function Common() {\n    _classCallCheck(this, Common);\n\n    Object(_vendor_gaTracking__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-tracking]'));\n    this.initEvents();\n    this.ellipsisMultiline(jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-row-cnt]'));\n    this.addTabletClass();\n  }\n\n  _createClass(Common, [{\n    key: \"addTabletClass\",\n    value: function addTabletClass() {\n      var ua = navigator.userAgent;\n      var sp = ua.indexOf('iPhone') > -1 || ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1;\n      var tab = !sp && (ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1 && 'ontouchend' in document || ua.indexOf('Android') > -1);\n\n      if (tab) {\n        jquery__WEBPACK_IMPORTED_MODULE_6___default()('body').addClass('tablet');\n      }\n    }\n  }, {\n    key: \"initSlider\",\n    value: function initSlider() {\n      jquery__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({\n        url: '/wp-content/main_visual.json',\n        dataType: 'json',\n        success: function success(data) {\n          var items = data.items;\n          var $slider = jquery__WEBPACK_IMPORTED_MODULE_6___default()('.slider');\n          var html = [];\n\n          if (items.length <= 0) {\n            $slider.remove();\n            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.header-container h1').remove();\n            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.tv-container').addClass('show');\n            return;\n          }\n\n          for (var i = 0; i < items.length && i < 6; i++) {\n            var item = items[i];\n            var url = 'class=\"disabled\"';\n\n            if (item.url != '') {\n              url = \"href=\\\"\".concat(item.url, \"\\\"\");\n            }\n\n            html.push([\"<div class=\\\"slider-image\\\">\", \"<a \".concat(url, \" target=\\\"_blank\\\">\"), \"<img src=\\\"\".concat(item.image, \"\\\" alt=\\\"\").concat(item.title, \"\\\">\"), '</a>', '</div>'].join(''));\n          }\n\n          $slider.html(html.join(''));\n          Object(_vendor_gaTracking__WEBPACK_IMPORTED_MODULE_8__[\"default\"])($slider.find('a[data-tracking]'));\n          $slider.slick({\n            slidesToShow: 1,\n            slidesToScroll: 1,\n            arrows: false,\n            autoplaySpeed: 3000,\n            autoplay: true,\n            dots: true,\n            pauseOnFocus: false,\n            pauseOnHover: false,\n            pauseOnDotsHover: false\n          });\n        }\n      });\n    }\n  }, {\n    key: \"initEvents\",\n    value: function initEvents() {\n      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.sp-menu-btn, .sp-close-btn a').on('click', this.onClickSPMenuButton.bind(this));\n      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.btn-page-top').on('click', this.onClickPageLink.bind(this));\n    } // ニュースフィードを省略して末尾に…を付ける処理\n\n  }, {\n    key: \"ellipsisMultiline\",\n    value: function ellipsisMultiline($ellipsisTarget) {\n      $ellipsisTarget.each(function (index, element) {\n        var $target = jquery__WEBPACK_IMPORTED_MODULE_6___default()(element),\n            html = $target.html(),\n            rowCnt = jquery__WEBPACK_IMPORTED_MODULE_6___default()(element).data('row-cnt'); // font size * line height * line count\n\n        var fontSize = parseFloat($target.css('font-size'));\n        var lineHeight = parseFloat($target.css('line-height'));\n        var targetHeight = Math.ceil(fontSize * lineHeight * rowCnt);\n\n        if ($target.css('line-height').match(/px/)) {\n          targetHeight = Math.ceil(lineHeight * rowCnt);\n        } // 対象の要素を非表示で複製する\n\n\n        var $clone = $target.clone();\n        $clone.css({\n          display: 'none',\n          position: 'absolute',\n          overflow: 'visible'\n        }).width($target.width()).height('auto');\n        $target.after($clone); // 指定した高さになるまで、1文字ずつ消去していく\n\n        while (html.length > 0 && $clone.height() > targetHeight) {\n          html = html.substr(0, html.length - 1);\n          $clone.html(html + '...');\n        } // 文章を入れ替えて、複製した要素を削除する\n\n\n        $target.html($clone.html());\n        $clone.remove();\n      });\n    }\n  }, {\n    key: \"onClickPageLink\",\n    value: function onClickPageLink(ev) {\n      var href = jquery__WEBPACK_IMPORTED_MODULE_6___default()(ev.currentTarget).attr('href');\n      ev.stopPropagation();\n\n      if (href.length > 0) {\n        if (href === '#') {\n          jquery__WEBPACK_IMPORTED_MODULE_6___default()('body,html').animate({\n            scrollTop: 0\n          }, 400, 'swing');\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"onClickSPMenuButton\",\n    value: function onClickSPMenuButton() {\n      if (jquery__WEBPACK_IMPORTED_MODULE_6___default()('.header-menu-sp').hasClass('header-menu-sp-open')) {\n        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.header-menu-sp').removeClass('header-menu-sp-open');\n      } else {\n        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.header-menu-sp').addClass('header-menu-sp-open');\n      }\n\n      return false;\n    }\n  }, {\n    key: \"runNewsListAnimation\",\n    value: function runNewsListAnimation() {\n      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.line-up-list li').each(function (index, element) {\n        jquery__WEBPACK_IMPORTED_MODULE_6___default()(element).css('animation-delay', \"\".concat(index * 0.03, \"s\")).addClass('run');\n      });\n    }\n  }]);\n\n  return Common;\n}();\n\n\n\n//# sourceURL=webpack:///./js/common.js?");

/***/ }),

/***/ "./js/detail.js":
/*!**********************!*\
  !*** ./js/detail.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ \"./node_modules/core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ \"./node_modules/core-js/modules/es.reflect.construct.js\");\n/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.match */ \"./node_modules/core-js/modules/es.string.match.js\");\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common */ \"./js/common.js\");\n/* harmony import */ var _sass_detail_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sass/detail.scss */ \"./sass/detail.scss\");\n/* harmony import */ var _sass_detail_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sass_detail_scss__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n // import Slider from './slider';\n// import Banner from './banner';\n\n\n\nvar Detail = /*#__PURE__*/function (_Common) {\n  _inherits(Detail, _Common);\n\n  var _super = _createSuper(Detail);\n\n  function Detail() {\n    var _this;\n\n    _classCallCheck(this, Detail);\n\n    _this = _super.call(this); // new Slider();\n    // new Banner();\n\n    _this.$categoryTabs = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.info-tabs li');\n    _this.$listArea = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.list-area-pc');\n    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.line-up-list li').each(function (index, element) {\n      jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).css('animation-delay', \"\".concat(index * 0.03, \"s\")).addClass('run');\n    });\n    return _this;\n  }\n\n  _createClass(Detail, [{\n    key: \"initEvent\",\n    value: function initEvent() {\n      this.$categoryTabs.on('click', this.onClickChangeTabs.bind(this));\n      this.displayPickUp();\n      this.displayTopic();\n    } // json読み込みと表示\n\n  }, {\n    key: \"displayTopic\",\n    value: function displayTopic() {\n      var $topicList = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.secondary').find('.line-up-list');\n\n      if ($topicList.length > 0) {\n        jquery__WEBPACK_IMPORTED_MODULE_14___default.a.ajax({\n          url: window.location.origin + '/wp-content/latest_news.json',\n          dataType: 'json',\n          success: function success(data) {\n            var items = data.items;\n            var pcHtml = [];\n            var item;\n            var officialMark = jquery__WEBPACK_IMPORTED_MODULE_14___default()('#official-mark').val();\n            var zunMark = jquery__WEBPACK_IMPORTED_MODULE_14___default()('#zun-mark').val();\n\n            for (var i = 0; i < items.length; i++) {\n              item = items[i];\n              var officialImg = item.is_official ? '<img src=\"' + officialMark + '\" class=\"official-mark\">' : '';\n              officialImg = item.is_author_zun ? '<img src=\"' + zunMark + '\" class=\"official-mark\">' : officialImg;\n              pcHtml.push(['<li class=\"run ' + item.official_and_zun + '\">', '<a href=\"' + item.url.permalink + '\" target=\"' + item.url.target + '\" class=\"hover-border-efct\">', '<div class=\"lineup-title-box\">', '<p class=\"lineup-title\">' + item.category + '</p>', officialImg, '</div>', '<img src=\"' + item.eye_catch.url + '\">', '<div class=\"lineup-post-box\">', '<p class=\"post-title\" data-row-cnt=\"2\">' + item.title + '</p>', '<p class=\"post-date\">' + item.published + '</p>', '</div>', '</a>', '</li>'].join(''));\n            }\n\n            $topicList.html(pcHtml.join('')); // PC\n\n            jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-row-cnt]').each(function (index, element) {\n              var $target = jquery__WEBPACK_IMPORTED_MODULE_14___default()(element),\n                  html = $target.html(),\n                  rowCnt = jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).data('row-cnt'); // font size * line height * line count\n\n              var fontSize = parseFloat($target.css('font-size'));\n              var lineHeight = parseFloat($target.css('line-height'));\n              var targetHeight = Math.ceil(fontSize * lineHeight * rowCnt);\n\n              if ($target.css('line-height').match(/px/)) {\n                targetHeight = Math.ceil(lineHeight * rowCnt);\n              } // 対象の要素を非表示で複製する\n\n\n              var $clone = $target.clone();\n              $clone.css({\n                display: 'none',\n                position: 'absolute',\n                overflow: 'visible'\n              }).width($target.width()).height('auto');\n              $target.after($clone); // 指定した高さになるまで、1文字ずつ消去していく\n\n              while (html.length > 0 && $clone.height() > targetHeight) {\n                html = html.substr(0, html.length - 1);\n                $clone.html(html + '...');\n              } // 文章を入れ替えて、複製した要素を削除する\n\n\n              $target.html($clone.html());\n              $clone.remove();\n            });\n          }\n        });\n      }\n    } // pickupのjson読み込みと表示\n\n  }, {\n    key: \"displayPickUp\",\n    value: function displayPickUp() {\n      var $pickupList = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.secondary').find('.pickup-list');\n\n      if ($pickupList.length > 0) {\n        jquery__WEBPACK_IMPORTED_MODULE_14___default.a.ajax({\n          url: window.location.origin + '/wp-content/pickup.json',\n          dataType: 'json',\n          success: function success(data) {\n            var items = data.items;\n            var pcHtml = [];\n            var item;\n            var spHtmlItem;\n\n            for (var i = 0; i < items.length; i++) {\n              item = items[i];\n              spHtmlItem = [];\n              pcHtml.push(['<li>', '<a href=\"' + item.url + '\" target=\"_blank\" title=\"' + item.title + '\" class=\"btn-hover\">', '<img src=\"' + item.image + '\" alt=\"' + item.title + '\">', '</a>', '</li>'].join(''));\n              pcHtml.push(spHtmlItem.join(''));\n            }\n\n            $pickupList.html(pcHtml.join(''));\n          }\n        });\n      }\n    }\n  }, {\n    key: \"onClickChangeTabs\",\n    value: function onClickChangeTabs(ev) {\n      this.$categoryTabs.removeClass('current');\n      this.$listArea.removeClass('current');\n      var changeTab = jquery__WEBPACK_IMPORTED_MODULE_14___default()(ev.currentTarget).attr('class');\n\n      switch (changeTab) {\n        case 'menu1':\n          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.info-tabs .menu1').addClass('current');\n          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.topics-list-pc').addClass('current');\n          break;\n\n        case 'menu2':\n          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.info-tabs .menu2').addClass('current');\n          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.event-list-pc').addClass('current');\n          break;\n\n        case 'menu3':\n          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.info-tabs .menu3').addClass('current');\n          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.news-list-pc').addClass('current');\n          break;\n\n        case 'menu4':\n          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.info-tabs .menu4').addClass('current');\n          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.information-list-pc').addClass('current');\n          break;\n\n        default:\n          break;\n      }\n\n      return false;\n    }\n  }]);\n\n  return Detail;\n}(_common__WEBPACK_IMPORTED_MODULE_15__[\"default\"]);\n\njquery__WEBPACK_IMPORTED_MODULE_14___default()(function () {\n  var top = new Detail();\n  top.initEvent();\n});\n\n//# sourceURL=webpack:///./js/detail.js?");

/***/ }),

/***/ "./js/vendor/gaTracking.js":
/*!*********************************!*\
  !*** ./js/vendor/gaTracking.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($target) {\n  $target.on('click', function (event) {\n    var target = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.currentTarget);\n    var tracking = target.data('tracking').split(',');\n    gtag('event', tracking[1], {\n      event_category: tracking[0],\n      event_label: tracking[2]\n    });\n  });\n});\n\n//# sourceURL=webpack:///./js/vendor/gaTracking.js?");

/***/ }),

/***/ "./sass/detail.scss":
/*!**************************!*\
  !*** ./sass/detail.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./sass/detail.scss?");

/***/ })

/******/ });