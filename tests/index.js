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
  it('Launch homepage', function (client) {
    var homepage = new client.page.home();
    homepage
      .navigate()
      .waitForPageToLoad();
    client.maximizeWindow();
    client.saveScreenshot('./data/a.png');
  });
  /* end: tests */
});
