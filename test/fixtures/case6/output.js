// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should case6 1`] = `
"\\"use strict\\";

function _typeof(obj) { \\"@babel/helpers - typeof\\"; return _typeof = \\"function\\" == typeof Symbol && \\"symbol\\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \\"function\\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \\"symbol\\" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, \\"__esModule\\", {
  value: true
});
exports.hoc = hoc;

var _react = _interopRequireDefault(require(\\"react\\"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\\"Cannot call a class as a function\\"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\\"value\\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \\"prototype\\", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== \\"function\\" && superClass !== null) { throw new TypeError(\\"Super expression must either be null or a function\\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \\"prototype\\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \\"object\\" || typeof call === \\"function\\")) { return call; } else if (call !== void 0) { throw new TypeError(\\"Derived constructors may only return object or undefined\\"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\\"this hasn't been initialised - super() hasn't been called\\"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === \\"undefined\\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \\"function\\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function hoc(Inner) {
  var C1 = function C1(props) {
    return /*#__PURE__*/_react[\\"default\\"].createElement(ActualC1, props);
  };

  var C2 = function C2(props) {
    return /*#__PURE__*/_react[\\"default\\"].createElement(ActualC2, props);
  };

  return {
    C1: C1,
    C2: C2
  };
}

var ActualC1 = /*#__PURE__*/function (_React$Component) {
  _inherits(ActualC1, _React$Component);

  var _super = _createSuper(ActualC1);

  function ActualC1() {
    _classCallCheck(this, ActualC1);

    return _super.apply(this, arguments);
  }

  _createClass(ActualC1, [{
    key: \\"render\\",
    value: function render() {
      return /*#__PURE__*/_react[\\"default\\"].createElement(\\"div\\", null);
    }
  }]);

  return ActualC1;
}(_react[\\"default\\"].Component);

var ActualC2 = /*#__PURE__*/function (_React$Component2) {
  _inherits(ActualC2, _React$Component2);

  var _super2 = _createSuper(ActualC2);

  function ActualC2() {
    _classCallCheck(this, ActualC2);

    return _super2.apply(this, arguments);
  }

  _createClass(ActualC2, [{
    key: \\"render\\",
    value: function render() {
      return /*#__PURE__*/_react[\\"default\\"].createElement(\\"div\\", null);
    }
  }]);

  return ActualC2;
}(_react[\\"default\\"].Component);"
`;
