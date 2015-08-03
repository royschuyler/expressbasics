var express = require('express');
var router = express.Router();




router.get('/', function (req, res) {
  res.send('Hello World!');
});



router.get('/test', function (req, res) {
  res.send('Test1!');
});

router.get(/hello/, function (req, res) {
  res.send('Hello!');
});

router.get('/awesomethings', function (req, res) {
  var awesomeThings = ['Pizza', 'Bacon', 'Pluto'];
  res.render('templates/world',
    { title: 'Its A Title',
    welcome: 'Welcome to my app',
    awesomeThings: awesomeThings});
});

router.get('/json', function (req, res) {
  res.send({Hello: 'World!'});
});

router.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});

module.exports = router;
