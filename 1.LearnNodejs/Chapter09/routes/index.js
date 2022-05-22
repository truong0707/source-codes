var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  const studentListTitle = 'DANH SÁCH SV'
  const studentList = [
    {
      name: 'Lực mất ngủ',
      gender: 'nam'
    }, {
      name: 'Hồ Trọng Tài',
      gender: 'nam'
    }, {
      name: 'Ung Nho Hoàng Nhọt',
      gender: 'nam'
    }]
  res.render('index', { pageTitle: studentListTitle, students: studentList })
})

module.exports = router