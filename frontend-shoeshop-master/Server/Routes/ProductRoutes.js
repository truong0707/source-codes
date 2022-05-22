const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../Model/ProductModel.js");

const productRoute = express.Router()


// Get All product
productRoute.get("/", asyncHandler(
    async(req, res) => {
        const products = await Product.find({});
        res.json(products);
    }
));


// Get single product
productRoute.get("/:id", asyncHandler(async(req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            throw new Error("Product not Found");
        }
    }
));

module.exports = productRoute;