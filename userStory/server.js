var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');
mongoose.connect(config.database, function(err){
if (err){
console.log(err);

}
else{
	console.log('connected');
}



});

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json);
app.use(morgan('dev'));
var api = require('./app/routes/api')(app , express);
app.use('./api', api);


app.get('*',function(req, res){
res.sendFile(__dirname + '/public/views/index.html');
x	


});


app.listen(3000, function(err){
if (err){
console.log(err);

}
else {
console.log('listening on 3000');

}
});