var Footer = angular.module("ngJS.footer", []);

var FooterDirective = function() {
  return {
    restrict: "E",
    templateUrl: "./modules/common/footer/tmpl/footer.html",
    link: function(scope) {
      var currentYear = new Date().getFullYear();       
      scope.copyrightYears = currentYear > 2015 ? 2015 + '-' + currentYear : 2015;
    }
  };
};

Footer.directive("ngjsFooter", FooterDirective);


