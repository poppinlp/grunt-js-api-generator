"use strict";

module.exports = function(grunt) {
    var Package = require("../package.json"),
        api = require("js-api-generator"),
        path = require('path');

    grunt.registerMultiTask("js-api-generator", Package.description, function() {
        this.requiresConfig([this.name, this.target, "target"].join("."));

        this.data.target = fixPath(this.data.target);
        if (this.data.outputFile) {
            this.data.outputFile = fixPath(this.data.outputFile);
        }

        api(this.data);
    });

    function fixPath(file) {
        return grunt.file.isPathAbsolute(file) ? file : path.join(process.cwd(), file);
    }
};
