var factory = require('./files/factory');
var service = require('./files/service'); 
var controller = require('./files/controller');

var Article = angular.module('ngJS.article', ['ui.router', 'ngAnimate', 'ngResource']);

Article.config([
  '$stateProvider', function(state_provider) {
    state_provider.state('article', {
      url: '/article',
      templateUrl: './modules/article/tmpl/article.html',
      controller: controller
    });
  }
]);

Article.factory('factory', factory);
Article.service('service', service);
Article.controller('controller', controller);