define([], function() {
  "use strict";  

 var Item = function(filter) {
    this.checked = false;
    this.value = '';
    this.items = [];
    this.counter = 0;
    this.backup = [];
    this.activeTab = "all";
    this.filter = filter;
    this.itemSize = 0;
  };
  Item.prototype = {
    set: function(value) {
      this.value = value;
    },
    setDone: function(id, bool) {
      var length = this.items.length;
      for (var i = 0; i < length; i++) {
        if (this.items[i].id === id) {
          this.items[i].checked = bool;
          break;
        }
      }
    },
    add: function(value) {
      this.items.push({
        id: this.counter,
        checked: false,
        value: value
      });
      this.backup = this.items;
      this.counter++;
    },
    remove: function(id) {
      var length = this.items.length;
      for (var i = 0; i < length; i++) {
        if (this.items[i].id === id) {
          this.items.splice(i, 1);
          break;
        }
      }
      this.backup = this.items;
    },
    update: function() {
      var items = [];
      if (this.activeTab === "all") {
        items = this.getItems();
      } else if (this.activeTab === "active") {
        items = this.getActive();
      } else {
        items = this.getCompleted();
      }
      return items;
    },
    getSize: function() {
      var items = this.filter('filter')(this.items, this.items.checked===true);
      return items.length;
    },
    setActiveTab: function(tab) {
      this.activeTab = tab;
    },
    getItems: function() {
      this.items = this.backup;
      return this.items;
    },
    getAll: function() {
      this.activeTab = "all";
      return this.getItems();
    },
    getActive: function() {
        var items = this.getItems();
        this.activeTab = "active";
        return this.filter('filter')(items, items.checked===true);
    },
    getCompleted: function() {
        var items = this.getItems();
        this.activeTab = "completed";
        return this.filter('filter')(items, items.checked!==true);
    }
  };

  var Ctrl = function(scope, log, filter) {
    var item = new Item(filter),
      activeTab = "all",
      counter = 0;

    scope.items = item.getItems();
    scope.itemSize = 0;
    scope.add = function(event) {
      if ((!event || event.which === 13 || event === '') && scope.inputVal.trim() !== "") {
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

  Ctrl.$inject = ["$scope", "$log", "$filter"];
  return Ctrl;

});


