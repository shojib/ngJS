var httpInterceptor = require('./http_interceptor/main'); 
var header = require('./header/main');
var Footer = require('./footer/main');
var error = require('./error/main');

var Common = angular.module('ngJS.common', [
	'ngJS.http.interceptor', 
	'ngJS.header',
	'ngJS.footer', 
	'ngJS.error'
]);

