const lessFiles = [
	"src/less/intro.less",
	"src/less/grid.less",
	"src/less/button.less",
	"src/less/artwork-view.less",
	"src/less/expandable-text.less",
	"src/less/navigation-bar.less",
	
	"src/less/cells/editorial-card.less",
	"src/less/cells/small-lockup-cell.less",
	"src/less/cells/medium-lockup-cell.less",
	"src/less/cells/brick-cell.less",
	"src/less/cells/action-cell.less",
	"src/less/cells/titled-paragraph-cell.less",
	"src/less/cells/product-lockup-cell.less",
	"src/less/cells/product-media-cell.less",
	"src/less/cells/product-description-cell.less",
	"src/less/cells/product-rating-cell.less",
	"src/less/cells/product-review-cell.less",
	"src/less/cells/annotation-cell.less",
	"src/less/cells/product-page-link-cell.less",
	"src/less/cells/footnote-cell.less",
	
	"src/less/collection-view.less",
];

const jsFiles = [
	"src/js/storeUI-intro.js",
	"src/js/init.js",
	"src/js/storeUI-outro.js",
	"src/js/collection-view.js",
	"src/js/expandable-text.js",
	"src/js/annotation-cell.js",
	"src/js/navigation-bar.js"
]

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
		concat: {
			options: {
				sourceMap: true
			},
			build: {
				src: jsFiles,
				dest: "build/js/storeUI-<%= pkg.buildVersion %>.js"
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
				src: ["build/css/storeUI-<%= pkg.buildVersion %>.css", "build/js/storeUI-<%= pkg.buildVersion %>.js"],
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
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-build-number');
	grunt.loadNpmTasks('grunt-modify-json');
	grunt.loadNpmTasks('grunt-text-replace');
	
	// grunt.registerTask('default', ['pug', 'less']);
	grunt.registerTask('default', ["build"]);
	grunt.registerTask('build', [
		'modify_json',
		'buildnumber:build',
		'readpkg',
		'less:build',
		'concat:build',
		'pug:build',
		'replace:build'
	]);
	
	grunt.registerTask('revision', [
		'buildnumber:revision',
		'readpkg',
		'less:build',
		'concat:build',
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