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