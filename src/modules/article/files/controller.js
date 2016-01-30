'use strict';

var Ctrl = function(scope, service, log) {
  scope.search_query = "Tech";
  scope.find_articles = function(event) {
    if (event.which === 13 || event === '') {
      service.find_articles(scope.search_query).then((function(response) {
        scope.articles = response;
      }), function(error) {
        log.debug("Error status: " + error.status);
      });
    }
  };
};

Ctrl.$inject = ["$scope", "service", "$log"];

module.exports = Ctrl;