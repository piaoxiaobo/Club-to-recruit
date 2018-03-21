# 社团招募系统（Club-to-recruit）
*author: [卞荣成](https://www.itsolotime.com)
version：V1.0.0
first publish： 小泊随記
state: 暂无更新*

##  第一章 准备
### 1.1项目描述
1)此项目为一个前后台分离的社团招募系统, 包括前端应用和后端应用
2)包括用户注册/登陆, 社团/学生列表, 实时聊天等模块
3)前端: 使用React全家桶+ES6+Webpack等技术
4)后端: 使用Node + express + mongodb + socketIO等技术
5)采用模块化、组件化、工程化的模式开发

### 1.2技术选型
![](https://i.imgur.com/hA4lCJ8.png)

### 1.3前端路由
![](https://i.imgur.com/gidZrcp.png)

### 1.4API接口
![](https://i.imgur.com/3hcXvop.png)

### 1.5使用技术
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