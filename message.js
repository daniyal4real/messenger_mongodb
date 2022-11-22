const express = require('express')
const router = express.Router()


const MessageController = require('./messageController')


router.get('/message', MessageController.getMessages)
router.get('/users', MessageController.getUsers)
router.post('/show', MessageController.show)
router.post('/message', MessageController.sendMessage)
router.post('/update', MessageController.update)
router.post('/message/delete', MessageController.destroy)
router.get('/:messageID', MessageController.show)
router.get('/user/:userID', MessageController.showByUserId)
router.get('/message/:sender/:receiver', MessageController.getMessagesByChat)


module.exports = router
