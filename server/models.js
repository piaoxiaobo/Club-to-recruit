/**
 * Created by Bianrongcheng on 2018
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/clubs');
const conn = mongoose.connection;
conn.on('connected',()=>{
    console.log('连接数据库成功！')
});