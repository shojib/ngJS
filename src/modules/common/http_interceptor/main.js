var HttpInterceptor = angular.module("ngJS.http.interceptor", []);

var HttpInterceptorFactory = function(log, q) {
  log.debug("Intercepting...");
  return {
    request: function(config) {
      return config || q.when(config);
    },
    requestError: function(rejection) {
      log.debug("requestError: " + rejection);
      return q.reject(rejection);
    },
    response: function(response) {
      log.debug("response.data: " + response.data);
      log.debug("response.status: " + response.status);
      return response || q.when(response);
    },
    responseError: function(rejection) {
      window.responseError = rejection;
      log.debug("responseError: " + rejection);
      return q.reject(rejection);
    }
  };
};

HttpInterceptorFactory.$inject = ["$log", "$q"];

HttpInterceptor.factory("HttpInterceptor", HttpInterceptorFactory);



