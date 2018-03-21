/*
* 用户登录的路由组件
* */
import React from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/actions'
import {Button,WhiteSpace,WingBlank,InputItem,List} from 'antd-mobile';


import Logo from '../../components/logo';

class Login extends React.Component {
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
    handleLogin = () =>{
        this.props.login(this.state)
    };

    handleChange = (name,value) =>{
        this.setState({[name]: value})
    };


    render(){
        const {redirectTo, msg} = this.props;
        if (redirectTo) {
            return <Redirect to={redirectTo}/>
        }
      return(
          <div>
              {/*引入logo图片UI组件*/}
              <Logo/>
              {msg?<p className='error-msg'>{msg}</p>:null}
              <WingBlank>
                  <List>
                      <InputItem placeholder='输入用户名' onChange={val => this.handleChange('name', val)}>用户名</InputItem>
                      <WhiteSpace />
                      <InputItem type='password' placeholder='输入密码' onChange={val => this.handleChange('pwd', val)}>密码</InputItem>
                      <WhiteSpace />
                      <Button type='primary' onClick={this.handleLogin} >登录</Button>
                      <WhiteSpace />
                      <Button onClick={this.goRegister}>还没有账号</Button>
                  </List>
              </WingBlank>
          </div>
      )
    }
 }

export default connect(
    state =>state.user,
    {login}
)(Login);
