var controller = require('./controller');
var config = {
  key1: 'foo'
};
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function(req, res){
  controller(req, res, config);
});
app.listen(port);

console.log('app listening on port', 3000);