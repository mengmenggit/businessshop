import store from "@/store/index.js"
import axios from "axios"
import { ElLoading } from "element-plus"
import {ElMessage} from "element-plus"
//使用create创建axios实例
let loadingObj = null
const Service = axios.create({
    timeout:8000,
    baseURL:"http://localhost:9001",
    headers:{
        "Content-type":"application/json;charset=utf-8",
        "Authorization":store.state.uInfo.userInfo.token
    }
})
// 请求拦截-增加loding，对请求统一做处理
Service.interceptors.request.use(config=>{
    loadingObj=ElLoading.service({
        lock:true,
        text:'Loading',
        background:'rgba(0,0,0,0.7)',
    })
    return config
})
// 响应拦截-对返回值做处理
Service.interceptors.response.use(response=>{
    loadingObj.close()
    const data = response.data
    if(!data.data){
        ElMessage.error(data.data.token||"请求出错")
        // 请求出错
        return data
    }
    return data
},error=>{
    loadingObj.close()
    ElMessage({
        message:"服务器错误",
        type:"error",
        duration:2000
    })
})
// post请求
export const post=config=>{
    return Service({
        ...config,
        method:"post",
        data:config.data
    })
}
// get请求
export const get=config=>{
    return Service({
        ...config,
        method:"get",
        params:config.data
    })
}