var Header = angular.module("ngJS.header", []);

var HeaderDirective = function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "./modules/common/header/tmpl/header.html"
    };
};

    
Header.directive("ngjsHeader", HeaderDirective);


