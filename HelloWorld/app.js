//Including a module is easy; simply call the require()
var express = require('express');
var app = express();

//creating home route
app.get('/' , function(req,res){
  res.send("Hello world");
})

//create server
app.listen(3000, function(){
  console.log('Listenning to port 3000');
})
