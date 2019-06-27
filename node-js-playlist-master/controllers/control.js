  var bodyparser = require('body-parser');
  var email12 = require ('./email');
var data = [{item: 'get milk'},{item: 'walk dog'},
{item: 'kick some coding ass'}];

var url = bodyparser.urlencoded({extended: false});

 module.exports = function(app){
app.get('/signup', function(req, res){
res.render('signup');


});


app.get('/home', function(req, res){
res.render('login');




});
app.get('/todo', function(req, res){
res.render('todo', {todos: data});

});

app.post('/home/:email', url ,  function(req, res){
  var email = req.params.email;

console.log(email);
if (email === "hello@gmail.com"){
  
  res.send({redirect : '/todo'});
}
if (email ==="1" ){
  res.send({redirect: '/signup'});
}


});
app.delete('/todo/:item', function(req, res){
data = data.filter(function(todo){
return todo.item.replace(/ /g, '-') !== req.params.item;



});

res.json(data);

});

}
