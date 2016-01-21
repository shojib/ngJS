define(['react', 'reactDom'], function(React, ReactDOM) {
  "use strict";
  
  var Ctrl = function(scope, log, interval, stateParams) {   
    var rows = [], 
        columns = [], 
        cell = [],
        tabs = '',
        startInterval = '',
        rnd = 0,
        rgba1 = 0,
        rgba2 = 0,
        rgba3 = 0;
    
    var getRandomNumber = function(val) {
      return Math.floor((Math.random() * val) + 0);
    };    
    
    for (var i = 0; i < 51; i++) {
      rows.push(i);
    }
    
    for (var i = 0; i < 31; i++) {
      columns.push(i);
    }

    function Create2DArray(rows) {
      var arr = [];
      for (var i=0; i <rows; i++) {
         arr[i] = [];
      }
      return arr;
    }

    cell = Create2DArray(100);
    rgba1 = Create2DArray(255);
    rgba2 = Create2DArray(255);
    rgba3 = Create2DArray(255);
    
    var intervalFn = function() {
      return interval(function() {
        log.debug("start timer");
        var rndCols = getRandomNumber(31);
        var rndRows = getRandomNumber(51);
        cell[rndCols][rndRows] =  getRandomNumber(255);
        rgba1[rndCols][rndRows] =  getRandomNumber(255);
        rgba2[rndCols][rndRows] =  getRandomNumber(255);
        rgba3[rndCols][rndRows] =  getRandomNumber(255);
      }, 0);   
    };  

    scope.rows = rows;
    scope.columns = columns;
    scope.cell = cell;
    scope.rgba1 = rgba1;
    scope.rgba2 = rgba2;
    scope.rgba3 = rgba3;
    
    scope.startTimer = function() {
      startInterval = intervalFn();
    };
    
    scope.stopTimer = function() {
      interval.cancel(startInterval);
      log.debug("stop timer");
    };   

    var CellBlock = React.createClass({
	  render: function() {
	  	var cellValue = this.props.data.text;
	    return <div>{cellValue}</div>
	  }
	});

    var ColumnGrid = React.createClass({
	  render: function() {
	    return (
	    	<div className="col-md-1 thumbnail inline-center">
		  		{columns.map(function(column) {
					return <CellBlock data="{column}" />
		  		})}
	  		</div>
    	);
	  }
	});

    var RowGrid = React.createClass({
	  render: function() {
	  	console.log("rows: " + this.props.rows);
	  	console.log("columns: " + this.props.columns);
	  	// var rowList = rows.map(function(row) {
	  	// 	return <ColumnGrid  />
	  	// });
	    return <div className="row">{this.props.rows[0]}{this.props.columns[0]}</div>;
	  }
	});
	
	ReactDOM.render(
	  <RowGrid rows="rows" columns="{columns}" />,
	  document.getElementById('react')
	);

  };

  Ctrl.$inject = ["$scope", "$log", "$interval", "$stateParams"];
  
  return Ctrl;

});


