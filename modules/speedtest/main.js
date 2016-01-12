define([
  "angular", 
  "speedtest/files/directives/col", 
  "speedtest/files/directives/nggrid", 
  "speedtest/files/directives/react", 
  "speedtest/files/controller"], 
  function(angular, colDirective, nggridDirective, reactDirective, controller) {
    
  "use strict";
  
  var SpeedTest = angular.module("ngJS.speedtest", ["ui.router"]);
  
  SpeedTest.config([
    "$stateProvider", function(state_provider) {
      state_provider.state("speedtest", {
        url: "/speedtest/:uid",
        templateUrl: "./modules/speedtest/tmpl/speedtest.html",
        controller: controller
      });
    }
  ]);

  SpeedTest.directive("colGrid", colDirective);
  SpeedTest.directive("ngGrid", nggridDirective);
  SpeedTest.directive("reactGrid", reactDirective);
  SpeedTest.controller("controller", controller);

  return SpeedTest;

});


