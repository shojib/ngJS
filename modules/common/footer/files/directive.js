define([], function() {
  "use strict";
  
  var Directive = function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "./modules/common/footer/tmpl/footer.html",
      link: function(scope) {
        var currentYear = new Date().getFullYear();       
      	scope.copyrightYears = currentYear > 2015 ? 2015 + '-' + currentYear : 2015;
      }
    };
  };

  return Directive;
  
});


