define(['react', 'reactDom', 'reactAddons'], function(React, ReactDOM, ReactAddons) {
  "use strict";
  
  var columns = 31, rows = 51;
var create2DArray = function(num) {
    var obj = [];
    for (var i = 0; i < num; i++) {
      obj[i] = [];
    }
    return obj;
  };
  
  var getRandomNumber = function(num) {
    return Math.floor((Math.random() * num) + 0);
  };

var CommonMixins = {
columns: columns,
rows: rows,
rgba: 255,
      rgba1: create2DArray(columns),
      rgba2: create2DArray(columns),
      rgba3: create2DArray(columns),
      cells: create2DArray(columns),
  create2DArray: create2DArray,
  getRandomNumber: getRandomNumber
};

var Cell = React.createClass({
  mixins: [CommonMixins, ReactAddons.addons.PureRenderMixin],
  getInitialState: function() {
    return {
      rndX: 0,
      rndY: 0
    }
  },
  render: function() {
    var x = this.props.x;
    var y = this.props.y;
    var rndX = this.getRandomNumber(this.columns);
    var rndY = this.getRandomNumber(this.rows);
    
    this.cells[rndX][rndY] = this.props.values.rndNum;    
    this.rgba1[rndX][rndY] = this.props.values.rgba1Val;
    this.rgba2[rndX][rndY] = this.props.values.rgba2Val;
    this.rgba3[rndX][rndY] = this.props.values.rgba3Val;
    
    var style = {
      backgroundColor: "rgba(" + this.rgba1[x][y] + "," + this.rgba2[x][y] + "," + this.rgba3[x][y] + "," + 1 + ")"
    };
      
    return (
    <div className="col-md-1 thumbnail inline-center" style={style}>
      <div>{this.cells[x][y]}</div>
      </div>
    )
  }
});

var Column = React.createClass({
  mixins: [ReactAddons.addons.PureRenderMixin],
  render: function() {
    var column = [];
    for (var i = 0; i < this.props.columns; i++) {
      column.push(<Cell x={i} y={this.props.id} key={i} values={this.props.values} />);
    }
    return (<div className="row">{column}</div>)
  }
});

var Row = React.createClass({
  mixins: [ReactAddons.addons.PureRenderMixin],
  render: function() {
    var row = [];
    for (var i = 0; i < this.props.rows; i++) {
      row.push(<Column id={i} key={i} columns={this.props.columns} values={this.props.values} />);
    }
    return (<div>{row}</div>)
  }
});

var Grid = React.createClass({
  mixins: [ReactAddons.addons.PureRenderMixin],
  render: function() {
    return (<div><Row rows={this.props.rows} columns={this.props.columns} values={this.props.values} /></div>)
  }
});

var Buttons = React.createClass({
  mixins: [ReactAddons.addons.PureRenderMixin],
  render: function() {
  console.log(this.props.isInterval);
    return (
      <div>
          {!this.props.isInterval  
          ? <button className="btn btn-primary" onClick={this.props.start}>Start</button>
          : <button className="btn btn-danger" onClick={this.props.stop}>Stop</button>
          }
      </div>
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
  }
};

var GridWrapper1 = React.createClass({
  mixins: [CommonMixins, GridMixins, ReactAddons.addons.PureRenderMixin],
  render: function() {    
    return (
        <div>
        <Buttons start={this.startTimer} stop={this.stopTimer} isInterval={this.state.isInterval} /><br/>
        <div className="grid"><Grid columns={this.columns} rows={this.rows} values={this.state.values} /></div>
        </div>
    )
  }
});

  var GridWrapper2 = React.createClass({
    mixins: [CommonMixins, GridMixins, ReactAddons.addons.PureRenderMixin],
    render: function() {
      return (
        <div>
        <Buttons start={this.startTimer} stop={this.stopTimer} isInterval={this.state.isInterval} /><br/>
        <div className="small-grid"><Grid columns={this.columns} rows={this.rows} values={this.state.values} /></div>
        <div className="small-grid"><Grid columns={this.columns} rows={this.rows} values={this.state.values} /></div>
        <div className="small-grid"><Grid columns={this.columns} rows={this.rows} values={this.state.values} /></div>
        <div className="small-grid"><Grid columns={this.columns} rows={this.rows} values={this.state.values} /></div>
        <div className="grid"><Grid columns={this.columns} rows={this.rows} values={this.state.values} /></div>
        </div>
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
            <GridWrapper1 />,
              document.getElementById('react')
          );
        } else {
          ReactDOM.render(
            <GridWrapper2 />,
              document.getElementById('react')
          );
        }


      }

    }
  };

  Directive.$inject = ["$log", "$stateParams"];
  
  return Directive;

});


