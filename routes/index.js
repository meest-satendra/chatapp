var express = require('express');
var router = express.Router();
const server = require('http').createServer();
const io = require('socket.io')(server);


io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3001);

module.exports = router;
