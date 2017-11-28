# generator-jscodeshift [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
An opinionated [yeoman](http://yeoman.io) generator for a jscodeshift codemod. This generator scaffolds out a project to get you started writing your codemod in minutes. It handily includes some nice features, such as
1. Jest testing using input/output files
1. Automatic tests for idempotency, to ensure your codemod will not bork your source files if run > 1 time
1. Eslint with prettier plugin to standardize source files

## Installation

First, install [Yeoman](http://yeoman.io) and generator-jscodeshift using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-jscodeshift
```

Then generate your new project:

```bash
yo jscodeshift
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Steve Calvert]()


[npm-image]: https://badge.fury.io/js/generator-jscodeshift.svg
[npm-url]: https://npmjs.org/package/generator-jscodeshift
[travis-image]: https://travis-ci.org/scalvert/generator-jscodeshift.svg?branch=master
[travis-url]: https://travis-ci.org/scalvert/generator-jscodeshift
[daviddm-image]: https://david-dm.org/scalvert/generator-jscodeshift.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/scalvert/generator-jscodeshift
