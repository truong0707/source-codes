const path = require('path');
const express = require('express');
const app = express();
const rootApp = require('app-root-path');
const { ObjectId } = require('mongodb');
var Cart = require(rootApp + "/models/cart");
var Product = require(rootApp + '/models/product');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


//
var Cart = require(rootApp +'/models/comments'); //


//
const deleteComment = (req, res) => {
    var id = ObjectId(req.params.id)
    Product.deleteOne({ _id: id }, (err) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.redirect("http://localhost:3000/comments")
        }
    })
}






const addProduct = (req, res) => {
    res.render('add');
}
const getHomepage = (req, res) => {
    Cart.find((err, dataCart) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {

            Product.find((err, data) => {
                if (err) {
                    res.json({ "kq": 0, "errMsg": err });
                } else {
                    res.render('./home/index', { products: data, carts: dataCart, page: "partials/modalEdit" });
                }


            })

        }
    })
}
const deleteProduct = (req, res) => {
    var id = ObjectId(req.params.id)
    Product.deleteOne({ _id: id }, (err) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.redirect("http://localhost:3000/admin")
        }
    })
}
const deleteCart = (req, res) => {
    var id = ObjectId(req.params.id)
    Cart.deleteOne({ _id: id }, (err) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.redirect("http://localhost:3000/cart")
        }
    })
}




const cart = (req, res) => {
    Cart.find((err, data) => {

        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            // res.render('./home/index' , {page: "/cart", carts: data });
            res.render('./partials/cart', { carts: data })
            // res.json(data)
            // , {carts: data}
        }
    })
}
const getHomepageUser = async (req, res) => {
    Cart.find((err, dataCart) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {

            Product.find((err, data) => {
                if (err) {
                    res.json({ "kq": 0, "errMsg": err });
                } else {
                    res.render('home/home', { products: data, carts: dataCart });
                }
            })

        }
    })
}




const regiter = (req, res) => {
    res.render('home/regiter')
}
const login = (req, res) => {
    console.log(req.body)
    res.render('home/login')
}

module.exports = {
    getHomepage,
    addProduct,
    deleteProduct,
    deleteCart,
    cart,
    getHomepageUser,
    regiter,
    login,
    deleteComment
}