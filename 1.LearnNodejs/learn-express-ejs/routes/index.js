var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const tenSinhVien = 'Thanh Trường';
  const sinhViens = [' Nguyen Van A', 'Nguyen Van B', 'Nguyễn Van C', 'Nguyễn Văn D'];
  res.render('index', { tenSinhVien: tenSinhVien, array: sinhViens });
});

module.exports = router;
