var mongoose = require('mongoose');

var schemaListSongAudio = new mongoose.Schema({
    nameBook: String,
    author: String,
    image: String,
    path: String,

});

module.exports = mongoose.model("ListSongAudio", schemaListSongAudio)