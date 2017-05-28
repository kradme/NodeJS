var http = require('http');

http.createServer(function (req, res) {
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end('成功');
    }

).listen(80,'localhost');