define([
  "angular", 
  "common/main", 
  "home/main", 
  "poem/main", 
  "article/main", 
  "speedtest/main"], 

  function(angular) {
    "use strict";
    
    var ngJS = angular.module("ngJS", [
      "pascalprecht.translate", 
      "ui.router", 
      "ngAnimate", 
      "ngSanitize",
      "ngJS.common", 
      "ngJS.home", 
      "ngJS.poem", 
      "ngJS.article", 
      "ngJS.speedtest"
    ]);
    
    ngJS.config([
      "$urlRouterProvider", 
      "$httpProvider", 
      "$translateProvider", 
      "$logProvider", 
      "$compileProvider",
       function(
        urlRouterProvider, 
        httpProvider, 
        translateProvider, 
        logProvider, 
        compileProvider) {
        
        httpProvider.defaults.headers.common["Accept"] = "application/json";
        httpProvider.interceptors.push('HttpInterceptor');

        translateProvider.useStaticFilesLoader({
          prefix: "../i18n/",
          suffix: ".json"
        });
        
        translateProvider.preferredLanguage("en_US");
        translateProvider.useSanitizeValueStrategy('sanitize');

        urlRouterProvider.when("", "/home");
        urlRouterProvider.otherwise("/error/404");

        logProvider.debugEnabled(true);
        compileProvider.debugInfoEnabled(true);
        httpProvider.useApplyAsync(true);
      }
    ]);

    ngJS.run(function() {});

    return ngJS;

  }
);


