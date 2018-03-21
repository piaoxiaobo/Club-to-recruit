/**
 * Created by Bianrongcheng on 2018
 */
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'
import {reqLogin,reqRegister} from '../api/index'


//同步错误消息
const errorMsg = (msg) =>({type:ERROR_MSG,data:msg});
//同步成功响应
const authSuccess = (user) =>({type:AUTH_SUCCESS,data:user});

//异步注册
export const register =({name,pwd,pwd2,type}) => {

    if(!name || !pwd ){
        return errorMsg('请输入用户名或密码！');
    }else if(pwd !== pwd2){
        return errorMsg('两次输入密码不一致！')
    }

    return async dispatch =>{

        const response = await reqRegister({name,pwd,type});
        const result =response.data;

        if(result.code === 0){
            dispatch(authSuccess(result.data))
        }else{
            dispatch(errorMsg(result.msg))
        }

    }
};


//异步登录
export const login =({name,pwd}) => {
    if(!name || !pwd ){
        return errorMsg('请输入用户名或密码！');
    }

    return async dispatch =>{

        const response = await reqLogin({name,pwd});
        const result =response.data;

        if(result.code === 0){
            dispatch(authSuccess(result.data))
        }else{
            dispatch(errorMsg(result.msg))
        }

    }
};
