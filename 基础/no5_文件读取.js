/**
 * Created by Lang on 2017/4/1.
 */
var http = require("http");
var optfile = require("./models/optfile");
http.createServer(function (request,response) {
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(request.url!="/favicon.ico"){
        // optfile.readfileSync("./views/login.html"); //同步
        function recall(data) {
            response.write(data);
            response.end("");
        }
        optfile.readfile("./views/login.html",recall); //异步
        // response.end("");
        console.log("主文件执行完毕");
    }
}).listen("8000");
console.log("正在监听8000");