var fs = require("fs");

module.exports={
    readfile:function(path,recall){ //异步执行读文件

        fs.readFile(path,function(err, data){
            if(err){
                console.log(err);
                recall(err);
            }else {
                recall(data);
                // console.log(data.toString());
            }
        });
        console.log("异步方法执行完毕");
    },
    readfileSync:function (path) { //同步方法读文件
        var data = fs.readFileSync(path,'utf-8');

        console.log(data);
        console.log("同步方法执行完毕");
        // return data;

    },
    writefile:function (path,data,recall) {    //异步写文件
       fs.writeFile(path, data, function (err) {
           if(err){
               throw err;
           }
           console.log('It\'s saved');
           recall('写入文件成功');
       });
    },
    readImg:function(path,res){ //读取图片
        fs.readFile(path,'binary',function (err,fileData) {
            if(err){
                console.log(err);
                return;
            }else {
                res.write(fileData,'binary');
                res.end();
            }

        });
    }


}