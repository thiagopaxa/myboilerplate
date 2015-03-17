var grunt = function(grunt) {
  var stylusPathArray = ['assets/style/main.styl', 'assets/style/custom/**/*.styl'];
  var jsPathArray = ['assets/js/custom/main.js'];
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: jsPathArray,
        dest: 'build/js/main.min.js'
      }
    },
    jasmine: {
      pivotal: {
        src: jsPathArray,
        options: {
          specs: 'assets/specs/*Spec.js',
          helpers: 'assets/specs/*Helper.js'
        }
      }
    },
    stylus: {
      compile: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          compress: true,
          import: [
            'nib/*'
          ]
        },
        files: {
          'build/style/style.min.css': stylusPathArray
        }
      }
    },
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
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default', ['watch']);
};

module.exports = grunt;