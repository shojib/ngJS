define([], function() {
  "use strict";
  
  var Directive = function(log, stateParams, AngularService, interval) {   
  	return {
  		restrict: "E",
  		templateUrl: "./modules/speedtest/tmpl/angular_directive.html",
  		link: function(scope) {
  			var startInterval = {},
  				angularService = new AngularService();
  			angularService.init();
		  	scope.rows = angularService.populateArray(51);
		  	scope.columns = angularService.populateArray(31);
		    scope.cell = angularService.getCell();
		    scope.rgba1 = angularService.getRgba1();
		    scope.rgba2 = angularService.getRgba2();
		    scope.rgba3 = angularService.getRgba3();
		    scope.params = stateParams.version;

			var runInterval = function() {
		      return interval(function() {
		        log.debug("start timer");
		        var rndCols = angularService.getRandomNumber(31);
		        var rndRows = angularService.getRandomNumber(51);
		        scope.cell[rndCols][rndRows] =  angularService.getRandomNumber(255);
		        scope.rgba1[rndCols][rndRows] =  angularService.getRandomNumber(255);
		        scope.rgba2[rndCols][rndRows] =  angularService.getRandomNumber(255);
		        scope.rgba3[rndCols][rndRows] =  angularService.getRandomNumber(255);
		      }, 0);   
		    }; 

		    scope.startTimer = function() {
		      startInterval = runInterval();
		      angularService.setIsTimerOn(true);
		    	scope.isTimerOn = angularService.getIsTimerOn();
		    };

		    scope.stopTimer = function() {
		      interval.cancel(startInterval);
		      log.debug("stop timer");
		      angularService.setIsTimerOn(false);
	    	scope.isTimerOn = angularService.getIsTimerOn();
		    };

  		}
  	}
  };

  Directive.$inject = ["$log", "$stateParams", "AngularService", "$interval"];
  
  return Directive;

});