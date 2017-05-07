var http = require('http');
var event = require('events');
var UserBean = require('./models/UserBean');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(req.url!='/favicon.ico'){
        user = new UserBean();
        user.eventEmit.once('事件名称',function (uname,pwd) {
            res.write('注册成功');
            console.log('uname:'+uname);
            console.log('pwd:'+pwd);
            user.login(req,res);
            res.end();
        });//事件监听
        user.zhuce(req,res);
    }
}).listen(8000);