# 社团招募系统（Club-to-recruit）
```
author: 卞荣成/漂小泊
version：V1.0.0
first publish： 小泊随記
state: 暂无更新
```

##  第一章 准备
### 1.1项目描述
```
1)此项目为一个前后台分离的社团招募系统, 包括前端应用和后端应用
2)包括用户注册/登陆, 社团/学生列表, 实时聊天等模块
3)前端: 使用React全家桶+ES6+Webpack等技术
4)后端: 使用Node + express + mongodb + socketIO等技术
5)采用模块化、组件化、工程化的模式开发
```

### 1.2技术选型
![](https://i.imgur.com/hA4lCJ8.png)

### 1.3前端路由
![](https://i.imgur.com/gidZrcp.png)

### 1.4API接口
![](https://i.imgur.com/3hcXvop.png)

### 1.5使用技术
```
1)使用组件化、模块化、工程化的开发模式
2)使用create-react-app脚手架初始化react项目开发
3)使用node+express+mongoose+mongodb搭建后台开发
4)使用ES6+eslint的开发方式
5)使用react-router-dom开发单页应用
6)使用axios与后端进行数据交互
7)使用redux+react-redux+redux-thunk管理应用组件状态
8)使用antd-mobile组件库构建界面
9)使用mongoose操作mongodb数据库
10)使用express搭建后台路由
11)使用socket.io实现实时通信
12)使用blueimp-md5对密码进行MD5加密处理
13)使用browser-cookies操作浏览器端cookie数据
14)使用工具为webstorm
```
*[webstorm安装教程](https://www.itsolotime.com/blog/2018/01/22/Webstorm%20usage/)*
### 1.6常用命令
#### npm常用命令
```
* npm init  //初始化当前应用包, 生成package.json
* npm install  //根据package.json下载所有依赖包
* npm install packageName --save   //下载某个运行时依赖包
* npm install packageName --save-dev  //下载某个开发编译期依赖包
* npm install packageName -g  //全局下载某个依赖包
* npm install package@version  //下载指定版本的某个依赖包
* npm info packageName  //查看某个包有远程仓库中的相关信息
* npm rm packageName --save  //移除已下载的运行依赖包
* npm rm packageName –save-dev  //移除已下载的开发依赖包
* npm list  //查看安装的所有的包
* npm help  //查看命令的详细帮助
* npm install -g cnpm --registry=https://registry.npm.taobao.org  //安装淘宝镜像
* npm config set registry="https://registry.npm.taobao.org" //将淘宝镜像设置为npm的默认仓库
* npm run xxx //执行package.json的scripts中配置的命令
* npm root -g //查看全局下载目录
```
#### git常用命令
```
* git config --global user.name "username"  //配置用户名
* git config --global user.password "xx@gmail.com" //配置邮箱
* git init  //初始化生成一个本地仓库 
* git clone url  //将远程仓库克隆下载到本地 
* git add *   //添加到暂存区 
* git commit –m “message”  //提交到本地仓库 
* git remote add origin url  //关联到远程仓库 
* git push origin master  //push到远程 
* git pull origin master  //从远程pull更新
```
## 第二章 应用开发
### 2.1 搭建项目
#### 2.1.1 create-react-app(脚手架)
create-react-app是react官方提供的用于搭建基于react+webpack+es6项目的脚手架

[在线文档:]( https://github.com/facebookincubator/create-react-app)

操作:
```
npm install -g create-react-app : 全局下载工具
create-react-app gboss :下载模板项目
cd gboss
npm start
访问: localhost:3000
```
#### 2.1.2 编码测试与打包项目
```
1)编码测试
npm start  
访问: http://localhost:3000
编码, 自动编译打包(live-reload), 查看效果

2)打包发布
npm run build
npm install -g serve
serve build
访问: http://localhost:5000
```

### 2.2项目(前端)源码目录设计
![](https://i.imgur.com/d9uQS1Q.png)

### 2.3引入antd-mobile
#### 2.3.1下载组件库包
```
npm install antd-mobile --save
```
#### 2.3.2处理页面index.html
```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
  if(!window.Promise) {
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
  }
</script>
```
#### 2.3.3实现组件的按需打包
##### 下载依赖模块
```
npm install --save-dev babel-plugin-import react-app-rewired
```
##### 定义加载配置的js模块: config-overrides.js
```
/**
 * Created by Bianrongcheng on 2018
 */
const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style: 'css'}], config);
    return config;
}
```
##### 修改配置: package.json
```
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test --env=jsdom",
  "eject": "react-scripts eject"
}
```

#### 2.3.4 自定义主题
这里可以更改“antd”组件的默认背景颜色
##### 下载依赖模块
```
npm install --save-dev less@2.7.3 less-loader
```
##### 配置: config-overrides.js
```
/**
 * Created by Bianrongcheng on 2018
 */
const {injectBabelPlugin, getLoader} = require('react-app-rewired');

const fileLoaderMatcher = function (rule) {
    return rule.loader && rule.loader.indexOf(`file-loader`) != -1;
}

module.exports = function override(config, env) {
    // babel-plugin-import
    config = injectBabelPlugin(['import', {
        libraryName: 'antd-mobile',
        //style: 'css',
        style: true, // use less for customized theme
    }], config);

    // customize theme
    config.module.rules[1].oneOf.unshift(
        {
            test: /\.less$/,
            use: [
                require.resolve('style-loader'),
                require.resolve('css-loader'),
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                            }),
                        ],
                    },
                },
                {
                    loader: require.resolve('less-loader'),
                    options: {
                        // theme vars, also can use theme.js instead of this.
                        modifyVars: {
                            "@brand-primary": "#8BC34A", // 正常
                            "@brand-primary-tap": "#4CAF50", // 按下
                        },
                    },
                },
            ]
        }
    );

    // css-modules
    config.module.rules[1].oneOf.unshift(
        {
            test: /\.css$/,
            exclude: /node_modules|antd-mobile\.css/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[local]___[hash:base64:5]'
                    },
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                            }),
                        ],
                    },
                },
            ]
        }
    );

    // file-loader exclude
    let l = getLoader(config.module.rules, fileLoaderMatcher);
    l.exclude.push(/\.less$/);

    return config;
};
```
### 2.4 引入路由
#### 2.4.1 下载路由包
```
npm install --save react-router-dom
```
#### 2.4.2 创建路由组件
"注册"路由组件: containers/register/register.jsx
```
/*
用户注册的路由组件
 */
import React from 'react';

export default class Register extends React.Component {
    render(){
      return(
          <div>
              register
          </div>
      )
    }
 }

```
“登陆”路由组件: containers/login/login.jsx
```
/*
* 用户登录的路由组件
* */
import React from 'react';

export default class Login extends React.Component {
    render(){
      return(
          <div>
              login
          </div>
      )
    }
 }
```
"应用面板"路由组件: containers/dashboard/dashboard.jsx
```
/*
* 应用面板的路由组件
* */
import React from 'react';

export default class Dashboard extends React.Component {
    render(){
      return(
        <div>dashboard</div>
      )
    }
 }
```
映射路由：index.js
```
/**
 * Created by Bianrongcheng on 2018
 */
//入口js
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Login from './containers/login';
import Register from './containers/register';
import Dashboard from './containers/dashboard';

ReactDOM.render((
    <BrowserRouter>
       <Switch>
           <Route path='/login' component={Login}/>
           <Route path='/register' component={Register}/>
           <Route component={Dashboard}/>
       </Switch>
    </BrowserRouter>
), document.getElementById('root'));
```
### 2.5引入redux
#### 2.5.1下载相关依赖包
```
npm install --save redux react-redux redux-thunk
npm install --save-dev redux-devtools-extension
```
#### 2.5.2创建redux相关组件
创建reducers：redux/reducers.js
```
/**
 * Created by Bianrongcheng on 2018
 */
/*
包含多个用于生成新的state的reducer函数的模块
 */
import {combineReducers} from 'redux'

function xxx(state=0,action) {
  return state
}

export default combineReducers({
    xxx
})
```
创建store：redux/store.js
```
/**
 * Created by Bianrongcheng on 2018
 */
/*
redux最核心的store对象模块
 */

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
```
index.js修改
```
/**
 * Created by Bianrongcheng on 2018
 */
//入口js
import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Login from './containers/login';
import Register from './containers/register';
import Dashboard from './containers/dashboard';
import store from './redux/store';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
```
### 2.6 注册/登陆界面
#### 2.6.1 Logo组件
显示logo图片的UI组件：components/logo/logo.jsx
```
/*
* 显示logo图片的UI组件
* */

import React from 'react';
import logoImg from '../assets/imgs/club-180.png';
import '../assets/css/logo.less';

export default class Logo extends React.Component {
    render(){
      return(
        <div className='logo-container'>
            <img src={logoImg} alt="社团招募系统"/>
        </div>
      )
    }
 }
```
logo图片的样式：assets/css/logo.less
```
.logo-container{
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px;
}
```
#### 2.6.2登陆组件: containers/login/login.jsx
```
/*
* 用户登录的路由组件
* */
import React from 'react';
import {Button,WhiteSpace,WingBlank,InputItem,List} from 'antd-mobile';


import Logo from '../../components/logo';

export default class Login extends React.Component {
    //初始默认状态
    state = {
        name: '',
        pwd: '',
    };

    //前往注册界面
    goRegister =() => {
        this.props.history.replace('/register')
    };

    
    //登录跳转
    login = () => {
        console.log('登录')
    };

    handleChange = (name,value) =>{
        this.setState({[name]: value})
    };


    render(){
      return(
          <div>
              {/*引入logo图片UI组件*/}
              <Logo/>
              <WingBlank>
                  <List>
                      <InputItem placeholder='输入用户名' onChange={val => this.handleChange('name', val)}>用户名</InputItem>
                      <WhiteSpace />
                      <InputItem type='password' placeholder='输入密码' onChange={val => this.handleChange('pwd', val)}>密码</InputItem>
                      <WhiteSpace />
                      <Button type='primary' onClick={this.login}>登录</Button>
                      <WhiteSpace />
                      <Button onClick={this.goRegister}>还没有账号</Button>
                  </List>
              </WingBlank>
          </div>
      )
    }
 }
```
#### 2.6.3注册组件: containers/register/register.jsx
```
/*
用户注册的路由组件
 */
import React from 'react';
import {Button,List,InputItem,WingBlank,WhiteSpace,Radio} from 'antd-mobile';
import Logo from '../../components/logo'

const RadioItem = Radio.RadioItem
export default class Register extends React.Component {

    state = {
        name:'',
        pw:'',
        pw2:'',
        type:'studs'
    };

    handleChange =(name,value) =>{
        this.setState({[name]:value})
    };

    //前往登录界面
    gologin =() =>{
      this.props.history.replace('/login')
    };

    render(){
        const {type} =this.state;

      return(
          <div>
              <Logo/>
              <WingBlank>
                  <List>
                      <InputItem onChange={val => this.handleChange('name', val)} placeholder='输入用户名'>用户名</InputItem>
                      <WhiteSpace />
                      <InputItem onChange={val => this.handleChange('pwd', val)} placeholder='输入密码' type='password'>密码</InputItem>
                      <WhiteSpace />
                      <InputItem onChange={val => this.handleChange('pwd2', val)} placeholder='再次输入密码' type='password'>确认密码</InputItem>
                      <WhiteSpace />
                      <RadioItem checked={type === 'studs'}  onChange={() => this.handleChange('type', 'studs')}>学生</RadioItem>
                      <WhiteSpace />
                      <RadioItem checked={type === 'club' }  onChange={() => this.handleChange('type', 'club')}>社团</RadioItem>
                      <WhiteSpace />
                      <Button type='primary'>注册</Button>
                      <WhiteSpace />
                      <Button onClick={this.gologin}>已经有账号</Button>
                  </List>
              </WingBlank>
          </div>
      )
    }
 }


```
### 2.7搭建后台
#### 2.7.1下载相关依赖包
```
npm install --save express 
npm install -g nodemon
```
#### 2.7.2配置服务器数据：server/server.js
```
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
```
#### 2.7.3配置启动服务器命令: package.json中"scripts"添加
```
"server": "nodemon server/server.js"
```
#### 2.7.4运行访问
```
npm run server
http://localhost:4000
```
### 2.8使用mongoose操作数据库
#### 2.8.1下载依赖包
```
npm install --save mongoose
```
#### 2.8.2配置数据库文件server/models.js
```
/**
 * Created by Bianrongcheng on 2018
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/clubs');
const conn = mongoose.connection;
conn.on('connected',()=>{
    console.log('连接数据库成功！')
});
```