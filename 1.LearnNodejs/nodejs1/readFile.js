

// khai báo sử dụng module HTTP
var http = require('http');

// khai báo sử dụng modules fs
var fs = require('fs');

// khởi tạo chạy cổng 8000
http.createServer(function (req, res) {
    // định dạng response head trả về
    res.writeHead('200', {'content-type': 'text/html'});
    // đọc file code.html  encode uf8
    fs.readFile('code.html','utf8', function (err, data) {
        if (err) throw err;
        // in ra nội dung đọc được
        res.write(data);
        // kết thúc reponse
        res.end();
    });
}).listen(8080);










/* // khai báo biến sử dụng module HTTP
var http = require('http');

// khai báo sử dụng modules fs  (viết tắt của file system) có chức năng xử lý file, thư mục trong node.js
var fs = require('fs');
http.createServer(function (req, res) {
    // định dạng response  Head trả về
    res.writeHead('200', { 'content-type': 'texr/html' });  // texr/html : tải file xuống , text/html : tải lên trang 

    // Dọc file code.html encode là utf8
    fs.readFile('code.html', 'utf8', function (err, data) {
        if (err) throw err;

        // In ra nội dung đọc được
        res.write(data);
        // kết thúc response
        res.end();
    });

}).listen(8080); */
