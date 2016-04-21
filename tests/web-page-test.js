var config = require('../config/config');

var browsers = [
  { browser: 'chrome', location: 'Indore_IN' },
  { browser: 'chrome', location: 'Sydney2_AU' },
  { browser: 'chrome', location: 'SouthAfrica_Loc' },
  { browser: 'chrome', location: 'LosAngeles_CA' },
  { browser: 'firefox', location: 'Singapore' },
  { browser: 'firefox', location: 'London_UK' },
  { browser: 'IE11', location: 'Dulles_VA' }
];

describe('Suite: Performance tests', function() {
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
  browsers.forEach(function(browser){
    it('/GET webpage test against (' + browser + ') browser', function (client) {
      client
        .url('http://www.webpagetest.org/')
        .waitForElementPresent('body', 5000)
        .waitForElementPresent('#url', 5000)
        .resizeWindow(1920, 1200)
        .setValue('#url', ['http', config.urls.base].join('://'))
        .setValue('#location', browser.location)
        .setValue('select[name=browser]', browser.browser)
        .click('input[name=submit]')
        .pause(500)
        .waitForElementPresent('#runningHeader', 5000)
        .url(function(res){
          console.log('    ✓ [' + browser.browser + ', ' + browser.location + '] web-page-test-url: ', res.value);
        })
    });
  })
  /* end: tests */
});
