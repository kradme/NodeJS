var http = require('http');
var User = require('./models/User');
var Teacher = require('./models/Teacher');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!=="/favicon.ico"){
		user = new User(2,'李四',30);
//		user.id=1;
//		user.name='张三';
//		user.age=20;
		user.enter();
		
		teacher = new Teacher(3,'王五',40);
		teacher.enter();
		teacher.teach(response);
		response.end('...end');
	}
}).listen(8000);
console.log("正在监听8000....")