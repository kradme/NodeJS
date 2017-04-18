var http=require("http");
http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
	if(request.url!=="/favicon.ico"){	//清除二次访问
		console.log("访问");
		response.write('hello,world');
		response.end('hello,世界');
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');