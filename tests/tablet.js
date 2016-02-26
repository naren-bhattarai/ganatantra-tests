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
  it('/GET homepage (tablet)', function (client) {
    var homepage = new client.page.home();
    homepage
      .navigate()
      .waitForPageToLoad();
    client.resizeWindow(1024, 768);
    client.saveScreenshot('./data/tablet.png');
  });
  /* end: tests */
});
