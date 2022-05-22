// Khởi tạo mảng 
var data = [];
// Tạo biến đếm ids - hỗ trợ việc auto increase primary key (id)
var ids = 1;

// thêm mới 
function todolistAdd(title, content) {
    id = ids;
    data[id] = {id: ids, title: title, content: content};
    ids ++;
}

// cập nhật 
function todolistUpdate(id, title, content) {
    data[id] = {id: id, title: title, content: content}
}

// xóa bài
function todolistDelete(id) {
    delete data[id];
}

// lấy danh sách các id trong mảng
function todolistGetListID() {
    return data;
}

// lấy chi tiết 
function todolistGetDetail(id) {
    return data[id];
}
function todoListAll(){
    return data;
}

module.exports = {
    todolistAdd,
    todolistUpdate,
    todolistDelete,
    todolistGetListID,
    todolistGetDetail,
    todoListAll
}

/* Viết lại với , mongodb  su dung mongose*/

var mongoose = require("mongoose");

var todoListSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
});

var TodolistModel = module.exports = mongoose.model('Todolist', todoListSchema);

module.exports.get = function(){
    TodolistModel.find(callback).limit(limit)
}