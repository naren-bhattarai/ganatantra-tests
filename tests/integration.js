describe('Suite: Integration', function() {
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
  it('should not have "Read more"', function (client) {
    client
      .url('http://www.ganatantra.com/category/featured')
      .waitForElementPresent('body', 5000)
      .getText('.more-link span', (res)=>{
        client.assert.ok(res && res.value);
        client.assert.notEqual(res.value, 'Read more');
        client.assert.equal(res.value, 'पुरा पढ्नुहोस');
      })
  });

  it('should not have ० on commodity field', function (client) {
    client
      .url('http://www.ganatantra.com')
      .waitForElementPresent('body', 5000)
      .getText('#commodity tbody tr:nth-child(1) > td:nth-child(2)', (res)=>{
        client.assert.ok(res && res.value);
        client.assert.notEqual(res.value, '०');
      })
  });

  it('should not have console error', function (client) {
    client
    .url('http://www.ganatantra.com')
    .getLog('browser', function(result) {
      client.assert.ok(!result.length);
    });
  });
  /* end: tests */
});
