var mongoose = require('mongoose');

var schemaTest = new mongoose.Schema( {
    name: String,
    img: String,
    price: Number
} );

module.exports = mongoose.model("Test", schemaTest)