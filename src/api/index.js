/**
 * Created by Bianrongcheng on 2018
 */
import ajax from './ajax';

//请求注册
export const reqRegister = (user) =>ajax('/api/register',user,'POST');

//请求登录
export const reqLogin = (user) =>ajax('/api/login',user,'POST');