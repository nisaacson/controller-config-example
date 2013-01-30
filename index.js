var controller = require('./controller');
var config = {
  key1: 'foo'
};
var express = require('express');
var app = express();

app.get('/', function(req, res){
  controller(req, res, config);
});
app.listen(3000);
