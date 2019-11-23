var express = require('express');

var app = express()

app.get("/",function (req, res) {
  res.write('Welcome Gspann Technologies')
  res.end();
});
const PORT = process.env.PORT || 8080;
app.listen(PORT); 
