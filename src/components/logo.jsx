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