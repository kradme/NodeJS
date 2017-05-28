/**
 * Created by lang on 2017/5/24.
 */
var express = require('express');
var app = express();
app.get('/',function (req,res) {
    res.send('哈哈哈哈哈哈');
});
app.listen(80);