'use strict';  


  	var Service = function() {
  		this.rows = []; 
        this.columns = []; 
        this.cell = [];
        this.tabs = '';
        this.startInterval = '';
        this.rnd = 0;
        this.rgba1 = 0;
        this.rgba2 = 0;
        this.rgba3 = 0;
  	};
  	Service.prototype = {
  		init: function() {
		    this.cell = this.create2DArray(31);
		    this.rgba1 = this.create2DArray(255);
		    this.rgba2 = this.create2DArray(255);
		    this.rgba3 = this.create2DArray(255);
  		},
  		getRandomNumber: function(val) {
	      return Math.floor((Math.random() * val) + 0);
	    },
	    populateArray: function(num) {
	    	var obj = []; 
	    	for (var i = 0; i < num; i++) {
		      obj.push(i);
		    }
		    return obj;
	    },    
		create2DArray: function(rows) {
	      var arr = [];
	      for (var i=0; i <rows; i++) {
	         arr[i] = [];
	      }
	      return arr;
	    },
	    getCell: function() {
	    	return this.cell;
	    },
	    getRgba1: function() {
	    	return this.rgba1;
	    },
	    getRgba2: function() {
	    	return this.rgba2;
	    },
	    getRgba3: function() {
	    	return this.rgba3;
	    },
	    setIsTimerOn: function(bool) {
	    	this.isTimerOn = bool;
	    },
	    getIsTimerOn: function() {
	    	return this.isTimerOn;
	    }
  	};

	module.exports = Service;