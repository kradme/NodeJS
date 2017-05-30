//封装数据库操作
var MongoClient = require('mongodb').MongoClient;
var settings = require('./settings');
var url = settings.url;
//连接
function __connectDB(callback) {
    MongoClient.connect(url,function (err,db) {
        if(err){
            console.log('连接失败');
            return;
        }
        console.log('连接成功 ');
        callback(err,db);
    })
}
//插入数据
exports.insertOne = function (collectionName, json, callback) {

    __connectDB(function (err,db) {
        if(err){
            callback(err,null);
            return;
        }
        db.collection(collectionName).insertOne(json,function (err,result) {
            callback(err,result);
            db.close();
        })
    });
}

//查询
exports.find = function (collectionName, json, C, D) {
    //重载，判断参数
    if(arguments.length==3){
        var callback = C;
        var args = {"pageamount":0,"page":0};
    }else if(arguments.length==4){
        var args = C;
        var callback = D;
    }else{
        throw new Error("参数位数不正确")

    }
    var result = [];
    var skipNo = args.pageamount*args.page;
    console.log(args.pageamount+":"+args.page);
    __connectDB(function (err,db) {
        if(err){
            callback(err,null);
            db.close();
        }
        var cursor = db.collection(collectionName).find(json).limit(parseInt(args.pageamount)).skip(skipNo);
        // console.log(cursor);
        cursor.each(function (err,doc) {
            if(err){
                callback(er,null);
                db.close();
                return;
            }
            if(doc!=null){
                result.push(doc);
            }else{
                callback(null,result);
                db.close();
            }
        })
    })
}

//删除
exports.deleteMany = function (collectionName, json, callback) {
    __connectDB(function (err,db) {
        db.collection(collectionName).deleteMany(json,function (err,result) {
            if(err){
                callback(err,null);
                db.close();
                return;
            }
            callback(null,result);
            db.close();
        });
    });
}

//修改
exports.updateMany = function (collectionName,json1,json2,callback) {
    __connectDB(function (err,db) {
        db.collection(collectionName).updateMany(
            json1,
            json2,
            function (err,result) {
                callback(err,result);
                db.close();
            }
        )
    })
}