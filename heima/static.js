var http = require('http');
var url = require('url');
var fs = require('fs');
var path= require('path');

http.createServer(function (req,res) {
    //获取用户路径
    var pathname = url.parse(req.url).pathname;
    if(pathname == "/"){
        pathname = 'index.html';
    }
    //扩展名
    var extname = path.extname(pathname);
    console.log(extname);
    //memi
    var memi = getMime(extname);
    //读取文件
    fs.readFile('./static/'+pathname, function (err, data) {
        if(err){
           //如果不存在，返回404
           fs.readFile('./static/404.html',function (err, data) {
               res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
               res.end(data);
           });
           return;
        }
        res.end(data);

    });
}).listen(8000);

function getMime(extname) {
    switch (extname){
        case ".html" :
            return "text/html";
        case ".jpg" :
            return "image/jpg";
    }
}