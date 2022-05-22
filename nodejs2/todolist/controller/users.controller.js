const bcrybt = require('bcrypt');
const User = require('../models/user');

const userLogin = (req, res) => {

}

const postUserLogin = (req, res) => {
    User.findOne({ email: req.body.email }, function (err, response) {
        if (response) {
            /*  */
            const checkPassword = bcrybt.compareSync(req.body.password, response.password);
            if (checkPassword) {
                res.redirect('/');
            } else {
                res.render('users/login');
            }
        } else {
            res.render("users/login");
        }
    })
}

const userRegister = (req, res) => {
    var data = new User();
    data.email = req.body.email;
    data.password = bcrybt.hashSync(req.body.password, salt);
    data.save(function (err) {
        res.redirect('/')
    })
}

const logout = () => {

}

module.exports = {
    userLogin,
    postUserLogin,
    userRegister,
    logout
};