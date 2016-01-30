'use strict';

var Item = require('./item'); 

var Ctrl = function(scope, log, filter) {

var item = new Item(filter),
  activeTab = 'all',
  counter = 0;

  scope.items = item.getItems();
  scope.itemSize = 0;
  scope.add = function(event) {
    if ((!event || event.which === 13 || event === '') && scope.inputVal.trim() !== '') {
      item.add(scope.inputVal);
      scope.inputVal = '';
      scope.update();
    }
  };
  scope.remove = function(index) {
    item.remove(index);
    scope.update();
  };
  scope.setDone = function(index) {
    item.setDone(index, scope.checkbox);
    console.log(scope.checkbox);
  };
  scope.update = function(index) {
    scope.items = item.update();
    scope.itemSize = item.getSize();
  };
  scope.getAllItems = function() {
    scope.items = item.getAll();
  };
  scope.getActive = function() {
    scope.items = item.getActive();
  };
  scope.getCompleted = function() {
    scope.items = item.getCompleted();
  };

};

Ctrl.$inject = ['$scope', '$log', '$filter'];

module.exports = Ctrl;