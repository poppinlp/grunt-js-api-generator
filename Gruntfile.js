module.exports = function(grunt) {
    grunt.initConfig({
        "js-api-generator": {
            test: {
                target: 'test/api.yml',
                utlify: true
            }
        }
    });

    grunt.loadTasks("tasks");

    grunt.registerTask("default", ["test"]);
    grunt.registerTask("test", [
        'js-api-generator'
    ]);
};
