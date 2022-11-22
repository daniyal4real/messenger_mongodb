const {Schema, model} = require('mongoose')


const User = new Schema({
    name: {type: String},
    surname: {type: String},
    contacts: {type: String},
    region: {type: String},
    university: {type: String},
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}]
})





module.exports = model('User', User)
