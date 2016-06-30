var config = require('../config/config');

var categories = [
  'national',
  'sports',
  'entertainment',
  'technology',
  'world',
  'business',
  'lifestyle'
];

describe.skip('Suite: Category pages', function() {
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
  it.skip('/GET category', function(client){
    client
      .url('http://www.ganatantra.com')
      .waitForElementPresent('body', 5000)
      .execute('$("#menu-custom-menu-1 .menu-item").length', (res)=>{
        console.log(res);
      })
  })
  // categories.forEach(function(category){
  //   it('/GET category page (' + category + ')', function (client) {
  //     client
  //       .url(['http:/', config.urls.base, category, 'featured'].join('/'))
  //       .waitForElementPresent('body', 5000)
  //       .waitForElementPresent('#page', 5000)
  //       .resizeWindow(1920, 1200)
  //       .saveScreenshot('./data/' + category + '.png');
  //   });
  // })
  /* end: tests */
});
