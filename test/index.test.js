import 'jest-specific-snapshot';
import path from 'path';
import fs from 'fs';
import { transformFileSync } from '@babel/core';
import plugin from '../src';
import { resolver } from 'react-docgen';

jest.mock('../src/relativePath', () => ({
  relativePath: filename => {
    const { basename } = require('path');
    return `relativePath(${basename(filename)})`;
  },
}));

const normalizeNewlines = string => string.replace(/\\r\\n/g, '\\n');

describe('Add propType doc to react components', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map(caseName => {
    // Ignore macOS directory files
    if (caseName.indexOf('.DS_Store') < 0) {
      it(`should ${caseName.split('-').join(' ')}`, () => {
        const fixtureDir = path.join(fixturesDir, caseName);
        const inputPath = path.join(fixtureDir, 'input.js');
        const outputPath = path.join(fixtureDir, 'output.js');
        const options = {
          presets: ['@babel/env', '@babel/flow', '@babel/react'],
          plugins: [
            [
              plugin,
              {
                DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
                // handlers: ['react-docgen-deprecation-handler'],
              },
            ],
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-optional-chaining',
          ],
          babelrc: false,
        };

        const output = normalizeNewlines(transformFileSync(inputPath, options).code);
        expect(output).toMatchSpecificSnapshot(outputPath);
      });
    }
  });
});

describe('options', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  const fixtureDir = path.join(fixturesDir, 'case1');
  const inputPath = path.join(fixtureDir, 'input.js');
  const outputPath = path.join(fixtureDir, 'output.js');

  it('allows custom resolver to accept string that matches an available react-docgen resolver', () => {
    const options = {
      presets: ['@babel/env', '@babel/flow', '@babel/react'],
      plugins: [
        [
          plugin,
          {
            DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
            resolver: 'findExportedComponentDefinition',
          },
        ],
        '@babel/plugin-proposal-class-properties',
      ],
      babelrc: false,
    };

    const output = normalizeNewlines(transformFileSync(inputPath, options).code);
    expect(output).toMatchSpecificSnapshot(outputPath);
  })

  it('allows custom resolvers & handlers to be functions', () => {
    const customResolver = jest.fn(resolver.findExportedComponentDefinition);
    const customHandler = jest.fn();

    const options = {
      presets: ['@babel/env', '@babel/flow', '@babel/react'],
      plugins: [
        [
          plugin,
          {
            DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
            resolver: customResolver,
            handlers: [customHandler],
          },
        ],
        '@babel/plugin-proposal-class-properties',
      ],
      babelrc: false,
    };

    transformFileSync(inputPath, options);
    expect(customResolver).toHaveBeenCalled();
    expect(customHandler).toHaveBeenCalled();
  });
});
