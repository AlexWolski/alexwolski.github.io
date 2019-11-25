const express = require('express');
const app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/view'))

app.get('/', function (request, response) {
  console.log('GET request made for the root /')
  response.status(200)
  response.sendFile('view/index.html', { root: __dirname })
})

server.listen(3000, function () {
  console.log('Server started and listening on port 3000...')
})