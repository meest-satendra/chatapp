var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;


var chatsHeadSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId
    },
    toUserId: {
        type: ObjectId
    },
    status: {
        type: String
    },
});

module.exports = chatsHead = mongoose.model('chatsHead', chatsHeadSchema);