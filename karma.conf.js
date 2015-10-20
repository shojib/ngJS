// Karma configuration

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'test/specs/main.js',
      {pattern: 'public/libs/**/*.js', included: false},
      {pattern: 'public/modules/**/*.js', included: false},
      {pattern: 'test/specs/**/*spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [
      'public/modules/ngGo.js',
      'public/modules/main.js'
    ],


    // Explicitly listing plugins
    // 'karma-chrome-launcher'
    // 'karma-firefox-launcher'
    // 'karma-ie-launcher'
    plugins: [
      'karma-requirejs',
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],


    // Cover the following JS files for report
    preprocessors: {
      'test/specs/**/*.js': ['coverage']
    },


    // Spec report location and format
    coverageReporter: {
      type : 'html',
      dir : 'reports/specs/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
