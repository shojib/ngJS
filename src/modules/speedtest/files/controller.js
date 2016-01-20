define([], function() {
  "use strict";
  
  var Ctrl = function(scope, log, interval, stateParams) {    
    var rows = [], 
        columns = [], 
        cell = [],
        tabs = '',
        startInterval = '',
        rnd = 0;
    
    scope.tab = (stateParams.uid==="angularjs" ? true : false);
    
    var getRandomNumber = function(val) {
      return Math.floor((Math.random() * val) + 0);
    };    
    
    for (var i = 0; i < 51; i++) {
      rows.push(i);
    }
    
    for (var i = 0; i < 12; i++) {
      columns.push(i);
    }

    function Create2DArray(rows) {
      var arr = [];
      for (var i=0; i <rows; i++) {
         arr[i] = [];
      }
      return arr;
    }

    var cell = Create2DArray(100);
    
    var intervalFn = function() {
      return interval(function() {
        log.debug("start timer");
        var rndCols = getRandomNumber(12);
        var rndRows = getRandomNumber(51);
        var randomNum = getRandomNumber(100);
        cell[rndCols][rndRows] = randomNum;
      }, 0);   
    };  

    scope.rows = rows;
    scope.columns = columns;
    scope.cell = cell;
    
    scope.startTimer = function() {
      startInterval = intervalFn();
    };
    
    scope.stopTimer = function() {
      interval.cancel(startInterval);
      log.debug("stop timer");
    };
    
  };

  Ctrl.$inject = ["$scope", "$log", "$interval", "$stateParams"];
  
  return Ctrl;

});


