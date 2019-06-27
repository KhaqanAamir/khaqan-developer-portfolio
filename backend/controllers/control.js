var express = require ('express')
var sql = require('mysql');
var data = {name: 'Mohsin',email: 'bublu5a@gmail.com',
phone: '03360001453', type: 'APP', message: 'I want to create an app'};

var lead = {
email: "mohsinali@gmail.com",
phone: "0333558826"

};
var app= express();
var connection = sql.createConnection ({
//
host: 'localhost',
user: 'root',
password:'',
database:'myproj'


});

connection.connect(function (error){
if (!!error){

  console.log('err');

}
else{
console.log('conected to database.')
}



});


module.exports = function(app){
app.get('/issues', function(req, res){

  //query for the sql
  connection.query ('select * from client', function(err, result){
  if (!! err){
  console.log('err in query');

  }

  else{
  console.log(result);
res.json(result);
  }

  })


});


app.get('/issues/:id', function(req, res){

  connection.query("select * from client where id = ?", [req.params.id], function(err, result){
  if (err){
    console.log(err);

  }
  else {
    console.log(result);

  }



});



});



}
