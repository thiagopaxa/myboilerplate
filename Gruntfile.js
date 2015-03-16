var grunt = function(grunt) {
  var stylusPathArray = ['assets/style/main.styl','assets/style/custom/**/*.styl'];
  var jsPathArray = ['assets/js/custom/main.js'];
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['assets/js/custom/main.js',],
        dest: 'build/js/main.min.js'
      }
    },
    jasmine: {
      pivotal: {
        src: 'assets/js/**/*.js',
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
  grunt.registerTask('default',['stylus','uglify'])
};

module.exports = grunt;