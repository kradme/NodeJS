/**
 * Created by Lang on 2017/5/6.
 */
var async = require("async");
function oneFun() {
  /*  setTimeout(function(){

    },1000);   //定时器    */
    ii=0;
    setInterval(function () {
        console.log("aaa="+new Date());
        ii++;
        if(ii==3){
            clearInterval(this);
        }
    },1000);
    console.log("oneFune");
}

function twoFun() { //每隔一秒调一次
    jj=0;
    setInterval(function () {
        console.log("bbb="+new Date());
        jj++;
        if(jj==3){
            clearInterval(this);
        }
    },1000);
    console.log("twoFune");
}

// oneFun();
// twoFun();

function exec () {
    async.series(   //穿行无关联
        {
            one:function(done) {
                ii=0;
                setInterval(function () {
                    console.log("aaa="+new Date());
                    ii++;
                    if(ii==3){
                        clearInterval(this);
                        done(null, 'one完毕');
                    }
                },1000);
                console.log("oneFune");
                // done(null, 'one完毕');
            },
            two:function (done) {
                jj=0;
                setInterval(function () {
                    console.log("bbb="+new Date());
                    jj++;
                    if(jj==3){
                        clearInterval(this);
                        done(null,'two完毕');
                    }
                },1000);
                // done(null,'two完毕');
            }
        },function (err, rs) {
            console.log(err);
            console.log(rs);
        }
    )
}
exec();
console.log("主进程完毕 ");