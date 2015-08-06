module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          'stylesheets/index.css' : 'sass/index.scss'
        }
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
        files: 'sass/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}