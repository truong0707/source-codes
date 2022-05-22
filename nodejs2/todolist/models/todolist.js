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