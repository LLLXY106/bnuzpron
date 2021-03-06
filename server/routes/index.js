var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');
var multer = require('multer');
//终端显示信息
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//测试 显示数据
router.get('/list', function (req, res, next) {
    connection.query("SELECT id,username,password FROM bnuzpron_usermsg", function (error, results, field) {
        console.log(results);
        jsonWrite(res, results);
    });
});

//注册接口
router.post('/register', function (req, res, next) {
    var params = req.body;
    connection.query("INSERT INTO bnuzpron_usermsg(username, password) VALUES(?,?)", [params.username, params.password], function (error, results, field) {
        if (error) {
            console.log(error);
        }
        if (results) {
            jsonWrite(res, results);
            res.end("is over");
        }
        console.log("success");
    });
});

//判断用户名是否被使用
router.post('/checkUsername', function (req, res, next) {
    var params = req.body;
    connection.query("SELECT * FROM bnuzpron_usermsg WHERE username='${username}'", [params.username], function (error, results) {
        if (error) {
            console.log(error);
        }
        if (!results.length) {
            res.send({error_code: 1, reason: "用户名已存在"});
        } else {
            res.send({error_code: 0, reason: "可以使用的用户名"});
        }
    });
});

//收藏测试
router.get('/list1', function (req, res, next) {
    connection.query("SELECT * FROM bili_usercollect", function (error, results, field) {
        console.log(results);
    });
});

//获取用户收藏内容
router.post('/collect', function (req, res, next) {
    var params = req.body;
    // res.end(1);
    console.log("111");
    // res.end("1");
    connection.query("SELECT * FROM bili_usercollect where username = ?", [params.username], function (error, results, field) {
        if (error) {
            console.log('[SELECT ERROR] - ', error.message);
            return;
        }
        console.log(JSON.stringify(results));
        return res.end(JSON.stringify(results));
    });
});

//删除收藏内容
router.get('/delcollect', function (req, res, next) {
    var id = req.query.id;
    var sql = "DELETE FROM bili_usercollect WHERE id=" + id;
    console.log(sql);
    connection.query(sql, (err, result, firlds) => {
        if (err) throw err;
        // console.log(result.changedRows)
    });
});

// 用户填写资料卡
router.post('/userinfo', function (req, res, next) {
    var params = req.body;
    var sql = "INSERT INTO bili_userinfo(username,birthday,hobby,phone,email) VALUES(?,?,?,?,?)";
    // console.log(sql);
    connection.query(sql, [params.username, params.birthday, params.hobby, params.phone, params.email], (err, result, firlds) => {
        if (err) throw err;
        console.log("success");
    });
    connection.end();

});

// 显示资料卡信息
router.post('/showinfo', function (req, res, next) {
    var params = req.body;
    var sql = "SELECT * FROM bili_userinfo where username = ?";
    // console.log(sql);
    connection.query(sql, [params.username], (error, result, firlds) => {
        if (error) {
            console.log('[SELECT ERROR] - ', error.message);
            return;
        }
        console.log("success");
        console.log(JSON.stringify(result));
        return res.end(JSON.stringify(result));
    });
});

// 用户修改信息
router.post('/modifyinfo', function (req, res, next) {
    var params = req.body;
    var sql = "UPDATE bili_userinfo SET phone = ?,email = ?,des = ? WHERE username = ?";
    connection.query(sql, [params.phone, params.email, params.des, params.username], (error, result) => {
        if (error) {
            console.log('[UPDATE ERROR] - ', error.message);
            return;
        }
        console.log("modify success");
    });
});

