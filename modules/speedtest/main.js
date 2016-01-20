define(["angular", "speedtest/files/controller"], function(angular, controller) {
  "use strict";
  
  var SpeedTest = angular.module("ngJS.speedtest", ["ui.router", "ngAnimate"]);
  
  SpeedTest.config([
    "$stateProvider", function(state_provider) {
      state_provider.state("speedtest", {
        url: "/speedtest/:uid",
        templateUrl: "/modules/speedtest/tmpl/speedtest.html",
        controller: controller
      });
    }
  ]);

  SpeedTest.controller("controller", controller);

  return SpeedTest;

});


