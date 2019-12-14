//接口文件
var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');

//终端显示信息
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  }else{
    res.json(ret);
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//测试 检测数据库是否连接
// router.get('/list', function(req, res, next) {
//   connection.query("SELECT * FROM bnuzpron_usermsg", function(error, results, field) {
//     console.log(results);
//   });
// });

//注册接口
router.post('/register', function(req, res, next) {
  var params = req.body;
  connection.query("INSERT INTO bnuzpron_usermsg(username, password) VALUES(?,?)", [params.username,params.password], function(error, results, field) {
    if(error){
      console.log(error);
    }
    if(results){
      jsonWrite(res,results);
      res.end("is over");
    }
    console.log("success");
  });
});

//登录接口
router.post('/login', function(req, res, next) {
  var params = req.body;
  console.log(params);
  connection.query("SELECT password FROM bnuzpron_usermsg WHERE username=?",[params.username], function(error, results) {
    if(error){
      return;
    }
    if(results){
      jsonWrite(res, results);
      for(var i = 0;i < results.length;i++){
        if(results[i].password == params.password){
          return res.end("返回成功");
        }
      }
      return res.end("is over");
    }
  });
});

//判断用户名是否被使用
router.post('/checkUsername', function(req, res, next) {
  var params = req.body;
  connection.query("SELECT username FROM bnuzpron_usermsg WHERE username=?",[params.username], function(error, results) {
    if(error){
      return;
    }
    if(results){
      jsonWrite(res, results);
      for(var i = 0;i < results.length;i++){
        if(results[i].username == params.username){
          return res.end("is over");
        }
      }
      return res.end("is over2");
    }
  });
});

module.exports = router;
