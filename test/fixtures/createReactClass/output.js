// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should createReactClass 1`] = `
"\\"use strict\\";

var createReactClass = require('create-react-class');

var _React = React,
    PropTypes = _React.PropTypes;
var stylesheet = {};
/**
 * Component for displaying a container that resembles the original CSS environment for different themes
 */

var ComponentWrapper = createReactClass({
  displayName: 'ComponentWrapper',
  propTypes: {
    /**
     * Theme to display
     */
    theme: PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      theme: 'damask'
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(\\"div\\", {
      className: stylesheet[this.props.theme]
    }, /*#__PURE__*/React.createElement(\\"div\\", {
      className: stylesheet.container
    }, this.props.children));
  }
});
module.exports = ComponentWrapper;
ComponentWrapper.__docgenInfo = {
  \\"description\\": \\"Component for displaying a container that resembles the original CSS environment for different themes\\",
  \\"methods\\": [],
  \\"displayName\\": \\"ComponentWrapper\\",
  \\"props\\": {
    \\"theme\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"'damask'\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"custom\\",
        \\"raw\\": \\"PropTypes.string\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Theme to display\\"
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== \\"undefined\\") {
  STORYBOOK_REACT_CLASSES[\\"relativePath(input.js)\\"] = {
    name: \\"ComponentWrapper\\",
    docgenInfo: ComponentWrapper.__docgenInfo,
    path: \\"relativePath(input.js)\\"
  };
}"
`;
