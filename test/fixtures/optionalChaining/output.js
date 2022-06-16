// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should optionalChaining 1`] = `
"\\"use strict\\";

Object.defineProperty(exports, \\"__esModule\\", {
  value: true
});
exports[\\"default\\"] = void 0;

var _propTypes = _interopRequireDefault(require(\\"prop-types\\"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }

var OptionalChainingComponent = function OptionalChainingComponent(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\\"div\\", null, props === null || props === void 0 ? void 0 : props.text), /*#__PURE__*/React.createElement(\\"div\\", null, props === null || props === void 0 ? void 0 : props.optionalText));
};

OptionalChainingComponent.propTypes = {
  /** Required text */
  text: _propTypes[\\"default\\"].string.isRequired,

  /** Optional text, checked with optional chaining */
  optionalText: _propTypes[\\"default\\"].string
};
var _default = OptionalChainingComponent;
exports[\\"default\\"] = _default;"
`;
