module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            options: {
                module: 'commonjs', 
                target: 'es5',
                rootDir: 'static/javascript',
                sourceMap: true,
                declaration: true
            },
            base: {
                src: ['static/javascript/**/*.ts', "!**/*.d.ts"],
                dest: 'static/javascript',
            }
        },
        less: {
            base: {
                expand: true,
                cwd: "static/css",
                src: "*.less",
                dest: "static/css",
                ext: ".css",
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: true
            },
            scripts: {
                expand: true,
                cwd: "static/javascript",
                src: ["**/*.js", "!**/*.min.js", "!**/*.concat.js"],
                dest: "static/javascript",
                ext: ".min.js"
            }
        },
        cssmin: {
            styles: {
                expand: true,
                cwd: "static/css",
                src: ["**/*.css", "!**/*.min.css", "!**/*.concat.css"],
                dest: "static/css",
                ext: ".min.css"
            }
        },
        concat: {
            scripts: {
                src: [
                    "static/bower_components/jquery/dist/jquery.min.js",
                    "static/bower_components/angular/angular.min.js",
                    "static/bower_components/d3/d3.min.js",
                    "static/bower_components/metron/javascript/metron.min.js",
                    "static/javascript/gruntstarter.min.js"
                    ],
                dest: 'static/javascript/gruntstarter.concat.js'
            },
            styles: {
                src: [
                    "static/bower_components/bootstrap/dist/css/bootstrap.min.css",
                    "static/css/styles.min.css"
                    ],
                dest: 'static/css/styles.concat.css'
            }
        },
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            scripts: {
                files: ['static/javascript/**/*.ts', 'static/javascript/**/*.js'],
                tasks: ['typescript', 'uglify', 'concat:scripts']
            },
            styles: {
                files: ['static/css/**/*.less', 'static/css/**/*.css'],
                tasks: ['less', 'cssmin', 'concat:styles']
            },
            interface: {
                files: ['static/index.html']
            }
        },
        perfbudget: {
            default: {
                options: {
                    url: 'http://szul-gruntstarter.azurewebsites.net',
                    key: ''
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-perfbudget');

    grunt.registerTask('default', ['typescript', 'less', 'uglify', 'cssmin', 'concat']);
    grunt.registerTask('css', ['less', 'cssmin', 'concat:styles']);
    grunt.registerTask('javascript', ['typescript', 'uglify', 'concat:scripts']);
    grunt.registerTask('perf', ['perfbudget']);
    
    grunt.registerTask('command-line', function() {
        grunt.log.writeln('Running the [command-line] task.');
    });
}
