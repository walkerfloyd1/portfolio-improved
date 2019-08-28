const mongoose = require('mongoose');

//TODO: Add ability to store user images to a profile

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    //image will go here
});

module.exports = User = mongoose.model('user', UserSchema);