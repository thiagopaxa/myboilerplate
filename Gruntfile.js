var grunt = function(grunt) {
  var stylusPathArray = ['assets/style/main.styl', 'assets/style/custom/**/*.styl'];
  var jsPathArray = ['assets/js/custom/main.js'];
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // minify scripts
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: jsPathArray,
        dest: 'build/js/main.min.js'
      }
    },
    //test scripts
    jasmine: {
      pivotal: {
        src: jsPathArray,
        options: {
          specs: 'tests/jasmine/*Spec.js',
          helpers: 'tests/jasmine/*Helper.js',
          template : require('grunt-template-jasmine-istanbul'),
            templateOptions: {
            coverage: 'tests/reports/coverage.json',
            report: 'tests/reports/coverage'
          }
        }
      }
    },
    // stylus - css pre processor
    stylus: {
      compile: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          compress: false,
          import: [
            'nib/*'
          ]
        },
        files: {
          'build/style/style.css': stylusPathArray
        }
      }
    },
    // css minifier --> cause the stylus task would leave the .css with /*! comments
    cssmin: {
      build: {
        files: {
          'build/style/style.min.css': ['build/style/style.css']
        }
      }
    },
    // image minifier
    imagemin: {
      png: {
         options: {
            optimizationLevel: 5
         },
         files: [{
            expand: true,
            cwd: 'assets/img/',
            src: ['**/*.png'],
            dest: 'build/img/'
         }]
      },
      jpg: {
         options: {
            progressive: true
         },
         files: [{
            expand: true,
            cwd: 'assets/img/',
            src: ['**/*.jpg','**/*.jpeg'],
            dest: 'build/img/'
         }]
      },
      gif: {
         options: {
            interlaced: false
         },
         files: [{
            expand: true,
            cwd: 'assets/img/',
            src: ['**/*.gif'],
            dest: 'build/img/'
         }]
      }
    },
    jshint:{
      all:{
        src: jsPathArray,
        options: {
          jshintrc: '.jshintrc'
        }
      }
    },
    // listen to changes 
    watch: {
      scripts: {
        files: '<%= uglify.build.src %>',
        tasks: ['uglify'],
        options: {
          spawn: false
        }
      },
      styles: {
        files: stylusPathArray,
        tasks: ['stylus'],
        options: {
          spawn: false
        }
      },
      stylemin: {
        files: ['build/style/style.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false
        }
      },
      images: {
        files: 'assets/img/**/*',
        tasks: ['newer:imagemin'],
        options: {
          spawn: false
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default', ['newer:stylus','newer:cssmin','newer:uglify','newer:imagemin','watch']);
  grunt.registerTask('test', ['jshint','jasmine']);
};

module.exports = grunt;