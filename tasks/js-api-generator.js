"use strict";

module.exports = function(grunt) {
    var Package = require("../package.json"),
        api = require("js-api-generator"),
        path = require('path');

    grunt.registerMultiTask("js-api-generator", Package.description, function() {
        this.requiresConfig([this.name, this.target, "target"].join("."));

        this.data.target = grunt.file.isPathAbsolute(this.data.target) ? this.data.target : path.join(process.cwd(), this.data.target);
        this.data.outputFile = grunt.file.isPathAbsolute(this.data.outputFile) ? this.data.outputFile : path.join(process.cwd(), this.data.outputFile);

        api(this.data);
    });
};
