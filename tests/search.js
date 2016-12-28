//test
module.exports = {
  '@disabled': true,
  'KasleJityo.com: Load recent posts(s)' : function (client) {
    client
      .url('https://www.kaslejityo.com/news/2007')
      .waitForElementVisible('body', 1000)
      .url('https://www.kaslejityo.com/?s=%E0%A4%AB%E0%A5%81%E0%A4%9F%E0%A4%AC%E0%A4%B2')
      .waitForElementVisible('body', 1000)
      .end();
  }
};
