module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options:{
          style:'compressed'
          // sourceMap: true
        },
        files: {
          'stylesheets/index.css' : 'sass/index.scss'
        }
      }
    },

    libsass: {
        myTarget: {
            src: 'sass/index.scss',
            dest: 'stylesheets/index.css',
        }
    },

    autoprefixer:{
      dist:{
        files:{
          'stylesheets/index.css':'stylesheets/index.css'
        }
      }
    },
    watch: {
      css: {
        options: { livereload: true },
        files: 'sass/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-libsass');
  // grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
