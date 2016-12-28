module.exports = {
  '@disabled': false,
  'KasleJityo.com: Category Page' : function (client) {
    client
      .url('https://www.kaslejityo.com/category/football')
      .waitForElementVisible('body', 1000)
      .assert.containsText("body", "फुटबल")
      .end();
  }
};
