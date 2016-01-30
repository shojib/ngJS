var NgDirective = require('./files/angular_directive'); 
var ReactDirective = require('./files/react_directive');

var SpeedTest = angular.module('ngJS.speedtest', ['ui.router', 'ngAnimate']);

SpeedTest.config([
  '$stateProvider', function(stateProvider) {
    stateProvider.state('angularSpeedTest', {
      url: '/speedtest/angular/:version',
      templateUrl: './modules/speedtest/tmpl/angular.html'
    }).state('reactSpeedTest', {
      url: '/speedtest/react/:version',
      templateUrl: './modules/speedtest/tmpl/react.html'
    });
  }
]);

SpeedTest.directive('angularWidget', NgDirective);
SpeedTest.directive('reactWidget', ReactDirective);


