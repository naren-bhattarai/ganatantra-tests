module.exports = {
  'KasleJityo.com: CDN' : function (client) {
    client
      .url('https://www.kaslejityo.com')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#epl-fixture', 5000)
      .assert.containsText('#epl-fixture > h4', 'आउने खेलहरु - इङलिस प्रिमियर लिग')
      .assert.containsText('#epl-table > h4', 'अंक तालिका - इङलिस प्रिमियर लिग')
      .end();
  }
};
