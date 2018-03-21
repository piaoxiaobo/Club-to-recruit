/**
 * Created by Bianrongcheng on 2018
 */
import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
    if (type === 'GET') {
        let dataStr = '';
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
        });
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr
        }
        // 发送get请求
        return axios.get(url)
    }else{
      return axios.post(url,data)
    }
}