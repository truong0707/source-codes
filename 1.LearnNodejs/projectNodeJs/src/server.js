const express = require('express');
const app = express();
const { ObjectId } = require('mongodb');
import configViewEngine from './configs/viewEngine';
import connectMgDB from './configs/mongooseDB';
import initAPIRoute from './router/web';
import { render } from 'ejs';
// require("dotenv").config();
// call localhost 3000 ================
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is running...')
});

// view engine ======================================
configViewEngine(app)

//connect mongodb Database ==========================
connectMgDB()

//router
initAPIRoute(app);

//multer upload file img =============================
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log(file);
        if (file.mimetype == "image/bmp" || file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true)
        } else {
            return cb(new Error('Only image are allowed!'))
        }
    }
}).single("img");


//models get from /models/....... =======================
var Product = require('../models/product')
var Cart = require('../models/cart')
var User = require('../models/user')
var ListSongAudio = require('../models/ListSongAudio')
var Comments = require('../models/comments')
//POST database==========================================

//Test POST data on mongodb
app.post('/addThanhCong', (req, res) => {
    //upload file
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.json({ "kq": 0, "errMsg": "A Multer error occurred when uploading." });
        } else if (err) {
            res.json({ "kq": 0, "errMsg": "An unknown error occurred when uploading." + err });
        } else {
            //save mongodb
            //res.send(req.file.filename)
            //get data from UI===========
            var newData = new Test({
                //get name from input on UI
                name: req.body.txtName,
                img: req.file.filename,
                price: req.body.price
            });
            //begin save mongodb==========
            newData.save((err) => {
                if (err) {
                    res.json({ "kq": 0, "errMsg": err });
                } else {
                    res.json({ "kq": 1 });
                }
            })


        }
    });
});

// POST data from ./home/index to mongodb
app.post('/addProduct', (req, res) => {
    //upload file
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.json({ "kq": 0, "errMsg": "A Multer error occurred when uploading." });
        } else if (err) {
            res.json({ "kq": 0, "errMsg": "An unknown error occurred when uploading." + err });
        } else {
            //save mongodb
            //res.send(req.file.filename)
            //get data from UI===========
            var newProduct = new Product({
                //get name from input on UI
                name: req.body.txtName,
                price: req.body.price,
                img: req.file.filename,
                classify: req.body.classify,
                quantity: req.body.quantity,
            });
            //begin save mongodb==========
            newProduct.save((err) => {
                if (err) {
                    res.json({ "kq": 0, "errMsg": err });
                } else {
                    res.redirect('http://localhost:3000/admin');
                }
            })


        }
    });
});

//cart =>
app.post("/cart", (req, res) => {
    var newCart = new Cart({
        //get name from input on UI
        name: req.body.cartName,
        price: req.body.cartPrice,
        img: req.body.cartImg,
        classify: req.body.cartClassify,
        quantity: req.body.cartQuantity
    });
    //begin save mongodb==========
    newCart.save((err) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.redirect("back")
        }
    })
})


app.post("/create-user", (req, res) => {
    var newUser = new User({
        //get name from input on UI

        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        address: req.body.address,
        phonenumber: req.body.phonenumber,
        role: req.body.role
    });
    //begin save mongodb==========
    newUser.save((err) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(newUser)
        }
    })
})
app.get('/', (req, res) => {
    res.render('home/login')
})
app.post('/findEmail', (req, res) => {
    const mail = req.body.email
    User.find({ email: mail }, function (err, data) {
        if (data) {
            data.forEach(function (user) {
                if (!req.body.email && !req.body.password) {
                    console.log('chua nhap mk va email')
                    res.redirect('/')
                } else {
                    if (!req.body.password) {
                        console.log('chua nhap mk')
                    } else {
                        if (req.body.password === user.password) {
                            if (user.role === '1') {
                                res.redirect('http://localhost:3000/admin')
                            } else {
                                res.redirect('http://localhost:3000/home')
                            }
                        } else {
                            console.log('mk sai')
                        }

                    }

                }

            })
        } else {
            res.json({ "kq": 0, "errMsg": err })
        }
    })
})
app.get('/playmusic', (req, res) => {
    res.render('home/playmusic')
})
app.get('/new', (req, res) => {
    res.render('home/new')
})
app.post('/listSongAudio', (req, res) => {
    var newListSongAudio = new ListSongAudio({
        //get name from input on UI
        nameBook: req.body.nameBook,
        author: req.body.author,
        image: req.body.image,
        path: req.body.path,

    });
    //begin save mongodb==========
    newListSongAudio.save((err) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(newListSongAudio)
        }
    })

})
app.get('/listsong', (req, res) => {
    ListSongAudio.find((err, data) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.status(200).json(data);
        }
    })
})

app.post('/comments', (req, res) => {
    var newComments = new Comments({
        //get name from input on UI
        id: req.body.id,
        nameUser: req.body.nameUser,
        avatar: req.body.avatar,
        contentComment: req.body.contentComment,

    });
    //begin save mongodb==========
    newComments.save((err, data) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.status(200).json({
                message: 'oke'
            })
        }
    })
})
app.get('/comments', (req, res) => {
    Comments.find((err, data) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.status(200).json(data);
        }
    })
})




app.get('/edit/:id', (req, res) => {
    var id = ObjectId(req.params.id)
    Product.findOne({ _id: id }, (err, product) => {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.render('./partials/modalEdit', { product })
        }
    })

})

app.post('/edit', (req, res) => {
    upload(req, res, function (err) {
        console.log(req.file)
        // nếu không có file hình
        if (!req.file) {
            const ID = (req.body.id).trim();
            const id = ObjectId(ID)
            Product.updateOne({ _id: id }, {
                name: req.body.txtName,
                price: req.body.price,
                classify: req.body.classify,
                quantity: req.body.quantity,
            }, (err) => {
                if (err) {
                    res.json({ "kq": 0, "errMsg": err });
                } else {
                    res.redirect("http://localhost:3000/admin")
                }
            })
        } else {
            //nếu có file hình
            if (err instanceof multer.MulterError) {
                res.json({ "kq": 0, "errMsg": "A Multer error occurred when uploading." });
            } else if (err) {
                res.json({ "kq": 0, "errMsg": "An unknown error occurred when uploading." + err });
            } else {
                const ID = (req.body.id).trim();
                const id = ObjectId(ID)
                Product.updateOne({ _id: id }, {
                    name: req.body.txtName,
                    price: req.body.price,
                    img: req.file.filename,
                    classify: req.body.classify,
                    quantity: req.body.quantity,
                }, (err) => {
                    if (err) {
                        res.json({ "kq": 0, "errMsg": err });
                    } else {
                        res.redirect("http://localhost:3000/admin")
                    }
                })
            }
        }


    });
})
app.get('/tintuc1', (req, res) => {
    return res.render('home/subone')
})
app.get('/tintuc2', (req, res) => {
    return res.render('home/subtwo')
})


