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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var App = __webpack_require__(28)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(29)

	/* template */
	var __vue_template__ = __webpack_require__(30)
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
	__vue_options__.__file = "D:\\MM\\weex\\WeexExample\\src\\views\\Counter.vue"
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

/***/ 29:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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


	var navigator = weex.requireModule('navigator');
	var modal = weex.requireModule('modal');

	exports.default = {
	  data: function data() {
	    return {
	      count: 0
	    };
	  },
	  computed: {
	    evenOrOdd: function evenOrOdd() {
	      return this.count % 2 === 0 ? 'even' : 'odd';
	    }
	  },
	  methods: {
	    increment: function increment(state) {

	      this.count++;
	    },
	    decrement: function decrement(state) {
	      this.count--;
	    },
	    incrementIfOdd: function incrementIfOdd(_ref) {
	      var commit = _ref.commit,
	          state = _ref.state;

	      if ((this.count + 1) % 2 === 0) {
	        this.increment();
	      }
	    },
	    incrementAsync: function incrementAsync(_ref2) {
	      var _this = this;

	      var commit = _ref2.commit;

	      return new Promise(function (resolve, reject) {
	        setTimeout(function () {
	          _this.increment();
	          resolve();
	        }, 1000);
	      });
	    },
	    jump: function jump(state) {
	      navigator.pop({
	        animated: "true"
	      }, function (event) {
	        modal.toast({ message: 'callback: ' + event, duration: 0.3 });
	      });
	    }
	  }
	};

/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Clicked: " + _vm._s(_vm.count) + " times, count is " + _vm._s(_vm.evenOrOdd) + ".")]), _c('button', {
	    on: {
	      "click": _vm.increment
	    }
	  }, [_vm._v("+")]), _c('button', {
	    on: {
	      "click": _vm.decrement
	    }
	  }, [_vm._v("-")]), _c('button', {
	    on: {
	      "click": _vm.incrementIfOdd
	    }
	  }, [_vm._v("Increment if odd")]), _c('button', {
	    on: {
	      "click": function($event) {
	        _vm.jump('/hello')
	      }
	    }
	  }, [_vm._v("Increment async")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });