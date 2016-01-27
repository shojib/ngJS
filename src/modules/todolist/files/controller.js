define([], function() {
  "use strict";

  var Item = function() {
    this.checked = false;
    this.value = '';
    this.items = [];
  };
  Item.prototype = {
    set: function(value) {
      this.value = value;
    },
    setDone: function(index, bool) {
      this.items[index].checked = bool;
    },
    add: function(value) {
      this.items.push({
        checked: false,
        value: value
      });
    },
    remove: function(index) {
      this.items.splice(index, 1);
    },
    size: function() {
      return this.items.length;
    },
    getItems: function() {
      return this.items;
    }
  };
  
  var Ctrl = function(scope, log) {
    var item = new Item();
    scope.items = item.getItems();
    scope.add = function(event) {
      if (!event || event.which === 13 || event === '') {
        item.add(scope.inputVal);
        scope.inputVal = '';
      }
    };
    scope.update = function(index) {
        item.setDone(index, scope.checkbox);
        console.log(scope.checkbox);
    };

  };

  Ctrl.$inject = ["$scope", "$log"];
  return Ctrl;

});


