var mongoose = require('mongoose');

var schemaTestComments = new mongoose.Schema({
    comment: String
});

const Comment = mongoose.model('TestComments', schemaTestComments);
module.exports.Comment = Comment;