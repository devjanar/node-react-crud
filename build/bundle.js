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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/controllers/TodoController.js":
/*!*******************************************!*\
  !*** ./api/controllers/TodoController.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar Model = __webpack_require__(/*! ../models/Todo */ \"./api/models/Todo.js\");\n\nmodule.exports = {\n\n    create: function (req, res, next) {\n        if (req.body && req.body != null) {\n            Model.create(req.body, function (err, success) {\n                if (!err) {\n                    res.status(200).json(success);\n                } else {\n                    res.status(400).json({ error: 'SomeThing Going On Wrong' });\n                }\n            });\n        } else {\n            res.status(400).json({ error: 'All fields required' });\n        }\n    },\n\n    findOne: function (req, res, next) {\n        if (req.body && req.body.id) {\n            Model.findById({ _id: req.body.id }, function (err, success) {\n                if (!err) {\n                    res.status(200).json(success);\n                } else {\n                    res.status(400).json({ error: 'SomeThing Going On Wrong' });\n                }\n            });\n        } else {\n            res.status(400).json({ error: 'SomeThing Going On Wrong' });\n        }\n    },\n\n    update: function (req, res, next) {\n        if (req.body && req.body._id) {\n            Model.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, function (err, success) {\n                if (!err) {\n                    res.status(200).json(success);\n                } else {\n                    res.status(400).json({ error: 'SomeThing Going On Wrong' });\n                }\n            });\n        } else {\n            res.status(400).json({ error: 'SomeThing Going On Wrong' });\n        }\n    },\n\n    remove: (() => {\n        var _ref = _asyncToGenerator(function* (req, res, next) {\n            try {\n                if (req.body && req.body.id) {\n                    yield Model.findByIdAndRemove({ _id: req.body.id });\n                    let success = yield Model.find({}).sort([['createdAt', -1]]);\n                    //\n                    res.status(200).json(success);\n                } else {\n                    return res.status(400).json({ error: 'SomeThing Going On Wrong' });\n                }\n            } catch (e) {\n                return res.status(400).json({ error: 'Server Error' });\n            }\n        });\n\n        return function remove(_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    })(),\n\n    getall: function (req, res, next) {\n        Model.find({}).sort([['createdAt', -1]]).exec(function (err, success) {\n            if (!err) {\n                res.status(200).json(success);\n            } else {\n                res.status(400).json({ error: 'SomeThing Going On Wrong' });\n            }\n        });\n    }\n\n};\n\n//# sourceURL=webpack:///./api/controllers/TodoController.js?");

/***/ }),

/***/ "./api/models/Todo.js":
/*!****************************!*\
  !*** ./api/models/Todo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\n\nvar Todo = new Schema({\n\n    name: {\n        type: String,\n        trim: true\n    },\n    description: {\n        type: String,\n        trim: true\n    }\n\n}, { timestamps: true, versionKey: false });\n\nmodule.exports = mongoose.model('Todo', Todo);\n\n//# sourceURL=webpack:///./api/models/Todo.js?");

/***/ }),

/***/ "./routes/router.js":
/*!**************************!*\
  !*** ./routes/router.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! express */ \"express\").Router();\nconst Controller = __webpack_require__(/*! ../api/controllers/TodoController */ \"./api/controllers/TodoController.js\");\nconst {\n    runValidation\n} = __webpack_require__(/*! ../validators */ \"./validators/index.js\");\nconst {\n    todoValidator\n} = __webpack_require__(/*! ../validators/todo */ \"./validators/todo.js\");\n//\nrouter.post('/create', todoValidator, runValidation, function (req, res, next) {\n    Controller.create(req, res, next);\n});\nrouter.post('/findOne', function (req, res, next) {\n    Controller.findOne(req, res, next);\n});\nrouter.post('/update', todoValidator, runValidation, function (req, res, next) {\n    Controller.update(req, res, next);\n});\nrouter.post('/remove', function (req, res, next) {\n    Controller.remove(req, res, next);\n});\nrouter.get('/', function (req, res, next) {\n    Controller.getall(req, res, next);\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/router.js?");

/***/ }),

/***/ "./src/helpers/envPort.js":
/*!********************************!*\
  !*** ./src/helpers/envPort.js ***!
  \********************************/
/*! exports provided: port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"port\", function() { return port; });\nconst port = process.env.PORT || 3001;\n\n//# sourceURL=webpack:///./src/helpers/envPort.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    return `\n        <html>\n            <head>\n                <meta charset=\"utf-8\">\n                <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n                <title>Node || React || TodoList</title>\n                <!-- Tell the browser to be responsive to screen width -->\n                <meta content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" name=\"viewport\">         \n                <!-- Font Awesome -->                \n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css\"\n                  integrity=\"sha256-UzFD2WYH2U1dQpKDjjZK72VtPeWP50NoJjd26rnAdUI=\" crossorigin=\"anonymous\" />                  \n            </head>         \n            <body>            \n                <!--Main-Div-->\n                <div id=\"root\"></div>                    \n                <script src=\"/public.js\"></script>\n            </body>          \n        </html>\n    `;\n});\n\n//# sourceURL=webpack:///./src/helpers/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_envPort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/envPort */ \"./src/helpers/envPort.js\");\n/* harmony import */ var _routes_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/router */ \"./routes/router.js\");\n/* harmony import */ var _routes_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/index */ \"./src/helpers/index.js\");\n\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\n// import Port\n\n// import Router\n\n//Layout\n\n\n/* Use Public Folder */\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.use(bodyParser.urlencoded({ extended: true }));\napp.use(bodyParser.json());\n// db\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(\"mongodb://localhost:27017/todo\", { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }).then(() => console.log('DB connected')).catch(err => {\n    console.log(err);\n});\n//\n//API\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default()(`http://localhost:${_helpers_envPort__WEBPACK_IMPORTED_MODULE_3__[\"port\"]}`, {\n    proxyReqOptDecorator(opts) {\n        opts.headers['x-forwarded-host'] = `localhost:${_helpers_envPort__WEBPACK_IMPORTED_MODULE_3__[\"port\"]}`;\n        return opts;\n    }\n}));\n//\napp.use('/todo', _routes_router__WEBPACK_IMPORTED_MODULE_4___default.a);\n//\napp.use('/', (req, res) => {\n    res.send(Object(_helpers_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n});\napp.listen(_helpers_envPort__WEBPACK_IMPORTED_MODULE_3__[\"port\"], () => {\n    console.log(`App listening on port ${_helpers_envPort__WEBPACK_IMPORTED_MODULE_3__[\"port\"]}!`);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./validators/index.js":
/*!*****************************!*\
  !*** ./validators/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { validationResult } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nexports.runValidation = (req, res, next) => {\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n        return res.status(422).json({ error: errors.array()[0].msg });\n    }\n    next();\n};\n\n//# sourceURL=webpack:///./validators/index.js?");

/***/ }),

/***/ "./validators/todo.js":
/*!****************************!*\
  !*** ./validators/todo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { check } = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nexports.todoValidator = [check('name').not().isEmpty().withMessage('Name is required')];\n\n//# sourceURL=webpack:///./validators/todo.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });