module.exports = {
  'KasleJityo.com: Homepage' : function (client) {
    client
      .url('https://www.kaslejityo.com')
      .waitForElementVisible('body', 1000)
      .assert.title('KasleJityo.com | Ultimate Destination for all sports news and happenings')
      .end();
  }
};
