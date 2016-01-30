var Error = angular.module("ngJS.error", ["ui.router"]);

Error.config([
  "$stateProvider", function(state_provider) {
    return state_provider.state("error404", {
      url: "/error/404",
      templateUrl: "./modules/common/error/tmpl/404.html"
    });
  }
]);