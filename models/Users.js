const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    lastName: String,
    firstName: String,
    email: String,
    password: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User