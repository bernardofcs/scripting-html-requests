var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var callback = function(response) {
    response.on('data', function(chunk) {
      console.log(chunk.toString());
    });
  }

  https.request(requestOptions, callback).end();

}

getAndPrintHTMLChunks();
