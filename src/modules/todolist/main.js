define(["angular", "todolist/files/service", "todolist/files/directive", "todolist/files/controller"], 
  function(angular, service, directive, controller) {

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

  TodoList.service("Item", service);
  TodoList.directive("item", directive);
  TodoList.controller("Ctrl", controller);

  return TodoList;

});


