module.exports = function(grunt) {

    grunt.initConfig({
        typescript: {
            base: {
                src: [
                    'app/**/*.ts'
                ],
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourceMap:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.registerTask('default', ['typescript']);

};