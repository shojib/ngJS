  define(["angular", "common/header/files/directive"], function(angular, directive) {
    "use strict";
    
    var Header = angular.module("ngJS.header", []);
    
    Header.directive("ngjsHeader", directive);
    
    return Header;

  });


