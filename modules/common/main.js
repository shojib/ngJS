define([
	"angular", 
	"common/http_interceptor/main", 
	"common/header/main",
	"common/footer/main",
	"common/error/main"], function(angular) {
	"use strict";

	var Common = angular.module("ngJS.common", [
		"ngJS.http.interceptor", 
		"ngJS.header",  
		"ngJS.footer",  
		"ngJS.error"
	]);
	
	return Common;
	
});


