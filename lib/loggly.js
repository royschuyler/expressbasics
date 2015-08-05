var loggly = require('loggly');
var LOGGLY_TOKEN = require('./secrets')



function logger (tag) {
  return loggly.createClient({
      token: LOGGLY_TOKEN,
      subdomain: "royschuyler",
      tags: ["NodeJS", tag],
      json:true
  });
}

module.exports = logger;
