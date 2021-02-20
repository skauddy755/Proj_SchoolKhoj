const mongoose = require("mongoose");

// Create Schema
const UserSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true
    },
    usertype: {
        type: String, // 'ADMIN', 'SCHOOL', 'STUDENT'
        required: true
    }
});

module.exports = User = mongoose.model("user", UserSchema);