  define(["angular", "common/footer/files/directive"], function(angular, directive) {
    "use strict";
    
    var Footer = angular.module("ngJS.footer", []);
    
    Footer.directive("ngjsFooter", directive);
    
    return Footer;

  });


