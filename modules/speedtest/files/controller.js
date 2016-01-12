define([], function() {
  "use strict";
  
  var Ctrl = function(scope, stateParams, interval, log) {  
    scope.tab = (stateParams.uid==="angularjs" ? true : false);      
    scope.getRandomNumber = function(val) {
      return Math.ceil(Math.random() * val);
    };   
                    
  };

  Ctrl.$inject = ["$scope", "$stateParams", "$interval", "$log"];
  
  return Ctrl;

});


