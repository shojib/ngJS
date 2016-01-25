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
        x: 0,
        y: 0,
        rndX: 0,
        rndY: 0,
        rgba1: this.create2DArray(this.columns),
        rgba2: this.create2DArray(this.columns),
        rgba3: this.create2DArray(this.columns),
        cells: this.create2DArray(this.columns)
      }
    },
    contextTypes: {
      rndNum: React.PropTypes.number,
      rgba1Val: React.PropTypes.number,
      rgba2Val: React.PropTypes.number,
      rgba3Val: React.PropTypes.number
    },
    componentWillReceiveProps: function(nextProps) {
      console.log("nextProps: " + nextProps);
    },
    componentDidUpdate: function(prevProps, prevState) {
      this.state.x += this.state.x;
      this.state.y += this.state.y;
    },
    shouldComponentUpdate: function(nextProps, nextState) {
      return this.props !== nextProps;
    },
    render: function() {
      var x = this.state.x;
      var y = this.state.y;
      var rndX = this.getRandomNumber(this.columns);
      var rndY = this.getRandomNumber(this.rows);

      this.state.cells[rndX][rndY] = this.context.rndNum;    
      this.state.rgba1[rndX][rndY] = this.context.rgba1Val;
      this.state.rgba2[rndX][rndY] = this.context.rgba2Val;
      this.state.rgba3[rndX][rndY] = this.context.rgba3Val;
      
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
    contextTypes: {
      columns: React.PropTypes.number
    },
    shouldComponentUpdate: function(nextProps, nextState) {
      return this.props !== nextProps;
    },
    render: function() {
      var column = [];
      for (var i = 0; i < this.context.columns; i++) {
        column.push(React.createElement(Cell, null));
      }
      return React.createElement("div", {className: "row"}, column)
    }
  });

  var Row = React.createClass({displayName: "Row",
    shouldComponentUpdate: function(nextProps, nextState) {
      return this.props !== nextProps;
    },
    render: function() {
      var row = [];
      for (var i = 0; i < this.props.rows; i++) {
        row.push(React.createElement(Column, {id: i}));
      }
      return React.createElement("div", null, row)
    }
  });

  var Grid = React.createClass({displayName: "Grid",
    shouldComponentUpdate: function(nextProps, nextState) {
      return this.props !== nextProps;
    },
    getChildContext: function() {
      return { 
        columns: this.props.columns
      }
    },
    childContextTypes: {
      columns: React.PropTypes.number
    },
    render: function() {
      return React.createElement(Row, {rows: this.props.rows})
    }
  });

  var Buttons = React.createClass({displayName: "Buttons",
    shouldComponentUpdate: function(nextProps, nextState) {
      return this.props !== nextProps;
    },
    render: function() {
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
        isInterval: false
      }
    },
    randomizeCells: function() {
      this.state.rndNum = this.getRandomNumber(this.rgba);
      this.state.rgba1Val = this.getRandomNumber(this.rgba);
      this.state.rgba2Val = this.getRandomNumber(this.rgba);
      this.state.rgba3Val = this.getRandomNumber(this.rgba);
      this.setState({});
    },
    startTimer: function() {
      // log.debug("Starting timer...");
      this.state.isInterval = true;
      this.state.interval = setInterval(this.randomizeCells, 0);
    },
    stopTimer: function() {
      // log.debug("Stopping timer...");
      this.state.isInterval = false;
      clearInterval(this.state.interval);
      this.setState({});
    },
    getChildContext: function() {
      return { 
        rndNum: this.state.rndNum,
        rgba1Val: this.state.rgba1Val,
        rgba2Val: this.state.rgba2Val,
        rgba3Val: this.state.rgba3Val
      }
    },
    childContextTypes: {
      rndNum: React.PropTypes.number,
      rgba1Val: React.PropTypes.number,
      rgba2Val: React.PropTypes.number,
      rgba3Val: React.PropTypes.number
    }
  };

  var GridWrapper1 = React.createClass({displayName: "GridWrapper1",
    mixins: [CommonMixins, GridMixins],
    shouldComponentUpdate: function(nextProps, nextState) {
      return this.state !== nextState;
    },
    render: function() {
      return (
        React.createElement("div", null, 
        React.createElement(Buttons, {start: this.startTimer, stop: this.stopTimer, isInterval: this.state.isInterval}), React.createElement("br", null), 
        React.createElement("div", {className: "grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows}))
        )
      )
    }
  });

  var GridWrapper2 = React.createClass({displayName: "GridWrapper2",
    mixins: [CommonMixins, GridMixins],
    shouldComponentUpdate: function(nextProps, nextState) {
      return this.state !== nextState;
    },
    render: function() {
      return (
        React.createElement("div", null, 
        React.createElement(Buttons, {start: this.startTimer, stop: this.stopTimer, isInterval: this.state.isInterval}), React.createElement("br", null), 
        React.createElement("div", {className: "small-grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows})), 
        React.createElement("div", {className: "small-grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows})), 
        React.createElement("div", {className: "small-grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows})), 
        React.createElement("div", {className: "small-grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows})), 
        React.createElement("div", {className: "grid"}, React.createElement(Grid, {columns: this.columns, rows: this.rows}))
        )
      )
    }
  });


  
  var Directive = function(log, stateParams) {
    return {
      restrict: "E",
      link: function() {

        // window.perf = Perf.addons.Perf;
        // window.react = React;

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


