const res = require("express/lib/response");

const Course = require('../models/Course')

const { mutipleMongooseToObject } = require('../../util/mongoose.js');


class SiteController {

    // [GET] 
    home(req, res, next) {
        Course.find({})
        .then(courses => {
            // courses: courses
            res.render('home', {
                courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');

    }
}

module.exports = new SiteController;
