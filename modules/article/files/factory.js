define([], function() {
    "use strict";

    var Factory = function(resource, log) {
      return resource("http://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20000101&end_date=20140214&sort=newest&fl=headline%2Clead_paragraph%2Cweb_url%2Cmultimedia%2Cpub_date&page=100&api-key=5445ed010346db7ab31fc33e55049350:8:68807489");
    };

    Factory.$inject = ["$resource", "$log"];
    return Factory;
    
  });


