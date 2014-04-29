module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['components/scripts/**/*.js']
        },
        
        watch: {
            test: {
                files: ['components/scripts/**/*.js'],
                tasks: ['jshint']
            },
            server: {
                options: {
                    livereload: true
                },
                files: ['components/scripts/**/*.js', 'components/styles/**/*.css', 'components/index.html']
            }
        },
        
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'components'
                }
            }
        },
        
        open: {
            server: {
                path: 'http://localhost:9001/',
                app: 'Chrome'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('test', [
        'jshint'
    ]);
    
    grunt.registerTask('dev-server', [
        'connect:server',
        'open:server',
        'watch:server'
    ]);
    
    grunt.registerTask('dev-test', [
        'watch:test'
    ]);
};