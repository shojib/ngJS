define(["angular", "todolist/files/directive", "todolist/files/controller"], 
  function(angular, directive, controller) {

  "use strict";
  
  var TodoList = angular.module("ngJS.todolist", ["ui.router", "ngAnimate", "ngResource"]);
  
  TodoList.config([
    "$stateProvider", function(stateProvider) {
      stateProvider.state("todolist", {
        url: "/todolist",
        templateUrl: "./modules/todolist/tmpl/todolist.html",
        controller: controller
      });
    }
  ]);

  TodoList.directive("itemWidget", directive);
  TodoList.controller("controller", controller);

  return TodoList;

});


