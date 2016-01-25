requirejs.config({
  paths: {
    angular: "../libs/angular/angular",
    react: "../libs/react/react",
    reactDom: "../libs/react/react-dom",
    reactAddons: "../libs/react/react-with-addons",
    ngCookies: "../libs/angular-cookies/angular-cookies",
    ngTranslate: "../libs/angular-translate/angular-translate",
    ngSanitize: "../libs/angular-sanitize/angular-sanitize",
    ngResource: "../libs/angular-resource/angular-resource",
    uiRouter: "../libs/angular-ui-router/release/angular-ui-router",
    ngAnimate: "../libs/angular-animate/angular-animate",
    ngTranslateLoader: "../libs/angular-translate-loader-url/angular-translate-loader-url",
    ngTranslateLoaderStaticFile: "../libs/angular-translate-loader-static-files/angular-translate-loader-static-files",
    ngTranslateStorageCookie: "../libs/angular-translate-storage-cookie/angular-translate-storage-cookie",
    ngTranslateStorageLocal: "../libs/angular-translate-storage-local/angular-translate-storage-local"
  },
  useStrict: true,
  shim: {
    angular: {
      exports: "angular"
    },
    react: {
      exports: "react"
    },
    reactDom: {
      exports: "reactDom"
    },
    reactAddons: {
      exports: "reactAddons"
    },
    ngResource: {
      deps: ["angular"],
      exports: "ngResource"
    },
    ngAnimate: {
      deps: ["angular"],
      exports: "ngAnimate"
    },
    ngSanitize: {
      deps: ["angular"],
      exports: "ngSanitize"
    },
    uiRouter: {
      deps: ["angular"],
      exports: "uiRouter"
    },
    ngTranslate: {
      deps: ["angular"],
      exports: "ngTranslate"
    },
    ngCookies: {
      deps: ["angular"],
      exports: "ngCookies"
    },
    ngTranslateLoader: {
      deps: ["angular", "ngTranslate"],
      exports: "ngTranslateLoader"
    },
    ngTranslateLoaderStaticFile: {
      deps: ["angular", "ngTranslate"],
      exports: "ngTranslateLoaderStaticFile"
    },
    ngTranslateStorageCookie: {
      deps: ["angular", "ngTranslate"],
      exports: "ngTranslateStorageCookie"
    },
    ngTranslateStorageLocal: {
      deps: ["angular", "ngTranslate"],
      exports: "ngTranslateStorageLocal"
    }
  },
  priority: ["angular"]
});

requirejs([
  "angular", 
  "react",
  "reactDom",
  "reactAddons",
  "ngAnimate", 
  "ngTranslate", 
  "ngSanitize",
  "ngTranslateLoader", 
  "ngTranslateLoaderStaticFile", 
  "ngTranslateStorageCookie", 
  "ngTranslateStorageLocal", 
  "ngCookies", 
  "ngResource", 
  "uiRouter",
  "ngJS"], 

  function(angular, react, reactDom, reactAddons,
    ngAnimate, ngTranslate, ngSanitize, 
    ngTranslateLoader, ngTranslateLoaderStaticFile, ngTranslateStorageCookie,
    ngTranslateStorageLocal, ngCookies, ngResource, 
    uiRouter, ngJS) {
      "use strict";
      angular.bootstrap(document, [ngJS["name"]]);
});


