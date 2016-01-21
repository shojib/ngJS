define(["angular", "speedtest/files/angular_ctrl", "speedtest/files/react_ctrl"], 
  function(angular, angularCtrl, reactCtrl) {
  
  "use strict";
  
  var SpeedTest = angular.module("ngJS.speedtest", ["ui.router", "ngAnimate",]);
  
  SpeedTest.config([
    "$stateProvider", function(state_provider) {
      state_provider.state("angularSpeedTest", {
        url: "/speedtest/angularjs",
        templateUrl: "./modules/speedtest/tmpl/angular.html",
        controller: angularCtrl
      }).state("reactSpeedTest", {
        url: "/speedtest/reactjs",
        templateUrl: "./modules/speedtest/tmpl/react.html",
        controller: reactCtrl
      });
    }
  ]);

  SpeedTest.controller("angularCtrl", angularCtrl);
  SpeedTest.controller("reactCtrl", reactCtrl);

  return SpeedTest;

});


