define(["angular", "poem/files/controller"], function(angular, controller) {
  "use strict";
  
  var Poem = angular.module("ngJS.poem", ["ui.router"]);
  
  Poem.config([
    "$stateProvider", function(state_provider) {
      return state_provider.state("poem", {
        url: "/poem",
        templateUrl: "./modules/poem/tmpl/poem.html",
        controller: controller
      });
    }
  ]);

  Poem.controller("controller", controller);
  return Poem;

});


