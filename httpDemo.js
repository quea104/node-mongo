const http = require('http');

// 지정한 포트에 웹서버 생성
http.createServer(function (req, res) {
    res.writeHead(200);
    res.write('Hello World');
    res.end();
}).listen(8080);