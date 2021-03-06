var https = require('https');
module.exports = function getHTML (options, callback) {
  var body = '';
  var innerCallback = function(response) {
    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function(){
      callback(body);
    })
  }
  https.request(options, innerCallback).end();
};