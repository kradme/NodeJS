/**
 * Created by Lang on 2017/5/30.
 */
var express = require('express');
var app = express();
var router = require('./controller');
app.set('view engine','ejs');

//加载静态资源
app.use(express.static('./public'));

app.get('/',router.showIdex);

app.post("/insertLiuyan",router.insertLiuyan);

app.listen(3000);