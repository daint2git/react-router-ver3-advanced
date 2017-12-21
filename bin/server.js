const path = require('path');
const express = require('express');
const app = express();
const PORT = 1234;

const server = app.listen(PORT, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port);
});

app.use(express.static('public/build'));
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/build/index.html'));
})