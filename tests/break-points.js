var breakpoints = [
  { w: 400, h:1700 },
  { w: 1024, h:768 },
  { w: 1440, h:900 },
  { w: 1920, h:1200 }
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
  breakpoints.forEach(function(i){
    var resolution = i.w + 'x' + i.h;
    it('/GET homepage (' + resolution + ')', function (client) {
      client.resizeWindow(i.w, i.h);

      var homepage = new client.page.home();
      homepage
        .navigate()
        .waitForPageToLoad();
      client.saveScreenshot('./data/' + resolution + '.png');
    });
  })
  /* end: tests */
});
