import axios from'axios'

const service = axios.create({
    baseURL:'http://192.168.10.144:3333/',
})

// 请求拦截
service.interceptors.request.use(config=>config)

//请求头
service.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'


// 响应拦截

service.interceptors.response.use(res=>{
    return res;
},
err=>{
    return Promise.reject(err)
}
)

export default service