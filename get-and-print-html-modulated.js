var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML (options) {



  var body = '';

  var callback = function(response) {

    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function(){
      console.log(body);
    })
  }

  https.request(requestOptions, callback).end();

}

getAndPrintHTML(requestOptions);
