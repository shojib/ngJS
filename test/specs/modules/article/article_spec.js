/* @shojib */

define(["angular", "ngMocks", "ngAnimate", "ngResource", "uiRouter", "Article"], 

  function(angular, mocks, animate, resource, router, article) {
    
    'use strict';

    describe('Article Module Test:', function() {

      describe('Controller:', function() {

        var scope;

        beforeEach(function() {
          module('ngResource');
          module('ui.router');
          module('ngAnimate');
          module('ngGo.article');

          inject(function($rootScope, $controller, $resource) {
            scope = $rootScope.$new();
            $controller('controller', {$scope: scope});
          });
        });
        
        it('Should have an Article module defined', function() {
          expect('ngGo.article').toBeDefined();
        });
        
        it('Should be equal to "education"', function() {
          expect(scope.search_query).toBe('Technology');
        });

      });

    });

  }
);