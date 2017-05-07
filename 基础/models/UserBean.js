var events = require('events');
// var http = require('http');

function UserBean() {
    this.eventEmit = new events.EventEmitter();
    this.zhuce = function (req,res) {
        console.log('注册.....');
        req['uname']='张三';
        req['pwd']='aaa';
        this.eventEmit.emit('事件名称','张三','aaa'); //抛出事件信息
    },
    this.login=function (req,res) {
        console.log('登录');
        res.write('用户名：'+req['uname']);
        res.write('密码:'+req['pwd']);
        res.write('登录');
    }
}

module.exports=UserBean;