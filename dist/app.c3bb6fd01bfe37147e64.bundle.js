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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/eslint-loader/index.js):\\nError: Cannot find module 'eslint-config-standard'\\nReferenced from: /var/www/html/hoatruong_php/start_project_react/.eslintrc\\n    at ModuleResolver.resolve (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/util/module-resolver.js:72:19)\\n    at resolve (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config/config-file.js:507:28)\\n    at load (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config/config-file.js:579:26)\\n    at configExtends.reduceRight (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config/config-file.js:453:36)\\n    at Array.reduceRight (<anonymous>)\\n    at applyExtends (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config/config-file.js:431:26)\\n    at loadFromDisk (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config/config-file.js:551:22)\\n    at Object.load (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config/config-file.js:587:20)\\n    at Config.getLocalConfigHierarchy (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config.js:240:44)\\n    at Config.getConfigHierarchy (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config.js:192:43)\\n    at Config.getConfigVector (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config.js:299:21)\\n    at Config.getConfig (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/config.js:342:29)\\n    at processText (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/cli-engine.js:181:33)\\n    at CLIEngine.executeOnText (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint/lib/cli-engine.js:690:40)\\n    at lint (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint-loader/index.js:278:17)\\n    at Object.module.exports (/var/www/html/hoatruong_php/start_project_react/node_modules/eslint-loader/index.js:273:21)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });