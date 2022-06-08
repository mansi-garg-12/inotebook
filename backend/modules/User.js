const mongoose = require('mongoose'); //connect to mongoose
const { Schema } = mongoose;  //schema insertion

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  //export model to user 
const User = mongoose.model('user', UserSchema);
module.exports = User;