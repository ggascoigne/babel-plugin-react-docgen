// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should flowType 1`] = `
"\\"use strict\\";

function _typeof(obj) { \\"@babel/helpers - typeof\\"; return _typeof = \\"function\\" == typeof Symbol && \\"symbol\\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \\"function\\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \\"symbol\\" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, \\"__esModule\\", {
  value: true
});
exports[\\"default\\"] = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FlowTypeButton = /*#__PURE__*/function (_React$Component) {
  _inherits(FlowTypeButton, _React$Component);

  var _super = _createSuper(FlowTypeButton);

  function FlowTypeButton() {
    var _this;

    _classCallCheck(this, FlowTypeButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), \\"handleClick\\", function (bar) {
      console.log(bar);
    });

    return _this;
  }

  _createClass(FlowTypeButton, [{
    key: \\"render\\",
    value: function render() {
      return /*#__PURE__*/_react[\\"default\\"].createElement(\\"button\\", {
        onClick: this.handleClick
      }, this.props.label);
    }
  }]);

  return FlowTypeButton;
}(_react[\\"default\\"].Component);

FlowTypeButton.__docgenInfo = {
  \\"description\\": \\"\\",
  \\"methods\\": [{
    \\"name\\": \\"handleClick\\",
    \\"docblock\\": \\"handle click number of times clicked and update parent component via callback\\\\n@return  {string} returns nothing but at least this makes it into docgen\\",
    \\"modifiers\\": [],
    \\"params\\": [{
      \\"name\\": \\"bar\\",
      \\"optional\\": true,
      \\"type\\": {
        \\"name\\": \\"string\\"
      }
    }],
    \\"returns\\": {
      \\"description\\": \\"returns nothing but at least this makes it into docgen\\",
      \\"type\\": {
        \\"name\\": \\"string\\"
      }
    },
    \\"description\\": \\"handle click number of times clicked and update parent component via callback\\"
  }],
  \\"displayName\\": \\"FlowTypeButton\\",
  \\"props\\": {
    \\"label\\": {
      \\"required\\": true,
      \\"flowType\\": {
        \\"name\\": \\"number\\"
      },
      \\"description\\": \\"The text to be rendered in the button\\"
    },
    \\"thing\\": {
      \\"required\\": false,
      \\"flowType\\": {
        \\"name\\": \\"string\\"
      },
      \\"description\\": \\"Some other prop\\"
    }
  }
};
var _default = FlowTypeButton;
exports[\\"default\\"] = _default;

if (typeof STORYBOOK_REACT_CLASSES !== \\"undefined\\") {
  STORYBOOK_REACT_CLASSES[\\"relativePath(input.js)\\"] = {
    name: \\"FlowTypeButton\\",
    docgenInfo: FlowTypeButton.__docgenInfo,
    path: \\"relativePath(input.js)\\"
  };
}"
`;
