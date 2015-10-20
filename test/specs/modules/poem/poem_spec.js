/* @shojib */

define(["angular", "ngMocks", "uiRouter", "Poem", "ngTranslate"], 

	function(angular, mocks, rotuer, poem, translate) {
			
		'use strict';

		describe('Poem Module Test:', function() {

			describe('Controller:', function() {

				var scope, translate, translateProvider;

				beforeEach(function() {
					module('ui.router');
					module('pascalprecht.translate');
					module('ngGo.poem');

					inject(function($rootScope, $controller, $translate) {
		        scope = $rootScope.$new();

		        translate= $translate;
		        $controller('controller', {$scope: scope, $translate: translate});
		    	});
				});
        
        it('Should have a Poem module defined', function() {
          expect('ngGo.poem').toBeDefined();
        });

			});

		});
		
	}
);