var categories = [
  'national',
  'sports',
  'entertainment',
  'technology',
  'world',
  'business',
  'lifestyle'
];

describe('Suite: Category pages', function() {
  /* begin: setup and teardown */
  beforeEach(function(client, done) {
    done();
  });
  afterEach(function(client, done) {
    if (client.sessionId) {
      client.end(function() {
        done();
      });
    } else {
      done();
    }
  });
  /* end: setup and teardown */

  /* begin: tests */
  categories.forEach(function(category){
    it('/GET category page (' + category + ')', function (client) {
      client
        .url('http://www.ganatantra.com/category/' + category)
        .waitForElementPresent('body', 5000)
        .waitForElementPresent('#page', 5000)
        .resizeWindow(1920, 1200)
        .saveScreenshot('./data/' + category + '.png');
    });
  })
  /* end: tests */
});
