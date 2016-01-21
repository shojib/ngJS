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
      
      var startTimer = function() {
        startInterval = intervalFn();
      };
      
      var stopTimer = function() {
        interval.cancel(startInterval);
        log.debug("stop timer");
      }; 


    var CellBlock = React.createClass({
      render: function() {
        log.debug("CellBlock row: " + this.props.row);
        log.debug("CellBlock column: " + this.props.column);
        return (
          <div></div>
        );
      }
  });


    var ColumnGrid = React.createClass({
      render: function() {
        log.debug("ColumnGrid info: " + this.props.info);
        return (
          <div className="row">
            {columns.map(function(column, id) {
               return (
                <div className="col-md-1 thumbnail inline-center">
                  <CellBlock column="{column}" row="{this.props.row}" />
                </div>
              );
            })}
          </div>
        );
      }
  });

    var RowGrid = React.createClass({
  	  render: function() {     
  	  	var rowList = rows.map(function(row, id) {
          return <ColumnGrid info="{row}" />
  	  	});
  	    return <span>{rowList}</span>;
  	  }
	});
  
  ReactDOM.render(
    <RowGrid />,
    document.getElementById('table1')
  );
  ReactDOM.render(
    <RowGrid />,
    document.getElementById('table2')
  );
  ReactDOM.render(
    <RowGrid />,
    document.getElementById('table3')
  );
  ReactDOM.render(
    <RowGrid />,
    document.getElementById('table4')
  );
  ReactDOM.render(
    <RowGrid />,
    document.getElementById('table5')
  );

  };

  Ctrl.$inject = ["$scope", "$log", "$interval", "$stateParams"];
  
  return Ctrl;

});


