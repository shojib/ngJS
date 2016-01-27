define([], function() {
  "use strict";
  
  var Directive = function() {
    return {
      restrict: "E",
      scope: {
        checkbox: "="
      },
      templateUrl: "./modules/todolist/tmpl/item.html",
      link: function(scope) {
      }
    }
  };
  return Directive;

});


