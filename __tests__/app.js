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
      'foo-codemod.js',
      'package.json',
      'README.md',
    ];

    assert.file(expectedFiles);
  });
});
