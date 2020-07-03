const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // trims/remove whitespaces
        minlength: 3 // minimum characters is 3
    }
}, {timestamps: true}) // timestamps to when it is created or modified

const User = mongoose.model("User", userSchema); // create a model

module.exports = User; //exports to be used elsewhere