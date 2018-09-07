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

const jadeFiles = {
	"build/demo/index.html": "src/html/index.jade"
};

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		pug: {
			compile: {
				options: {
					pretty: "\t",
					data: {
						debug: false,
						pretty: "\t"
					}
				},
				files: jadeFiles
			}
		},
		less: {
			options: {
				javascriptEnabled: true
			},
			build: {
				files: {
					"build/css/storeUI-<%= pkg.buildVersion %>.css": lessFiles
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
		'modify_json',
		'buildnumber:build',
		'readpkg',
		'less:build',
		'pug',
		'replace:build'
	]);
	
	grunt.registerTask('revision', [
		'buildnumber:revision',
		'readpkg',
		'less:build',
		'pug',
		'replace:build'
	]);
	
	grunt.registerTask('readpkg', function() {
		grunt.config.set('pkg', grunt.file.readJSON('./package.json'));
		pkg = grunt.file.readJSON('./package.json');
	});
}