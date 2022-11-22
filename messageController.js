const Message = require('./models/Message')
const User = require('./models/User')
const {response} = require("express");
const auth = require("./authController")




const getMessages = (req, res, next) => {
    Message.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'ERROR'
            })
        })
}



const getMessagesByChat = (req, res, next) => {
    Message.find({sender: req.params.sender, receiver: req.params.receiver})
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'ERROR'
            })
        })
}


const getUsers = (req, res, next) => {
    User.find({}, { name: 1, surname: 1, username: 1})
        .then(response => {
            res.json({
               response
            })
        })
        .catch(error => {
            res.json({
                message: 'ERROR'
            })
        })
}




const show = (req, res, next) => {
    let messageID = req.params.messageID
    Message.findById(messageID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'ERROR'
            })
        })
}

const showByUserId = (req, res, next) => {
    let userID = req.params.userID
    Message.findById(userID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'ERROR'
            })
        })
}


const sendMessage = (req, res, next) => {
    let message = new Message({
        content: req.body.content,
        sender: req.body.sender,
        receiver: req.body.receiver
    })
    message.save()
        .then(response => {
            res.json({
                message: 'Message was sent successfully'
            })
        })
        .catch(error => {
            res.json({
                message: 'ERROR'
            })
        })
}



const update = (req, res, next) => {
    let messageID = req.body.messageID

    let updatedData = {
        content: req.body.content,
        sender: req.body.sender,
        receiver: req.body.receiver
    }
    Message.findByIdAndUpdate(messageID, {$set: updatedData})
        .then(() => {
            res.json({
                message: "Updated successfully"
            })
        })
        .catch( error => {
            res.json({
                message: "ERROR"
            })
        })
}



const destroy = (req, res, next) => {
    let messageID = req.body.messageID
    Message.findByIdAndRemove(messageID)
        .then(() => {
            res.json({
                message: "Message deleted successfully"
            })
        })
        .catch(error => {
           req.json({
               message: "ERROR"
           })
        })

}



module.exports = {
    getMessages, getUsers, show, sendMessage, update, destroy, showByUserId, getMessagesByChat
}

