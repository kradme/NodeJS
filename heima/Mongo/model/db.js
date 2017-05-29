//封装数据库操作
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/teacher';

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
        }
        var cursor = db.collection(collectionName).find(json).limit(parseInt(args.pageamount)).skip(skipNo);
        // console.log(cursor);
        cursor.each(function (err,doc) {
            if(err){
                callback(er,null);
                return;
            }
            if(doc!=null){
                result.push(doc);
            }else{
                callback(null,result);
            }
        })
    })
}