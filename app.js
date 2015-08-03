var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.use(function(req, res, next) {
  console.log('Request at' + new Date.toISOString());
  next();
});

app.use(express.static('public'));

app.use(function(req, res) {
  res.status(403);
  res.send('Unauthorized!');
});
      //route     cb
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
  res.send('Hello!');
});

app.get('/world', function (req, res) {
  res.render('templates/world');
});

app.get('/json', function(req, res) {
  res.send({an: 'object'})
});

app.get('/thisshoulderror', function(req, res) {
  res.send(badVariable)
});


app.use(function(err, req, res, next) {
  //pass 4 arguments to create an error handling middleware
  console.log('errror', err.stack);
  res.status(500).send('My bad');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});