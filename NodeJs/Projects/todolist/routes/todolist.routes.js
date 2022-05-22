var express = require('express');
var router = express.Router();

router.get('/add', (req, res) => {
    res.render('todolist/add'); // render nội dung file add
});

// edit
router.get('/edit/cc', (req, res) => {
    res.render('todolist/edit');
})

module.exports = router; 