var mongoose = require('mongoose');

var schemaCart = new mongoose.Schema({
    name: String,
    price: String,
    img: String,
    classify: String,
});

module.exports = mongoose.model("Cart", schemaCart)