define(['react', 'reactDom', 'reactAddons'], function(React, ReactDOM, Perf) {
  "use strict";
  
  
var CommonMixins = {
columns: 31,
rows: 51,
rgba: 255,
  create2DArray: function(num) {
    var obj = [];
    for (var i = 0; i < num; i++) {
      obj[i] = [];
    }
    return obj;
  },
  getRandomNumber: function(num) {
    return Math.floor((Math.random() * num) + 0);
  }
};

var Cell = React.createClass({displayName: "Cell",
  mixins: [CommonMixins],
  getInitialState: function() {
    return {
      rndX: 0,
      rndY: 0,
      rgba1: this.create2DArray(this.columns),
      rgba2: this.create2DArray(this.columns),
      rgba3: this.create2DArray(this.columns),
      cells: this.create2DArray(this.columns)
    }
  },
  render: function() {
    var x = this.props.x;
    var y = this.props.y;
    var rndX = this.getRandomNumber(this.columns);
    var rndY = this.getRandomNumber(this.rows);
    
    this.state.cells[rndX][rndY] = this.props.values.rndNum;    
    this.state.rgba1[rndX][rndY] = this.props.values.rgba1Val;
    this.state.rgba2[rndX][rndY] = this.props.values.rgba2Val;
    this.state.rgba3[rndX][rndY] = this.props.values.rgba3Val;
    
    var style = {
      backgroundColor: "rgba(" + this.state.rgba1[x][y] + "," + this.state.rgba2[x][y] + "," + this.state.rgba3[x][y] + "," + 1 + ")"
    };
      
    return (
    React.createElement("div", {className: "col-md-1 thumbnail inline-center", style: style}, 
      React.createElement("div", null, this.state.cells[x][y])
      )
    )
  }
});

var Column = React.createClass({displayName: "Column",
  shouldComponentUpdate: function(nextProps, nextState) {
    return (this.props.columns !== nextProps.columns || this.props.values !== nextProps.values);
  },
  render: function() {
    var column = [];
    for (var i = 0; i < this.props.columns; i++) {
      column.push(React.createElement(Cell, {x: i, y: this.props.id, key: i, values: this.props.values}));
    }
    return (React.createElement("div", {className: "row"}, column))
  }
});

var Row = React.createClass({displayName: "Row",
  shouldComponentUpdate: function(nextProps, nextState) {
    return (this.props.columns !== nextProps.columns || this.props.values !== nextProps.values);
  },
  render: function() {
    var row = [];
    for (var i = 0; i < this.props.rows; i++) {
      row.push(React.createElement(Column, {id: i, key: i, columns: this.props.columns, values: this.props.values}));
    }
    return (React.createElement("div", null, row))
  }
});

var Grid = React.createClass({displayName: "Grid",
  shouldComponentUpdate: function(nextProps, nextState) {
    return (this.props.rows !== nextProps.rows || this.props.columns !== nextProps.columns || this.props.values !== nextProps.values);
  },
  render: function() {
    return (React.createElement("div", null, React.createElement(Row, {rows: this.props.rows, columns: this.props.columns, values: this.props.values})))
  }
});

var Buttons = React.createClass({displayName: "Buttons",
  shouldComponentUpdate: function(nextProps, nextState) {
    return (this.props.isInterval !== nextProps.isInterval || this.props.start !== nextProps.start || this.props.stop !== nextProps.stop);
  },
  render: function() {
  console.log(this.props.isInterval);
    return (
      React.createElement("div", null, 
          !this.props.isInterval  
          ? React.createElement("button", {className: "btn btn-primary", onClick: this.props.start}, "Start")
          : React.createElement("button", {className: "btn btn-danger", onClick: this.props.stop}, "Stop")
          
      )
    )
  }
});

var GridMixins = {

  getInitialState: function() {
    return {
      interval: {},
        isInterval: false,
    values: {}
    }
  },
  randomizeCells: function() {
    this.setState({
    isInterval: true,
    values: {
    rndNum: this.getRandomNumber(this.rgba),
    rgba1Val: this.getRandomNumber(this.rgba),
    rgba2Val: this.getRandomNumber(this.rgba),
    rgba3Val: this.getRandomNumber(this.rgba)
    }
    });
  },
  startTimer: function() {
    console.log("Starting timer...");
    this.state.interval = setInterval(this.randomizeCells, 0);
  },
  stopTimer: function() {
    console.log("Stopping timer...");
    clearInterval(this.state.interval);
    this.setState({
      isInterval: false
    });
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    var values = (this.state.values.rndNum !== nextState.values.rndNum || 
      this.state.values.rndNum !== nextState.values.rndNum ||
      this.state.values.rgba1Val !== nextState.values.rgba1Val ||
      this.state.values.rgba2Val !== nextState.values.rgba2Val ||
      this.state.values.rgba3Val !== nextState.values.rgba3Val || 
      this.state.isInterval !== nextState.isInterval);
    return values;
  }
};

var GridWrapper1 = React.createClass({displayName: "GridWrapper1",
  mixins: [CommonMixins, GridMixins],
  render: function() {    
    return (
        React.createElement("div", null, 
        React.createElement(Buttons, {start: this.startTimer, stop: this.stopTimer, isInterval: this.state.isInterval}), React.createElement("br", null), 
        React.createElement("div", {className: "grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows, values: this.state.values}))
        )
    )
  }
});

  var GridWrapper2 = React.createClass({displayName: "GridWrapper2",
    mixins: [CommonMixins, GridMixins],
    render: function() {
      return (
        React.createElement("div", null, 
        React.createElement(Buttons, {start: this.startTimer, stop: this.stopTimer, isInterval: this.state.isInterval}), React.createElement("br", null), 
        React.createElement("div", {className: "small-grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows, values: this.state.values})), 
        React.createElement("div", {className: "small-grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows, values: this.state.values})), 
        React.createElement("div", {className: "small-grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows, values: this.state.values})), 
        React.createElement("div", {className: "small-grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows, values: this.state.values})), 
        React.createElement("div", {className: "grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows, values: this.state.values}))
        )
      )
    }
  });


  
  var Directive = function(log, stateParams) {
    return {
      restrict: "E",
      link: function() {

        // var perf = Perf.addons.Perf;
        // window.perf = perf;
        // perf.start();
        // perf.stop();
        // var measurements = perf.getLastMeasurements();
        // console.table(perf.getLastMeasurements());
        // console.table(perf.printWasted());
        // perf.printInclusive(measurements);
        // perf.printExclusive(measurements);
        // perf.printWasted(measurements);
        // perf.printDOM(measurements);

        if (stateParams.version === "1") {
          ReactDOM.render(
            React.createElement(GridWrapper1, null),
              document.getElementById('react')
          );
        } else {
          ReactDOM.render(
            React.createElement(GridWrapper2, null),
              document.getElementById('react')
          );
        }


      }

    }
  };

  Directive.$inject = ["$log", "$stateParams"];
  
  return Directive;

});


