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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvRCxJQUFNUSxXQUFXLEdBQUcsMkVBQTJFO0lBQy9GLElBQU1DLE9BQU8sR0FBRyxnREFBZ0Q7SUFFaEVILENBQUMsQ0FBQ0ksU0FBUyxDQUFDRCxPQUFPLEVBQUU7TUFBRUUsT0FBTyxFQUFFLEVBQUU7TUFBRUgsV0FBVyxFQUFYQTtJQUFZLENBQUMsQ0FBQyxDQUFDSSxLQUFLLENBQUN2QixHQUFHLENBQUM7SUFFN0RpQixDQUFDLENBQUNPLE1BQU0sQ0FBQyxDQUFDZCxRQUFRLEVBQUVDLFNBQVMsQ0FBQyxDQUFDLENBQUNZLEtBQUssQ0FBQ3ZCLEdBQUcsQ0FBQztFQUdsRCxDQUFDLENBQUM7O0VBRUY7O0VBRUFwRCxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQzZFLE9BQU8sQ0FBQztJQUMzQkMsS0FBSyxFQUFFO0VBQ1gsQ0FBQyxDQUFDO0FBR04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMxTkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICogXG4gKi9cblxucmVxdWlyZSgnanF1ZXJ5Jyk7XG5cblxuXG5pbXBvcnQgJ2pxdWVyeS11aS91aS93aWRnZXQnO1xuaW1wb3J0ICdqcXVlcnktdWkvdWkvd2lkZ2V0cy9kcmFnZ2FibGUnO1xuaW1wb3J0ICdqcXVlcnktdWkvdWkvd2lkZ2V0cy9hdXRvY29tcGxldGUnO1xuaW1wb3J0ICdzZWxlY3QyJztcbmltcG9ydCBcImxlYWZsZXRcIjtcblxuaW1wb3J0ICcuL2pzL21haW4uanMnO1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbiAvLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcblxuIGltcG9ydCAnLi9pbWcvbG9nb19iaWVuLWV0cmUuanBnJztcblxuXG5cblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgIC8vIEdlc3Rpb24gZGUgY2xpYyBtZW51IGhhbWJ1cmdlclxyXG5cclxuICAgIGxldCBvdXZyaXJfbWVudSA9ICQoXCIjb3V2cmlyLW1lbnVcIik7XHJcbiAgICBsZXQgZmVybWVyX21lbnUgPSAkKFwiI2Zlcm1lci1tZW51XCIpO1xyXG4gICAgbGV0IG1lbnUgPSAkKCcjY29udGVudS1tZW51Jyk7XHJcbiAgIFxyXG5cclxuICAgIG91dnJpcl9tZW51Lm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtZW51LnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgbGV0IGlzT3BlbiA9IG1lbnUuaGFzQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihpc09wZW4pe1xyXG5cclxuICAgICAgICAgICAgbWVudS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1lbnUuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAvLyBBcHBlbCBkZSBwbHVzIGRlIGNhdGVnb3JpZXMgYXUgY2xpYyBzdXIgXCJwbHVzXCJcclxuXHJcblxyXG4gICAgbGV0IHBsdXMgPSAkKFwiI3BsdXNDYXRlZ29yaWVzXCIpO1xyXG4gICAgY29uc29sZS5sb2cocGx1cyk7XHJcbiAgICBsZXQgbGlzdGUgPSAkKCcubGlzdGUtY2F0ZWdvcmllcycpO1xyXG4gICAgbGV0IGNhdGVnX2F2YW50X2NsaWMgPSAkKFwiI2NhdCBhXCIpLmxlbmd0aDtcclxuXHJcbiAgICBsZXQgaSA9IDA7XHJcblxyXG5cclxuICAgIHBsdXMub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7IFxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgIGxldCB2YWwgPSAkKHRoaXMpLmh0bWwoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codmFsKTtcclxuXHJcbiAgICAgICAgJC5hamF4KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9jYXRlZ29yaWUvJyskKHRoaXMpLmh0bWwoKSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJywgIFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6J2pzb24nLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihpPT1kYXRhLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihpPTA7IGk8ZGF0YS5sZW5ndGgtY2F0ZWdfYXZhbnRfY2xpYzsgaSsrKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGkgPSAkKGA8bGkgaWQ9XCJjYXRcIj48YSBocmVmPVwiI1wiPiR7ZGF0YVtpXS5ub219PC9hPjwvbGk+YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZS5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGk9Y2F0ZWdfYXZhbnRfY2xpYzsgaTxkYXRhLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGkgPSAkKGA8bGkgaWQ9XCJjYXRcIj48YSBocmVmPVwiI1wiPiR7ZGF0YVtpXS5ub219PC9hPjwvbGk+YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZS5hcHBlbmQobGkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgXHJcblxyXG4gICAgLy8gVGVzdCBKUXVlcnkgVUlcclxuXHJcbiAgICAkKCcubWFpbi1jb250YWluZXIgcCcpLmRyYWdnYWJsZSgpO1xyXG4gICAgLy8gdmFyIHRlc3QgPSBbXCJoZWxsb1wiLCBcInNhbHV0XCIsIFwieWFtYnVcIiwgXCJob2xhXCIsIFwiamFtYm9cIl07XHJcblxyXG4gICAgXHJcbiAgICAkKCcuY3AnKS5hdXRvY29tcGxldGUoe1xyXG4gICAgICAgIHNvdXJjZTogZnVuY3Rpb24ocmVxdWVzdCwgcmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5vZHdiLmJlL2FwaS9yZWNvcmRzLzEuMC9zZWFyY2gvP2RhdGFzZXQ9Y29kZS1wb3N0YXV4LWJlbGdlJnEnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhOnsgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBxOiByZXF1ZXN0LnRlcm0sXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJkYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtwdXNoOmZ1bmN0aW9uIHB1c2goZWxlbWVudCl7IFtdLnB1c2guY2FsbCh0aGlzLGVsZW1lbnQpfX07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjbGUgaW4gZGF0YS5yZWNvcmRzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA+PSAxMDAwICYmIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPCAxMzAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiQnJ1eGVsbGVzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gMTMwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgMTUwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkJyYWJhbnQgd2FsbG9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gMTUwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgMjAwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkJyYWJhbnQgZmxhbWFuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gMjAwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgMzAwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkFudmVyc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gMzAwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgMzUwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkJyYWJhbnQgZmxhbWFuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gMzUwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgNDAwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkxpbWJvdXJnXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA+PSA0MDAwICYmIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPCA1MDAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiTGnDqGdlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA+PSA1MDAwICYmIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPD0gNTY4MDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIk5hbXVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA+PSA2MDAwICYmIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPCA2NjAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiSGFpbmF1dFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gNjYwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgNzAwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIkx1eGVtYm91cmdcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpID49IDcwMDAgJiYgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA8IDgwMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJIYWluYXV0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcGFyc2VJbnQoZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xKSA+PSA4MDAwICYmIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPCA5MDAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiRmxhbmRyZSBvY2NpZGVudGFsZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHBhcnNlSW50KGRhdGEucmVjb3Jkc1tjbGVdLmZpZWxkcy5jb2x1bW5fMSkgPj0gOTAwMCAmJiBwYXJzZUludChkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzEpIDwgMTAwMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJGbGFuZHJlIG9yaWVudGFsZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiYydlc3Qgw6AgY8O0dMOpIGRlIGxhIEJlbGdpcXVlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9iai5wdXNoKHtjb2RlcF9jb21tdW5lOiBkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzErXCIgXCIrZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8yLCBjb2RlcDogZGF0YS5yZWNvcmRzW2NsZV0uZmllbGRzLmNvbHVtbl8xLCBjb21tdW5lOiBkYXRhLnJlY29yZHNbY2xlXS5maWVsZHMuY29sdW1uXzIsIHByb3ZpbmNlOiByZXN1bHR9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViZGF0YS5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3ViZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlKCQubWFwKHN1YmRhdGFbMF0sIGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0uY29kZXBfY29tbXVuZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW06IGl0ZW0uY29tbXVuZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3Y6IGl0ZW0ucHJvdmluY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5jb2RlcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0OiBmdW5jdGlvbihldmVudCwgdWkpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnLmNwJykudmFsKHVpLml0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICAkKCcuY29tbXVuZScpLnZhbCh1aS5pdGVtLmNvbW0pO1xyXG4gICAgICAgICAgICAkKCcubG9jYWxpdGUnKS52YWwodWkuaXRlbS5wcm92KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBhZHJlc3NlID0gJCgnI2FkcmVzc2UnKS5odG1sKCk7XHJcbiAgIFxyXG4gICAgbGV0IGxhdGl0dWRlID0gXCJcIjtcclxuICAgIGxldCBsb25naXR1ZGUgPSBcIlwiO1xyXG4gICAgXHJcblxyXG4gICAgJC5nZXQobG9jYXRpb24ucHJvdG9jb2wgKyAnLy9ub21pbmF0aW0ub3BlbnN0cmVldG1hcC5vcmcvc2VhcmNoP2Zvcm1hdD1qc29uJnE9JythZHJlc3NlLCBmdW5jdGlvbihkYXRhKXtcclxuXHJcbiAgICAgICAgLy8gU2kgbCdhZHJlc3NlIGR1IHByZXN0YXRhaXJlIGVzdCB2YWxpZGUsIGFmZmljaGVyIGxhIGNhcnRlIGV0IGxlIGxvY2FsaXNlclxyXG5cclxuICAgICAgXHJcbiAgICAgICAgICAgIGxhdGl0dWRlID0gZGF0YVswXS5sYXQ7XHJcbiAgICAgICAgICAgIGxvbmdpdHVkZSA9IGRhdGFbMF0ubG9uO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFwID0gTC5tYXAoJ21hQ2FydGUnKS5zZXRWaWV3KFtsYXRpdHVkZSwgbG9uZ2l0dWRlXSwgMTMpO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGlvbiA9ICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4nO1xyXG4gICAgICAgICAgICBjb25zdCB0aWxlVXJsID0gJ2h0dHBzOi8vdGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBMLnRpbGVMYXllcih0aWxlVXJsLCB7IG1heFpvb206IDE4LCBhdHRyaWJ1dGlvbiB9KS5hZGRUbyhtYXApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIEwubWFya2VyKFtsYXRpdHVkZSwgbG9uZ2l0dWRlXSkuYWRkVG8obWFwKTtcclxuICAgXHJcbiAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF1dG8gY29tcGxldGlvbiBzdXIgbGUgc2VsZWN0IGRlcyBjYXTDqWdvcmllc1xyXG4gICBcclxuICAgICQoJy5zZWxlY3QtY2F0ZWdvcmllJykuc2VsZWN0Mih7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSk7XHJcbiAgIFxyXG4gICBcclxufSlcclxuXHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZXF1aXJlIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCIkIiwib3V2cmlyX21lbnUiLCJmZXJtZXJfbWVudSIsIm1lbnUiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwiaXNPcGVuIiwiaGFzQ2xhc3MiLCJjc3MiLCJwbHVzIiwiY29uc29sZSIsImxvZyIsImxpc3RlIiwiY2F0ZWdfYXZhbnRfY2xpYyIsImxlbmd0aCIsImkiLCJ2YWwiLCJodG1sIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImRhdGEiLCJlbXB0eSIsImxpIiwibm9tIiwiYXBwZW5kIiwiZHJhZ2dhYmxlIiwiYXV0b2NvbXBsZXRlIiwic291cmNlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwicSIsInRlcm0iLCJzdWJkYXRhIiwicmVzdWx0Iiwib2JqIiwicHVzaCIsImNhbGwiLCJjbGUiLCJyZWNvcmRzIiwicGFyc2VJbnQiLCJmaWVsZHMiLCJjb2x1bW5fMSIsImNvZGVwX2NvbW11bmUiLCJjb2x1bW5fMiIsImNvZGVwIiwiY29tbXVuZSIsInByb3ZpbmNlIiwibWFwIiwiaXRlbSIsImxhYmVsIiwiY29tbSIsInByb3YiLCJ2YWx1ZSIsInNlbGVjdCIsImV2ZW50IiwidWkiLCJhZHJlc3NlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJnZXQiLCJsb2NhdGlvbiIsInByb3RvY29sIiwibGF0IiwibG9uIiwiTCIsInNldFZpZXciLCJhdHRyaWJ1dGlvbiIsInRpbGVVcmwiLCJ0aWxlTGF5ZXIiLCJtYXhab29tIiwiYWRkVG8iLCJtYXJrZXIiLCJzZWxlY3QyIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9