/**
 * Created by Bianrongcheng on 2018
 */
const express = require('express');
const app =express();

//注册跟路由
app.use('/',function (res,req) {
  res.send('hello,server~~')
});

app.listen('4000',()=>{
  console.log('服务器启动成功~~')
});