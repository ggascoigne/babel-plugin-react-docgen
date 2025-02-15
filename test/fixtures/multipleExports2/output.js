// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should multipleExports2 1`] = `
"\\"use strict\\";

function _typeof(obj) { \\"@babel/helpers - typeof\\"; return _typeof = \\"function\\" == typeof Symbol && \\"symbol\\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \\"function\\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \\"symbol\\" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, \\"__esModule\\", {
  value: true
});
exports[\\"default\\"] = void 0;

var _react = _interopRequireDefault(require(\\"react\\"));

var _propTypes = _interopRequireDefault(require(\\"prop-types\\"));

var _reactRouterDom = require(\\"react-router-dom\\");

var _BreadcrumbStyled = _interopRequireDefault(require(\\"./style/BreadcrumbStyled\\"));

var _OlStyled = _interopRequireDefault(require(\\"./style/OlStyled\\"));

var _LiStyled = _interopRequireDefault(require(\\"./style/LiStyled\\"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Breadcrumb = /*#__PURE__*/function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  var _super = _createSuper(Breadcrumb);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _super.apply(this, arguments);
  }

  _createClass(Breadcrumb, [{
    key: \\"render\\",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          primary = _this$props.primary,
          secondary = _this$props.secondary,
          info = _this$props.info,
          success = _this$props.success,
          danger = _this$props.danger,
          warning = _this$props.warning,
          rtl = _this$props.rtl;
      var elements = [];

      for (var i = 0; i < items.length - 1; i += 1) {
        elements.push(items[i]);
      }

      var lastElement = items[items.length - 1];
      var themeProps = {
        primary: primary,
        secondary: secondary,
        info: info,
        success: success,
        danger: danger,
        warning: warning,
        rtl: rtl
      };
      return /*#__PURE__*/_react[\\"default\\"].createElement(_BreadcrumbStyled[\\"default\\"], this.props, /*#__PURE__*/_react[\\"default\\"].createElement(_OlStyled[\\"default\\"], themeProps, elements.map(function (item, index) {
        return /*#__PURE__*/_react[\\"default\\"].createElement(_LiStyled[\\"default\\"], _extends({
          key: index
        }, themeProps), /*#__PURE__*/_react[\\"default\\"].createElement(_reactRouterDom.Link, {
          to: item.path
        }, item.name));
      }), /*#__PURE__*/_react[\\"default\\"].createElement(_LiStyled[\\"default\\"], themeProps, lastElement.name)));
    }
  }]);

  return Breadcrumb;
}(_react[\\"default\\"].Component);

Breadcrumb.propTypes = {
  /** array of objects */
  items: _propTypes[\\"default\\"].array.isRequired,

  /** rtl is true component show  in right side of the window, default is false (from left side). */
  rtl: _propTypes[\\"default\\"].bool,

  /** Boolean indicating whether the component renders with Theme.primary color */
  primary: _propTypes[\\"default\\"].bool,

  /** Boolean indicating whether the component renders with Theme.secondary color */
  secondary: _propTypes[\\"default\\"].bool,

  /** Boolean indicating whether the component renders with Theme.info color */
  info: _propTypes[\\"default\\"].bool,

  /** Boolean indicating whether the component renders with Theme.warning color  */
  warning: _propTypes[\\"default\\"].bool,

  /** Boolean indicating whether the component renders with Theme.danger color  */
  danger: _propTypes[\\"default\\"].bool,

  /** Boolean indicating whether the component renders with Theme.success color */
  success: _propTypes[\\"default\\"].bool,

  /** The inline-styles for the root element. */
  style: _propTypes[\\"default\\"].object,

  /** The className for the root element. */
  className: _propTypes[\\"default\\"].string,

  /** The color renders with Theme.foreColor . */
  foreColor: _propTypes[\\"default\\"].string
};
Breadcrumb.defaultProps = {
  rtl: false,
  primary: false,
  secondary: false,
  info: false,
  warning: false,
  danger: false,
  success: false,
  style: {},
  className: '',
  foreColor: ''
};
Breadcrumb.__docgenInfo = {
  \\"description\\": \\"\\",
  \\"methods\\": [],
  \\"displayName\\": \\"Breadcrumb\\",
  \\"props\\": {
    \\"rtl\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"false\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"bool\\"
      },
      \\"required\\": false,
      \\"description\\": \\"rtl is true component show  in right side of the window, default is false (from left side).\\"
    },
    \\"primary\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"false\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"bool\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Boolean indicating whether the component renders with Theme.primary color\\"
    },
    \\"secondary\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"false\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"bool\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Boolean indicating whether the component renders with Theme.secondary color\\"
    },
    \\"info\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"false\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"bool\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Boolean indicating whether the component renders with Theme.info color\\"
    },
    \\"warning\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"false\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"bool\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Boolean indicating whether the component renders with Theme.warning color\\"
    },
    \\"danger\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"false\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"bool\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Boolean indicating whether the component renders with Theme.danger color\\"
    },
    \\"success\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"false\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"bool\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Boolean indicating whether the component renders with Theme.success color\\"
    },
    \\"style\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"{}\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"object\\"
      },
      \\"required\\": false,
      \\"description\\": \\"The inline-styles for the root element.\\"
    },
    \\"className\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"''\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"string\\"
      },
      \\"required\\": false,
      \\"description\\": \\"The className for the root element.\\"
    },
    \\"foreColor\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"''\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"string\\"
      },
      \\"required\\": false,
      \\"description\\": \\"The color renders with Theme.foreColor .\\"
    },
    \\"items\\": {
      \\"type\\": {
        \\"name\\": \\"array\\"
      },
      \\"required\\": true,
      \\"description\\": \\"array of objects\\"
    }
  }
};
var _default = Breadcrumb;
exports[\\"default\\"] = _default;

if (typeof STORYBOOK_REACT_CLASSES !== \\"undefined\\") {
  STORYBOOK_REACT_CLASSES[\\"relativePath(input.js)\\"] = {
    name: \\"Breadcrumb\\",
    docgenInfo: Breadcrumb.__docgenInfo,
    path: \\"relativePath(input.js)\\"
  };
}"
`;
