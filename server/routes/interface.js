//接口文件
var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');

var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  }else{
    res.json(ret);
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//测试 显示数据
router.get('/list', function(req, res, next) {
  connection.query("SELECT * FROM bili_usermsg", function(error, results, field) {
    console.log(results);
  });
});
//注册接口
router.post('/register', function(req, res, next) {
  var params = req.body;
  connection.query("INSERT INTO bili_usermsg(username, password) VALUES(?,?)", [params.username,params.password], function(error, results, field) {
    if(error){
      console.log(error);
    }
    if(results){
      jsonWrite(res,results);
      res.end("is over");
    }
    console.log("success");
  });

})

module.exports = router;
