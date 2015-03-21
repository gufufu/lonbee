	// Gruntfile with the configuration of grunt-express and grunt-open.
		module.exports = function (grunt) {


		// Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  			// Configure Grunt 
			grunt.initConfig({
	  
    concat: {
	    js: {
	      src: ['js/helper.js', 'js/plugins.js'],
	      dest: 'build/js/scripts.js',
	    },
	    css: {
	      src: ['css/style.css'],
	      dest: 'build/css/styles.css',
	    },
	  },


	  watch: {
	   js: {
	    files: ['js/**/*.js'],
	    tasks: ['concat:js'],
	  },
	  css: {
      files: '**/*.scss',
      tasks: ['sass']
	  },
	},

    
    sass: {
      dist: {
        files: {
          'css/style.css' : 'scss/320andup-scss.scss'
        }
      }
    },
	 
	  // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: [__dirname], // Replace with the directory you want the files served from
                              // Make sure you don't use `.` or `..` in the path as Express
                              // is likely to return 403 Forbidden responses if you do
                              // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
          livereload: true
        }
      }
    },
 
   
 
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
  });
 
  // Creates the `server` task
  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
  ]);


		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-connect');
		grunt.loadNpmTasks('grunt-contrib-sass');
		grunt.registerTask('default', ['concat', 'watch', 'sass']);
		
	};