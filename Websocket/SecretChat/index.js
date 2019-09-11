var express = require('express');
var io = require('socket.io')(http);

//App setup
var app = express();
var server = app.listen(3000, function(){
  console.log('listening to requests on port 3000');
});


// static files
app.use(express.static('public'));

//Socket setup

//var io = socket(server);
io.on('connection',function(){
  console.log('made socket connection')
});
