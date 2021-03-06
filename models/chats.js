var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;


var chatsSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId
    }
});

module.exports = chats = mongoose.model('chats', chatsSchema);