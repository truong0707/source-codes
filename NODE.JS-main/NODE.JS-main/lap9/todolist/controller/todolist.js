// import Model
const Todolist = require('../models/todolist');

// add 
exports.getTodolistCreate = (req, res, next) => {
    res.render('./todolist/add');
}
// tao moi todolist
exports.postTodolistCreate = (req, res, next) => {
    // const data = req.body;
    // Todolist.todolistAdd(data.title, data.content);
    // res.redirect('/');
    // Tạo mới todolist
    var data = new Todolist();
    data.title = req.body.title;
    data.content = req.body.content;
    data.save(function() {
        res.redirect('/')
    })
}

// xem chi tiết bài nhật ký
exports.getTodolistDetail = (req, res, next) => {
    const ID = req.params.id;
    const data = Todolist.todolistGetDetail(ID);
    res.render('./todolist/detail', {data: data});
}

// get thông tin update
exports.getTodolistUpdate = (req, res, next) => {
    const ID = req.params.id;
    data = Todolist.todolistGetDetail(ID);
    res.render('./todolist/edit', {data: data});
}
// cap nhat
exports.postTodolistUpdate = (req, res, next) => {
    const ID = req.params.id;
    const data = req.body;
    Todolist.todolistUpdate(ID, data.title, data.content);
    res.redirect('/');
}

//xoa 
exports.getTodolistDelete = (req, res, next) => {
    const ID = req.params.id;
    const data = Todolist.todolistDelete(ID);
    res.render('./todolist/delete', {data: data});
}
// xoa voi method post
exports.postTodolistDelete = (req, res, next) => {
    const ID = req.params.id;
    Todolist.todolistDelete(ID);
    res.redirect('/');
}
//danh sach todolist
exports.listTodolist = (req, res, next) => {
    const data = Todolist.todoListAll;
    res.render('index', {data: data});
}