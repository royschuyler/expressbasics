var express = require('express');
var lessCSS = require('less-middleware')


var routes = require('./routes/index')
var pizza = require('./routes/pizza')

var app = express();

app.set('view engine', 'ejs');
app.set('case sensitive routing', true);

// app.local.title = 'My Awesome App';

app.use(lessCSS('public'))

app.use(express.static('public'));

app.use('/', routes);
app.use('/pizza', pizza);


app.use(function (req, res) {
  res.status(403);
  res.send('Unauthorized!');
});

app.use(function (err, req, res, next) {
  console.log('ERROR!', err.stack);
  res.status(500).send('My Bad');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
