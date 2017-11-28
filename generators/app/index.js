'use strict';

const _ = require('lodash');
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const utils = require('./utils');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this._filesToCopy = [
      '_.eslintignore',
      '_.eslintrc.js',
      '_.gitignore',
      '_.travis.yml',
    ];

    this._templatesToCopy = [
      '_package.json',
      '_README.md',
      '_%name%-codemod.js',
      '__testfixtures__/%name%/_test.input.js',
      '__testfixtures__/%name%/_test.output.js',
      '__tests__/_%name%-codemod-test.js',
    ];
  }

  prompting() {
    this.log(
      yosay(
        "Welcome to the bee's knees " + chalk.red('jscodeshift') + ' generator!'
      )
    );

    return this.prompt(this._getPrompts()).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    this._templatesToCopy.forEach(src => {
      this.fs.copyTpl(
        this.templatePath(src),
        this._dest(utils.transformTemplatedName(src, this.answers)),
        this.answers
      );
    });
    this._filesToCopy.forEach(src => {
      this.fs.copy(this.templatePath(src), this._dest(src));
    });
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
    });
  }

  _getPrompts() {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'What should your codemod be named?',
        default: 'my-codemod',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What best describes the usage of your codemod?',
        default: '',
      },
    ];
  }

  _dest(src) {
    const basename = path.basename(src);
    let destname = src;

    if (_.startsWith(basename, '_')) {
      destname = src.replace(basename, basename.substr(1));
    }

    return this.destinationPath(destname);
  }
};
