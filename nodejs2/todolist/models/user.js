var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: String,
    password: String
});
// var User = module.exports.model('User', userSchema);
module.exports = mongoose.model('User', userSchema)