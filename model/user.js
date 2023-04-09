const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    emial: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
},{
    timestamps: true //create 2 more fies createdAt and updatedAt
});

const User = mongoose.model('User', userSchema);
module.exports = User;