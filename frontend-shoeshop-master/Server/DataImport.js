const express = require("express");
const User = require("./Model/UserModel");
const users = require("./data/users.js");
const Product = require("./Model/ProductModel.js");
const products = require("./data/Products.js");
const asyncHandler = require("express-async-handler");


const ImportData = express.Router()

ImportData.post("/user", asyncHandler(
    async (req, res) => {
        await User.remove({})
        const importUser = await User.insertMany(users)
        res.send({ importUser });
    }
))

ImportData.post("/products", asyncHandler(
    async (req, res) => {
        await Product.remove({})
        const importProduct = await Product.insertMany(products)
        res.send({ importProduct });
    }
))

module.exports = ImportData;