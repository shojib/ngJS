define(["angular"], function(angular) {
  "use strict";

  var Home = angular.module("ngJS.home", ["ui.router"]);

  Home.config([
    "$stateProvider", function(state_provider) {
      state_provider.state("home", {
        url: "/home",
        templateUrl: "./modules/home/tmpl/home.html"
      });
    }
  ]);

  return Home;

});


