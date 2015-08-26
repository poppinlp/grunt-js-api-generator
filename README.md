# grunt-js-api-generator

[![Build Status](https://travis-ci.org/poppinlp/grunt-js-api-generator.png?branch=master)](https://travis-ci.org/poppinlp/grunt-js-api-generator)
[![Dependency Status](https://david-dm.org/poppinlp/grunt-js-api-generator.svg)](https://david-dm.org/poppinlp/grunt-js-api-generator)
[![devDependency Status](https://david-dm.org/poppinlp/grunt-js-api-generator/dev-status.svg)](https://david-dm.org/poppinlp/grunt-js-api-generator#info=devDependencies)

Generate api module from config file.

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-js-api-generator --save
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-js-api-generator');
```

## The "js-api-generator" task

### Overview

In your project's Gruntfile, add a section named `js-api-generator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  js-api-generator: {
    your_target: {
        // options
    },
  },
})
```

### Options

All options in "js-api-generator" module are supported. You may read [this page](https://github.com/poppinlp/js-api-generator#user-content-about-this-package) for more detail.

### Example

```js
grunt.initConfig({
  js-api-generator: {
    test: {
        target: 'test/api.yml',
        utlify: true
    }
  },
})
```

## Demo

```shell
grunt test
```

## History

- Ver 0.1.3 - Bugfix
- Ver 0.0.1 - Init
