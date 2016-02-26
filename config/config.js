var env           = process.env.Environment || 'dev';
var tag           = process.env.Tag || 'button';
var browser       = process.env.Browser || 'default';

module.exports = {
  env: env,
  tag: tag,
  browser: browser,
  dataDir: './data',
  timeout: {
    half: 500,
    one: 1000,
    two: 2000,
    five: 5000,
    ten: 10000
  },
  urls: require('./urls.json')[env]
};
