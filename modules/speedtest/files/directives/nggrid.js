define([], function() {
  "use strict";
  
  var Directive = function(stateParams, interval, log, interpolate) {
    return {
      restrict: "E",
      templateUrl: "/modules/speedtest/tmpl/nggrid.html",
      link: function(scope, ele, attrs) {       

        log.debug("In nggrid...");
        
        scope.rows = [];
        scope.rnd = [];
        for (var i=51; i--;) {
          scope.rows.push(i);
        }
        
        scope.columns = [];
        for (var i=12; i--;) {
          scope.columns.push(i);
        }  
        
        var intervalFn = function() {
          return interval(function() {
            log.debug("start timer");
            var random = scope.getRandomNumber(50);
            var tmpCell = [];
            tmpCell[random] = random;
            scope.cell[random] = random;
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
               
      }
    };
  };
  
  Directive.$inject = ["$stateParams", "$interval", "$log", "$interpolate"];

  return Directive;
  
});


