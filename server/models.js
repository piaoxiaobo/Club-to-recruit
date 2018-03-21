/**
 * Created by Bianrongcheng on 2018
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/clubs');
const conn = mongoose.connection;
conn.on('connected',()=>{
    console.log('连接数据库成功！')
});

const userSchema= mongoose.Schema({

    // 用户名
    'name': {type: String, required: true},
    // 密码
    'pwd': {type: String, required: true},
    // 类型
    'type': {'type': String, required: true},
    // 头像
    'avatar': {'type': String},
    // 社团/学生介绍
    'desc': {'type': String},
    // 职位名
    'title': {'type': String},
    // 如果选择club 还有两个字段
    // 社团名称
    'clubs': {'type': String},
    // 总人数
    'sums': {'type': String}
});

mongoose.model('user',userSchema);


module.exports = {
    getModel(name) {
        return mongoose.model(name)
    }
};