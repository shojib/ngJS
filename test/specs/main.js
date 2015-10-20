/* @shojib */

var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

// console.log("List of specs:");
// console.log(tests);

require.config({
    baseUrl: "/base/dist/modules",
    paths: {    
        angular:                    '../libs/angular/angular',
        ngMocks:                    '../libs/angular-mocks/angular-mocks',
        ngAnimate:                  '../libs/angular-animate/angular-animate',
        ngCookies:                  '../libs/angular-cookies/angular-cookies',
        ngTranslate:                '../libs/angular-translate/angular-translate',
        ngResource:                 '../libs/angular-resource/angular-resource',
        uiRouter:                   '../libs/angular-ui-router/release/angular-ui-router',
        ngTranslateLoader:          '../libs/angular-translate-loader-url/angular-translate-loader-url',
        ngTranslateLoaderStaticFile:'../libs/angular-translate-loader-static-files/angular-translate-loader-static-files',
        ngTranslateStorageCookie:   '../libs/angular-translate-storage-cookie/angular-translate-storage-cookie',
        ngTranslateStorageLocal:    '../libs/angular-translate-storage-local/angular-translate-storage-local',
        Home:                       './home/main',
        Article:                    './article/main',
        Poem:                       './poem/main',
        Header:                     './common/header/main'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ngMocks': {
            deps: ['angular'],
            exports: 'ngMocks'
        },
        'ngAnimate': {
            deps: ['angular'],
            exports: 'ngAnimate'
        },
        'ngResource': {
            deps: ['angular'],
            exports: 'ngResource'
        },
        'uiRouter': {
            deps: ['angular'],
            exports: 'uiRouter'
        },
        'ngTranslate': {
            deps: ['angular'],
            exports: 'ngTranslate'
        },
        'ngTranslateLoader': {
            deps: ['angular'],
            exports: 'ngTranslateLoader'
        },
        'ngTranslateLoaderStaticFile': {
            deps: ['angular'],
            exports: 'ngTranslateLoaderStaticFile'
        },
        'ngTranslateStorageCookie': {
            deps: ['angular'],
            exports: 'ngTranslateStorageCookie'
        },
        'ngTranslateStorageLocal': {
            deps: ['angular'],
            exports: 'ngTranslateStorageLocal'
        },
        'ngCookies': {
            deps: ['angular'],
            exports: 'ngCookies'
        },
        'ngMocks': {
            deps: ['angular'],
            exports: 'ngMocks'
        },
        'Home': {
            deps: ['angular'],
            exports: 'Home'
        },
        'Article': {
            deps: ['angular'],
            exports: 'Article'
        },
        'Poem': {
            deps: ['angular'],
            exports: 'Poem'
        },
        'Header': {
            deps: ['angular'],
            exports: 'Header'
        }
    },
    priority: ['angular'],
    deps: tests,
    callback: window.__karma__.start
});


