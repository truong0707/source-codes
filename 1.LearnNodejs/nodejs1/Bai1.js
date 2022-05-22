var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.write('<html>');
   response.write('<head>');
   response.write('<title>Hello Word<title>');
   
   // Send the response body as "Hello all"
   response.end('Hello all1\n'); 
}).listen(8080);