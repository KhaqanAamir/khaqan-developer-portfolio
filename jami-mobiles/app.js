var express = require ('express');
var app = express();

var control = require ('./controllers/control');


app.set('view engine', 'ejs');

app.use(express.static('./public'));

control(app);


app.listen (3000);
console.log('port number 3000');