// 登录接口
router.post('/login', function (req, res, next) {
    var params = req.body;
    console.log(params);
    connection.query("SELECT password FROM bnuzpron_usermsg WHERE username=?", [params.username], function (error, results) {
        if (error) {
            return error;
        } else {
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

/*====================================VideoPage的接口开始====================================*/
// 获取当前页面视频的接口
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

// 播放量+1
router.get('/addPlay', function (req, res, next) {
    var id = req.query.id;
    var sql = "update videomsg set play=play+1 where vid=" + id;
    connection.query(sql, function (error, results) {
        if (error) {
            console.log('[SELECT ERROR] - ', error.message);
            return;
        }
        console.log("播放量+1嗷");
    });
});

// 获取当前页面视频评论的接口
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

// 用户提交评论
router.post('/addVideoComment', function (req, res, next) {
    var params = req.body;
    var sql = "SELECT MAX(floor) as maxfloor FROM videocomment WHERE vid=" + params.id;
    connection.query(sql, function (error, results) {
        if (error) {
            console.log('[SELECT ERROR] - ', error.message);
            return;
        }
        var maxfloor = results[0].maxfloor + 1;
        var photo = "/img/Imghead/timg.jpg";
        // console.log(maxfloor);
        connection.query("SELECT photo from bili_userinfo where username=?",
            [params.username], function (error, results) {
                if (error) throw error;
                photo = results[0].photo;
                connection.query("INSERT INTO videocomment(vid,floor,username,comment,comment_time,fatherfloor,isshow,photo) VALUES(?,?,?,?,?,?,?,?)",
                    [params.id, maxfloor, params.username, params.textarea, null, 0, 0, photo], function (error, results) {
                        if (error) throw error;
                        console.log("add comment success");
                        res.send("评论成功~");
                    });
            });

    });
});

// 用户提交评论
router.post('/addVideoComment2', function (req, res, next) {
    var params = req.body;

        connection.query("SELECT photo from bili_userinfo where username=?",
            [params.username], function (error, results) {
                if (error) throw error;
                photo = results[0].photo;
                connection.query("INSERT INTO videocomment(vid,floor,username,comment,comment_time,fatherfloor,photo) VALUES(?,?,?,?,?,?,?)",
                    [params.id, params.floor, params.username, params.textarea, null, 1, photo], function (error, results) {
                        if (error) throw error;
                        console.log("add comment success");
                        res.send("评论成功~");
                    });
            });

});

//添加收藏
router.post('/addCollect', function (req, res, next) {
    var params = req.body;
    var fsql = "SELECT COUNT(username) as num from bili_usercollect WHERE username=? and v_id=?";

    connection.query(fsql, [params.username, params.id], function (error, results) {
        if (error) {
            console.log('[SELECT ERROR] - ', error.message);
            return;
        }
        if (results[0].num > 0) {
            res.send("你已经收藏过啦~")
        } else {
            var sql = "SELECT title, headsrc FROM videomsg WHERE vid=" + params.id;
            connection.query(sql, function (error, results) {
                if (error) {
                    console.log('[SELECT ERROR] - ', error.message);
                    return;
                }
                var title = results[0].title;
                var headsrc = results[0].headsrc;
                connection.query("INSERT INTO bili_usercollect(username, v_id, vname, type, v_pic) VALUES(?,?,?,?,?)",
                    [params.username, params.id, title, "公开", headsrc], function (error, results) {
                        if (error) throw error;
                        console.log("add collect success");
                        res.send("添加收藏成功~");
                    });
            });
        }
    });


});

/*====================================VideoPage的接口结束====================================*/

/*====================================RankingList的接口开始====================================*/
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
/*====================================RankingList的接口结束====================================*/

/*====================================Contribute的接口开始====================================*/
var uploadFolder = '../public/video/VideoPage';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder) // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        var sql = 'select count(*) as num from videomsg';
        var title = req.body.name;
        connection.query(sql, function (error, results) {
            if (error) {
                console.log('[SELECT ERROR] - ', error.message);
                return;
            }
            var num = parseInt(results[0].num) + 1;
            var getfiletype = file.originalname.split(".");
            var src = num + "." + getfiletype[getfiletype.length - 1];
            var headsrc = "/img/Videohead/default.jpg";
            // var title = Date.now() + '-' + file.originalname;
            cb(null, src);
            connection.query("INSERT INTO videomsg(title,vid,area,type,headsrc,play,star) VALUES(?,?,?,?,?,0,?)", [title, num, req.body.area, req.body.type, headsrc, 5.0], function (error, results, field) {
                if (error) {
                    console.log(error);
                }
                console.log("success");
            });
        });
        // const fileFormat = (file.originalname).split('.'); // 取后缀
        // cb(null , num + '.' + fileFormat[fileFormat.length - 1]);
    }
});

var upload = multer({storage: storage});

router.post('/Contribute', upload.single('file'), function (req, res, next) {
    var file = req.file;
    console.log(req.body);
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    var path = file.path;
    var arr = path.split("\\");
    var idarr = arr[arr.length - 1].split(".");
    res.send(idarr[0]);
});
/*====================================Contribute的接口结束====================================*/

module.exports = router;

//管理员端 删除用户
router.post('/deleteUser', function (req, res, next) {
    var params = req.body;
    connection.query("DELETE FROM bnuzpron_usermsg WHERE id=?", [params.id], function (error, results) {
        if (error) return error;
        else {
            jsonWrite(res, results);
            res.end("over");
        }
    })
});

//管理员端 视频列表
router.get('/videoList', function (req, res, next) {
    connection.query("SELECT * FROM videomsg", function (error, results, field) {
        // console.log(results);
        jsonWrite(res, results);
    });
});

//管理员端 删除视频
router.post('/deleteVideo', function (req, res, next) {
    var params = req.body;
    connection.query("DELETE FROM videomsg WHERE id=?", [params.id], function (error, results) {
        if (error) return error;
        else {
            jsonWrite(res, results);
            res.end("over");
        }
    });
});

//查看所有评论
router.get('/commentList', function (req, res, next) {
    connection.query("SELECT * FROM videocomment", function (error, results, field) {
        console.log(results);
        jsonWrite(res, results);
    });
});

//管理员端 删除评论
router.post('/deleteComment', function (req, res, next) {
    var params = req.body;
    connection.query("DELETE FROM videocomment WHERE id=?", [params.id], function (error, results) {
        if (error) return error;
        else {
            jsonWrite(res, results);
            res.end("over");
        }
    });
});

//改变封面
router.get('/getCover', function (req, res, next) {
    var params = req.body;
    connection.query("SELECT headsrc FROM videomsg WHERE id=?", [params.id], function (error, results) {
        if (error) return error;
        else {
            jsonWrite(res, results);
            res.end("over");
        }
    });
});
/*====================================Modifyphoto的接口开始====================================*/
var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../public/img/Imghead") // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        var title = file.originalname;
        cb(null, title);
    }
});

