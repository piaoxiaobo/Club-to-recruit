/**
 * Created by Bianrongcheng on 2018
 */
/*
包含多个用于生成新的state的reducer函数的模块
 */
import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'

const initUser = {
    name:'',
    type:'',
    msg:'',
    redirectTo:''
};

function user(state=initUser,action) {
    switch(action.type){
        case AUTH_SUCCESS:
            return {...action.data,redirectTo:'/'};
        case ERROR_MSG:
            return {...state,msg:action.data};
        default:
            return state;
    }
}



export default combineReducers({
    user
})