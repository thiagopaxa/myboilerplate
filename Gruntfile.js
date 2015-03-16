var grunt = function(grunt) {
  var stylusPathArray = ['assets/style/main.styl','assets/style/custom/**/*.styl'];
  var jsPathArray = ['assets/js/main.styl','assets/js/custom/**/*.styl'];
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
    // jasmine: {
    //   pivotal: {
    //     src: 'js/script.js',
    //     options: {
    //       specs: 'specs/*Spec.js',
    //       helpers: 'spec/*Helper.js'
    //     }
    //   }
    // }
    stylus: {
      compile: {
        options: {
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
  
  // grunt.registerTask('test',['jasmine'])
  grunt.registerTask('default',['stylus','uglify'])
};

module.exports = grunt;