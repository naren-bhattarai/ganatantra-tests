var browsers = [
  'chrome',
  'firefox'
];

describe('Suite: Homeppage', function() {
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
        .setValue('#url', 'http://www.ganatantra.com/')
        .setValue('select[name=browser]', browser)
        .click('input[name=submit]')
        .pause(500)
        .waitForElementPresent('#runningHeader', 5000)
        .url(function(res){
          console.log('[' + browser + '] web-page-test-url: ', res.value);
        })
    });
  })
  /* end: tests */
});
