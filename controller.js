// controller.js file
module.exports = function(req, res, config) {
  console.log('config parameter passed to controller', config);
  res.end('config passed')
}
