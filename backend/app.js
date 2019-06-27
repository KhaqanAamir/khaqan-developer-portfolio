var express = require ('express');
var app = express();

var control = require ('./controllers/control');

control(app);


app.listen (1337);
console.log('port number 1337');
