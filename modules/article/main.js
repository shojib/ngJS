define(["angular", "article/files/factory", "article/files/service", "article/files/controller"], function(angular, factory, service, controller) {
  "use strict";
  
  var Article = angular.module("ngJS.article", ["ui.router", "ngAnimate", "ngResource"]);
  
  Article.config([
    "$stateProvider", function(state_provider) {
      state_provider.state("article", {
        resolve: {
          service: "service"
        },
        url: "/article",
        templateUrl: "./modules/article/tmpl/article.html",
        controller: controller
      });
    }
  ]);

  Article.factory("factory", factory);
  Article.service("service", service);
  Article.controller("controller", controller);

  return Article;

});


