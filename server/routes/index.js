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
});
//判断用户名是否被使用
router.post('/checkUsername', function(req, res, next) {
  var params = req.body;
  connection.query("SELECT * FROM bili_usermsg WHERE username='${username}'",[params.username], function(error, results) {
    if(error) throw error;
    if(!results.length){
      res.send({error_code: 1, reason: "用户名已存在"});
    } else {
      res.send({error_code: 0, reason: "可以使用的用户名"});
    }
  });
});

//collect test
router.get('/list1', function(req, res, next) {
    connection.query("SELECT * FROM bili_usercollect", function(error, results, field) {
        console.log(results);
    });
});

//get user's collection
router.get('/collect', function(req, res, next) {
  // res.end(1);
  console.log("111");
  // res.end("1");
    connection.query("SELECT vname,username,type,v_pic FROM bili_usercollect where username = 'lxy'", function(error, results, field) {
        if (error) {
            console.log('[SELECT ERROR] - ', error.message);
            return;
        }
        console.log(JSON.stringify(results));
        return res.end(JSON.stringify(results));
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

// VideoPage获取当前页面视频的接口
router.get('/getVideo', function (req, res, next) {
  var id = req.query.id;
  var sql = "SELECT * from videomsg where vid=" + id;
  connection.query(sql, function (error, results) {
    if (error) {
      console.log('[SELECT ERROR] - ', error.message);
      return;
    }
    console.log(JSON.stringify(results));
    return res.end(JSON.stringify(results));
  });
  // res.end("1");
});

// VideoPage获取当前页面视频评论的接口
router.get('/getVideoComment', function (req, res, next) {
  var id = req.query.id;
  var sql = "SELECT * from videocomment where vid=" + id;
  connection.query(sql, function (error, results) {
    if (error) {
      console.log('[SELECT ERROR] - ', error.message);
      return;
    }
    console.log(JSON.stringify(results));
    return res.end(JSON.stringify(results));
  });
  // res.end("1");
});

router.get('/getVideoList', function (req, res, next) {
  var sql = "SELECT * from videomsg";
  connection.query(sql, function (error, results) {
    if (error) {
      console.log('[SELECT ERROR] - ', error.message);
      return;
    }
    console.log(JSON.stringify(results));
    return res.end(JSON.stringify(results));
  });
});

module.exports = router;
