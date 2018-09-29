const requestOptions = require('./proxy_settings');

const getIP = require('./ip');

getIP().then(data => {
  console.log("Naked address: " + data);
});

getIP(requestOptions).then(data => {
  console.log("Proxy address: " + data);
});
