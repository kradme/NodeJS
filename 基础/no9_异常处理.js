var http = require("http");
var url = require("url");
var router = require("./router");
var exception = require("./models/Exception")
http.createServer(function (request,response) {

    if(request.url!='/favicon.ico'){
        pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'');
        try{
            // router[pathname](request,response);
            data = exception.expfun(0);
            response.write(data);
            response.end();
        }catch(err){
            console.log("aaaaaa"+err);
            response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            response.write(err.toString());
            response.end();
        }
        console.log("执行完毕！");
    }
}).listen(8000);
console.log("正在监听8000.........");