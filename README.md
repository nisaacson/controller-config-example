Example of passing a configuration object to an Express controller

## Controller
```javascript
// controller.js file
module.exports = function(req, res, config) {
  console.log('config parameter passed to controller', config);
  res.end('config passed')
}
```
## App

```javascript
// index.js file with the express app
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
```

## Usage
`node index.js`
`curl localhost:3000`
