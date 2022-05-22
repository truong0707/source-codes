// khai báo sử dụng module HTTP
var http = require('http');

// khởi tạo chạy cổng 8000
http.createServer(function (request, response) {  // bên trong đây sẽ thiết lập giá trị server trả về

    // Thiết lập server trả về 1 trang HTML

    // thiết lập kiểu dữ liệu mà server muốn trả về
    // định dạng response head trả về
    response.writeHead('200', { 'content-type': 'text/html' });
    response.write('<html>');
    response.write('<head>');
    response.write('<title> Hello Truong </title>');
    response.write('<body> La Truong Day </body>');
    response.end();

}).listen(8080);



