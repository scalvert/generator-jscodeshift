'use strict';

const assert = require('yeoman-assert');
const utils = require('../generators/app/utils');

describe('generator-jscodeshift:utils#transformTemplatedName', () => {
  it('no-ops when source is empty', () => {
    let src = '';

    assert.equal(utils.transformTemplatedName(src), src);
  });

  it("doesn't transform the src when no template variables are present", () => {
    let src = 'plain-filename.js';

    assert.equal(utils.transformTemplatedName(src), src);
  });

  it('Throws when template variable is expected but not present', () => {
    let src = 'plain-%foo%-filename.js';

    assert.throws(() => {
      utils.transformTemplatedName(src, {});
    }, /The foo property is not present in the templateProps/);
  });

  it('Transforms the templated filename using the provided property', () => {
    let src = 'plain-%foo%-filename.js';
    let expectedSrc = 'plain-bar-filename.js';
    let templateProps = { foo: 'bar' };

    assert.equal(utils.transformTemplatedName(src, templateProps), expectedSrc);
  });

  it('Transforms the templated filename using the provided property for multiple instances', () => {
    let src = '%foo%-plain-%foo%-filename.js';
    let expectedSrc = 'bar-plain-bar-filename.js';
    let templateProps = { foo: 'bar' };

    assert.equal(utils.transformTemplatedName(src, templateProps), expectedSrc);
  });
});
