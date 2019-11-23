var express = require('express');

var app = express()

app.get("/",function (req, res) {
  res.write('Welcome Gspann Technologies')
  res.end();
});
app.listen(3000); 
