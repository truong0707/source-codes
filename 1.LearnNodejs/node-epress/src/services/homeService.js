const path = require('path');
const express = require('express');
const app = express();
const rootApp = require('app-root-path');
const { ObjectId } = require('mongodb');
var Cart = require(rootApp + "/models/cart");
var Product = require(rootApp + '/models/product');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const createUserService = (user) => {

}

module.exports = {
    createUserService
}