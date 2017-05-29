var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

app.get("/",function (req,res) {
    MongoClient.connect(url,function (err,db) {
        if(err){
            console.log('连接失败');
            return;
        }
        console.log('连接成功 ');
        db.collection('student').insertOne({
            "name":"哈哈贷款","age":parseInt(Math.random()*100+20)
        },function (err,result) {
            if(err){
                console.log('成功');
            }
            console.log(result)
            res.send(result);
        });
        db.close();
    })
    // res.send("niaha");
});
app.listen(3000);