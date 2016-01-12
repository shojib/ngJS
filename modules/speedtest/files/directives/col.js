define([], function() {
  "use strict";
  
  var Directive = function(log, interval) {
    return {
      restrict: "E",
      templateUrl: "/modules/speedtest/tmpl/col.html",
      link: function(scope, ele, attrs) {        
        log.debug("In col-grid...");    
        
        var random = scope.getRandomNumber(50);
        scope.random = random;
        var tmpCell = [];
        tmpCell[random] = random;
        scope.cell = tmpCell;
          
      }
    };
  };
  
  Directive.$inject = ["$log", "$interval"];
  
  return Directive;
  
});


