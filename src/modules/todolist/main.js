var Directive = require('./files/directive'); 
var Ctrl = require('./files/controller');

var TodoList = angular.module('ngJS.todolist', ['ui.router', 'ngAnimate']);

TodoList.config([
  '$stateProvider', function(stateProvider) {
    stateProvider.state('todolist', {
      url: '/todolist',
      templateUrl: './modules/todolist/tmpl/todolist.html',
      controller: Ctrl
    });
  }
]);

TodoList.directive('item', Directive);
TodoList.controller('Ctrl', Ctrl);