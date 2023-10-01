// import mongoose mosule
const mongoose = require("mongoose");
//import mongoose unique validator module
const uniqueValidator = require('mongoose-unique-validator');
// create  User Schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    pwd: String,
    role: String,
    avatar: String,

});
userSchema.plugin(uniqueValidator)
// affect User Schema to Mode Name User
const user = mongoose.model("User", userSchema);
// Make match exportable
module.exports = user;