
var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()

app.get('/', function(req, res) {
  res.send('Call for Code Bootcamp - Cloud Native Lab Application')
})
app.listen(8080, function() {
  console.log('Lab application is listening on port 8080.')
})
