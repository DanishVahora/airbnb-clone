const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    username: { type: String, unique: true, required: true } // Add username field
});


const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
