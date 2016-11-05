const request = require('request');

const URL = "http://icanhazip.com";

function printIPAddress(options = {}) {
  options.url = URL;
  request(options, (err, res, body) => {
    console.log(err || body.trim());
  });
}

module.exports = printIPAddress;
