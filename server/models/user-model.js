const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   
    isAdmin:{
        type: Boolean,
        default: false
    }
})

const User = new mongoose.model('User', UserSchema)
module.exports = User;