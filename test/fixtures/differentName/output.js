// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should differentName 1`] = `
"\\"use strict\\";

function _typeof(obj) { \\"@babel/helpers - typeof\\"; return _typeof = \\"function\\" == typeof Symbol && \\"symbol\\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \\"function\\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \\"symbol\\" : typeof obj; }, _typeof(obj); }

var _react = _interopRequireWildcard(require(\\"react\\"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \\"function\\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \\"object\\" && typeof obj !== \\"function\\") { return { \\"default\\": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \\"default\\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\\"default\\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var stylesheet = {};
/**
 * Component for displaying a container that resembles the original CSS environment for different themes
 */

var OriginalName = /*#__PURE__*/function (_Component) {
  _inherits(OriginalName, _Component);

  var _super = _createSuper(OriginalName);

  function OriginalName() {
    _classCallCheck(this, OriginalName);

    return _super.apply(this, arguments);
  }

  _createClass(OriginalName, [{
    key: \\"getDefaultProps\\",
    value: function getDefaultProps() {
      return {
        theme: 'damask'
      };
    }
  }, {
    key: \\"render\\",
    value: function render() {
      return /*#__PURE__*/_react[\\"default\\"].createElement(\\"div\\", {
        className: stylesheet[this.props.theme]
      }, this.props.children);
    }
  }]);

  return OriginalName;
}(Component());

_defineProperty(OriginalName, \\"displayName\\", 'ThisIsTheDisplayNameNow');

_defineProperty(OriginalName, \\"propTypes\\", {
  /**
   * Theme to display
   */
  theme: _react.PropTypes.string,

  /**
   * The component children
   */
  children: _react.PropTypes.node
});

module.exports = OriginalName;
OriginalName.__docgenInfo = {
  \\"description\\": \\"Component for displaying a container that resembles the original CSS environment for different themes\\",
  \\"methods\\": [],
  \\"displayName\\": \\"ThisIsTheDisplayNameNow\\",
  \\"props\\": {
    \\"theme\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"'damask'\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"string\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Theme to display\\"
    },
    \\"children\\": {
      \\"type\\": {
        \\"name\\": \\"node\\"
      },
      \\"required\\": false,
      \\"description\\": \\"The component children\\"
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== \\"undefined\\") {
  STORYBOOK_REACT_CLASSES[\\"relativePath(input.js)\\"] = {
    name: \\"OriginalName\\",
    docgenInfo: OriginalName.__docgenInfo,
    path: \\"relativePath(input.js)\\"
  };
}"
`;
