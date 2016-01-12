define(["angular", "common/http_interceptor/files/factory"], function(angular, factory) {
	"use strict";
	
	var HttpInterceptor = angular.module("ngJS.http.interceptor", []);
	
	HttpInterceptor.factory("HttpInterceptor", factory);
	
	return HttpInterceptor;

});


