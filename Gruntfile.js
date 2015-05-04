module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'stylesheets/css/main.css' : 'stylesheets/sass/main.scss'
				}
			}
		},
		watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
		},
    connect: {
      port: 1337,
      dev: {
        options: {
          base: 'dist',
          keepalive: true
        }
      },
      meta: {
        port: 1338,
        base: ['courthouseseafood']
      }
    }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('default', 'watch');
  grunt.registerTask('serve','connect:dev');
}