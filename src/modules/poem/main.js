var Ctrl = require('./files/controller');
  
var Poem = angular.module('ngJS.poem', ['ui.router']);

Poem.config([
  '$stateProvider', function(state_provider) {
    return state_provider.state('poem', {
      url: '/poem',
      templateUrl: './modules/poem/tmpl/poem.html',
      controller: Ctrl
    });
  }
]);


Poem.controller('Ctrl', Ctrl);
