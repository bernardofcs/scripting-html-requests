var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML(options, callback){
var body = '';

  var innerCallback = function(response) {

    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function(){
      callback(body);
    })
  }

  https.request(requestOptions, innerCallback).end();
}

function printHTML(html){
  console.log(html);
}

getHTML(requestOptions, printHTML);
