define([], function() {
  "use strict";

  var Item = function(filter) {
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
    },
    getActive: function() {
      return filter('filter')(this.items, this.items.checked!==true);
    },
    getCompleted: function() {
      return filter('filter')(this.items, this.items.checked==true);
    }
  };

  Item.$inject = ["$filter"];
  
  return Item;

});


