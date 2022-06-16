/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 *
 * 2018 - Charles Lehnert
 * This is heavily based on the react-docgen `displayNameHandler` but instead defines an `actualName` property on the
 * generated docs that is taken first from the component's actual name. This addresses an issue where the name that
 * the generated docs are stored under is incorrectly named with the `displayName` and not the component's actual name.
 *
 */

import { namedTypes as types } from 'ast-types';
import { utils } from 'react-docgen';

const { getNameOrValue, isReactForwardRefCall } = utils;

export default function actualNameHandler(documentation, path, importer) {
  // Function and class declarations need special treatment. The name of the
  // function / class is the displayName
  if (
    types.ClassDeclaration.check(path.node) ||
    types.FunctionDeclaration.check(path.node)
  ) {
    documentation.set('actualName', getNameOrValue(path.get('id')));
  } else if (
    types.ArrowFunctionExpression.check(path.node) ||
    types.FunctionExpression.check(path.node) ||
    isReactForwardRefCall(path, importer)
  ) {
    let currentPath = path;
    while (currentPath.parent) {
      if (types.VariableDeclarator.check(currentPath.parent.node)) {
        documentation.set(
          'actualName',
          getNameOrValue(currentPath.parent.get('id')),
        );
        return;
      } else if (types.AssignmentExpression.check(currentPath.parent.node)) {
        const leftPath = currentPath.parent.get('left');
        if (
          types.Identifier.check(leftPath.node) ||
          types.Literal.check(leftPath.node)
        ) {
          documentation.set('actualName', getNameOrValue(leftPath));
          return;
        }
      }
      currentPath = currentPath.parent;
    }
  } else if (
      // React.createClass() or createReactClass()
      types.CallExpression.check(path.parentPath.node) &&
      types.VariableDeclarator.check(path.parentPath.parentPath.parentPath.node)
  ) {
    documentation.set('actualName', getNameOrValue(path.parentPath.parentPath.parentPath.get('id')));
  } else {
    // Could not find an actual name
    documentation.set('actualName', '');
  }
}
