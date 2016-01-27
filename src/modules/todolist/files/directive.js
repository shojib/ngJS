define([], function() {
  "use strict";
  
  var Directive = function() {
    return {
      restrict: "E",
      templateUrl: "./modules/todolist/tmpl/item.html"
    }
  };
  return Directive;

});


