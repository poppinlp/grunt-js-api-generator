"use strict";

module.exports = function(grunt) {
    var Package = require("../package.json"),
        api = require("js-api-generator"),
        path = require('path');

    grunt.registerMultiTask("js-api-generator", Package.description, function() {
        this.requiresConfig([this.name, this.target, "target"].join("."));

        this.data.target = path.join(__dirname, '..', this.data.target);
        console.log(api(this.data));
    });
};
