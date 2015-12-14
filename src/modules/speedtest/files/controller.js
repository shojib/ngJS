define([], function() {
  "use strict";
  
  var Ctrl = function(scope, log, interval, stateParams) {    
    
    scope.tab = (stateParams.uid==="angularjs" ? true : false);
    
    scope.getRandomNumber = function(val) {
      return Math.ceil(Math.random() * val);
    };    
    
    scope.rows = [];
    scope.rnd = [];
    for (var i=51; i--;) {
      scope.rows.push(i);
      scope.rnd.push(scope.getRandomNumber(50));
    }
    
    scope.columns = [];
    for (var i=12; i--;) {
      scope.columns.push(i);
    }
    
    var intervalFn = function() {
      return interval(function() {
        log.debug("start timer");
        var random = scope.getRandomNumber(50);
        scope.rnd[random] = random;
      }, 0);   
    };  
    
    var startInterval = "";
    scope.startTimer = function() {
      startInterval = intervalFn();
    };
    
    scope.stopTimer = function() {
      interval.cancel(startInterval);
      log.debug("stop timer");
    };
    
  };

  Ctrl.$inject = ["$scope", "$log", "$interval", "$stateParams"];
  
  return Ctrl;

});


