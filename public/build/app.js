(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_ui_ui_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-ui/ui/widget */ "./node_modules/jquery-ui/ui/widget.js");
/* harmony import */ var jquery_ui_ui_widget__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widget__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_ui_widgets_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/draggable */ "./node_modules/jquery-ui/ui/widgets/draggable.js");
/* harmony import */ var jquery_ui_ui_widgets_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_ui_ui_widgets_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-ui/ui/widgets/autocomplete */ "./node_modules/jquery-ui/ui/widgets/autocomplete.js");
/* harmony import */ var jquery_ui_ui_widgets_autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/main.js */ "./assets/js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _img_logo_bien_etre_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/logo_bien-etre.jpg */ "./assets/img/logo_bien-etre.jpg");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 * 
 */

__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application

// loads the jquery package from node_modules



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
$(function () {
  // Gestion de clic menu hamburger

  var ouvrir_menu = $("#ouvrir-menu");
  var fermer_menu = $("#fermer-menu");
  var menu = $('#contenu-menu');
  ouvrir_menu.on('click', function (e) {
    e.preventDefault();
    menu.toggleClass('open');
    var isOpen = menu.hasClass('open');
    if (isOpen) {
      menu.css('display', 'block');
    } else {
      menu.css('display', 'none');
    }
  });

  // Appel de plus de categories au clic sur "plus"

  var plus = $("#plusCategories");
  console.log(plus);
  var liste = $('.liste-categories');
  var categ_avant_clic = $("#cat a").length;
  var i = 0;
  plus.on('click', function (e) {
    e.preventDefault();
    var val = $(this).html();
    console.log(val);
    $.ajax({
      url: '/categorie/' + $(this).html(),
      method: 'GET',
      dataType: 'json',
      success: function success(data) {
        console.log(data);
        liste.empty();
        if (i == data.length) {
          for (i = 0; i < data.length - categ_avant_clic; i++) {
            var li = $("<li id=\"cat\"><a href=\"#\">".concat(data[i].nom, "</a></li>"));
            liste.append(li);
          }
        } else {
          for (i = categ_avant_clic; i < data.length; i++) {
            var _li = $("<li id=\"cat\"><a href=\"#\">".concat(data[i].nom, "</a></li>"));
            liste.append(_li);
          }
        }
      }
    });
  });

  // Test JQuery UI

  $('.main-container p').draggable();
  // var test = ["hello", "salut", "yambu", "hola", "jambo"];

  $('.cp').autocomplete({
    source: function source(request, response) {
      $.ajax({
        url: 'https://www.odwb.be/api/records/1.0/search/?dataset=code-postaux-belge&q',
        method: 'GET',
        dataType: 'json',
        data: {
          q: request.term
        },
        success: function success(data) {
          var subdata = [];
          var result = "";
          var obj = {
            push: function push(element) {
              [].push.call(this, element);
            }
          };
          for (cle in data.records) {
            switch (true) {
              case parseInt(data.records[cle].fields.column_1) >= 1000 && parseInt(data.records[cle].fields.column_1) < 1300:
                result = "Bruxelles";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 1300 && parseInt(data.records[cle].fields.column_1) < 1500:
                result = "Brabant wallon";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 1500 && parseInt(data.records[cle].fields.column_1) < 2000:
                result = "Brabant flamand";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 2000 && parseInt(data.records[cle].fields.column_1) < 3000:
                result = "Anvers";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 3000 && parseInt(data.records[cle].fields.column_1) < 3500:
                result = "Brabant flamand";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 3500 && parseInt(data.records[cle].fields.column_1) < 4000:
                result = "Limbourg";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 4000 && parseInt(data.records[cle].fields.column_1) < 5000:
                result = "Liège";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 5000 && parseInt(data.records[cle].fields.column_1) <= 5680:
                result = "Namur";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 6000 && parseInt(data.records[cle].fields.column_1) < 6600:
                result = "Hainaut";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 6600 && parseInt(data.records[cle].fields.column_1) < 7000:
                result = "Luxembourg";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 7000 && parseInt(data.records[cle].fields.column_1) < 8000:
                result = "Hainaut";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 8000 && parseInt(data.records[cle].fields.column_1) < 9000:
                result = "Flandre occidentale";
                break;
              case parseInt(data.records[cle].fields.column_1) >= 9000 && parseInt(data.records[cle].fields.column_1) < 10000:
                result = "Flandre orientale";
                break;
              default:
                result = "c'est à côté de la Belgique";
                break;
            }
            obj.push({
              codep_commune: data.records[cle].fields.column_1 + " " + data.records[cle].fields.column_2,
              codep: data.records[cle].fields.column_1,
              commune: data.records[cle].fields.column_2,
              province: result
            });
          }
          subdata.push(obj);
          console.log(subdata);
          response($.map(subdata[0], function (item) {
            return {
              label: item.codep_commune,
              comm: item.commune,
              prov: item.province,
              value: item.codep
            };
          }));
        }
      });
    },
    select: function select(event, ui) {
      $('.cp').val(ui.item.value);
      $('.commune').val(ui.item.comm);
      $('.localite').val(ui.item.prov);
    }
  });
  var adresse = $('#adresse').html();
  var latitude = "";
  var longitude = "";
  $.get(location.protocol + '//nominatim.openstreetmap.org/search?format=json&q=' + adresse, function (data) {
    // Si l'adresse du prestataire est valide, afficher la carte et le localiser

    latitude = data[0].lat;
    longitude = data[0].lon;
    var map = L.map('maCarte').setView([latitude, longitude], 13);
    var attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    var tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    L.tileLayer(tileUrl, {
      maxZoom: 18,
      attribution: attribution
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map);
  });

  // Auto completion sur le select des catégories

  $('.select-categorie').select2({
    width: '100%'
  });
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/img/logo_bien-etre.jpg":
/*!***************************************!*\
  !*** ./assets/img/logo_bien-etre.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo_bien-etre.8f11f642.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-37d84c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvRCxJQUFNUSxXQUFXLEdBQUcsMkVBQTJFO0lBQy9GLElBQU1DLE9BQU8sR0FBRyxnREFBZ0Q7SUFFaEVILENBQUMsQ0FBQ0ksU0FBUyxDQUFDRCxPQUFPLEVBQUU7TUFBRUUsT0FBTyxFQUFFLEVBQUU7TUFBRUgsV0FBVyxFQUFYQTtJQUFZLENBQUMsQ0FBQyxDQUFDSSxLQUFLLENBQUN2QixHQUFHLENBQUM7SUFFN0RpQixDQUFDLENBQUNPLE1BQU0sQ0FBQyxDQUFDZCxRQUFRLEVBQUVDLFNBQVMsQ0FBQyxDQUFDLENBQUNZLEtBQUssQ0FBQ3ZCLEdBQUcsQ0FBQztFQUdsRCxDQUFDLENBQUM7O0VBRUY7O0VBRUFwRCxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQzZFLE9BQU8sQ0FBQztJQUMzQkMsS0FBSyxFQUFFO0VBQ1gsQ0FBQyxDQUFDO0FBR04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMxTkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICogXHJcbiAqL1xyXG5cclxucmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5cclxuXHJcbmltcG9ydCAnanF1ZXJ5LXVpL3VpL3dpZGdldCc7XHJcbmltcG9ydCAnanF1ZXJ5LXVpL3VpL3dpZGdldHMvZHJhZ2dhYmxlJztcclxuaW1wb3J0ICdqcXVlcnktdWkvdWkvd2lkZ2V0cy9hdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgJ3NlbGVjdDInO1xyXG5pbXBvcnQgXCJsZWFmbGV0XCI7XHJcblxyXG5pbXBvcnQgJy4vanMvbWFpbi5qcyc7XHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG4gLy8gbG9hZHMgdGhlIGpxdWVyeSBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcblxyXG4gaW1wb3J0ICcuL2ltZy9sb2dvX2JpZW4tZXRyZS5qcGcnO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICAvLyBHZXN0aW9uIGRlIGNsaWMgbWVudSBoYW1idXJnZXJcclxuXHJcbiAgICBsZXQgb3V2cmlyX21lbnUgPSAkKFwiI291dnJpci1tZW51XCIpO1xyXG4gICAgbGV0IGZlcm1lcl9tZW51ID0gJChcIiNmZXJtZXItbWVudVwiKTtcclxuICAgIGxldCBtZW51ID0gJCgnI2NvbnRlbnUtbWVudScpO1xyXG4gICBcclxuXHJcbiAgICBvdXZyaXJfbWVudS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbWVudS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGxldCBpc09wZW4gPSBtZW51Lmhhc0NsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaXNPcGVuKXtcclxuXHJcbiAgICAgICAgICAgIG1lbnUuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtZW51LmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgLy8gQXBwZWwgZGUgcGx1cyBkZSBjYXRlZ29yaWVzIGF1IGNsaWMgc3VyIFwicGx1c1wiXHJcblxyXG5cclxuICAgIGxldCBwbHVzID0gJChcIiNwbHVzQ2F0ZWdvcmllc1wiKTtcclxuICAgIGNvbnNvbGUubG9nKHBsdXMpO1xyXG4gICAgbGV0IGxpc3RlID0gJCgnLmxpc3RlLWNhdGVnb3JpZXMnKTtcclxuICAgIGxldCBjYXRlZ19hdmFudF9jbGljID0gJChcIiNjYXQgYVwiKS5sZW5ndGg7XHJcblxyXG4gICAgbGV0IGkgPSAwO1xyXG5cclxuXHJcbiAgICBwbHVzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpeyBcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICBsZXQgdmFsID0gJCh0aGlzKS5odG1sKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XHJcblxyXG4gICAgICAgICQuYWpheChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOicvY2F0ZWdvcmllLycrJCh0aGlzKS5odG1sKCksXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsICBcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOidqc29uJyxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGUuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaT09ZGF0YS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoaT0wOyBpPGRhdGEubGVuZ3RoLWNhdGVnX2F2YW50X2NsaWM7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpID0gJChgPGxpIGlkPVwiY2F0XCI+PGEgaHJlZj1cIiNcIj4ke2RhdGFbaV0ubm9tfTwvYT48L2xpPmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGUuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihpPWNhdGVnX2F2YW50X2NsaWM7IGk8ZGF0YS5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpID0gJChgPGxpIGlkPVwiY2F0XCI+PGEgaHJlZj1cIiNcIj4ke2RhdGFbaV0ubm9tfTwvYT48L2xpPmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGUuYXBwZW5kKGxpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgIFxyXG5cclxuICAgIC8vIFRlc3QgSlF1ZXJ5IFVJXHJcblxyXG4gICAgJCgnLm1haW4tY29udGFpbmVyIHAnKS5kcmFnZ2FibGUoKTtcclxuICAgIC8vIHZhciB0ZXN0ID0gW1wiaGVsbG9cIiwgXCJzYWx1dFwiLCBcInlhbWJ1XCIsIFwiaG9sYVwiLCBcImphbWJvXCJdO1xyXG5cclxuICAgIFxyXG4gICAgJCgnLmNwJykuYXV0b2NvbXBsZXRlKHtcclxuICAgICAgICBzb3VyY2U6IGZ1bmN0aW9uKHJlcXVlc3QsIHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cub2R3Yi5iZS9hcGkvcmVjb3Jkcy8xLjAvc2VhcmNoLz9kYXRhc2V0PWNvZGUtcG9zdGF1eC1iZWxnZSZxJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YTp7IFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcTogcmVxdWVzdC50ZXJtLFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ViZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7cHVzaDpmdW5jdGlvbiBwdXNoKGVsZW1lbnQpeyBbXS5wdXNoLmNhbGwodGhpcyxlbGVtZW50KX19O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IoY2xlIGluIGRhdGEucmVjb3Jkcyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2godHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gMTAwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgMTMwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkJydXhlbGxlc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpID49IDEzMDAgJiYgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA8IDE1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJCcmFiYW50IHdhbGxvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpID49IDE1MDAgJiYgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA8IDIwMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJCcmFiYW50IGZsYW1hbmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpID49IDIwMDAgJiYgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA8IDMwMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJBbnZlcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpID49IDMwMDAgJiYgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA8IDM1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJCcmFiYW50IGZsYW1hbmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpID49IDM1MDAgJiYgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA8IDQwMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJMaW1ib3VyZ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gNDAwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgNTAwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkxpw6hnZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gNTAwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDw9IDU2ODA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJOYW11clwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gNjAwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgNjYwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkhhaW5hdXRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpID49IDY2MDAgJiYgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA8IDcwMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJMdXhlbWJvdXJnXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA+PSA3MDAwICYmIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPCA4MDAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiSGFpbmF1dFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gODAwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgOTAwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkZsYW5kcmUgb2NjaWRlbnRhbGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpID49IDkwMDAgJiYgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA8IDEwMDAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiRmxhbmRyZSBvcmllbnRhbGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcImMnZXN0IMOgIGPDtHTDqSBkZSBsYSBCZWxnaXF1ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBvYmoucHVzaCh7Y29kZXBfY29tbXVuZTogZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xK1wiIFwiK2RhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMiwgY29kZXA6IGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSwgY29tbXVuZTogZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8yLCBwcm92aW5jZTogcmVzdWx0fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmRhdGEucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1YmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSgkLm1hcChzdWJkYXRhWzBdLCBmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLmNvZGVwX2NvbW11bmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tOiBpdGVtLmNvbW11bmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92OiBpdGVtLnByb3ZpbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uY29kZXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdDogZnVuY3Rpb24oZXZlbnQsIHVpKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJy5jcCcpLnZhbCh1aS5pdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgJCgnLmNvbW11bmUnKS52YWwodWkuaXRlbS5jb21tKTtcclxuICAgICAgICAgICAgJCgnLmxvY2FsaXRlJykudmFsKHVpLml0ZW0ucHJvdik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgYWRyZXNzZSA9ICQoJyNhZHJlc3NlJykuaHRtbCgpO1xyXG4gICBcclxuICAgIGxldCBsYXRpdHVkZSA9IFwiXCI7XHJcbiAgICBsZXQgbG9uZ2l0dWRlID0gXCJcIjtcclxuICAgIFxyXG5cclxuICAgICQuZ2V0KGxvY2F0aW9uLnByb3RvY29sICsgJy8vbm9taW5hdGltLm9wZW5zdHJlZXRtYXAub3JnL3NlYXJjaD9mb3JtYXQ9anNvbiZxPScrYWRyZXNzZSwgZnVuY3Rpb24oZGF0YSl7XHJcblxyXG4gICAgICAgIC8vIFNpIGwnYWRyZXNzZSBkdSBwcmVzdGF0YWlyZSBlc3QgdmFsaWRlLCBhZmZpY2hlciBsYSBjYXJ0ZSBldCBsZSBsb2NhbGlzZXJcclxuXHJcbiAgICAgIFxyXG4gICAgICAgICAgICBsYXRpdHVkZSA9IGRhdGFbMF0ubGF0O1xyXG4gICAgICAgICAgICBsb25naXR1ZGUgPSBkYXRhWzBdLmxvbjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IEwubWFwKCdtYUNhcnRlJykuc2V0VmlldyhbbGF0aXR1ZGUsIGxvbmdpdHVkZV0sIDEzKTtcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRpb24gPSAnJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+JztcclxuICAgICAgICAgICAgY29uc3QgdGlsZVVybCA9ICdodHRwczovL3RpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJztcclxuICAgICAgICBcclxuICAgICAgICAgICAgTC50aWxlTGF5ZXIodGlsZVVybCwgeyBtYXhab29tOiAxOCwgYXR0cmlidXRpb24gfSkuYWRkVG8obWFwKTtcclxuICAgIFxyXG4gICAgICAgICAgICBMLm1hcmtlcihbbGF0aXR1ZGUsIGxvbmdpdHVkZV0pLmFkZFRvKG1hcCk7XHJcbiAgIFxyXG4gICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdXRvIGNvbXBsZXRpb24gc3VyIGxlIHNlbGVjdCBkZXMgY2F0w6lnb3JpZXNcclxuICAgXHJcbiAgICAkKCcuc2VsZWN0LWNhdGVnb3JpZScpLnNlbGVjdDIoe1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH0pO1xyXG4gICBcclxuICAgXHJcbn0pXHJcblxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwicmVxdWlyZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwiJCIsIm91dnJpcl9tZW51IiwiZmVybWVyX21lbnUiLCJtZW51Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsImlzT3BlbiIsImhhc0NsYXNzIiwiY3NzIiwicGx1cyIsImNvbnNvbGUiLCJsb2ciLCJsaXN0ZSIsImNhdGVnX2F2YW50X2NsaWMiLCJsZW5ndGgiLCJpIiwidmFsIiwiaHRtbCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiZW1wdHkiLCJsaSIsIm5vbSIsImFwcGVuZCIsImRyYWdnYWJsZSIsImF1dG9jb21wbGV0ZSIsInNvdXJjZSIsInJlcXVlc3QiLCJyZXNwb25zZSIsInEiLCJ0ZXJtIiwic3ViZGF0YSIsInJlc3VsdCIsIm9iaiIsInB1c2giLCJjYWxsIiwiY2xlIiwicmVjb3JkcyIsInBhcnNlSW50IiwiZmllbGRzIiwiY29sdW1uXzEiLCJjb2RlcF9jb21tdW5lIiwiY29sdW1uXzIiLCJjb2RlcCIsImNvbW11bmUiLCJwcm92aW5jZSIsIm1hcCIsIml0ZW0iLCJsYWJlbCIsImNvbW0iLCJwcm92IiwidmFsdWUiLCJzZWxlY3QiLCJldmVudCIsInVpIiwiYWRyZXNzZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZ2V0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImxhdCIsImxvbiIsIkwiLCJzZXRWaWV3IiwiYXR0cmlidXRpb24iLCJ0aWxlVXJsIiwidGlsZUxheWVyIiwibWF4Wm9vbSIsImFkZFRvIiwibWFya2VyIiwic2VsZWN0MiIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==