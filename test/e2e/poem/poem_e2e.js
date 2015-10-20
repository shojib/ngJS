/* @shojib */

describe('ngGo e2e test:', function() {

	var ptor, driver,
		url = 'http://localhost:9000/#/poem';

  beforeEach(function() {
      ptor = protractor.getInstance();
      // driver = ptor.driver;
  });

	describe('Poem Module E2E Test:', function() {

		it('Check the size of the poem in English', function() {
	        ptor.get(url);
	        // ptor.executeScript('$.fx.off = true;');
	        var btn = ptor.findElement(protractor.By.css('.btn:first-child'));
			btn.click().then(function() {
				var ele = ptor.findElement(protractor.By.css('p.ng-scope')).getInnerHtml().then(function(text) {
					var len = text.length;
					expect(len).toBe(520);
				});
			});
		}, 10000);

		it('Check the size of the poem in Bangla', function() {
	        ptor.get(url);
	        // ptor.executeScript('$.fx.off = true;');
	        var btn = ptor.findElement(protractor.By.css('.btn:last-child'));
			btn.click().then(function() {
				var ele = ptor.findElement(protractor.By.css('p.ng-scope')).getInnerHtml().then(function(text) {
					var len = text.length;
					expect(len).toBe(1852);
				});
			});
		}, 10000);

	});

});