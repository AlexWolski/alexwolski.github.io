const express = require('express');
const app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/view'))

app.get('/', function (request, response) {
  response.status(200)
  response.sendFile('view/index.html', { root: __dirname })
  console.log('GET request for homepage')
})

server.listen(8080, "0.0.0.0", function () {
  console.log('Server started and listening on port 8080...')
})