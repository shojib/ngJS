
var main = require('./main');

// var common = require('common/main'); 
var home = require('./home/main'); 
// var todolist = require('todolist/main'); 
// var poem = require('poem/main'); 
// var article = require('article/main'); 
// var speedtest = require('speedtest/main');



var ngJS = angular.module('ngJS', [
  'pascalprecht.translate', 
  'ui.router', 
  'ngAnimate', 
  'ngSanitize',
  // 'ngJS.common', 
  'ngJS.home'
  // 'ngJS.todolist',
  // 'ngJS.poem', 
  // 'ngJS.article', 
  // 'ngJS.speedtest'
]);

ngJS.config([
  '$urlRouterProvider', 
  '$httpProvider', 
  '$translateProvider', 
  '$logProvider', 
  '$compileProvider',
   function(
    urlRouterProvider, 
    httpProvider, 
    translateProvider, 
    logProvider, 
    compileProvider) {
    
    httpProvider.defaults.headers.common['Accept'] = 'application/json';
    httpProvider.interceptors.push('HttpInterceptor');

    translateProvider.useStaticFilesLoader({
      prefix: '../i18n/',
      suffix: '.json'
    });
    
    translateProvider.preferredLanguage('en_US');
    translateProvider.useSanitizeValueStrategy('sanitize');

    urlRouterProvider.when('', '/home');
    urlRouterProvider.otherwise('/error/404');

    logProvider.debugEnabled(true);
    compileProvider.debugInfoEnabled(true);
    httpProvider.useApplyAsync(true);
  }
]);

ngJS.run(function() {});


angular.bootstrap(document, [ngJS["name"]]);
