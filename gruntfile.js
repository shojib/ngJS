module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: ['public'],

    copy: {
      fonts: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/fonts/',
        src: '*',
        dest: '<%= pkg.folders.build %>/fonts'
      },
      i18n: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/i18n/',
        src: '*',
        dest: '<%= pkg.folders.build %>/i18n'
      },
      index: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/',
        src: 'index.html',
        dest: '<%= pkg.folders.build %>'
      },
      templates: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/modules/',
        src: '**/*.html',
        dest: '<%= pkg.folders.build %>/modules'
      },
      libs: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/libs/',
        src: '**/*.js',
        dest: '<%= pkg.folders.build %>/libs'
      }
    },

    requirejs: {
      prod: {
        options: {
          baseUrl: '<%= pkg.folders.build %>/modules',
          name: '../libs/almond/almond',
          include: 'main',
          mainConfigFile: '<%= pkg.folders.build %>/modules/main.js',
          out: '<%= pkg.folders.build %>/modules/main.js',
          optimize: 'uglify2',
          wrapShim: false,
          findNestedDependencies: true,
          generateSourceMaps: false,
          preserveLicenseComments: false,
          useSourceUrl: false,
          uglify2: {
            mangle: false
          }
        }
      }
    },

    react: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: '<%= pkg.folders.entity_src %>',
            src: ['**/*.js'],
            dest: '<%= pkg.folders.entity_build %>',
            ext: '.js'
          }
        ]
      }
    },

    compass: {
      compile_all: {
        expand: true,
        flatten: false,
        cwd: '<%= pkg.folders.src %>/scss',
        src: ['**/*.scss'],
        dest: '<%= pkg.folders.build %>/css',
        ext: '.css'
      }
    },

    browserify: {
      dist: {
        files: {
          '<%= pkg.folders.build %>/modules/ngjs.min.js': ['<%= pkg.folders.src %>/modules/ngjs.js']
        }
      }
    },


    watch: {
      react: {
        files: ['<%= pkg.folders.src %>/modules/**/*.js'],
        tasks: 'react',
        options: {
          livereload: true
        }
      }, 
      compass: {
        files: ['<%= pkg.folders.src %>/scss/main.scss', '<%= pkg.folders.src %>/modules/css/main.css'],
        tasks: 'compass',
        options: {
          livereload: true
        }
      }, 
      index: {
        files: ['<%= pkg.folders.src %>/index.html', '<%= pkg.folders.src %>/index.html'],
        tasks: 'copy:index',
        options: {
          livereload: true
        }
      }, 
      templates: {
        files: ['<%= pkg.folders.src %>/modules/**/*.html'],
        tasks: 'copy:templates',
        options: {
          livereload: true
        }
      }
    },
    
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    protractor: {
      e2e: {
        configFile:'e2e.config.js',
        keepAlive: true,
        noColor: false
      }
    },

    selenium_start: {
      options: {}
    },

    selenium_phantom_hub: {
      options: {}
    },

    selenium_stop: {
      options: {}
    },

    connect: {
      server: {
        options:  {
          port: 9900,
          base: 'public/',
          hostname: 'localhost'
        }
      },
      keepalive: {
        options:  {
          port: 8800,
          base: 'public/',
          hostname: 'localhost',
          keepalive: true
        }
      }
    }

  });

  // Load the plugins for all the tasks.
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Unit task(s).
  grunt.registerTask('unit', [
    'karma:unit'
  ]);

  // E2E task(s).
  grunt.registerTask('e2e', [
    'connect:server', 
    'selenium_start', // PhantomJS only
    'selenium_phantom_hub', // PhantomJS only
    'protractor:e2e',
    'selenium_stop' // PhantomJS only
  ]);

  // Test task(s).
  grunt.registerTask('tests', [
    'unit',
    'e2e'
  ]);
  
  // Build task(s).
  grunt.registerTask('compile', [
    'clean', 
    'copy', 
    'compass',
    'browserify'
  ]);
  
  // Build task(s).
  grunt.registerTask('prod', [
    'compile', 
    'requirejs'
  ]);
  
  // Build task(s).
  grunt.registerTask('dev', [
    'compile'
    // 'tests'
  ]);
  
  // Web task(s).
  grunt.registerTask('web', [
    'dev',
    'connect:server',
    'watch'
  ]);

  // Default task(s).
  grunt.registerTask('default', [
    'webgrunt '
  ]);

};











