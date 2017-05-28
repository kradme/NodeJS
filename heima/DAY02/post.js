/**
 * Created by Lang on 2017/5/21.
 */

var http = require('http');
var querystring = require('querystring');
var formidable = require('formidable');
var util = require('util');

http.createServer(function (req, res) {
    if(req.url === '/dopost' && req.method.toLocaleLowerCase()==='post'){
    // var alldata = '';
    // req.addListener('data', function (chunk) {
    //     alldata += chunk;
    //     console.log(chunk);
    // });
    //
    // req.addListener('end',function () {
    //     console.log(alldata);
    //     var datastring = alldata.toString();
    //     var dataobj = querystring.parse(datastring);
    //     console.log(dataobj)
    //     console.log(dataobj.name);
    //     console.log(dataobj.sex);
    //     console.log(dataobj.hobby);
    //     res.end('');
    // })

        var form = new formidable.IncomingForm();
        form.uploadDir = './uploads';
        form.parse(req, function (err, fields, files) {
            if(err){
                throw  err;
            }
            console.log(fields);
            console.log(files);
            console.log(util.inspect({fields: fields, files: files}));
            res.end('success');
        });
    }
}).listen(80);