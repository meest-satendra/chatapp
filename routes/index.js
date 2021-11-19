var express = require('express');
var router = express.Router();
const server = require('http').createServer();
const io = require('socket.io')(server);
const users = require('../models/users');
const chatheads = require('../models/chatheads');


io.on('connection', (socket) => {
  /**
   * @getChatHead
   */
  socket.on('getUserData', async (data) => {
    const user = await users.find().select('-password');
    socket.emit('returndata', user)
  });

  /**
   * @CreateChatHead
   */
  socket.on('createChatHead', async (data) => {
    let chatHeadData = await chatheads.find({
      $and: [{
        $ne: { 'userId': data.userId._id, 'toUserId': data.userId._id },
        $or: [
          { 'userId': data.userId._id, 'toUserId': data.toUserId },
          { 'toUserId': data.userId, 'userId': data.toUserId }
        ]
      }]
    });
    const payload = {
      userId: data.userId._id,
      toUserId: data.toUserId,
      username: data.toUserId.username,
      status: '👍'
    }
    if (!chatHeadData.length) {
      try {
        const res = await chatheads.create(payload)
        socket.emit('returncreateChatHead', res)
      } catch (error) {
        console.log(error);
      }
    } else {
      let chatHeadData = await chatheads.find({userId: data.userId._id});
      socket.emit('returncreateChatHead', chatHeadData)
    }
  })
  /**@GetChatHead */
  socket.on('getChatHead', async (data) => {
    console.log('chatHeadData>', data);
    let chatHeadData = await chatheads.find({
      $or: [{ 'userId': data }, { 'toUserId': data }]
    });
    socket.emit('returnChatHead', chatHeadData)
  })
  socket.on('disconnect', () => { /* … */ });
});
server.listen(3001);

module.exports = router;
