// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var App = __webpack_require__(1)
	App.el = '#root'
	new Vue(App)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\MM\\weex\\WeexExample\\src\\components\\example-list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//

	var getBaseURL = __webpack_require__(3).getBaseURL;
	module.exports = {
	  props: {
	    dir: {
	      default: 'examples'
	    }, // examples, test ...
	    items: {
	      default: [{ name: 'hello', title: 'Hello World', url: '' }]
	    }
	  },
	  components: {
	    exampleListItem: __webpack_require__(4)
	  },
	  created: function created() {
	    var base = getBaseURL(weex);
	    for (var i in this.items) {
	      var item = this.items[i];
	      if (!item.url) {
	        item.url = base + item.name + '.js';
	        console.log('item.url=' + item.url);
	      }
	    }
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.getBaseURL = getBaseURL;
	exports.isAndroid = isAndroid;
	exports.isiOS = isiOS;
	exports.isWeb = isWeb;
	exports.getPlatform = getPlatform;
	exports.getScreenWidth = getScreenWidth;
	exports.getScreenHeight = getScreenHeight;
	function getBaseURL(vm) {
	  var bundleUrl = weex.config.bundleUrl;
	  console.log('eex.config=' + JSON.stringify(weex.config));
	  var nativeBase;
	  if (isAndroid()) {
	    console.log('isAndroid');
	    nativeBase = 'file://assets/';
	  } else if (isiOS()) {
	    console.log('isiOS');
	    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	  } else {
	    console.log('web');
	    var host = 'localhost:8080';
	    var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    nativeBase = 'http://' + host + '/' + '/build/';
	  }
	  console.log('nativeBase=' + nativeBase);
	  var h5Base = './weex.html?page=./dist/web/';
	  // in Native
	  var base = nativeBase;
	  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
	    // in Browser or WebView
	    base = h5Base;
	  }
	  console.log('getPlatform()=' + getPlatform());
	  console.log('base=' + base);
	  return base;
	}

	function isAndroid() {
	  if (getPlatform() == 'Android' || getPlatform() == 'android') {
	    return true;
	  } else {
	    return false;
	  }
	}

	function isiOS() {
	  console.log(getPlatform() == 'iOS');
	  return getPlatform() == 'iOS';
	}

	function isWeb() {
	  console.log(getPlatform() == 'Web');
	  return getPlatform() == 'Web';
	}

	//{"env":{"platform":"android","osVersion":"4.4.4","appVersion":"1.0","weexVersion":"0.9.5","deviceModel":"HUAWEI ALE-CL00","appName":"com.kunion.weex","deviceWidth":"720","deviceHeight":"1184","scale":"2.0"}}
	//{"bundleUrl":"http://localhost:8080/weex.html?page=./dist/web/entry.js","platform":"Web","weexVersion":"0.10.0","userAgent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36","appName":"Netscape","appVersion":null,"osName":"Chrome","osVersion":"56.0.2924.87","deviceModel":"unknown","deviceWidth":750,"deviceHeight":1245}

	function getPlatform() {
	  if (weex.config.env) {
	    return weex.config.env.platform;
	  }
	  return weex.config.platform;
	}

	function getScreenWidth() {
	  return weex.config.deviceWidth;
	}

	function getScreenHeight() {
	  return weex.config.deviceHeight;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(5)
	)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\MM\\weex\\WeexExample\\src\\components\\example-list-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3c63262b"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "item-txt": {
	    "fontSize": 48,
	    "color": "#555555"
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var event = weex.requireModule('event');
	// var navigator = weex.requireModule('navigator')
	// var modal = weex.requireModule('modal')
	module.exports = {
	  props: {
	    title: { default: '456' },
	    url: { default: '' }
	  },
	  components: {
	    listItem: __webpack_require__(7)
	  },
	  methods: {
	    redirect: function redirect() {
	      console.log('this.url=' + this.url);
	      // navigator.push({
	      //   // url: this.url,
	      //   url:'file://assets/views/Couter.js',
	      //   animated: "true"
	      // }, event => {
	      //   modal.toast({ message: 'callback: ' + event, duration: 0.3})
	      // })
	      event.openURL(this.url);
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(8)
	)

	/* script */
	__vue_exports__ = __webpack_require__(9)

	/* template */
	var __vue_template__ = __webpack_require__(10)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\MM\\weex\\WeexExample\\src\\components\\list-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6755794e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    bgColor: { default: '#ffffff' }
	  },
	  methods: {
	    click: function click() {
	      this.$emit('click');
	    },
	    touchstart: function touchstart() {
	      // FIXME android touch
	      // TODO adaptive opposite bgColor
	      // this.bgColor = '#e6e6e6';
	    },
	    touchend: function touchend() {
	      // FIXME android touchend not triggered
	      // this.bgColor = '#ffffff';
	    }
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["item"],
	    style: {
	      backgroundColor: _vm.bgColor
	    },
	    on: {
	      "click": _vm.click,
	      "touchstart": _vm.touchstart,
	      "touchend": _vm.touchend
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list-item', {
	    on: {
	      "click": _vm.redirect
	    }
	  }, [_c('text', {
	    staticClass: ["item-txt"]
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', _vm._l((_vm.items), function(item) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('example-list-item', {
	      attrs: {
	        "title": item.title,
	        "url": item.url
	      }
	    })], 1)
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);