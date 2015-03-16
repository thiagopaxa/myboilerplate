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
        files: 'assets/img/**/*.{png,jpg,gif}',
        tasks: ['imagemin'],
        options: {
          spawn: false
        }
      }
      
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        options: {
          cache: false
        },
      },
      files: [{
        // Set to true to enable the following options…
        expand: true,
        // cwd is 'current working directory'
        cwd: 'build/img/',
        src: ['assets/img/**/*.png'],
        // Could also match cwd line above. i.e. project-directory/img/
        dest: 'build/img/',
        ext: '.png'
      }]

      dist: {
        files: [{
          expand: true,
          cwd: 'build/img/',
          src: ['assets/img/**/*.{png,jpg,gif}'],
          dest: 'build/img/'
        }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['watch']);
};

module.exports = grunt;