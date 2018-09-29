const request = require('request');
const requestOptions = require('./proxy_settings');
const _ = require('lodash');

/**
 * @param  {string} url
 * @return {Promise} 
 */
function requestViaProxy(url) {
  var options = _.clone(requestOptions);
  options.url = url;
  return new Promise((resolve, reject) => {
    console.log('Sending request: ' + url);
    request(options, (err, res, body) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      if (res && res.statusCode === 200) {
        resolve(body);
      }
    });
  });
}

module.exports = requestViaProxy;
