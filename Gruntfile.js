const lessFiles = [
	"src/less/intro.less",
	"src/less/button.less",
	"src/less/artwork-view.less",
	
	"src/less/cells/editorial-card.less",
	"src/less/cells/small-lockup-cell.less",
	"src/less/cells/medium-lockup-cell.less",
	"src/less/cells/brick-cell.less",
	"src/less/cells/action-cell.less",
	
	"src/less/collection-view.less",
];

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: "/**" + 
		" * storeUI 1.0 ({{buildVersion}}.{{buildNumber}}.{{buildRevision}}_{{buildBranch}}.{{buildDate}})" + 
		" * HTML/CSS framework for creating App Store-like user interfaces" +
		" * Copyright © 2018 Team FESTIVAL" +
		" */",
		
		pug: {
			options: {
				pretty: "\t",
				data: {
					debug: false,
					pretty: "\t"
				}
			},
			build: {
				expand: true,
				cwd: 'src/html/',
				src: ['*.jade'],
				dest: 'build/demo',
				ext: '.html'
			},
			dist: {
				expand: true,
				cwd: 'src/html/',
				src: ['*.jade'],
				dest: 'dist/demo',
				ext: '.html'
			}
		},
		less: {
			options: {
				javascriptEnabled: true
			},
			build: {
				options: {
					cleancss: false,
					compress: false
				},
				files: {
					"build/css/storeUI-<%= pkg.buildVersion %>.css": lessFiles
				}
			},
			dist: {
				options: {
					cleancss: true,
					compress: true,
				},
				files: {
					"dist/css/storeUI-<%= pkg.buildVersion %>.min.css": lessFiles
				}
			}
		},
		buildnumber: {
			build: {
				options: {
					field: 'buildNumber',
				},
				files: {
					src: 'package.json',
				}
			},
			revision: {
				options: {
					field: 'buildRevision',
				},
				files: {
					src: 'package.json',
				}
			}
		},
		modify_json: {
			options: {
				fields: {
					buildRevision: "0"
				},
			},
			files: {
				src: 'package.json',
			}
		},
		replace: {
			build: {
				src: ["build/css/storeUI-<%= pkg.buildVersion %>.css"],
				overwrite: true,
				replacements: [
					{
						from: '{{buildVersion}}',
						to: "<%= pkg.buildVersion %>"
					}, {
						from: '{{buildNumber}}',
						to: "<%= pkg.buildNumber %>"
					}, {
						from: '{{buildRevision}}',
						to: "<%= pkg.buildRevision %>"
					}, {
						from: '{{buildBranch}}',
						to: "storeui_dev"
					}, {
						from: '{{buildDate}}',
						to: "<%= grunt.template.today('yymmdd-HHMM') %>"
					}
				]
			},
			dist: {
				src: ["dist/css/storeUI-<%= pkg.buildVersion %>.css"],
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-build-number');
	grunt.loadNpmTasks('grunt-modify-json');
	grunt.loadNpmTasks('grunt-text-replace');
	
	// grunt.registerTask('default', ['pug', 'less']);
	grunt.registerTask('default', ["build"]);
	grunt.registerTask('build', [
		//'modify_json',
		//'buildnumber:build',
		'readpkg',
		'less:build',
		'pug:build',
		'replace:build'
	]);
	
	grunt.registerTask('revision', [
		//'buildnumber:revision',
		'readpkg',
		'less:build',
		'pug:build',
		'replace:build'
	]);
	
	grunt.registerTask('dist', [
		'readpkg',
		'less:dist',
		'pug:dist'
	]);
	
	grunt.registerTask('readpkg', function() {
		grunt.config.set('pkg', grunt.file.readJSON('./package.json'));
		pkg = grunt.file.readJSON('./package.json');
	});
}