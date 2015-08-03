var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// app.use(function (req, res, next) {
//   console.log('Request at ', new Date().toString());
//   next();
// }

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test', function (req, res) {
  res.send('Test1!');
});

app.post('/', function (req, res) {
  res.send('Hello World!');
});

app.get(/hello/, function (req, res) {
  res.send('Hello!');
});

app.get('/awesomethings', function (req, res) {

  var awesomeThings = ['Pizza', 'Bacon', 'Pluto'];
  res.render('templates/world',
    { title: 'Its A Title',
    welcome: 'Welcome to my app',
    awesomeThings: awesomeThings});
});



app.get('/json', function (req, res) {
  res.send({Hello: 'World!'});
});

app.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});

app.use(function (req, res) {
  res.status(403);
  res.send('Unauthorized!');
});

app.use(function (err, req, res, next) {
  console.log('ERROR!', err.stack);
  res.status(500).send('My Bad');
});

app.use(function (req, res, next) {
  console.log('Request at ', new Date().toString());
  res.status(500).send('My Bad');
  next();
});








var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
