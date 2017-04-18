var http = require("http");
var otherFun = require('./models/otherFuns.js');		//导入外部函数
http.createServer(function(request,response){
response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	
	if(request.url!=="/favicon.ico"){
		otherFun.fun1(response);
		otherFun['fun2'](response);
		var fun3 = "fun3";
		otherFun[fun3](response);
		response.end('------------结束');
	}
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000");