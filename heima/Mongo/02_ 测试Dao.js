/**
 * Created by Lang on 2017/5/29.
 */
var express = require("express");
var app = express();
var db = require('./model/db')
app.get("/",function (req,res) {
   db.insertOne('teacher',{"name":"xiaohong"}, function (err,result) {
       if(err){
           console.log("失败");
       }
       res.send('插入成功'+result);
   })
});

app.get("/du",function (req,res) {
    var page = parseInt(req.query.page);
    console.log(page);
    if(page>0){
        db.find('teacher',{},{"pageamount":3,"page":page},function (err,result) {
            res.send(result);

        });

    }else{

        db.find('teacher',{},function (err,result) {
            res.send(result);

        });
    }

});
//删除
app.get("/del",function (req,res) {
    var
})
app.listen(3000);