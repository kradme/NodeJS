var http = require('http');
var url = require('url');
var router = require('./router');
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){
        var pathname = url.parse(request.url).pathname; //获取url地址
        pathname = pathname.replace(/\//,'');   //替换/为空
        console.log(pathname);
        router[pathname](request,response);			//路由
    }
}).listen(8000);
console.log("正在监听8000 。。。。。。。");