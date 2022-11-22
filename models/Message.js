const mongoose = require('mongoose')
const Schema = mongoose.Schema



const messageSchema = new Schema({
    content: {
        type: String
    },
    sender: {
        type: String
    },
    receiver: {
        type: String
    }
})


const Message = mongoose.model('Message', messageSchema)
module.exports = Message