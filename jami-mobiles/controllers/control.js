var bodyparser = require('body-parser');
var url = bodyparser.urlencoded({extended: false});
var email;
var data = [{item: 'get milk'},{item: 'walk dog'},
{item: 'kick some coding ass'}, {item: 'invest'}, {item: 'hehe'}, {item: 'hehe'}, {item: 'hehe'}];
var eat = [{os: 'hello', ui: 'hehe', weight: '80'}];


module.exports = function(app){
  app.get('/home', function(req, res){
  res.render('home', {todo: data});

  });

  app.post('/home/:email', url ,  function(req, res){
  email = req.params.email;

console.log(email);
res.send({redirect: '/product'});
});

app.get ('/product', url, function(req, res){
if (email === "iphonex"){
  res.render ('product', {todo: eat});
}



});

}
