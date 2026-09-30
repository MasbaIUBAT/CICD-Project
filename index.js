var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello Jenkins CI/CD Update');
  res.end();
}).listen(4000);