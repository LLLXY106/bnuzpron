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
  connection.query("SELECT id,username,password FROM bnuzpron_usermsg", function(error, results, field) {
    console.log(results);
    jsonWrite(res, results);
  });
});

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

//判断用户名是否被使用
router.post('/checkUsername', function(req, res, next) {
  var params = req.body;
  connection.query("SELECT * FROM bnuzpron_usermsg WHERE username='${username}'",[params.username], function(error, results) {
    if(error) throw error;
    if(!results.length){
      res.send({error_code: 1, reason: "用户名已存在"});
    } else {
      res.send({error_code: 0, reason: "可以使用的用户名"});
    }
  });
});

//收藏测试
router.get('/list1', function(req, res, next) {
    connection.query("SELECT * FROM bili_usercollect", function(error, results, field) {
        console.log(results);
    });
});

//获取用户收藏内容
router.get('/collect', function(req, res, next) {
  // res.end(1);
  console.log("111");
  // res.end("1");
    connection.query("SELECT * FROM bili_usercollect where username = 'LL_XY106'", function(error, results, field) {
        if (error) {
            console.log('[SELECT ERROR] - ', error.message);
            return;
        }
        console.log(JSON.stringify(results));
        return res.end(JSON.stringify(results));
    });
});

//删除收藏内容
router.get('/delcollect', function(req, res, next) {
    var id = req.query.id;
    var sql = "DELETE FROM bili_usercollect WHERE id="+id;
    console.log(sql);
    connection.query(sql,(err,result,firlds)=>{
        if(err) throw err;
        // console.log(result.changedRows)
    })
    connection.end();
});

//用户填写资料卡
router.post('/userinfo', function(req, res, next) {
    var params = req.body;
    var sql = "INSERT INTO bili_userinfo(username,birthday,hobby,phone,email) VALUES(?,?,?,?,?)";
    // console.log(sql);
    connection.query(sql,[params.username,params.birthday,params.hobby,params.phone,params.email],(err,result,firlds)=>{
        if(err) throw err;
        console.log("success");
    });
    connection.end();

});

//显示资料卡信息
router.get('/showinfo', function(req, res, next) {
    var sql = "SELECT * FROM bili_userinfo where username = 'bnuz1701030073'";
    // console.log(sql);
    connection.query(sql,(error,result,firlds)=>{
        if (error) {
            console.log('[SELECT ERROR] - ', error.message);
            return;
        }
        console.log("success");
        console.log(JSON.stringify(result));
        return res.end(JSON.stringify(result));
    });
});

//用户修改信息
router.post('/modifyinfo', function(req, res, next) {
    var params = req.body;
    var sql = "UPDATE bili_userinfo SET phone = ?,email = ?,des = ? WHERE username = ?";
    connection.query(sql,[params.phone,params.email,params.des,'bnuz1701030073'],(error,result)=>{
        if (error) {
            console.log('[UPDATE ERROR] - ', error.message);
            return;
        }
        console.log("modify success");
    });
});

//登录接口
router.post('/login', function(req, res, next) {
  var params = req.body;
  console.log(params);
  connection.query("SELECT password FROM bnuzpron_usermsg WHERE username=?",[params.username], function(error, results) {
    if(error){
      return error;
    }else{
      jsonWrite(res, results);
      // for(var i = 0;i < results.length;i++){
      //   if(results[i].password == params.password){
      //     return;
      //   }
      // }
      res.end("over");
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

//管理员端 删除用户
router.post('/deleteUser', function(req, res, next) {
  var params = req.body;
  connection.query("DELETE FROM bnuzpron_userMsg WHERE id=?", [params.id],function(error, results) {
    if(error) return error;
    else{
      jsonWrite(res, results);
      alert("删除成功");
      res.end("over");
    }
  })
})