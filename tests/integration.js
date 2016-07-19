var config = require('../config/config');

describe.skip('Suite: Integration', function() {
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
  it('should not have ० on commodity field', function (client) {
    client
      .url(['http', config.urls.base].join('://'))
      .moveToElement('#commodity', 100, 100)
      .waitForElementVisible('#commodity tbody tr:nth-child(1) > td:nth-child(2)', 10000)
      .getText('#commodity tbody', (res)=>{
        console.log(res.value);
        client.assert.ok(res && res.value);
        client.assert.notEqual(res.value, '०');
      })
  });

  it('should not have console error', function (client) {
    client
    .url(['http', config.urls.base].join('://'))
    .getLog('browser', function(result) {
      console.log('result: ', result);
    });
  });

  it('share twitter: refusetowin', function(client){
    client
      .url('http://www.refusetowin.com')
      .waitForElementPresent('body', 5000)
      .click('.st-twitter-counter')
      .pause(500);
  })
  /* end: tests */
});
