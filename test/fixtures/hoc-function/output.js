// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should hoc function 1`] = `
"\\"use strict\\";

Object.defineProperty(exports, \\"__esModule\\", {
  value: true
});
exports[\\"default\\"] = void 0;

var _react = _interopRequireDefault(require(\\"react\\"));

var _propTypes = _interopRequireDefault(require(\\"prop-types\\"));

var _reactRedux = require(\\"react-redux\\");

var _testSelector = require(\\"./testSelector\\");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }

var TestComponent = function TestComponent(props) {
  var text = props.text,
      onClick = props.onClick;
  return /*#__PURE__*/_react[\\"default\\"].createElement(\\"div\\", null, /*#__PURE__*/_react[\\"default\\"].createElement(\\"div\\", null, \\"Text: \\", text), /*#__PURE__*/_react[\\"default\\"].createElement(\\"button\\", {
    onClick: onClick
  }, \\"Button\\"));
};

TestComponent.propTypes = {
  /** Text to display */
  text: _propTypes[\\"default\\"].string,

  /** Called on click */
  onClick: _propTypes[\\"default\\"].func
};
TestComponent.__docgenInfo = {
  \\"description\\": \\"\\",
  \\"methods\\": [],
  \\"displayName\\": \\"TestComponent\\",
  \\"props\\": {
    \\"text\\": {
      \\"type\\": {
        \\"name\\": \\"string\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Text to display\\"
    },
    \\"onClick\\": {
      \\"type\\": {
        \\"name\\": \\"func\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Called on click\\"
    }
  }
};

var _default = (0, _reactRedux.connect)(_testSelector.mapStateToProps, _testSelector.mapDispatchToProps)(TestComponent);

exports[\\"default\\"] = _default;

if (typeof STORYBOOK_REACT_CLASSES !== \\"undefined\\") {
  STORYBOOK_REACT_CLASSES[\\"relativePath(input.js)\\"] = {
    name: \\"TestComponent\\",
    docgenInfo: TestComponent.__docgenInfo,
    path: \\"relativePath(input.js)\\"
  };
}"
`;
