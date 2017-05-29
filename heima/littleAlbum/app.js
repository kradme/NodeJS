/**
 * Created by Lang on 2017/5/28.
 */
var express = require('express');
var app = express();
//导入控制器
var router = require('./controller');

//设置模版引擎
app.set('view engine', 'ejs');

//路由中间件
//静态页面
app.use(express.static('./public'));
app.use(express.static('./uploads'));
//显示主页
app.get('/',router.showIndex);
app.get('/:albumName', router.showAlbum);

//404
app.use(function (req,res) {
    res.render("err");
});

app.listen(3000);