module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');


	grunt.initConfig({
		htmlmin: {
	    	dist: {
		      	options: {
		        	removeComments: true,
		        	collapseWhitespace: true
		      	},
		      	files: {                                   
		        	'src/index.html': 'dev/index.html',     
		      	}
		    }
	    },

		less: {
			dist: {
				options: {
					paths: 'dev/css',
				},
				files: {
					'dev/css/animary.css': 'dev/less/animary.less'
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'src/animary.min.css': 'dev/css/animary.css'
				}
			}
		},

		uglify:{
			target: {
		      	files: {
		        	'src/animary.min.js': ['dev/js/animary.js']
		      	}
		    }
		},

		watch: {
			configFiles: {
			    files: [ 'Gruntfile.js'],
			    options: {
			      	reload: true
			    }
		  	},
			css: {
				files: ['dev/less/*'],
				tasks: ['less', 'cssmin'],
				options: {
					spawn: false,
				}
			},
			scripts: {
				files: ['dev/js/*'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				}
			},
			another:{
				files: ['dev/index.html'],
				tasks: ['htmlmin'],
				options: {
					spawn: false,
				}
			}

		}
	});


	grunt.registerTask('default', ['less, cssmin, uglify, htmlmin']);

}