var mongo = require ('mongodb').MongoClient,
client = require ('socket.io').listen (8080).sockets;

mongo.connect ('mongodb://127.0.0.1/chat', function (err, db){
if (err) throw err;



client.on ('connection', function(socket){
  var col = db.collection('message');
var sendStatus = function(s){
socket.emit('status', s);
}
//emit all messages
col.find().limit(100).sort({_id: 1}).toArray(function(err, res){
if (err) throw err;
socket.emit ('output', res);

});



socket.on ('input', function(data){
var name = data.name;
var message = data.message;
var whiteSpacePattern = /^\s*$/;

if (whiteSpacePattern.test(name) || whiteSpacePattern.test(message)){
sendStatus({

  message:'Name and Message are required',
clear: true
}


);

}
else {
col.insert({name:name , message:message}, function(){
  //emit latest messages
  console.log('done')
  client.emit ('output', [data]);
sendStatus ({
message : "Message Sent",
clear : true
})
})

}




});




});



});
