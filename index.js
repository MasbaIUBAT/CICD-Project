var http = require('http');

http.createServer(function (req, res) {
  res.write('Automatic Webhook Deployment Working');
  res.end();
}).listen(4000);