var http = require('http');

http.createServer(function (req, res) {
  res.write('Welcome Gspann Technologies');
  res.end(); 
}).listen(3000); 
