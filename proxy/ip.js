const request = require('request');

const IP_SERVICE = "http://icanhazip.com";

function getIP(options = {}) {
  options.url = IP_SERVICE;
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) {
        console.log(err);
        reject('Error');
      }
      var ip = body.trim();
      resolve(ip);
    });
  });
}

module.exports = getIP;
