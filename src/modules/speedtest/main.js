define(["angular", "speedtest/files/angular_service", "speedtest/files/angular_directive", "speedtest/files/react_directive"], 
  function(angular, angularService, angularDirective, reactDirective) {
  
  "use strict";
  
  var SpeedTest = angular.module("ngJS.speedtest", ["ui.router", "ngAnimate"]);
  
  SpeedTest.config([
    "$stateProvider", function(state_provider) {
      state_provider.state("angularSpeedTest", {
        url: "/speedtest/angular/:version",
        templateUrl: "./modules/speedtest/tmpl/angular.html"
      }).state("reactSpeedTest", {
        url: "/speedtest/react/:version",
        templateUrl: "./modules/speedtest/tmpl/react.html"
      });
    }
  ]);

  SpeedTest.service("AngularService", angularService);
  SpeedTest.directive("angularWidget", angularDirective);
  SpeedTest.directive("reactWidget", reactDirective);

  return SpeedTest;

});


