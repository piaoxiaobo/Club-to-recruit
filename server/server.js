/**
 * Created by Bianrongcheng on 2018
 */
const express = require('express');
const bodyParser = require('body-parser'); // 解析请求体
const cookieParser = require('cookie-parser');
const appRouter = require('./appRouter');

const app =express();

// 解析cookie数据
app.use(cookieParser());
// 解析请求体(ajax请求: json数据格式)
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


//注册跟路由
app.use('/api', appRouter);

app.listen('4000',()=>{
  console.log('服务器启动成功~~')
});