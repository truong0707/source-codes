var express = require('express');
var router = express.Router();
const usersController = require('../controller/users.controller');

/* GET users listing. */
router.get('/login', usersController.userLogin);
router.post('/login', usersController.postUserLogin);
router.post('/signup', usersController.userRegister);

router.get('/logout', usersController.logout);
module.exports = router;
  