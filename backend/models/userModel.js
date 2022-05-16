const mongoose = require('mongoose')
const { type } = require('os')
const { string } = require('yargs')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name']
    },
    email: {
        type: String,
        required: [true, 'Please add your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add your password']
    },
    // password2: {
    //     type: String,
    //     required: [true, 'Please confirm your password']
    // },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('User', userSchema)