var uploadheadimg = multer({storage: storage2});

router.post('/ModifyPhoto', uploadheadimg.single('file'), function (req, res) {
    var file = req.file;

    // console.log('文件类型：%s', file.mimetype);
    // console.log('原始文件名：%s', file.originalname);
    // console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    // var path1=file.path.substring(8);
    // console.log(path1);
    var sql = "UPDATE bili_userinfo SET photo = ? WHERE username = ?";
    connection.query(sql, [file.path.substring(9, file.path.length), req.body.username], (error, result) => {
        if (error) {
            console.log('[UPDATE ERROR] - ', error.message);
            return;
        }
        console.log("modify success");
    });

    var sql = "UPDATE videocomment SET photo = ? WHERE username = ?";
    connection.query(sql, [file.path.substring(9, file.path.length), req.body.username], (error, result) => {
        if (error) {
            console.log('[UPDATE ERROR] - ', error.message);
            return;
        }
        console.log("modify success");
    });
    // res.send({ret_code: '0'});
});

/*====================================Modifyphoto的接口结束====================================*/

/*====================================HotPage的接口开始====================================*/
router.get('/hot', function (req, res) {
    var sql = "SELECT * FROM bnuzpron_cartoon";
    // console.log(sql);
    connection.query(sql, (error, result, firlds) => {
        if (error) {
            console.log('[SELECT ERROR] - ', error.message);
            return;
        }
        console.log("success");
        console.log(JSON.stringify(result));
        return res.end(JSON.stringify(result));
    });
});
/*====================================HotPage的接口结束====================================*/

//获取用户头像
// router.get('/getUserHead', function (req, res) {
//     var params = req.body;
//     connection.query("SELECT photo FROM bili_userinfo WHERE username=?", [params.username], function (error, results) {
//         if (error) return error;
//         else {
//             jsonWrite(res, results);
//             res.end("over");
//         }
//     });
// });