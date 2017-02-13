var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML(html){
  console.log(reverseString(html));
}

function reverseString(str){
  return str.split('').reverse().join('');
}

getHTML(requestOptions, printHTML);


