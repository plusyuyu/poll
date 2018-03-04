/**
	axios的配置文件
	1、设置post数据格式为表单格式
	2、设置基路径
	3、序列化字符串
*/
import axios from 'axios'
import qs from 'qs'
//配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://localhost:8888/poll/';

axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axios;
