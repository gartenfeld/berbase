const Agent = require('socks').Agent;
const logIP = require('./myip');

var proxy = {
  ipaddress: "127.0.0.1",
  port: 9050,
  type: 5
};

var requestOptions = {
  agentClass: Agent,
  agentOptions: {
    proxy: proxy,
    timeout: 30000,
    command: 'connect'
  }
};

logIP();
logIP(requestOptions);
