define([], function() {
  "use strict";
 
 var Service = function(factory) {
    return {
      find_articles: function(query) {
        return factory.get({
          q: query
        }).$promise;
      }
    };
  };

  Service.$inject = ["factory"];
  return Service;
  
});


