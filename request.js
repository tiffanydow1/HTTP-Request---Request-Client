
var request = require('request');
var fs = require("fs");

request.get('https://sytantris.github.io/http-examples/future.jpg').on('error', function(err) {
  throw err;
  console.log("Downloading image ..");
})
.on('response', function(response) {
  console.log('Response Status Code: ', response.statusCode);
})
.on('response', function(response) {
  console.log('Response Status Message: ', response.statusMessage);
})
.on('content types', function(response) {
  console.log('Content Type: ', response.headers['content-type']);
})
.pipe(fs.createWriteStream('./future.jpg'));
console.log('Download complete.');