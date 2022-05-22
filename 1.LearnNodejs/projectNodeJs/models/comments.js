var mongoose = require('mongoose');

var schemaComments = new mongoose.Schema({
    id: String,
    nameUser: String,
    avatar: String,
    contentComment: String
});

module.exports = mongoose.model("Comments", schemaComments)