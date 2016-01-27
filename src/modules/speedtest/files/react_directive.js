define(['react', 'reactDom', 'reactAddons'], function(React, ReactDOM, ReactAddons) {
  "use strict";
  
  var columns = 31,
      rows = 51;
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
      create2DArray: create2DArray,
      getRandomNumber: getRandomNumber
  };


var Cell = React.createClass({
  mixins: [CommonMixins, ReactAddons.addons.PureRenderMixin],
  getInitialState: function() {
    return {
      rndX: 0,
      rndY: 0,
      x: 0,
      y: 0,
      keys: {
        rgba1: create2DArray(columns),
        rgba2: create2DArray(columns),
        rgba3: create2DArray(columns),
        cells: create2DArray(columns)
      },
      style: {}
    }
  },
  render: function() {
    this.state.x = this.props.x;
    this.state.y = this.props.y;
    this.state.rndX = this.getRandomNumber(this.columns);
    this.state.rndY = this.getRandomNumber(this.rows);
    var x = this.state.x,
        y = this.state.y,
        rndX = this.state.rndX,
        rndY = this.state.rndY;

    var areKeys = Object.keys(this.state.keys).length > 0;
    if (areKeys) {
      var values = this.state.objects;
      this.state.keys.cells[rndX][rndY] = this.props.objects.rndNum;  
      this.state.keys.rgba1[rndX][rndY] = this.props.objects.rgba1Val;
      this.state.keys.rgba2[rndX][rndY] = this.props.objects.rgba2Val;
      this.state.keys.rgba3[rndX][rndY] = this.props.objects.rgba3Val; 
    
      this.state.style = {
        backgroundColor: "rgba(" + this.state.keys.rgba1[x][y] + "," + this.state.keys.rgba2[x][y] + "," + this.state.keys.rgba3[x][y] + "," + 1 + ")"
      };
    } else {
      this.state.style = {
        color: "white"
      }
    }
      
    return (
    <div className="col-md-1 thumbnail inline-center" style={this.state.style} >
      <div>
        {areKeys ? this.state.keys.cells[x][y] : ''}</div>
      </div>
    )
  }
});

var Column = React.createClass({
  mixins: [ReactAddons.addons.PureRenderMixin],
  render: function() {
    var column = [];
    for (var i = 0; i < this.props.columns; i++) {
      column.push(<Cell x={i} y={this.props.id} key={i} objects={this.props.objects} />);
    }
    return (<div className="row">{column}</div>)
  }
});

var Row = React.createClass({
  mixins: [ReactAddons.addons.PureRenderMixin],
  render: function() {
    var row = [];
    for (var i = 0; i < this.props.rows; i++) {
      row.push(<Column id={i} key={i} columns={this.props.columns} objects={this.props.objects} />);
    }
    return (<div>{row}</div>)
  }
});

var Grid = React.createClass({
  mixins: [ReactAddons.addons.PureRenderMixin],
  render: function() {
    return (<div><Row rows={this.props.rows} columns={this.props.columns} objects={this.props.objects} /></div>)
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
      objects: {}
    }
  },
  randomizeCells: function() {
    this.setState({
      isInterval: true,
      objects: {
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
        <div className="grid"><Grid columns={this.columns} rows={this.rows} objects={this.state.objects} /></div>
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
        <div className="small-grid"><Grid columns={this.columns} rows={this.rows} objects={this.state.objects} /></div>
        <div className="small-grid"><Grid columns={this.columns} rows={this.rows} objects={this.state.objects} /></div>
        <div className="small-grid"><Grid columns={this.columns} rows={this.rows} objects={this.state.objects} /></div>
        <div className="small-grid"><Grid columns={this.columns} rows={this.rows} objects={this.state.objects} /></div>
        <div className="grid"><Grid columns={this.columns} rows={this.rows} objects={this.state.objects} /></div>
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


