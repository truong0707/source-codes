var mongoose = require('mongoose');

var schemaUser = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    address: String,
    phonenumber: String,
    role: String,
});

module.exports = mongoose.model("User", schemaUser)