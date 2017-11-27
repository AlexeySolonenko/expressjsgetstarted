var express = require('express');
var app = express();
var port = 8000;



app.listen(port, function(err, res){
  if(err){
    console.oog('server error');
  } else {
    console.log('server started');
  };
});