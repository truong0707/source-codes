const path = require('path');
const express = require('express');
const app = express();
const rootApp = require('app-root-path');
const { ObjectId } = require('mongodb');
var Cart = require(rootApp + "/models/cart");
var Product = require(rootApp + '/models/product');
import userService from '../services/userService'
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


const loginPage = (req, res) => {
    console.log(req.body)
    res.render('home/register')
}

const createUser = (req, res) => {
    // await userService.createUserService(req.body.name)
    console.log(req.body)
    res.send('alo')
}

module.exports = {
    createUser,
    loginPage
}

