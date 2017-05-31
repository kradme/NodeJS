/**
 * Created by Lang on 2017/5/30.
 */
var express = require('express');
var app = express();
var db = require('../model/db');
var formidable = require('formidable');


exports.showIdex = function (req, res) {

    res.render("index",{

        "app":"app"
    });

}

exports.insertLiuyan = function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req,function (err,fields) {
        db.insertOne('liuyan',{
            "name":fields.name,
            "text":fields.text,
            "time":new Date()
        },function (err,result) {
            if(err){
                res.json('-1');
                return;
            }
            // console.log('成功'+result);
            res.json('1');
        })
    });
}

exports.readText = function (req,res) {
    db.find("liuyan",{},function (err,result) {
        if(err){
            res.json('-1');
            console.log("读取留言失败"+err.toString());
            return;
        }

        res.json({"result":result});
    })
}