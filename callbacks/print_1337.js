var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printHTML(html){
  console.log(leet(html));
}

function leet(str) {
  return str.replace(/[a-z]/g,function f(a){
    return "4BCD3F6H1JKLMN0PQR57"[parseInt(a, 36)-10] || a.replace(/[a-t]/gi,f)
  });
}

getHTML(requestOptions, printHTML);


