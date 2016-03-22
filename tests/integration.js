var config = require('../config/config');

describe.only('Suite: Integration', function() {
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
  it.only('should not have "Read more"', function (client) {
    client
      .url(['http:/', config.urls.base, 'category', 'sports'].join('/'))
      .waitForElementPresent('body', 5000)
      .getText('.more-link span', (res)=>{
        client.assert.ok(res && res.value);
        client.assert.notEqual(res.value, 'Read more');
        client.assert.equal(res.value, 'पुरा पढ्नुहोस');
      })
  });

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
      client.assert.ok(!result.length);
    });
  });
  /* end: tests */
});
