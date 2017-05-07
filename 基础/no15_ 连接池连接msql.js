var OptPool = require('./OptPool');

var optPool = new OptPool();
var pool = optPool.getPool();   //获取连接池
//从连接池获取连接
pool.getConnection(function (err,conn) {
    //插入
    var userAddSql = 'insert into user (uname,pwd) values (?,?)';
    var param = ['李四','bbb'];
    conn.query(userAddSql,param,function (err,res) {
        if(err){
            console.log("err:"+err.toString()  );
        }
        console.log('insert succeed!');
        // conn.release(); //释放
    });

    //查询
    conn.query('select * from user',function (err,res) {
        if(err){
            console.log('err:'+err.toString());
            return ;
        }
        for(var i=0;i<res.length;i++){
            console.log(res[i]);

        }
        conn.release();
    })
});