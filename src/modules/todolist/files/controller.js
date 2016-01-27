define([], function() {
  "use strict";
  
  var Ctrl = function(scope, log) {
    scope.checkbox = "";
    scope.output = "";
    scope.inputValue = "";
    scope.add = function(event) {
      if (event.which === 13 || event === "") {
        scope.output = scope.inputValue;
      }
    };
  };

  Ctrl.$inject = ["$scope", "$log"];
  return Ctrl;

});


