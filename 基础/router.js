var optfile = require("./models/optfile");
var url = require("url");
var querystring = require('querystring');

function getRecall(req,res) {
	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	function recall(data) {
		res.write(data.toString());
		res.end("");

    }
    return recall;
}
module.exports={
	login:function(req,res){
		//------------------ get方式接收参数 ------------------
		/*var rdata = url.parse(req.url,true).query;
		console.log(rdata);
		if(rdata['email']!=undefined){
			console.log(rdata['email']);
		}*/
		//------------------ post 方式 ----------------------------
		var post = '';
		req.on('data',function (chunk) {
			post += chunk;
        });
		console.log('post:'+post.toString());
		//-------------------  注意异步  ---------------------------
		req.on('end',function () {
			post = querystring.parse(post);
			console.log('email:'+post['email']+'\n');
			console.log('pwd:'+post['pwd']+'\n');
			arr = ['email','pwd'];
            function recall(data) {
				dataStr = data.toString();
				for(i=0;i<arr.length;i++){
					re = new RegExp("{"+arr[i]+"}",'g');	//正则表达式 /\{name}\g
					dataStr = dataStr.replace(re,post[arr[i]]);
				}
            	res.write(dataStr);
            	res.end();
            }
            optfile.readfile('./views/login.html',recall);
        });


        // function recall(data) {
			// res.write(data.toString());
			// res.end("");
        // }
        // recall = getRecall(req,res);
        // optfile.readfile('./views/login.html',recall);
		// res.write('我是login');
	},
	zhuce:function(req,res){
        // function recall(data) {
			// res.write(data.toString());
			// res.end("");
        // }
		recall = getRecall(req,res);
        optfile.readfile('./views/zhuce.html',recall);
		// res.write('我是zhuce');
	},
	writefile:function (req,res) {
		function recall(data) {
			res.write(data);
			res.end("");
        }
        optfile.writefile('./views/write.txt','此处写要写入的内容',recall);
    },
	showimg:function (req,res) {
		res.writeHead(200,{'Contend-Type':'img/jpeg'});
		optfile.readImg('./file/baidu.jpg',res);
    }

}