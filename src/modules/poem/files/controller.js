'use strict';

var Ctrl = function(scope, translate, log) {
	scope.setLang = function(langKey) {
	  translate.use(langKey);
	  log.debug("Language key: " + langKey);
	};
};

Ctrl.$inject = ["$scope", "$translate", "$log"];

module.exports = Ctrl;