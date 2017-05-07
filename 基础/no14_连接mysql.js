var mysql = require("mysql");   //调用mysql模块

//创建一个连接
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'lang432105',
    database:'test',
    port:'3306'
});
//创建一个connection
connection.connect(function (err) {
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[Connection connect] succeed!');
});
//插入sql
var userAddSql = 'insert into user (uname,pwd) value (?,?)';
var param = ['张三','aaa'];
connection.query(userAddSql,param,function (err,res) {
    if(err){
        console.log('insert err'+err.toString());
        return ;
    }
    console.log('insert succeed!');
});
//执行查询
connection.query('select * from user',function (err,res) {
    if(err){
        console.log(err.toString());
        return ;
    }
    console.log('The solution is :',res[0],uname);

})
//关闭connection
connection.end(function (err) {
    if(err){
        console.log(err.toString());
        return;
    }
    console.log('[Connection end] succeed!' );
});