var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/test', function (req, res) {
  res.send('Hello World!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('Hello World!');
});

app.get(/hello/, function (req, res) {
  res.send('Hello!');
});

app.get('/world', function (req, res) {
  res.send('World!');
});

app.use(express.static('public'));



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
