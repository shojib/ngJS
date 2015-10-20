define([], function() {
  "use strict";
  
  var Directive = function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "/modules/common/header/tmpl/header.html"
    };
  };

  return Directive;
  
});


