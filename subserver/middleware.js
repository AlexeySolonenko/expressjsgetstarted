var express = require('express');
var app = express();
var port = 8000;


// middleware
// app.use(body-parser());
// app.use(cookieParser());

function log(req, res, next){
  console.log(new Date(), req.method, req.url);
  next();
};

function hello(req, res, next){
  res.write('Hello \n'+'World');
  res.end();
  next();
}



app.get('/',log, hello);



app.listen(port, function(err, res){
  if(err){
    console.oog('server error');
  } else {
    console.log('server started');
  };
});