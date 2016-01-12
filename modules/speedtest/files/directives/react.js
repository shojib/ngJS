define([], function() {
  "use strict";
  
  var Directive = function(log) {
    return {
      restrict: "E",
      templateUrl: "/modules/speedtest/tmpl/react.html",
      link: function(scope) {         
        log.debug("In react...");
      }
    };
  };
  
  Directive.$inject = ["$log"];

  return Directive;
  
});


