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

