'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-jscodeshift:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: 'foo', description: 'foo codemod' });
  });

  it('creates files', () => {
    let expectedFiles = [
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.travis.yml',
      'package.json',
      'README.md',
      'foo-codemod.js',
      '__testfixtures__/foo/test.input.js',
      '__testfixtures__/foo/test.output.js',
      '__tests__/foo-codemod-test.js',
    ];

    assert.file(expectedFiles);
  });
});
