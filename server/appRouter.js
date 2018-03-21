/**
 * Created by Bianrongcheng on 2018
 */
const express =require('express');
const md5 = require('blueimp-md5');
const models = require('./models');
const UserModel = models.getModel('user');
const router = express.Router();
const filter = {'pwd': 0};

//注册路由
router.post('/register', function (req, res) {
    const {name, pwd, type} = req.body;
    UserModel.findOne({name}, function (err, user) {
        if(user) {
            res.send({code: 1, msg: '此用户已存在'})
        } else {
            new UserModel({name, pwd: md5(pwd), type}).save(function (err, user) {
                res.cookie('userid', user._id);
                res.send({code: 0, data: {_id: user._id, name, type}})
            })
        }
    })
});


//登录路由
router.post('/login', function (req, res) {
    const {name, pwd} = req.body;
    UserModel.findOne({name, pwd: md5(pwd)}, filter, function (err, user) {
        if(!user) {
            res.send({code: 1, msg: '用户名或密码错误'})
        } else {
            res.cookie('userid', user._id);
            res.send({code: 0, data: user})
        }
    })
});


module.exports = router;
