var mongoose = require('mongoose');

var schemaProduct = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    classify: String,
    quantity: Number,
});

module.exports = mongoose.model("Product", schemaProduct)