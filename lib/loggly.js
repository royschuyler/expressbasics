var loggly = require('loggly');
var LOGGLY_TOKEN = require('./secrets')


function logger (tag) {
  return loggly.createClient({
      // token: process.env.LOGGLY_TOKEN,
      token: "9b97cb79-2078-4c79-9cee-af3b8a70e79e",
      subdomain: "royschuyler",
      tags: ["NodeJS", tag],
      json:true
  });
}

module.exports = logger;
