var http = require('http');
var url = require('url');
var fs = require('fs');
var path= require('path');

http.createServer(function (req,res) {
    if(req.url == "/favicon.ico"){
        return;
    }
    //获取用户路径
    var pathname = url.parse(req.url).pathname;
    if(pathname == "/"){
        pathname += 'index.html';
    }
    console.log('路径:'+pathname);
    //扩展名
    var extname = path.extname(pathname);
    var filepath = "./"+path.normalize(pathname);
    console.log(filepath);
    //读取文件
    fs.readFile(filepath, function (err, data) {
        if(err){
           //如果不存在，返回404
           fs.readFile('./static/404.html',function (err, data) {
               res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
               res.end(data);
           });
           return;
        }
        //获取mime.json转换为json

        console.log('extname:'+extname);
        getMime(extname, function (mime) {
            console.log(mime);
            res.writeHead(200,{'Content-Type':mime});
            res.end(data);
        });


    });
}).listen(8000);

function getMime(extname,callback) {
    fs.readFile('./static/mime.json', function (err, data) {
        if(err){
            throw  err;
            return;
        }
        var mime = JSON.parse(data)[extname];
        //执行回调函数
        callback(mime);

    });
}