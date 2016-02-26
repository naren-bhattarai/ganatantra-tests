var config = require('../../config/config');
var util = require('util');

var actions = {
  waitForPageToLoad: function() {
    return this.waitForElementVisible('body', config.timeout.five);
  }
};

module.exports = {
  url: function(){
    var url = util.format('http://%s/', config.urls.base);
    return url;
  },
  commands: [actions],
  elements: {
    container: { selector: '#container' }
  }
};
